'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import MenuBar from '@/components/macos/MenuBar'
import Dock from '@/components/macos/Dock'
import Window from '@/components/macos/Window'
import ProjectsWindow from '@/components/macos/windows/ProjectsWindow'
import ExperienceWindow from '@/components/macos/windows/ExperienceWindow'
import BlogWindow from '@/components/macos/windows/BlogWindow'
import LoadingScreen from '@/components/ui/LoadingScreen'

// Dynamically import 3D MacBook scene
const MacBookScene = dynamic(() => import('@/components/3d/MacBookScene'), {
  ssr: false,
  loading: () => <LoadingScreen />,
})

export default function MacOSPortfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [openProgress, setOpenProgress] = useState(0)
  const [showDesktop, setShowDesktop] = useState(false)
  const [openWindows, setOpenWindows] = useState<string[]>([])

  // Handle scroll to open MacBook
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 500 // Pixels to fully open
      const progress = Math.min(scrollY / maxScroll, 1)
      setScrollProgress(progress)
      setOpenProgress(progress)

      // Show desktop when almost fully open
      if (progress > 0.7) {
        setShowDesktop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAppClick = (appId: string) => {
    if (!openWindows.includes(appId)) {
      setOpenWindows([...openWindows, appId])
    }
  }

  const closeWindow = (appId: string) => {
    setOpenWindows(openWindows.filter((id) => id !== appId))
  }

  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Initial 3D MacBook Scene */}
      {scrollProgress < 0.9 && (
        <div className="fixed inset-0 z-10">
          <MacBookScene openProgress={openProgress} />

          {/* Scroll instruction */}
          {scrollProgress < 0.1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white animate-bounce">
              <p className="mb-2">Scroll to open</p>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* macOS Desktop Interface */}
      {showDesktop && (
        <div
          className="fixed inset-0 z-20"
          style={{
            opacity: Math.max(0, (scrollProgress - 0.7) / 0.3),
          }}
        >
          {/* Wallpaper */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Menu Bar */}
          <MenuBar />

          {/* Desktop content */}
          <div className="h-[calc(100vh-theme(spacing.7))] relative">
            {/* Welcome message when no windows open */}
            {openWindows.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-6xl font-bold mb-4">Welcome to Daniel OS</h1>
                  <p className="text-2xl mb-8 text-white/80">
                    Interactive macOS-style Portfolio
                  </p>
                  <p className="text-lg text-white/60">
                    Click on the apps in the dock below to explore
                  </p>
                </div>
              </div>
            )}

            {/* Windows */}
            {openWindows.includes('projects') && (
              <Window
                title="Projects"
                onClose={() => closeWindow('projects')}
                defaultPosition={{ x: 100, y: 80 }}
                width="w-[900px]"
                height="h-[700px]"
              >
                <ProjectsWindow />
              </Window>
            )}

            {openWindows.includes('experience') && (
              <Window
                title="Work Experience"
                onClose={() => closeWindow('experience')}
                defaultPosition={{ x: 150, y: 100 }}
                width="w-[800px]"
                height="h-[650px]"
              >
                <ExperienceWindow />
              </Window>
            )}

            {openWindows.includes('blog') && (
              <Window
                title="Safari - Blog"
                onClose={() => closeWindow('blog')}
                defaultPosition={{ x: 200, y: 120 }}
                width="w-[900px]"
                height="h-[700px]"
              >
                <BlogWindow />
              </Window>
            )}

            {openWindows.includes('skills') && (
              <Window
                title="Skills & Expertise"
                onClose={() => closeWindow('skills')}
                defaultPosition={{ x: 120, y: 90 }}
                width="w-[700px]"
                height="h-[600px]"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-3">Mobile Development</h3>
                      <div className="space-y-2">
                        {['Kotlin', 'Jetpack Compose', 'SwiftUI', 'Android Jetpack'].map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-32">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-3">Architecture & Tools</h3>
                      <div className="space-y-2">
                        {['MVVM', 'Dagger/Hilt', 'Room Database', 'Retrofit'].map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            <span className="text-sm text-gray-600 w-32">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Window>
            )}

            {openWindows.includes('contact') && (
              <Window
                title="Mail - Contact"
                onClose={() => closeWindow('contact')}
                defaultPosition={{ x: 180, y: 110 }}
                width="w-[600px]"
                height="h-[500px]"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:olatoyedan@gmail.com"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-sm text-gray-600">olatoyedan@gmail.com</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/timmyCoder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      <span className="text-2xl">🔗</span>
                      <div>
                        <p className="font-semibold text-gray-800">GitHub</p>
                        <p className="text-sm text-gray-600">@timmyCoder</p>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/daniel-olatoye/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      <span className="text-2xl">💼</span>
                      <div>
                        <p className="font-semibold text-gray-800">LinkedIn</p>
                        <p className="text-sm text-gray-600">Daniel Olatoye</p>
                      </div>
                    </a>
                    <a
                      href="https://twitter.com/timmyCoder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                    >
                      <span className="text-2xl">🐦</span>
                      <div>
                        <p className="font-semibold text-gray-800">Twitter</p>
                        <p className="text-sm text-gray-600">@timmyCoder</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Window>
            )}
          </div>

          {/* Dock */}
          <Dock onAppClick={handleAppClick} />
        </div>
      )}
    </div>
  )
}
