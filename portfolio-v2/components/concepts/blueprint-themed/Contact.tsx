'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'

interface ContactProps {
  primary: string
  secondary: string
  accent: string
}

export default function ThemedContact({ primary, secondary, accent }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${accent}, ${primary}, ${accent})`
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="border-2 p-6 inline-block" style={{ borderColor: secondary }}>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight" style={{ color: secondary }}>
              Contact Details
            </h2>
            <div className="text-sm font-mono mt-2" style={{ color: `${secondary}99` }}>
              SECTION D: CONNECTION POINTS
            </div>
          </div>
        </motion.div>

        {/* Main Contact Schematic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border-2 p-12 mb-8 relative"
          style={{ borderColor: secondary }}
        >
          {/* Corner Marks */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: secondary }} />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: secondary }} />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: secondary }} />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: secondary }} />

          <div className="text-center mb-8">
            <h3 className="text-4xl font-black mb-4" style={{ color: secondary }}>
              Ready to Collaborate?
            </h3>
            <p className="text-lg" style={{ color: `${secondary}CC` }}>
              Open for full-time roles, consulting projects, and technical partnerships
            </p>
          </div>

          {/* Connection Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="border p-6 hover:opacity-80 transition-opacity relative group"
              style={{ borderColor: secondary }}
            >
              <div
                className="absolute -top-3 left-4 px-2 text-xs font-mono"
                style={{ backgroundColor: primary, color: secondary }}
              >
                NODE-01
              </div>
              <div className="text-3xl mb-2">📧</div>
              <div className="text-sm font-mono mb-1" style={{ color: `${secondary}99` }}>PRIMARY CONTACT</div>
              <div className="font-mono text-sm group-hover:underline" style={{ color: secondary }}>
                {contact.email}
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-6 hover:opacity-80 transition-opacity relative group"
              style={{ borderColor: secondary }}
            >
              <div
                className="absolute -top-3 left-4 px-2 text-xs font-mono"
                style={{ backgroundColor: primary, color: secondary }}
              >
                NODE-02
              </div>
              <div className="text-3xl mb-2">💼</div>
              <div className="text-sm font-mono mb-1" style={{ color: `${secondary}99` }}>PROFESSIONAL NETWORK</div>
              <div className="font-mono text-sm group-hover:underline" style={{ color: secondary }}>
                linkedin.com/in/timi-o →
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-6 hover:opacity-80 transition-opacity relative group"
              style={{ borderColor: secondary }}
            >
              <div
                className="absolute -top-3 left-4 px-2 text-xs font-mono"
                style={{ backgroundColor: primary, color: secondary }}
              >
                NODE-03
              </div>
              <div className="text-3xl mb-2">💻</div>
              <div className="text-sm font-mono mb-1" style={{ color: `${secondary}99` }}>CODE REPOSITORY</div>
              <div className="font-mono text-sm group-hover:underline" style={{ color: secondary }}>
                github.com/timi10x →
              </div>
            </a>

            {/* Twitter */}
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-6 hover:opacity-80 transition-opacity relative group"
              style={{ borderColor: secondary }}
            >
              <div
                className="absolute -top-3 left-4 px-2 text-xs font-mono"
                style={{ backgroundColor: primary, color: secondary }}
              >
                NODE-04
              </div>
              <div className="text-3xl mb-2">🐦</div>
              <div className="text-sm font-mono mb-1" style={{ color: `${secondary}99` }}>TECH INSIGHTS</div>
              <div className="font-mono text-sm group-hover:underline" style={{ color: secondary }}>
                @timi10x →
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block border-2 px-12 py-4 font-black text-lg uppercase tracking-wider hover:opacity-80 transition-opacity"
              style={{ borderColor: secondary, color: secondary }}
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
          className="border p-6 text-xs font-mono"
          style={{ borderColor: `${secondary}4D`, color: `${secondary}99` }}
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
