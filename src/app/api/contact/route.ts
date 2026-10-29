import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body || {};

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid full name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid phone or WhatsApp number.' },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';

    // Forward request to Node & Express backend
    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    } catch (backendErr) {
      console.warn('Express server not directly reachable at ' + backendUrl + ', executing mailer fallback:', backendErr);

      // Fallback: If express server isn't running concurrently, process directly via mailer module
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { sendInquiryEmails } = require('../../../../server/mailer');
        const mailResult = await sendInquiryEmails({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          company: (body.company || '').trim(),
          productOrCategory: body.productOrCategory || 'General Inquiry',
          quantity: body.quantity || 'Not specified',
          message: (body.message || '').trim(),
        });

        return NextResponse.json({
          success: true,
          message: 'Your inquiry has been successfully received. Our aquatic engineering team will contact you shortly.',
          inquiryId: `AQLX-${Date.now().toString(36).toUpperCase()}`,
          mailResult,
        });
      } catch (mailErr: any) {
        console.error('Direct mailer error:', mailErr);
        return NextResponse.json(
          { success: false, message: mailErr.message || 'Error processing inquiry.' },
          { status: 500 }
        );
      }
    }
  } catch (err: any) {
    console.error('Error in contact API route:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
