'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Large quotation mark */}
              <div className="absolute -top-4 -left-2 sm:-left-4 text-6xl sm:text-7xl md:text-8xl font-serif text-gray-100 select-none">
                "
              </div>
              
              {/* Quote */}
              <blockquote className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                {/* Attribution */}
                <footer className="flex items-center justify-between">
                  <div>
                    <cite className="not-italic">
                      <span className="text-sm sm:text-base font-semibold text-gray-900">
                        {testimonial.author}
                      </span>
                      <span className="text-sm sm:text-base text-gray-600">
                        {' '}— {testimonial.role} at {testimonial.company}
                      </span>
                    </cite>
                  </div>
                  
                  {testimonial.linkedIn && (
                    <motion.a
                      href={testimonial.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      whileHover={{ y: -2 }}
                      aria-label={`View ${testimonial.author}'s LinkedIn profile`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  )}
                </footer>
              </blockquote>
              
              {/* Subtle divider between testimonials */}
              {index < testimonials.length - 1 && (
                <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-px bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
