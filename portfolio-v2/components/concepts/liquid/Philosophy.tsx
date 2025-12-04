'use client'

import { motion } from 'framer-motion'

const values = [
  {
    icon: '🎯',
    title: 'Purpose-Driven',
    description: 'Every line of code serves a clear purpose. No bloat, no shortcuts—just intentional design that solves real problems.',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    description: 'Speed isn\'t a feature—it\'s a requirement. I optimize ruthlessly to ensure every interaction feels instant.',
  },
  {
    icon: '🔒',
    title: 'Security by Design',
    description: 'In fintech, trust is everything. Security considerations are baked into every architectural decision from day one.',
  },
  {
    icon: '🚀',
    title: 'Built to Scale',
    description: 'From 100 users to 100,000—I architect systems that grow gracefully without requiring a rewrite.',
  },
]

export default function LiquidPhilosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-gradient-to-br from-[#fa709a] via-[#fee140] to-[#30cfd0] relative overflow-hidden">
      {/* Morphing blobs */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
          borderRadius: ['60%', '40%', '60%'],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -100, 0],
          y: [0, 50, 0],
          borderRadius: ['40%', '70%', '40%'],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-white/10 blur-3xl"
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
            Core Principles
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            How I Build
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            My approach to building fintech products is rooted in four fundamental principles
            that guide every decision, from architecture to implementation.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[48px] p-12 shadow-2xl relative overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-7xl mb-6 inline-block filter drop-shadow-2xl"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Floating decorative orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Tech stack section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-[48px] p-12 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React Native', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker', 'Redux'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.25)' }}
                className="px-8 py-4 backdrop-blur-xl bg-white/15 border border-white/30 rounded-full text-lg text-white font-medium shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
