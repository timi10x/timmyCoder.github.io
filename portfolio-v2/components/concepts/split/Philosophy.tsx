'use client'

import { philosophy } from '@/data/portfolio'

export default function SplitPhilosophy() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-16">
          Engineering Philosophy
        </h2>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primaryblue transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {philosophy.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div
                    className={`bg-primaryivory border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-all duration-200 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="text-2xl font-black text-primaryblue mb-4">
                      {item.title}
                    </h3>
                    <p className="text-primaryblue/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Number Badge */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primaryblue text-white rounded-full flex items-center justify-center font-black text-2xl border-4 border-white shadow-lg">
                    {item.number}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
