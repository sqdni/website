import halfDomo from '../assets/rewards/half-domo.png'
import rewardsHeroBagsFull from '../assets/rewards-hero-bags-full.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

const LOYALTY_SIGNUP_URL = 'https://whoriddle.playgameswinprizes.online/vip'

export function RewardsBagsHero() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    delayMs: 280,
    once: false,
  })

  return (
    <section
      ref={ref}
      className={`rewards-v11-hero${isVisible ? ' rewards-v11-hero--revealed' : ''}`}
      aria-labelledby="rewards-hero-heading"
    >
      <div className="rewards-v11-hero__media" aria-hidden="true">
        <img src={rewardsHeroBagsFull} alt="" className="rewards-v11-hero__image" />
        <div className="rewards-v11-hero__overlay" />
      </div>

      <img
        src={halfDomo}
        alt=""
        className="rewards-v11-hero__domo"
        aria-hidden="true"
      />

      <div className="rewards-v11-hero__content">
        <div className="rewards-v11-hero__copy">
          <p className="rewards-v11-hero__eyebrow nav-text">
            Become part of our
          </p>
          <h1 id="rewards-hero-heading" className="rewards-v11-hero__title">
            Domo Cafe
            <br />
            Loyalty Program!
          </h1>
          <p className="rewards-v11-hero__tagline nav-text nav-text--sentence">
            Join our loyalty program to stay up to date on events, promotions, and earn back
            on your spendings. Sign up once and claim a <strong>Buy One Get One Free</strong>{' '}
            drink next time you visit.
          </p>
          <div className="rewards-v11-hero__actions">
            <a
              href={LOYALTY_SIGNUP_URL}
              className="rewards__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="rewards__cta-label">Join Loyalty Program</span>
              <span className="rewards__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
