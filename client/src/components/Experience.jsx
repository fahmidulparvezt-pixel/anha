import { useState } from 'react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { experience } from '../data'

const filters = ['All', 'Teaching', 'Leadership', 'Volunteering']
const badge = {
  Teaching: 'badge-primary',
  Leadership: 'badge-secondary',
  Volunteering: 'badge-accent',
}

export default function Experience() {
  const [filter, setFilter] = useState('All')
  const items = experience.filter((e) => filter === 'All' || e.type === filter)

  return (
    <section id="experience" className="bg-base-200/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Experience"
          title="Teaching, leadership & service"
          subtitle="Years of hands-on experience in and beyond the classroom."
        />

        <div role="tablist" className="tabs tabs-box mx-auto mb-10 w-fit max-w-full flex-wrap justify-center">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              type="button"
              className={`tab ${filter === f ? 'tab-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((e, idx) => (
            <Reveal key={e.role} delay={idx * 80}>
              <article className="card card-border h-full bg-base-100 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`badge badge-soft ${badge[e.type]}`}>{e.type}</span>
                    <span className="text-xs font-medium text-base-content/60">{e.period}</span>
                  </div>
                  <h3 className="card-title mt-1 text-lg leading-snug">{e.role}</h3>
                  <ul className="mt-2 space-y-2 text-sm text-base-content/75">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
