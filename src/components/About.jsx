import { useApp } from '../context/AppContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-user text-xs" />
            {t.about.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Summary */}
          <div className="lg:col-span-3 space-y-6">
            {t.about.summary.map((p, i) => (
              <p
                key={i}
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-base [&_strong]:text-indigo-600 dark:[&_strong]:text-indigo-400 [&_strong]:font-semibold"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          {/* Right: Details Card */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 space-y-5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Quick Info</h3>
              {t.about.details.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${d.icon} text-indigo-500 text-sm`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">{d.label}</p>
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mt-0.5">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
