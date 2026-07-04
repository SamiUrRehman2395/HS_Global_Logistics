import { NavLink } from 'react-router-dom'
import ctaBg from '../assets/cta-banner.jpg'

export default function CTASection() {
  return (
    <section className="cta-banner">
      <div className="cta-bg ken-burns" style={{ backgroundImage: `url(${ctaBg})` }} />
      <div className="cta-overlay" />
      <div className="container cta-inner">
        <div>
          <h2>Reliable logistics solutions that move your business forward</h2>
          <p>From dispatch to trailer rentals, we help you operate efficiently, reduce downtime, and increase profitability.</p>
        </div>
        <NavLink to="/contact" className="btn btn-white">Talk To Our Experts</NavLink>
      </div>

      <style>{`
        .cta-banner {
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, rgba(11,42,74,0.94) 0%, rgba(11,42,74,0.86) 45%, rgba(11,42,74,0.55) 100%);
        }
        .cta-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 84px 24px;
        }
        .cta-inner h2 {
          color: var(--white);
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          max-width: 560px;
          margin-bottom: 12px;
        }
        .cta-inner p {
          color: rgba(255,255,255,0.78);
          max-width: 480px;
        }
        @media (max-width: 760px) {
          .cta-inner { flex-direction: column; align-items: flex-start; padding: 60px 24px; }
        }
      `}</style>
    </section>
  )
}
