'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/data/portfolio'

export default function LiquidTestimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-br from-[#4facfe] via-[#00f2fe] to-[#43e97b] relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 0],
          borderRadius: ['50%', '30%', '50%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
          borderRadius: ['40%', '60%', '40%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-white/60 mb-4">
            Kind Words
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white">
            What People Say
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0.5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-10 shadow-2xl"
            >
              {/* Quote */}
              <div className="text-6xl text-white/20 mb-6">"</div>
              <p className="text-xl text-white/95 leading-relaxed mb-8 font-light">
                {testimonial.text}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full flex items-center justify-center text-2xl shadow-lg"
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <div className="font-bold text-white text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-white/60 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Floating orb decoration */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 w-20 h-20 bg-white/20 rounded-full blur-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
