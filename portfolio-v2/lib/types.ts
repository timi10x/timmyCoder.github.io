// Type definitions for the portfolio

export interface Project {
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
  appImages?: string[]  // Array of app screenshot paths
}

export interface Skill {
  name: string
  category: 'language' | 'framework' | 'tool' | 'process'
  proficiency?: number
}

export interface SkillCategory {
  title: string
  yearsExperience: string
  skills: string[]
}

export interface Contact {
  email: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  twitter?: string
  medium?: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: React.ReactNode
}
