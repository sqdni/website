import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/site-sections.css'

const faqs = [
  {
    question: 'Do I need a reservation?',
    answer:
      "We're walk-in only — no reservations needed. For large groups (8+), we recommend calling ahead so we can make sure we have space ready for your crew.",
  },
  {
    question: 'Is Domo Cafe family-friendly?',
    answer:
      '100%. We designed this place with families in mind. We have a dedicated Domo Jr menu for kids and an atmosphere that creates memories the whole family will love.',
  },
  {
    question: 'Do you offer takeout or delivery?',
    answer:
      'We are dine-in focused — but you can always get your order to go. We are not currently on delivery apps.',
  },
  {
    question: 'Is there parking?',
    answer:
      'Yes — free parking is available in the large parking lot at Buena Park Downtown. Plenty of space, easy in and out.',
  },
  {
    question: 'Do you accept cash?',
    answer:
      "We're a cashless cafe — we accept all major credit and debit cards, Apple Pay, Google Pay, and other contactless payment methods. We're unable to accept cash at this time.",
  },
  {
    question: 'Do you accommodate dietary restrictions?',
    answer:
      "Please let your server know about any dietary needs when you order. We'll do our best to accommodate. Our kitchen handles common allergens — always ask if you're unsure.",
  },
  {
    question: 'Are you hiring?',
    answer:
      "We're always looking for passionate people who love great food and good vibes. Send your resume to jobs@domokuncafe.com and we'll keep you in mind for future openings!",
  },
  {
    question: 'What merchandise or exclusive items are available?',
    answer:
      'We carry Domo plushies, blind boxes, collectible pins, exclusive Domo Cafe shirts, hats, stickers, lanyards, air fresheners, and more — with new drops coming regularly. Merch is available in-cafe only, while supplies last.',
  },
  {
    question: 'Are there still long lines?',
    answer:
      'Lines have been about 1–2 hours, especially on weekends. We recommend arriving early (doors open at 11am) or visiting on a weekday for a shorter wait.',
  },
  {
    question: 'Are you open to collaborations?',
    answer:
      "Absolutely — we love connecting with creators, brands, and communities who share our love for Domo and good food. Reach out at marketing@domokuncafe.com.\n\nWe're not taking on paid collaborations at this time, but if the fit is right we're always open to genuine partnerships. Feel free to introduce yourself.",
  },
] as const

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px',
    delayMs: 160,
    once: false,
  })

  return (
    <section
      id="faq"
      ref={ref}
      className={`site-section site-section--cream${isVisible ? ' site-section--revealed' : ''}`}
      aria-labelledby="faq-heading"
    >
      <div className="site-section__inner site-section__inner--narrow">
        <p className="site-section__eyebrow nav-text">Got Questions?</p>
        <h2 id="faq-heading" className="site-section__title">
          Frequently Asked Questions
        </h2>

        <ul className="faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <li key={faq.question} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq__question-text">{faq.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <span className="faq__icon-bar faq__icon-bar--horizontal" />
                    <span className="faq__icon-bar faq__icon-bar--vertical" />
                  </span>
                </button>
                {isOpen ? (
                  <div className="faq__answer">
                    {faq.answer.split('\n\n').map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
