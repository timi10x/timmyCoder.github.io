'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function MonochromeContact() {
  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-px bg-primaryblue" />
            <span className="text-sm tracking-[0.4em] uppercase text-white/40">Get in Touch</span>
            <div className="w-16 h-px bg-primaryblue" />
          </div>
          <h2 className="text-7xl md:text-9xl font-light text-white mb-8">
            Let's Create<br />Together
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
            Open for full-time roles, consulting projects, and technical partnerships
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Email - Featured */}
          <a
            href={`mailto:${contact.email}`}
            className="block border border-white/10 p-12 mb-6 hover:border-primaryblue transition-colors group"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-3">
                  Primary Contact
                </div>
                <div className="text-3xl font-light text-white group-hover:text-primaryblue transition-colors">
                  {contact.email}
                </div>
              </div>
              <div className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </div>
          </a>

          {/* Other Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-8 hover:border-primaryblue transition-colors group"
            >
              <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                LinkedIn
              </div>
              <div className="text-lg font-light text-white group-hover:text-primaryblue transition-colors">
                timi10x
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-8 hover:border-primaryblue transition-colors group"
            >
              <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                GitHub
              </div>
              <div className="text-lg font-light text-white group-hover:text-primaryblue transition-colors">
                timmyCoder
              </div>
            </a>

            {/* Twitter */}
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 p-8 hover:border-primaryblue transition-colors group"
            >
              <div className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">
                Twitter
              </div>
              <div className="text-lg font-light text-white group-hover:text-primaryblue transition-colors">
                @timi10x
              </div>
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-block border-2 border-primaryblue text-primaryblue px-16 py-6 text-lg font-light tracking-wider hover:bg-primaryblue hover:text-white transition-all duration-300"
          >
            Start a Conversation
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-white/10 text-center"
        >
          <div className="text-sm text-white/40 font-light">
            © 2025 Timi10x — Mobile Engineer & Fintech Specialist
          </div>
        </motion.div>
      </div>
    </section>
  )
}
