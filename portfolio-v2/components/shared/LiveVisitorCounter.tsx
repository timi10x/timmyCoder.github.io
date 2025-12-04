'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LiveVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    // Simulate getting visitor count (replace with real API later)
    const baseCount = Math.floor(Math.random() * 50) + 10
    setVisitorCount(baseCount)
    setIsLive(true)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(1, newCount) // Never go below 1
      })
    }, Math.random() * 10000 + 5000) // Random interval between 5-15 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-white/90 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg">
        {/* Live Indicator */}
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isLive && (
              <motion.div
                className="relative"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="text-xs font-medium text-neutral-600 uppercase tracking-wider">
            Live
          </span>
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-neutral-300" />

        {/* Visitor Count */}
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="text-neutral-600"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          <AnimatePresence mode="wait">
            <motion.span
              key={visitorCount}
              className="text-sm font-bold text-neutral-800 min-w-[20px]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {visitorCount}
            </motion.span>
          </AnimatePresence>

          <span className="text-xs text-neutral-600">
            {visitorCount === 1 ? 'visitor' : 'visitors'}
          </span>
        </div>

        {/* Optional: Hover tooltip */}
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="bg-neutral-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Real-time visitor count
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
              <div className="border-4 border-transparent border-t-neutral-800" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
