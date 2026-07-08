import nodemailer from 'nodemailer'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sales@hsgloballogistic.com'

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function createWorkingTransporter(user, pass) {
  // Try multiple Titan SMTP configurations
  const configs = [
    { host: 'smtp.titan.email', port: 465, secure: true },
    { host: 'smtp.titan.email', port: 587, secure: false },
    { host: 'smtp0101.titan.email', port: 465, secure: true },
    { host: 'smtp0101.titan.email', port: 587, secure: false },
  ]

  for (const cfg of configs) {
    try {
      const transporter = nodemailer.createTransport({
        host: cfg.host,
        port: cfg.port,
        secure: cfg.secure,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 8000,
      })
      await transporter.verify()
      console.log(`Connected via ${cfg.host}:${cfg.port}`)
      return transporter
    } catch (e) {
      console.log(`Failed ${cfg.host}:${cfg.port} — ${e.message}`)
    }
  }
  throw new Error('Could not connect to any Titan SMTP server. Check your email and password.')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    const { SMTP_USER, SMTP_PASS } = process.env

    if (!SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({ error: 'Email service is not configured yet. Please call or email us directly.' })
    }

    const transporter = await createWorkingTransporter(SMTP_USER, SMTP_PASS)

    const safeName    = escapeHtml(name)
    const safeEmail   = escapeHtml(email)
    const safePhone   = escapeHtml(phone || 'Not provided')
    const safeService = escapeHtml(service || 'General Inquiry')
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    await transporter.sendMail({
      from: `"HS Global Logistics Website" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${service || 'General Inquiry'} (${name})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#0B2A4A;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Service Interested In:</strong> ${safeService}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#F7F9FC; padding:14px; border-radius:8px;">${safeMessage}</p>
        </div>
      `,
    })

    await transporter.sendMail({
      from: `"HS Global Logistics" <${SMTP_USER}>`,
      to: email,
      subject: 'We received your request — HS Global Logistics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color:#0B2A4A;">Thanks for reaching out, ${safeName}!</h2>
          <p>We\u2019ve received your request about <strong>${safeService}</strong> and a member of our team will contact you within one business day.</p>
          <p style="margin-top:24px;">HS Global Logistics<br />101 Continental Blvd Ste 260, El Segundo, CA 90245<br />(206) 569 8093<br />sales@hsgloballogistic.com</p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })

  } catch (err) {
    console.error('Contact form error:', err)
    return res.status(500).json({
      error: 'We could not send your message right now. Please try again or email us directly.',
      debug: err.message,
      code: err.code,
    })
  }
}
