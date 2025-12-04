'use client'

import { motion } from 'framer-motion'

export default function OrganicHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 bg-[#F6F5F1] relative overflow-hidden">
      {/* Background cloud graphics - exact HealthAxon style */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#50958D] rounded-full blur-[100px] opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-[#50958D] rounded-full blur-[100px] opacity-15"
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Small label */}
          <div className="text-xs md:text-sm tracking-[0.15em] uppercase text-[#030001] opacity-50 mb-12 font-normal">
            Mobile Engineer • Fintech Specialist
          </div>

          {/* Main heading - exact HealthAxon sizing and spacing */}
          <h1 className="text-[56px] md:text-[120px] lg:text-[144px] font-normal leading-[0.95] text-[#030001] mb-12 tracking-[-0.02em]">
            timi10x
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-[#030001] opacity-60 max-w-[600px] mx-auto leading-[1.6] font-normal mb-16">
            Crafting exceptional mobile experiences for ambitious financial platforms. Building with purpose, delivering with precision.
          </p>
        </motion.div>

        {/* Stats cards - exact HealthAxon card style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto mt-20"
        >
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '100K+', label: 'Active Users' },
            { value: '$50M+', label: 'Transactions Processed' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[24px] p-8 md:p-10 text-center cursor-default transition-transform duration-300"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
            >
              <div className="text-[48px] md:text-[56px] font-normal text-[#030001] leading-[1] mb-4">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-[0.1em] text-[#030001] opacity-60 font-normal">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-[10px] tracking-[0.15em] uppercase text-[#030001] opacity-30 font-normal">Scroll</div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#030001]/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
