import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Experience() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()
  const timelineRef = useScrollAnimationGroup()

  return (
    <section id="experience" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-briefcase text-xs" />
            {t.experience.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl" ref={timelineRef}>
          <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
            {t.experience.items.map((item, i) => (
              <div
                key={i}
                data-animate
                className="grid gap-5 py-9 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{item.date}</span>
                  <p className="mt-2 text-sm font-semibold text-teal-700 dark:text-teal-400">{item.company}</p>
                </div>
                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                    {item.focus && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.focus}</p>}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-teal-600" />
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
