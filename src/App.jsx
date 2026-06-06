import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Subtle gradient blobs */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/[0.06] dark:bg-blue-500/[0.04] blur-[100px]" />
          <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-slate-500/[0.04] dark:bg-slate-500/[0.03] blur-[100px]" />
          <div className="absolute -bottom-40 right-1/3 w-[350px] h-[350px] rounded-full bg-blue-400/[0.04] dark:bg-blue-400/[0.03] blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </AppProvider>
  )
}
