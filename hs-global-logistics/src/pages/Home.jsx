import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import RouteLine from '../components/RouteLine.jsx'
import CTASection from '../components/CTASection.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import AboutCollage from '../components/AboutCollage.jsx'
import dryvan from '../assets/dryvan.jpg'
import reefer from '../assets/reefer.jpg'
import heroImg from '../assets/hero.jpg'
import whyUsImg from '../assets/why-choose-us.jpg'

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
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="hero-photo-wrap"
        >
          <img src={heroImg} alt="HS Global Logistics truck on the road at sunset — Moving Things Forward: Dispatch, Rentals, Solutions That Deliver" className="hero-photo ken-burns" />
          <div className="hero-photo-fade" />
        </motion.div>

        <div className="container">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-below">
            <h1 className="visually-hidden">Reliable Dispatch &amp; Trailer Rental Solutions — HS Global Logistics</h1>
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

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <AboutCollage />
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
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="card trailer-card hover-lift">
              <div className="img-zoom">
                <img src={dryvan} alt="HS Global Logistics dry van trailers parked at a warehouse dock" loading="lazy" />
              </div>
              <div className="trailer-card-body">
                <h3>Dry Van Trailers</h3>
                <p className="text-muted">Ideal for transporting general freight safely and efficiently across every route.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: 0.1 }} className="card trailer-card hover-lift">
              <div className="img-zoom">
                <img src={reefer} alt="HS Global Logistics refrigerated reefer trailers with Thermo King units at a loading dock" loading="lazy" />
              </div>
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
          <div className="why-layout">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="why-photo img-zoom">
              <img src={whyUsImg} alt="HS Global Logistics trailer ready for the road" loading="lazy" />
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
          padding: 0 0 30px;
          background: linear-gradient(180deg, #EEF7F6 0%, var(--bg) 60%);
        }
        .hero-photo-wrap {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .hero-photo {
          width: 100%;
          height: clamp(320px, 62vw, 680px);
          object-fit: cover;
          object-position: 30% 25%;
          display: block;
        }
        .hero-photo-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 90px;
          background: linear-gradient(180deg, transparent 0%, var(--bg) 100%);
          pointer-events: none;
        }
        .hero-below {
          text-align: center;
          max-width: 640px;
          margin: 40px auto 0;
        }
        .hero-sub {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 30px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 36px;
        }
        .hero-stats {
          display: flex;
          gap: 44px;
          flex-wrap: wrap;
          justify-content: center;
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
          transition: transform 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(-4deg);
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

        .why-layout {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
        }
        .why-photo {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: box-shadow 0.3s ease;
        }
        .why-photo:hover {
          box-shadow: var(--shadow-lg);
        }
        .why-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 340px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
        }
        .why-item {
          padding: 8px;
          transition: transform 0.25s ease;
        }
        .why-item:hover {
          transform: translateX(4px);
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
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }
        .why-item:hover .why-icon {
          transform: scale(1.08);
          background: var(--teal-light);
          border-color: transparent;
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
          .why-layout { grid-template-columns: 1fr; }
          .why-photo img { min-height: 260px; }
        }
        @media (max-width: 860px) {
          .hero-photo { object-position: 35% 20%; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .trailer-grid { grid-template-columns: 1fr; }
          .hero-stats { gap: 24px; }
          .hero-actions { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </>
  )
}
