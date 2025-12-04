'use client'

import { motion } from 'framer-motion'

export default function GradientHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-500 via-primaryblue to-cyan-500 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="text-8xl md:text-[12rem] font-black leading-none mb-8 text-white">
            timi10x
          </h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-white/90 mb-12"
          >
            Mobile Engineer • Fintech Specialist
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-16"
          >
            Building the future of financial technology, one exceptional mobile experience at a time.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl px-8 py-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">5+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl px-8 py-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">100K+</div>
              <div className="text-sm text-white/70">Active Users</div>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl px-8 py-6 border border-white/20">
              <div className="text-4xl font-black text-white mb-2">$50M+</div>
              <div className="text-sm text-white/70">Processed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
