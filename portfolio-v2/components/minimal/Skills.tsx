'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { category: 'Mobile', items: ['Kotlin', 'Jetpack Compose', 'SwiftUI', 'Android Jetpack'] },
  { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Dependency Injection', 'Reactive Programming'] },
  { category: 'Backend', items: ['Ktor', 'Firebase', 'REST APIs', 'WebSocket'] },
  { category: 'Tools', items: ['Git', 'CI/CD', 'Docker', 'Gradle'] },
]

export default function Skills() {
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
    <section id="skills" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          Skills
        </h2>

        {/* Skills Grid - Clean, minimal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xs text-neutral-400 font-normal uppercase tracking-wider mb-6">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-base text-neutral-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
