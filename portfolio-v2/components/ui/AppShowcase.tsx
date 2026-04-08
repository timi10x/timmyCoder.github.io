'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AppShowcaseProps {
  images: string[]
  projectName?: string
}

export default function AppShowcase({ images, projectName = 'App' }: AppShowcaseProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Track scroll position to update active dot
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = 200 + 24 // phone width + gap
      const newIndex = Math.round(scrollLeft / itemWidth)
      setActiveIndex(Math.min(newIndex, images.length - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [images.length])

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const itemWidth = 200 + 24
    container.scrollTo({ left: itemWidth * index, behavior: 'smooth' })
  }

  const scrollBy = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(images.length - 1, activeIndex + 1)
    scrollToIndex(newIndex)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="mb-8">
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 md:p-12 overflow-hidden group">
        {/* Arrow buttons — desktop only, reveal on hover */}
        {images.length > 2 && (
          <>
            <button
              onClick={() => scrollBy('left')}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous screenshot"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollBy('right')}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next screenshot"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Phone carousel with scroll snap */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-6 min-w-max pr-16">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    type: 'spring'
                  }}
                  className="relative flex-shrink-0"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* iPhone Frame */}
                  <div className="relative" style={{ width: '200px' }}>
                    <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow">
                      <div className="bg-black rounded-[2.2rem] p-0.5">
                        {/* Mini Notch */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-10"></div>

                        {/* Screen */}
                        <div className="relative bg-white rounded-[2rem] overflow-hidden" style={{ height: '420px' }}>
                          <img
                            src={image}
                            alt={`${projectName} app — screen ${index + 1} of ${images.length}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>

                      {/* Side Buttons */}
                      <div className="absolute -right-0.5 top-16 w-0.5 h-6 bg-gray-600 rounded-r"></div>
                      <div className="absolute -right-0.5 top-24 w-0.5 h-8 bg-gray-600 rounded-r"></div>
                      <div className="absolute -left-0.5 top-20 w-0.5 h-10 bg-gray-600 rounded-l"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-gray-400' : 'bg-gray-700'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
