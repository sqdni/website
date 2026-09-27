import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { SiteFooter } from './SiteFooter'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="layout__main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
