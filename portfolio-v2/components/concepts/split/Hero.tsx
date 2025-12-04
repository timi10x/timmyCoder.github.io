'use client'

import { useState, useEffect } from 'react'

export default function SplitHero() {
  const [stats, setStats] = useState({ years: 0, users: 0, amount: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    const targets = { years: 5, users: 100, amount: 50 }
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setStats({
        years: Math.floor(targets.years * progress),
        users: Math.floor(targets.users * progress),
        amount: Math.floor(targets.amount * progress)
      })

      if (step >= steps) {
        setStats(targets)
        setHasAnimated(true)
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [hasAnimated])

  return (
    <section className="min-h-screen">
      <div className="h-screen flex flex-col md:flex-row">
        {/* Left Side - Content */}
        <div className="flex-1 bg-white border-r-2 border-primaryblue flex items-center justify-center p-12">
          <div className="max-w-xl">
            <div className="text-sm font-bold text-primaryblue/60 mb-4 tracking-widest uppercase">
              Mobile Engineer
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-primaryblue mb-8 leading-none">
              timi10x
            </h1>

            <p className="text-2xl text-primaryblue/80 mb-10 leading-relaxed">
              Transforming complex financial systems into delightful mobile experiences that users trust with their money.
            </p>

            <div className="flex gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-primaryblue text-white font-bold rounded-[4px] hover:scale-105 transition-transform"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-primaryivory border-2 border-primaryblue text-primaryblue font-bold rounded-[4px] hover:scale-105 transition-transform"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Animated Stats */}
        <div className="flex-1 bg-primaryivory flex items-center justify-center p-12">
          <div className="space-y-12 w-full max-w-md">
            {/* Stat 1 */}
            <div className="border-l-4 border-primaryblue pl-8">
              <div className="text-7xl font-black text-primaryblue mb-2">
                {stats.years}+
              </div>
              <div className="text-xl text-primaryblue/70">
                Years Building Fintech Products
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border-l-4 border-primaryblue pl-8">
              <div className="text-7xl font-black text-primaryblue mb-2">
                {stats.users}K+
              </div>
              <div className="text-xl text-primaryblue/70">
                Active Users Served
              </div>
            </div>

            {/* Stat 3 */}
            <div className="border-l-4 border-primaryblue pl-8">
              <div className="text-7xl font-black text-primaryblue mb-2">
                ${stats.amount}M+
              </div>
              <div className="text-xl text-primaryblue/70">
                Transactions Processed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
