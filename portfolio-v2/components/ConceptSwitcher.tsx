'use client'

import { useState } from 'react'

type ConceptType = 'blueprint'

interface ConceptSwitcherProps {
  currentConcept: ConceptType
  onSwitch: (concept: ConceptType) => void
}

export default function ConceptSwitcher({ currentConcept, onSwitch }: ConceptSwitcherProps) {
  // Only Blueprint concept remains, so hide the switcher
  return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primaryblue text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center text-2xl font-bold"
        aria-label="Switch concept"
      >
        {isOpen ? '✕' : '◐'}
      </button>

      {/* Concept Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white border-2 border-primaryblue rounded-[10px] shadow-2xl p-4 w-64 animate-slideUp">
          <h3 className="text-sm font-bold text-primaryblue mb-3 uppercase tracking-wider">
            Switch Concept
          </h3>
          <div className="space-y-2">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => {
                  onSwitch(concept.id)
                  setIsOpen(false)
                }}
                className={`w-full p-3 rounded-[4px] border-2 transition-all duration-150 text-left relative overflow-hidden ${
                  currentConcept === concept.id
                    ? 'bg-primaryblue text-white border-primaryblue'
                    : 'bg-primaryivory border-primaryblue text-primaryblue hover:bg-primaryblue/10'
                } ${(concept as any).highlight && currentConcept !== concept.id ? 'animate-pulse-slow' : ''}`}
              >
                {(concept as any).highlight && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl font-bold">
                    NEW
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{concept.icon}</span>
                  <div>
                    <div className="font-bold">{concept.name}</div>
                    <div className={`text-xs ${currentConcept === concept.id ? 'text-white/80' : 'text-primaryblue/60'}`}>
                      {concept.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
