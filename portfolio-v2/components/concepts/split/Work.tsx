'use client'

import { projects } from '@/data/portfolio'

export default function SplitWork() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-16">
          Selected Projects
        </h2>

        {/* Alternating Left-Right Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image/Visual Side */}
              <div className="flex-1">
                <div
                  className={`aspect-square rounded-[10px] border-2 border-primaryblue flex items-center justify-center text-9xl ${
                    index % 2 === 0 ? 'bg-primaryblue' : 'bg-primaryivory'
                  }`}
                >
                  {index === 0 && <span className="text-white">📈</span>}
                  {index === 1 && <span className="text-primaryblue">💼</span>}
                  {index === 2 && <span className="text-primaryblue">🌾</span>}
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-xs font-bold text-primaryblue bg-primaryivory px-4 py-2 rounded-full border border-primaryblue uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-primaryblue mb-4">
                  {project.title}
                </h3>

                <p className="text-sm font-bold text-primaryblue/60 mb-6 uppercase tracking-wide">
                  {project.role} · {project.year}
                </p>

                <p className="text-xl text-primaryblue/80 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-primaryblue text-white px-6 py-4 rounded-[4px] inline-block font-bold text-xl mb-8">
                  {project.impact}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white border-2 border-primaryblue text-primaryblue text-sm font-medium rounded-[4px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
