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
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}
const itemB = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}
const itemC = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
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
        transition={{ duration: 0.5, delay: 0.75, ease: 'backOut' }}
      >
        <span>24/7</span>
        <p>Dispatch Support</p>
      </motion.div>

      <style>{`
        .about-collage {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: end;
          gap: 22px;
          padding: 10px 8px 40px 8px;
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
        /* Aspect ratios match each source photo's real proportions so the
           full picture shows — no awkward cropping. */
        .collage-img--a {
          aspect-ratio: 683 / 1024;
          align-self: end;
        }
        .collage-img--b {
          aspect-ratio: 900 / 1650;
          align-self: start;
          transform: translateY(6px);
        }
        .collage-img--c {
          aspect-ratio: 683 / 1024;
          align-self: end;
          transform: translateY(24px);
        }
        .collage-badge {
          position: absolute;
          left: 4px;
          bottom: 6px;
          background: var(--navy);
          color: var(--white);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          box-shadow: var(--shadow-lg);
          z-index: 2;
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
        @media (max-width: 720px) {
          .about-collage {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 10px 8px 46px 8px;
          }
          .collage-img--a,
          .collage-img--b,
          .collage-img--c {
            grid-column: 1 / 2;
            align-self: stretch;
            transform: none;
          }
          .collage-badge { left: 0; bottom: 10px; padding: 12px 16px; }
        }
      `}</style>
    </motion.div>
  )
}
