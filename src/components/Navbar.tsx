import { useState, useEffect } from 'react'
import { useLang } from '@/components/LangContext'
import { t } from '@/data/content'
import { exportAsCards } from '@/utils/exportSections'

const sections = ['about', 'education', 'research', 'publications', 'projects', 'experience', 'skills', 'contact', 'showcase', 'aboutme'] as const

export default function Navbar() {
  const { lang, toggle, privacy, togglePrivacy } = useLang()
  const [open, setOpen] = useState(false)
  const [fabOpen, setFabOpen] = useState(true)
  const [exporting, setExporting] = useState(false)

  // 3秒后自动收起
  useEffect(() => {
    const timer = setTimeout(() => setFabOpen(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <nav className="sticky top-0 z-50" style={{ background: '#343a40' }}>
        <div className="max-w-content mx-auto px-5 flex items-center justify-between h-[52px]">
          <a
            href="#about"
            className="text-white font-medium text-[15px] no-underline hover:no-underline"
            style={{ color: '#fff' }}
          >
            {privacy ? '***' : t.profile.name[lang]}
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
            <button
              onClick={togglePrivacy}
              className="text-[12px] px-2 py-0.5 rounded border cursor-pointer"
              style={{
                color: privacy ? '#ffc107' : 'rgba(255,255,255,0.7)',
                borderColor: privacy ? '#ffc107' : 'rgba(255,255,255,0.3)',
                background: 'transparent',
              }}
              title={lang === 'zh' ? '隐私模式' : 'Privacy Mode'}
            >
              {privacy ? '🔒' : '🔓'}
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
          </div>
        )}
      </nav>

      {/* ===== Floating Action Buttons (FAB) ===== */}
      <div className="fixed right-4 bottom-6 z-[100] flex flex-col items-end gap-3">
        {/* 展开的子按钮 */}
        {fabOpen && (
          <>
            {/* 语言切换 */}
            <button
              onClick={() => { toggle(); setFabOpen(false) }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg cursor-pointer border-none"
              style={{
                background: '#495057',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                animation: 'fab-pop 0.2s ease-out',
              }}
            >
              <span>🌐</span>
              <span>{lang === 'en' ? '切换中文' : 'Switch EN'}</span>
            </button>
            {/* 隐私模式 */}
            <button
              onClick={() => { togglePrivacy(); setFabOpen(false) }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg cursor-pointer border-none"
              style={{
                background: privacy ? '#856404' : '#495057',
                color: privacy ? '#ffc107' : '#fff',
                fontSize: '14px',
                fontWeight: 500,
                animation: 'fab-pop 0.2s ease-out 0.05s both',
              }}
            >
              <span>{privacy ? '🔒' : '🔓'}</span>
              <span>{privacy
                ? (lang === 'zh' ? '关闭隐私模式' : 'Privacy Off')
                : (lang === 'zh' ? '开启隐私模式' : 'Privacy On')
              }</span>
            </button>
            {/* 导出为图片 */}
            <button
              onClick={async () => {
                if (exporting) return
                setExporting(true)
                setFabOpen(false)
                try {
                  await exportAsCards(lang)
                } finally {
                  setTimeout(() => setExporting(false), 1000)
                }
              }}
              disabled={exporting}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg cursor-pointer border-none"
              style={{
                background: exporting ? '#6c757d' : '#0d6efd',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                animation: 'fab-pop 0.2s ease-out 0.1s both',
                opacity: exporting ? 0.7 : 1,
              }}
            >
              <span>{exporting ? '⏳' : '📸'}</span>
              <span>{exporting
                ? (lang === 'zh' ? '导出中...' : 'Exporting...')
                : (lang === 'zh' ? '导出为图片' : 'Export as Images')
              }</span>
            </button>
          </>
        )}

        {/* 主按钮 */}
        <button
          onClick={() => setFabOpen(p => !p)}
          className="w-[52px] h-[52px] rounded-full shadow-lg cursor-pointer border-none flex items-center justify-center"
          style={{
            background: fabOpen ? '#6c757d' : '#343a40',
            color: '#fff',
            fontSize: '22px',
            transition: 'transform 0.2s ease',
            transform: fabOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          ✦
        </button>
      </div>

      <style>{`
        @keyframes fab-pop {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  )
}
