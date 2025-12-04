'use client'

import { philosophy } from '@/data/portfolio'

export default function EditorialPhilosophy() {
  return (
    <section className="py-20 px-6 bg-primaryivory">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="border-b-4 border-primaryblue pb-4 mb-12">
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue text-center" style={{ letterSpacing: '-0.02em' }}>
            ENGINEERING PRINCIPLES
          </h2>
          <div className="text-center mt-2">
            <p className="text-xs text-primaryblue/60 uppercase tracking-widest">
              Core Values That Guide Every Decision
            </p>
          </div>
        </div>

        {/* Two-Column Article Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {philosophy.map((item, index) => (
            <article
              key={item.id}
              className="bg-white border-2 border-primaryblue p-8 hover:shadow-2xl transition-all duration-200"
            >
              {/* Number Badge */}
              <div className="flex items-center gap-4 mb-6 border-b-2 border-primaryblue pb-4">
                <div className="w-14 h-14 bg-primaryblue text-white flex items-center justify-center font-black text-2xl">
                  {item.number}
                </div>
                <div className="text-3xl">
                  {item.id === 1 && '🔒'}
                  {item.id === 2 && '✨'}
                  {item.id === 3 && '📡'}
                  {item.id === 4 && '🧪'}
                  {item.id === 5 && '⚡'}
                  {item.id === 6 && '♿'}
                </div>
              </div>

              {/* Title with Drop Cap */}
              <h3 className="text-2xl md:text-3xl font-black text-primaryblue mb-4 uppercase tracking-tight" style={{ letterSpacing: '-0.01em' }}>
                {item.title}
              </h3>

              {/* Description with Drop Cap on First Paragraph */}
              <div className="text-primaryblue/90 leading-relaxed">
                <p>
                  <span className="float-left text-5xl font-black text-primaryblue leading-none mr-2 mt-1">
                    {item.description.charAt(0)}
                  </span>
                  {item.description.slice(1)}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="mt-6 pt-4 border-t border-primaryblue/20">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-primaryblue/40 uppercase tracking-wider">
                    Principle {item.number}
                  </div>
                  <div className="w-8 h-8 border-2 border-primaryblue/20 transform rotate-45" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 pt-8 border-t-4 border-primaryblue text-center">
          <p className="text-sm text-primaryblue/60 uppercase tracking-widest">
            These principles are non-negotiable in every project
          </p>
        </div>
      </div>
    </section>
  )
}
