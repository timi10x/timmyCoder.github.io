'use client'

import { useState, useEffect, useRef } from 'react'
import { testimonials } from '@/data/portfolio'

export default function SplitTestimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleCards.length === 0) {
            // Stagger animation
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [visibleCards.length])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-primaryivory">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-16 text-center">
          What People Say
        </h2>

        {/* Staggered Vertical Stack */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(index)
                  ? index % 2 === 0
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-100 translate-x-0'
                  : index % 2 === 0
                  ? 'opacity-0 -translate-x-12'
                  : 'opacity-0 translate-x-12'
              } ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}
              style={{ maxWidth: '90%' }}
            >
              <div className="bg-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-102 hover:shadow-2xl transition-all duration-200">
                {/* Large Quote Background */}
                <div className="relative">
                  <div className="absolute -top-4 -left-2 text-8xl text-primaryblue/10 font-serif leading-none">
                    "
                  </div>

                  <div className="relative z-10">
                    <p className="text-lg text-primaryblue/90 mb-6 leading-relaxed">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primaryblue text-white rounded-full flex items-center justify-center font-black text-xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-primaryblue text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-primaryblue/60">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-primaryblue/40 font-medium">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
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
