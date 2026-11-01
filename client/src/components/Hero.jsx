import { useEffect, useState } from 'react'
import { FiArrowDown, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { profile, stats } from '../data'

function Avatar() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary via-accent to-secondary opacity-60 blur-2xl" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-base-100 bg-base-200 shadow-2xl">
        {failed ? (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary to-accent">
            <span className="font-display text-7xl font-bold text-primary-content">{profile.initials}</span>
          </div>
        ) : (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover object-[50%_center]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className="absolute -bottom-4 -left-4 rounded-2xl border border-base-300 bg-base-100 px-4 py-2 shadow-lg">
        <p className="text-xs text-base-content/60">Based in</p>
        <p className="text-sm font-semibold">Brahmanbaria, BD</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="hero-glow relative flex min-h-screen items-center pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="badge badge-outline badge-primary mb-5 gap-2 py-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> Open to research opportunities
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl xl:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>
          <p key={i} className="mt-4 h-9 animate-[fadeIn_0.6s_ease] text-xl font-semibold text-primary sm:text-2xl">
            {profile.roles[i]}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-base-content/75 lg:mx-0">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#contact" className="btn btn-primary rounded-full px-7">
              <FiMail /> Get in touch
            </a>
            <a href="#experience" className="btn btn-outline rounded-full px-7">
              View experience
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-base-content/70 lg:justify-start">
            <li className="flex items-center gap-2">
              <FiPhone className="text-primary" /> {profile.phone}
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-primary" /> {profile.address}
            </li>
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-box border border-base-300 bg-base-100/70 p-4 backdrop-blur">
                <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-base-content/65">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Avatar />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-base-content/50 lg:block"
      >
        <FiArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
