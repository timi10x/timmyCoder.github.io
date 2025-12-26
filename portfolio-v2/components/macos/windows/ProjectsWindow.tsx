'use client'

const projects = [
  {
    name: 'Memorize Game App',
    type: 'SwiftUI App',
    icon: '🎮',
    description: 'A SwiftUI game app with emoji matching',
    tech: 'SwiftUI, iOS',
    link: 'https://github.com/timi10x/MemorizeGameApp',
  },
  {
    name: 'ComposeKitten',
    type: 'Android App',
    icon: '🐱',
    description: 'Pet adoption app with Jetpack Compose',
    tech: 'Jetpack Compose, Kotlin',
    link: 'https://github.com/timi10x/ComposeKitten',
  },
  {
    name: 'Visis',
    type: 'Accessibility App',
    icon: '👁️',
    description: 'OCR app for visually impaired users',
    tech: 'Android, Microsoft Cognitive Services',
    link: 'https://bit.ly/2SZZwfh',
  },
  {
    name: 'Currency Converter',
    type: 'Utility App',
    icon: '💱',
    description: 'Real-time currency conversion',
    tech: 'Android, Retrofit, Custom UI',
    link: 'https://github.com/timi10x/CurrencyConverter',
  },
  {
    name: 'Paddybase',
    type: 'Enterprise App',
    icon: '🌾',
    description: 'Agricultural supply chain management',
    tech: 'Android, Kotlin, Firebase',
    link: 'https://bit.ly/35NFdHC',
  },
]

export default function ProjectsWindow() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Projects</h2>
        <p className="text-gray-600">A collection of apps I've built</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer bg-white"
          >
            <div className="flex items-start gap-3">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{project.type}</p>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.split(', ').map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
