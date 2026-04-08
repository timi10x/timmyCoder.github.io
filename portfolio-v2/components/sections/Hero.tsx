'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 relative"
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

          {/* Subtitle — specific and memorable */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 md:mb-16 px-4 sm:px-0"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mb-3">
              I build software that scales to millions.
            </p>
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
              <motion.span
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                10M+ users
              </motion.span>
              <span className="text-gray-300">&bull;</span>
              <motion.span
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                90% faster builds
              </motion.span>
              <span className="text-gray-300">&bull;</span>
              <motion.span
                className="text-gray-900 font-medium"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                95% test coverage
              </motion.span>
            </div>
          </motion.div>

          {/* CTA - minimal and elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.button
              onClick={scrollToWork}
              className="group relative"
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg text-gray-900 font-medium border-b-2 border-gray-900 pb-2 hover:border-gray-600 transition-colors inline-flex items-center gap-2">
                View Work
                <motion.span
                  className="inline-block opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  &rarr;
                </motion.span>
              </span>
            </motion.button>

            <span className="text-gray-300 hidden sm:inline">or</span>

            <motion.a
              href="mailto:olatoyedan@gmail.com"
              className="group relative"
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg text-gray-600 font-medium border-b-2 border-transparent pb-2 hover:border-gray-400 hover:text-gray-900 transition-all">
                Get in Touch
              </span>
            </motion.a>
          </motion.div>

          {/* Floating accent elements — atmospheric texture */}
          <motion.div
            className="absolute top-1/3 left-10 text-xs text-gray-300 font-mono hidden md:block"
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.6, 0.4]
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
              opacity: [0.4, 0.6, 0.4]
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
              opacity: [0.4, 0.6, 0.4]
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
      </div>
    </motion.section>
  )
}
