'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with Parable VC's exact settings
    lenisRef.current = new Lenis({
      duration: 0.8, // Faster, more responsive
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // Parable's easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Less aggressive
      smoothTouch: false, // Disable on touch for native feel
      touchMultiplier: 2,
      infinite: false,
    })

    // RAF loop - optimized
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Connect Lenis to GSAP ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenisRef.current?.destroy()
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000)
      })
    }
  }, [])

  return <>{children}</>
}
