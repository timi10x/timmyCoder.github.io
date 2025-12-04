'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function SwissTestimonials() {
  return (
    <section className="py-20 px-6 bg-primaryblue">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-2 w-32 bg-white mb-8" />
          <h2 className="text-8xl font-black uppercase tracking-tighter text-white">
            TESTIMONIALS
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-2 border-white p-12 bg-primaryblue hover:bg-black transition-colors"
            >
              {/* Quote */}
              <div className="mb-8">
                <p className="text-xl leading-relaxed text-white">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t-2 border-white pt-6">
                <div className="text-lg font-black uppercase text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/70">
                  {testimonial.role}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/70">
                  {testimonial.company}
                </div>
              </div>

              {/* Number Badge */}
              <div className="mt-8">
                <div className="inline-block bg-white text-primaryblue px-4 py-2 text-2xl font-black">
                  {testimonial.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
