'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function MonochromePhilosophy() {
  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-primaryblue" />
            <span className="text-sm tracking-[0.4em] uppercase text-white/40">Philosophy</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-light text-white">
            Guiding<br />Principles
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="space-y-20">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/5 pb-20 last:border-0"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <div className="text-7xl font-light text-primaryblue">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10 space-y-6">
                {/* Title */}
                <h3 className="text-4xl font-light text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xl text-white/60 leading-relaxed font-light max-w-3xl">
                  {item.description}
                </p>

                {/* Accent line */}
                <div className="w-24 h-px bg-primaryblue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
