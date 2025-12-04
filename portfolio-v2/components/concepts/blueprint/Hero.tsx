'use client'

import { motion } from 'framer-motion'

export default function BlueprintHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-primaryblue via-[#1a2eb5] to-[#162891]">

      {/* Blueprint Title Block */}
      <div className="absolute top-8 right-8 border-2 border-white p-6 bg-primaryblue/50 backdrop-blur-sm">
        <div className="text-white font-mono text-xs space-y-1">
          <div>PROJECT: PORTFOLIO</div>
          <div>SHEET: 01 OF 01</div>
          <div>SCALE: 5 YEARS</div>
          <div>DATE: 2025</div>
          <div>DRAWN BY: TIMI10X</div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* Main Title - Blueprint Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="border-2 border-white p-12 mb-8 relative"
        >
          {/* Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white" />

          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none mb-4">
            timi10x
          </h1>
          <div className="text-2xl md:text-3xl font-light tracking-wider uppercase">
            Mobile Engineer • Fintech Specialist
          </div>
        </motion.div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-white p-6 relative"
          >
            <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs uppercase tracking-wider">
              Dimension A
            </div>
            <div className="text-5xl font-black mb-2">5+</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Years Experience</div>
            <div className="mt-4 text-xs font-mono opacity-60">
              ├─ 2020-2021: Crop2Cash<br/>
              ├─ 2021-2023: Chaka<br/>
              └─ 2023-Present: Expanse
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-white p-6 relative"
          >
            <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs uppercase tracking-wider">
              Dimension B
            </div>
            <div className="text-5xl font-black mb-2">100K+</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Active Users</div>
            <div className="mt-4 text-xs font-mono opacity-60">
              ├─ Trading Platform<br/>
              ├─ Payment Systems<br/>
              └─ Lending Solutions
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="border border-white p-6 relative"
          >
            <div className="absolute -top-3 left-4 bg-primaryblue px-2 text-xs uppercase tracking-wider">
              Dimension C
            </div>
            <div className="text-5xl font-black mb-2">$50M+</div>
            <div className="text-sm uppercase tracking-wider opacity-80">Processed</div>
            <div className="mt-4 text-xs font-mono opacity-60">
              ├─ Secure Transactions<br/>
              ├─ Real-time Processing<br/>
              └─ 99.9% Uptime
            </div>
          </motion.div>
        </div>

        {/* Scale Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm font-mono"
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5 bg-white" />
            <span>1:1</span>
          </div>
          <div>SCALE: ACTUAL SIZE</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border border-white" />
            <span>VIEW PORT</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
