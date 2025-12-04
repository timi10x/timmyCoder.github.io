'use client'

import { useState } from 'react'
import { testimonials } from '@/data/portfolio'

export default function TerminalTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Calculate indices for 3-card display
  const leftIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
  const rightIndex = (currentIndex + 1) % testimonials.length

  return (
    <section className="py-20 px-6 bg-primaryivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 font-mono text-center">
          <p className="text-primaryblue/60 mb-2">$ cat testimonials.log</p>
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue">
            What People Say
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl" style={{ perspective: '2000px' }}>
            {/* Left Card */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-80 transition-all duration-500 opacity-50"
              style={{
                transform: 'translateY(-50%) translateX(-10%) scale(0.85) rotateY(15deg)',
              }}
            >
              <TestimonialCard testimonial={testimonials[leftIndex]} isCenter={false} />
            </div>

            {/* Center Card (Featured) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 z-10 transition-all duration-500"
              style={{
                transform: 'translate(-50%, -50%) scale(1.1)',
              }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} isCenter={true} />
            </div>

            {/* Right Card */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-80 transition-all duration-500 opacity-50"
              style={{
                transform: 'translateY(-50%) translateX(10%) scale(0.85) rotateY(-15deg)',
              }}
            >
              <TestimonialCard testimonial={testimonials[rightIndex]} isCenter={false} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 bg-primaryblue text-white rounded-full font-bold text-xl hover:scale-110 transition-transform"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primaryblue w-8' : 'bg-primaryblue/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 bg-primaryblue text-white rounded-full font-bold text-xl hover:scale-110 transition-transform"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, isCenter }: { testimonial: any; isCenter: boolean }) {
  return (
    <div
      className={`bg-white border-2 border-primaryblue rounded-[10px] p-8 transition-all duration-300 ${
        isCenter ? 'shadow-2xl' : 'shadow-md'
      }`}
    >
      <div className="font-mono text-xs text-primaryblue/60 mb-4">
        &gt; testimonial.log
      </div>

      <p className="text-base text-primaryblue/90 mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-4 border-t-2 border-primaryblue/20 pt-4">
        <div className="w-12 h-12 bg-primaryblue text-white rounded-full flex items-center justify-center font-black">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold text-primaryblue">{testimonial.name}</div>
          <div className="text-sm text-primaryblue/60 font-mono">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
