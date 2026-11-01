import express from 'express'
import cors from 'cors'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 5000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*'
const DATA_DIR = path.join(__dirname, 'data')
const DATA_FILE = path.join(DATA_DIR, 'messages.json')
const DIST_DIR = path.join(__dirname, '..', 'client', 'dist')

const app = express()
app.use(cors({ origin: CLIENT_ORIGIN === '*' ? true : CLIENT_ORIGIN.split(',') }))
app.use(express.json({ limit: '10kb' }))

// Very small in-memory rate limit: 5 messages / 10 minutes / IP
const hits = new Map()
function rateLimit(req, res, next) {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000
  const list = (hits.get(req.ip) || []).filter((t) => now - t < windowMs)
  if (list.length >= 5) {
    return res.status(429).json({ ok: false, error: 'Too many messages. Please try again later.' })
  }
  list.push(now)
  hits.set(req.ip, list)
  next()
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/contact', rateLimit, async (req, res) => {
  const { name = '', email = '', message = '', website = '' } = req.body || {}

  // Honeypot field: real users never fill this
  if (website) return res.json({ ok: true })

  const clean = {
    name: String(name).trim().slice(0, 80),
    email: String(email).trim().slice(0, 120),
    message: String(message).trim().slice(0, 2000),
  }

  if (clean.name.length < 2) return res.status(400).json({ ok: false, error: 'Please enter your name.' })
  if (!emailRe.test(clean.email)) return res.status(400).json({ ok: false, error: 'Please enter a valid email.' })
  if (clean.message.length < 10) return res.status(400).json({ ok: false, error: 'Message is too short.' })

  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
    let list = []
    try {
      list = JSON.parse(await fs.readFile(DATA_FILE, 'utf8'))
    } catch {
      list = []
    }
    list.push({ ...clean, createdAt: new Date().toISOString() })
    await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2))
    console.log(`New message from ${clean.name} <${clean.email}>`)
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Something went wrong. Please try again.' })
  }
})

// Serve the built React app in production
app.use(express.static(DIST_DIR))
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next()
  res.sendFile(path.join(DIST_DIR, 'index.html'), (err) => err && next())
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
