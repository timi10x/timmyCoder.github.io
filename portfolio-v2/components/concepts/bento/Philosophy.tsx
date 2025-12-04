'use client'

import { philosophy } from '@/data/portfolio'

export default function BentoPhilosophy() {
  return (
    <section className="min-h-screen px-6 py-20 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-12">
          How I Build
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophy.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 hover:shadow-2xl transition-all duration-200 group"
            >
              {/* Number Badge with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primaryblue text-white rounded-full flex items-center justify-center font-black text-lg">
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

              <h3 className="text-2xl font-black text-primaryblue mb-4 group-hover:text-primaryblue/80 transition-colors">
                {item.title}
              </h3>

              <p className="text-primaryblue/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
