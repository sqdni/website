import { useEffect, useState } from 'react'
import hero1 from '../assets/hero/hero-1.png'
import hero2 from '../assets/hero/hero-2.png'
import hero3 from '../assets/hero/hero-3.png'
import hero4 from '../assets/hero/hero-4.png'
import mascotJumping from '../assets/mascots/mascot-jumping.png'
import mascotStanding from '../assets/mascots/mascot-standing.png'
import mascotLying from '../assets/mascots/mascot-lying.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HeroSocial } from './HeroSocial'
import '../styles/hero.css'

const HERO_INTERVAL_MS = 5000
const MASCOT_INTERVAL_MS = 4500
const MASCOT_START_DELAY_MS = 2200

const heroSlides = [hero2, hero3, hero4, hero1] as const
const mascotSlides = [
  mascotJumping,
  mascotStanding,
  mascotLying,
  mascotJumping,
] as const

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Hero() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [mascotIndex, setMascotIndex] = useState(0)
  const [motionOk, setMotionOk] = useState(() =>
    typeof window !== 'undefined' ? !prefersReducedMotion() : true,
  )
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: [0, 0.1, 0.25],
    delayMs: 400,
    enterRatio: 0.1,
    once: false,
  })

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setMotionOk(!media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!motionOk) return

    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length)
    }, HERO_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [motionOk])

  useEffect(() => {
    if (!motionOk) return

    let mascotTimer: number | undefined

    const startTimer = window.setTimeout(() => {
      setMascotIndex((current) => (current + 1) % mascotSlides.length)
      mascotTimer = window.setInterval(() => {
        setMascotIndex((current) => (current + 1) % mascotSlides.length)
      }, MASCOT_INTERVAL_MS)
    }, MASCOT_START_DELAY_MS)

    return () => {
      window.clearTimeout(startTimer)
      if (mascotTimer !== undefined) {
        window.clearInterval(mascotTimer)
      }
    }
  }, [motionOk])

  return (
    <section
      ref={ref}
      className={`hero${isVisible ? ' hero--revealed' : ''}`}
      aria-label="Welcome"
    >
      <div className="hero__slides" aria-hidden="true">
        {heroSlides.map((image, index) => (
          <div
            key={`hero-${index}`}
            className={`hero__slide${index === heroIndex ? ' hero__slide--active' : ''}`}
          >
            <img src={image} alt="" className="hero__slide-image" />
          </div>
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="hero__mascots" aria-hidden="true">
          {mascotSlides.map((mascot, index) => (
            <img
              key={`mascot-${index}`}
              src={mascot}
              alt=""
              className={`hero__mascot-image${
                index === mascotIndex ? ' hero__mascot-image--active' : ''
              }`}
            />
          ))}
        </div>

        <div className="hero__copy">
          <h1 className="hero__title">
            More than a cafe —
            <span className="hero__title-accent">an experience.</span>
          </h1>

          <div className="hero__details">
            <p className="hero__tagline nav-text">
              An immersive character café unlike anything you&apos;ve seen.
            </p>

            <p className="hero__address nav-text nav-text--sentence">
              <span aria-hidden="true">📍 </span>
              8340 La Palma Ave, Buena Park, CA 90620
            </p>
          </div>

          <div className="hero__stay-updated">
            <p className="hero__stay-updated-label nav-text">Want to stay in the loop?</p>
            <a
              className="hero__stay-updated-cta events__cta"
              href="https://www.instagram.com/domokuncafe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="events__cta-label">Stay Updated</span>
              <span className="events__cta-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <HeroSocial />
        </div>
      </div>
    </section>
  )
}
