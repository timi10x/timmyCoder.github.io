'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function OrganicTestimonials() {
  return (
    <section className="py-32 px-6 bg-[#f6f5f1] relative overflow-hidden">
      {/* Background organic shapes */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#E6E2F8] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-[#E6E2F8] rounded-full blur-3xl opacity-25" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-[#030001]/40 mb-4 font-light">
            Testimonials
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[#030001]">
            Kind Words
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/80 transition-all duration-300"
            >
              {/* Quote */}
              <div className="mb-8">
                <div className="text-7xl font-serif text-[#E6E2F8] leading-none mb-4">"</div>
                <p className="text-xl text-[#030001]/80 leading-relaxed font-light">
                  {testimonial.text}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-[#030001]/10 pt-6">
                <div className="text-lg font-light text-[#030001] mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[#030001]/50 font-light">
                  {testimonial.role}
                </div>
                <div className="text-sm text-[#030001]/40 font-light mt-1">
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
