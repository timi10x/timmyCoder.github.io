'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

export default function BlueprintContact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#162891] via-primaryblue to-[#2d4ef5]">

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 border-white p-6 inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">
              Contact Details
            </h2>
            <div className="text-sm font-mono text-white/60 mt-2">
              SECTION D: CONNECTION POINTS
            </div>
          </div>
        </motion.div>

        {/* Main Contact Schematic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-2 border-white p-12 mb-8 relative"
        >
          {/* Corner Marks */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white" />

          <div className="text-center mb-8">
            <h3 className="text-4xl font-black text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-white/80 text-lg">
              Open for full-time roles, consulting projects, and technical partnerships
            </p>
          </div>

          {/* Connection Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="border border-white p-6 hover:bg-white/10 transition-colors relative group"
            >
              <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs font-mono text-white">
                NODE-01
              </div>
              <div className="text-3xl mb-2">📧</div>
              <div className="text-sm font-mono text-white/60 mb-1">PRIMARY CONTACT</div>
              <div className="text-white font-mono text-sm group-hover:underline">
                {contact.email}
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-6 hover:bg-white/10 transition-colors relative group"
            >
              <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs font-mono text-white">
                NODE-02
              </div>
              <div className="text-3xl mb-2">💼</div>
              <div className="text-sm font-mono text-white/60 mb-1">PROFESSIONAL NETWORK</div>
              <div className="text-white font-mono text-sm group-hover:underline">
                linkedin.com/in/timi10x →
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-6 hover:bg-white/10 transition-colors relative group"
            >
              <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs font-mono text-white">
                NODE-03
              </div>
              <div className="text-3xl mb-2">💻</div>
              <div className="text-sm font-mono text-white/60 mb-1">CODE REPOSITORY</div>
              <div className="text-white font-mono text-sm group-hover:underline">
                github.com/timmyCoder →
              </div>
            </a>

            {/* Twitter */}
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white p-6 hover:bg-white/10 transition-colors relative group"
            >
              <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs font-mono text-white">
                NODE-04
              </div>
              <div className="text-3xl mb-2">🐦</div>
              <div className="text-sm font-mono text-white/60 mb-1">TECH INSIGHTS</div>
              <div className="text-white font-mono text-sm group-hover:underline">
                @timi10x →
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block border-2 border-white px-12 py-4 text-white font-black text-lg uppercase tracking-wider hover:bg-white hover:text-primaryblue transition-colors"
            >
              Initiate Contact
            </a>
          </div>
        </motion.div>

        {/* Footer Documentation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border border-white/30 p-6 text-xs font-mono text-white/60"
        >
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>© 2025 TIMI10X | ALL RIGHTS RESERVED</div>
            <div>DOCUMENT ID: PORTFOLIO-2025-V2</div>
            <div>STATUS: PRODUCTION READY</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
