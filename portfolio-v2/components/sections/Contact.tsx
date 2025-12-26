'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/data/skills'
import { infoPlaceHolder } from '@/data/skills'

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready to build something amazing together
        </motion.p>

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Primary CTA - Email */}
          <div className="mb-8 sm:mb-12">
            <a 
              href={`mailto:${contactInfo.email}`}
              className="inline-block group"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {infoPlaceHolder.emailTemplate}
                </span>
                <motion.span 
                  className="text-2xl sm:text-3xl md:text-4xl inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  ↗
                </motion.span>
              </div>
            </a>
          </div>

          {/* Secondary Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {contactInfo.linkedin && (
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">LinkedIn →</span>
              </motion.a>
            )}
            
            {contactInfo.github && (
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">GitHub →</span>
              </motion.a>
            )}
            
            {contactInfo.twitter && (
              <motion.a
                href={contactInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">Twitter →</span>
              </motion.a>
            )}
            
            {contactInfo.medium && (
              <motion.a
                href={contactInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-medium">Medium →</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}