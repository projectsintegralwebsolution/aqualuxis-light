const path = require('path');
// Load environment variables from .env file
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config(); // Fallback for local directory

const express = require('express');
const cors = require('cors');
const { sendInquiryEmails } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Root & Health check routes
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'Aqualuxis Light Express Backend API',
    endpoints: {
      health: 'GET /api/health',
      submitInquiry: 'POST /api/contact',
    },
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Contact / Quote Form Submission Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, productOrCategory, quantity, message } = req.body || {};

    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid full name.',
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Validate phone (allow quick footer default or min 6 chars)
    if (!phone || typeof phone !== 'string' || phone.trim().length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone or WhatsApp number.',
      });
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: (company || '').trim(),
      productOrCategory: (productOrCategory || 'General Inquiry').trim(),
      quantity: (quantity || '').trim(),
      message: (message || '').trim(),
      receivedAt: new Date().toISOString(),
    };

    console.log('📬 [FORM RECEIVED]:', {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      product: payload.productOrCategory,
    });

    // Send 3-way email
    const mailResult = await sendInquiryEmails(payload);

    const inquiryId = `AQLX-${Date.now().toString(36).toUpperCase()}`;

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been successfully received. Our aquatic engineering team will contact you shortly.',
      inquiryId,
      mailResult,
    });
  } catch (error) {
    console.error('❌ [BACKEND ERROR] Contact submission failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again or WhatsApp our desk.',
      error: error.message,
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
  });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`🚀 Aqualuxis Light Express Server`);
    console.log(`📡 Running on: http://localhost:${PORT}`);
    console.log(`📨 Form Endpoint: POST http://localhost:${PORT}/api/contact`);
    console.log(`===============================================`);
  });
}

module.exports = app;
