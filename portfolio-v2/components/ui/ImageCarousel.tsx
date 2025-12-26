'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCarouselProps {
  images: string[]
  title?: string
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="mb-8">
      {title && (
        <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider mb-6">
          {title}
        </h4>
      )}
      
      {/* Professional App Showcase Container */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}
          />
        </div>

        {/* Main Showcase Area */}
        <div className="relative">
          {/* iPhone Device Frame */}
          <div className="relative max-w-sm mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className="relative"
              >
                {/* iPhone Frame */}
                <div className="relative mx-auto" style={{ maxWidth: '320px' }}>
                  {/* Phone Border */}
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    {/* Screen Bezel */}
                    <div className="bg-black rounded-[2.5rem] p-1">
                      {/* Notch */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                      
                      {/* Screen Content */}
                      <div className="relative bg-white rounded-[2.3rem] overflow-hidden">
                        <img
                          src={images[currentIndex]}
                          alt={`App screenshot ${currentIndex + 1}`}
                          className="w-full h-auto object-cover"
                          style={{ aspectRatio: '9/19.5' }}
                        />
                      </div>
                    </div>
                    
                    {/* Side Buttons */}
                    <div className="absolute -right-1 top-24 w-1 h-8 bg-gray-700 rounded-r"></div>
                    <div className="absolute -right-1 top-36 w-1 h-12 bg-gray-700 rounded-r"></div>
                    <div className="absolute -right-1 top-52 w-1 h-12 bg-gray-700 rounded-r"></div>
                    <div className="absolute -left-1 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>
                  </div>
                </div>

                {/* Screen Label */}
                <motion.div 
                  className="text-center mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white/80 text-sm font-medium">
                    Screen {currentIndex + 1} of {images.length}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition-all"
              aria-label="Previous image"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentIndex 
                      ? 'w-8 h-2 bg-white rounded-full' 
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition-all"
              aria-label="Next image"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Optional: Thumbnail Strip at Bottom */}
        <div className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 transition-all ${
                index === currentIndex 
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900 scale-105' 
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div className="w-12 h-20 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}