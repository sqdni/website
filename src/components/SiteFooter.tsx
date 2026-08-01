import { Link } from 'react-router-dom'
import logo from '../assets/domo-cafe-logo.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HeroSocial } from './HeroSocial'
import '../styles/site-sections.css'

export function SiteFooter() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
    rootMargin: '0px 0px -6% 0px',
    delayMs: 120,
    once: false,
  })

  return (
    <footer
      ref={ref}
      className={`site-footer${isVisible ? ' site-footer--revealed' : ''}`}
    >
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo-link" aria-label="Domo Cafe home">
            <img src={logo} alt="" className="site-footer__logo" />
          </Link>
          <p className="site-footer__tag site-footer__tag--desktop">
            An NHK Licensed Character Café
          </p>
        </div>

        <div className="site-footer__meta">
          <p className="site-footer__tag site-footer__tag--mobile">
            An NHK Licensed Character Café
          </p>
          <p className="site-footer__copy">© 2026 Domo Cafe</p>
          <p className="site-footer__copy">
            8340 La Palma Ave, Buena Park, CA 90620
          </p>
          <p className="site-footer__copy">
            <a href="mailto:info@domokuncafe.com">info@domokuncafe.com</a>
          </p>
          <p className="site-footer__legal">Domo-kun © NHK</p>
        </div>

        <div className="site-footer__social">
          <HeroSocial />
        </div>
      </div>
    </footer>
  )
}
