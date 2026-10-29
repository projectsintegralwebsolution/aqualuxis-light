const nodemailer = require('nodemailer');
const {
  getUserConfirmationTemplate,
  getAdminNotificationTemplate,
} = require('./templates');

function getTransporter() {
  const user = process.env.EMAIL_USER || 'integralwebsolution@gmail.com';
  const pass = process.env.EMAIL_PASS || '';

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends 3 emails on form submission:
 * 1. User confirmation email -> person who submitted
 * 2. Primary admin email -> info@aqualuxislight.com
 * 3. Secondary admin email -> integralwebsolution@gmail.com
 */
async function sendInquiryEmails(formData) {
  const emailUser = process.env.EMAIL_USER || 'integralwebsolution@gmail.com';
  const emailPass = process.env.EMAIL_PASS || '';
  const adminPrimary = process.env.ADMIN_EMAIL_PRIMARY || 'info@aqualuxislight.com';
  const adminSecondary = process.env.ADMIN_EMAIL_SECONDARY || 'integralwebsolution@gmail.com';

  if (!emailPass || emailPass === 'your_gmail_app_password_here') {
    console.warn(
      '⚠️ [EMAIL WARNING] EMAIL_PASS is missing or set to placeholder in .env. ' +
      'Please update EMAIL_PASS with the Gmail App Password for integralwebsolution@gmail.com.'
    );
    // When password is not yet configured, we still return a graceful object so the backend does not crash
    return {
      success: true,
      simulated: true,
      message: 'Email credentials not fully configured yet; simulated email dispatch.',
      details: {
        toUser: formData.email,
        toPrimary: adminPrimary,
        toSecondary: adminSecondary,
      },
    };
  }

  const transporter = getTransporter();

  // 1. Email to Submitter
  const userMailOptions = {
    from: `"Aqualuxis Light" <${emailUser}>`,
    to: formData.email,
    replyTo: adminPrimary,
    subject: 'Thank You for Contacting Aqualuxis Light - Inquiry Received',
    html: getUserConfirmationTemplate(formData),
  };

  // 2. Email to info@aqualuxislight.com
  const primaryMailOptions = {
    from: `"Aqualuxis Website Inquiry" <${emailUser}>`,
    to: adminPrimary,
    replyTo: formData.email,
    subject: `[New Inquiry] ${formData.name} - ${formData.productOrCategory || 'General Inquiry'}`,
    html: getAdminNotificationTemplate(formData, 'primary'),
  };

  // 3. Email to integralwebsolution@gmail.com
  const secondaryMailOptions = {
    from: `"Aqualuxis Website Inquiry" <${emailUser}>`,
    to: adminSecondary,
    replyTo: formData.email,
    subject: `[Lead Notification] ${formData.name} - ${formData.productOrCategory || 'General Inquiry'}`,
    html: getAdminNotificationTemplate(formData, 'secondary'),
  };

  const results = await Promise.allSettled([
    transporter.sendMail(userMailOptions),
    transporter.sendMail(primaryMailOptions),
    transporter.sendMail(secondaryMailOptions),
  ]);

  const outcomes = {
    userEmail: results[0].status === 'fulfilled' ? 'sent' : results[0].reason?.message || 'failed',
    adminPrimary: results[1].status === 'fulfilled' ? 'sent' : results[1].reason?.message || 'failed',
    adminSecondary: results[2].status === 'fulfilled' ? 'sent' : results[2].reason?.message || 'failed',
  };

  console.log('📧 [EMAIL DISPATCH RESULTS]:', outcomes);

  // If at least one succeeded, or check errors
  const allFailed = results.every((r) => r.status === 'rejected');
  if (allFailed) {
    throw new Error(`Email sending failed: ${results[0].reason?.message || 'Unknown error'}`);
  }

  return {
    success: true,
    outcomes,
  };
}

module.exports = {
  sendInquiryEmails,
  getTransporter,
};
