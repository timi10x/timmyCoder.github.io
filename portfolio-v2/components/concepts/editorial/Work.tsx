'use client'

import { projects } from '@/data/portfolio'

export default function EditorialWork() {
  return (
    <section id="work" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Newspaper Style */}
        <div className="border-b-4 border-primaryblue pb-4 mb-12">
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue text-center" style={{ letterSpacing: '-0.02em' }}>
            FEATURED PROJECTS
          </h2>
          <div className="text-center mt-2">
            <p className="text-xs text-primaryblue/60 uppercase tracking-widest">
              A Selection of Production Work
            </p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="break-inside-avoid"
              style={{
                // Varying heights for masonry effect
                ...(index === 0 && { minHeight: '500px' }),
                ...(index === 1 && { minHeight: '400px' }),
                ...(index === 2 && { minHeight: '450px' })
              }}
            >
              <div className="bg-white border-2 border-primaryblue p-8 hover:shadow-2xl transition-all duration-200">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-primaryblue border border-primaryblue px-3 py-1 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl md:text-4xl font-black text-primaryblue mb-3" style={{ letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>

                {/* Role & Year */}
                <p className="text-xs text-primaryblue/60 uppercase tracking-wider mb-4 border-b border-primaryblue/20 pb-3">
                  {project.role} • {project.year}
                </p>

                {/* First Letter Drop Cap Style */}
                <div className="mb-6">
                  <p className="text-primaryblue/90 leading-relaxed">
                    <span className="float-left text-6xl font-black text-primaryblue leading-none mr-2 mt-1">
                      {project.description.charAt(0)}
                    </span>
                    {project.description.slice(1)}
                  </p>
                </div>

                {/* Impact Box */}
                <div className="bg-primaryblue text-white p-4 mb-4 text-center">
                  <div className="text-xs uppercase tracking-wider opacity-80 mb-1">
                    Impact
                  </div>
                  <div className="text-xl font-black">
                    {project.impact}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="border-t-2 border-primaryblue pt-4">
                  <div className="text-xs text-primaryblue/60 uppercase tracking-wider mb-3">
                    Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-primaryivory text-primaryblue border border-primaryblue font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
