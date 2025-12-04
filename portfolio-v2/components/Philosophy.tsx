'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const philosophies = [
  {
    title: "Not here to play games; here to win championships.",
    description: "Excellence isn't optional when building financial products. Every line of code, every interaction matters when people trust you with their money.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Head in the sky vision, feet on the ground execution.",
    description: "Dream big about what fintech can become, but ship features that work today. Balance innovation with reliability.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Insist on your distinctiveness.",
    description: "Don't copy what others are doing. Find what makes your approach unique and double down on it. Authentic products win.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Certainty lacks opportunity.",
    description: "The best opportunities exist where others see risk. Be willing to build in uncertain spaces with conviction.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Beauty is core to enduring businesses.",
    description: "Craft matters. Quality matters. Users feel the difference between something built with care and something just functional.",
    image: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Keep the main thing the main thing.",
    description: "Stay focused on what matters. Don't get distracted by shiny new technologies. Solve real problems deeply.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop"
  }
]

export default function Philosophy() {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<number | null>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (selectedPhilosophy !== null && modalRef.current) {
      // Modal open animation
      gsap.fromTo(
        modalRef.current,
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        { clipPath: 'circle(100% at 50% 50%)', opacity: 1, duration: 0.6, ease: 'expo.out' }
      )
    }
  }, [selectedPhilosophy])

  const closeModal = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        clipPath: 'circle(0% at 50% 50%)',
        opacity: 0,
        duration: 0.4,
        ease: 'expo.in',
        onComplete: () => setSelectedPhilosophy(null)
      })
    }
  }

  return (
    <section id="philosophy" className="relative py-32 px-6 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto">
        <h2
          ref={headingRef}
          className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium text-neutral-900 leading-[1.2] mb-20"
        >
          Philosophy
        </h2>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhilosophy(index)}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${philosophy.image}')` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Title */}
              <div className="absolute inset-0 p-8 flex items-end">
                <h3 className="text-xl md:text-2xl font-medium text-white leading-tight">
                  {philosophy.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhilosophy !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/80"
          />

          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative bg-white rounded-sm max-w-3xl w-full max-h-[80vh] overflow-y-auto p-12"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-2xl text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              ×
            </button>

            <h3 className="text-3xl md:text-4xl font-medium text-neutral-900 mb-6 leading-tight pr-8">
              {philosophies[selectedPhilosophy].title}
            </h3>

            <p className="text-lg text-neutral-700 leading-relaxed">
              {philosophies[selectedPhilosophy].description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
