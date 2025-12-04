'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

interface WorkProps {
  primary: string
  secondary: string
  accent: string
}

export default function ThemedWork({ primary, secondary, accent }: WorkProps) {
  return (
    <section
      id="work"
      className="py-20 px-6 relative"
      style={{
        background: `linear-gradient(to bottom right, ${secondary}, ${secondary}f0, ${secondary}e0)`
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
              Project Plans
            </h2>
            <div className="text-sm font-mono mt-2" style={{ color: `${primary}99` }}>
              SECTION A: COMPLETED BUILDS
            </div>
          </div>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border-2 p-8 relative"
              style={{ borderColor: primary }}
            >
              {/* Drawing Number */}
              <div
                className="absolute -top-4 left-8 px-4 py-1 border-2"
                style={{ backgroundColor: secondary, borderColor: primary }}
              >
                <span className="font-mono text-sm font-bold" style={{ color: primary }}>
                  DWG-{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Isometric Diagram */}
                <div className="relative aspect-square border p-8" style={{ borderColor: `${primary}4D` }}>
                  <div className="absolute top-2 left-2 text-xs font-mono" style={{ color: `${primary}99` }}>
                    ISOMETRIC VIEW
                  </div>

                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative" style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}>
                      <div
                        className="w-32 h-32 border-2 flex items-center justify-center text-6xl"
                        style={{ borderColor: primary, backgroundColor: secondary }}
                      >
                        {index === 0 && '📈'}
                        {index === 1 && '💼'}
                        {index === 2 && '🌾'}
                      </div>
                    </div>
                  </div>

                  {/* Dimension Lines */}
                  <div className="absolute bottom-4 left-8 right-8 h-px" style={{ backgroundColor: primary }}>
                    <div className="absolute -left-2 -top-1 w-0.5 h-2" style={{ backgroundColor: primary }} />
                    <div className="absolute -right-2 -top-1 w-0.5 h-2" style={{ backgroundColor: primary }} />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-xs font-mono">
                      SCALE 1:1
                    </div>
                  </div>
                </div>

                {/* Right: Specifications */}
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-2" style={{ color: primary }}>
                    {project.title}
                  </h3>

                  <div className="text-sm font-mono uppercase mb-6" style={{ color: `${primary}99` }}>
                    {project.role} • {project.year}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-2 pl-4" style={{ borderColor: primary }}>
                      <div className="text-xs font-mono mb-1" style={{ color: `${primary}99` }}>DESCRIPTION:</div>
                      <p style={{ color: `${primary}E6` }}>{project.description}</p>
                    </div>

                    <div className="border-l-2 pl-4" style={{ borderColor: primary }}>
                      <div className="text-xs font-mono mb-1" style={{ color: `${primary}99` }}>IMPACT:</div>
                      <div className="text-2xl font-black" style={{ color: primary }}>{project.impact}</div>
                    </div>

                    <div className="border-l-2 pl-4" style={{ borderColor: primary }}>
                      <div className="text-xs font-mono mb-2" style={{ color: `${primary}99` }}>MATERIALS (TECH STACK):</div>
                      <div className="space-y-1">
                        {project.tech.map((tech) => (
                          <div key={tech} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1" style={{ backgroundColor: primary }} />
                            <span className="font-mono">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Approval Stamp */}
                  <div className="inline-block border-2 px-4 py-2" style={{ borderColor: primary }}>
                    <div className="text-xs font-mono font-bold" style={{ color: primary }}>
                      ✓ APPROVED FOR PRODUCTION
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Notes */}
              <div className="mt-6 pt-6 border-t flex justify-between items-center text-xs font-mono" style={{ borderColor: `${primary}4D`, color: `${primary}99` }}>
                <div>PROJECT TYPE: {project.category.toUpperCase()}</div>
                <div>REV: 1.0 | STATUS: DEPLOYED</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
