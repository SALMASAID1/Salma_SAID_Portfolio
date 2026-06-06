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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/40 via-slate-300/30 to-transparent" />

          <div className="space-y-8">
            {t.education.items.map((item, i) => (
              <div key={i} data-animate className="relative pl-12">
                <div className="absolute left-[10px] top-6 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />

                <div className="glass-card p-6 group">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${item.icon} text-blue-500`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{item.school}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
