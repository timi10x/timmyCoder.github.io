'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function MagazineWork() {
  return (
    <section id="work" className="py-32 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-primaryblue mb-4">
            Featured Work
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-black">
            Selected<br />
            <span className="font-black">Projects</span>
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Number & Visual Block */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-square bg-primaryblue overflow-hidden">
                  {/* Large Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[15rem] font-black text-white/10 leading-none">
                      {index + 1}
                    </div>
                  </div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {index === 0 && '📈'}
                    {index === 1 && '💼'}
                    {index === 2 && '🌾'}
                  </div>
                  {/* Year Badge */}
                  <div className="absolute top-8 right-8 bg-white text-primaryblue px-6 py-2 text-sm font-bold">
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-6">
                  {/* Category */}
                  <div className="text-xs tracking-[0.3em] uppercase text-primaryblue">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-5xl md:text-6xl font-black text-black">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="text-xl font-light text-gray-600">
                    {project.role}
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="pt-4 border-t border-black/10">
                    <div className="text-3xl font-light text-black">{project.impact}</div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white text-sm text-gray-700 border border-black/10"
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
