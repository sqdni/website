import appPreview01 from '../assets/rewards/app-preview-01.png'
import appPreview02 from '../assets/rewards/app-preview-02.png'
import appPreview03 from '../assets/rewards/app-preview-03.png'
import appPreview04 from '../assets/rewards/app-preview-04.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

const previews = [
  {
    step: '03',
    image: appPreview01,
    alt: 'WhoRiddle home screen showing Domo Cafe in the Riddleverse row',
    caption: 'Spot Domo Cafe in the Riddleverse row on the home screen.',
  },
  {
    step: '03',
    image: appPreview02,
    alt: 'WhoRiddle Riddleverse tab with Domo Cafe follow button',
    caption: 'Or open the Riddleverse tab and tap Follow on Domo Cafe.',
  },
  {
    step: '04',
    image: appPreview03,
    alt: 'Domo Cafe channel feed with Chef Domo riddles',
    caption: 'Browse the cafe feed for fresh riddles from Chef Domo.',
  },
  {
    step: '04',
    image: appPreview04,
    alt: 'Domo Cafe riddle solve screen with answer input',
    caption: 'Read the riddle, type your answer, hit Solve to earn coins.',
  },
] as const

export function RewardsAppPreview() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <section
      ref={ref}
      className={`rewards__app-preview${isVisible ? ' rewards__app-preview--revealed' : ''}`}
      aria-labelledby="rewards-app-preview-heading"
    >
      <h2 id="rewards-app-preview-heading" className="rewards__app-preview-title">
        Here&apos;s what steps 03 &amp; 04 look like in the app
      </h2>

      <ol className="rewards__app-preview-grid">
        {previews.map((preview, index) => (
          <li key={`${preview.step}-${index}`} className="rewards__app-preview-item">
            <div className="rewards__app-preview-phone-wrap">
              <span className="rewards__app-preview-badge nav-text">
                Step {preview.step}
              </span>

              <div className="rewards__app-preview-phone">
                <img src={preview.image} alt={preview.alt} className="rewards__app-preview-image" />
              </div>
            </div>

            <p className="rewards__app-preview-caption nav-text nav-text--sentence">
              {preview.caption}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
