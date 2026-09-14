import { useApp } from '../context/AppContext'

export default function Hero() {
  const { t } = useApp()

  return (
    <section className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex min-h-[720px] max-w-6xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
            {t.hero.title}
          </p>
          <h1 className="mb-7 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-7xl lg:text-[6.5rem]">
            {t.hero.name}
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 sm:text-2xl">
            {t.hero.headline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
              {t.hero.cta}
              <i className="fas fa-arrow-right text-xs" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
              {t.hero.contact}
            </button>
          </div>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-3 border-y border-slate-200 py-6 dark:border-slate-800">
          {t.hero.stats.map((stat, i) => (
            <div key={i} className={`${i ? 'border-l border-slate-200 pl-5 dark:border-slate-800' : ''}`}>
              <div className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">{stat.value}</div>
              <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
