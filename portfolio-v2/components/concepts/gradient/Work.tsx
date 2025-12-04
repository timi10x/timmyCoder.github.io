'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

const gradients = [
  'from-pink-500 via-red-500 to-yellow-500',
  'from-green-500 via-teal-500 to-blue-500',
  'from-purple-500 via-pink-500 to-red-500',
]

export default function GradientWork() {
  return (
    <section id="work" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-white/60">Transforming ideas into reality</p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${gradients[index]} p-1`}>
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Icon/Visual */}
                    <div className="relative">
                      <div className={`aspect-square rounded-2xl bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-9xl transform group-hover:scale-105 transition-transform duration-500`}>
                        {index === 0 && '📈'}
                        {index === 1 && '💼'}
                        {index === 2 && '🌾'}
                      </div>
                      {/* Floating badge */}
                      <div className="absolute -top-4 -right-4 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl">
                        {project.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase tracking-wider">
                        {project.category}
                      </div>

                      <h3 className="text-5xl font-black text-white">
                        {project.title}
                      </h3>

                      <div className="text-lg text-white/60">
                        {project.role}
                      </div>

                      <p className="text-white/80 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold text-xl">
                        {project.impact}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
