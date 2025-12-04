'use client'

import { motion } from 'framer-motion'

export default function MonochromeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block border border-white/20 px-6 py-3">
              <span className="text-sm tracking-[0.4em] uppercase text-white/60">
                Mobile Engineer • Fintech Specialist
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-8xl md:text-[14rem] font-light leading-none text-white mb-8 tracking-tight"
          >
            timi<span className="text-primaryblue">10x</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto mb-20 leading-relaxed"
          >
            Architecting exceptional mobile experiences for the world's most ambitious financial platforms
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-16 md:gap-24"
          >
            <div className="text-center">
              <div className="text-6xl font-light text-white mb-3">5<span className="text-primaryblue">+</span></div>
              <div className="text-sm tracking-[0.3em] uppercase text-white/40">Years</div>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="text-center">
              <div className="text-6xl font-light text-white mb-3">100K<span className="text-primaryblue">+</span></div>
              <div className="text-sm tracking-[0.3em] uppercase text-white/40">Users</div>
            </div>
            <div className="hidden md:block w-px bg-white/10" />
            <div className="text-center">
              <div className="text-6xl font-light text-white mb-3">$50M<span className="text-primaryblue">+</span></div>
              <div className="text-sm tracking-[0.3em] uppercase text-white/40">Processed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primaryblue to-transparent"
      />
    </section>
  )
}
