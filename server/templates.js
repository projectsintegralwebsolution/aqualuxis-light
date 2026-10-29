/**
 * Aqualuxis Light - Responsive HTML Email Templates
 */

function sanitize(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 1. User Confirmation / Thank You Email
 */
function getUserConfirmationTemplate(data) {
  const safeName = sanitize(data.name || 'Valued Customer');
  const safeProduct = sanitize(data.productOrCategory || 'Underwater Lighting Solutions');
  const safeQuantity = sanitize(data.quantity || 'Standard specification');
  const safeMessage = sanitize(data.message || 'No additional notes provided');
  const safePhone = sanitize(data.phone || 'N/A');
  const safeCompany = sanitize(data.company || 'N/A');
  const year = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Aqualuxis Light</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(4, 26, 51, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #041A33 0%, #0a2e5c 60%, #087FE5 100%); padding: 36px 32px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;">
                AQUALUXIS<span style="color: #00E5FF;"> LIGHT</span>
              </h1>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 13px; letter-spacing: 0.5px;">
                Commercial Pool &amp; Fountain Lighting Solutions
              </p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 36px 32px;">
              <h2 style="margin: 0 0 16px 0; color: #041a33; font-size: 20px; font-weight: 700;">
                Inquiry Received, ${safeName}
              </h2>
              <p style="margin: 0 0 20px 0; color: #475569; font-size: 14px; line-height: 1.6;">
                Thank you for reaching out to <strong>Aqualuxis Light</strong>. We have received your technical inquiry. Our engineering and lighting sales team is reviewing your project requirements and will be in touch with you shortly with detailed specifications and pricing.
              </p>

              <!-- Summary Card -->
              <table role="presentation" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; margin: 24px 0; border-collapse: separate; border-spacing: 0;">
                <tr>
                  <td colspan="2" style="padding: 14px 18px; background-color: #041A33; color: #00E5FF; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-top-left-radius: 7px; border-top-right-radius: 7px;">
                    Summary of Your Request
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600; width: 38%; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #1e293b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${safeName}</td>
                </tr>
                ${data.company ? `
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Company / Firm:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${safeCompany}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Contact Phone:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Product / Category:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #087FE5; font-weight: 600; border-bottom: 1px solid #e2e8f0;">${safeProduct}</td>
                </tr>
                ${data.quantity ? `
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Quantity / Units:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">${safeQuantity}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 12px 18px; font-size: 13px; color: #64748b; font-weight: 600;">Message / Notes:</td>
                  <td style="padding: 12px 18px; font-size: 13px; color: #1e293b; line-height: 1.5;">${safeMessage}</td>
                </tr>
              </table>

              <p style="margin: 24px 0 8px 0; color: #475569; font-size: 13px; line-height: 1.6;">
                Need immediate urgent technical assistance? Feel free to contact our direct engineering desk:
              </p>
              <p style="margin: 0; font-size: 14px; font-weight: 600; color: #087FE5;">
                Email: <a href="mailto:info@aqualuxislight.com" style="color: #087FE5; text-decoration: none;">info@aqualuxislight.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #041a33; padding: 24px 32px; text-align: center; border-top: 1px solid #087FE5;">
              <p style="margin: 0 0 6px 0; color: #94a3b8; font-size: 12px;">
                &copy; ${year} Aqualuxis Light. Premium Submersible &amp; Aquatic Lighting. All rights reserved.
              </p>
              <p style="margin: 0; color: #64748b; font-size: 11px;">
                This is an automated confirmation email regarding your inquiry submission on <a href="https://aqualuxislight.com" style="color: #00E5FF; text-decoration: none;">aqualuxislight.com</a>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * 2. Admin Lead Notification Email (sent to info@aqualuxislight.com and integralwebsolution@gmail.com)
 */
function getAdminNotificationTemplate(data, recipientType) {
  const safeName = sanitize(data.name || 'Not provided');
  const safeEmail = sanitize(data.email || 'Not provided');
  const safePhone = sanitize(data.phone || 'Not provided');
  const safeCompany = sanitize(data.company || 'Not provided');
  const safeProduct = sanitize(data.productOrCategory || 'General Inquiry');
  const safeQuantity = sanitize(data.quantity || 'Not specified');
  const safeMessage = sanitize(data.message || 'No additional message');
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const label = recipientType === 'secondary'
    ? 'Agency Copy: Integral Web Solution'
    : 'Primary Notice: Aqualuxis Light Desk';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" style="max-width: 620px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.3); border: 1px solid #334155;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #041A33 0%, #087FE5 100%); padding: 28px 32px;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(0, 229, 255, 0.15); border: 1px solid #00E5FF; color: #00E5FF; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${label}
                    </span>
                    <h1 style="margin: 12px 0 4px 0; color: #ffffff; font-size: 22px; font-weight: 800;">
                      New Website Inquiry Received
                    </h1>
                    <p style="margin: 0; color: #bae6fd; font-size: 12px;">
                      Received at: ${timestamp} IST
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 28px 32px;">
              
              <table role="presentation" width="100%" style="border: 1px solid #e2e8f0; border-radius: 8px; border-collapse: separate; border-spacing: 0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; width: 34%; border-bottom: 1px solid #e2e8f0;">
                    Client Name
                  </td>
                  <td style="padding: 12px 16px; font-size: 14px; font-weight: 700; color: #041a33; border-bottom: 1px solid #e2e8f0;">
                    ${safeName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                    Email Address
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #087fe5; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${safeEmail}" style="color: #087fe5; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #041a33; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                    <a href="tel:${safePhone.replace(/\s+/g, '')}" style="color: #041a33; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                    Company / Firm
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">
                    ${safeCompany}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                    Product / Category
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #087FE5; font-weight: 700; border-bottom: 1px solid #e2e8f0;">
                    ${safeProduct}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">
                    Estimated Quantity
                  </td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #1e293b; border-bottom: 1px solid #e2e8f0;">
                    ${safeQuantity}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 16px; background-color: #f8fafc; font-size: 13px; font-weight: 700; color: #475569; vertical-align: top;">
                    Message / Specs
                  </td>
                  <td style="padding: 14px 16px; font-size: 13px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>

              <!-- Quick Action Box -->
              <table role="presentation" width="100%" style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 14px 18px;">
                <tr>
                  <td>
                    <p style="margin: 0; font-size: 13px; color: #166534; font-weight: 600;">
                      💡 Quick Actions: You can directly hit <strong>Reply</strong> to respond back to <em>${safeName} &lt;${safeEmail}&gt;</em>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Admin Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 18px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                Aqualuxis Light System Notification &bull; Delivered via Node.js/Express Backend
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

module.exports = {
  getUserConfirmationTemplate,
  getAdminNotificationTemplate,
};
