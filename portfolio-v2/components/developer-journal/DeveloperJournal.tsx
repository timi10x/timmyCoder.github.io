'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type JournalEntry = {
  id: string
  date: string
  title: string
  type: 'project' | 'learning' | 'idea' | 'milestone'
  content: string
  code?: string
  tags: string[]
  emoji: string
}

const journalEntries: JournalEntry[] = [
  {
    id: '1',
    date: 'October 2024',
    title: 'Leading Mobile at Grey Finance',
    type: 'milestone',
    emoji: '🚀',
    content: `Today marks 1 year leading the mobile team. We've grown from 3 to 8 engineers, launched in 5 new countries, and our app rating went from 3.2 to 4.8 stars.

Key achievement: Implemented Kotlin Multiplatform, now sharing 60% of code between iOS and Android. This reduced our development time by 40% and bugs by 50%.`,
    code: `// Shared code example
expect class BiometricAuth() {
    fun authenticate(): Flow<AuthResult>
}

// iOS implementation
actual class BiometricAuth {
    actual fun authenticate() = callbackFlow {
        LAContext().evaluatePolicy(...)
    }
}`,
    tags: ['Leadership', 'KMM', 'Architecture']
  },
  {
    id: '2',
    date: 'September 2024',
    title: 'The Offline-First Revelation',
    type: 'learning',
    emoji: '💡',
    content: `Working with farmers at Crop2Cash taught me: "Your app is only as good as it works on the worst network."

Built a sync engine that handles:
- Automatic retry with exponential backoff
- Conflict resolution with server timestamps
- Compressed data packets for 2G networks
- SMS fallback for critical transactions`,
    code: `class OfflineSyncEngine {
    private val pendingSync = mutableListOf<SyncItem>()
    
    fun sync() = flow {
        while (pendingSync.isNotEmpty()) {
            val batch = pendingSync.take(10)
            try {
                api.syncBatch(compress(batch))
                pendingSync.removeAll(batch)
            } catch (e: NetworkException) {
                delay(calculateBackoff())
            }
        }
    }
}`,
    tags: ['Offline-First', 'Architecture', 'Problem-Solving']
  },
  {
    id: '3',
    date: 'August 2024',
    title: 'Open Source Milestone',
    type: 'project',
    emoji: '🎉',
    content: `ComposeKitten hit 200 stars on GitHub! What started as a weekend project to learn Jetpack Compose became a reference implementation for many developers.

Most valuable feedback: "This is exactly how I wanted to structure my app but didn't know how."`,
    code: `@Composable
fun AdoptionCard(pet: Pet) {
    Card(
        modifier = Modifier
            .animateContentSize()
            .clickable { /* Navigate */ }
    ) {
        AsyncImage(
            model = pet.imageUrl,
            contentDescription = pet.name,
            modifier = Modifier.parallaxEffect()
        )
    }
}`,
    tags: ['Open Source', 'Jetpack Compose', 'Community']
  },
  {
    id: '4',
    date: 'July 2024',
    title: 'The Accessibility Wake-Up Call',
    type: 'learning',
    emoji: '♿',
    content: `User feedback that changed everything: "Your app is the first banking app my grandmother can use without help."

Implemented:
- Dynamic font sizing
- High contrast mode
- Screen reader optimization
- Voice commands for key actions

Result: 15% of our users have accessibility features enabled.`,
    tags: ['Accessibility', 'User Experience', 'Impact']
  },
  {
    id: '5',
    date: 'June 2024',
    title: 'Building a Design System',
    type: 'idea',
    emoji: '🎨',
    content: `Creating a unified design system across iOS and Android. Not just matching colors, but matching the feel and behavior.

Key insight: Platform conventions > Perfect consistency

Users expect iOS to feel like iOS and Android to feel like Android.`,
    tags: ['Design System', 'UI/UX', 'Cross-Platform']
  }
]

const skills = [
  { name: 'Kotlin', level: 95, color: '#7F52FF' },
  { name: 'SwiftUI', level: 85, color: '#007AFF' },
  { name: 'Jetpack Compose', level: 90, color: '#4285F4' },
  { name: 'Architecture', level: 88, color: '#34A853' },
  { name: 'Testing', level: 82, color: '#EA4335' },
  { name: 'Leadership', level: 80, color: '#FBBC04' }
]

