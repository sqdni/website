import { type FormEvent, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/site-sections.css'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px',
    delayMs: 180,
    once: false,
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`site-section site-section--cream${isVisible ? ' site-section--revealed' : ''}`}
      aria-labelledby="contact-heading"
    >
      <div className="site-section__inner contact">
        <div className="contact__copy">
          <p className="site-section__eyebrow nav-text">Get in touch.</p>
          <h2 id="contact-heading" className="site-section__title">
            Have a question, a partnership idea, or just want to say hi?
          </h2>
          <p className="site-section__body nav-text nav-text--sentence">
            We&apos;d <strong className="contact__love">love</strong> to hear from you.
          </p>

          <ul className="contact__details">
            <li>
              <span aria-hidden="true">📍</span>
              <span className="nav-text nav-text--sentence">
                8340 La Palma Ave, Buena Park, CA 90620
              </span>
            </li>
            <li>
              <span aria-hidden="true">📧</span>
              <a className="nav-text nav-text--sentence" href="mailto:info@domokuncafe.com">
                info@domokuncafe.com
              </a>
            </li>
            <li>
              <span aria-hidden="true">⏰</span>
              <span className="nav-text nav-text--sentence">
                Mon–Fri 11am–8pm · Sat–Sun 10am–8pm
              </span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label className="contact__field">
            <span className="nav-text">Your Name</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label className="contact__field">
            <span className="nav-text">Email Address</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="contact__field">
            <span className="nav-text">Your message...</span>
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className="events__cta">
            <span className="events__cta-label">
              {submitted ? 'Message Sent' : 'Send Message'}
            </span>
            <span className="events__cta-arrow" aria-hidden="true">
              →
            </span>
          </button>
          {submitted ? (
            <p className="contact__thanks nav-text nav-text--sentence">
              Thanks! This form is a preview — email us at info@domokuncafe.com for now.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
