'use client'

import { motion } from 'framer-motion'

export default function SubwayHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white relative">
      {/* Map Legend Header */}
      <div className="absolute top-8 left-8 bg-primaryblue text-white px-6 py-3 rounded-[4px]">
        <div className="font-black text-sm uppercase tracking-wider">Portfolio Transit Map</div>
        <div className="text-xs opacity-80 mt-1">Career Journey 2020-2025</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block border-4 border-primaryblue rounded-full p-12 bg-primaryivory relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primaryblue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              You Are Here
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-primaryblue mb-4">
              timi10x
            </h1>
            <div className="text-2xl font-bold text-primaryblue/80 uppercase tracking-wide">
              Mobile Engineer
            </div>
          </div>
        </motion.div>

        {/* Transit Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Line 1: Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primaryblue rounded-full flex items-center justify-center text-white font-black">
                1
              </div>
              <div className="font-black text-primaryblue uppercase text-sm tracking-wider">
                Experience Line
              </div>
            </div>

            <div className="relative pl-4 border-l-4 border-primaryblue space-y-6">
              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-white border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">2020</div>
                <div className="text-xs text-primaryblue/60">Crop2Cash</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-white border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">2021</div>
                <div className="text-xs text-primaryblue/60">Chaka</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">2023</div>
                <div className="text-xs text-primaryblue/60">Expanse</div>
              </div>
            </div>
          </motion.div>

          {/* Line 2: Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primaryblue rounded-full flex items-center justify-center text-white font-black">
                2
              </div>
              <div className="font-black text-primaryblue uppercase text-sm tracking-wider">
                Impact Line
              </div>
            </div>

            <div className="relative pl-4 border-l-4 border-primaryblue space-y-6">
              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-2xl font-black text-primaryblue">100K+</div>
                <div className="text-xs text-primaryblue/60">Users Served</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-2xl font-black text-primaryblue">$50M+</div>
                <div className="text-xs text-primaryblue/60">Processed</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-2xl font-black text-primaryblue">20K+</div>
                <div className="text-xs text-primaryblue/60">Loans Enabled</div>
              </div>
            </div>
          </motion.div>

          {/* Line 3: Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primaryblue rounded-full flex items-center justify-center text-white font-black">
                3
              </div>
              <div className="font-black text-primaryblue uppercase text-sm tracking-wider">
                Skills Line
              </div>
            </div>

            <div className="relative pl-4 border-l-4 border-primaryblue space-y-6">
              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">Kotlin</div>
                <div className="text-xs text-primaryblue/60">Android Native</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">SwiftUI</div>
                <div className="text-xs text-primaryblue/60">iOS Native</div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 w-4 h-4 bg-primaryblue border-4 border-primaryblue rounded-full" />
                <div className="text-sm font-bold text-primaryblue">Flutter</div>
                <div className="text-xs text-primaryblue/60">Cross-Platform</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-primaryivory border-2 border-primaryblue rounded-[10px] p-6"
        >
          <div className="text-xs font-bold text-primaryblue mb-3 uppercase tracking-wider">
            Map Legend
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primaryblue rounded-full border-2 border-primaryblue" />
              <span className="text-primaryblue/80">Active Station</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full border-2 border-primaryblue" />
              <span className="text-primaryblue/80">Past Station</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-primaryblue" />
              <span className="text-primaryblue/80">Transit Line</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primaryblue rounded-full text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-primaryblue/80">Line Number</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
