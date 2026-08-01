import type { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { SiteFooter } from './SiteFooter'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">{children}</main>
      <SiteFooter />
    </div>
  )
}
