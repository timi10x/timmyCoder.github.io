'use client'

const skillCategories = [
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Kotlin', level: 95, color: 'bg-purple-500' },
      { name: 'Jetpack Compose', level: 90, color: 'bg-blue-500' },
      { name: 'SwiftUI', level: 80, color: 'bg-orange-500' },
      { name: 'Android Jetpack', level: 95, color: 'bg-green-500' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Ktor', level: 85, color: 'bg-indigo-500' },
      { name: 'Java', level: 90, color: 'bg-red-500' },
      { name: 'Git', level: 95, color: 'bg-yellow-500' },
    ],
  },
  {
    title: 'Architecture & Testing',
    skills: [
      { name: 'MVVM', level: 95, color: 'bg-pink-500' },
      { name: 'Dagger/Hilt', level: 90, color: 'bg-cyan-500' },
      { name: 'Unit Testing', level: 85, color: 'bg-lime-500' },
      { name: 'Room Database', level: 90, color: 'bg-teal-500' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center text-gradient">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold mb-4 text-center">Other Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Retrofit', 'OkHttp', 'Coroutines', 'Flow', 'Material Design', 'Firebase', 'CI/CD', 'Agile'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-full text-sm text-gray-300 border border-primary/30 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
