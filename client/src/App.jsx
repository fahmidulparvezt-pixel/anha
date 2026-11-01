import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useActiveSection } from './hooks'
import { sections } from './data'

const ids = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(ids)

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
