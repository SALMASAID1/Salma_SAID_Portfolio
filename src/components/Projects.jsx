import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation'

export default function Projects() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()
  const gridRef = useScrollAnimationGroup()

  const filterLabels = t.projects.filters
  const categoryMap = ['all', 'ai', 'data']
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? t.projects.items
      : t.projects.items.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-12">
          <span className="section-tag">
            <i className="fas fa-code text-xs" />
            {t.projects.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {filterLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveFilter(categoryMap[i])}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === categoryMap[i]
                  ? 'bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg shadow-emerald-700/25'
                  : 'text-stone-500 dark:text-gray-400 border border-stone-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500/30'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={`${activeFilter}-${i}`}
              data-animate
              className="glass-card p-6 group relative overflow-hidden flex flex-col"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  {t.projects.featured}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${project.icon} text-lg text-emerald-600`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-white/[0.06] text-stone-600 dark:text-gray-400 border border-stone-200/60 dark:border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-2 border-t border-stone-100 dark:border-white/[0.06]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
                  >
                    <i className="fab fa-github" />
                    {t.projects.code}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
                  >
                    <i className="fas fa-external-link-alt text-xs" />
                    {t.projects.demo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
