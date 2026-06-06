import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 italic text-sm">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
              SS
            </div>
            <span className="font-bold text-sm">
              <span className="gradient-text">SAID</span>{' '}
              <span className="text-gray-600 dark:text-gray-400">Salma</span>
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/salma-said-7737b9296/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fab fa-linkedin-in text-sm" />
            </a>
            <a
              href="https://github.com/SALMASAID1"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fab fa-github text-sm" />
            </a>
            <a
              href="mailto:salma2003said@gmail.com"
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fas fa-envelope text-sm" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 dark:text-gray-500 text-xs">{t.footer.copy}</p>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-indigo-300/30 dark:via-indigo-500/20 to-transparent" />

        {/* Back to top */}
        <div className="mt-6 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs transition-colors duration-300 inline-flex items-center gap-1"
          >
            <i className="fas fa-chevron-up text-[10px]" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
