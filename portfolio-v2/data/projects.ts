import { Project } from '@/lib/types'

export const projects: Project[] = [
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
    },
    appImages: [
      '/img/AppImages/FootlockerAppImage/Fl1.webp',
      '/img/AppImages/FootlockerAppImage/Fl2.webp',
      '/img/AppImages/FootlockerAppImage/Fl3.webp',
      '/img/AppImages/FootlockerAppImage/Fl4.webp',
      '/img/AppImages/FootlockerAppImage/Fl5.webp',
      '/img/AppImages/FootlockerAppImage/Fl6.webp'
    ]
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
