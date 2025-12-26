'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  from: string
  subject: string
  preview: string
  date: string
  read: boolean
  category: 'project' | 'experience' | 'skill' | 'contact' | 'blog'
  icon: string
  content?: string
  attachments?: string[]
}

const initialMessages: Message[] = [
  {
    id: '1',
    from: 'Mobile Projects',
    subject: 'Apps that changed 500K+ lives',
    preview: 'Let me tell you about Grey Finance, Chaka, and the fintech revolution...',
    date: 'Just now',
    read: false,
    category: 'project',
    icon: '📱',
    content: `Hey there!

I've been building mobile apps that make financial services accessible to everyone. Here are some highlights:

🏦 **Grey Finance** (2023-Present)
Leading mobile development for 500K+ users. We're revolutionizing cross-border payments and digital banking.
• Tech Stack: Kotlin, SwiftUI, Jetpack Compose, KMM, GraphQL
• Impact: Reduced transaction time by 80%, increased user retention by 45%
• My Role: Lead Mobile Engineer - architecting scalable solutions

📈 **Chaka** (2021-2023)  
Built a commission-free stock trading platform that democratized investing for African millennials.
• 100K+ active traders managing $50M+ in assets
• Implemented real-time market data with WebSockets
• Reduced app crashes by 85% through comprehensive testing

🌾 **Crop2Cash** (2019-2020)
Created offline-first lending platform for farmers in rural areas.
• 20K+ loans disbursed despite poor connectivity
• Built custom sync engine for offline/online data reconciliation
• Pioneered SMS fallback for critical transactions

♿ **Visis** (2019)
Accessibility app using OCR and AI to help visually impaired users.
• 5K+ downloads with 4.8★ rating
• Microsoft Cognitive Services integration
• Won "Most Impactful App" at DevFest 2019

🐱 **ComposeKitten** (2024)
Open-source pet adoption app showcasing modern Android development.
• 200+ GitHub stars, featured in Android Weekly
• Demonstrates Jetpack Compose best practices
• Clean Architecture with 95% test coverage

Each app taught me something invaluable about building for real people with real problems.

Want to dive deeper into any of these projects?

Best,
Timi`,
    attachments: ['GreyFinance_Demo.mp4', 'Chaka_CaseStudy.pdf', 'Architecture_Diagrams.png', 'GitHub_Repos.md']
  },
  {
    id: '2',
    from: 'Open Source',
    subject: 'Code I share with the world 🌍',
    preview: 'ComposeKitten, contributions to major libraries, and why I believe in open source...',
    date: '2 hours ago',
    read: false,
    category: 'project',
    icon: '💻',
    content: `Hello fellow developer!

Open source is where I give back to the community that taught me everything. Here's what I'm working on:

🐱 **ComposeKitten** - Modern Android with Jetpack Compose
github.com/timi10x/ComposeKitten
• Beautiful pet adoption app with Material 3 design
• Showcases animation APIs and state management
• Used as reference by 500+ developers learning Compose

🔧 **Contributions to Major Projects**
• **Kotlin Coroutines** - Fixed memory leak in Flow collectors
• **Retrofit** - Added support for custom error deserializers  
• **Compose Material 3** - Implemented adaptive layouts
• **Ktor** - Contributed WebSocket improvements

📚 **Technical Writing**
• "Offline-First Architecture in Africa" - 10K+ reads on Medium
• "Building Accessible Fintech Apps" - Featured in Android Weekly
• "Kotlin Multiplatform in Production" - Conference talk at Droidcon

🎓 **Learning Resources Created**
• Android Development Bootcamp curriculum (trained 50+ developers)
• YouTube tutorials on advanced Compose techniques (20K+ views)
• Open-source template for fintech apps

🤝 **Community Involvement**
• Google Developer Expert nominee 2024
• Android Lagos meetup organizer
• Stack Overflow: 5K+ reputation, 200+ answers

Why open source matters to me:
"Every line of code I write today stands on the shoulders of thousands of developers who shared their knowledge freely. Open source isn't just about code—it's about building a more inclusive tech ecosystem where everyone can learn and contribute."

Check out my GitHub for more: github.com/timi10x

Happy coding!
Timi`,
    attachments: ['GitHub_Profile.pdf', 'Contribution_Graph.png', 'Popular_Repos.json']
  },
  {
    id: '3',
    from: 'Career Journey',
    subject: 'From bootcamp to Lead Engineer',
    preview: 'The story of my evolution in fintech, the mentors who shaped me, and lessons learned...',
    date: 'Yesterday',
    read: false,
    category: 'experience',
    icon: '🚀',
    content: `Dear future colleague,

Let me share my journey from a curious bootcamp student to leading mobile teams at Africa's top fintech companies:

📅 **2019: The Beginning**
Started at a coding bootcamp with zero mobile experience. Built my first Android app in Java (a calculator that could barely add!). But I was hooked on the possibility of putting powerful tools in people's pockets.

🌱 **2019-2020: Crop2Cash - Mobile Developer**
My first real job! Thrown into the deep end building lending apps for farmers.
• Learned React Native from scratch in 2 weeks
• Discovered the importance of offline-first architecture
• Understood that technology means nothing if users can't use it

📈 **2020-2021: Expanse Technology - Mobile Engineer**
Leveled up working on enterprise financial solutions.
• Migrated legacy Java app to Kotlin (reduced codebase by 30%)
• Implemented my first CI/CD pipeline
• Led mobile efforts for Series A funding demo

💎 **2021-2023: Chaka - Senior Mobile Engineer**
Where everything clicked. Built features used by 100K+ traders daily.
• Architected the mobile app from scratch using Clean Architecture
• Mentored 3 junior developers (they're all seniors now!)
• Reduced app load time from 8s to 1.2s

🚀 **2023-Present: Grey Finance - Lead Mobile Engineer**
Leading the charge in revolutionizing African financial services.
• Managing team of 8 mobile engineers across iOS and Android
• Introduced Kotlin Multiplatform, sharing 60% code between platforms
• Spearheading accessibility initiative (15% of users have disabilities)

🎯 **Key Milestones**
• Apps deployed: 12 production apps
• Users impacted: 500K+ across Africa
• Team members mentored: 15+
• Bugs fixed: Countless (but who's counting?)
• Coffee consumed: ∞

💡 **Lessons That Shaped Me**
1. "Code is read more than it's written" - My first tech lead
2. "Build for the user with the worst phone and slowest internet" - CEO at Crop2Cash
3. "If you can't explain it simply, you don't understand it" - Senior dev at Chaka
4. "Leadership is about making others successful" - Current manager

🔮 **What's Next?**
I'm passionate about building products that democratize financial services in emerging markets. Whether it's making investments accessible, simplifying payments, or creating new economic opportunities—I'm all in.

Currently exploring: AI in mobile apps, blockchain for financial inclusion, and building the next generation of African tech leaders.

Let's build the future together!

Warmly,
Timi`,
    attachments: ['Resume_2024.pdf', 'LinkedIn_Recommendations.pdf', 'Career_Timeline.png']
  },
  {
    id: '4',
    from: 'Tech Stack',
    subject: 'My favorite tools and why I love them',
    preview: 'Kotlin is poetry, SwiftUI is art, and let me tell you about Clean Architecture...',
    date: '2 days ago',
    read: false,
    category: 'skill',
    icon: '🛠️',
    content: `Tech enthusiast,

Let me geek out about the tools that make my developer life amazing:

💜 **Kotlin** - The Language That Changed Everything
Why I love it: Null safety, coroutines, extension functions, and that sweet, sweet syntax.
Favorite feature: Scope functions (let, apply, with) - they make code read like prose!

🍎 **SwiftUI** - Declarative UI Paradise
Building iOS apps feels like painting. The preview canvas, the modifiers, the animations—chef's kiss!
Pro tip: Combine + SwiftUI = Reactive programming heaven

🎨 **Jetpack Compose** - Android's Renaissance
Remember XML layouts? Me neither! Compose makes UI development fun again.
Achievement: Reduced UI code by 50% while adding more features

🏗️ **Architecture Patterns I Swear By**
• MVVM - The perfect balance of separation and simplicity
• Clean Architecture - Uncle Bob was right all along
• Repository Pattern - Single source of truth FTW
• MVI - For when you need that extra state management power

📦 **Essential Libraries**
Android:
• Hilt - Dependency injection without the tears
• Room - SQLite made elegant
• Retrofit - API calls that just work
• Coil - Image loading with Kotlin coroutines

iOS:
• Alamofire - Networking excellence
• Realm - When Core Data is overkill
• Kingfisher - Image caching done right
• SwiftLint - Keep that code clean!

🔧 **Development Tools**
• Android Studio Arctic Fox - The IDE that understands me
• Xcode 15 - Finally stable! (mostly)
• VS Code - For everything else
• Postman - API testing companion
• Charles Proxy - Network debugging wizard

🚀 **CI/CD & DevOps**
• GitHub Actions - Automate all the things!
• Fastlane - One command to rule them all
• Firebase App Distribution - Beta testing made simple
• Bitrise - When you need that extra CI power

📊 **Analytics & Monitoring**
• Firebase Crashlytics - Know about crashes before users complain
• Mixpanel - User behavior insights
• Sentry - Error tracking on steroids
• New Relic - Performance monitoring

🧪 **Testing Arsenal**
• JUnit5 + Mockk - Unit testing bliss
• Espresso - UI testing for Android
• XCTest - iOS testing framework
• Maestro - Cross-platform UI testing

💡 **Philosophy on Tools**
"The best tool is the one that gets out of your way and lets you focus on solving problems. I choose tools that enhance productivity, improve code quality, and make development enjoyable."

Current experiments: Kotlin Multiplatform Mobile, SwiftUI 5.0 features, and GitHub Copilot for mobile development.

What's in your toolbox?

Cheers,
Timi`,
    attachments: ['Tech_Stack_2024.pdf', 'Tool_Comparison.xlsx', 'Setup_Guide.md']
  },
  {
    id: '5',
    from: 'Speaking & Events',
    subject: 'Sharing knowledge with the community',
    preview: 'From Android Lagos to GDG events, here are my talks and workshops...',
    date: '3 days ago',
    read: false,
    category: 'experience',
    icon: '🎤',
    content: `Hello community builder!

Teaching others is the best way to learn. Here are the events where I've shared my knowledge:

🎤 **Events I've Hosted**
• "Fireside Chat with Mobile Leaders" - 200+ attendees
• "Test Driven Development in Android" - Hands-on workshop
• "Dependency Injection with Dagger-Hilt" - Technical deep-dive
• "Canvas API in Jetpack Compose" - Live coding session

📢 **Speaking Engagements**
• **Droidcon Lagos 2023** - "Kotlin Multiplatform in Production"
• **GDG DevFest 2022** - "Building Offline-First Apps for Africa"
• **Mobile Monday Lagos** - "Accessibility in Fintech Apps"
• **Flutter Festival** - "Why Native Developers Should Care About Flutter"

🎓 **Workshops & Training**
• Android Development Bootcamp - Trained 50+ developers
• "iOS for Android Developers" - Cross-platform skills
• Corporate training at 5 companies on mobile best practices
• Mentored 15+ junior developers (3 now senior engineers!)

📺 **Online Presence**
• YouTube: "Advanced Compose Techniques" series - 20K+ views
• Medium: 15 technical articles, 50K+ reads total
• Dev.to: Top 7% contributor in mobile development
• Stack Overflow: 5K+ reputation, helping developers daily

🏆 **Recognition**
• Google Developer Expert nominee 2024
• "Best Speaker" at DevFest Lagos 2023
• Featured in Android Weekly 5 times
• Community Hero Award - GDG Lagos

📚 **Upcoming Events**
• KotlinConf 2025 - "Building Financial Inclusion with KMM"
• Droidcon Berlin - Workshop on Compose animations
• Online course: "Mobile Architecture Masterclass"

💬 **My Speaking Philosophy**
"The best talks aren't about showing how smart you are—they're about making your audience smarter. I focus on practical, real-world examples that developers can apply immediately."

🌍 **Impact**
• Developers trained: 200+
• Countries reached: 15
• Lives impacted: Countless
• Imposter syndrome cured: Mine (mostly!)

Want me to speak at your event? Let's chat!

Keep learning, keep sharing,
Timi`,
    attachments: ['Speaking_Portfolio.pdf', 'Event_Photos.zip', 'Slide_Decks.link']
  },
  {
    id: '6',
    from: 'You',
    subject: 'Draft: Let\'s build something amazing together',
    preview: 'Type your message here...',
    date: 'Draft',
    read: false,
    category: 'contact',
    icon: '✉️',
  }
]

