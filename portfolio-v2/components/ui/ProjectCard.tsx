'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
  isHovered: boolean
  onClick: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function ProjectCard({ 
  project, 
  index, 
  isHovered, 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div 
        className={`border-t ${index === 0 ? 'border-t-2' : ''} border-gray-200 py-8 md:py-12 cursor-pointer transition-all duration-300 ${
          isHovered ? 'px-4 md:px-8' : ''
        }`}
        onClick={onClick}
      >
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left side - Project info */}
            <div className="flex-1">
              <div className="flex items-start gap-4">
                {/* Number indicator */}
                <motion.span 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100"
                  animate={{ 
                    color: isHovered ? '#000' : '#f3f4f6' 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  0{index + 1}
                </motion.span>
                
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-1 md:mb-2">{project.role}</p>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl">
                    {project.description}
                  </p>
                  
                  {/* Impact & Tags - Mobile only, aligned with text */}
                  <div className="mt-4 md:hidden">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      {project.impact}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className={`px-2 py-0.5 text-[10px] font-medium transition-all duration-300 ${
                            isHovered
                              ? 'bg-black text-white' 
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Impact & Tags - Desktop only */}
            <div className="hidden md:flex flex-col items-end">
              <motion.div
                animate={{ 
                  x: isHovered ? -10 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {project.impact}
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 text-xs font-medium transition-all duration-300 ${
                        isHovered
                          ? 'bg-black text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hover indicator - Aligned with content */}
          <div className="flex items-start gap-4 mt-3">
            {/* Spacer to match number width */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold invisible">
              0{index + 1}
            </div>
            
            {/* Hover text aligned with project name */}
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-gray-600">View Case Study</span>
              <span className="text-gray-900">→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
