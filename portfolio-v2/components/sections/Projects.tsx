'use client'

const projects = [
  {
    title: 'Memorize Game App',
    description: 'A SwiftUI game app that randomizes emojis and have you play to match all emojis',
    tech: ['SwiftUI', 'iOS'],
    link: 'https://github.com/timi10x/MemorizeGameApp',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'ComposeKitten',
    description: 'A pet adoption app built with Jetpack Compose, showcasing modern Android UI development',
    tech: ['Jetpack Compose', 'Kotlin', 'Material Design'],
    link: 'https://github.com/timi10x/ComposeKitten',
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Visis',
    description: 'OCR technology app using Microsoft cognitive services to aid visually impaired with reading texts',
    tech: ['Android', 'OCR', 'Microsoft Cognitive Services'],
    link: 'https://bit.ly/2SZZwfh',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'CRUD Back-End Project',
    description: 'Simple CRUD API using Ktor, Docker and PostgreSQL, deployed to Heroku',
    tech: ['Ktor', 'Docker', 'PostgreSQL'],
    link: 'https://twitter.com/timi10x/status/1323030202906234886?s=20',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Currency Converter App',
    description: 'Currency converter using fixer.io API with beautiful custom UI design',
    tech: ['Android', 'Retrofit', 'Custom UI'],
    link: 'https://github.com/timi10x/CurrencyConverter',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Paddybase',
    description: 'Supply chain management app to work with farmers and extension managers',
    tech: ['Android', 'Kotlin', 'Firebase'],
    link: 'https://bit.ly/35NFdHC',
    color: 'from-green-600 to-green-400',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-6`}></div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center text-primary font-semibold">
                View Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/timi10x?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-purple-600 transition-all rounded-full text-white font-semibold shadow-lg shadow-primary/50 hover:shadow-primary/80"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
