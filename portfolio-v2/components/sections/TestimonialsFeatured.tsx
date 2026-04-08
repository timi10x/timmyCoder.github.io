'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsFeatured() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward')

  const goToNext = () => {
    setDirection('forward')
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setDirection('backward')
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 'forward' : 'backward')
    setCurrentIndex(index)
  }

  if (!testimonials || testimonials.length === 0) return null

  const safeIndex = Math.min(currentIndex, testimonials.length - 1)
  const currentTestimonial = testimonials[safeIndex]
  if (!currentTestimonial) return null

  return (
    <section
      className="py-10 sm:py-12 md:py-16 px-6 sm:px-8 md:px-12 lg:px-4"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="max-w-4xl mx-auto">
        {/* Testimonial Container */}
        <div
          className="relative min-h-[200px] sm:min-h-[180px] md:min-h-[160px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: direction === 'forward' ? 20 : -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction === 'forward' ? -20 : 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Large quotation mark */}
              <div className="absolute -top-3 -left-2 sm:-left-3 text-5xl sm:text-6xl md:text-7xl font-serif text-gray-200 select-none" aria-hidden="true">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                  {currentTestimonial.quote}
                </p>

                {/* Attribution */}
                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {currentTestimonial.author}
                      </span>
                      <span className="text-sm sm:text-base text-gray-600">
                        {' '}&mdash; {currentTestimonial.role} at {currentTestimonial.company}
                      </span>
                    </cite>
                  </div>

                  {currentTestimonial.linkedIn && (
                    <motion.a
                      href={currentTestimonial.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${currentTestimonial.author}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  )}
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation — arrows + dots */}
        <div className="flex items-center justify-center gap-4 mt-1 sm:mt-2 md:mt-3">
          <button
            onClick={goToPrev}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${
                  index === safeIndex ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === safeIndex ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
