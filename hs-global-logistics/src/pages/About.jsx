import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import RouteLine from '../components/RouteLine.jsx'
import CTASection from '../components/CTASection.jsx'
import AboutCollage from '../components/AboutCollage.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const values = [
  { icon: '🤝', title: 'Reliability & Transparency', text: 'We do what we say — clear pricing, honest timelines, and no surprises.' },
  { icon: '🎯', title: 'Customer Focused', text: 'Every decision starts with what\u2019s best for the carriers and drivers we serve.' },
  { icon: '🏆', title: 'Industry Expertise', text: 'Years of hands-on experience in dispatch, freight, and trailer operations.' },
  { icon: '⭐', title: 'Commitment to Excellence', text: 'We hold our equipment and our service to a consistently high standard.' },
]

const stats = [
  { num: '24/7', label: 'Dispatcher availability' },
  { num: '50', label: 'States served nationwide' },
  { num: '2', label: 'Dedicated trailer types' },
  { num: '100%', label: 'Focus on carrier success' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container grid-2">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="eyebrow">About HS Global Logistics</div>
            <h1>Built by people who understand the road</h1>
            <p className="page-hero-sub">
              HS Global Logistics offers professional dispatch services and reliable trailer rental solutions. Our mission is to simplify logistics operations for trucking businesses by providing efficient load management and high-quality equipment.
            </p>
            <NavLink to="/contact" className="btn btn-primary" style={{ marginTop: 10 }}>Work With Us</NavLink>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <AboutCollage />
          </motion.div>
        </div>
      </section>

      <RouteLine />

      {/* MISSION */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780, textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Mission</div>
            <h2>Simplifying logistics so carriers can focus on the road</h2>
            <p className="text-muted" style={{ marginTop: 18, fontSize: '1.08rem' }}>
              We started HS Global Logistics with a simple belief: independent drivers and small fleets deserve the same level of dispatch expertise and equipment quality as the largest carriers. Today, we support owner-operators and growing fleets with dependable dispatch services and a well-maintained trailer fleet, backed by a team that treats every load like it's our own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-tight">
        <div className="container stats-strip">
          {stats.map((s) => (
            <motion.div key={s.label} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="stat-block">
              <span>{s.num}</span>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2>What drives the way we work</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: i * 0.08 }} className="card value-card hover-lift">
                <div className="service-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p className="text-muted">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .page-hero { padding: 72px 0 44px; background: linear-gradient(180deg, #EEF7F6 0%, var(--bg) 60%); }
        .page-hero h1 { font-size: clamp(2rem, 4.4vw, 2.9rem); margin: 4px 0 18px; }
        .page-hero-sub { font-size: 1.08rem; color: var(--text-muted); max-width: 520px; }

        .stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          background: var(--navy);
          border-radius: var(--radius-lg);
          padding: 44px 32px;
        }
        .stat-block { text-align: center; }
        .stat-block span {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 2.1rem;
          color: var(--amber);
          margin-bottom: 6px;
        }
        .stat-block p { color: rgba(255,255,255,0.75); font-size: 0.9rem; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .value-card { padding: 30px 24px; }
        .value-card h3 { font-size: 1.02rem; margin-bottom: 8px; }

        @media (max-width: 980px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-strip { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
