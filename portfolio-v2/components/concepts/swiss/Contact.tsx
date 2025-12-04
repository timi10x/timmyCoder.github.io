'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function SwissContact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="h-2 w-32 bg-primaryblue mb-8" />
          <h2 className="text-8xl font-black uppercase tracking-tighter text-black">
            CONTACT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl leading-relaxed text-black mb-12">
              Open for full-time roles, consulting projects, and technical partnerships.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block bg-primaryblue text-white px-12 py-6 text-xl font-black uppercase hover:bg-black transition-colors"
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="border-b-2 border-black pb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                01 / EMAIL
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-xl font-bold text-black hover:text-primaryblue transition-colors"
              >
                {contact.email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="border-b-2 border-black pb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                02 / LINKEDIN
              </div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-black hover:text-primaryblue transition-colors"
              >
                TIMI10X
              </a>
            </div>

            {/* GitHub */}
            <div className="border-b-2 border-black pb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                03 / GITHUB
              </div>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-black hover:text-primaryblue transition-colors"
              >
                TIMMYCODER
              </a>
            </div>

            {/* Twitter */}
            <div className="pb-6">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                04 / TWITTER
              </div>
              <a
                href={contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-black hover:text-primaryblue transition-colors"
              >
                @TIMI10X
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t-2 border-black grid grid-cols-2 md:grid-cols-4 gap-8 text-xs uppercase tracking-wider"
        >
          <div>© 2025 TIMI10X</div>
          <div>MOBILE ENGINEER</div>
          <div>FINTECH SPECIALIST</div>
          <div className="text-right">PORTFOLIO V2</div>
        </motion.div>
      </div>
    </section>
  )
}
