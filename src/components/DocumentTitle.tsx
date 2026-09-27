import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TITLES: Record<string, string> = {
  '/': 'Domo Cafe | Buena Park Character Cafe',
  '/about': 'About | Domo Cafe',
  '/menu': 'Menu | Domo Cafe',
  '/rewards': 'Rewards | Domo Cafe',
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] ?? 'Domo Cafe'
  }, [pathname])

  return null
}
