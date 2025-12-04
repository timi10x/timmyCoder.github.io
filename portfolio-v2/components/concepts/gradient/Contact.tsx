'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function GradientContact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-pink-500 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-7xl md:text-9xl font-black text-white mb-8">
            Let's Talk
          </h2>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto">
            Open for full-time roles, consulting projects, and technical partnerships.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Email */}
          <motion.a
            href={`mailto:${contact.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 group"
          >
            <div className="text-5xl mb-4">📧</div>
            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">Email</div>
            <div className="text-xl text-white font-medium group-hover:text-yellow-300 transition-colors">
              {contact.email}
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 group"
          >
            <div className="text-5xl mb-4">💼</div>
            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">LinkedIn</div>
            <div className="text-xl text-white font-medium group-hover:text-yellow-300 transition-colors">
              timi10x
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 group"
          >
            <div className="text-5xl mb-4">💻</div>
            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">GitHub</div>
            <div className="text-xl text-white font-medium group-hover:text-yellow-300 transition-colors">
              timmyCoder
            </div>
          </motion.a>

          {/* Twitter */}
          <motion.a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 group"
          >
            <div className="text-5xl mb-4">🐦</div>
            <div className="text-sm text-white/60 mb-2 uppercase tracking-wider">Twitter</div>
            <div className="text-xl text-white font-medium group-hover:text-yellow-300 transition-colors">
              @timi10x
            </div>
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-block bg-white text-purple-600 px-12 py-6 rounded-full text-xl font-black hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300 shadow-2xl"
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center text-white/60 text-sm"
        >
          © 2025 Timi10x • Mobile Engineer • Fintech Specialist
        </motion.div>
      </div>
    </section>
  )
}
