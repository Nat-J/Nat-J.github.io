import { useLang } from '@/components/LangContext'
import { t } from '@/data/content'
import Navbar from '@/components/Navbar'
import VisitorCounter from '@/components/VisitorCounter'
import { useRef } from 'react'

export default function App() {
  const { lang, privacy } = useLang()
  const showcaseTrackRef = useRef<HTMLDivElement>(null)
  // 隐私模式辅助：隐私开启时返回 "***"，否则返回原文
  const m = (text: string) => privacy ? '***' : text

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-content mx-auto px-5 py-8 fade-in">
        {/* ===== Profile / About ===== */}
        <section id="about" className="flex flex-col sm:flex-row gap-6 mb-12">
          <div className="shrink-0">
            <img
              src="/images/profile_photo_local.jpg"
              alt={t.profile.name[lang]}
              className="w-[140px] h-[140px] rounded-sm object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[32px] font-medium mb-1" style={{ color: '#212529' }}>
              {m(t.profile.name[lang])}
            </h1>
            <p className="text-[14px] mb-1" style={{ color: '#6c757d' }}>
              Email: <a href={`mailto:${privacy ? '***' : t.profile.email}`}>{m(t.profile.email)}</a>
            </p>
            <div className="flex gap-3 mb-3 text-[14px]">
              {t.profile.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-[15px] leading-relaxed mb-3" style={{ color: '#212529' }}>
              {t.profile.bio[lang]}
            </p>
            <p className="text-[14px] font-medium" style={{ color: '#b45309' }}>
              {t.profile.status[lang]}
            </p>
            <p className="text-[18px] italic mt-4" style={{ color: '#adb5bd' }}>
              {t.profile.quote[lang]}
            </p>
          </div>
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Education ===== */}
        <section id="education" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.education.title[lang]}
          </h2>
          {t.education.items.map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <div>
                  <span className="text-[16px] font-medium" style={{ color: '#212529' }}>{item.degree[lang]}</span>
                  <span className="text-[14px]" style={{ color: '#6c757d' }}> — {item.school[lang]}</span>
                  <span className="text-[12px] ml-2" style={{ color: '#6c757d' }}>[{item.tag[lang]}]</span>
                </div>
                <span className="text-[14px] shrink-0" style={{ color: '#6c757d' }}>{item.period}</span>
              </div>
              <p className="text-[14px] mb-1" style={{ color: '#6c757d' }}>{item.gpa}</p>
              <p className="text-[14px] mb-1" style={{ color: '#212529' }}>
                {privacy && item.maskedAdvisor ? item.maskedAdvisor[lang] : item.advisor[lang]}
              </p>
              {item.thesis[lang] && (
                <p className="text-[14px] italic mb-2" style={{ color: '#212529' }}>{item.thesis[lang]}</p>
              )}
              <ul className="list-disc pl-5 space-y-0.5">
                {item.bullets[lang].map((b, i) => (
                  <li key={i} className="text-[14px]" style={{ color: '#212529' }}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Publications ===== */}
        <section id="publications" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.publications.title[lang]}
          </h2>
          {t.publications.items.map((item, idx) => (
            <div key={idx} className="mb-5 flex gap-4">
              {/* 图片列（固定宽度，无图时保持对齐） */}
              <div className="shrink-0 w-[120px] flex flex-col gap-1.5">
                {item.images && item.images.length > 0 && item.images.map((img, imgIdx) => (
                  <a
                    key={imgIdx}
                    href={item.link || img}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={img}
                      alt={`${item.title[lang]} - ${imgIdx + 1}`}
                      className="w-[120px] h-[80px] object-cover rounded border"
                      style={{ borderColor: '#dee2e6' }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  </a>
                ))}
              </div>
              <div className="flex-1">
                <p className="text-[15px] mb-0.5 flex items-center gap-2">
                  <span className="font-medium" style={{ color: '#212529' }}>{item.title[lang]}</span>
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={lang === 'zh' ? '查看论文' : 'View Paper'}
                      className="shrink-0"
                      style={{ color: '#0d6efd' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </p>
                {item.authors && (
                  <p className="text-[14px] mb-0.5" style={{ color: '#495057' }}>
                    {privacy ? '***' : t.publications.selfNames.reduce<React.ReactNode[]>(
                      (parts, name, ni) => {
                        const result: React.ReactNode[] = []
                        parts.forEach((part, pi) => {
                          if (typeof part === 'string') {
                            const segments = part.split(name)
                            segments.forEach((seg, si) => {
                              if (seg) result.push(seg)
                              if (si < segments.length - 1) result.push(<strong key={`b-${ni}-${pi}-${si}`}>{name}</strong>)
                            })
                          } else {
                            result.push(part)
                          }
                        })
                        return result
                      },
                      [item.authors]
                    )}
                  </p>
                )}
                <p className="text-[14px]" style={{ color: '#6c757d' }}>
                  {item.link && item.link !== '#' ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.venue}</a>
                  ) : (
                    <span>{item.venue}</span>
                  )}
                  {item.status === 'in-progress' && (
                    <span className="ml-2 text-[12px]" style={{ color: '#b45309' }}>
                      [{lang === 'zh' ? '撰写中' : 'In Progress'}]
                    </span>
                  )}
                </p>
                <p className="text-[14px] mt-1" style={{ color: '#212529' }}>{item.desc[lang]}</p>
              </div>
            </div>
          ))}
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Research Interests ===== */}
        <section id="research" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.research.title[lang]}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {t.research.items.map((item, idx) => (
              <li key={idx} className="text-[15px]" style={{ color: '#212529' }}>
                <span className="font-medium">{item.label[lang]}</span>
                <span style={{ color: '#6c757d' }}> — {item.desc[lang]}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Projects ===== */}
        <section id="projects" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.projects.title[lang]}
          </h2>
          {(() => {
            // 每个类别的专属配色：[条子颜色, 标签背景, 标签文字]  — 低饱和灰彩色
            const catColors: [string, string, string][] = [
              ['#7a8fa6', '#e8ecf1', '#3d5066'],   // 规划决策 — 灰蓝
              ['#7a9a87', '#e6ede9', '#3d5a48'],   // 本体运控 — 灰绿
              ['#a6907a', '#f0ebe5', '#665040'],   // 视觉感知 — 灰橙
            ]
            return (
              <div className="space-y-8">
                {t.projects.categories.map((cat, catIdx) => {
                  const [bar, bg, txt] = catColors[catIdx % catColors.length]
                  return (
                    <div key={catIdx} className="flex gap-4">
                      {/* 左侧类别竖条 */}
                      <div className="shrink-0 flex items-stretch" style={{ width: '8px' }}>
                        <div className="w-full rounded-sm" style={{ background: bar }} />
                      </div>
                      <div className="flex-1">
                        {/* 类别名称 — 彩色药丸标签 */}
                        <span
                          className="inline-block text-[12px] font-semibold tracking-wide px-3 py-1 rounded mb-4"
                          style={{ background: bg, color: txt, letterSpacing: '0.04em' }}
                        >
                          {cat.label[lang]}
                        </span>
                        {/* 项目列表 */}
                        <div className="space-y-5">
                          {cat.items.map((item, idx) => (
                            <div key={idx}>
                              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                                <span className="text-[15px] font-medium" style={{ color: '#212529' }}>{item.title[lang]}</span>
                                <span className="text-[14px] shrink-0" style={{ color: '#6c757d' }}>{item.period}</span>
                              </div>
                              {item.desc && (item.desc.en || item.desc.zh) && (
                                <p className="text-[14px] mb-1.5" style={{ color: '#212529' }}>{item.desc[lang]}</p>
                              )}
                              {item.techStack && (
                                <div className="flex flex-wrap gap-1.5 mb-1">
                                  {item.techStack.split(',').map((tech, ti) => (
                                    <span
                                      key={ti}
                                      className="text-[12px] px-2 py-0.5 rounded"
                                      style={{ background: '#e9ecef', color: '#495057' }}
                                    >
                                      {tech.trim()}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {item.images && item.images.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {item.images.map((img, imgIdx) => (
                                    <a key={imgIdx} href={img} target="_blank" rel="noopener noreferrer">
                                      <img
                                        src={img}
                                        alt={`${item.title[lang]} - ${imgIdx + 1}`}
                                        className="w-[160px] h-[100px] object-cover rounded border"
                                        style={{ borderColor: '#dee2e6' }}
                                        onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                                      />
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })()}
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Experience ===== */}
        <section id="experience" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.experience.title[lang]}
          </h2>
          {t.experience.items.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <span className="text-[16px] font-medium" style={{ color: '#212529' }}>{item.role[lang]}</span>
                  <span className="text-[14px]" style={{ color: '#6c757d' }}> — {m(item.org[lang])}</span>
                </div>
                <span className="text-[14px] shrink-0" style={{ color: '#6c757d' }}>{item.period}</span>
              </div>
            </div>
          ))}
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />

        {/* ===== Skills ===== */}
        <section id="skills" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.skills.title[lang]}
          </h2>
          <table className="w-full text-[14px]">
            <tbody>
              {t.skills.categories.map((cat, idx) => (
                <tr key={idx} className="align-top">
                  <td className="pr-4 py-1.5 font-medium whitespace-nowrap" style={{ color: '#212529', width: '180px' }}>
                    {cat.name[lang]}
                  </td>
                  <td className="py-1.5" style={{ color: '#212529' }}>{cat.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />
        {/* ===== Contact ===== */}
        <section id="contact" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.contact.title[lang]}
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            {t.contact.items[lang].map((item, i) => (
              <li key={i} className="text-[14px]" style={{ color: '#212529' }}>
                {privacy ? item.replace(/nzjess12345@gmail\.com/g, '***@***.com') : item}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <a
              href={privacy ? '#' : '/CV_Zijie_Nie.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[14px] px-4 py-1.5 rounded no-underline"
              style={{ border: '1px solid #dee2e6', color: '#212529' }}
              onClick={e => { if (privacy) e.preventDefault() }}
            >
              {privacy
                ? (lang === 'zh' ? '隐私模式已隐藏' : 'Hidden in Privacy Mode')
                : (lang === 'zh' ? '下载简历 (PDF)' : 'Download CV (PDF)')
              }
            </a>
          </div>
        </section>




        {/* ===== Showcase Gallery ===== */}
        <section id="showcase" className="mb-12 overflow-hidden">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.showcase.title[lang]}
          </h2>
          <div className="relative">
            <div
              ref={showcaseTrackRef}
              className="flex gap-6"
              style={{ animation: 'showcase-scroll 30s linear infinite', width: 'max-content' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'paused' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.animationPlayState = 'running' }}
            >
              {[...t.showcase.items, ...t.showcase.items].map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 rounded-lg p-3"
                  style={{
                    border: '1px solid #dee2e6',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    background: '#fff',
                  }}
                >
                  <div className="flex gap-2">
                    {item.images.map((src, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={src}
                        alt={`${item.caption[lang]} - ${imgIdx + 1}`}
                        className="rounded"
                        style={{
                          height: '220px',
                          width: 'auto',
                          maxWidth: '400px',
                          objectFit: 'contain',
                          background: '#f8f9fa',
                        }}
                        onLoad={() => {
                          const track = showcaseTrackRef.current
                          if (!track) return
                          const styleId = 'showcase-kf'
                          const halfW = track.scrollWidth / 2
                          const dur = Math.max(20, t.showcase.items.length * 5)
                          const css = `@keyframes showcase-scroll { 0%{transform:translateX(0)} 100%{transform:translateX(-${halfW}px)} }`
                          let el = document.getElementById(styleId) as HTMLStyleElement | null
                          if (!el) {
                            el = document.createElement('style')
                            el.id = styleId
                            document.head.appendChild(el)
                          }
                          el.textContent = css
                          track.style.animation = `showcase-scroll ${dur}s linear infinite`
                        }}
                        onError={e => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-[13px] mt-2 text-center font-medium" style={{ color: '#495057' }}>
                    {item.caption[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ===== About Me ===== */}
        <section id="aboutme" className="mb-12">
          <h2 className="text-[22px] font-medium mb-5 inline-block" style={{
            color: '#212529',
            background: 'linear-gradient(transparent 60%, rgba(108,117,125,0.25) 60%)',
            backgroundBlendMode: 'multiply',
          }}>
            {t.aboutme.title[lang]}
          </h2>
          {/* 生活照片网格 */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {t.aboutme.photos.map((photo, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="rounded overflow-hidden border"
                  style={{ borderColor: '#dee2e6', background: '#f8f9fa' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption[lang] || `Photo ${idx + 1}`}
                    className="w-full h-auto block"
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none'
                      const parent = (e.target as HTMLImageElement).parentElement
                      if (parent) parent.style.background = '#e9ecef'
                    }}
                  />
                </div>
                {photo.caption[lang] && (
                  <p className="text-[12px] mt-1" style={{ color: '#6c757d' }}>
                    {photo.caption[lang]}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* 生活描述 */}
          {t.aboutme.bio[lang] && (
            <p className="text-[15px] leading-relaxed" style={{ color: '#212529' }}>
              {t.aboutme.bio[lang]}
            </p>
          )}
        </section>

        <hr style={{ borderColor: '#dee2e6' }} className="my-8" />
        {/* Footer */}
        <footer className="text-center py-6 mt-8" style={{ borderTop: '1px solid #dee2e6' }}>
          <VisitorCounter />
          <p className="text-[12px] mt-1" style={{ color: '#6c757d' }}>
            &copy; {new Date().getFullYear()} {m(t.profile.name[lang])}
          </p>
        </footer>
      </div>
    </div>
  )
}
