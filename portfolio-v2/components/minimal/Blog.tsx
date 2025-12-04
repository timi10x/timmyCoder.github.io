'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  {
    title: 'Building Scalable Android Apps with Clean Architecture',
    date: '2024',
    link: 'https://medium.com/@olatoyedaniel',
  },
  {
    title: 'Jetpack Compose: The Future of Android UI',
    date: '2024',
    link: 'https://medium.com/@olatoyedaniel',
  },
  {
    title: 'Testing Strategies for Mobile Apps',
    date: '2023',
    link: 'https://medium.com/@olatoyedaniel',
  },
]

export default function Blog() {
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
    <section id="blog" className="relative py-32 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-normal text-neutral-900 leading-[1.2] mb-20"
        >
          Writing
        </h2>

        {/* Articles list - Clean, minimal */}
        <div className="space-y-8">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block pb-8 border-b border-neutral-200 last:border-0 hover:border-neutral-300 transition-colors"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Left: Year */}
                <div className="lg:col-span-2">
                  <div className="text-sm text-neutral-500">{post.date}</div>
                </div>

                {/* Right: Title */}
                <div className="lg:col-span-10">
                  <h3 className="text-2xl font-normal text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16">
          <a
            href="https://medium.com/@olatoyedaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View all articles →
          </a>
        </div>
      </div>
    </section>
  )
}
