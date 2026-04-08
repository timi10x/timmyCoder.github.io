'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/philosophy'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-8 sm:py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How I Think
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Principles forged from a decade of building products at scale
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="py-6 md:py-8">
                <div className="flex items-start gap-4">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-100">
                    {item.number}
                  </span>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                className="h-[1px] bg-gray-200 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
