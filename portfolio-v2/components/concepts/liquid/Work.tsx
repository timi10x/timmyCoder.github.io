'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function LiquidWork() {
  return (
    <section id="work" className="py-32 px-6 bg-gradient-to-br from-[#f093fb] via-[#f5576c] to-[#fd868c] relative overflow-hidden">
      {/* Floating blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          borderRadius: ['40%', '60%', '40%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-96 h-96 bg-white/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-white/60 mb-4">
            Selected Work
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              {/* Visual */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                  className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-[48px] p-16 shadow-2xl aspect-square flex items-center justify-center relative overflow-hidden"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />

                  {/* Icon */}
                  <div className="text-9xl relative z-10 filter drop-shadow-2xl">
                    {index === 0 && '📈'}
                    {index === 1 && '💼'}
                    {index === 2 && '🌾'}
                  </div>

                  {/* Year badge */}
                  <div className="absolute bottom-6 right-6 backdrop-blur-xl bg-white/20 border border-white/30 px-6 py-3 rounded-full text-sm font-medium text-white">
                    {project.year}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-10 shadow-2xl"
                >
                  {/* Category */}
                  <div className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="text-lg text-white/80 mb-6">
                    {project.role}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-white/90 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="mb-8">
                    <div className="inline-block backdrop-blur-xl bg-white/20 border border-white/30 px-8 py-4 rounded-full">
                      <span className="text-2xl font-bold text-white">{project.impact}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-sm text-white/90 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
