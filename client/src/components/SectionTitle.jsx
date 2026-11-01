import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="badge badge-primary badge-soft mb-3 font-semibold uppercase tracking-widest">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base-content/70">{subtitle}</p>}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
    </Reveal>
  )
}
