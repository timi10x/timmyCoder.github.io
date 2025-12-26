'use client'

import { motion } from 'framer-motion'

interface AllPhonesShowcaseProps {
  images: string[]
  title?: string
}

export default function AllPhonesShowcase({ images, title }: AllPhonesShowcaseProps) {
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
      
      {/* Professional All-Phones Showcase */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-6 md:p-10 overflow-hidden">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                 backgroundSize: '30px 30px'
               }}
          />
        </div>

        {/* Gradient Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

        {/* Main Content */}
        <div className="relative">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h3 className="text-white text-2xl font-bold mb-2">App Showcase</h3>
            <p className="text-white/60 text-sm uppercase tracking-wider">
              Full Experience • {images.length} Screens
            </p>
          </div>

          {/* All Phones Grid/Row */}
          <div className="relative">
            {/* Desktop: Show all in a row */}
            <div className="hidden md:flex justify-center items-start gap-4 lg:gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 30,
                    scale: 0.9
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10
                  }}
                  transition={{ 
                    delay: index * 0.08,
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="relative group"
                >
                  {/* iPhone Frame */}
                  <div className="relative" style={{ width: '180px' }}>
                    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.2rem] p-1.5 
                                    shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      {/* Inner Bezel */}
                      <div className="bg-black rounded-[2rem] p-0.5 relative">
                        {/* Notch */}
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-3.5 
                                        bg-black rounded-b-lg z-10"></div>
                        
                        {/* Screen - Fixed Height for Uniformity */}
                        <div className="relative bg-white rounded-[1.8rem] overflow-hidden" 
                             style={{ height: '380px' }}>
                          <img
                            src={image}
                            alt={`Screen ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                          
                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      
                      {/* Side Buttons */}
                      <div className="absolute -right-0.5 top-14 w-0.5 h-5 bg-gray-700 rounded-r"></div>
                      <div className="absolute -right-0.5 top-20 w-0.5 h-7 bg-gray-700 rounded-r"></div>
                      <div className="absolute -left-0.5 top-16 w-0.5 h-8 bg-gray-700 rounded-l"></div>
                    </div>
                    
                    {/* Label */}
                    <motion.div 
                      className="text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white/80 text-xs font-medium">
                        {index + 1}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile: Horizontal Scroll */}
            <div className="md:hidden">
              <div className="overflow-x-auto pb-4 -mx-6 px-6">
                <div className="flex gap-3 min-w-max">
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ 
                        opacity: 0, 
                        x: 50
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0
                      }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3
                      }}
                      className="relative flex-shrink-0"
                    >
                      {/* iPhone Frame - Mobile Size */}
                      <div className="relative" style={{ width: '160px' }}>
                        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2rem] p-1.5 shadow-xl">
                          <div className="bg-black rounded-[1.8rem] p-0.5 relative">
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-14 h-3 
                                            bg-black rounded-b-lg z-10"></div>
                            <div className="relative bg-white rounded-[1.6rem] overflow-hidden" 
                                 style={{ height: '340px' }}>
                              <img
                                src={image}
                                alt={`Screen ${index + 1}`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                          <div className="absolute -right-0.5 top-12 w-0.5 h-4 bg-gray-700 rounded-r"></div>
                          <div className="absolute -left-0.5 top-14 w-0.5 h-6 bg-gray-700 rounded-l"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Scroll Indicator */}
              <p className="text-center text-white/40 text-xs mt-2">
                ← Swipe to explore →
              </p>
            </div>
          </div>

          {/* Bottom Caption */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <p className="text-white/80 text-sm font-medium">
                Live on App Store & Google Play
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
