import { useState } from 'react'
import { motion } from 'framer-motion'
import RouteLine from '../components/RouteLine.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: 'Dispatch Services',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="eyebrow">Contact Us</div>
            <h1>Let's get your business moving</h1>
            <p className="page-hero-sub">Reach out for dispatch support, trailer rentals, or general questions — our team responds fast.</p>
          </motion.div>
        </div>
      </section>

      <RouteLine />

      <section className="section">
        <div className="container contact-grid">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="contact-info">
            <div className="card info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Our Address</h3>
                <p className="text-muted">101 Continental Blvd Ste 260,<br />El Segundo, CA 90245, United States</p>
              </div>
            </div>
            <div className="card info-card">
              <div className="info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p className="text-muted"><a href="tel:+12065698093">(206) 569 8093</a></p>
              </div>
            </div>
            <div className="card info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h3>Email Us</h3>
                <p className="text-muted"><a href="mailto:sales@hsgloballogistic.com">sales@hsgloballogistic.com</a></p>
              </div>
            </div>
            <div className="card info-card">
              <div className="info-icon">🕒</div>
              <div>
                <h3>Open Hours</h3>
                <p className="text-muted">Monday – Friday<br />9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="card map-card">
              <iframe
                title="HS Global Logistics office location"
                src="https://www.google.com/maps?q=101+Continental+Blvd+Ste+260,+El+Segundo,+CA+90245&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="card form-card">
            <h2>Request A Quote</h2>
            <p className="text-muted" style={{ marginBottom: 26 }}>Fill out the form and our team will get back to you within one business day.</p>

            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <label>
                  <span>Full Name</span>
                  <input type="text" name="name" required value={form.name} onChange={onChange} placeholder="John Miller" />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="(555) 123-4567" />
                </label>
              </div>
              <label>
                <span>Email Address</span>
                <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="you@company.com" />
              </label>
              <label>
                <span>Service Interested In</span>
                <select name="service" value={form.service} onChange={onChange}>
                  <option>Dispatch Services</option>
                  <option>Dry Van Trailer Rental</option>
                  <option>Reefer Trailer Rental</option>
                  <option>Fleet Support Solutions</option>
                  <option>General Inquiry</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" required value={form.message} onChange={onChange} placeholder="Tell us about your fleet and what you need..." />
              </label>

              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-note success">Thanks — your message has been sent. We'll be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className="form-note error">{errorMsg}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <style>{`
        .page-hero { padding: 72px 0 44px; background: linear-gradient(180deg, #EEF7F6 0%, var(--bg) 60%); }
        .page-hero h1 { font-size: clamp(2rem, 4.4vw, 2.9rem); margin: 4px 0 18px; }
        .page-hero-sub { font-size: 1.08rem; color: var(--text-muted); max-width: 560px; }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 32px;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .info-card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }
        .info-icon {
          font-size: 1.3rem;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--teal-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .info-card:hover .info-icon {
          transform: scale(1.1) rotate(-4deg);
        }
        .info-card h3 { font-size: 0.98rem; margin-bottom: 4px; }
        .info-card a:hover { color: var(--amber-dark); }
        .map-card { overflow: hidden; padding: 0; }
        .map-card iframe { display: block; }

        .form-card { padding: 40px; }
        .form-card h2 { font-size: 1.5rem; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        label {
          display: block;
          margin-bottom: 18px;
        }
        label span {
          display: block;
          font-weight: 600;
          font-size: 0.86rem;
          color: var(--navy);
          margin-bottom: 7px;
        }
        input, select, textarea {
          width: 100%;
          padding: 13px 15px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.96rem;
          color: var(--text);
          background: var(--white);
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--teal);
          box-shadow: 0 0 0 4px rgba(184,134,43,0.16);
        }
        textarea { resize: vertical; min-height: 110px; }
        .form-note {
          margin-top: 16px;
          font-size: 0.92rem;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
        }
        .form-note.success { background: #E9FBF3; color: var(--success); }
        .form-note.error { background: #FDECEC; color: #C0392B; }

        .btn-block:disabled {
          animation: pulseSend 1.1s ease-in-out infinite;
          cursor: progress;
        }
        @keyframes pulseSend {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.72; }
        }
        @media (max-width: 940px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr; }
          .form-card { padding: 28px 22px; }
        }
      `}</style>
    </>
  )
}
