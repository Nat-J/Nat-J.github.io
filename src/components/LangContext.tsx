import { createContext, useContext, useState } from 'react'
import type { Lang } from '@/data/content'

const LangContext = createContext<{
  lang: Lang
  toggle: () => void
  privacy: boolean
  togglePrivacy: () => void
}>({
  lang: 'en',
  toggle: () => { },
  privacy: false,
  togglePrivacy: () => { },
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [privacy, setPrivacy] = useState(false)
  const toggle = () => setLang(p => p === 'en' ? 'zh' : 'en')
  const togglePrivacy = () => setPrivacy(p => !p)
  return (
    <LangContext.Provider value={{ lang, toggle, privacy, togglePrivacy }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
