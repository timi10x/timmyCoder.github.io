'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  primary: string
  secondary: string
  accent: string
}

export default function ThemedHero({ primary, secondary, accent }: HeroProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, ${primary}, ${accent}, ${primary})`
      }}
    >
      {/* Blueprint Title Block */}
      <div
        className="absolute top-8 right-8 border-2 p-6 backdrop-blur-sm"
        style={{
          borderColor: secondary,
          backgroundColor: `${primary}80`
        }}
      >
        <div className="font-mono text-xs space-y-1" style={{ color: secondary }}>
          <div>PROJECT: PORTFOLIO</div>
          <div>SHEET: 01 OF 01</div>
          <div>SCALE: 5 YEARS</div>
          <div>DATE: 2025</div>
          <div>DRAWN BY: TIMI10X</div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" style={{ color: secondary }}>
        {/* Main Title - Blueprint Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="border-2 p-12 mb-8 relative"
          style={{ borderColor: secondary }}
        >
          {/* Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4" style={{ borderColor: secondary }} />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4" style={{ borderColor: secondary }} />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4" style={{ borderColor: secondary }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4" style={{ borderColor: secondary }} />

          <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none mb-4">
            timi10x
          </h1>
          <div className="text-2xl md:text-3xl font-light tracking-wider uppercase">
            Mobile Engineer • Fintech Specialist
          </div>
        </motion.div>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'A', value: '5+', desc: 'Years Experience', items: ['2020-2021: Crop2Cash', '2021-2023: Chaka', '2023-Present: Expanse'] },
            { label: 'B', value: '100K+', desc: 'Active Users', items: ['Trading Platform', 'Payment Systems', 'Lending Solutions'] },
            { label: 'C', value: '$50M+', desc: 'Processed', items: ['Secure Transactions', 'Real-time Processing', '99.9% Uptime'] },
          ].map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="border p-6 relative"
              style={{ borderColor: secondary }}
            >
              <div
                className="absolute -top-3 left-4 px-2 text-xs uppercase tracking-wider"
                style={{ backgroundColor: primary }}
              >
                Dimension {spec.label}
              </div>
              <div className="text-5xl font-black mb-2">{spec.value}</div>
              <div className="text-sm uppercase tracking-wider opacity-80">{spec.desc}</div>
              <div className="mt-4 text-xs font-mono opacity-60">
                {spec.items.map((item, i) => (
                  <div key={i}>
                    {i === 0 ? '├─ ' : i === spec.items.length - 1 ? '└─ ' : '├─ '}{item}<br/>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scale Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm font-mono"
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-0.5" style={{ backgroundColor: secondary }} />
            <span>1:1</span>
          </div>
          <div>SCALE: ACTUAL SIZE</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border" style={{ borderColor: secondary }} />
            <span>VIEW PORT</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
