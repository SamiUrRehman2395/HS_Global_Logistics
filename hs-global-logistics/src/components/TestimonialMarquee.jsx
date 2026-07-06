const palettes = [
  { bg: '#0B2A4A', accent: '#FF7A3D' },
  { bg: '#B8862B', accent: '#FFFFFF' },
  { bg: '#1B4E80', accent: '#F7EFDD' },
  { bg: '#E9612A', accent: '#0B2A4A' },
  { bg: '#123B63', accent: '#FF7A3D' },
  { bg: '#8A6416', accent: '#FFFFFF' },
]

function Avatar({ index }) {
  const p = palettes[index % palettes.length]
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" className="avatar-svg">
      <circle cx="26" cy="26" r="26" fill={p.bg} />
      <circle cx="26" cy="21" r="9" fill={p.accent} fillOpacity="0.92" />
      <path d="M8 46c1.5-9 8.5-14 18-14s16.5 5 18 14" fill={p.accent} fillOpacity="0.92" />
    </svg>
  )
}

import emmaCarterPhoto from '../assets/testimonials/emma_carter.avif'
import ethanWilsonPhoto from '../assets/testimonials/ethan_wilson.avif'
import jamesTurnerPhoto from '../assets/testimonials/james_turner.avif'
import jasonBevanPhoto from '../assets/testimonials/olivia_brown.avif'
import davidLeePhoto from '../assets/testimonials/david_lee.avif'
import noahBrooksPhoto from '../assets/testimonials/noah_brooks.avif'

const testimonials = [
  { name: 'Emma Carter', role: 'Logistics Manager', quote: 'HS Global keeps our trucks moving and our profits growing.', photo: emmaCarterPhoto },
  { name: 'Ethan Wilson', role: 'Supply Head', quote: 'Reliable dispatch, better rates, and zero stress. Exactly what we needed.', photo: ethanWilsonPhoto },
  { name: 'James Turner', role: 'Owner', quote: 'Clear communication, fast support, and no missed loads.', photo: jamesTurnerPhoto },
  { name: 'Jason Bevan', role: 'Independent Driver', quote: 'They handle everything so we can focus on the road.', photo: jasonBevanPhoto },
  { name: 'David Lee', role: 'Small Fleet Owner', quote: 'Consistent, professional, and easy to work with.', photo: davidLeePhoto },
  { name: 'Noah Brooks', role: 'Operations Director', quote: 'Top-quality trailers and smooth service every time.', photo: noahBrooksPhoto },
  { name: 'Sophia Martinez', role: 'Dispatcher', quote: 'Fast responses and fair rates — a genuine partner, not just a vendor.' },
  { name: 'Liam Anderson', role: 'Owner-Operator', quote: 'My go-to for trailer rentals whenever I need one on short notice.' },
]

function Card({ t, i }) {
  return (
    <div className="tm-card">
      <svg className="tm-quote" width="30" height="24" viewBox="0 0 38 30" fill="none">
        <path d="M0 30V16.5C0 6.5 6 0.5 15 0L16.5 5C11 6 8.5 9 8 13.5H16V30H0ZM21.5 30V16.5C21.5 6.5 27.5 0.5 36.5 0L38 5C32.5 6 30 9 29.5 13.5H37.5V30H21.5Z" fill="#B8862B"/>
      </svg>
      <p className="tm-text">{t.quote}</p>
      <div className="tm-person">
        {t.photo ? (
          <img className="avatar-photo" src={t.photo} alt={t.name} />
        ) : (
          <Avatar index={i} />
        )}
        <div>
          <p className="tm-name">{t.name}</p>
          <p className="tm-role">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialMarquee() {
  const track = [...testimonials, ...testimonials]

  return (
    <div className="tm-wrap">
      <div className="tm-track">
        {track.map((t, i) => (
          <Card t={t} i={i} key={`${t.name}-${i}`} />
        ))}
      </div>

      <style>{`
        .tm-wrap {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%);
        }
        .tm-track {
          display: flex;
          gap: 22px;
          width: max-content;
          animation: tm-scroll 38s linear infinite;
        }
        .tm-wrap:hover .tm-track {
          animation-play-state: paused;
        }
        @keyframes tm-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tm-card {
          flex: 0 0 300px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          padding: 28px 26px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .tm-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-md);
          border-color: var(--teal);
        }
        .tm-quote { margin-bottom: 14px; }
        .tm-text {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.45;
          margin-bottom: 22px;
          min-height: 66px;
        }
        .tm-person {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .avatar-svg {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .tm-card:hover .avatar-svg {
          transform: scale(1.08);
        }
        .avatar-photo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .tm-card:hover .avatar-photo {
          transform: scale(1.08);
        }
        .tm-name {
          font-weight: 700;
          color: var(--navy);
          font-size: 0.92rem;
        }
        .tm-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        @media (max-width: 640px) {
          .tm-card { flex-basis: 260px; padding: 24px 20px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tm-track { animation: none; }
          .tm-wrap { overflow-x: auto; }
        }
      `}</style>
    </div>
  )
}
