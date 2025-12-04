'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

export default function BlueprintPhilosophy() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-[#f0ebe0] via-primaryivory to-white">

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 border-primaryblue p-6 inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-primaryblue uppercase tracking-tight">
              Core Principles
            </h2>
            <div className="text-sm font-mono text-primaryblue/60 mt-2">
              SECTION C: DESIGN SPECIFICATIONS
            </div>
          </div>
        </motion.div>

        {/* Principles as Technical Drawings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-2 border-primaryblue p-8 relative"
            >
              {/* Spec Number */}
              <div className="absolute -top-4 left-4 bg-white px-4 py-1 border-2 border-primaryblue">
                <span className="font-mono text-sm font-bold text-primaryblue">
                  SPEC-{item.number}
                </span>
              </div>

              {/* Icon in Corner */}
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                {item.id === 1 && '🔒'}
                {item.id === 2 && '✨'}
                {item.id === 3 && '📡'}
                {item.id === 4 && '🧪'}
                {item.id === 5 && '⚡'}
                {item.id === 6 && '♿'}
              </div>

              <h3 className="text-2xl font-black text-primaryblue mb-4 uppercase tracking-tight">
                {item.title}
              </h3>

              <div className="border-l-2 border-primaryblue pl-4 mb-6">
                <p className="text-primaryblue/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Technical Annotation */}
              <div className="flex items-center gap-2 text-xs font-mono text-primaryblue/60">
                <div className="w-full h-px bg-primaryblue/30 relative">
                  <div className="absolute -left-1 -top-1 w-2 h-2 border-l border-b border-primaryblue/60" />
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-b border-primaryblue/60" />
                </div>
              </div>

              <div className="mt-2 text-xs font-mono text-primaryblue/60">
                PRIORITY: CRITICAL | COMPLIANCE: REQUIRED
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border border-primaryblue p-6"
        >
          <div className="text-xs font-mono text-primaryblue/60 mb-4 uppercase tracking-wider">
            Legend / Notes:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primaryblue" />
              <span className="text-primaryblue/80">Mandatory Requirement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-px bg-primaryblue" />
              <span className="text-primaryblue/80">Dimension Line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primaryblue" />
              <span className="text-primaryblue/80">Active Component</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
