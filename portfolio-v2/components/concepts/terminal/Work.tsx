'use client'

import { useState } from 'react'
import { projects } from '@/data/portfolio'

export default function TerminalWork() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 font-mono">
          <p className="text-primaryblue/60 mb-2">$ cd ~/projects</p>
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue">
            ./selected_work
          </h2>
        </div>

        {/* Accordion-style Project Cards */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primaryivory border-2 border-primaryblue rounded-[10px] overflow-hidden hover:shadow-xl transition-all duration-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primaryblue/5 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl">
                    {project.id === 1 && '📈'}
                    {project.id === 2 && '💼'}
                    {project.id === 3 && '🌾'}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-primaryblue mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primaryblue/60 font-mono">
                      {project.role} | {project.year}
                    </p>
                  </div>
                </div>
                <div className="text-3xl text-primaryblue font-mono">
                  {expandedId === project.id ? '−' : '+'}
                </div>
              </button>

              {/* Accordion Content */}
              {expandedId === project.id && (
                <div className="px-6 pb-6 animate-slideDown">
                  <div className="bg-white border-2 border-primaryblue rounded-[4px] p-6 font-mono">
                    <p className="text-primaryblue/60 text-xs mb-2">$ cat README.md</p>
                    <p className="text-lg text-primaryblue/90 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-primaryblue/60 text-xs mb-2">$ echo $IMPACT</p>
                    <div className="bg-primaryblue text-white px-6 py-3 rounded-[4px] inline-block font-bold mb-6">
                      {project.impact}
                    </div>

                    <p className="text-primaryblue/60 text-xs mb-2">$ ls -la tech_stack/</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primaryivory border border-primaryblue text-primaryblue text-sm rounded-[4px]"
                        >
                          📦 {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
