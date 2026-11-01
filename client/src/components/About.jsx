import { FiBookOpen, FiHeart, FiUsers } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { profile } from '../data'

const pillars = [
  { icon: FiBookOpen, title: 'Student-centered teaching', text: 'Creative methods that match how each learner learns best.' },
  { icon: FiUsers, title: 'Community leadership', text: 'Debating society leadership and hands-on volunteering.' },
  { icon: FiHeart, title: 'Peace advocacy', text: 'Empathy, dialogue and respect in every classroom and community.' },
]

export default function About() {
  return (
    <section id="about" className="bg-base-200/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="About me" title="Who I am" subtitle="Teacher at heart, debater by habit, volunteer by choice." />
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4 text-base leading-relaxed text-base-content/80">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <div className="grid gap-4">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 100}>
                <div className="card card-border bg-base-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="card-body flex-row items-center gap-4 p-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-base-content/70">{p.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
