import { FiArrowUp, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { profile, sections } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary font-display text-primary-content">
              {profile.initials}
            </span>
            <span className="font-display text-xl font-bold">{profile.name}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-75">
            {profile.roles.join(' · ')}. Committed to creative, student-centered teaching and to building a more
            peaceful, caring community.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-60">Quick links</h6>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="opacity-80 transition hover:text-primary hover:opacity-100">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h6 className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-60">Get in touch</h6>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FiMail className="text-primary" />
              <a href={`mailto:${profile.email}`} className="break-all opacity-80 hover:opacity-100">{profile.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-primary" />
              <a href={`tel:${profile.phone}`} className="opacity-80 hover:opacity-100">{profile.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="text-primary" />
              <span className="opacity-80">{profile.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs opacity-70 sm:flex-row sm:px-6">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; DaisyUI</p>
          <a href="#home" className="btn btn-xs btn-outline rounded-full border-white/30 text-neutral-content hover:bg-primary hover:text-primary-content">
            <FiArrowUp /> Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
