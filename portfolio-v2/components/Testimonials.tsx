'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: "Working with Daniel has been transformative for our mobile strategy. He deeply understands fintech, from the market to the product and community. He has a sharp sense of app architecture and strategic drivers for the business. Beyond this, he has been helpful in hiring, technical decisions, and product direction. If you can work with Daniel, just do it.",
    author: "CEO, Chaka",
    role: "Stock Trading Platform"
  },
  {
    quote: "Daniel genuinely understands our value proposition and unique business model. We wanted to work with him because he thought about our product in a first principles way. Since then, he has been pivotal with our technical strategy, architecture decisions and scaling challenges.",
    author: "Founder, Expanse Technology",
    role: "Payment Solutions"
  },
  {
    quote: "Daniel is rare. He combines deep technical expertise with genuine care for the user experience. He doesn't just write code - he builds products that people trust with their money. That's a special kind of engineer.",
    author: "CTO, Crop2Cash",
    role: "Agricultural Fintech"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        {/* Testimonial Content */}
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-normal text-neutral-900 leading-relaxed mb-8 italic">
            "{testimonials[currentIndex].quote}"
          </p>
          <div>
            <div className="text-base font-medium text-neutral-900">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-sm text-neutral-600">
              {testimonials[currentIndex].role}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevTestimonial}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Previous
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-neutral-900 w-8' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
