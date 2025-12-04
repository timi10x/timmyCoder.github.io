'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "Hi, I'm Daniel"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
          Mobile Engineer
        </p>

        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building magical mobile experiences that transform how millions interact with fintech
        </p>

        <div className="flex gap-6 justify-center items-center">
          <a
            href="#museum"
            className="px-8 py-4 bg-primary hover:bg-purple-600 transition-all rounded-full text-white font-semibold shadow-lg shadow-primary/50 hover:shadow-primary/80"
          >
            Explore Museum
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary hover:bg-primary/10 transition-all rounded-full text-white font-semibold"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
