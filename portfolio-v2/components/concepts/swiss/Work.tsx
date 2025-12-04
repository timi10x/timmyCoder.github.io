'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function SwissWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-2 w-32 bg-primaryblue mb-8" />
          <h2 className="text-8xl font-black uppercase tracking-tighter text-black">
            WORK
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t-2 border-black py-12 grid grid-cols-12 gap-8 hover:bg-primaryivory transition-colors"
            >
              {/* Number */}
              <div className="col-span-2">
                <div className="text-7xl font-black text-primaryblue">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Title & Role */}
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-4xl font-black uppercase mb-2 text-black">
                  {project.title}
                </h3>
                <div className="text-sm uppercase tracking-wider text-gray-600">
                  {project.role}
                </div>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-4 md:col-start-7">
                <p className="text-base leading-relaxed text-black mb-4">
                  {project.description}
                </p>
                <div className="text-2xl font-black text-black mb-4">
                  {project.impact}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="col-span-12 md:col-span-2">
                <div className="space-y-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <div key={tech} className="text-xs uppercase tracking-wider">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Year & Category */}
              <div className="col-span-12 flex justify-between items-center mt-4 text-xs uppercase tracking-wider text-gray-500">
                <span>{project.year}</span>
                <span>{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
