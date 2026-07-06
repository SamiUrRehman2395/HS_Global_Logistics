import { useState, useEffect, useRef } from 'react'
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
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer.current)
  }, [])

  const t = testimonials[index]

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card">
        <svg className="quote-mark" width="38" height="30" viewBox="0 0 38 30" fill="none">
          <path d="M0 30V16.5C0 6.5 6 0.5 15 0L16.5 5C11 6 8.5 9 8 13.5H16V30H0ZM21.5 30V16.5C21.5 6.5 27.5 0.5 36.5 0L38 5C32.5 6 30 9 29.5 13.5H37.5V30H21.5Z" fill="#0FB5AE"/>
        </svg>
        <p className="testimonial-quote">{t.quote}</p>
        <div className="testimonial-person">
          <div className="testimonial-avatar">
            <img src={t.photo} alt={t.name} />
          </div>
          <div>
            <p className="testimonial-name">{t.name}</p>
            <p className="testimonial-role">{t.role}</p>
          </div>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            className={`dot ${i === index ? 'active' : ''}`}
            aria-label={`Show testimonial from ${item.name}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <style>{`
        .testimonial-carousel {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .testimonial-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: 48px 40px;
          border: 1px solid var(--border);
        }
        .quote-mark { margin-bottom: 18px; }
        .testimonial-quote {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--navy);
          line-height: 1.4;
          margin-bottom: 28px;
        }
        .testimonial-person {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .testimonial-avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testimonial-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .testimonial-name {
          font-weight: 700;
          color: var(--navy);
          text-align: left;
          font-size: 0.95rem;
        }
        .testimonial-role {
          text-align: left;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 26px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border);
          border: none;
          transition: background 0.2s ease, width 0.2s ease;
        }
        .dot.active {
          background: var(--amber);
          width: 22px;
          border-radius: 5px;
        }
        @media (max-width: 560px) {
          .testimonial-card { padding: 36px 24px; }
          .testimonial-quote { font-size: 1.15rem; }
        }
      `}</style>
    </div>
  )
}
