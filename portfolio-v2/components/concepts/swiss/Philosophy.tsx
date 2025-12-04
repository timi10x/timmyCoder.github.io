'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function SwissPhilosophy() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-2 w-32 bg-primaryblue mb-8" />
          <h2 className="text-8xl font-black uppercase tracking-tighter text-white">
            PRINCIPLES
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="space-y-0">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-t-2 border-white py-12 grid grid-cols-12 gap-8 hover:bg-white/5 transition-colors"
            >
              {/* Number */}
              <div className="col-span-12 md:col-span-2">
                <div className="text-6xl font-black text-primaryblue">
                  {item.number}
                </div>
              </div>

              {/* Title */}
              <div className="col-span-12 md:col-span-4">
                <h3 className="text-3xl font-black uppercase text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6">
                <p className="text-lg leading-relaxed text-white/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
