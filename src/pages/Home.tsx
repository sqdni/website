import { EventsPromotions } from '../components/EventsPromotions'
import { FaqSection } from '../components/FaqSection'
import { FeaturedMenu } from '../components/FeaturedMenu'
import { Hero } from '../components/Hero'
import { VisitSection } from '../components/VisitSection'

export function Home() {
  return (
    <div className="home">
      <Hero />
      <FeaturedMenu />
      <EventsPromotions />
      <VisitSection />
      <FaqSection />
    </div>
  )
}
