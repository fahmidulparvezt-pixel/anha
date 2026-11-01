import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { profile, sections } from '../data'

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => document.activeElement?.blur()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base-100/85 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6" aria-label="Main navigation">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label="Open menu">
              <FiMenu className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-10 mt-3 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-xl"
            >
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} onClick={closeMenu} className={active === s.id ? 'menu-active' : ''}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#home" className="flex items-center gap-2 px-1 text-lg font-bold" aria-label="Go to top">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-sm text-primary-content">
              {profile.initials}
            </span>
            <span className="hidden font-display sm:inline">{profile.shortName}</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`rounded-full text-sm font-medium ${active === s.id ? 'menu-active' : ''}`}
                  aria-current={active === s.id ? 'true' : undefined}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-sm hidden rounded-full sm:inline-flex">
            Hire / Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
