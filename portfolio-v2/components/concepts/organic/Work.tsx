'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function OrganicWork() {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-2xl"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-[#030001]/40 mb-4 font-light">
            Selected Work
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[#030001] leading-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group"
            >
              {/* Project visual - alternating sides */}
              <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-[4/3] bg-gradient-to-br from-[#E6E2F8] to-[#f6f5f1] rounded-3xl overflow-hidden p-12 flex items-center justify-center"
                >
                  {/* Organic blob */}
                  <div className="absolute top-10 right-10 w-64 h-64 bg-white/40 rounded-full blur-2xl" />

                  {/* Icon */}
                  <div className="text-9xl relative z-10">
                    {index === 0 && '📈'}
                    {index === 1 && '💼'}
                    {index === 2 && '🌾'}
                  </div>

                  {/* Year badge */}
                  <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-light text-[#030001]">
                    {project.year}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-6">
                  {/* Category */}
                  <div className="text-xs tracking-[0.2em] uppercase text-[#030001]/40 font-light">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-light text-[#030001] group-hover:text-[#030001]/70 transition-colors">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="text-lg text-[#030001]/60 font-light">
                    {project.role}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-[#030001]/70 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="pt-6">
                    <div className="inline-block bg-[#E6E2F8]/40 px-6 py-3 rounded-full">
                      <span className="text-2xl font-light text-[#030001]">{project.impact}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white border border-[#030001]/10 rounded-full text-sm text-[#030001]/70 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
