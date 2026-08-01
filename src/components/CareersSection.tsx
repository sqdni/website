import { useScrollReveal } from '../hooks/useScrollReveal'
import domoAndFriends from '../assets/values/domo-and-friends.png'
import '../styles/site-sections.css'

const roles = [
  {
    title: 'Front of House',
    tags: ['Full-Time', 'Part-Time', 'Buena Park, CA'],
  },
  {
    title: 'Back of House',
    tags: ['Full-Time', 'Part-Time', 'Buena Park, CA'],
  },
] as const

export function CareersSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
    delayMs: 180,
    once: false,
  })

  return (
    <section
      id="careers"
      ref={ref}
      className={`site-section${isVisible ? ' site-section--revealed' : ''}`}
      aria-labelledby="careers-heading"
    >
      <div className="site-section__inner">
        <div className="careers__content">
          <div className="careers__main">
            <div className="careers__intro">
              <p className="site-section__eyebrow nav-text">Join the Team</p>
              <h2 id="careers-heading" className="site-section__title">
                Join the Domo Cafe Family.
              </h2>
              <p className="site-section__body nav-text nav-text--sentence">
                We&apos;re building something special — and we need people who care. Not just
                workers. People who want to create experiences, serve with pride, and grow with us.
              </p>
            </div>

            <ul className="careers__roles">
              {roles.map((role) => (
                <li key={role.title} className="careers__role">
                  <div className="careers__role-copy">
                    <h3 className="careers__role-title">{role.title}</h3>
                    <p className="careers__role-tags nav-text">
                      {role.tags.join(' · ')}
                    </p>
                  </div>
                  <a className="events__cta" href="mailto:jobs@domokuncafe.com">
                    <span className="events__cta-label">Apply Now</span>
                    <span className="events__cta-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="careers__note nav-text nav-text--sentence">
              Don&apos;t see your role? Email us anyway at{' '}
              <a href="mailto:jobs@domokuncafe.com">jobs@domokuncafe.com</a> — we&apos;re always
              looking for great people.
            </p>
          </div>

          <div className="careers__media">
            <img
              src={domoAndFriends}
              alt="Domo-kun with friends"
              className="careers__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
