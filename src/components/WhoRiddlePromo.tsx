import whoriddleScreenshot from '../assets/whoriddle-app-screenshot.png'
import {
  WHORIDDLE_APP_STORE_URL,
  WHORIDDLE_GOOGLE_PLAY_URL,
} from '../constants/whoriddleAppLinks'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AppleIcon() {
  return (
    <svg
      className="rewards__store-icon rewards__store-icon--apple"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="rewards__store-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 2.4A1.2 1.2 0 0 0 2.4 3.6v16.8a1.2 1.2 0 0 0 1.8 1.05l14.4-8.4a1.2 1.2 0 0 0 0-2.1L3.6 2.4z"
      />
    </svg>
  )
}

export function WhoRiddlePromo() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <div
      ref={ref}
      className={`rewards__whoriddle${isVisible ? ' rewards__whoriddle--revealed' : ''}`}
      aria-labelledby="rewards-whoriddle-heading"
    >
      <div className="rewards__whoriddle-copy">
        <p className="rewards__whoriddle-eyebrow nav-text">
          In addition to our loyalty program...
        </p>

        <h2 id="rewards-whoriddle-heading" className="rewards__whoriddle-title">
          Domo Cafe has
          <br />
          joined <span className="rewards__whoriddle-title-accent">WhoRiddle</span>!
        </h2>

        <p className="rewards__whoriddle-description nav-text nav-text--sentence">
          Solve cozy cafe-themed riddles, climb the leaderboard, and earn coins you can
          redeem for future prizes and rewards. All inside
          <br className="rewards__whoriddle-break" />
          the WhoRiddle app.
        </p>

        <div className="rewards__store-buttons">
          <a
            href={WHORIDDLE_APP_STORE_URL}
            className="rewards__store-btn rewards__store-btn--apple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleIcon />
            <span className="rewards__store-btn-text">
              <span className="rewards__store-btn-label">Download on the</span>
              <span className="rewards__store-btn-name">App Store</span>
            </span>
          </a>

          <a
            href={WHORIDDLE_GOOGLE_PLAY_URL}
            className="rewards__store-btn rewards__store-btn--google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon />
            <span className="rewards__store-btn-text">
              <span className="rewards__store-btn-label">GET IT ON</span>
              <span className="rewards__store-btn-name">Google Play</span>
            </span>
          </a>
        </div>

        <p className="rewards__whoriddle-footnote nav-text nav-text--sentence">
          Free to download · iOS & Android
        </p>
      </div>

      <div className="rewards__screenshot-wrap">
        <img
          src={whoriddleScreenshot}
          alt="WhoRiddle app showing Domo Cafe riddles and rewards"
          className="rewards__screenshot"
        />
      </div>
    </div>
  )
}
