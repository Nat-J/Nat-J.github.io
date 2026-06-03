import html2canvas from 'html2canvas'
import { t } from '@/data/content'

type Lang = 'en' | 'zh'

/** 生成三张卡片并下载 */
export async function exportAsCards(lang: Lang) {
    const card1 = buildCard1(lang)  // 简介+教育+论文
    const card2 = buildCard2(lang)  // 兴趣+项目
    const card3 = buildCard3(lang)  // 经历+技能+联系

    document.body.appendChild(card1)
    document.body.appendChild(card2)
    document.body.appendChild(card3)

    try {
        await downloadCard(card1, `card1_${lang === 'zh' ? '简介教育论文' : 'Profile_Edu_Pub'}.png`)
        await delay(400)
        await downloadCard(card2, `card2_${lang === 'zh' ? '兴趣项目' : 'Research_Projects'}.png`)
        await delay(400)
        await downloadCard(card3, `card3_${lang === 'zh' ? '经历技能联系' : 'Exp_Skills_Contact'}.png`)
    } finally {
        document.body.removeChild(card1)
        document.body.removeChild(card2)
        document.body.removeChild(card3)
    }
}

function delay(ms: number) {
    return new Promise(r => setTimeout(r, ms))
}

async function downloadCard(el: HTMLElement, filename: string) {
    const canvas = await html2canvas(el, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
    })
    canvas.toBlob(blob => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        a.click()
        URL.revokeObjectURL(url)
    }, 'image/png')
}

/* ===================== 样式常量 ===================== */
const W = '680px'
const FONT = '-apple-system, "Segoe UI", Roboto, "Noto Sans SC", sans-serif'
const H2 = `font-size:18px;font-weight:600;color:#212529;margin:20px 0 10px;padding-bottom:4px;border-bottom:2px solid #6c757d;`
const H2_FIRST = `font-size:18px;font-weight:600;color:#212529;margin:0 0 10px;padding-bottom:4px;border-bottom:2px solid #6c757d;`
const BODY = `font-size:13px;color:#212529;line-height:1.65;margin:4px 0;`
const GRAY = `font-size:12px;color:#6c757d;margin:2px 0;`
const TAG = `display:inline-block;background:#e9ecef;color:#495057;font-size:11px;padding:2px 8px;border-radius:3px;margin:2px 3px 2px 0;`

/* ===================== 卡片1：简介+教育+论文 ===================== */
function buildCard1(lang: Lang): HTMLElement {
    const d = document.createElement('div')
    d.style.cssText = `position:fixed;left:-9999px;top:0;width:${W};padding:32px;background:#fff;font-family:${FONT};`

    const p = t.profile
    const edu = t.education
    const pubs = t.publications

    d.innerHTML = `
    <!-- 简介 -->
    <div style="display:flex;gap:20px;margin-bottom:20px;">
      <img src="${location.origin}/images/profile_photo_local.jpg"
           style="width:100px;height:100px;object-fit:cover;border-radius:4px;"
           onerror="this.style.display='none'" />
      <div style="flex:1;">
        <h1 style="font-size:24px;font-weight:600;color:#212529;margin:0 0 4px;">${p.name[lang]}</h1>
        <p style="${GRAY}">📧 ${p.email}</p>
        <p style="${BODY}">${p.bio[lang]}</p>
        <p style="font-size:13px;font-weight:600;color:#b45309;margin:6px 0 0;">${p.status[lang]}</p>
      </div>
    </div>

    <!-- 教育背景 -->
    <h2 style="${H2}">${edu.title[lang]}</h2>
    ${edu.items.map(e => `
      <div style="margin-bottom:10px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:14px;font-weight:600;color:#212529;">${e.degree[lang]}</span>
          <span style="${GRAY}">${e.period}</span>
        </div>
        <p style="${GRAY}">${e.school[lang]} [${e.tag[lang]}] · ${e.gpa}</p>
        <p style="${GRAY}">${e.advisor[lang]}</p>
      </div>
    `).join('')}

    <!-- 论文成果 -->
    <h2 style="${H2}">${pubs.title[lang]}</h2>
    ${pubs.items.map(pub => `
      <div style="margin-bottom:12px;">
        <p style="font-size:14px;font-weight:600;color:#212529;margin:0;">${pub.title[lang]}</p>
        ${pub.authors ? `<p style="font-size:12px;color:#495057;margin:2px 0;">${pub.authors}</p>` : ''}
        <p style="${GRAY}">
          ${pub.venue}
          ${pub.status === 'in-progress' ? ` <span style="color:#b45309;">[${lang === 'zh' ? '撰写中' : 'In Progress'}]</span>` : ''}
        </p>
        <p style="${BODY}">${pub.desc[lang]}</p>
      </div>
    `).join('')}
  `
    return d
}

