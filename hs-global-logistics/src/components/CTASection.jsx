import { NavLink } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div>
          <h2>Reliable logistics solutions that move your business forward</h2>
          <p>From dispatch to trailer rentals, we help you operate efficiently, reduce downtime, and increase profitability.</p>
        </div>
        <NavLink to="/contact" className="btn btn-white">Talk To Our Experts</NavLink>
      </div>

      <style>{`
        .cta-banner {
          background: linear-gradient(120deg, var(--navy) 0%, var(--navy-3) 100%);
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          content: '';
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,122,61,0.35), transparent 70%);
          top: -180px;
          right: -120px;
        }
        .cta-banner::after {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15,181,174,0.3), transparent 70%);
          bottom: -160px;
          left: -100px;
        }
        .cta-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 72px 24px;
        }
        .cta-inner h2 {
          color: var(--white);
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          max-width: 560px;
          margin-bottom: 12px;
        }
        .cta-inner p {
          color: rgba(255,255,255,0.72);
          max-width: 480px;
        }
        @media (max-width: 760px) {
          .cta-inner { flex-direction: column; align-items: flex-start; padding: 56px 24px; }
        }
      `}</style>
    </section>
  )
}
