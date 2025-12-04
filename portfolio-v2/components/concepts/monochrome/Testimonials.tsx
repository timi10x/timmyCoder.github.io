'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function MonochromeTestimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-primaryblue" />
            <span className="text-sm tracking-[0.4em] uppercase text-black/40">Testimonials</span>
          </div>
          <h2 className="text-7xl md:text-8xl font-light text-black">
            Client<br />Perspectives
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Quote mark */}
              <div className="text-9xl font-serif text-primaryblue/10 leading-none mb-6">
                "
              </div>

              {/* Quote text */}
              <blockquote className="mb-8">
                <p className="text-2xl font-light text-black/80 leading-relaxed">
                  {testimonial.text}
                </p>
              </blockquote>

              {/* Author */}
              <div className="border-t border-black/10 pt-6">
                <div className="text-lg font-medium text-black mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-black/50 mb-1">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primaryblue">
                  {testimonial.company}
                </div>
              </div>

              {/* Number indicator */}
              <div className="absolute top-0 right-0 text-6xl font-light text-black/5">
                {String(testimonial.id).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
