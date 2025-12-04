'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className={`text-xl font-medium transition-colors ${
            scrolled ? 'text-neutral-900' : 'text-white'
          }`}
        >
          timi10x
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Portfolio', 'Experience', 'Philosophy', 'Writing', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-normal transition-colors hover:opacity-70 ${
                scrolled ? 'text-neutral-700' : 'text-white/90'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-2xl ${scrolled ? 'text-neutral-900' : 'text-white'}`}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
