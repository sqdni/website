import { useEffect, useState } from 'react'

/** Grand opening date used for the “Open for” counter. */
const OPENED_AT = new Date('2026-06-13T10:00:00-07:00')

type OpenDuration = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getOpenDuration(now: Date): OpenDuration {
  const diff = Math.max(0, now.getTime() - OPENED_AT.getTime())
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function OpenForCounter() {
  const [duration, setDuration] = useState(() => getOpenDuration(new Date()))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDuration(getOpenDuration(new Date()))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const units = [
    { label: 'Days', value: String(duration.days) },
    { label: 'Hours', value: pad(duration.hours) },
    { label: 'Minutes', value: pad(duration.minutes) },
    { label: 'Seconds', value: pad(duration.seconds) },
  ] as const

  return (
    <div className="hero__open-for" aria-label="Time since Domo Cafe opened">
      <p className="hero__open-for-label">Open for</p>
      <div className="hero__open-for-grid">
        {units.map((unit, index) => (
          <div key={unit.label} className="hero__open-for-unit">
            {index > 0 ? (
              <span className="hero__open-for-sep" aria-hidden="true">
                :
              </span>
            ) : null}
            <div className="hero__open-for-cell">
              <div className="hero__open-for-block">
                <span className="hero__open-for-value">{unit.value}</span>
              </div>
              <span className="hero__open-for-unit-label nav-text">{unit.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
