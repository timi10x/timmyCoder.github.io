'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/lib/types'
import AppShowcase from './AppShowcase'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<Element | null>(null)

  // Prevent body scroll and manage focus
  useEffect(() => {
    if (project) {
      triggerRef.current = document.activeElement
      document.body.style.overflow = 'hidden'
      // Focus close button after animation
      setTimeout(() => closeButtonRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = 'unset'
      // Return focus to trigger element
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus()
      }
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
  }, [])

  const getProjectLogo = (projectId: string) => {
    const logoMap: { [key: string]: string } = {
      'grey': '/img/greyLogo.svg',
      'footlocker': '/img/FLLogo.png',
      'fidelity': '/img/fidelityLogo.png',
      'bloom': '/img/fidelityBloom.webp',
      'pastel': '/img/PastelLogo.webp',
      'chaka': '/img/chakaLogo.png',
      'crop2cash': '/img/crop2cashLogo.png'
    }
    return logoMap[projectId]
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 backdrop-blur z-50 flex items-center justify-center p-4"
          onClick={onClose}
          onKeyDown={handleKeyDown}
        >
          {/* Close button */}
          <motion.button
            ref={closeButtonRef}
            onClick={onClose}
            className="fixed top-4 right-4 sm:top-6 md:top-8 sm:right-6 md:right-8 text-gray-600 hover:text-gray-900 transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            aria-label="Close project details"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="max-w-3xl w-full relative max-h-[90vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Content */}
            <div className="px-4 sm:px-6 md:px-8 py-8 md:py-0">
              {/* Logo or Emoji */}
              <motion.div
                className="text-6xl sm:text-7xl md:text-8xl mb-6 md:mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
              >
                {getProjectLogo(project.id) ? (
                  <img
                    src={getProjectLogo(project.id)}
                    alt={project.name}
                    className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                  />
                ) : (
                  <span>{project.image}</span>
                )}
              </motion.div>

              {/* Project Header */}
              <h3 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
                {project.name}
              </h3>
              <div className="mb-4 md:mb-6">
                <p className="text-lg sm:text-xl text-gray-600">{project.role}</p>
              </div>

              {/* Project Details */}
              <div className="prose prose-base sm:prose-lg max-w-none mb-8 md:mb-12">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl mb-4">
                  {project.description}
                </p>

                {/* External link */}
                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 underline underline-offset-4 hover:text-gray-900 transition-colors mb-6"
                  >
                    {project.externalUrlLabel || 'View Live'}
                    <span className="text-xs">&#8599;</span>
                  </a>
                )}

                {/* App Screenshots */}
                {project.appImages && project.appImages.length > 0 && (
                  <AppShowcase
                    images={project.appImages}
                    projectName={project.name}
                  />
                )}

                {project.details && (
                  <>
                    {/* Only show Key Responsibilities if no app images */}
                    {(!project.appImages || project.appImages.length === 0) && (
                      <div className="mb-8">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {project.details.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gray-400 mr-3">&bull;</span>
                              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mb-8">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Impact Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 md:py-8 border-t border-b border-gray-200">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1 md:mb-2">Impact</p>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900">{project.impact}</p>
                  {project.impactContext && (
                    <p className="text-sm text-gray-500 mt-1">{project.impactContext}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
