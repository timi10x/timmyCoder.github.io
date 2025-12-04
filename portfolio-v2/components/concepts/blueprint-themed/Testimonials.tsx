'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

interface TestimonialsProps {
  primary: string
  secondary: string
  accent: string
}

export default function ThemedTestimonials({ primary, secondary, accent }: TestimonialsProps) {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${accent}, ${primary}, ${accent})`
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 p-6 inline-block" style={{ borderColor: secondary }}>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight" style={{ color: secondary }}>
              References
            </h2>
            <div className="text-sm font-mono mt-2" style={{ color: `${secondary}99` }}>
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
              className="border p-6 relative backdrop-blur-sm"
              style={{ borderColor: secondary, backgroundColor: `${primary}80` }}
            >
              {/* Reference Number */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center font-mono font-bold border"
                style={{ backgroundColor: secondary, color: primary, borderColor: primary }}
              >
                {testimonial.id}
              </div>

              {/* Quote Content */}
              <div className="mb-6">
                <div className="text-6xl font-serif leading-none mb-2" style={{ color: `${secondary}33` }}>"</div>
                <p className="leading-relaxed pl-4 border-l-2" style={{ color: `${secondary}E6`, borderColor: `${secondary}4D` }}>
                  {testimonial.text}
                </p>
              </div>

              {/* Author Block */}
              <div className="border-t pt-4 font-mono text-sm" style={{ borderColor: `${secondary}4D` }}>
                <div className="font-bold" style={{ color: secondary }}>{testimonial.name}</div>
                <div style={{ color: `${secondary}B3` }}>{testimonial.role}</div>
                <div className="text-xs mt-1" style={{ color: `${secondary}80` }}>{testimonial.company}</div>
              </div>

              {/* Verification Mark */}
              <div className="absolute bottom-4 right-4">
                <div className="w-8 h-8 border flex items-center justify-center text-sm" style={{ borderColor: `${secondary}80`, color: secondary }}>
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
