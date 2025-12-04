'use client'

import { motion } from 'framer-motion'

export default function MagazineHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-[20vw] font-black text-primaryblue leading-none">
          TIMI
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <div className="text-sm tracking-[0.3em] uppercase text-primaryblue mb-8">
            Mobile Engineer • Fintech Specialist
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-[12rem] font-light leading-none mb-6 text-black">
            timi<span className="font-black">10x</span>
          </h1>

          {/* Subhead */}
          <div className="max-w-2xl">
            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed">
              Crafting exceptional mobile experiences for fintech platforms,
              trusted by <span className="text-primaryblue font-medium">100,000+ users</span> worldwide.
            </p>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 flex flex-wrap gap-12 border-t border-black/10 pt-8"
          >
            <div>
              <div className="text-5xl font-light text-black mb-2">5+</div>
              <div className="text-sm tracking-wider uppercase text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-light text-black mb-2">100K+</div>
              <div className="text-sm tracking-wider uppercase text-gray-500">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-light text-black mb-2">$50M+</div>
              <div className="text-sm tracking-wider uppercase text-gray-500">Processed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs tracking-wider uppercase text-gray-400">Scroll</div>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
