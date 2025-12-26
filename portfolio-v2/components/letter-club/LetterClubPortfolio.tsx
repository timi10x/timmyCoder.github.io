'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Section {
  id: string
  title: string
  illustration: JSX.Element
  content: string
}

const sections: Section[] = [
  {
    id: 'projects',
    title: 'Mobile Projects & Apps',
    illustration: <MobileAppsIllustration />,
    content: `Building apps that matter for 500K+ users across Africa. From Grey Finance's cross-border payments to Chaka's stock trading platform, each project solves real problems for real people.`
  },
  {
    id: 'journey',
    title: 'Career Journey & Growth',
    illustration: <CareerJourneyIllustration />,
    content: `From bootcamp student to Lead Mobile Engineer at Africa's top fintech companies. A story of continuous learning, mentorship, and building products that democratize financial services.`
  },
  {
    id: 'community',
    title: 'Speaking & Open Source',
    illustration: <CommunityIllustration />,
    content: `Sharing knowledge through conference talks, workshops, and open source contributions. Building the next generation of African tech leaders one line of code at a time.`
  }
]

export default function LetterClubPortfolio() {
  const [to, setTo] = useState('You')
  const [subject, setSubject] = useState("Let's build something amazing.")
  const [activeSection, setActiveSection] = useState<Section | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [messageContent, setMessageContent] = useState('')

  useEffect(() => {
    // Typing animation for the subject line
    const timer = setTimeout(() => {
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 2000)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleSectionClick = (section: Section) => {
    setActiveSection(section)
    setSubject(section.title)
    setMessageContent(section.content)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <header className="pt-8 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#4444FF' }}>
            timi10x
          </h1>
          <p className="text-sm mt-2 text-gray-600">Mobile Engineer</p>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Illustration */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {sections.slice(0, 2).map((section) => (
                <div
                  key={section.id}
                  onClick={() => handleSectionClick(section)}
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  {section.illustration}
                  <p className="text-center mt-2 text-sm" style={{ color: '#4444FF' }}>
                    {section.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Central Email Compose Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-xl border-2"
            style={{ borderColor: '#4444FF' }}
          >
            <div className="p-6 md:p-8">
              {/* Email Header */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium" style={{ color: '#4444FF' }}>
                    To:
                  </label>
                  <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="flex-1 pb-1 border-b-2 outline-none focus:border-opacity-100 transition-colors"
                    style={{ borderColor: '#4444FF', borderOpacity: 0.3 }}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium" style={{ color: '#4444FF' }}>
                    Subject:
                  </label>
                  <div className="flex-1 pb-1 border-b-2" style={{ borderColor: '#4444FF', borderOpacity: 0.3 }}>
                    <span className="text-gray-800">
                      {subject}
                      {isTyping && <span className="animate-pulse">|</span>}
                    </span>
                  </div>
                </div>
              </div>

              {/* TL;DR */}
              <div className="mb-6">
                <h3 className="font-bold mb-2" style={{ color: '#4444FF' }}>
                  TL;DR
                </h3>
                <p className="text-gray-600 italic">
                  Mobile Engineer with 5+ years building fintech apps that impact millions across Africa.
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-4 text-gray-700">
                <p>
                  Hi! I'm Timi, a Lead Mobile Engineer passionate about building products that 
                  democratize financial services in emerging markets.
                </p>
                
                {messageContent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 rounded-lg border-l-4"
                    style={{ borderColor: '#4444FF' }}
                  >
                    <p>{messageContent}</p>
                  </motion.div>
                ) : (
                  <p>
                    I specialize in Kotlin, SwiftUI, and cross-platform development, with a focus 
                    on offline-first architecture and accessibility.
                  </p>
                )}

                <p>
                  Currently leading mobile development at{' '}
                  <span className="font-semibold" style={{ color: '#4444FF' }}>Grey Finance</span>, 
                  where we're revolutionizing cross-border payments for 500K+ users.
                </p>
              </div>

              {/* How it Works */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold mb-3" style={{ color: '#4444FF' }}>
                  How to connect:
                </h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li>1. Click any illustration to learn more about that area</li>
                  <li>2. Compose your message below to get in touch</li>
                  <li>3. Check out my work on{' '}
                    <a href="https://github.com/timi10x" className="underline" style={{ color: '#4444FF' }}>
                      GitHub
                    </a>
                  </li>
                  <li>4. Connect on{' '}
                    <a href="https://linkedin.com/in/timi-o" className="underline" style={{ color: '#4444FF' }}>
                      LinkedIn
                    </a>
                  </li>
                </ol>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 py-3 rounded-lg text-white font-semibold"
                style={{ backgroundColor: '#4444FF' }}
                onClick={() => window.location.href = 'mailto:olatoyedan@gmail.com'}
              >
                Start a conversation. Let's build!
              </motion.button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Or, email me at{' '}
                <a href="mailto:olatoyedan@gmail.com" className="underline">
                  olatoyedan@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div
                onClick={() => handleSectionClick(sections[2])}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                {sections[2].illustration}
                <p className="text-center mt-2 text-sm" style={{ color: '#4444FF' }}>
                  {sections[2].title}
                </p>
              </div>
              
              {/* Additional decorative illustration */}
              <div className="opacity-60">
                <TechStackIllustration />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Illustrations (shown below on small screens) */}
        <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => handleSectionClick(section)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {section.illustration}
              <p className="text-center mt-2 text-xs" style={{ color: '#4444FF' }}>
                {section.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-sm text-gray-500">
        <p>© 2025 Timilehin Olatoye. Built with ❤️ and lots of ☕</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/timi10x" className="hover:text-gray-700">GitHub</a>
          <a href="https://twitter.com/timi10x" className="hover:text-gray-700">Twitter</a>
          <a href="https://medium.com/@timmy10x" className="hover:text-gray-700">Medium</a>
        </div>
      </footer>
    </div>
  )
}

// Hand-drawn illustrations in Letter Club style
function MobileAppsIllustration() {
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone with apps */}
      <rect x="70" y="30" width="60" height="100" stroke="#4444FF" strokeWidth="2" fill="none" rx="8"/>
      <rect x="75" y="40" width="50" height="75" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <circle cx="100" cy="122" r="4" stroke="#4444FF" strokeWidth="1.5"/>
      
      {/* App grid */}
      <rect x="80" y="50" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      <rect x="102" y="50" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      <rect x="80" y="72" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      <rect x="102" y="72" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      <rect x="80" y="94" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      <rect x="102" y="94" width="15" height="15" stroke="#4444FF" strokeWidth="1" rx="3"/>
      
      {/* Floating elements */}
      <path d="M40 60 Q45 55 50 60" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <path d="M150 70 Q155 65 160 70" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <circle cx="45" cy="100" r="3" stroke="#4444FF" strokeWidth="1"/>
      <circle cx="155" cy="95" r="3" stroke="#4444FF" strokeWidth="1"/>
    </svg>
  )
}

function CareerJourneyIllustration() {
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Career path line */}
      <path d="M30 150 Q50 100 80 90 T130 70 T170 30" 
            stroke="#4444FF" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
      
      {/* Milestone points */}
      <circle cx="30" cy="150" r="5" fill="#4444FF"/>
      <circle cx="65" cy="95" r="5" fill="#4444FF"/>
      <circle cx="105" cy="80" r="5" fill="#4444FF"/>
      <circle cx="145" cy="50" r="5" fill="#4444FF"/>
      <circle cx="170" cy="30" r="6" fill="#4444FF"/>
      
      {/* Labels */}
      <text x="25" y="165" fill="#4444FF" fontSize="10">Start</text>
      <text x="160" y="20" fill="#4444FF" fontSize="10">Lead</text>
      
      {/* Decorative stars */}
      <path d="M90 40 L92 44 L96 44 L93 47 L94 51 L90 48 L86 51 L87 47 L84 44 L88 44 Z" 
            fill="none" stroke="#4444FF" strokeWidth="1"/>
    </svg>
  )
}

function CommunityIllustration() {
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* People circles */}
      <circle cx="100" cy="60" r="12" stroke="#4444FF" strokeWidth="2" fill="none"/>
      <circle cx="70" cy="85" r="10" stroke="#4444FF" strokeWidth="1.5" fill="none"/>
      <circle cx="130" cy="85" r="10" stroke="#4444FF" strokeWidth="1.5" fill="none"/>
      <circle cx="55" cy="115" r="8" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <circle cx="100" cy="120" r="8" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <circle cx="145" cy="115" r="8" stroke="#4444FF" strokeWidth="1" fill="none"/>
      
      {/* Connection lines */}
      <path d="M100 72 L70 85" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      <path d="M100 72 L130 85" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      <path d="M70 95 L55 115" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      <path d="M70 95 L100 120" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      <path d="M130 95 L100 120" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      <path d="M130 95 L145 115" stroke="#4444FF" strokeWidth="1" opacity="0.5"/>
      
      {/* Speech bubbles */}
      <ellipse cx="100" cy="40" rx="20" ry="12" stroke="#4444FF" strokeWidth="1" fill="none"/>
      <path d="M100 52 L95 58 L105 52" stroke="#4444FF" strokeWidth="1" fill="none"/>
    </svg>
  )
}

function TechStackIllustration() {
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Code brackets */}
      <text x="40" y="60" fill="#4444FF" fontSize="24" fontFamily="monospace">&lt;/&gt;</text>
      <text x="120" y="80" fill="#4444FF" fontSize="20" fontFamily="monospace">{`{}`}</text>
      <text x="70" y="120" fill="#4444FF" fontSize="18" fontFamily="monospace">[]</text>
      
      {/* Terminal window */}
      <rect x="50" y="130" width="100" height="40" stroke="#4444FF" strokeWidth="1.5" rx="4"/>
      <line x1="50" y1="140" x2="150" y2="140" stroke="#4444FF" strokeWidth="1"/>
      <circle cx="60" cy="135" r="2" fill="#4444FF"/>
      <circle cx="68" cy="135" r="2" fill="#4444FF"/>
      <circle cx="76" cy="135" r="2" fill="#4444FF"/>
      <text x="55" y="155" fill="#4444FF" fontSize="10" fontFamily="monospace">$ npm run dev</text>
    </svg>
  )
}
