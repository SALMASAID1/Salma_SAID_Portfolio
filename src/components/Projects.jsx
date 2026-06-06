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
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/30'
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
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-600 text-white">
                  {t.projects.featured}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${project.icon} text-lg text-blue-500`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
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
                    className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
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
