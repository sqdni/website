import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function preferredScrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth'
}

function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace(/^#/, '')
  if (!id) {
    window.scrollTo({ top: 0, behavior })
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({ behavior, block: 'start' })
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const behavior = preferredScrollBehavior()

    if (hash) {
      // Wait a tick so the destination page has mounted.
      const frame = window.requestAnimationFrame(() => {
        scrollToHash(hash, behavior)
      })
      const timeout = window.setTimeout(() => scrollToHash(hash, behavior), 80)
      return () => {
        window.cancelAnimationFrame(frame)
        window.clearTimeout(timeout)
      }
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
