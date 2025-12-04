'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function GradientTestimonials() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background blur orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-7xl md:text-9xl font-black text-white mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-white/80">What people say about working with me</p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-2xl"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-6xl text-white/30 mb-4">"</div>
                <p className="text-lg text-white leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/30 pt-6">
                <div className="text-xl font-bold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-white/70">
                  {testimonial.role}
                </div>
                <div className="text-sm text-white/60">
                  {testimonial.company}
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center font-black text-white text-xl">
                {testimonial.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
