import type { CSSProperties } from 'react'
import { StripedAwning } from './StripedAwning'
import { useScrollReveal } from '../hooks/useScrollReveal'
import valuesBg from '../assets/hero/hero-1.png'
import domoBirthday from '../assets/values/domo-birthday.png'
import domoBuilding from '../assets/values/domo-building.png'
import domoCharacter from '../assets/values/domo-character.png'
import domoHug from '../assets/values/domo-hug.png'
import '../styles/values.css'

const coreValues = [
  {
    title: 'An Immersive Experience',
    description:
      "The moment you step through our doors, you've stepped into another world. Every detail — the art, the characters, the atmosphere — is intentional. You didn't just go to lunch. You went somewhere.",
    image: domoBuilding,
    imageAlt: 'Domo Cafe building entrance',
  },
  {
    title: 'A Hospitality Brand',
    description:
      'Food is just the beginning. How people feel is the product. We train our team to create warmth, energy, and connection — because hospitality is an art form.',
    image: domoHug,
    imageAlt: 'Domo characters hugging',
  },
  {
    title: 'Creating Moments',
    description:
      "First dates. Family trips. Birthday celebrations. The kind of moments people come back for, talk about, and never forget. That's what we're building here.",
    image: domoBirthday,
    imageAlt: 'Domo celebrating a birthday',
  },
  {
    title: 'Character Culture',
    description:
      "Domo-kun is beloved worldwide for a reason — he's authentic, warm, and a little goofy. We carry that spirit into everything we do. You will leave here better than you arrived.",
    image: domoCharacter,
    imageAlt: 'Domo character',
  },
] as const

export function ValuesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <section
      id="values"
      ref={ref}
      className={`values${isVisible ? ' values--revealed' : ''}`}
      aria-labelledby="values-heading"
    >
      <div className="values__backdrop" aria-hidden="true">
        <img src={valuesBg} alt="" className="values__backdrop-image" />
        <div className="values__backdrop-overlay" />
      </div>

      <StripedAwning showLogo={false} />

      <div className="values__inner">
        <header className="values__header">
          <p className="values__eyebrow nav-text">Our Story</p>
          <h2 id="values-heading" className="values__heading nav-text nav-text--sentence">
            We are not just a cafe.
          </h2>
          <p className="values__subhead">
            We are an experience worth remembering.
          </p>
          <p className="values__tagline nav-text nav-text--sentence">
            &ldquo;Not just serving food — creating moments.&rdquo;
          </p>
        </header>

        <ul className="values__panels">
          {coreValues.map((value, index) => (
            <li
              key={value.title}
              className="values__panel"
              style={{ '--values-panel-index': index } as CSSProperties}
            >
              <article className="values__card">
                <img
                  src={value.image}
                  alt={value.imageAlt}
                  className="values__card-image"
                  loading="lazy"
                />
                <h3 className="values__item-title">{value.title}</h3>
                <p className="values__item-text nav-text nav-text--sentence">
                  {value.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="values__stripes" aria-hidden="true">
        <div className="values__tan-bar" />
        <div className="values__white-bar" />
      </div>
    </section>
  )
}
