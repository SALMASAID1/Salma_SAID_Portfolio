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
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${cert.icon} text-xl text-blue-500`} />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{cert.desc}</p>

                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{cert.issuer}</span>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
