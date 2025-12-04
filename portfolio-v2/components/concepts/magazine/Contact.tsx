'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function MagazineContact() {
  return (
    <section id="contact" className="py-32 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Big CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm tracking-[0.3em] uppercase text-primaryblue mb-8">
              Let's Connect
            </div>
            <h2 className="text-6xl md:text-7xl font-light text-black mb-8 leading-tight">
              Ready to<br />
              <span className="font-black">Collaborate?</span>
            </h2>
            <p className="text-xl font-light text-gray-700 leading-relaxed mb-12">
              Open for full-time roles, consulting projects, and technical partnerships.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block bg-primaryblue text-white px-12 py-5 text-lg font-medium hover:bg-black transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="border-b border-black/10 pb-8">
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">
                Email
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-2xl font-light text-black hover:text-primaryblue transition-colors"
              >
                {contact.email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="border-b border-black/10 pb-8">
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">
                LinkedIn
              </div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-light text-black hover:text-primaryblue transition-colors"
              >
                linkedin.com/in/timi10x
              </a>
            </div>

            {/* GitHub */}
            <div className="border-b border-black/10 pb-8">
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">
                GitHub
              </div>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-light text-black hover:text-primaryblue transition-colors"
              >
                github.com/timmyCoder
              </a>
            </div>

            {/* Twitter */}
            <div className="pb-8">
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">
                Twitter
              </div>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-light text-black hover:text-primaryblue transition-colors"
              >
                @timi10x
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <div>© 2025 Timi10x. All rights reserved.</div>
          <div className="flex gap-8">
            <span>Mobile Engineer</span>
            <span>Fintech Specialist</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
