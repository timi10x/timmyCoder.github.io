'use client'

import { useState, useEffect, useRef } from 'react'
import { testimonials } from '@/data/portfolio'

export default function EditorialTestimonials() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleCards.length === 0) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
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
    <section ref={sectionRef} className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #243DE8 0px,
              #243DE8 2px,
              transparent 2px,
              transparent 20px
            )`,
            animation: 'stripe-slide 20s linear infinite'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="border-b-4 border-primaryblue pb-4 mb-12">
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue text-center" style={{ letterSpacing: '-0.02em' }}>
            TESTIMONIALS
          </h2>
          <div className="text-center mt-2">
            <p className="text-xs text-primaryblue/60 uppercase tracking-widest">
              From Colleagues & Collaborators
            </p>
          </div>
        </div>

        {/* Pull-Quote Style Cards */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-primaryivory border-2 border-primaryblue p-8 md:p-12 relative overflow-hidden hover:shadow-2xl transition-shadow duration-200">
                {/* Large Quotation Mark Background */}
                <div className="absolute top-0 left-0 text-[200px] text-primaryblue/10 font-serif leading-none select-none pointer-events-none" style={{ lineHeight: '0.7' }}>
                  "
                </div>

                {/* Diagonal Stripe Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        #243DE8 0px,
                        #243DE8 4px,
                        transparent 4px,
                        transparent 12px
                      )`
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Quote Text */}
                  <p className="text-xl md:text-2xl text-primaryblue/90 leading-relaxed mb-8 font-medium">
                    "{testimonial.text}"
                  </p>

                  {/* Attribution */}
                  <div className="flex items-center gap-4 border-t-4 border-primaryblue pt-6">
                    <div className="w-16 h-16 bg-primaryblue text-white flex items-center justify-center font-black text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-xl font-black text-primaryblue uppercase tracking-wide">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-primaryblue/70 uppercase tracking-wider">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-primaryblue/50 uppercase tracking-wider">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes stripe-slide {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(20px) translateY(20px);
          }
        }
      `}</style>
    </section>
  )
}
