import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import RouteLine from '../components/RouteLine.jsx'
import CTASection from '../components/CTASection.jsx'
import dryvan from '../assets/dryvan.jpg'
import reefer from '../assets/reefer.jpg'
import dispatchImg from '../assets/dispatch-services.jpg'
import fleetSupportImg from '../assets/fleet-support.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const dispatchFeatures = [
  'Load booking and freight matching across trusted broker networks',
  'Rate negotiation to secure the best-paying loads',
  'Route planning and real-time tracking support',
  'Paperwork, invoicing and compliance handled for you',
  '24/7 dispatcher support whenever you\u2019re on the road',
]

const fleetFeatures = [
  'Back-office and administrative support for growing fleets',
  'Compliance tracking and documentation management',
  'Driver onboarding and dispatch coordination',
  'Performance reporting to track efficiency and earnings',
]

const process = [
  { step: '01', title: 'Tell Us Your Needs', text: 'Share your routes, trailer requirements, and business goals with our team.' },
  { step: '02', title: 'We Build A Plan', text: 'We match you with the right dispatch support or trailer equipment for your operation.' },
  { step: '03', title: 'Hit The Road', text: 'Start hauling with dedicated dispatch support and reliable equipment behind you.' },
  { step: '04', title: 'Grow With Us', text: 'Ongoing support and reporting help you scale your operation with confidence.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="eyebrow">Our Services</div>
            <h1>Dispatch &amp; Trailer Solutions Built For Your Business</h1>
            <p className="page-hero-sub">
              We combine expert dispatch support with a reliable trailer fleet to help owner-operators and carriers move more freight, more efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      <RouteLine />

      {/* DISPATCH */}
      <section className="section">
        <div className="container grid-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <div className="eyebrow">01 — Dispatch Services</div>
            <h2>Dispatch support that keeps your trucks loaded</h2>
            <p className="text-muted" style={{ margin: '16px 0 26px', fontSize: '1.05rem' }}>
              Our experienced dispatch team handles the details of every load, so you can focus on driving. From booking to invoicing, we're your partner on every mile.
            </p>
            <ul className="feature-list">
              {dispatchFeatures.map((f) => (
                <li key={f}><span className="check">✓</span>{f}</li>
              ))}
            </ul>
            <NavLink to="/contact" className="btn btn-primary" style={{ marginTop: 26 }}>Get Dispatch Support</NavLink>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="service-photo img-zoom">
            <img src={dispatchImg} alt="HS Global Logistics dispatch and freight coordination" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* TRAILER RENTALS */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>02 — Trailer Rentals</div>
            <h2>A fleet built for every kind of freight</h2>
            <p className="text-muted" style={{ marginTop: 12 }}>Well-maintained, inspection-ready trailers available for short and long-term rental.</p>
          </motion.div>

          <div className="trailer-detail-grid">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="card trailer-detail-card hover-lift">
              <div className="img-zoom">
                <img src={dryvan} alt="Dry van trailers lined up at HS Global Logistics loading dock" loading="lazy" />
              </div>
              <div className="trailer-detail-body">
                <h3>Dry Van Trailers</h3>
                <p className="text-muted">Durable, weatherproof trailers built for general freight — from retail goods to packaged materials. Available in 48' and 53' lengths.</p>
                <ul className="feature-list-sm">
                  <li>Ideal for palletized &amp; boxed freight</li>
                  <li>Roll-up and swing doors available</li>
                  <li>Regularly inspected &amp; road-ready</li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: 0.1 }} className="card trailer-detail-card hover-lift">
              <div className="img-zoom">
                <img src={reefer} alt="Refrigerated reefer trailers with Thermo King cooling units at loading dock" loading="lazy" />
              </div>
              <div className="trailer-detail-body">
                <h3>Refrigerated (Reefer) Trailers</h3>
                <p className="text-muted">Temperature-controlled trailers equipped with reliable cooling units — perfect for food, produce, and pharmaceuticals.</p>
                <ul className="feature-list-sm">
                  <li>Precise temperature control in transit</li>
                  <li>Thermo King &amp; Carrier equipped units</li>
                  <li>Ideal for perishable &amp; sensitive cargo</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FLEET SUPPORT */}
      <section className="section">
        <div className="container grid-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="service-photo img-zoom">
            <img src={fleetSupportImg} alt="HS Global Logistics dispatcher monitoring loads and driver operations from the dispatch office" loading="lazy" />
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <div className="eyebrow">03 — Fleet Support Solutions</div>
            <h2>Back-office support built for growing fleets</h2>
            <p className="text-muted" style={{ margin: '16px 0 26px', fontSize: '1.05rem' }}>
              As your fleet grows, so do the moving parts. We provide the administrative backbone that keeps operations organized and compliant.
            </p>
            <ul className="feature-list">
              {fleetFeatures.map((f) => (
                <li key={f}><span className="check">✓</span>{f}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* END TO END */}
      <section className="section end-to-end" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>04 — End-to-End Logistics</div>
            <h2>How working with us works</h2>
          </motion.div>
          <div className="process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.08 }} className="process-item hover-lift">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p className="text-muted">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero {
          padding: 72px 0 44px;
          background: linear-gradient(180deg, #EEF7F6 0%, var(--bg) 60%);
        }
        .page-hero h1 {
          font-size: clamp(2rem, 4.4vw, 2.9rem);
          max-width: 760px;
          margin: 4px 0 18px;
        }
        .page-hero-sub {
          font-size: 1.08rem;
          color: var(--text-muted);
          max-width: 620px;
        }
        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text);
          font-size: 0.98rem;
        }
        .check {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--teal-light);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          margin-top: 1px;
        }
        .service-visual svg { width: 100%; height: auto; }
        .service-photo {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        .service-photo img {
          width: 100%;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
          display: block;
        }

        .trailer-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .trailer-detail-card { overflow: hidden; }
        .trailer-detail-card img { width: 100%; height: 260px; object-fit: cover; }
        .trailer-detail-body { padding: 26px 28px 30px; }
        .trailer-detail-body h3 { margin-bottom: 10px; }
        .feature-list-sm {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .feature-list-sm li {
          font-size: 0.9rem;
          color: var(--text-muted);
          padding-left: 18px;
          position: relative;
        }
        .feature-list-sm li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--amber);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .process-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 30px 26px;
        }
        .process-step {
          display: inline-block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--amber);
          margin-bottom: 14px;
          transition: transform 0.28s ease;
        }
        .process-item:hover .process-step {
          transform: scale(1.12);
        }
        .process-item h3 { font-size: 1.05rem; margin-bottom: 8px; }

        @media (max-width: 980px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .grid-2 { gap: 32px; }
        }
        @media (max-width: 640px) {
          .trailer-detail-grid { grid-template-columns: 1fr; }
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
