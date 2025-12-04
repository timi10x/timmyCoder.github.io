'use client'

const experiences = [
  {
    company: 'Chaka Stocks',
    role: 'Senior Mobile Engineer',
    period: '2021 - Present',
    logo: '📈',
    color: 'bg-red-50 border-red-200',
    description: 'Building reliable mobile applications for stock trading and investment management',
    achievements: [
      'Real-time WebSocket integration for live stock prices',
      'Secure biometric authentication and encryption',
      'Offline-first architecture with Room database',
      'Complex charts and data visualization',
    ],
  },
  {
    company: 'Crop2Cash',
    role: 'Android Developer',
    period: '2018 - 2020',
    logo: '🌾',
    color: 'bg-green-50 border-green-200',
    description: 'Developed mobile solutions for agricultural supply chain management',
    achievements: [
      'Built offline-first app for rural connectivity',
      'Geolocation tracking for farmer visits',
      'Mobile payment systems integration',
      'Firebase real-time synchronization',
    ],
  },
  {
    company: 'Expanse Technology',
    role: 'Mobile Engineer',
    period: '2020 - 2021',
    logo: '🚀',
    color: 'bg-purple-50 border-purple-200',
    description: 'Scalable mobile applications with clean architecture',
    achievements: [
      'Implemented MVVM architecture pattern',
      'Migrated legacy codebase to Kotlin',
      'Set up CI/CD pipelines',
      'Performance optimization (40% size reduction)',
    ],
  },
]

export default function ExperienceWindow() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Work Experience</h2>
        <p className="text-gray-600">My professional journey in mobile development</p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className={`p-6 border-2 ${exp.color} rounded-xl`}
          >
            <div className="flex items-start gap-4">
              <div className="text-5xl">{exp.logo}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                    <p className="text-sm font-semibold text-gray-600">{exp.role}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>

                <p className="text-gray-700 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Key Achievements:</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
