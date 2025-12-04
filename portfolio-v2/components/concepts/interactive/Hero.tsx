'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import MagneticButton from '@/components/shared/MagneticButton'

export default function InteractiveHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Spawn particles randomly
      if (Math.random() > 0.95) {
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
        }
        setParticles(prev => [...prev.slice(-20), newParticle])
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-primaryivory via-white to-primaryivory">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#243DE8 1px, transparent 1px), linear-gradient(90deg, #243DE8 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: [`0px 0px`, `50px 50px`],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Mouse Follower Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-primaryblue rounded-full pointer-events-none"
          initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 1 }}
          animate={{
            y: particle.y - 100,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            setParticles(prev => prev.filter(p => p.id !== particle.id))
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Floating Badge */}
        <motion.div
          className="inline-block mb-6"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="bg-primaryblue text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            🚀 Interactive Portfolio Experience
          </div>
        </motion.div>

        {/* Glitch Effect Title */}
        <motion.h1
          className="text-7xl md:text-9xl font-black text-primaryblue mb-8 leading-none relative"
          whileHover={{
            scale: 1.05,
            textShadow: '3px 3px 0px #F7F3EC, 6px 6px 0px #243DE8',
          }}
        >
          timi10x
        </motion.h1>

        {/* Tagline with Gradient */}
        <motion.p
          className="text-2xl md:text-4xl font-bold mb-12 leading-snug"
          style={{
            background: 'linear-gradient(90deg, #243DE8 0%, #4f5fef 50%, #243DE8 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Building the Future of Fintech,
          <br />
          One Tap at a Time
        </motion.p>

        {/* Interactive Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            { value: '5+', label: 'Years', icon: '⏰' },
            { value: '100K+', label: 'Users', icon: '👥' },
            { value: '$50M+', label: 'Processed', icon: '💰' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-primaryblue rounded-[10px] p-6 relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-primaryblue opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
              />
              <div className="relative z-10 group-hover:text-white transition-colors">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Magnetic CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MagneticButton
            href="#work"
            className="px-12 py-5 bg-primaryblue text-white font-black text-lg rounded-[4px] hover:shadow-2xl transition-shadow"
          >
            Explore My Work ✨
          </MagneticButton>

          <MagneticButton
            href="#terminal"
            className="px-12 py-5 bg-white text-primaryblue font-black text-lg rounded-[4px] border-2 border-primaryblue hover:shadow-2xl transition-shadow"
          >
            Try Terminal 💻
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="text-primaryblue text-sm font-bold mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-primaryblue rounded-full mx-auto flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-primaryblue rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
