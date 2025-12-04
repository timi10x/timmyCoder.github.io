'use client'

import { useState } from 'react'
import { philosophy } from '@/data/portfolio'

export default function TerminalPhilosophy() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 font-mono">
          <p className="text-primaryblue/60 mb-2">$ vim engineering_principles.md</p>
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue">
            Core Principles
          </h2>
        </div>

        {/* Monospace Numbered List with Hover Reveal */}
        <div className="space-y-4 font-mono">
          {philosophy.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative"
            >
              {/* Command Line Style */}
              <div className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-6 cursor-pointer hover:bg-white transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="text-primaryblue/40 text-sm">
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">
                        {item.id === 1 && '🔒'}
                        {item.id === 2 && '✨'}
                        {item.id === 3 && '📡'}
                        {item.id === 4 && '🧪'}
                        {item.id === 5 && '⚡'}
                        {item.id === 6 && '♿'}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-primaryblue">
                        {item.title}
                      </h3>
                    </div>

                    {/* Hidden description revealed on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        hoveredId === item.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="border-l-4 border-primaryblue pl-4">
                        <p className="text-primaryblue/60 text-xs mb-2">
                          $ cat {item.title.toLowerCase().replace(/\s+/g, '_')}.txt
                        </p>
                        <p className="text-primaryblue/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    {hoveredId !== item.id && (
                      <p className="text-primaryblue/40 text-xs mt-2">
                        [Hover to expand]
                      </p>
                    )}
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
