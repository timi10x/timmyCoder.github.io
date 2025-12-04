'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgLayerRef = useRef<HTMLDivElement>(null)
  const midLayerRef = useRef<HTMLDivElement>(null)
  const fgLayerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3-layer parallax - exact Parable VC implementation
      if (bgLayerRef.current && midLayerRef.current && fgLayerRef.current && heroRef.current) {
        // Background layer - slowest (0.3x speed)
        gsap.to(bgLayerRef.current, {
          y: () => window.innerHeight * 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        // Middle layer - medium speed (0.5x)
        gsap.to(midLayerRef.current, {
          y: () => window.innerHeight * 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        // Foreground layer - fastest (0.7x)
        gsap.to(fgLayerRef.current, {
          y: () => window.innerHeight * 0.7,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Content fade out on scroll
      if (contentRef.current && heroRef.current) {
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -50,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '30% top',
            scrub: true,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* 3-Layer Parallax Background - Parable VC exact structure */}

      {/* Background Layer (slowest) */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
        }}
      />

      {/* Middle Layer */}
      <div
        ref={midLayerRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          background: 'linear-gradient(180deg, rgba(36,72,191,0.2) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Foreground Layer (fastest) */}
      <div
        ref={fgLayerRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Hero Content - centered text */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight max-w-5xl">
          To exceptional products shaping fintech.
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/90 mb-8 leading-tight">
          Mobile engineering creates the future.
        </h2>
        <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">
          Since the beginning of mobile computing, humanity has progressed based on exceptional apps.
          Apps become experiences. They inspire, motivate, and make us imagine, create and invent.
          Apps move us, and begin movements.
        </p>
      </div>
    </section>
  )
}
