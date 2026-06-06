import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Experience() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()
  const timelineRef = useScrollAnimationGroup()

  return (
    <section id="experience" className="relative">
      <div className="section-container" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-briefcase text-xs" />
            {t.experience.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          <div className="timeline-line" />

          <div className="space-y-12">
            {t.experience.items.map((item, i) => (
              <div
                key={i}
                data-animate
                className={`relative pl-12 md:pl-0 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <div className="timeline-dot" />

                <div className="glass-card p-6 group">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">{item.company}</p>
                    </div>
                    <span className="text-xs font-mono text-stone-400 dark:text-gray-500 bg-stone-100 dark:bg-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  {item.focus && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 mb-3">
                      <i className="fas fa-crosshairs text-[10px]" />
                      {item.focus}
                    </div>
                  )}

                  <ul className="space-y-2 mb-4">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-gray-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-amber-500 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
