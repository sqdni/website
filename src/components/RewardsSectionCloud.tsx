import cloudImage from '../assets/rewards/cloud.png'
import domoResting from '../assets/rewards/domo-resting.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function RewardsSectionCloud() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <div
      ref={ref}
      className={`rewards__cloud-wrap${isVisible ? ' rewards__cloud-wrap--revealed' : ''}`}
    >
      <img
        src={cloudImage}
        alt=""
        className="rewards__cloud"
        aria-hidden="true"
      />
      <div className="rewards__cloud-domo-wrap" aria-hidden="true">
        <img src={domoResting} alt="" className="rewards__cloud-domo" />
      </div>

      <div className="rewards__cloud-copy">
        <p className="rewards__cloud-eyebrow nav-text">It&apos;s like a dream come true...</p>
        <h2 className="rewards__cloud-headline">
          Every riddle you crack -
          <br className="rewards__cloud-headline-break" />
          earns coins. 🪙
        </h2>
        <p className="rewards__cloud-description nav-text nav-text--sentence">
          Stack them up inside Domo Cafe and redeem for future prizes. Prizes to be
          announced — stay tuned.
        </p>
      </div>
    </div>
  )
}
