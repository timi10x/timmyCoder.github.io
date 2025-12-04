'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
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
    <section id="about" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium text-neutral-900 leading-[1.2] mb-20"
        >
          About
        </h2>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="aspect-square bg-neutral-200 rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Daniel Olatoye"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-3xl font-medium text-neutral-900 mb-2">
                Daniel Olatoye
              </h3>
              <p className="text-lg text-neutral-600 mb-8">
                Mobile Engineer
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-6">
                Daniel is a mobile engineer with deep expertise in fintech. He has built products
                serving over 100,000 users across stock trading, payments, and lending platforms.
              </p>
              <p className="text-base text-neutral-700 leading-relaxed">
                Prior to going independent, he led mobile development at Chaka, building their
                stock trading platform from the ground up. He focuses on creating financial apps
                that people trust with their money.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://twitter.com/timmyCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                X.com →
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-olatoye/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="https://github.com/timmyCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
