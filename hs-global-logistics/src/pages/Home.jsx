import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import RouteLine from '../components/RouteLine.jsx'
import CTASection from '../components/CTASection.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import dryvan from '../assets/dryvan.jpg'
import reefer from '../assets/reefer.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const services = [
  {
    icon: '🚚',
    title: 'Dispatch Services',
    text: 'Load booking, rate negotiation, and route planning so your trucks stay loaded and compliant.',
  },
  {
    icon: '🚛',
    title: 'Trailer Rentals',
    text: 'Dry van and reefer trailers, well-maintained and ready for every type of cargo.',
  },
  {
    icon: '📦',
    title: 'Fleet Support Solutions',
    text: 'Back-office support that keeps growing fleets organized, compliant, and efficient.',
  },
  {
    icon: '⚙️',
    title: 'End-to-End Logistics',
    text: 'From pickup to delivery, we manage the details so you can focus on the road.',
  },
]

const values = [
  { icon: '🤝', text: 'Reliability and transparency' },
  { icon: '🎯', text: 'Customer focused' },
  { icon: '🏆', text: 'Industry expertise' },
  { icon: '⭐', text: 'Commitment to excellence' },
]

const whyUs = [
  { icon: '🚚', title: 'Experienced Dispatch Experts', text: 'Seasoned dispatchers who know how to secure the best-paying freight.' },
  { icon: '💰', title: 'Maximize Your Earnings', text: 'Smart rate negotiation and route planning to boost your bottom line.' },
  { icon: '🚛', title: 'Reliable Trailer Rentals', text: 'A well-maintained fleet of dry vans and reefers, ready when you need them.' },
  { icon: '🤝', title: 'Built on Trust & Transparency', text: 'Clear communication and honest pricing at every step.' },
  { icon: '⏱️', title: '24/7 Support You Can Count On', text: 'Round-the-clock dispatcher assistance for uninterrupted operations.' },
  { icon: '⚙️', title: 'Complete Logistics Solutions', text: 'One partner for dispatch, trailers, and fleet support — start to finish.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-copy">
            <div className="eyebrow">Nationwide Dispatch &amp; Trailer Solutions</div>
            <h1>Reliable Dispatch &amp; Trailer Rental Solutions</h1>
            <p className="hero-sub">
              HS Global Logistics delivers efficient dispatch services and high-quality trailer rentals to keep your business moving — on time, every time.
            </p>
            <div className="hero-actions">
              <NavLink to="/contact" className="btn btn-primary">Get Started Today</NavLink>
              <NavLink to="/contact" className="btn btn-ghost">Request A Quote</NavLink>
            </div>
            <div className="hero-stats">
              <div><strong>24/7</strong><span>Dispatcher support</span></div>
              <div><strong>50</strong><span>States covered</span></div>
              <div><strong>2</strong><span>Trailer types on demand</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="hero-art"
            aria-hidden="true"
          >
            <svg viewBox="0 0 520 420" fill="none" className="hero-svg">
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E4F8F6" />
                  <stop offset="100%" stopColor="#F7F9FC" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="520" height="420" rx="28" fill="url(#skyGrad)" />
              <path d="M0 330 Q130 300 260 330 T520 330" stroke="#0B2A4A" strokeOpacity="0.08" strokeWidth="60" fill="none" />
              <path d="M20 300 Q160 250 260 290 T500 260" stroke="#FF7A3D" strokeWidth="4" strokeDasharray="2 16" strokeLinecap="round" fill="none" />
              <circle cx="20" cy="300" r="7" fill="#0B2A4A" />
              <circle cx="500" cy="260" r="9" fill="#FF7A3D" />
              <g transform="translate(150,150)">
                <rect x="0" y="40" width="150" height="80" rx="8" fill="#0B2A4A" />
                <rect x="150" y="60" width="60" height="60" rx="6" fill="#123B63" />
                <rect x="158" y="70" width="26" height="24" rx="3" fill="#E4F8F6" />
                <circle cx="40" cy="128" r="16" fill="#172033" />
                <circle cx="40" cy="128" r="7" fill="#F7F9FC" />
                <circle cx="180" cy="128" r="16" fill="#172033" />
                <circle cx="180" cy="128" r="7" fill="#F7F9FC" />
                <rect x="14" y="52" width="122" height="14" rx="3" fill="#FF7A3D" />
                <rect x="14" y="72" width="122" height="8" rx="3" fill="#1B4E80" />
                <rect x="14" y="86" width="122" height="8" rx="3" fill="#1B4E80" />
              </g>
              <circle cx="440" cy="90" r="34" fill="#0FB5AE" fillOpacity="0.16" />
              <circle cx="70" cy="80" r="20" fill="#FF7A3D" fillOpacity="0.16" />
            </svg>
          </motion.div>
        </div>
      </section>

      <RouteLine />

      {/* ABOUT PREVIEW */}
      <section className="section about-preview">
        <div className="container grid-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <div className="eyebrow">About Us</div>
            <h2>A trusted partner in the transportation industry</h2>
            <p className="text-muted" style={{ marginTop: 16, fontSize: '1.05rem' }}>
              HS Global Logistics offers professional dispatch services and reliable trailer rental solutions. Our mission is to simplify logistics operations for trucking businesses by providing efficient load management and high-quality equipment.
            </p>
            <div className="value-pills">
              {values.map((v) => (
                <span className="pill" key={v.text}><span>{v.icon}</span>{v.text}</span>
              ))}
            </div>
            <NavLink to="/about" className="btn btn-ghost" style={{ marginTop: 28 }}>Learn More About Us</NavLink>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="stat-cluster">
            <div className="stat-card stat-card--lg">
              <span className="stat-num">100%</span>
              <span className="stat-label">Load compliance handled for you</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Dispatcher assistance</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">2</span>
              <span className="stat-label">Trailer types: dry van &amp; reefer</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section services-preview" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Services</div>
            <h2>Powering your logistics with reliable, scalable solutions</h2>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="card service-card"
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <NavLink to="/services" className="btn btn-primary">View All Services</NavLink>
          </div>
        </div>
      </section>

      {/* TRAILERS SHOWCASE */}
      <section className="section trailers-preview">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Trailers</div>
            <h2>Reliable trailers built for every type of cargo</h2>
          </motion.div>

          <div className="trailer-grid">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="card trailer-card">
              <img src={dryvan} alt="HS Global Logistics dry van trailers parked at a warehouse dock" loading="lazy" />
              <div className="trailer-card-body">
                <h3>Dry Van Trailers</h3>
                <p className="text-muted">Ideal for transporting general freight safely and efficiently across every route.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: 0.1 }} className="card trailer-card">
              <img src={reefer} alt="HS Global Logistics refrigerated reefer trailers with Thermo King units at a loading dock" loading="lazy" />
              <div className="trailer-card-body">
                <h3>Refrigerated Trailers</h3>
                <p className="text-muted">Designed for temperature-sensitive shipments, keeping goods fresh in transit.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why-us" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Why Choose Us</div>
            <h2>Why Choose HS Global Logistics?</h2>
          </motion.div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.06 }} className="why-item">
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p className="text-muted">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials">
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2>Built on Trust &amp; Performance</h2>
            <p className="text-muted" style={{ marginTop: 12 }}>From independent drivers to growing fleets, our clients rely on us every mile.</p>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>

      <CTASection />

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="faq-header">
            <div>
              <div className="eyebrow">FAQs</div>
              <h2>Everything you need to know about our services</h2>
            </div>
            <NavLink to="/contact" className="btn btn-ghost">Still have questions?</NavLink>
          </div>
          <FAQAccordion />
        </div>
      </section>

      <style>{`
        .hero {
          padding: 64px 0 40px;
          background: linear-gradient(180deg, #EEF7F6 0%, var(--bg) 60%);
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
        }
        .hero-copy h1 {
          font-size: clamp(2.1rem, 4.6vw, 3.3rem);
          margin-bottom: 20px;
        }
        .hero-sub {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 480px;
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-stats {
          display: flex;
          gap: 36px;
          flex-wrap: wrap;
        }
        .hero-stats strong {
          display: block;
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--navy);
        }
        .hero-stats span {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .hero-svg { width: 100%; height: auto; }

        .value-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 26px;
        }
        .value-pills .pill span:first-child { font-size: 1rem; }

        .stat-cluster {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .stat-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 28px 22px;
          box-shadow: var(--shadow-sm);
        }
        .stat-card--lg {
          grid-column: 1 / -1;
          background: linear-gradient(120deg, var(--navy), var(--navy-3));
          border: none;
        }
        .stat-card--lg .stat-num { color: var(--amber); }
        .stat-card--lg .stat-label { color: rgba(255,255,255,0.8); }
        .stat-num {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 2.2rem;
          color: var(--navy);
        }
        .stat-label {
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .service-card {
          padding: 32px 26px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
        }
        .service-icon {
          font-size: 1.8rem;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--teal-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
        .service-card h3 { font-size: 1.1rem; margin-bottom: 10px; }

        .trailer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .trailer-card { overflow: hidden; }
        .trailer-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }
        .trailer-card-body { padding: 26px 26px 30px; }
        .trailer-card-body h3 { margin-bottom: 8px; }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .why-item {
          padding: 8px;
        }
        .why-icon {
          font-size: 1.6rem;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: var(--white);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .why-item h3 { font-size: 1.05rem; margin-bottom: 8px; }

        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .faq-header h2 { max-width: 520px; }

        @media (max-width: 980px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-art { order: -1; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .trailer-grid { grid-template-columns: 1fr; }
          .stat-cluster { grid-template-columns: 1fr; }
          .hero-stats { gap: 24px; }
        }
      `}</style>
    </>
  )
}
