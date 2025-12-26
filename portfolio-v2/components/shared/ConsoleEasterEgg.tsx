'use client'

import { useEffect } from 'react'

export default function ConsoleEasterEgg() {
  useEffect(() => {
    // Clear console first
    console.clear()

    // ASCII Art Logo
    const logo = `
%c
████████╗██╗███╗   ███╗██╗ ██╗ ██████╗ ██╗  ██╗
╚══██╔══╝██║████╗ ████║██║███║██╔═████╗╚██╗██╔╝
   ██║   ██║██╔████╔██║██║╚██║██║██╔██║ ╚███╔╝ 
   ██║   ██║██║╚██╔╝██║██║ ██║████╔╝██║ ██╔██╗ 
   ██║   ██║██║ ╚═╝ ██║██║ ██║╚██████╔╝██╔╝ ██╗
   ╚═╝   ╚═╝╚═╝     ╚═╝╚═╝ ╚═╝ ╚═════╝ ╚═╝  ╚═╝
                                                
    🚀 Mobile Engineer | Fintech Specialist 🚀
    `

    console.log(logo, 'color: #243DE8; font-weight: bold;')

    // Hiring message
    console.log(
      '%c👋 Hey there, curious developer!',
      'font-size: 20px; font-weight: bold; color: #243DE8;'
    )

    console.log(
      '%c\nLooks like you enjoy peeking under the hood. I like that! 🔍',
      'font-size: 14px; color: #666;'
    )

    // Tech Stack
    console.group('%c🛠️ Tech Stack Used', 'font-size: 16px; color: #243DE8;')
    console.table({
      'Framework': 'Next.js 15',
      'Language': 'TypeScript',
      'Styling': 'Tailwind CSS',
      'Animations': 'Framer Motion',
      '3D': 'Three.js',
      'State': 'React Hooks',
      'Deployment': 'Vercel',
    })
    console.groupEnd()

    // Secret Commands
    console.group('%c🎮 Secret Commands', 'font-size: 16px; color: #243DE8;')
    console.log('%c↑ ↑ ↓ ↓ ← → ← → B A', 'font-family: monospace; padding: 5px; background: #f0f0f0;')
    console.log('Konami Code - Unlock a special achievement!')
    console.log('\n%ctimi10x.unlock()', 'font-family: monospace; padding: 5px; background: #f0f0f0;')
    console.log('Unlock all features')
    console.log('\n%ctimi10x.matrix()', 'font-family: monospace; padding: 5px; background: #f0f0f0;')
    console.log('Enter the matrix')
    console.log('\n%ctimi10x.hire()', 'font-family: monospace; padding: 5px; background: #f0f0f0;')
    console.log('Fast-track hiring process')
    console.groupEnd()

    // Performance Metrics
    console.group('%c📊 Performance Metrics', 'font-size: 16px; color: #243DE8;')
    console.log('First Contentful Paint: < 1s')
    console.log('Time to Interactive: < 2s')
    console.log('Lighthouse Score: 100/100')
    console.log('Bundle Size: Optimized with code-splitting')
    console.groupEnd()

    // Contact CTA
    console.log(
      '\n%c📬 Want to work together?',
      'font-size: 18px; font-weight: bold; color: #243DE8;'
    )
    console.log(
      '%cEmail: olatoyedan@gmail.com\nGitHub: github.com/timi10x\nLinkedIn: linkedin.com/in/timi-o',
      'font-size: 14px; color: #666;'
    )

    // Add global functions
    if (typeof window !== 'undefined') {
      ;(window as any).timi10x = {
        unlock: () => {
          console.clear()
          console.log('%c🎉 All features unlocked!', 'font-size: 24px; color: gold;')
          console.log('%cJust kidding... but seriously, hire me? 😄', 'font-size: 16px; color: #666;')
          return '🚀 Achievement Unlocked: Console Master!'
        },
        matrix: () => {
          console.clear()
          const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01'
          let matrix = ''
          for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 50; j++) {
              matrix += chars[Math.floor(Math.random() * chars.length)]
            }
            matrix += '\n'
          }
          console.log('%c' + matrix, 'color: #00ff00; background: black; font-family: monospace;')
          return 'Welcome to the Matrix, Neo...'
        },
        hire: () => {
          console.clear()
          console.log('%c✨ Initiating Fast-Track Hiring Process...', 'font-size: 20px; color: #243DE8;')
          setTimeout(() => console.log('%c📋 Loading resume...', 'color: #666;'), 500)
          setTimeout(() => console.log('%c🔍 Analyzing skills...', 'color: #666;'), 1000)
          setTimeout(() => console.log('%c✅ Perfect match found!', 'color: green;'), 1500)
          setTimeout(() => {
            console.log('\n%c🎊 Congratulations!', 'font-size: 24px; color: gold;')
            console.log('%cYou\'ve discovered an exceptional Mobile Engineer!', 'font-size: 16px; color: #243DE8;')
            console.log('\n📬 Contact: olatoyedan@gmail.com')
            console.log('📱 Available for: Full-time, Contract, Consulting')
            console.log('💼 Expertise: Mobile (iOS/Android), Fintech, Architecture')
          }, 2000)
          return 'Processing... 🚀'
        },
        skills: () => {
          const skills = {
            'Mobile': ['Kotlin', 'SwiftUI', 'Flutter', 'React Native'],
            'Architecture': ['MVVM', 'MVI', 'Clean Architecture', 'TDD'],
            'Backend': ['Ktor', 'Node.js', 'PostgreSQL', 'Firebase'],
            'Tools': ['Git', 'CI/CD', 'Docker', 'Jira'],
            'Soft Skills': ['Leadership', 'Mentoring', 'Communication', 'Problem Solving']
          }
          console.table(skills)
          return 'Full stack of skills loaded!'
        },
        experience: () => {
          const experience = [
            { Company: 'Grey Finance', Role: 'Lead Mobile Engineer', Duration: '2023-Present' },
            { Company: 'Chaka', Role: 'Senior Mobile Engineer', Duration: '2021-2023' },
            { Company: 'Expanse Technology', Role: 'Mobile Engineer', Duration: '2020-2021' },
            { Company: 'Crop2Cash', Role: 'Mobile Developer', Duration: '2019-2020' }
          ]
          console.table(experience)
          return 'Professional journey displayed!'
        }
      }
    }

    // Random tips
    const tips = [
      'Try the Konami code on the main page!',
      'Click the concept switcher to see 16 different designs!',
      'The terminal section has real commands - try "neofetch"!',
      'Hover over everything - there are micro-interactions everywhere!',
      'Check the achievements panel - can you unlock them all?'
    ]
    
    console.log(
      `\n%c💡 Pro Tip: ${tips[Math.floor(Math.random() * tips.length)]}`,
      'font-size: 14px; color: #FF6B6B; font-style: italic;'
    )

    // Final message
    console.log(
      '\n%c══════════════════════════════════════',
      'color: #243DE8;'
    )
    console.log(
      '%cBuilt with ❤️ and lots of ☕ by timi10x',
      'font-size: 12px; color: #999; text-align: center;'
    )
  }, [])

  return null
}
