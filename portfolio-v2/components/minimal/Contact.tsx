'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  { label: 'Email', value: 'olatoyedan@gmail.com', link: 'mailto:olatoyedan@gmail.com' },
  { label: 'LinkedIn', value: 'timi10x', link: 'https://www.linkedin.com/in/daniel-olatoye/' },
  { label: 'GitHub', value: '@timmyCoder', link: 'https://github.com/timmyCoder' },
  { label: 'Twitter', value: '@timmyCoder', link: 'https://twitter.com/timmyCoder' },
  { label: 'Medium', value: '@olatoyedaniel', link: 'https://medium.com/@olatoyedaniel' },
]

export default function Contact() {
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
    <section id="contact" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          Get in touch
        </h2>

        {/* Contact links - Clean list */}
        <div className="space-y-8 max-w-2xl">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.link}
              target={contact.label === 'Email' ? undefined : '_blank'}
              rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="group block pb-8 border-b border-neutral-200 last:border-0 hover:border-neutral-300 transition-colors"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-sm text-neutral-500 mb-2">{contact.label}</div>
                  <div className="text-xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {contact.value}
                  </div>
                </div>
                <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors">→</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} timi10x</p>
        </div>
      </div>
    </section>
  )
}
