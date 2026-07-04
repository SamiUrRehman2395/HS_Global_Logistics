import { useState } from 'react'

const faqs = [
  {
    q: 'What types of trailers do you offer?',
    a: 'We offer well-maintained dry van trailers for general freight and temperature-controlled reefer trailers for perishables, food, and pharmaceuticals — available in multiple sizes to match your load.',
  },
  {
    q: 'Do you provide 24/7 dispatch services?',
    a: 'Yes. Our dispatch team is available around the clock to book loads, negotiate rates, handle paperwork, and support you on the road — so you\u2019re never left without backup.',
  },
  {
    q: 'Who can use your services?',
    a: 'Independent owner-operators, small fleets, and growing carriers all work with us. Whether you have one truck or twenty, we tailor dispatch and trailer solutions to your operation.',
  },
  {
    q: 'How quickly can I get a trailer on rent?',
    a: 'In most cases, we can confirm availability and get a trailer allocated to you within 24–48 hours of your request, depending on your location and trailer type.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{isOpen ? '\u2212' : '+'}</span>
            </button>
            <div className="faq-answer" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}

      <style>{`
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .faq-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-item.is-open {
          border-color: var(--teal);
          box-shadow: var(--shadow-sm);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          padding: 20px 24px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.02rem;
          color: var(--navy);
          text-align: left;
        }
        .faq-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--teal-light);
          color: var(--teal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
        }
        .faq-item.is-open .faq-icon {
          background: var(--amber);
          color: var(--white);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .faq-answer p {
          padding: 0 24px 22px;
          color: var(--text-muted);
          max-width: 640px;
        }
      `}</style>
    </div>
  )
}
