import { RewardsAppPreview } from '../components/RewardsAppPreview'
import { RewardsBagsHero } from '../components/RewardsBagsHero'
import { RewardsHowToPlay } from '../components/RewardsHowToPlay'
import { RewardsSectionCloud } from '../components/RewardsSectionCloud'
import { RewardsFooter } from '../components/RewardsFooter'
import { RewardsPlayZone } from '../components/RewardsPlayZone'
import { WhoRiddlePromo } from '../components/WhoRiddlePromo'
import '../styles/rewards.css'

export function Rewards() {
  return (
    <section className="rewards" aria-labelledby="rewards-hero-heading">
      <RewardsBagsHero />
      <div className="rewards__below-hero">
        <WhoRiddlePromo />
        <div className="rewards__section-gap">
          <RewardsSectionCloud />
        </div>
        <RewardsPlayZone>
          <RewardsHowToPlay />
          <RewardsAppPreview />
          <RewardsFooter />
        </RewardsPlayZone>
      </div>
    </section>
  )
}
