import { useScrollReveal } from '../hooks/useScrollReveal'
import visitBackground from '../assets/visit/visit-domo-bg.png'
import '../styles/visit.css'

const ADDRESS_LINE_1 = '8340 La Palma Ave'
const ADDRESS_LINE_2 = 'Buena Park, CA 90620'
const PHONE_DISPLAY = '(415) 360 3666'
const PHONE_HREF = 'tel:+14153603666'
const MAP_URL =
  'https://maps.app.goo.gl/K1MTCNfWNCfGctQZ7'

const WEEKDAY_HOURS = '11:00 AM – 8:00 PM'
const WEEKEND_HOURS = '10:00 AM – 8:00 PM'

const HOURS = [
  { label: 'Weekdays', time: WEEKDAY_HOURS },
  { label: 'Weekends', time: WEEKEND_HOURS },
] as const

const VISIT_NOTES = [
  {
    emoji: '🍽️',
    label: 'Last seating at 8:00 PM',
    detail: 'kitchen closes promptly',
    icon: '!',
  },
  {
    emoji: '💳',
    label: "We're a cashless cafe",
    detail: 'all major cards & contactless payments accepted, no cash',
    icon: '!',
  },
  {
    emoji: '🅿️',
    label: 'Free parking',
    detail: 'large lot at Buena Park Downtown',
  },
] as const

export function VisitSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -12% 0px',
    delayMs: 220,
    once: false,
  })

  return (
    <section
      id="visit"
      ref={ref}
      className={`visit${isVisible ? ' visit--revealed' : ''}`}
      aria-labelledby="visit-heading"
    >
      <img
        src={visitBackground}
        alt=""
        className="visit__background"
        aria-hidden="true"
      />

      <div className="visit__content">
        <div className="visit__inner">
          <div className="visit__stack">
            <div className="visit__card">
              <h2 id="visit-heading" className="visit__title">
                Visit Us - Domo Cafe, Buena Park
              </h2>

              <div className="visit__location">
                <span className="visit__emoji" aria-hidden="true">
                  📍
                </span>
                <address className="visit__address nav-text nav-text--sentence">
                  <a
                    href={MAP_URL}
                    className="visit__address-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
                    </span>
                  </a>
                </address>
              </div>

              <div className="visit__phone">
                <span className="visit__emoji" aria-hidden="true">
                  📞
                </span>
                <a
                  href={PHONE_HREF}
                  className="visit__phone-number nav-text nav-text--sentence"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div className="visit__hours">
                <div className="visit__hours-heading">
                  <span className="visit__emoji" aria-hidden="true">
                    🕐
                  </span>
                  <p className="visit__hours-label nav-text">Hours</p>
                </div>

                <dl className="visit__hours-list">
                  {HOURS.map((row) => (
                    <div key={row.label} className="visit__hours-row">
                      <dt className="visit__hours-days nav-text nav-text--sentence">
                        {row.label}:
                      </dt>
                      <dd className="visit__hours-time nav-text nav-text--sentence">
                        {row.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <a
                href={MAP_URL}
                className="visit__cta events__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="events__cta-label">Map</span>
                <span className="events__cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>

              <p className="visit__holiday-note nav-text nav-text--sentence">
                Holiday hours may vary. Follow{' '}
                <a
                  href="https://www.instagram.com/domokuncafe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @domokuncafe
                </a>{' '}
                for updates.
              </p>
            </div>

            <ul className="visit__chips">
              {VISIT_NOTES.map((note) => (
                <li key={note.emoji} className="visit__chip">
                  <span className="visit__chip-emoji" aria-hidden="true">
                    {note.emoji}
                  </span>
                  <p className="visit__chip-text nav-text nav-text--sentence">
                    <strong>{note.label}</strong>
                    {' — '}
                    {note.detail}
                  </p>
                  {'icon' in note && note.icon ? (
                    <span className="visit__chip-mark" aria-hidden="true">
                      {note.icon}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
