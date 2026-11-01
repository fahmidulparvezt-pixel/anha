import { FiMessageCircle, FiRefreshCw, FiTool, FiUsers } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { digitalSkills, languages, skills } from '../data'

const icons = { chat: FiMessageCircle, adapt: FiRefreshCw, team: FiUsers, solve: FiTool }

export default function Skills() {
  return (
    <section id="skills" className="bg-base-200/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Skills" title="What I bring" subtitle="People skills, digital skills and languages." />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((s, idx) => {
            const Icon = icons[s.icon]
            return (
              <Reveal key={s.title} delay={idx * 80}>
                <div className="card card-border h-full bg-base-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="card-body flex-row gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary/20 text-secondary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="mt-1 text-sm text-base-content/70">{s.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card card-border h-full bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Digital skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {digitalSkills.map((d) => (
                    <span key={d} className="badge badge-primary badge-soft badge-lg">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card card-border h-full bg-base-100">
              <div className="card-body">
                <h3 className="card-title">Languages</h3>
                <div className="mt-2 space-y-5">
                  {languages.map((l) => (
                    <div key={l.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="font-medium">{l.name}</span>
                        <span className="text-base-content/65">{l.level}</span>
                      </div>
                      <progress className="progress progress-primary w-full" value={l.value} max="100" aria-label={`${l.name} proficiency`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
