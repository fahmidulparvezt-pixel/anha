import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { profile } from '../data'

const API = import.meta.env.VITE_API_URL || ''

const info = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: 'Address', value: profile.address },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', text: '' })
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not send your message.')
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' })
      setForm({ name: '', email: '', message: '', website: '' })
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    }
  }

  return (
    <section id="contact" className="bg-base-200/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's talk"
          subtitle="Looking for a tutor, an instructor or a debate collaborator? Send me a message."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-4">
            {info.map((i) => (
              <div key={i.label} className="card card-border bg-base-100">
                <div className="card-body flex-row items-center gap-4 p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-base-content/55">{i.label}</p>
                    {i.href ? (
                      <a href={i.href} className="link link-hover break-all font-medium">
                        {i.value}
                      </a>
                    ) : (
                      <p className="font-medium">{i.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="card card-border bg-base-100" noValidate>
              <div className="card-body gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="form-control">
                    <span className="mb-1 block text-sm font-medium">Your name</span>
                    <input name="name" value={form.name} onChange={onChange} required className="input w-full" placeholder="Your full name" autoComplete="name" />
                  </label>
                  <label className="form-control">
                    <span className="mb-1 block text-sm font-medium">Email</span>
                    <input name="email" type="email" value={form.email} onChange={onChange} required className="input w-full" placeholder="you@example.com" autoComplete="email" />
                  </label>
                </div>

                {/* Honeypot: hidden from real users */}
                <input name="website" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <label className="form-control">
                  <span className="mb-1 block text-sm font-medium">Message</span>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="textarea w-full" placeholder="How can I help you?" />
                </label>

                {status.type === 'success' && <div role="status" className="alert alert-success alert-soft">{status.text}</div>}
                {status.type === 'error' && <div role="alert" className="alert alert-error alert-soft">{status.text}</div>}

                <button type="submit" className="btn btn-primary rounded-full" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? <span className="loading loading-spinner loading-sm" /> : <FiSend />}
                  {status.type === 'loading' ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
