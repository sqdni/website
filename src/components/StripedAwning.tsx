import logo from '../assets/domo-cafe-logo.png'
import '../styles/awning.css'

type StripedAwningProps = {
  showLogo?: boolean
}

export function StripedAwning({ showLogo = true }: StripedAwningProps) {
  return (
    <div className={`awning${showLogo ? '' : ' awning--no-logo'}`}>
      <div className="awning__shape" aria-hidden="true">
        <div className="awning__outline" />
        <div className="awning__stripes" />
      </div>
      {showLogo ? (
        <img src={logo} alt="Domo Cafe" className="awning__logo" />
      ) : null}
    </div>
  )
}
