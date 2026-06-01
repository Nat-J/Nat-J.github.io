import { createContext, useContext, useState } from 'react'
import type { Lang } from '@/data/content'

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggle = () => setLang(p => p === 'en' ? 'zh' : 'en')
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
