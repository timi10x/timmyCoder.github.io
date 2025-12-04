'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Contribution {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export default function GitHubActivity() {
  const [hoveredDay, setHoveredDay] = useState<Contribution | null>(null)
  const [contributions, setContributions] = useState<Contribution[]>([])

  useEffect(() => {
    // Generate mock data for the last 12 weeks
    const data: Contribution[] = []
    const today = new Date()

    for (let i = 83; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      const count = Math.floor(Math.random() * 15)
      const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4

      data.push({
        date: date.toISOString().split('T')[0],
        count,
        level: level as 0 | 1 | 2 | 3 | 4,
      })
    }

    setContributions(data)
  }, [])

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-primaryivory'
      case 1: return 'bg-primaryblue/20'
      case 2: return 'bg-primaryblue/40'
      case 3: return 'bg-primaryblue/70'
      case 4: return 'bg-primaryblue'
      default: return 'bg-primaryivory'
    }
  }

  return (
    <div className="relative">
      <div className="mb-4">
        <h3 className="text-2xl font-black text-primaryblue mb-2">GitHub Activity</h3>
        <p className="text-sm text-primaryblue/60">Last 12 weeks of contributions</p>
      </div>

      <div className="grid grid-cols-12 gap-1">
        {contributions.map((contrib, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-[2px] ${getLevelColor(contrib.level)} border border-primaryblue/20 cursor-pointer`}
            onMouseEnter={() => setHoveredDay(contrib)}
            onMouseLeave={() => setHoveredDay(null)}
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.005 }}
          />
        ))}
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white border-2 border-primaryblue rounded-[4px] px-4 py-2 shadow-lg whitespace-nowrap"
        >
          <div className="text-xs font-bold text-primaryblue">
            {new Date(hoveredDay.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="text-xs text-primaryblue/70">
            {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="flex items-center gap-2 mt-4 text-xs text-primaryblue/60">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-3 h-3 rounded-[2px] ${getLevelColor(level)} border border-primaryblue/20`}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
