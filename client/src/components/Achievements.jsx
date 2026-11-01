import { FiAward, FiTrendingUp } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { achievements, teachingImpact } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Achievements"
          title="Recognition & impact"
          subtitle="Competition wins and results from my students."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((a, idx) => (
            <Reveal key={`${a.title}-${a.level}`} delay={idx * 100}>
              <div className="card card-border h-full bg-base-100 text-center transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body items-center">
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-full font-display text-xl font-extrabold ${
                      a.place === '1st' ? 'bg-warning text-warning-content' : 'bg-base-300 text-base-content'
                    }`}
                  >
                    {a.place}
                  </div>
                  <h3 className="card-title mt-2">{a.title}</h3>
                  <p className="text-sm text-base-content/70">{a.event}</p>
                  <span className="badge badge-primary badge-soft mt-1">{a.level}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="alert alert-soft alert-info items-start sm:items-center">
            <FiTrendingUp className="mt-0.5 h-6 w-6 shrink-0 sm:mt-0" />
            <div>
              <h4 className="font-semibold">Teaching impact</h4>
              <p className="text-sm">{teachingImpact}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
