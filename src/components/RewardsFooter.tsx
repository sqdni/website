import {
  WHORIDDLE_APP_STORE_URL,
  WHORIDDLE_GOOGLE_PLAY_URL,
} from '../constants/whoriddleAppLinks'

export function RewardsFooter() {
  return (
    <footer className="rewards__footer">
      <p className="rewards__footer-copy nav-text nav-text--sentence">
        © 2026 Domo Cafe · Part of the WhoRiddle Riddleverse
      </p>

      <div className="rewards__footer-links">
        <a
          href={WHORIDDLE_APP_STORE_URL}
          className="rewards__footer-link nav-text nav-text--sentence"
          target="_blank"
          rel="noopener noreferrer"
        >
          iOS
        </a>
        <a
          href={WHORIDDLE_GOOGLE_PLAY_URL}
          className="rewards__footer-link nav-text nav-text--sentence"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android
        </a>
      </div>
    </footer>
  )
}
