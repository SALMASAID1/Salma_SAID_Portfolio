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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'border-transparent py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white dark:bg-white dark:text-slate-950">
            SS
          </div>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-900 dark:text-white sm:block">
            Salma SAID
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
                  ? 'text-teal-700 dark:text-teal-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
            >
              {active === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-teal-600 dark:bg-teal-400" />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleLang(lang === 'en' ? 'fr' : 'en')}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={toggleDark}
            className="rounded-lg border border-slate-300 p-2 text-slate-600 transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'} text-sm`} />
          </button>
          <a
            href={lang === 'fr' ? "./salma-said-cv-fr.pdf" : "./salma-said-cv.pdf"}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-300 md:inline-flex"
          >
            <i className="fas fa-download text-xs" />
            {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all"
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
                  ? 'text-teal-700 dark:text-teal-400 bg-slate-100 dark:bg-white/[0.04]'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]'
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
