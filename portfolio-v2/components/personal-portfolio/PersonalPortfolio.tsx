'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = {
  id: string
  name: string
  role: string
  description: string
  impact: string
  image: string
  color: string
  tags: string[]
  period?: string
  details?: {
    responsibilities: string[]
    technologies: string[]
  }
}

const projects: Project[] = [
  {
    id: 'footlocker',
    name: 'Footlocker',
    role: 'Software Engineer',
    description: 'Leading Android technical development for 3 major retail apps.',
    impact: '83% faster builds',
    image: '👟',
    color: 'from-slate-600 to-slate-800',
    tags: ['Android', 'CI/CD', 'Kotlin'],
    period: 'Jun 2025 – Present',
    details: {
      responsibilities: [
        'Serving as Android technical lead for redesign and rewrite of Foot Locker, Champs Sports, and Kids Foot Locker mobile applications',
        'Optimized CI/CD pipeline to reduce PR build check time by 83%',
        'Introduced development processes that decreased reopened tickets and improved code quality',
        'Mentoring 3 developers through pair programming, code reviews, and weekly office hours',
        'Creating knowledge-sharing presentations and documents to advance team knowledge',
        'Improving UX with geolocation in-store experience and store mode feature'
      ],
      technologies: ['Kotlin', 'Android', 'CI/CD', 'Gradle', 'Geolocation', 'Jetpack Compose']
    }
  },
  {
    id: 'grey',
    name: 'Grey Finance',
    role: 'Software Engineer',
    description: 'Scaled fintech platform to 2M+ users globally.',
    impact: '2M+ users',
    image: '💳',
    color: 'from-blue-600 to-indigo-700',
    tags: ['KMM', 'Python', 'Go'],
    period: 'Jun 2024–Jun 2025 & Mar 2022–Dec 2023',
    details: {
      responsibilities: [
        'Solved scaling issues and brought structure to the team',
        'Introduced server-driven UI for efficiency and on-the-go development',
        'Hired and grew the team with the best talent',
        'Maintained development for global money transfer platform serving 2M+ users',
        'Worked closely with service team, scaling services using Python and GoLang',
        'Introduced Jetpack Compose resulting in 20% faster development and fewer bugs',
        'Managed Ktor HTTP client to optimize network requests across platforms',
        'Increased test coverage by 10% and wrote comprehensive unit tests'
      ],
      technologies: ['Kotlin', 'KMM', 'Ktor', 'Server-Driven UI', 'Python', 'Go', 'Jetpack Compose']
    }
  },
  {
    id: 'fidelity',
    name: 'Fidelity Investments',
    role: 'Software Engineer',
    description: 'Built KMM modules for iOS/Android parity. Raised test coverage by 67.8% using Maestro.',
    impact: '67.8% test coverage',
    image: '🏦',
    color: 'from-green-600 to-emerald-700',
    tags: ['KMM', 'Testing', 'Gradle'],
    period: 'Feb 2023 – Apr 2024',
    details: {
      responsibilities: [
        'Wrote custom Gradle tasks to publish feature modules as Gradle libraries, utilized by 20+ engineers',
        'Developed advanced algorithms for predictive analytics in fund management based on user spending habits',
        'Raised test coverage by 67.8% and spearheaded UI automation keyflows using Maestro',
        'Achieved feature parity between Android and iOS platforms using Kotlin Multiplatform Mobile'
      ],
      technologies: ['Kotlin', 'KMM', 'Gradle', 'Maestro', 'Predictive Analytics', 'Unit Testing']
    }
  },
  {
    id: 'pastel',
    name: 'Pastel Africa',
    role: 'Software Engineer',
    description: 'Built reusable UI component system. Grew engineering team 50% and improved analytics by 30%.',
    impact: '30% analytics boost',
    image: '🎨',
    color: 'from-purple-600 to-pink-600',
    tags: ['Android', 'Team Lead', 'Analytics'],
    period: 'May 2022 – Nov 2022',
    details: {
      responsibilities: [
        'Built and rolled out reusable custom UI components used internally by 4 engineers',
        'Involved in hiring process for Android developers and grew team from 4 to 6 engineers',
        'Collaborated with product team to plan roadmaps and gather functional requirements',
        'Added analytics to track events and improve data collection by 30%'
      ],
      technologies: ['Android', 'Kotlin', 'Custom Views', 'Analytics', 'Team Leadership']
    }
  },
  {
    id: 'chaka',
    name: 'Chaka Technologies',
    role: 'Software Engineer',
    description: 'Achieved 95% crash-free sessions for investment app. Increased user retention by 30%.',
    impact: '30% retention boost',
    image: '📈',
    color: 'from-orange-600 to-red-600',
    tags: ['Kotlin', 'Custom Views', 'Performance'],
    period: 'Mar 2021 – Mar 2022',
    details: {
      responsibilities: [
        'Handled maintenance and shipping of new features for Chaka investment app',
        'Translated complex UI designs with micro-interactions using Custom Views',
        'Increased user retention by 30% by maintaining crash-free sessions of 95%',
        'Released apps to Play Store as release manager'
      ],
      technologies: ['Kotlin', 'Custom Views', 'Play Store', 'Analytics', 'Performance Optimization']
    }
  },
  {
    id: 'crop2cash',
    name: 'Crop2cash',
    role: 'Software Engineer',
    description: 'Automated supply chain saving 35% costs. Reduced crashes by 50% through Kotlin migration.',
    impact: '35% cost reduction',
    image: '🌾',
    color: 'from-green-600 to-lime-600',
    tags: ['Kotlin', 'Python', 'Automation'],
    period: 'Oct 2018 – Feb 2021',
    details: {
      responsibilities: [
        'Automated supply chain process of agro-processors saving 35% of manual processing costs',
        'Refactored 80% of Java files to Kotlin, resulting in 50% reduction in app crashes',
        'Enhanced Android app with modern architecture for better maintainability and reusability',
        'Contributed to backend team building and deploying microservices with Python'
      ],
      technologies: ['Android', 'Kotlin', 'Java', 'Python', 'Microservices', 'Architecture']
    }
  }
]

