import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Certifications() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()
  const gridRef = useScrollAnimationGroup()

  return (
    <section id="certifications" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-award text-xs" />
            {t.certifications.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.certifications.title}</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.certifications.items.map((cert, i) => {
            const CardWrapper = cert.link ? 'a' : 'div'
            const wrapperProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {}
            
            return (
              <CardWrapper
                key={i}
                data-animate
                className="glass-card p-6 group relative overflow-hidden block"
                {...wrapperProps}
              >
                {/* Color accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Badge icon */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${cert.icon} text-xl text-indigo-500`} />
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.desc}</p>

                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{cert.issuer}</span>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
