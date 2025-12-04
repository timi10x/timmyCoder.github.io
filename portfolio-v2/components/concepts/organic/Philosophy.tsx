'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function OrganicPhilosophy() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-[#030001]/40 mb-4 font-light">
            Philosophy
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[#030001]">
            Guiding Principles
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#f6f5f1] to-[#E6E2F8]/20 rounded-3xl p-8 h-full hover:shadow-lg transition-all duration-300">
                {/* Number */}
                <div className="text-7xl font-light text-[#E6E2F8] mb-6">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-light text-[#030001] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#030001]/60 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="w-full h-px bg-gradient-to-r from-[#E6E2F8] to-transparent mt-6 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
