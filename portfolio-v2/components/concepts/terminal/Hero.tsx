'use client'

import { useState, useEffect } from 'react'

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Building financial products that people trust with their money...'

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-primaryivory">
      <div className="max-w-5xl w-full">
        {/* Terminal Window */}
        <div className="bg-white border-2 border-primaryblue rounded-[10px] overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="bg-primaryblue text-white px-6 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <div className="w-3 h-3 rounded-full bg-white/30" />
            </div>
            <div className="ml-4 text-sm font-mono">timi10x@portfolio ~ % _</div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 md:p-12 font-mono">
            <div className="mb-8">
              <p className="text-primaryblue/60 mb-2">$ whoami</p>
              <h1 className="text-5xl md:text-7xl font-black text-primaryblue mb-4">
                timi10x
              </h1>
              <p className="text-xl text-primaryblue/80">
                &gt; Mobile Engineer | Fintech Specialist
              </p>
            </div>

            <div className="mb-8">
              <p className="text-primaryblue/60 mb-2">$ cat mission.txt</p>
              <p className="text-lg text-primaryblue/90 leading-relaxed">
                {displayedText}
                {showCursor && <span className="inline-block w-2 h-5 bg-primaryblue ml-1" />}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-primaryblue/60 mb-4">$ ls -la ~/skills</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Kotlin', 'SwiftUI', 'Flutter', 'React Native', 'MVVM', 'Offline-First'].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primaryivory border border-primaryblue text-primaryblue rounded-[4px] font-mono text-sm"
                  >
                    📁 {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-primaryblue/60 mb-4">$ ./run_commands.sh</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#work"
                  className="px-8 py-4 bg-primaryblue text-white font-bold rounded-[4px] hover:bg-primaryblue/90 transition-colors font-mono"
                >
                  $ view_projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-primaryivory border-2 border-primaryblue text-primaryblue font-bold rounded-[4px] hover:bg-primaryblue/10 transition-colors font-mono"
                >
                  $ contact_me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar Below Terminal */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white border-2 border-primaryblue rounded-[4px] p-4 text-center font-mono">
            <div className="text-3xl font-black text-primaryblue">5+</div>
            <div className="text-xs text-primaryblue/60">YEARS_EXP</div>
          </div>
          <div className="bg-white border-2 border-primaryblue rounded-[4px] p-4 text-center font-mono">
            <div className="text-3xl font-black text-primaryblue">100K+</div>
            <div className="text-xs text-primaryblue/60">USERS</div>
          </div>
          <div className="bg-white border-2 border-primaryblue rounded-[4px] p-4 text-center font-mono">
            <div className="text-3xl font-black text-primaryblue">$50M+</div>
            <div className="text-xs text-primaryblue/60">PROCESSED</div>
          </div>
        </div>
      </div>
    </section>
  )
}
