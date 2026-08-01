import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FEATURED_MENU_ITEMS } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/featured-menu.css'

const AUTO_CYCLE_MS = 4000
const SWIPE_THRESHOLD_PX = 40

export function FeaturedMenu() {
  const [index, setIndex] = useState(0)
  const swipeStartX = useRef<number | null>(null)
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -10% 0px',
    delayMs: 180,
    once: false,
  })

  const total = FEATURED_MENU_ITEMS.length

  useEffect(() => {
    if (total <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, AUTO_CYCLE_MS)

    return () => window.clearInterval(timer)
  }, [total, index])

  const goPrev = () =>
    setIndex((current) => (current - 1 + total) % total)
  const goNext = () => setIndex((current) => (current + 1) % total)

  const onSwipeStart = (clientX: number) => {
    swipeStartX.current = clientX
  }

  const onSwipeEnd = (clientX: number) => {
    if (swipeStartX.current == null) return
    const delta = clientX - swipeStartX.current
    swipeStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
    if (delta > 0) goPrev()
    else goNext()
  }

  return (
    <section
      ref={ref}
      className={`featured-menu${isVisible ? ' featured-menu--revealed' : ''}`}
      aria-labelledby="featured-menu-heading"
    >
      <div className="featured-menu__inner">
        <header className="featured-menu__header">
          <p className="featured-menu__eyebrow nav-text">What We&apos;re Serving</p>
          <h2 id="featured-menu-heading" className="featured-menu__title">
            Food worth the wait.
          </h2>
        </header>

        <div className="featured-menu__carousel">
          <button
            type="button"
            className="featured-menu__arrow featured-menu__arrow--prev"
            onClick={goPrev}
            aria-label="Previous dish"
          >
            <svg
              className="featured-menu__arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 4L7 12l8 8"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="featured-menu__stage-wrap"
            onTouchStart={(event) => onSwipeStart(event.changedTouches[0]?.clientX ?? 0)}
            onTouchEnd={(event) => onSwipeEnd(event.changedTouches[0]?.clientX ?? 0)}
            onTouchCancel={() => {
              swipeStartX.current = null
            }}
          >
            <div className="featured-menu__stage" aria-live="polite">
              {FEATURED_MENU_ITEMS.map((item, itemIndex) => (
                <article
                  key={item.id}
                  className={`featured-menu__slide${
                    itemIndex === index ? ' featured-menu__slide--active' : ''
                  }`}
                  aria-hidden={itemIndex !== index}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="featured-menu__image"
                      loading={itemIndex === 0 ? 'eager' : 'lazy'}
                      draggable={false}
                    />
                  ) : null}
                  <p className="featured-menu__price">{item.price}</p>
                  <div className="featured-menu__overlay">
                    {item.badge ? (
                      <span className="featured-menu__badge">
                        <span aria-hidden="true">⭐</span> Domo Pick
                      </span>
                    ) : null}
                    <div className="featured-menu__card-top">
                      <h3 className="featured-menu__name">{item.name}</h3>
                    </div>
                    <p className="featured-menu__desc nav-text nav-text--sentence">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="featured-menu__arrow featured-menu__arrow--next"
            onClick={goNext}
            aria-label="Next dish"
          >
            <svg
              className="featured-menu__arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 4l8 8-8 8"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="featured-menu__dots" role="tablist" aria-label="Featured dishes">
          {FEATURED_MENU_ITEMS.map((item, itemIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={`featured-menu__dot${
                itemIndex === index ? ' featured-menu__dot--active' : ''
              }`}
              aria-selected={itemIndex === index}
              aria-label={`${item.name}${itemIndex === index ? ' (current)' : ''}`}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>

        <div className="featured-menu__nav">
          <Link to="/menu" className="featured-menu__cta events__cta">
            <span className="events__cta-label">See Full Menu</span>
            <span className="events__cta-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
