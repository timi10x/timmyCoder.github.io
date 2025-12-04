'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function MagazinePhilosophy() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-primaryblue mb-4">
            Philosophy
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-black">
            Core<br />
            <span className="font-black">Principles</span>
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
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <div className="text-8xl font-black text-primaryblue/10">
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10 space-y-4">
                {/* Title */}
                <h3 className="text-4xl font-black text-black">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xl font-light text-gray-700 leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="w-24 h-px bg-primaryblue mt-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
