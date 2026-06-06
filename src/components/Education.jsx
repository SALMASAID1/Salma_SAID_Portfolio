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
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/40 via-slate-400/30 to-transparent" />

          <div className="space-y-8">
            {t.education.items.map((item, i) => (
              <div key={i} data-animate className="relative pl-12">
                <div className="absolute left-[10px] top-6 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg shadow-teal-500/40" />

                <div className="glass-card p-6 group">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-500/10 border border-teal-200/50 dark:border-teal-500/20 flex items-center justify-center flex-shrink-0">
                        <i className={`fas ${item.icon} text-teal-500`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 text-sm font-medium">{item.school}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
