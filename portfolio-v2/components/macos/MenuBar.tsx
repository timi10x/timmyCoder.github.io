'use client'

import { useState, useEffect } from 'react'

export default function MenuBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-7 bg-black/30 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-4 text-white text-sm">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-base"></span>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded">Daniel OS</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded">File</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded">Edit</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded">View</button>
        <button className="hover:bg-white/10 px-2 py-0.5 rounded">Go</button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 text-xs">
        <span>🔋</span>
        <span>📶</span>
        <span>{time}</span>
      </div>
    </div>
  )
}
