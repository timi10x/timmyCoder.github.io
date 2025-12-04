'use client'

import { motion } from 'framer-motion'

export default function SwissHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-primaryivory relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8"
          >
            <h1 className="text-[10rem] md:text-[15rem] font-black leading-none text-black uppercase tracking-tighter">
              TIMI10X
            </h1>
          </motion.div>

          {/* Right Column Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 md:col-span-4 flex flex-col justify-end pb-4"
          >
            <div className="space-y-6">
              <div className="h-2 w-full bg-primaryblue" />
              <div className="text-sm uppercase tracking-wider">
                Mobile Engineer<br />
                Fintech Specialist
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-12 grid grid-cols-3 gap-4 mt-16"
          >
            <div className="bg-black p-8">
              <div className="text-6xl font-black text-white mb-2">5+</div>
              <div className="text-sm uppercase text-white/60">Years</div>
            </div>
            <div className="bg-primaryblue p-8">
              <div className="text-6xl font-black text-white mb-2">100K+</div>
              <div className="text-sm uppercase text-white/60">Users</div>
            </div>
            <div className="bg-black p-8">
              <div className="text-6xl font-black text-white mb-2">$50M+</div>
              <div className="text-sm uppercase text-white/60">Processed</div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-12 md:col-span-6 mt-8"
          >
            <p className="text-xl leading-relaxed text-black">
              Building robust, scalable mobile applications for the financial technology sector.
              Focused on security, performance, and exceptional user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
