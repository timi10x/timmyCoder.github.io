'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'

export default function NotebookWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white relative">
      {/* Ruled Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="h-8 border-b border-primaryblue" />
        ))}
      </div>
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400/20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-5xl font-black text-primaryblue mb-12 underline decoration-wavy">
          Projects & Work
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-yellow-50 border-2 border-yellow-300 rounded-[4px] p-6 relative shadow-sm">
              {/* Sticky Note Style */}
              <div className="absolute top-2 right-2 text-xs text-yellow-700">📌</div>
              
              <h3 className="text-2xl font-black text-primaryblue mb-2">{project.title}</h3>
              <div className="text-sm text-primaryblue/60 mb-4">{project.role} · {project.year}</div>
              <p className="text-primaryblue/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white border border-primaryblue text-primaryblue text-xs rounded-full">{tech}</span>
                ))}
              </div>
              
              <div className="inline-block bg-primaryblue text-white px-4 py-2 rounded-[4px] font-bold text-sm">
                {project.impact}
              </div>

              {/* Margin note */}
              <div className="absolute -left-16 top-8 text-xs text-primaryblue/40 transform -rotate-90 hidden md:block">
                ← important!
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
