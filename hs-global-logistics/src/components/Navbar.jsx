import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src={logo} alt="HS Global Logistics logo" width="44" height="44" />
          </span>
          <span className="brand-text">
            HS GLOBAL <em>LOGISTICS</em>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="tel:+18323033592" className="nav-phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            +1 (832) 303 3592
          </a>
          <NavLink to="/contact" className="btn btn-primary nav-cta">Request A Quote</NavLink>
        </div>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-mobile-link" onClick={() => setOpen(false)} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-mobile-link" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
        <a href="tel:+18323033592" className="btn btn-ghost btn-block">Call +1 (832) 303 3592</a>
        <NavLink to="/contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>Request A Quote</NavLink>
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(247, 249, 252, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        .navbar.is-scrolled {
          background: rgba(255, 255, 255, 0.92);
          border-bottom-color: var(--border);
          box-shadow: 0 4px 20px rgba(11,42,74,0.06);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          gap: 20px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .brand-mark {
          display: flex;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        }
        .brand-mark img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .brand-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.02rem;
          color: var(--navy);
          letter-spacing: 0.01em;
          line-height: 1.1;
        }
        .brand-text em {
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          color: var(--amber-dark);
        }
        .nav-links {
          display: flex;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }
        .nav-link {
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.94rem;
          color: var(--text-muted);
          transition: background 0.18s ease, color 0.18s ease;
        }
        .nav-link:hover { color: var(--navy); background: var(--bg-alt); }
        .nav-link.active { color: var(--navy); background: var(--teal-light); }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
        }
        .nav-phone {
          display: flex;
          align-items: center;
          gap: 7px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--navy);
          white-space: nowrap;
        }
        .nav-phone svg { color: var(--amber); }
        .nav-cta { padding: 12px 22px; font-size: 0.88rem; }
        .nav-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
        }
        .nav-burger span {
          height: 2.5px;
          background: var(--navy);
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .nav-burger span:nth-child(1) { width: 24px; }
        .nav-burger span:nth-child(2) { width: 24px; }
        .nav-burger span:nth-child(3) { width: 16px; align-self: flex-end; }
        .nav-burger.is-open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); width: 24px; }
        .nav-burger.is-open span:nth-child(2) { opacity: 0; }
        .nav-burger.is-open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); width: 24px; align-self: center; }

        .nav-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-links, .nav-actions { display: none; }
          .nav-burger { display: flex; }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 14px 24px 26px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: var(--white);
            border-bottom: 1px solid var(--border);
          }
          .nav-mobile.is-open { max-height: 420px; }
          .nav-mobile-link {
            padding: 12px 6px;
            font-weight: 600;
            font-size: 1.02rem;
            color: var(--navy);
            border-bottom: 1px solid var(--border);
          }
          .nav-mobile .btn { margin-top: 8px; }
        }
      `}</style>
    </header>
  )
}
