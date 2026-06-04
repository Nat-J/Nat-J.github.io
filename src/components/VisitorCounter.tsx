import { useState, useEffect } from 'react'

/**
 * 访客计数器
 * 使用 CountAPI（免费、无需注册、无 CORS 问题）
 * 每次页面加载时递增 1，并显示总访问数
 */
export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        // 如果自己设置了 no_track，跳过计数
        if (localStorage.getItem('no_track')) return

        // CountAPI: 免费计数服务，无需注册
        // 每次访问自动 +1 并返回最新总数
        const key = 'natj-github-io'
        fetch(`https://api.countapi.xyz/hit/${key}/visits`)
            .then(r => r.json())
            .then(data => {
                if (typeof data.value === 'number') setCount(data.value)
            })
            .catch(() => {
                // 备用：尝试 get 接口（不递增）
                fetch(`https://api.countapi.xyz/get/${key}/visits`)
                    .then(r => r.json())
                    .then(data => {
                        if (typeof data.value === 'number') setCount(data.value)
                    })
                    .catch(() => { })
            })
    }, [])

    if (count === null || count === 0) return null

    return (
        <div className="flex items-center justify-center text-[12px] mb-2" style={{ color: '#adb5bd' }}>
            👁️ {count.toLocaleString()} visits
        </div>
    )
}
