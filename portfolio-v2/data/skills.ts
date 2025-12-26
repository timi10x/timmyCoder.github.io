import { SkillCategory } from '@/lib/types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Architecture',
    yearsExperience: '10+ years',
    skills: ['Kotlin', 'Java', 'Swift', 'Go', 'Python', 'Clean Architecture', 'MVP', 'MVI', 'MVVM', 'MVC']
  },
  {
    title: 'Cross-Platform',
    yearsExperience: '5+ years',
    skills: ['Kotlin Multiplatform Mobile', 'Compose Multiplatform', 'Jetpack Compose', 'Ktor']
  },
  {
    title: 'Data & Reactive',
    yearsExperience: '7+ years',
    skills: ['Room', 'SQLDelight', 'Realm', 'MongoDB', 'Coroutines', 'Flow', 'RxJava2', 'LiveData']
  }
]

export const toolsAndSpecialties = [
  {
    category: 'Testing & CI/CD',
    skills: ['JUnit4', 'Mockk', 'Mockito', 'Espresso', 'A/B Testing', 'UI Automator', 'Maestro', 'GitHub Actions', 'Fastlane', 'Jenkins', 'GitLab CI/CD']
  },
  {
    category: 'Networking & Analytics',
    skills: ['RESTful', 'gRPC', 'GraphQL', 'Retrofit', 'Firebase Analytics', 'Amplitude', 'Segment', 'Braze', 'Adobe Analytics']
  },
  {
    category: 'Hardware & Services',
    skills: ['BLE', 'NFC', 'Camera', 'Location', 'OpenGL ES', 'ExoPlayer', 'FCM', 'Push Notifications', 'In-app Messaging']
  },
  {
    category: 'DI & Processes',
    skills: ['Dagger Hilt', 'Kodein', 'Koin', 'SCRUM', 'AGILE', 'SDLC', 'KANBAN', 'SOLID Principles']
  }
]

export const contactInfo = {
  email: 'olatoyedan@gmail.com',
  phone: '+1(970)-413-9607',
  location: 'Dallas TX, USA',
  linkedin: 'https://www.linkedin.com/in/timi-o/',
  github: 'https://github.com/timi10x',
  twitter: 'https://twitter.com/timi10x',
  medium: 'https://medium.com/@timmy10x'
}

export const infoPlaceHolder = {
    emailTemplate: 'send me an email',
}