export default function InboxView() {
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [composeMode, setComposeMode] = useState(false)
  const [newMessageAlert, setNewMessageAlert] = useState(false)

  useEffect(() => {
    // Simulate new message arriving
    const timer = setTimeout(() => {
      setNewMessageAlert(true)
      setTimeout(() => setNewMessageAlert(false), 3000)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const markAsRead = (id: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ))
  }

  const openMessage = (message: Message) => {
    markAsRead(message.id)
    if (message.id === '6') {
      setComposeMode(true)
    } else {
      setSelectedMessage(message)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] p-4 md:p-8">
      {/* Email Client Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 md:rounded-lg rounded-none">
        
        {/* Header */}
        <div className="border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-[#2B3F6C]">📬 Inbox</h1>
            <span className="text-xs md:text-sm text-gray-500 hidden sm:inline">timi10x@portfolio.dev</span>
          </div>
          <div className="flex items-center gap-2">
            {newMessageAlert && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
              >
                New message!
              </motion.div>
            )}
            <button className="text-sm text-gray-600 hover:text-gray-900">
              🔄 Refresh
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="border-b border-gray-200 px-4 md:px-6 py-2 flex items-center gap-2 md:gap-4 overflow-x-auto">
          <button 
            onClick={() => setComposeMode(true)}
            className="bg-[#4A90E2] text-white px-3 md:px-4 py-2 rounded-md hover:bg-[#357ABD] transition-colors text-sm md:text-base whitespace-nowrap"
          >
            ✏️ <span className="hidden sm:inline">Compose</span>
          </button>
          <button className="text-gray-600 hover:text-gray-900 text-sm md:text-base">📥 <span className="hidden sm:inline">Archive</span></button>
          <button className="text-gray-600 hover:text-gray-900 text-sm md:text-base">🗑️ <span className="hidden sm:inline">Trash</span></button>
          <button className="text-gray-600 hover:text-gray-900 text-sm md:text-base">⭐ <span className="hidden sm:inline">Starred</span></button>
        </div>

        {/* Messages List */}
        <div className="divide-y divide-gray-100">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openMessage(message)}
                className={`px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  !message.read ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon */}
                  <div className="text-xl md:text-2xl flex-shrink-0">{message.icon}</div>
                  
                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start md:items-center justify-between mb-1 flex-col md:flex-row">
                      <h3 className={`${!message.read ? 'font-bold' : 'font-medium'} text-gray-900 text-sm md:text-base`}>
                        {message.from}
                      </h3>
                      <span className="text-xs md:text-sm text-gray-500 mt-1 md:mt-0">{message.date}</span>
                    </div>
                    <h4 className={`${!message.read ? 'font-semibold' : ''} text-gray-800 mb-1 text-sm md:text-base`}>
                      {message.subject}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 truncate">{message.preview}</p>
                  </div>

                  {/* Unread Indicator */}
                  {!message.read && (
                    <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-3 text-sm text-gray-500">
          {messages.filter(m => !m.read).length} unread messages
        </div>
      </div>

      {/* Message Reader Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <MessageReader 
            message={selectedMessage} 
            onClose={() => setSelectedMessage(null)} 
          />
        )}
      </AnimatePresence>

      {/* Compose Modal */}
      <AnimatePresence>
        {composeMode && (
          <ComposeMessage onClose={() => setComposeMode(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Message Reader Component
function MessageReader({ message, onClose }: { message: Message; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Email Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-900">{message.subject}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">From:</span>
            <span>{message.from}</span>
            <span className="text-gray-400">•</span>
            <span>{message.date}</span>
          </div>
        </div>

        {/* Email Body */}
        <div className="px-6 py-4 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-gray max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{message.content || message.preview}</pre>
          </div>

          {/* Attachments */}
          {message.attachments && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">📎 Attachments</h4>
              <div className="space-y-2">
                {message.attachments.map((file, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#4A90E2] hover:underline cursor-pointer">
                    <span>📄</span>
                    <span>{file}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="border-t border-gray-200 px-6 py-3 flex gap-3">
          <button className="bg-[#4A90E2] text-white px-4 py-2 rounded-md hover:bg-[#357ABD]">
            ↩️ Reply
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
            ↗️ Forward
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
            ⭐ Star
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Compose Message Component
function ComposeMessage({ onClose }: { onClose: () => void }) {
  const [to, setTo] = useState('')
  const [subject, setSubject] = useState("Let's work together!")
  const [message, setMessage] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">New Message</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
              <input
                type="email"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="your-email@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={8}
                placeholder="Tell me about your project..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-3 flex justify-between">
          <button className="text-gray-600 hover:text-gray-900">
            📎 Attach
          </button>
          <div className="flex gap-3">
            <button 
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
            >
              Save Draft
            </button>
            <button className="bg-[#4A90E2] text-white px-4 py-2 rounded-md hover:bg-[#357ABD]">
              Send →
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
