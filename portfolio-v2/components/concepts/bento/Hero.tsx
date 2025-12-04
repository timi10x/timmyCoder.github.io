'use client'

import { useState, useEffect } from 'react'

export default function BentoHero() {
  const roles = ['Mobile Engineer', 'Fintech Builder', 'Problem Solver', 'User Advocate']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Bento Card */}
        <div className="bg-white border-2 border-primaryblue rounded-[10px] p-12 mb-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #243DE8 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-sm font-bold text-primaryblue/60 mb-4 tracking-wider uppercase">
              Portfolio 2025
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-primaryblue mb-6 leading-none">
              timi10x
            </h1>

            {/* Animated Role Switcher */}
            <div className="h-16 mb-8">
              <p className="text-3xl md:text-4xl font-bold text-primaryblue/80 transition-all duration-500">
                {roles[currentRole]}
              </p>
            </div>

            <p className="text-xl md:text-2xl text-primaryblue/70 max-w-3xl mb-8 leading-relaxed">
              Building financial products that people trust with their money.
              Turning complex financial systems into delightful mobile experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-primaryblue text-white font-bold rounded-[4px] hover:scale-105 transition-transform duration-150"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-primaryivory text-primaryblue font-bold border-2 border-primaryblue rounded-[4px] hover:scale-105 transition-transform duration-150"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Stats Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primaryblue text-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200">
            <div className="text-6xl font-black mb-2">5+</div>
            <div className="text-lg opacity-90">Years Building Fintech</div>
          </div>
          <div className="bg-white border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200">
            <div className="text-6xl font-black text-primaryblue mb-2">100K+</div>
            <div className="text-lg text-primaryblue/70">Active Users Served</div>
          </div>
          <div className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-8 hover:scale-105 transition-transform duration-200">
            <div className="text-6xl font-black text-primaryblue mb-2">$50M+</div>
            <div className="text-lg text-primaryblue/70">Transactions Processed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
