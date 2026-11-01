import { FiCheckCircle } from 'react-icons/fi'
import { LuBadgeCheck } from 'react-icons/lu'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { certificates } from '../data'

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Certificates"
          title="Certifications"
          subtitle="Verified credentials in data, AI and computer operation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {certificates.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 100}>
              <article className="card card-border h-full bg-base-100 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body">
                  <div className="flex items-center gap-2 text-success">
                    <LuBadgeCheck className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-wide">{c.detail}</span>
                  </div>
                  <h3 className="card-title mt-1 font-display text-lg leading-snug">{c.title}</h3>
                  <p className="text-sm text-base-content/75">{c.issuer}</p>
                  <p className="text-sm font-medium text-primary">{c.date}</p>
                  <p className="font-mono text-xs text-base-content/55">{c.id}</p>

                  {c.units && (
                    <div className="collapse collapse-arrow mt-2 border border-base-300 bg-base-200/50">
                      <input type="checkbox" aria-label="Show competency units" />
                      <div className="collapse-title text-sm font-medium">Competency units ({c.units.length})</div>
                      <div className="collapse-content">
                        <ul className="space-y-1.5 text-sm">
                          {c.units.map((u) => (
                            <li key={u} className="flex gap-2">
                              <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                              <span>{u}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
