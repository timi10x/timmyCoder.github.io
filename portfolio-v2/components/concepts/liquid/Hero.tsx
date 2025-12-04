'use client'

import { motion } from 'framer-motion'

export default function LiquidHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]">
      {/* Animated liquid blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ['30%', '50%', '30%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-white/20 to-white/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          borderRadius: ['40%', '60%', '40%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-gradient-to-tl from-white/20 to-white/5 blur-3xl"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Glassmorphic badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8 px-8 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
          >
            <span className="text-sm tracking-[0.2em] uppercase text-white font-medium">
              Mobile Engineer • Fintech Specialist
            </span>
          </motion.div>

          {/* Main heading with iridescent effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight"
            style={{
              textShadow: '0 0 80px rgba(255,255,255,0.3)',
            }}
          >
            timi10x
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-16"
          >
            Crafting exceptional mobile experiences for ambitious financial platforms.
            Building with purpose, delivering with precision.
          </motion.p>

          {/* Floating glassmorphic cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '5+', label: 'Years Experience', delay: 0.8 },
              { value: '100K+', label: 'Active Users', delay: 0.9 },
              { value: '$50M+', label: 'Transactions', delay: 1.0 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[32px] p-10 shadow-2xl"
              >
                <motion.div
                  className="text-6xl font-bold text-white mb-3"
                  style={{
                    textShadow: '0 0 40px rgba(255,255,255,0.4)',
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm uppercase tracking-[0.15em] text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="text-xs tracking-[0.2em] uppercase text-white/60">Explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
