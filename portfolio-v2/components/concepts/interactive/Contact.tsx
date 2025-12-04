'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'
import MagneticButton from '@/components/shared/MagneticButton'

interface ContactProps {
  onSocialClick?: () => void
}

export default function InteractiveContact({ onSocialClick }: ContactProps) {
  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: contact.linkedin },
    { icon: '💻', name: 'GitHub', url: contact.github },
    { icon: '🐦', name: 'Twitter', url: contact.twitter },
    { icon: '📝', name: 'Medium', url: contact.medium },
    { icon: '📧', name: 'Email', url: `mailto:${contact.email}` },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-primaryblue mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-2xl text-primaryblue/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm always excited to collaborate on innovative fintech projects or
          discuss new opportunities.
        </motion.p>

        {/* Floating Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onSocialClick}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative w-20 h-20 bg-primaryivory border-2 border-primaryblue rounded-full flex items-center justify-center text-4xl cursor-pointer"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: '#243DE8',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}

                {/* Tooltip */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-primaryblue text-white px-3 py-1 rounded text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  {link.name}
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-primaryblue text-white rounded-[10px] p-12 relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-4">Ready to Build Something Great?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Whether you're looking for a mobile engineer, technical consultant, or want to
              collaborate on an exciting project – I'd love to hear from you.
            </p>

            <MagneticButton
              href={`mailto:${contact.email}`}
              className="inline-block px-12 py-5 bg-white text-primaryblue font-black text-lg rounded-[4px] hover:shadow-2xl transition-shadow"
            >
              Start a Conversation →
            </MagneticButton>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-primaryblue/60 text-sm"
        >
          <p>© 2025 timi10x • Built with Next.js, TypeScript, Framer Motion & Love</p>
          <p className="mt-2">
            This portfolio is <motion.span
              className="font-bold text-primaryblue cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              open source
            </motion.span> on GitHub
          </p>
        </motion.div>
      </div>
    </section>
  )
}
