import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, productOrCategory, quantity, message } = body;

    // Server-side validation
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

    // In production, send via SendGrid / Resend / Nodemailer or save to database
    console.log('=== [AQUALUXIS LIGHT] New Quote / Contact Inquiry Received ===', {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      company: (company || '').trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      productOrCategory: productOrCategory || 'General Inquiry',
      quantity: quantity || 'Not specified',
      message: (message || '').trim(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully received. Our aquatic engineering team will contact you shortly.',
      inquiryId: `AQLX-${Date.now().toString(36).toUpperCase()}`
    });
  } catch (err: any) {
    console.error('Error processing contact submission:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
