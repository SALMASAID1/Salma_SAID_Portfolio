import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Education() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()
  const timelineRef = useScrollAnimationGroup()

  return (
    <section id="education" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-graduation-cap text-xs" />
            {t.education.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.education.title}</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto" ref={timelineRef}>
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/40 via-amber-400/30 to-transparent" />

          <div className="space-y-8">
            {t.education.items.map((item, i) => (
              <div key={i} data-animate className="relative pl-12">
                <div className="absolute left-[10px] top-6 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 shadow-lg shadow-emerald-500/40" />

                <div className="glass-card p-6 group">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${item.icon} text-emerald-600`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">{item.school}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone-400 dark:text-gray-500 bg-stone-100 dark:bg-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
