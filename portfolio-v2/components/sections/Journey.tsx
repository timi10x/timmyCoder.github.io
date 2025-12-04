'use client'

const journeySteps = [
  {
    year: '2018-2020',
    company: 'Crop2Cash',
    role: 'Android Developer',
    description: 'Built scalable mobile applications for agricultural supply chain management, serving farmers and extension managers.',
    color: 'bg-secondary',
    achievements: ['Developed Paddybase app', 'Integrated payment systems', 'Offline-first architecture'],
  },
  {
    year: '2020-2021',
    company: 'Expanse Technology',
    role: 'Mobile Engineer',
    description: 'Developed mobile solutions focusing on scaling systems and implementing robust architecture patterns.',
    color: 'bg-primary',
    achievements: ['Implemented MVVM architecture', 'Integrated third-party SDKs', 'Performance optimization'],
  },
  {
    year: '2021-Present',
    company: 'Chaka Stocks',
    role: 'Senior Mobile Engineer',
    description: 'Building reliable mobile applications for stock trading and investment management in the fintech space.',
    color: 'bg-accent',
    achievements: ['Real-time stock data integration', 'Secure financial transactions', 'Cross-platform features'],
  },
]

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-gradient">
          My Journey
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-primary to-accent transform md:-translate-x-1/2"></div>

          {/* Journey Steps */}
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <div
                key={step.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-6 h-6 ${step.color} rounded-full transform md:-translate-x-1/2 ring-4 ring-black z-10`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-2xl hover:shadow-primary/20">
                    <span className="text-sm text-gray-400 font-mono">{step.year}</span>
                    <h3 className="text-3xl font-bold mt-2 mb-1">{step.company}</h3>
                    <p className="text-primary font-semibold mb-4">{step.role}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                    <div className={`space-y-2 ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                      {step.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${step.color} rounded-full`}></div>
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
