'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function OrganicContact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#030001] relative overflow-hidden">
      {/* Organic background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-[40rem] h-[40rem] bg-[#E6E2F8] rounded-full blur-3xl"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm tracking-[0.2em] uppercase text-white/40 mb-8 font-light">
            Let's Connect
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-white mb-8 leading-tight">
            Ready to<br />Collaborate?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Open for full-time roles, consulting projects, and technical partnerships
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {/* Email - Featured */}
          <a
            href={`mailto:${contact.email}`}
            className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3 font-light">
                  Primary Contact
                </div>
                <div className="text-3xl font-light text-white group-hover:text-white/80 transition-colors">
                  {contact.email}
                </div>
              </div>
              <div className="text-4xl text-white/20 group-hover:text-white/40 transition-colors">
                →
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-light">
              LinkedIn
            </div>
            <div className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
              timi10x
            </div>
          </a>

          {/* GitHub */}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-light">
              GitHub
            </div>
            <div className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
              timmyCoder
            </div>
          </a>

          {/* Twitter */}
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4 font-light">
              Twitter
            </div>
            <div className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
              @timi10x
            </div>
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-block bg-white text-[#030001] px-12 py-5 rounded-full text-lg font-light hover:bg-white/90 transition-all duration-300"
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center text-white/30 text-sm font-light"
        >
          © 2025 Timi10x • Mobile Engineer • Fintech Specialist
        </motion.div>
      </div>
    </section>
  )
}
