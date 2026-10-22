import { useState, type ReactNode } from 'react'
import { LanguageContext, type Language } from './languageContextValue'

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en')

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('brandshield_lang', lang)
    }
  }

  // Full English by user request
  const t = (_vi: string, en: string) => en

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
