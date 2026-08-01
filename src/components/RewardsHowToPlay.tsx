import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Download WhoRiddle',
    description:
      'Grab the free app on iOS or Android. No account needed to browse.',
  },
  {
    number: '02',
    title: 'Launch app and sign up',
    description:
      'Open WhoRiddle and create your free account in under a minute.',
  },
  {
    number: '03',
    title: 'Play cafe riddles',
    description:
      'Earn coins by solving riddles and climbing the Domo Cafe leaderboard.',
  },
  {
    number: '04',
    title: 'Redeem your rewards',
    description:
      'Use your coins in the WhoRiddle rewards store for prizes and perks.',
  },
] as const

export function RewardsHowToPlay() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <section
      ref={ref}
      className={`rewards__how-to${isVisible ? ' rewards__how-to--revealed' : ''}`}
      aria-labelledby="rewards-how-to-heading"
    >
      <header className="rewards__how-to-header">
        <h2 id="rewards-how-to-heading" className="rewards__how-to-title">
          How it works,
          <br className="rewards__how-to-title-break" />
          in 4 simple steps:
        </h2>
        <p className="rewards__how-to-subtitle nav-text">
          From download to your first coin — here&apos;s the whole flow.
        </p>
      </header>

      <ol className="rewards__how-to-steps">
        {steps.map((step) => (
          <li key={step.number} className="rewards__how-to-step">
            <article className="rewards__how-to-card" aria-label={`Step ${step.number}: ${step.title}`}>
              <p className="rewards__how-to-number">{step.number}</p>
              <h3 className="rewards__how-to-card-title">{step.title}</h3>
              <p className="rewards__how-to-card-text nav-text nav-text--sentence">
                {step.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
