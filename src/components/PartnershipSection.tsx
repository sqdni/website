import { useScrollReveal } from '../hooks/useScrollReveal'
import domoBus from '../assets/values/domo-bus.png'
import '../styles/site-sections.css'

export function PartnershipSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
    delayMs: 180,
    once: false,
  })

  return (
    <section
      id="partnership"
      ref={ref}
      className={`site-section site-section--cream${isVisible ? ' site-section--revealed' : ''}`}
      aria-labelledby="partnership-heading"
    >
      <div className="site-section__inner site-section__inner--narrow partnership">
        <p className="site-section__eyebrow nav-text">Official Partnership</p>
        <h2 id="partnership-heading" className="site-section__title">
          An NHK Licensed Character Café
        </h2>
        <p className="site-section__body nav-text nav-text--sentence">
          Domo Cafe is an officially licensed NHK character café. Domo-kun was born on NHK and
          has charmed the world for decades. We&apos;re honored to bring this beloved character
          to life in an immersive dining experience right here in Southern California.
        </p>
        <figure className="partnership__media">
          <img
            src={domoBus}
            alt="Domo-kun with NHK creator surrounded by Domo merchandise"
            className="partnership__image"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
