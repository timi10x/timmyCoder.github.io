'use client'

import { useState, useEffect } from 'react'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress?: number
  maxProgress?: number
}

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-visit',
      title: 'First Steps',
      description: 'Visited the portfolio for the first time',
      icon: '👋',
      unlocked: false,
    },
    {
      id: 'explorer',
      title: 'Explorer',
      description: 'Viewed 3 different concepts',
      icon: '🗺️',
      unlocked: false,
      progress: 0,
      maxProgress: 3,
    },
    {
      id: 'completionist',
      title: 'Completionist',
      description: 'Viewed all 8 concepts',
      icon: '🏆',
      unlocked: false,
      progress: 0,
      maxProgress: 8,
    },
    {
      id: 'speed-reader',
      title: 'Speed Reader',
      description: 'Spent less than 10 seconds on page',
      icon: '⚡',
      unlocked: false,
    },
    {
      id: 'deep-diver',
      title: 'Deep Diver',
      description: 'Spent more than 5 minutes exploring',
      icon: '🤿',
      unlocked: false,
    },
    {
      id: 'easter-egg',
      title: 'Curious Mind',
      description: 'Found the Konami code',
      icon: '🥚',
      unlocked: false,
    },
    {
      id: 'terminal-master',
      title: 'Terminal Master',
      description: 'Ran 10 commands in the terminal',
      icon: '💻',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
    },
    {
      id: 'social-butterfly',
      title: 'Social Butterfly',
      description: 'Clicked on all social links',
      icon: '🦋',
      unlocked: false,
      progress: 0,
      maxProgress: 8,
    },
  ])

  const [showNotification, setShowNotification] = useState<Achievement | null>(null)

  useEffect(() => {
    // Load achievements from localStorage
    const saved = localStorage.getItem('portfolio-achievements')
    if (saved) {
      setAchievements(JSON.parse(saved))
    } else {
      // First visit achievement
      unlockAchievement('first-visit')
    }
  }, [])

  useEffect(() => {
    // Save to localStorage whenever achievements change
    localStorage.setItem('portfolio-achievements', JSON.stringify(achievements))
  }, [achievements])

  const unlockAchievement = (id: string) => {
    setAchievements((prev) => {
      const updated = prev.map((a) => {
        if (a.id === id && !a.unlocked) {
          setShowNotification(a)
          setTimeout(() => setShowNotification(null), 5000)
          return { ...a, unlocked: true }
        }
        return a
      })
      return updated
    })
  }

  const updateProgress = (id: string, increment: number = 1) => {
    setAchievements((prev) => {
      const updated = prev.map((a) => {
        if (a.id === id && !a.unlocked && a.maxProgress) {
          const newProgress = Math.min((a.progress || 0) + increment, a.maxProgress)
          if (newProgress >= a.maxProgress) {
            setShowNotification(a)
            setTimeout(() => setShowNotification(null), 5000)
            return { ...a, progress: newProgress, unlocked: true }
          }
          return { ...a, progress: newProgress }
        }
        return a
      })
      return updated
    })
  }

  const resetAchievements = () => {
    setAchievements((prev) =>
      prev.map((a) => ({ ...a, unlocked: false, progress: 0 }))
    )
    localStorage.removeItem('portfolio-achievements')
  }

  return {
    achievements,
    unlockAchievement,
    updateProgress,
    resetAchievements,
    showNotification,
  }
}
