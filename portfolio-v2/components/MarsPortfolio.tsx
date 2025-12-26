'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import HUD from '@/components/mars/HUD'
import LoadingScreen from '@/components/ui/LoadingScreen'

const MarsScene = dynamic(() => import('@/components/mars/MarsScene'), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

const locationData: { [key: string]: any } = {
  'Skills Station': {
    title: 'Technical Skills',
    icon: '⚙️',
    color: 'border-blue-500',
    content: [
      { category: 'Mobile Development', skills: ['Kotlin', 'Jetpack Compose', 'SwiftUI', 'Android Jetpack'] },
      { category: 'Backend & Tools', skills: ['Ktor', 'Java', 'Git', 'Firebase'] },
      { category: 'Architecture', skills: ['MVVM', 'Dagger/Hilt', 'Room Database', 'Clean Architecture'] },
      { category: 'Testing', skills: ['JUnit', 'Mockito', 'Espresso', 'Robolectric'] },
    ],
  },
  'Experience Hub': {
    title: 'Work Experience',
    icon: '🏢',
    color: 'border-green-500',
    content: [
      {
        company: 'Chaka Stocks',
        role: 'Senior Mobile Engineer',
        period: '2021 - Present',
        description: 'Building stock trading mobile applications',
      },
      {
        company: 'Crop2Cash',
        role: 'Android Developer',
        period: '2018 - 2020',
        description: 'Agricultural supply chain management apps',
      },
      {
        company: 'Expanse Technology',
        role: 'Mobile Engineer',
        period: '2020 - 2021',
        description: 'Scalable mobile architecture solutions',
      },
    ],
  },
  'Projects Lab': {
    title: 'Featured Projects',
    icon: '🚀',
    color: 'border-red-500',
    content: [
      { name: 'ComposeKitten', tech: 'Jetpack Compose', description: 'Pet adoption app' },
      { name: 'Visis', tech: 'OCR + AI', description: 'Accessibility app for visually impaired' },
      { name: 'Currency Converter', tech: 'Android', description: 'Real-time currency conversion' },
      { name: 'Paddybase', tech: 'Kotlin + Firebase', description: 'Agricultural supply chain' },
    ],
  },
  'Blog Archive': {
    title: 'Blog & Articles',
    icon: '📝',
    color: 'border-yellow-500',
    content: [
      { title: 'Clean Architecture in Android', platform: 'Medium', topic: 'Architecture' },
      { title: 'Jetpack Compose Guide', platform: 'Medium', topic: 'UI Development' },
      { title: 'Testing Mobile Apps', platform: 'Medium', topic: 'Best Practices' },
    ],
  },
  'Contact Bay': {
    title: 'Connect With Me',
    icon: '📡',
    color: 'border-purple-500',
    content: [
      { platform: 'Email', value: 'olatoyedan@gmail.com', icon: '📧' },
      { platform: 'GitHub', value: '@timmyCoder', icon: '🔗' },
      { platform: 'LinkedIn', value: 'Daniel Olatoye', icon: '💼' },
      { platform: 'Twitter', value: '@timmyCoder', icon: '🐦' },
      { platform: 'Medium', value: '@olatoyedaniel', icon: '✍️' },
    ],
  },
}

export default function MarsPortfolio() {
  const [roverPosition, setRoverPosition] = useState<[number, number, number]>([0, 0, 0])
  const [nearestLocation, setNearestLocation] = useState<string | null>(null)
  const [distance, setDistance] = useState<number | null>(null)
  const [showPanel, setShowPanel] = useState(false)

  const handleLocationChange = (location: string | null, dist: number | null) => {
    setNearestLocation(location)
    setDistance(dist)

    // Auto-show panel when very close
    if (location && dist !== null && dist < 8) {
      setShowPanel(true)
    } else if (dist === null || dist >= 12) {
      setShowPanel(false)
    }
  }

  const currentLocationData = nearestLocation ? locationData[nearestLocation] : null

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* 3D Mars Scene */}
      <div className="absolute inset-0">
        <MarsScene
          onLocationChange={handleLocationChange}
          onRoverPositionChange={setRoverPosition}
        />
      </div>

      {/* HUD Overlay */}
      <HUD
        roverPosition={roverPosition}
        nearestLocation={nearestLocation}
        distance={distance}
      />

      {/* Info Panel */}
      {showPanel && currentLocationData && (
        <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-black/90 backdrop-blur-xl border-l-4 ${currentLocationData.color} p-6 overflow-y-auto pointer-events-auto z-40 animate-slide-in">
          {/* Close button */}
          <button
            onClick={() => setShowPanel(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white font-bold"
          >
            ×
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="text-5xl mb-3">{currentLocationData.icon}</div>
            <h2 className="text-3xl font-bold text-white mb-2">{currentLocationData.title}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded"></div>
          </div>

          {/* Content */}
          <div className="space-y-4 text-white">
            {nearestLocation === 'Skills Station' && (
              <div className="space-y-4">
                {currentLocationData.content.map((cat: any) => (
                  <div key={cat.category} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="font-semibold text-blue-400 mb-2">{cat.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {nearestLocation === 'Experience Hub' && (
              <div className="space-y-4">
                {currentLocationData.content.map((exp: any) => (
                  <div key={exp.company} className="bg-white/5 rounded-lg p-4 border border-green-500/30">
                    <h3 className="font-bold text-lg text-green-400">{exp.company}</h3>
                    <p className="text-sm text-gray-400">{exp.role}</p>
                    <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {nearestLocation === 'Projects Lab' && (
              <div className="space-y-3">
                {currentLocationData.content.map((project: any) => (
                  <div key={project.name} className="bg-white/5 rounded-lg p-4 border border-red-500/30">
                    <h3 className="font-bold text-red-400">{project.name}</h3>
                    <p className="text-sm text-gray-400">{project.tech}</p>
                    <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                  </div>
                ))}
              </div>
            )}

            {nearestLocation === 'Blog Archive' && (
              <div className="space-y-3">
                {currentLocationData.content.map((post: any, i: number) => (
                  <div key={i} className="bg-white/5 rounded-lg p-4 border border-yellow-500/30">
                    <h3 className="font-bold text-yellow-400">{post.title}</h3>
                    <p className="text-sm text-gray-400">{post.platform} • {post.topic}</p>
                  </div>
                ))}
                <a
                  href="https://medium.com/@timmy10x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded text-center"
                >
                  Read More on Medium →
                </a>
              </div>
            )}

            {nearestLocation === 'Contact Bay' && (
              <div className="space-y-3">
                {currentLocationData.content.map((contact: any) => (
                  <div key={contact.platform} className="bg-white/5 rounded-lg p-3 border border-purple-500/30 flex items-center gap-3">
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <p className="font-semibold text-purple-400">{contact.platform}</p>
                      <p className="text-sm text-gray-300">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Welcome Overlay - Shows at start */}
      {!nearestLocation && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="text-center text-white space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                MARS
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold">Daniel's Portfolio Exploration</h2>
            <p className="text-xl text-gray-300">Drive the rover to explore my work</p>
            <div className="mt-8 space-y-2 text-gray-400">
              <p>🎮 Use WASD or Arrow Keys to drive</p>
              <p>🖱️ Click and drag to look around</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
