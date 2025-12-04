'use client'

import { motion } from 'framer-motion'
import { Achievement } from '@/hooks/useAchievements'

interface AchievementsProps {
  achievements: Achievement[]
}

export default function Achievements({ achievements }: AchievementsProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length
  const totalCount = achievements.length

  return (
    <section className="py-20 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue mb-4">
            Achievements
          </h2>
          <p className="text-xl text-primaryblue/70">
            You've unlocked {unlockedCount} of {totalCount} achievements!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative rounded-[10px] p-6 border-2 ${
                achievement.unlocked
                  ? 'bg-white border-primaryblue'
                  : 'bg-gray-100 border-gray-300 opacity-50'
              }`}
            >
              {/* Lock Overlay */}
              {!achievement.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-[10px]">
                  <div className="text-6xl">🔒</div>
                </div>
              )}

              <div className="text-5xl mb-3">{achievement.icon}</div>
              <h3 className="text-xl font-black text-primaryblue mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-primaryblue/70 mb-3">
                {achievement.description}
              </p>

              {/* Progress Bar */}
              {achievement.maxProgress && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-primaryblue"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((achievement.progress || 0) / achievement.maxProgress) * 100}%`,
                      }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="text-xs text-primaryblue/60 mt-1">
                    {achievement.progress || 0} / {achievement.maxProgress}
                  </div>
                </div>
              )}

              {/* Unlocked Badge */}
              {achievement.unlocked && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-2 right-2"
                >
                  <div className="bg-primaryblue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Achievement Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border-2 border-primaryblue rounded-[10px] p-8 text-center"
        >
          <h3 className="text-2xl font-black text-primaryblue mb-4">
            Overall Progress
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-3">
              <motion.div
                className="h-full bg-primaryblue"
                initial={{ width: 0 }}
                whileInView={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
            <p className="text-primaryblue/70">
              {Math.round((unlockedCount / totalCount) * 100)}% Complete
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
