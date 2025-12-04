'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function SubwayWork() {
  return (
    <section id="work" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 bg-primaryblue text-white px-6 py-3 rounded-[4px]">
            <div className="w-8 h-8 bg-white text-primaryblue rounded-full flex items-center justify-center font-black">
              P
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Project Stations</h2>
          </div>
        </div>

        <div className="relative">
          {/* Main Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primaryblue hidden md:block" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Station Node */}
                <div className="absolute left-4 top-8 w-8 h-8 bg-primaryblue rounded-full border-4 border-white hidden md:flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>

                <div className="bg-white border-2 border-primaryblue rounded-[10px] p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{index === 0 && '📈'}{index === 1 && '💼'}{index === 2 && '🌾'}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-primaryblue mb-2">{project.title}</h3>
                      <div className="text-sm text-primaryblue/60 uppercase font-bold">{project.role} • {project.year}</div>
                    </div>
                    <div className="bg-primaryblue text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                      {project.category}
                    </div>
                  </div>

                  <p className="text-primaryblue/80 mb-6">{project.description}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="bg-primaryblue text-white px-6 py-2 rounded-[4px] font-bold">
                      {project.impact}
                    </div>
                    {project.tech.slice(0, 3).map((tech) => (
                      <div key={tech} className="px-4 py-2 bg-primaryivory border border-primaryblue text-primaryblue text-sm rounded-[4px]">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
