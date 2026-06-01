import { useState } from 'react'
import { useLang } from '@/components/LangContext'
import { t } from '@/data/content'

const sections = ['about', 'education', 'research', 'publications', 'projects', 'experience', 'skills', 'contact'] as const

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50" style={{ background: '#343a40' }}>
      <div className="max-w-content mx-auto px-5 flex items-center justify-between h-[52px]">
        <a
          href="#about"
          className="text-white font-medium text-[15px] no-underline hover:no-underline"
          style={{ color: '#fff' }}
        >
          {t.profile.name[lang]}
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-5">
          {sections.map(s => (
            <a
              key={s}
              href={`#${s}`}
              className="text-[13px] no-underline hover:no-underline"
              style={{ color: 'rgba(255,255,255,0.75)' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {t.nav[s][lang]}
            </a>
          ))}
          <button
            onClick={toggle}
            className="text-[12px] px-2 py-0.5 rounded border cursor-pointer"
            style={{
              color: 'rgba(255,255,255,0.7)',
              borderColor: 'rgba(255,255,255,0.3)',
              background: 'transparent',
            }}
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="sm:hidden text-white text-xl cursor-pointer bg-transparent border-none"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden px-5 pb-4" style={{ background: '#343a40' }}>
          {sections.map(s => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setOpen(false)}
              className="block py-1.5 text-[14px] no-underline"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {t.nav[s][lang]}
            </a>
          ))}
          <button
            onClick={toggle}
            className="mt-2 text-[12px] px-2 py-0.5 rounded border cursor-pointer"
            style={{
              color: 'rgba(255,255,255,0.7)',
              borderColor: 'rgba(255,255,255,0.3)',
              background: 'transparent',
            }}
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  )
}
