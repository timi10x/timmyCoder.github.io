'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Achievement } from '@/hooks/useAchievements'

interface AchievementNotificationProps {
  achievement: Achievement | null
}

export default function AchievementNotification({ achievement }: AchievementNotificationProps) {
  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed bottom-24 right-8 z-[9999] bg-white border-2 border-primaryblue rounded-[10px] p-6 shadow-2xl max-w-sm"
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl">{achievement.icon}</div>
            <div>
              <div className="text-xs text-primaryblue/60 uppercase tracking-wider mb-1">
                Achievement Unlocked!
              </div>
              <div className="text-lg font-black text-primaryblue mb-1">
                {achievement.title}
              </div>
              <div className="text-sm text-primaryblue/80">
                {achievement.description}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
