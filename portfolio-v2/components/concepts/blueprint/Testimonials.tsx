'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function BlueprintTestimonials() {
  return (
    <section className="py-20 px-6 bg-primaryblue relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 border-white p-6 inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              References
            </h2>
            <div className="text-sm font-mono text-white/60 mt-2">
              SECTION B: PEER REVIEW
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white p-6 relative bg-primaryblue/50 backdrop-blur-sm"
            >
              {/* Reference Number */}
              <div className="absolute -top-3 -left-3 bg-white text-primaryblue w-8 h-8 flex items-center justify-center font-mono font-bold border border-primaryblue">
                {testimonial.id}
              </div>

              {/* Quote Content */}
              <div className="mb-6">
                <div className="text-6xl text-white/20 font-serif leading-none mb-2">"</div>
                <p className="text-white/90 leading-relaxed pl-4 border-l-2 border-white/30">
                  {testimonial.text}
                </p>
              </div>

              {/* Author Block */}
              <div className="border-t border-white/30 pt-4 font-mono text-sm">
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-white/70">{testimonial.role}</div>
                <div className="text-white/50 text-xs mt-1">{testimonial.company}</div>
              </div>

              {/* Verification Mark */}
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 border border-white/50 flex items-center justify-center text-white text-sm">
                  ✓
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
