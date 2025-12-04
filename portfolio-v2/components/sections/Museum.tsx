'use client'

import { Suspense, useState } from 'react'
import MuseumScene from '@/components/3d/Museum'
import LoadingScreen from '@/components/ui/LoadingScreen'

const exhibits = [
  {
    company: 'Chaka Stocks',
    appName: 'Stock Trading Platform',
    year: '2021-Present',
    role: 'Senior Mobile Engineer',
    description: 'Built a comprehensive stock trading and investment management platform serving thousands of users in real-time financial transactions.',
    achievements: [
      'Real-time WebSocket integration for live stock prices',
      'Secure biometric authentication and encryption',
      'Offline-first architecture with Room database',
      'Complex charts and data visualization with MPAndroidChart',
      'Push notifications for price alerts',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Retrofit', 'Room', 'WebSocket'],
    color: '#cd201f',
  },
  {
    company: 'Crop2Cash',
    appName: 'Paddybase',
    year: '2018-2020',
    role: 'Android Developer',
    description: 'Developed supply chain management application connecting farmers with extension managers and buyers in the agricultural sector.',
    achievements: [
      'Built offline-first app for rural areas with poor connectivity',
      'Implemented geolocation tracking for farmer visits',
      'Integrated mobile payment systems',
      'Created inventory management system',
      'Firebase real-time database synchronization',
    ],
    tech: ['Java', 'Kotlin', 'Firebase', 'Google Maps API', 'SQLite'],
    color: '#2ebd59',
  },
  {
    company: 'Expanse Technology',
    appName: 'Enterprise Mobile Solutions',
    year: '2020-2021',
    role: 'Mobile Engineer',
    description: 'Developed scalable mobile applications with focus on clean architecture, performance optimization, and maintainability.',
    achievements: [
      'Implemented MVVM architecture pattern',
      'Migrated legacy codebase to Kotlin',
      'Integrated third-party SDKs and APIs',
      'Set up CI/CD pipelines',
      'Performance optimization reducing app size by 40%',
    ],
    tech: ['Kotlin', 'MVVM', 'Dagger 2', 'RxJava', 'Retrofit', 'JUnit'],
    color: '#6356E5',
  },
]

export default function Museum() {
  const [selectedExhibit, setSelectedExhibit] = useState<number | null>(null)

  const handlePhoneClick = (index: number) => {
    setSelectedExhibit(index)
  }

  const closeModal = () => {
    setSelectedExhibit(null)
  }

  return (
    <section id="museum" className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-20 p-8 bg-gradient-to-b from-black/80 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-2">
          Interactive Phone Museum
        </h2>
        <p className="text-center text-gray-400">Click and drag to explore • Click on phones to view details</p>
      </div>

      <div className="h-screen w-full">
        <Suspense fallback={<LoadingScreen />}>
          <MuseumScene onPhoneClick={handlePhoneClick} />
        </Suspense>
      </div>

      {/* Modal Overlay for Exhibit Details */}
      {selectedExhibit !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: exhibits[selectedExhibit].color }}
                  ></div>
                  <span className="text-sm text-gray-400">{exhibits[selectedExhibit].year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {exhibits[selectedExhibit].company}
                </h3>
                <p className="text-xl text-primary">{exhibits[selectedExhibit].role}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors text-4xl leading-none"
              >
                ×
              </button>
            </div>

            {/* App Name */}
            <div className="mb-6">
              <h4 className="text-2xl font-semibold mb-2">{exhibits[selectedExhibit].appName}</h4>
              <p className="text-gray-300 leading-relaxed">{exhibits[selectedExhibit].description}</p>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h5 className="text-xl font-semibold mb-4 text-secondary">Key Achievements</h5>
              <ul className="space-y-3">
                {exhibits[selectedExhibit].achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: exhibits[selectedExhibit].color }}
                    ></div>
                    <span className="text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h5 className="text-xl font-semibold mb-4">Technologies Used</h5>
              <div className="flex flex-wrap gap-2">
                {exhibits[selectedExhibit].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-8 text-center">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-primary hover:bg-purple-600 transition-all rounded-full text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