export default function PersonalPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Noise texture with gradient mesh background */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)',
          }}
        />
        
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, #6366f1 0px, transparent 50%),
              radial-gradient(at 80% 80%, #a78bfa 0px, transparent 50%),
              radial-gradient(at 20% 60%, #60a5fa 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply',
          }}
        />
        
        {/* Moving light beam effect */}
        <motion.div
          className="absolute h-[1px] w-full opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.5) 50%, transparent 100%)',
            top: '20%',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Minimal & Sophisticated */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <div className="text-center">
              {/* Main title - clean and bold */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black tracking-tighter mb-4 md:mb-8"
              >
                <span className="text-gray-900 hover:text-gray-700 transition-colors duration-500">
                  timi10x
                </span>
              </motion.h1>
              
              {/* Subtitle with subtle animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8 md:mb-16 px-4 sm:px-0"
              >
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mb-3">
                    Software engineer with over a decade of experience in building and scaling technologies
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm md:text-base">
                    <motion.span 
                      className="text-gray-900 font-medium"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      2M+ users
                    </motion.span>
                    <span className="text-gray-300">•</span>
                    <motion.span 
                      className="text-gray-900 font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      10M+ downloads
                    </motion.span>
                    <span className="text-gray-300">•</span>
                    <motion.span 
                      className="text-gray-900 font-medium"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      100% performance boost
                    </motion.span>
                  </div>
              </motion.div>

              {/* CTA - minimal and elegant */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              >
                <button
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative"
                >
                  <span className="text-lg text-gray-900 font-medium border-b-2 border-gray-900 pb-2 hover:border-gray-600 transition-colors">
                    View Work
                  </span>
                </button>
                
                <span className="text-gray-300">or</span>
                
                <a
                  href="mailto:olatoyedan@gmail.com"
                  className="group relative"
                >
                  <span className="text-lg text-gray-600 font-medium border-b-2 border-transparent pb-2 hover:border-gray-400 hover:text-gray-900 transition-all">
                    Get in Touch
                  </span>
                </a>
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute top-1/3 left-10 text-xs text-gray-300 font-mono hidden md:block"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                FINTECH
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-10 text-xs text-gray-300 font-mono hidden md:block"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                MOBILE
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 left-20 text-xs text-gray-300 font-mono hidden md:block"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                INNOVATION
              </motion.div>
            </div>

            {/* Minimal scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Work Section - Magazine Style */}
        <section id="work" className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Work
            </motion.h2>
            <motion.p
              className="text-gray-600 text-sm sm:text-base mb-8 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Building products that matter for millions across the World
            </motion.p>

            <div className="space-y-0">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div 
                    className={`border-t ${index === 0 ? 'border-t-2' : ''} border-gray-200 py-8 md:py-12 cursor-pointer transition-all duration-300 ${
                      hoveredProject === project.id ? 'px-4 md:px-8' : ''
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        {/* Left side - Project info */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            {/* Number indicator */}
                            <motion.span 
                              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100"
                              animate={{ 
                                color: hoveredProject === project.id ? '#000' : '#f3f4f6' 
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              0{index + 1}
                            </motion.span>
                            
                            <div className="flex-1">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                                {project.name}
                              </h3>
                              <p className="text-gray-600 text-sm sm:text-base mb-1 md:mb-2">{project.role}</p>
                              <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl">
                                {project.description}
                              </p>
                              
                              {/* Impact & Tags - Mobile only, aligned with text */}
                              <div className="mt-4 md:hidden">
                                <p className="text-lg font-bold text-gray-900 mb-2">
                                  {project.impact}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {project.tags.map(tag => (
                                    <span 
                                      key={tag} 
                                      className={`px-2 py-0.5 text-[10px] font-medium transition-all duration-300 ${
                                        hoveredProject === project.id
                                          ? 'bg-black text-white' 
                                          : 'bg-gray-100 text-gray-600'
                                      }`}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right side - Impact & Tags - Desktop only */}
                        <div className="hidden md:flex flex-col items-end">
                          <motion.div
                            animate={{ 
                              x: hoveredProject === project.id ? -10 : 0 
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                              {project.impact}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-end">
                              {project.tags.map(tag => (
                                <span 
                                  key={tag} 
                                  className={`px-3 py-1 text-xs font-medium transition-all duration-300 ${
                                    hoveredProject === project.id
                                      ? 'bg-black text-white' 
                                      : 'bg-gray-100 text-gray-600'
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Hover indicator - Aligned with content */}
                      <div className="flex items-start gap-4 mt-3">
                        {/* Spacer to match number width */}
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold invisible">
                          0{index + 1}
                        </div>
                        
                        {/* Hover text aligned with project name */}
                        <motion.div
                          className="flex items-center gap-2 text-xs sm:text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                            x: hoveredProject === project.id ? 0 : -10
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-gray-600">View Case Study</span>
                          <span className="text-gray-900">→</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Bottom border */}
              <div className="border-t-2 border-gray-200" />
            </div>
          </div>
        </section>

        {/* Skills Section - Minimal Grid Layout */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-gray-600 text-sm sm:text-base mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              A decade of building at scale
            </motion.p>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Primary Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Primary Stack</h3>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-2xl font-bold text-gray-900">Languages & Architecture</span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">10+ years</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Kotlin • Java • Swift • Go • Python • Clean Architecture • MVP • MVI • MVVM • MVC
                    </p>
                    <motion.div 
                      className="h-[1px] bg-gray-200 mt-4 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-2xl font-bold text-gray-900">Cross-Platform</span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">5+ years</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Kotlin Multiplatform Mobile • Compose Multiplatform • Jetpack Compose • Ktor
                    </p>
                    <motion.div 
                      className="h-[1px] bg-gray-200 mt-4 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    />
                  </div>

                  <div className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-2xl font-bold text-gray-900">Data & Reactive</span>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">7+ years</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Room • SQLDelight • Realm • MongoDB • Coroutines • Flow • RxJava2 • LiveData
                    </p>
                    <motion.div 
                      className="h-[1px] bg-gray-200 mt-4 origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Tools & Specialties */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">Tools & Specialties</h3>
                
                {/* Skill Categories as minimal lists */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Testing & CI/CD</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JUnit4', 'Mockk', 'Mockito', 'Espresso', 'A/B Testing', 'UI Automator', 'Maestro', 'GitHub Actions', 'Fastlane', 'Jenkins', 'GitLab CI/CD'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors cursor-default"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.03 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Networking & Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      {['RESTful', 'gRPC', 'GraphQL', 'Retrofit', 'Firebase Analytics', 'Amplitude', 'Segment', 'Braze', 'Adobe Analytics'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors cursor-default"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.03 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Hardware & Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {['BLE', 'NFC', 'Camera', 'Location', 'OpenGL ES', 'ExoPlayer', 'FCM', 'Push Notifications', 'In-app Messaging'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors cursor-default"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.03 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">DI & Processes</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Dagger Hilt', 'Kodein', 'Koin', 'SCRUM', 'AGILE', 'SDLC', 'KANBAN', 'SOLID Principles'].map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 hover:border-gray-400 transition-colors cursor-default"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.03 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer - Modern Card Layout */}
        <footer className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 md:py-32">
            {/* Main CTA Card */}
            <motion.div
              className="relative mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur text-white text-xs sm:text-sm font-medium rounded-full mb-6">
                      Currently Available for Projects
                    </span>
                  </motion.div>
                  
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Let's create something
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                      extraordinary together
                    </span>
                  </motion.h2>
                  
                  <motion.p
                    className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Currently at Footlocker, crafting mobile experiences with 10+ years of expertise 
                    in Android development and fintech innovation.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <a
                      href="mailto:olatoyedan@gmail.com"
                      className="group inline-flex items-center text-white/90 hover:text-white transition-all"
                    >
                      <span className="text-lg font-medium border-b border-white/30 group-hover:border-white/60 transition-all">
                        olatoyedan@gmail.com
                      </span>
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Connect Section - Simple & Creative */}
            <motion.div 
              className="relative text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Subtle divider */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-8">
                <motion.a
                  href="https://github.com/timmyCoder"
                  className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
                  aria-label="GitHub"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-medium">GitHub</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                
                <motion.span 
                  className="text-gray-200"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  •
                </motion.span>
                
                <motion.a
                  href="https://linkedin.com/in/timilehin-olatoye"
                  className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
                  aria-label="LinkedIn"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                
                <motion.span 
                  className="text-gray-200"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  •
                </motion.span>
                
                <motion.a
                  href="https://twitter.com/timmyCoder"
                  className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
                  aria-label="Twitter"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm font-medium">Twitter</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
              
              {/* Playful tagline */}
              <motion.p
                className="mt-8 text-xs text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Always shipping, always learning
              </motion.p>
            </motion.div>
            
            {/* Copyright */}
            <motion.div
              className="mt-16 pt-8 border-t border-gray-200 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} timi10x
              </p>
            </motion.div>
          </div>
        </footer>
      </div>

      {/* Project Modal - Clean Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close button - positioned relative to viewport */}
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="fixed top-4 right-4 sm:top-6 md:top-8 sm:right-6 md:right-8 text-gray-600 hover:text-gray-900 transition-colors z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="max-w-3xl w-full relative max-h-[90vh] overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Content */}
              <div className="px-4 sm:px-6 md:px-8 py-8 md:py-0">
                <motion.div 
                  className="text-6xl sm:text-7xl md:text-8xl mb-6 md:mb-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                >
                  {selectedProject.id === 'grey' ? (
                    <img 
                      src="/img/greyLogo.svg" 
                      alt="Grey Finance" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'footlocker' ? (
                    <img 
                      src="/img/FLLogo.png" 
                      alt="Footlocker" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'fidelity' ? (
                    <img 
                      src="/img/fidelityLogo.png" 
                      alt="Fidelity Investments" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'bloom' ? (
                    <img 
                      src="/img/fidelityBloom.webp" 
                      alt="Bloom" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'pastel' ? (
                    <img 
                      src="/img/PastelLogo.webp" 
                      alt="Pastel Africa" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'chaka' ? (
                    <img 
                      src="/img/chakaLogo.png" 
                      alt="Chaka" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : selectedProject.id === 'crop2cash' ? (
                    <img 
                      src="/img/crop2cashLogo.png" 
                      alt="Crop2cash" 
                      className="w-[72px] sm:w-[84px] md:w-[96px] h-[72px] sm:h-[84px] md:h-[96px]"
                    />
                  ) : (
                    <span>{selectedProject.image}</span>
                  )}
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">{selectedProject.name}</h3>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <p className="text-lg sm:text-xl text-gray-600">{selectedProject.role}</p>
                  {selectedProject.period && (
                    <>
                      <span className="text-gray-300">•</span>
                      <p className="text-sm sm:text-base text-gray-500">{selectedProject.period}</p>
                    </>
                  )}
                </div>
                
                <div className="prose prose-base sm:prose-lg max-w-none mb-8 md:mb-12">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl mb-6">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.details && (
                    <>
                      <div className="mb-8">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">Key Responsibilities</h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedProject.details.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gray-400 mr-3">•</span>
                              <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 uppercase tracking-wider mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.details.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-6 md:py-8 border-t border-b border-gray-200">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-1 md:mb-2">Impact</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{selectedProject.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
