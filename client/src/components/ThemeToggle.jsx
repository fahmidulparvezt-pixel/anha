import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'folio-light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const dark = theme === 'folio-dark'
  return (
    <button
      type="button"
      className="btn btn-ghost btn-circle"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(dark ? 'folio-light' : 'folio-dark')}
    >
      {dark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  )
}
