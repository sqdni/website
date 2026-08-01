import { CareersSection } from '../components/CareersSection'
import { ContactSection } from '../components/ContactSection'
import { PartnershipSection } from '../components/PartnershipSection'
import { ValuesSection } from '../components/ValuesSection'

export function About() {
  return (
    <div className="about">
      <ValuesSection />
      <PartnershipSection />
      <CareersSection />
      <ContactSection />
    </div>
  )
}
