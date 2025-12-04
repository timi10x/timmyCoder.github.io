'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parable VC's exact word-by-word blur reveal
      if (headingRef.current) {
        const text = headingRef.current.textContent || ''
        const words = text.split(' ')

        headingRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block" style="opacity: 0; filter: blur(16px);">${word}&nbsp;</span></span>`)
          .join('')

        const wordSpans = headingRef.current.querySelectorAll('span > span')

        gsap.to(wordSpans, {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.02,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 75%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Large statement text - Parable VC style */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          I build mobile apps that handle money with the care it deserves
        </h2>

        {/* Two-column content - Parable VC layout */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - narrow */}
          <div className="lg:col-span-5">
            <p className="text-base text-neutral-600 leading-relaxed">
              Mobile Engineer with 5+ years building fintech products that users trust daily. I focus on creating seamless experiences where complex financial operations feel simple and secure.
            </p>
          </div>

          {/* Right column - wider */}
          <div className="lg:col-span-7 space-y-16">
            {/* Key metrics / achievements - clean list */}
            <div className="space-y-8">
              <div className="pb-8 border-b border-neutral-200">
                <div className="text-sm text-neutral-500 mb-2">Impact</div>
                <div className="text-2xl font-normal text-neutral-900">100K+ users managing their finances daily</div>
              </div>
              <div className="pb-8 border-b border-neutral-200">
                <div className="text-sm text-neutral-500 mb-2">Specialization</div>
                <div className="text-2xl font-normal text-neutral-900">Kotlin, Jetpack Compose, Clean Architecture</div>
              </div>
              <div className="pb-8 border-b border-neutral-200">
                <div className="text-sm text-neutral-500 mb-2">Current</div>
                <div className="text-2xl font-normal text-neutral-900">Android Engineer at Chaka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
