import { createContext, useContext, useState, useEffect } from 'react'
import { content } from '../data/content'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = content[lang] || content.en
  const toggleDark = () => setDark(d => !d)
  const toggleLang = (l) => setLang(l)

  return (
    <AppContext.Provider value={{ lang, dark, t, toggleDark, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
