import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { t, lang, dark, toggleDark, toggleLang } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'education', label: t.nav.education },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'contact', label: t.nav.contact },
  ]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav shadow-sm py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25">
            SS
          </div>
          <span className="font-bold text-lg tracking-wide hidden sm:block">
            <span className="gradient-text">Salma</span>{' '}
            <span className="text-gray-700 dark:text-white/80">SAID</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                active === link.id
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              {active === link.id && (
                <span className="absolute inset-0 rounded-lg bg-indigo-50 dark:bg-indigo-500/10" />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleLang(lang === 'en' ? 'fr' : 'en')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
          >
            <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>
          <a
            href="./salma-said-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <i className="fas fa-download text-xs" />
            {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-all"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-nav transition-all duration-300 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === link.id
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
