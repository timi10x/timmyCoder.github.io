'use client'

import { motion } from 'framer-motion'

interface AppShowcaseProps {
  images: string[]
  title?: string
}

export default function AppShowcase({ images, title }: AppShowcaseProps) {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="mb-8">
      {/* Professional Multi-Phone Showcase - All Images */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 md:p-12 overflow-hidden">
        {/* All Phones Display - Horizontal Scroll */}
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 md:gap-6 min-w-max px-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 50
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    type: 'spring'
                  }}
                  className="relative flex-shrink-0"
                >
                  {/* iPhone Frame - Consistent Size */}
                  <div className="relative" style={{ width: '200px' }}>
                    <div className="relative bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow">
                      <div className="bg-black rounded-[2.2rem] p-0.5">
                        {/* Mini Notch */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-10"></div>
                        
                        {/* Screen with Fixed Height */}
                        <div className="relative bg-white rounded-[2rem] overflow-hidden" style={{ height: '420px' }}>
                          <img
                            src={image}
                            alt={`App screenshot ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                      
                      {/* Mini Side Buttons */}
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
      </div>
    </div>
  )
}