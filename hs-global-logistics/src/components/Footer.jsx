import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="brand-mark-lg">
            <img src={logo} alt="HS Global Logistics logo" width="52" height="52" />
          </div>
          <h3>Simplify your operations with reliable dispatch and trailer solutions.</h3>
          <NavLink to="/contact" className="btn btn-primary">Request A Quote</NavLink>
          <div className="footer-social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.4c0-1 .3-1.7 1.7-1.7H17V2.3C16.6 2.2 15.4 2 14 2c-2.9 0-4.9 1.8-4.9 5v2.5H6V13h3.1v9h4.4z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.6.5.7.28 1.2.62 1.7 1.13.5.5.85 1 1.13 1.7.25.6.44 1.4.5 2.6.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.5 2.6-.28.7-.62 1.2-1.13 1.7-.5.5-1 .85-1.7 1.13-.6.25-1.4.44-2.6.5-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.6-.5-.7-.28-1.2-.62-1.7-1.13-.5-.5-.85-1-1.13-1.7-.25-.6-.44-1.4-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .5-2.6.28-.7.62-1.2 1.13-1.7.5-.5 1-.85 1.7-1.13.6-.25 1.4-.44 2.6-.5C9.4 2.2 9.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1 .04-1.6.2-1.96.34-.5.2-.85.42-1.22.8-.38.37-.6.72-.8 1.22-.14.37-.3.95-.34 1.96C2.8 9.48 2.8 9.85 2.8 13s0 3.52.07 4.76c.04 1 .2 1.6.34 1.96.2.5.42.85.8 1.22.37.38.72.6 1.22.8.37.14.95.3 1.96.34 1.24.07 1.6.07 4.76.07s3.52 0 4.76-.07c1-.04 1.6-.2 1.96-.34.5-.2.85-.42 1.22-.8.38-.37.6-.72.8-1.22.14-.37.3-.95.34-1.96.07-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.04-1-.2-1.6-.34-1.96-.2-.5-.42-.85-.8-1.22-.37-.38-.72-.6-1.22-.8-.37-.14-.95-.3-1.96-.34C15.52 4 15.15 4 12 4z"/><path d="M12 7.6a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm0 7.26a2.86 2.86 0 110-5.72 2.86 2.86 0 010 5.72zM17.6 6.4a1.03 1.03 0 100 2.06 1.03 1.03 0 000-2.06z"/></svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.4s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C16.3 5 12 5 12 5h0s-4.3 0-7.1.2c-.4 0-1.3.1-2.1 1-.6.7-.8 2.2-.8 2.2S1.8 10.1 1.8 12v1.8c0 1.9.2 3.6.2 3.6s.2 1.5.8 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 7.3.3s4.3 0 7.1-.2c.4 0 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.7.2-3.6V12c0-1.9-.2-3.6-.2-3.6zM9.8 15.4V8.9l5.8 3.3-5.8 3.2z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="footer-col">
          <h4>Open Hours</h4>
          <p>Monday to Friday</p>
          <p>9 am – 5 pm</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:sales@hsgloballogistic.com">sales@hsgloballogistic.com</a>
          <a href="tel:+18323033592">+1 (832) 303 3592</a>
          <p className="footer-address">101 Continental Blvd Ste 260,<br />El Segundo, CA 90245, United States</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} HS Global Logistics. All rights reserved.</p>
          <p>Dispatch Services &amp; Trailer Rentals — Nationwide</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--navy);
          color: rgba(255,255,255,0.82);
          margin-top: 0;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 40px;
          padding: 80px 24px 56px;
        }
        .brand-mark-lg {
          width: 52px;
          height: 52px;
        }
        .brand-mark-lg img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        .footer-brand h3 {
          color: var(--white);
          font-size: 1.3rem;
          margin: 18px 0 22px;
          max-width: 340px;
        }
        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .footer-social a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .footer-social a:hover {
          background: var(--amber);
          transform: translateY(-3px);
        }
        .footer-col h4 {
          color: var(--white);
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .footer-col a, .footer-col p {
          display: block;
          margin-bottom: 12px;
          color: rgba(255,255,255,0.72);
          font-size: 0.94rem;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-col a:hover { color: var(--amber); transform: translateX(3px); }
        .footer-address { line-height: 1.5; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          padding: 22px 24px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 860px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            padding: 56px 24px 40px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .footer-top { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
