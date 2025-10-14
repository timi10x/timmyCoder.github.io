'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function BlueprintWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#243DE8 1px, transparent 1px),
              linear-gradient(90deg, #243DE8 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 border-primaryblue p-6 inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-primaryblue uppercase tracking-tight">
              Project Plans
            </h2>
            <div className="text-sm font-mono text-primaryblue/60 mt-2">
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
              className="border-2 border-primaryblue p-8 relative"
            >
              {/* Drawing Number */}
              <div className="absolute -top-4 left-8 bg-white px-4 py-1 border-2 border-primaryblue">
                <span className="font-mono text-sm font-bold text-primaryblue">
                  DWG-{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              {/* Isometric View Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Isometric Diagram */}
                <div className="relative aspect-square border border-primaryblue/30 p-8">
                  <div className="absolute top-2 left-2 text-xs font-mono text-primaryblue/60">
                    ISOMETRIC VIEW
                  </div>

                  {/* Simple isometric representation */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative" style={{ transform: 'rotateX(60deg) rotateZ(45deg)' }}>
                      <div className="w-32 h-32 border-2 border-primaryblue bg-primaryivory flex items-center justify-center text-6xl">
                        {index === 0 && '📈'}
                        {index === 1 && '💼'}
                        {index === 2 && '🌾'}
                      </div>
                    </div>
                  </div>

                  {/* Dimension Lines */}
                  <div className="absolute bottom-4 left-8 right-8 h-px bg-primaryblue">
                    <div className="absolute -left-2 -top-1 w-0.5 h-2 bg-primaryblue" />
                    <div className="absolute -right-2 -top-1 w-0.5 h-2 bg-primaryblue" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 text-xs font-mono">
                      SCALE 1:1
                    </div>
                  </div>
                </div>

                {/* Right: Specifications */}
                <div>
                  <h3 className="text-3xl font-black text-primaryblue mb-2 uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <div className="text-sm font-mono text-primaryblue/60 mb-6 uppercase">
                    {project.role} • {project.year}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-l-2 border-primaryblue pl-4">
                      <div className="text-xs font-mono text-primaryblue/60 mb-1">DESCRIPTION:</div>
                      <p className="text-primaryblue/90">{project.description}</p>
                    </div>

                    <div className="border-l-2 border-primaryblue pl-4">
                      <div className="text-xs font-mono text-primaryblue/60 mb-1">IMPACT:</div>
                      <div className="text-2xl font-black text-primaryblue">{project.impact}</div>
                    </div>

                    <div className="border-l-2 border-primaryblue pl-4">
                      <div className="text-xs font-mono text-primaryblue/60 mb-2">MATERIALS (TECH STACK):</div>
                      <div className="space-y-1">
                        {project.tech.map((tech, i) => (
                          <div key={tech} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 bg-primaryblue" />
                            <span className="font-mono">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Approval Stamp */}
                  <div className="inline-block border-2 border-primaryblue px-4 py-2">
                    <div className="text-xs font-mono font-bold text-primaryblue">
                      ✓ APPROVED FOR PRODUCTION
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Notes */}
              <div className="mt-6 pt-6 border-t border-primaryblue/30 flex justify-between items-center text-xs font-mono text-primaryblue/60">
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
