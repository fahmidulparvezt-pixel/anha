import { FiAward } from 'react-icons/fi'
import { LuGraduationCap } from 'react-icons/lu'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle eyebrow="Education" title="Academic background" subtitle="A consistent record of top results." />
        <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          {education.map((e, idx) => (
            <li key={e.degree}>
              {idx > 0 && <hr className="bg-primary" />}
              <div className="timeline-middle">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-content">
                  <LuGraduationCap className="h-5 w-5" />
                </div>
              </div>
              <div className={`${idx % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'} mb-8 w-full`}>
                <Reveal>
                  <div className="card card-border bg-base-100 transition hover:shadow-lg">
                    <div className="card-body p-5">
                      <h3 className="font-display text-lg font-bold">{e.degree}</h3>
                      <p className="text-base-content/75">{e.school}</p>
                      <div className={`mt-1 flex ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="badge badge-success badge-soft gap-1 font-semibold">
                          <FiAward /> {e.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              {idx < education.length - 1 && <hr className="bg-primary" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
