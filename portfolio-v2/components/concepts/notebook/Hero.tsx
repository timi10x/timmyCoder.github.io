'use client'

import { motion } from 'framer-motion'

export default function NotebookHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-primaryivory relative">
      {/* Ruled Lines Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="h-8 border-b border-primaryblue/30" />
        ))}
      </div>

      {/* Margin Line */}
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400/30" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Date in corner */}
          <div className="text-right text-sm text-primaryblue/60 mb-8 font-handwriting">
            January 2025
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-primaryblue mb-6 relative">
            timi10x
            {/* Underline */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primaryblue/20" />
          </h1>

          <p className="text-2xl text-primaryblue/80 mb-8 pl-2 border-l-4 border-primaryblue">
            Mobile Engineer building fintech products
          </p>

          {/* Handwritten-style notes */}
          <div className="space-y-4 text-lg text-primaryblue/70">
            <div className="flex items-start gap-2">
              <span className="text-primaryblue">✓</span>
              <span>5+ years experience in mobile development</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primaryblue">✓</span>
              <span>100K+ users served across Africa</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primaryblue">✓</span>
              <span>$50M+ in transactions processed</span>
            </div>
          </div>

          {/* Doodle arrows */}
          <div className="mt-12 flex gap-6">
            <a href="#work" className="px-8 py-4 bg-primaryblue text-white rounded-[4px] font-bold relative hover:scale-105 transition-transform">
              See my work →
              {/* Arrow doodle */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-primaryblue text-2xl">
                ⤴
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