/* ===================== 卡片2：兴趣+项目 ===================== */
function buildCard2(lang: Lang): HTMLElement {
    const d = document.createElement('div')
    d.style.cssText = `position:fixed;left:-9999px;top:0;width:${W};padding:32px;background:#fff;font-family:${FONT};`

    const res = t.research
    const projs = t.projects

    d.innerHTML = `
    <!-- 研究兴趣 -->
    <h2 style="${H2_FIRST}">${res.title[lang]}</h2>
    <ul style="margin:0;padding:0 0 0 18px;">
      ${res.items.map(r => `
        <li style="font-size:13px;color:#212529;margin-bottom:6px;">
          <strong>${r.label[lang]}</strong>
          <span style="color:#6c757d;"> — ${r.desc[lang]}</span>
        </li>
      `).join('')}
    </ul>

    <!-- 项目经历 -->
    <h2 style="${H2}">${projs.title[lang]}</h2>
    ${projs.items.map(proj => `
      <div style="margin-bottom:12px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:14px;font-weight:600;color:#212529;">${proj.title[lang]}</span>
          <span style="${GRAY}">${proj.period}</span>
        </div>
        <p style="${BODY}">${proj.desc[lang]}</p>
        ${proj.techStack ? `<div style="margin-top:4px;">${proj.techStack.split(',').map(s => `<span style="${TAG}">${s.trim()}</span>`).join('')}</div>` : ''}
      </div>
    `).join('')}
  `
    return d
}

/* ===================== 卡片3：经历+技能+联系 ===================== */
function buildCard3(lang: Lang): HTMLElement {
    const d = document.createElement('div')
    d.style.cssText = `position:fixed;left:-9999px;top:0;width:${W};padding:32px;background:#fff;font-family:${FONT};`

    const exp = t.experience
    const skills = t.skills
    const contact = t.contact

    d.innerHTML = `
    <!-- 工作经历 -->
    <h2 style="${H2_FIRST}">${exp.title[lang]}</h2>
    ${exp.items.map(item => `
      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:14px;font-weight:600;color:#212529;">${item.role[lang]}</span>
          <span style="${GRAY}">${item.period}</span>
        </div>
        <p style="${GRAY}">${item.org[lang]}</p>
      </div>
    `).join('')}

    <!-- 技能专长 -->
    <h2 style="${H2}">${skills.title[lang]}</h2>
    <table style="width:100%;font-size:13px;border-collapse:collapse;">
      <tbody>
        ${skills.categories.map(cat => `
          <tr>
            <td style="padding:4px 12px 4px 0;font-weight:600;color:#212529;white-space:nowrap;vertical-align:top;width:140px;">${cat.name[lang]}</td>
            <td style="padding:4px 0;color:#212529;">${cat.items}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- 联系方式 -->
    <h2 style="${H2}">${contact.title[lang]}</h2>
    <ul style="margin:0;padding:0 0 0 18px;">
      ${contact.items[lang].map(item => `<li style="font-size:13px;color:#212529;margin-bottom:4px;">${item}</li>`).join('')}
    </ul>
  `
    return d
}
