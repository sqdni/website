import type { ReactNode } from 'react'
import domoPlayBg from '../assets/rewards/domo-play-bg.png'

type RewardsPlayZoneProps = {
  children: ReactNode
}

export function RewardsPlayZone({ children }: RewardsPlayZoneProps) {
  return (
    <div className="rewards__play-zone">
      <div className="rewards__play-zone-backdrop" aria-hidden="true">
        <img src={domoPlayBg} alt="" className="rewards__play-zone-backdrop-image" />
        <div className="rewards__play-zone-backdrop-overlay" />
      </div>

      <div className="rewards__play-zone-inner">{children}</div>
    </div>
  )
}
