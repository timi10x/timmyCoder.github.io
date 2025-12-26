'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl">
        <div className="text-center">
          {/* Main title - clean and bold */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tighter mb-8"
          >
            <span className="text-gray-900 hover:text-gray-700 transition-colors duration-500">
              timi10x
            </span>
          </motion.h1>
          
          {/* Subtitle with subtle animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 md:mb-16 px-4 sm:px-0"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mb-3">
              Software engineer with over a decade of experience in building and scaling technologies
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm md:text-base">
              <motion.span 
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                2M+ users
              </motion.span>
              <span className="text-gray-300">•</span>
              <motion.span 
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                10M+ downloads
              </motion.span>
              <span className="text-gray-300">•</span>
              <motion.span 
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                100% performance boost
              </motion.span>
            </div>
          </motion.div>

          {/* CTA - minimal and elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={scrollToWork}
              className="group relative"
            >
              <span className="text-lg text-gray-900 font-medium border-b-2 border-gray-900 pb-2 hover:border-gray-600 transition-colors">
                View Work
              </span>
            </button>
            
            <span className="text-gray-300">or</span>
            
            <a
              href="mailto:olatoyedan@gmail.com"
              className="group relative"
            >
              <span className="text-lg text-gray-600 font-medium border-b-2 border-transparent pb-2 hover:border-gray-400 hover:text-gray-900 transition-all">
                Get in Touch
              </span>
            </a>
          </motion.div>

          {/* Floating accent elements */}
          <motion.div
            className="absolute top-1/3 left-10 text-xs text-gray-300 font-mono hidden md:block"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            FINTECH
          </motion.div>

          <motion.div
            className="absolute top-1/2 right-10 text-xs text-gray-300 font-mono hidden md:block"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MOBILE
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-20 text-xs text-gray-300 font-mono hidden md:block"
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            INNOVATION
          </motion.div>
        </div>

        {/* Minimal scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}