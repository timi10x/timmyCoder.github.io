'use client'

import { motion } from 'framer-motion'
import { philosophy } from '@/data/portfolio'

interface PhilosophyProps {
  primary: string
  secondary: string
  accent: string
}

export default function ThemedPhilosophy({ primary, secondary, accent }: PhilosophyProps) {
  return (
    <section
      className="py-20 px-6 relative"
      style={{
        background: `linear-gradient(to bottom right, ${secondary}e0, ${secondary}, white)`
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 p-6 inline-block" style={{ borderColor: primary }}>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight" style={{ color: primary }}>
              Core Principles
            </h2>
            <div className="text-sm font-mono mt-2" style={{ color: `${primary}99` }}>
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
              className="border-2 p-8 relative"
              style={{ borderColor: primary }}
            >
              {/* Spec Number */}
              <div
                className="absolute -top-4 left-4 px-4 py-1 border-2"
                style={{ backgroundColor: secondary, borderColor: primary }}
              >
                <span className="font-mono text-sm font-bold" style={{ color: primary }}>
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

              <h3 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: primary }}>
                {item.title}
              </h3>

              <div className="border-l-2 pl-4 mb-6" style={{ borderColor: primary }}>
                <p className="leading-relaxed" style={{ color: `${primary}CC` }}>
                  {item.description}
                </p>
              </div>

              {/* Technical Annotation */}
              <div className="flex items-center gap-2 text-xs font-mono" style={{ color: `${primary}99` }}>
                <div className="w-full h-px relative" style={{ backgroundColor: `${primary}4D` }}>
                  <div className="absolute -left-1 -top-1 w-2 h-2 border-l border-b" style={{ borderColor: `${primary}99` }} />
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-b" style={{ borderColor: `${primary}99` }} />
                </div>
              </div>

              <div className="mt-2 text-xs font-mono" style={{ color: `${primary}99` }}>
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
          className="mt-16 border p-6"
          style={{ borderColor: primary }}
        >
          <div className="text-xs font-mono uppercase tracking-wider mb-4" style={{ color: `${primary}99` }}>
            Legend / Notes:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2" style={{ borderColor: primary }} />
              <span style={{ color: `${primary}CC` }}>Mandatory Requirement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-px" style={{ backgroundColor: primary }} />
              <span style={{ color: `${primary}CC` }}>Dimension Line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4" style={{ backgroundColor: primary }} />
              <span style={{ color: `${primary}CC` }}>Active Component</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
