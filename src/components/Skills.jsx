import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Skills() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-cogs text-xs" />
            {t.skills.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
        </div>

        <div className="space-y-12">
          {t.skills.categories.map((cat, i) => (
            <SkillCategory key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ category }) {
  const groupRef = useScrollAnimationGroup()

  return (
    <div>
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 flex items-center justify-center">
          <i className={`fas ${category.icon} text-emerald-600`} />
        </div>
        <h3 className="text-lg font-bold text-stone-800 dark:text-gray-200">{category.name}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 dark:from-emerald-500/20 to-transparent" />
      </div>

      {/* Skills Grid */}
      <div ref={groupRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {category.items.map((skill, j) => (
          <div
            key={j}
            data-animate
            className="glass-card p-4 flex flex-col items-center gap-3 group cursor-default"
          >
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {skill.img ? (
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.img}.svg`}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                  <i className={`fas ${skill.icon} text-lg text-emerald-600`} />
                </div>
              )}
            </div>
            <span className="text-xs font-medium text-stone-600 dark:text-gray-400 text-center group-hover:text-stone-900 dark:group-hover:text-white transition-colors leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
