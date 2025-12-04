'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const currentInvestments = [
  { name: 'Chaka', stage: 'Series A' },
  { name: 'Expanse', stage: 'Growth' },
  { name: 'Crop2Cash', stage: 'Seed' },
  { name: 'Flutterwave', stage: 'Series D' },
  { name: 'Paystack', stage: 'Acquired' },
  { name: 'Stealth', stage: 'Pre-seed' },
]

const priorWork = [
  { name: 'Kudi', stage: 'Acquired' },
  { name: 'Piggybank', stage: 'Series A' },
  { name: 'Cowrywise', stage: 'Series B' },
]

export default function Portfolio() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const text = headingRef.current.textContent || ''
        const words = text.split(' ')

        headingRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block" style="opacity: 0; filter: blur(1rem);">${word}&nbsp;</span></span>`)
          .join('')

        const wordSpans = headingRef.current.querySelectorAll('span > span')

        gsap.to(wordSpans, {
          opacity: 1,
          filter: 'blur(0rem)',
          duration: 0.6,
          stagger: 0.02,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'center bottom',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading with word stagger animation */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium text-neutral-900 leading-[1.2] mb-20"
        >
          Portfolio
        </h2>

        {/* Current Investments */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-8 font-medium">
            Current
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentInvestments.map((company) => (
              <div
                key={company.name}
                className="group p-8 bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 cursor-pointer"
              >
                <div className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                  {company.name}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">
                  {company.stage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prior Work */}
        <div>
          <h3 className="text-sm uppercase tracking-wider text-neutral-500 mb-8 font-medium">
            Prior Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {priorWork.map((company) => (
              <div
                key={company.name}
                className="group p-8 bg-white border border-neutral-200 hover:border-neutral-400 transition-all duration-300 cursor-pointer"
              >
                <div className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                  {company.name}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">
                  {company.stage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
