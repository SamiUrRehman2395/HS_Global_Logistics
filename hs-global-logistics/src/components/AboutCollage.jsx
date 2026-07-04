import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'

export default function AboutCollage() {
  return (
    <div className="about-collage">
      <img src={about1} alt="HS Global Logistics trailer on the road" className="collage-img collage-img--a" loading="lazy" />
      <img src={about2} alt="HS Global Logistics truck and trailer at sunset" className="collage-img collage-img--b" loading="lazy" />
      <img src={about3} alt="HS Global Logistics dispatch team member" className="collage-img collage-img--c" loading="lazy" />
      <div className="collage-badge">
        <span>24/7</span>
        <p>Dispatch Support</p>
      </div>

      <style>{`
        .about-collage {
          position: relative;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 18px;
          align-items: end;
        }
        .collage-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 4px solid var(--white);
        }
        .collage-img--a {
          grid-row: 1 / 3;
          height: 100%;
          aspect-ratio: 3 / 4;
        }
        .collage-img--b {
          aspect-ratio: 4 / 5;
          transform: translateY(-16px);
        }
        .collage-img--c {
          aspect-ratio: 4 / 5;
        }
        .collage-badge {
          position: absolute;
          left: -14px;
          bottom: -18px;
          background: var(--navy);
          color: var(--white);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          box-shadow: var(--shadow-lg);
        }
        .collage-badge span {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--amber);
          line-height: 1;
        }
        .collage-badge p {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.8);
          margin-top: 4px;
          white-space: nowrap;
        }
        @media (max-width: 640px) {
          .collage-badge { left: 10px; bottom: -14px; padding: 12px 16px; }
        }
      `}</style>
    </div>
  )
}
