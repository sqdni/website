import type { CSSProperties } from 'react'
import characterMeetImage from '../assets/events/character-meet.png'
import communityNightImage from '../assets/events/community-night.png'
import seasonalMenuImage from '../assets/events/seasonal-menu.png'
import { OpenForCounter } from './OpenForCounter'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/events.css'

const INSTAGRAM_URL = 'https://www.instagram.com/domokuncafe'

const upcomingEvents = [
  {
    id: 'character-meet',
    category: 'Character Meet',
    title: 'Domo-kun Character Appearances',
    description:
      'Special character meet-and-greet events featuring Domo-kun. Photo ops, surprise appearances, and exclusive merch. Details dropping soon.',
    image: characterMeetImage,
  },
  {
    id: 'seasonal-popup',
    category: 'Pop-Up',
    title: 'Seasonal Menu Launch',
    description:
      'Limited-time seasonal dishes crafted by our kitchen. Special tastings, first looks, and exclusive pricing for guests who show up on launch day.',
    image: seasonalMenuImage,
  },
  {
    id: 'community-night',
    category: 'Community',
    title: 'Domo Cafe Community Night',
    description:
      'A night for the community — local artists, creators, and fans of Japanese culture. Good food, good vibes, good people. More details to come.',
    image: communityNightImage,
  },
] as const

export function EventsPromotions() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
    delayMs: 180,
    once: false,
  })

  return (
    <section
      id="events"
      ref={ref}
      className={`events${isVisible ? ' events--revealed' : ''}`}
      aria-labelledby="events-heading"
    >
      <div className="events__inner">
        <header className="events__header">
          <div className="events__header-row">
            <div className="events__header-titles">
              <p className="events__eyebrow nav-text">Events</p>
              <h2 id="events-heading" className="events__heading">
                Stay tuned for what&apos;s coming.
              </h2>
            </div>
            <div className="events__timer">
              <OpenForCounter />
            </div>
            <p className="events__intro nav-text nav-text--sentence">
              <strong>We&apos;re just getting started.</strong> Follow us on
              social media so you never miss a moment.
            </p>
          </div>
        </header>

        <ul className="events__upcoming">
          {upcomingEvents.map((event, index) => (
            <li
              key={event.id}
              className="events__card"
              style={{ '--events-card-index': index } as CSSProperties}
            >
              <div className="events__card-top">
                <div className="events__card-status-wrap">
                  <p className="events__card-status nav-text">Coming Soon</p>
                  <span className="events__card-status-mark" aria-hidden="true" />
                </div>
                <p className="events__card-category nav-text">{event.category}</p>
              </div>
              <div className="events__card-media">
                <img
                  src={event.image}
                  alt=""
                  className="events__card-image"
                  loading="lazy"
                />
              </div>
              <div className="events__card-body">
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-text nav-text nav-text--sentence">
                  {event.description}
                </p>
                <a
                  className="events__follow events__cta"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="events__cta-label">🔔 Follow for Updates</span>
                  <span className="events__cta-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
