'use client'

import { useState } from 'react'
import { colorThemes, type ColorTheme } from '@/lib/colorThemes'

type ConceptStyle = 'organic' | 'blueprint' | 'liquid'

interface ConceptSwitcherProps {
  currentTheme: ColorTheme
  onThemeSwitch: (theme: ColorTheme) => void
  conceptStyle: ConceptStyle
  onStyleSwitch: (style: ConceptStyle) => void
}

export default function ConceptSwitcher({
  currentTheme,
  onThemeSwitch,
  conceptStyle,
  onStyleSwitch
}: ConceptSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center text-2xl font-bold"
        style={{ backgroundColor: conceptStyle === 'organic' ? '#030001' : currentTheme.primary }}
        aria-label="Switch design"
      >
        {isOpen ? '✕' : '🎨'}
      </button>

      {/* Design Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white border-2 rounded-[10px] shadow-2xl p-4 w-80 max-h-[80vh] overflow-y-auto" style={{ borderColor: conceptStyle === 'organic' ? '#030001' : conceptStyle === 'liquid' ? '#667eea' : currentTheme.primary }}>
          {/* Style Toggle */}
          <div className="mb-4">
            <h3 className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: conceptStyle === 'organic' ? '#030001' : conceptStyle === 'liquid' ? '#667eea' : currentTheme.primary }}>
              Design Style
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onStyleSwitch('organic')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  conceptStyle === 'organic' ? 'shadow-md' : 'hover:shadow-sm'
                }`}
                style={{
                  borderColor: '#030001',
                  backgroundColor: conceptStyle === 'organic' ? '#030001' : '#f6f5f1',
                  color: conceptStyle === 'organic' ? '#f6f5f1' : '#030001',
                }}
              >
                <div className="text-xl mb-1">🌸</div>
                <div className="text-xs font-bold">Organic</div>
                <div className="text-xs opacity-70">Soft</div>
              </button>
              <button
                onClick={() => onStyleSwitch('blueprint')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  conceptStyle === 'blueprint' ? 'shadow-md' : 'hover:shadow-sm'
                }`}
                style={{
                  borderColor: currentTheme.primary,
                  backgroundColor: conceptStyle === 'blueprint' ? currentTheme.primary : currentTheme.secondary,
                  color: conceptStyle === 'blueprint' ? currentTheme.secondary : currentTheme.primary,
                }}
              >
                <div className="text-xl mb-1">📐</div>
                <div className="text-xs font-bold">Blueprint</div>
                <div className="text-xs opacity-70">Tech</div>
              </button>
              <button
                onClick={() => onStyleSwitch('liquid')}
                className={`p-3 rounded-lg border-2 transition-all ${
                  conceptStyle === 'liquid' ? 'shadow-md' : 'hover:shadow-sm'
                }`}
                style={{
                  borderColor: '#667eea',
                  backgroundColor: conceptStyle === 'liquid' ? '#667eea' : '#f5f3ff',
                  color: conceptStyle === 'liquid' ? '#ffffff' : '#667eea',
                }}
              >
                <div className="text-xl mb-1">💧</div>
                <div className="text-xs font-bold">Liquid</div>
                <div className="text-xs opacity-70">Fluid</div>
              </button>
            </div>
          </div>

          {/* Color Themes (only shown for Blueprint style) */}
          {conceptStyle === 'blueprint' && (
            <div>
              <h3 className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: currentTheme.primary }}>
                Color Theme
              </h3>
              <div className="space-y-2">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeSwitch(theme)
                    }}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-150 text-left ${
                      currentTheme.id === theme.id ? 'shadow-md' : 'hover:shadow-sm'
                    }`}
                    style={{
                      borderColor: theme.primary,
                      backgroundColor: currentTheme.id === theme.id ? theme.primary : theme.secondary,
                      color: currentTheme.id === theme.id ? theme.secondary : theme.primary,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{theme.icon}</span>
                      <div>
                        <div className="font-bold text-sm">{theme.name}</div>
                        <div className={`text-xs ${currentTheme.id === theme.id ? 'opacity-80' : 'opacity-60'}`}>
                          {theme.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
