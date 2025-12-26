'use client'

import { motion } from 'framer-motion'
import { infoPlaceHolder } from '@/data/skills'

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/timilehin-olatoye/' },
    { name: 'GitHub', url: 'https://github.com/timmyCoder' },
    { name: 'Twitter', url: 'https://twitter.com/timi10x' },
    { name: 'Medium', url: 'https://medium.com/@olatoyedaniel' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        {/* Main CTA Section */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Let's build something amazing
              </span>
            </h2>
            
            {/* Email CTA */}
            <motion.a
              href="mailto:olatoyedan@gmail.com"
              className="inline-flex items-center gap-2 text-lg sm:text-xl text-gray-700 hover:text-gray-900 transition-colors group"
              whileHover={{ y: -2 }}
            >
              <span className="border-b-2 border-transparent group-hover:border-gray-700 transition-all">
                Start a conversation
              </span>
              <motion.span 
                className="inline-block text-blue-600"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </motion.a>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="flex items-center gap-1">
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </span>
              </motion.a>
            ))}
          </div>
          
          {/* Tagline */}
          <p className="text-xs text-gray-400 italic">Always shipping, always learning</p>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-gray-100 w-full">
            <p className="text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} timi10x
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
