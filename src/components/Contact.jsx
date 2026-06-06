import { useApp } from '../context/AppContext'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { t } = useApp()
  const sectionRef = useScrollAnimation()

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16">
          <span className="section-tag">
            <i className="fas fa-envelope text-xs" />
            {t.contact.tag}
          </span>
          <h2 className="section-title">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-stone-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {t.contact.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {t.contact.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${link.icon} text-emerald-600`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-stone-400 dark:text-gray-500 font-medium">{link.label}</p>
                  <p className="text-sm text-stone-700 dark:text-gray-300 truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {t.contact.social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-stone-500 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={`${s.fab ? 'fab' : 'fas'} ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              className="glass-card p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.target)
                const mailTo = `mailto:salma2003said@gmail.com?subject=${encodeURIComponent(
                  data.get('subject')
                )}&body=${encodeURIComponent(
                  `From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`
                )}`
                window.location.href = mailTo
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-stone-500 dark:text-gray-400 font-medium mb-2">{t.contact.form.name}</label>
                  <input name="name" type="text" required className="input-field" placeholder={t.contact.form.name} />
                </div>
                <div>
                  <label className="block text-xs text-stone-500 dark:text-gray-400 font-medium mb-2">{t.contact.form.email}</label>
                  <input name="email" type="email" required className="input-field" placeholder={t.contact.form.email} />
                </div>
              </div>
              <div>
                <label className="block text-xs text-stone-500 dark:text-gray-400 font-medium mb-2">{t.contact.form.subject}</label>
                <input name="subject" type="text" required className="input-field" placeholder={t.contact.form.subject} />
              </div>
              <div>
                <label className="block text-xs text-stone-500 dark:text-gray-400 font-medium mb-2">{t.contact.form.message}</label>
                <textarea name="message" required rows={5} className="input-field resize-none" placeholder={t.contact.form.message} />
              </div>
              <button type="submit" className="btn-primary w-full group">
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-paper-plane text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  {t.contact.form.send}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
