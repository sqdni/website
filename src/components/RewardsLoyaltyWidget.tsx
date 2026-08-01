import rewardsChefDomo from '../assets/rewards-chef-domo.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

const LOYALTY_SIGNUP_URL = 'https://whoriddle.playgameswinprizes.online/vip'

export function RewardsLoyaltyWidget() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    delayMs: 280,
    once: false,
  })

  return (
    <div
      ref={ref}
      className={`rewards__hero${isVisible ? ' rewards__hero--revealed' : ''}`}
    >
      <div className="rewards__widget">
        <div className="rewards__widget-copy">
          <div className="rewards__widget-heading">
            <span className="rewards__widget-emoji" aria-hidden="true">
              ☕
            </span>
            <h1 id="rewards-loyalty-heading" className="rewards__widget-title">
              Join the Domo Cafe Loyalty Program!
            </h1>
          </div>

          <p className="rewards__widget-description">
            Sign up once and claim a <strong>Buy One Get One Free</strong> drink next time you visit.
          </p>

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

        <div className="rewards__mascot-wrap">
          <img
            src={rewardsChefDomo}
            alt=""
            className="rewards__mascot"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
