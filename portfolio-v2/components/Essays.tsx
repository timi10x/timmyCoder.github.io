'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const essays = [
  {
    title: "Building Financial Trust Through Mobile",
    date: "January 9, 2025",
    link: "https://medium.com/@timmy10x"
  },
  {
    title: "The Future of Fintech in Africa",
    date: "August 18, 2024",
    link: "https://medium.com/@timmy10x"
  },
  {
    title: "Why Clean Architecture Matters in Fintech",
    date: "August 18, 2024",
    link: "https://medium.com/@timmy10x"
  },
  {
    title: "Mobile-First Financial Products",
    date: "July 5, 2024",
    link: "https://medium.com/@timmy10x"
  }
]

export default function Essays() {
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
    <section id="writing" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium text-neutral-900 leading-[1.2] mb-20"
        >
          Essays
        </h2>

        {/* Essays List */}
        <div className="space-y-12">
          {essays.map((essay, index) => (
            <a
              key={index}
              href={essay.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block pb-12 border-b border-neutral-200 last:border-0"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <div className="text-sm text-neutral-500">{essay.date}</div>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {essay.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