export default function DeveloperJournal() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry>(journalEntries[0])
  const [isWriting, setIsWriting] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [showSkills, setShowSkills] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Grid paper background effect */}
      <div 
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#4444FF 1px, transparent 1px),
            linear-gradient(90deg, #4444FF 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Developer's Journal
            </h1>
            <p className="text-sm text-gray-600">by Timilehin Olatoye</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-right"
          >
            <p className="text-sm text-gray-600">{currentTime}</p>
            <p className="text-xs text-gray-500">Entry #{journalEntries.length}</p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar - Journal Entries List */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">Recent Entries</h3>
              <div className="space-y-2">
                {journalEntries.map((entry) => (
                  <motion.button
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedEntry.id === entry.id 
                        ? 'bg-blue-50 border-2 border-blue-200' 
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-xl">{entry.emoji}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-800 line-clamp-1">
                          {entry.title}
                        </p>
                        <p className="text-xs text-gray-500">{entry.date}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              
              {/* Tags Cloud */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-bold text-gray-600 mb-2">TOPICS</h4>
                <div className="flex flex-wrap gap-1">
                  {['Architecture', 'KMM', 'Testing', 'Open Source', 'Leadership']
                    .map(tag => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Main Journal Entry */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-2 border-gray-100 relative">
              {/* Paper texture */}
              <div className="absolute top-0 right-0 p-4">
                <span className="text-4xl opacity-10">📝</span>
              </div>

              {/* Entry Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    selectedEntry.type === 'project' ? 'bg-green-100 text-green-700' :
                    selectedEntry.type === 'learning' ? 'bg-blue-100 text-blue-700' :
                    selectedEntry.type === 'milestone' ? 'bg-purple-100 text-purple-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {selectedEntry.type.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{selectedEntry.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {selectedEntry.emoji} {selectedEntry.title}
                </h2>
                <div className="flex gap-2">
                  {selectedEntry.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Entry Content */}
              <div className="prose prose-gray max-w-none">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedEntry.content}
                </div>

                {/* Code Snippet */}
                {selectedEntry.code && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6"
                  >
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-300 font-mono">
                        <code>{selectedEntry.code}</code>
                      </pre>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Entry Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center">
                <button 
                  onClick={() => setIsWriting(!isWriting)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {isWriting ? 'Stop Writing' : '+ Add Thoughts'}
                </button>
                <div className="flex gap-4">
                  <button className="text-gray-400 hover:text-red-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 3.12-9.032 7.326m0 0A9.001 9.001 0 0012 21c4.474 0 8.268-3.12 9.032-7.326" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Writing Area */}
              <AnimatePresence>
                {isWriting && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 overflow-hidden"
                  >
                    <textarea
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
                      rows={3}
                      placeholder="Add your thoughts..."
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Sidebar - Skills & Stats */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Skills Chart */}
            <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-gray-100 mb-4">
              <h3 className="font-bold text-gray-800 mb-4">Tech Stack</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-gray-100 mb-4">
              <h3 className="font-bold text-gray-800 mb-4">Impact</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">500K+</p>
                  <p className="text-xs text-gray-600">Users</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-xs text-gray-600">Apps</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">200+</p>
                  <p className="text-xs text-gray-600">OS Stars</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">15+</p>
                  <p className="text-xs text-gray-600">Talks</p>
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-4 text-white">
              <h3 className="font-bold mb-3">Let's Connect</h3>
              <div className="space-y-2 text-sm">
                <a href="mailto:olatoyedan@gmail.com" className="flex items-center gap-2 hover:text-blue-300">
                  <span>📧</span> olatoyedan@gmail.com
                </a>
                <a href="https://github.com/timi10x" className="flex items-center gap-2 hover:text-blue-300">
                  <span>💻</span> GitHub
                </a>
                <a href="https://linkedin.com/in/timi-o" className="flex items-center gap-2 hover:text-blue-300">
                  <span>💼</span> LinkedIn
                </a>
                <a href="https://twitter.com/timi10x" className="flex items-center gap-2 hover:text-blue-300">
                  <span>🐦</span> Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Interactive Code Sketches */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Code Sketches & Ideas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sketch 1 */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-dashed border-blue-200">
                <h4 className="font-mono text-sm font-bold text-gray-700 mb-2">compose_animation.kt</h4>
                <pre className="text-xs text-gray-600 font-mono">
{`val infiniteTransition = 
  rememberInfiniteTransition()
  
val scale by infiniteTransition
  .animateFloat(
    initialValue = 1f,
    targetValue = 1.2f,
    animationSpec = infiniteRepeatable(
      animation = tween(1000),
      repeatMode = RepeatMode.Reverse
    )
  )`}
                </pre>
              </div>

              {/* Sketch 2 */}
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-dashed border-green-200">
                <h4 className="font-mono text-sm font-bold text-gray-700 mb-2">offline_sync.swift</h4>
                <pre className="text-xs text-gray-600 font-mono">
{`func syncOfflineData() async {
    let pending = cache.pending()
    
    for batch in pending.chunked(10) {
        await api.sync(batch)
        cache.markSynced(batch)
    }
}`}
                </pre>
              </div>

              {/* Sketch 3 */}
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-dashed border-purple-200">
                <h4 className="font-mono text-sm font-bold text-gray-700 mb-2">architecture.md</h4>
                <pre className="text-xs text-gray-600 font-mono">
{`UI Layer
  ↓
ViewModel (StateFlow)
  ↓
UseCase (Business Logic)
  ↓
Repository (Data Source)
  ↓
Local/Remote`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.location.href = 'mailto:olatoyedan@gmail.com'}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.button>
    </div>
  )
}
