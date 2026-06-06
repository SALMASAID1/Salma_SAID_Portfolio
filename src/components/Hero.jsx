import { useState, useEffect, useMemo } from 'react'
import { useApp } from '../context/AppContext'

export default function Hero() {
  const { t } = useApp()
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const titles = t.hero.typingTitles

  useEffect(() => {
    const current = titles[titleIdx]
    let timeout

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIdx((prev) => (prev + 1) % titles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 40 : 80
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIdx, titles])

  // Floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 6,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20 dark:from-gray-950 dark:via-indigo-950/20 dark:to-purple-950/10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-indigo-400/10 dark:bg-indigo-500/[0.08] blur-[80px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-500/[0.06] blur-[100px] animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30 dark:bg-indigo-400/20 animate-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-indigo-600 dark:text-indigo-400 text-sm md:text-base font-medium mb-4 tracking-wide uppercase">
              {t.hero.greeting}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-[1.1]">
              <span className="gradient-text">{t.hero.name}</span>
            </h1>

            {/* Typing title */}
            <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg md:text-xl font-medium text-purple-600 dark:text-purple-400">
                {displayText}
              </span>
              <span className="typing-cursor" />
            </div>

            {/* Headline */}
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t.hero.headline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-rocket text-sm" />
                  {t.hero.cta}
                </span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                <span className="flex items-center gap-2">
                  <i className="fas fa-paper-plane text-sm" />
                  {t.hero.contact}
                </span>
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a
                href="https://www.linkedin.com/in/salma-said-7737b9296/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://github.com/SALMASAID1"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="mailto:salma2003said@gmail.com"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[2rem] overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-100 dark:bg-gray-900">
                <img
                  src="./salma-profile.jpg"
                  alt="Salma SAID"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <i className="fas fa-database text-indigo-500 text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <i className="fas fa-brain text-purple-500 text-lg" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <i className="fas fa-code text-blue-500 text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
          {t.hero.stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left group">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <i className={`fas ${stat.icon} text-indigo-500 text-sm`} />
                <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-indigo-500 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
