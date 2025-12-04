'use client'

const projects = [
  {
    company: 'Chaka',
    role: 'Android Engineer',
    period: '2022 — Present',
    description: 'Building a stock trading platform that democratizes access to global markets. Leading mobile architecture decisions and implementing real-time trading features.',
    impact: '50K+ active traders',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'WebSocket']
  },
  {
    company: 'Expanse Technology',
    role: 'Mobile Engineer',
    period: '2020 — 2022',
    description: 'Developed payment solutions serving thousands of merchants. Built offline-first architecture and implemented end-to-end encryption for sensitive transactions.',
    impact: '$10M+ monthly volume',
    stack: ['Kotlin', 'Room', 'Retrofit', 'Encryption']
  },
  {
    company: 'Crop2Cash',
    role: 'Android Developer',
    period: '2019 — 2020',
    description: 'Created agricultural lending platform connecting farmers with capital. Designed intuitive onboarding flows for users with varying technical literacy.',
    impact: '5K+ farmers connected',
    stack: ['Kotlin', 'Firebase', 'Material Design']
  }
]

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-primaryblue mb-4">Work</h2>
          <p className="text-xl text-primaryblue/70">
            Building fintech products that handle money with care
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 bg-primaryivory border-2 border-primaryblue rounded-[10px] hover:shadow-xl transition-shadow duration-150"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primaryblue mb-2">{project.company}</h3>
                  <p className="text-lg text-primaryblue/70 mb-2">{project.role}</p>
                  <p className="text-sm text-primaryblue/50">{project.period}</p>
                </div>
                <div className="mt-4 md:mt-0 inline-block px-4 py-2 bg-primaryblue text-white text-sm font-bold rounded-[4px]">
                  {project.impact}
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-primaryblue/80 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-primaryblue text-primaryblue text-sm font-medium rounded-[4px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
