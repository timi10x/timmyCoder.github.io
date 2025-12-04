'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    company: 'Chaka',
    role: 'Android Engineer',
    period: '2022 — Present',
    description: 'Building a stock trading platform that democratizes access to global markets. Leading mobile architecture decisions and implementing real-time trading features.',
  },
  {
    company: 'Expanse Technology',
    role: 'Mobile Engineer',
    period: '2020 — 2022',
    description: 'Developed payment solutions serving thousands of merchants. Built offline-first architecture and implemented end-to-end encryption for sensitive transactions.',
  },
  {
    company: 'Crop2Cash',
    role: 'Android Developer',
    period: '2019 — 2020',
    description: 'Created agricultural lending platform connecting farmers with capital. Designed intuitive onboarding flows for users with varying technical literacy.',
  },
]

export default function Experience() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <section id="experience" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          Experience
        </h2>

        {/* Experience list - Parable VC minimal style */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.company} className="grid lg:grid-cols-12 gap-8 pb-16 border-b border-neutral-200 last:border-0">
              {/* Left: Period */}
              <div className="lg:col-span-3">
                <div className="text-sm text-neutral-500 font-normal">{exp.period}</div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-9">
                <h3 className="text-3xl font-normal text-neutral-900 mb-2">{exp.company}</h3>
                <div className="text-lg text-neutral-600 mb-4">{exp.role}</div>
                <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
