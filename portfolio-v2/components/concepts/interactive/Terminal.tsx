'use client'

import { motion } from 'framer-motion'
import TerminalEmulator from '@/components/shared/TerminalEmulator'

interface TerminalSectionProps {
  onCommandCount?: (count: number) => void
}

export default function TerminalSection({ onCommandCount }: TerminalSectionProps) {
  return (
    <section id="terminal" className="py-20 px-6 bg-primaryivory">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black text-primaryblue mb-4">
            Try the Terminal
          </h2>
          <p className="text-xl text-primaryblue/70">
            Explore my portfolio the hacker way. Type <code className="bg-primaryblue text-white px-2 py-1 rounded">help</code> to start.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <TerminalEmulator onCommandCount={onCommandCount} />
        </motion.div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-white border-2 border-primaryblue rounded-[10px] px-6 py-3">
            <span className="text-primaryblue/60 text-sm">
              💡 <strong>Pro Tip:</strong> Use ↑ ↓ arrow keys to navigate command history
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
