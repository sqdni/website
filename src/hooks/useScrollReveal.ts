import { useEffect, useRef, useState } from 'react'

type UseScrollRevealOptions = {
  threshold?: number | number[]
  rootMargin?: string
  once?: boolean
  delayMs?: number
  /** Wait for the exit slide to finish before allowing re-entry (ms). */
  exitTransitionMs?: number
  /** Minimum visible ratio before the enter delay starts. */
  enterRatio?: number
  /**
   * 0–1 line on the viewport (from top). The section's top edge must be at or
   * above this line before reveal can start — keeps lower sections from firing
   * while an upper section is still on screen.
   */
  enterViewportLine?: number
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>({
  threshold = 0,
  rootMargin = '0px 0px -6% 0px',
  once = true,
  delayMs = 0,
  exitTransitionMs = 500,
  enterRatio = 0.1,
  enterViewportLine,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasRevealed = useRef(false)
  const hiddenAt = useRef(0)
  const isVisibleRef = useRef(false)

  useEffect(() => {
    isVisibleRef.current = isVisible
  }, [isVisible])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let delayTimer: number | undefined

    const clearDelayTimer = () => {
      if (delayTimer !== undefined) {
        window.clearTimeout(delayTimer)
        delayTimer = undefined
      }
    }

    const hide = () => {
      if (!isVisibleRef.current) return

      setIsVisible(false)
      hiddenAt.current = Date.now()
    }

    const isPastViewportLine = (entry: IntersectionObserverEntry) => {
      if (enterViewportLine === undefined) return true

      const viewportHeight =
        entry.rootBounds?.height ??
        window.innerHeight

      return entry.boundingClientRect.top <= viewportHeight * enterViewportLine
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio
        const hasEntered =
          entry.isIntersecting &&
          ratio >= enterRatio &&
          isPastViewportLine(entry)

        if (!hasEntered) {
          clearDelayTimer()

          if (!once && (!entry.isIntersecting || ratio === 0)) {
            hide()
          }

          return
        }

        if (once && hasRevealed.current) return

        clearDelayTimer()

        const reveal = () => {
          setIsVisible(true)
          if (once) {
            hasRevealed.current = true
            observer.disconnect()
          }
        }

        const exitWait = Math.max(
          0,
          exitTransitionMs - (Date.now() - hiddenAt.current),
        )
        const totalDelay = delayMs + exitWait

        if (totalDelay > 0) {
          delayTimer = window.setTimeout(reveal, totalDelay)
        } else {
          reveal()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      clearDelayTimer()
      observer.disconnect()
    }
  }, [
    delayMs,
    enterRatio,
    enterViewportLine,
    exitTransitionMs,
    once,
    rootMargin,
    threshold,
  ])

  return { ref, isVisible }
}
