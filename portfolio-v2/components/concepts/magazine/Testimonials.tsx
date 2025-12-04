'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function MagazineTestimonials() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-sm tracking-[0.3em] uppercase text-primaryblue mb-4">
            Testimonials
          </div>
          <h2 className="text-6xl md:text-8xl font-light">
            Kind<br />
            <span className="font-black">Words</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border-l-2 border-primaryblue pl-8 py-8"
            >
              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-2xl font-light leading-relaxed text-white/90">
                  "{testimonial.text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <div className="text-lg font-medium text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-white/60">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primaryblue">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
