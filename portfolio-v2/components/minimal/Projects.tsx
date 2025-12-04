'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: 'Chaka Mobile',
    description: 'Stock trading platform with real-time market data',
    category: 'Fintech',
  },
  {
    name: 'Expanse POS',
    description: 'Offline-first payment solution for merchants',
    category: 'Payments',
  },
  {
    name: 'Crop2Cash',
    description: 'Agricultural lending platform',
    category: 'Fintech',
  },
  {
    name: 'Personal Projects',
    description: 'Open source contributions and experiments',
    category: 'Open Source',
  },
]

export default function Projects() {
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
    <section id="projects" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          Selected Work
        </h2>

        {/* Projects Grid - Parable VC company grid style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-all duration-300 cursor-pointer"
            >
              {/* Category */}
              <div className="text-xs text-neutral-400 font-normal uppercase tracking-wider mb-6">
                {project.category}
              </div>

              {/* Project name */}
              <h3 className="text-xl font-normal text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
