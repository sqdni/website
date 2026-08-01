import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/domo-cafe-logo.png'
import '../styles/navbar.css'

type NavChild = {
  to: string
  label: string
}

type NavItem =
  | { type: 'link'; to: string; label: string }
  | { type: 'dropdown'; to: string; label: string; children: NavChild[] }

const navItems: NavItem[] = [
  {
    type: 'dropdown',
    to: '/',
    label: 'home',
    children: [
      { to: '/#events', label: 'Events' },
      { to: '/#visit', label: 'Visit Us' },
      { to: '/#faq', label: 'FAQ' },
    ],
  },
  {
    type: 'dropdown',
    to: '/about',
    label: 'about',
    children: [
      { to: '/about#values', label: 'Values' },
      { to: '/about#careers', label: 'Join the Family' },
      { to: '/about#contact', label: 'Get in Touch' },
    ],
  },
  {
    type: 'dropdown',
    to: '/menu',
    label: 'menu',
    children: [
      { to: '/menu#plates', label: 'Plates' },
      { to: '/menu#handhelds', label: 'Handhelds' },
      { to: '/menu#drinks', label: 'Drinks' },
      { to: '/menu#desserts', label: 'Desserts' },
    ],
  },
  { type: 'link', to: '/rewards', label: 'rewards' },
]

function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function NavDropdown({
  item,
  pathname,
  onNavigate,
}: {
  item: Extract<NavItem, { type: 'dropdown' }>
  pathname: string
  onNavigate: () => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const menuId = useId()
  const isActive =
    item.to === '/'
      ? pathname === '/'
      : pathname === item.to || pathname.startsWith(`${item.to}/`)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <li
      ref={rootRef}
      className={`navbar__item navbar__item--dropdown${open ? ' navbar__item--open' : ''}`}
      onMouseEnter={() => {
        if (window.innerWidth > 720) setOpen(true)
      }}
      onMouseLeave={() => {
        if (window.innerWidth > 720) setOpen(false)
      }}
    >
      <div className="navbar__dropdown-trigger">
        <NavLink
          to={item.to}
          className={() => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
          onClick={() => {
            setOpen(false)
            onNavigate()
            if (pathname === item.to) {
              scrollToPageTop()
            }
          }}
        >
          {item.label}
        </NavLink>
        <button
          type="button"
          className="navbar__caret"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={`${item.label} menu`}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="navbar__chevron navbar__chevron--down" aria-hidden="true" />
        </button>
      </div>

      <ul id={menuId} className="navbar__dropdown" hidden={!open}>
        <li className="navbar__dropdown-panel">
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className="navbar__dropdown-link"
              onClick={() => {
                setOpen(false)
                onNavigate()
              }}
            >
              {child.label}
            </Link>
          ))}
        </li>
      </ul>
    </li>
  )
}

export function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className={`navbar-wrap${mobileOpen ? ' navbar-wrap--open' : ''}`}>
      <nav className="navbar" aria-label="Main">
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link
              to="/"
              className="navbar__home"
              aria-label="Domo Cafe home"
              onClick={() => {
                if (pathname === '/') {
                  scrollToPageTop()
                }
              }}
            >
              <img src={logo} alt="" className="navbar__logo" />
            </Link>
          </li>

          {navItems.map((item) =>
            item.type === 'link' ? (
              <li key={item.to} className="navbar__item navbar__item--link">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                  }
                  onClick={() => {
                    setMobileOpen(false)
                    if (pathname === item.to) {
                      scrollToPageTop()
                    }
                  }}
                >
                  <span>{item.label}</span>
                  <span className="navbar__chevron" aria-hidden="true" />
                </NavLink>
              </li>
            ) : (
              <NavDropdown
                key={item.to}
                item={item}
                pathname={pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            ),
          )}
        </ul>
        <button
          type="button"
          className="navbar__mobile-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
  )
}
