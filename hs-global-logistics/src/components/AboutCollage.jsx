import { motion } from 'framer-motion'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
}

const itemA = {
  hidden: { opacity: 0, x: -30, y: 10 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const itemB = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const itemC = {
  hidden: { opacity: 0, x: 30, y: 20 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AboutCollage() {
  return (
    <motion.div
      className="about-collage"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemA} className="collage-img collage-img--a img-zoom">
        <img src={about1} alt="HS Global Logistics trailer on the road" loading="lazy" />
      </motion.div>
      <motion.div variants={itemB} className="collage-img collage-img--b img-zoom">
        <img src={about2} alt="HS Global Logistics truck and trailer at sunset" loading="lazy" />
      </motion.div>
      <motion.div variants={itemC} className="collage-img collage-img--c img-zoom">
        <img src={about3} alt="HS Global Logistics dispatch team member" loading="lazy" />
      </motion.div>
      <motion.div
        className="collage-badge"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.65, ease: 'backOut' }}
      >
        <span>24/7</span>
        <p>Dispatch Support</p>
      </motion.div>

      <style>{`
        .about-collage {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 26px;
          align-items: end;
          padding: 8px 8px 34px 8px;
        }
        .collage-img {
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          border: 4px solid var(--white);
          overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .collage-img:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
        }
        .collage-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .collage-img--a {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          aspect-ratio: 4 / 5;
        }
        .collage-img--b {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          aspect-ratio: 4 / 3;
          align-self: start;
        }
        .collage-img--c {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          aspect-ratio: 4 / 3;
        }
        .collage-badge {
          position: absolute;
          left: 4px;
          bottom: 0;
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
          .about-collage { gap: 16px; padding: 8px 8px 30px 8px; }
          .collage-badge { left: 0; padding: 12px 16px; }
        }
      `}</style>
    </motion.div>
  )
}
