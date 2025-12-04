'use client'

import { projects } from '@/data/portfolio'

export default function BentoWork() {
  return (
    <section id="work" className="min-h-screen px-6 py-20 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-12">
          Selected Work
        </h2>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Card */}
          <div className="md:row-span-2 bg-white border-2 border-primaryblue rounded-[10px] p-10 hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-6">
              <span className="text-xs font-bold text-white bg-primaryblue px-3 py-1 rounded-full uppercase tracking-wider">
                Featured
              </span>
            </div>

            <h3 className="text-4xl font-black text-primaryblue mb-4 group-hover:scale-105 transition-transform">
              {projects[0].title}
            </h3>

            <p className="text-sm font-bold text-primaryblue/60 mb-4 uppercase tracking-wide">
              {projects[0].role} · {projects[0].year}
            </p>

            <p className="text-lg text-primaryblue/80 mb-6 leading-relaxed">
              {projects[0].description}
            </p>

            <div className="bg-primaryblue text-white px-6 py-4 rounded-[4px] mb-6 inline-block font-bold text-xl">
              {projects[0].impact}
            </div>

            <div className="flex flex-wrap gap-2">
              {projects[0].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primaryivory border border-primaryblue text-primaryblue text-sm font-medium rounded-[4px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="bg-primaryblue text-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-black mb-3">
              {projects[1].title}
            </h3>

            <p className="text-sm opacity-90 mb-4">
              {projects[1].role}
            </p>

            <div className="bg-white text-primaryblue px-4 py-2 rounded-[4px] inline-block font-bold text-sm mb-4">
              {projects[1].impact}
            </div>

            <p className="text-sm opacity-80 leading-relaxed">
              {projects[1].description}
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="bg-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200">
            <h3 className="text-2xl font-black text-primaryblue mb-3">
              {projects[2].title}
            </h3>

            <p className="text-sm text-primaryblue/70 mb-4">
              {projects[2].role}
            </p>

            <div className="bg-primaryblue text-white px-4 py-2 rounded-[4px] inline-block font-bold text-sm mb-4">
              {projects[2].impact}
            </div>

            <p className="text-sm text-primaryblue/80 leading-relaxed">
              {projects[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
