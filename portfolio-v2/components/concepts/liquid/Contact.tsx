'use client'

import { motion } from 'framer-motion'

export default function LiquidContact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] relative overflow-hidden">
      {/* Animated liquid blobs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          borderRadius: ['50%', '30%', '50%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] right-[-10%] w-[900px] h-[900px] bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -90, 0],
          x: [0, -50, 0],
          borderRadius: ['40%', '60%', '40%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-15%] left-[-10%] w-[800px] h-[800px] bg-white/10 blur-3xl"
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[64px] p-16 md:p-20 shadow-2xl text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-sm tracking-[0.2em] uppercase text-white/60 mb-6">
              Let's Connect
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Work Together
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-16">
              Have an exciting fintech project in mind? Let's discuss how we can build
              something exceptional together.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="mailto:hello@timi10x.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-12 py-6 backdrop-blur-xl bg-white/20 border-2 border-white/40 rounded-full text-xl font-bold text-white shadow-2xl hover:bg-white/30 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex justify-center gap-6"
          >
            {[
              { label: 'GitHub', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Twitter', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-white font-medium shadow-lg transition-all duration-300"
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"
          />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center text-white/60 text-sm"
        >
          © 2025 timi10x. Crafted with purpose.
        </motion.div>
      </div>
    </section>
  )
}
