'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function MonochromeWork() {
  return (
    <section id="work" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-primaryblue" />
            <span className="text-sm tracking-[0.4em] uppercase text-white/40">Selected Work</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-light text-white">
            Featured<br />Projects
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
              className="group"
            >
              <div className="border-t border-white/10 pt-12">
                {/* Project Number & Year */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-8xl font-light text-white/10 group-hover:text-primaryblue/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm tracking-[0.3em] uppercase text-white/40">
                    {project.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  {/* Left: Title & Role */}
                  <div className="md:col-span-5">
                    <div className="mb-4">
                      <span className="inline-block border border-primaryblue/30 text-primaryblue px-4 py-1 text-xs tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-6xl font-light text-white mb-4 group-hover:text-primaryblue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-white/50 font-light">
                      {project.role}
                    </p>
                  </div>

                  {/* Right: Description & Details */}
                  <div className="md:col-span-7 space-y-8">
                    <p className="text-xl text-white/70 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="border-l-2 border-primaryblue pl-6">
                      <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-2">
                        Impact
                      </div>
                      <div className="text-3xl font-light text-white">
                        {project.impact}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="border border-white/20 px-4 py-2 text-sm text-white/60 hover:border-primaryblue hover:text-primaryblue transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
