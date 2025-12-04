'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface TerminalLine {
  type: 'input' | 'output' | 'error'
  content: string
}

interface TerminalEmulatorProps {
  onCommandCount?: (count: number) => void
}

export default function TerminalEmulator({ onCommandCount }: TerminalEmulatorProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to timi10x\'s portfolio terminal!' },
    { type: 'output', content: 'Type "help" for available commands.' },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [commandCount, setCommandCount] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - Learn about me',
      '  skills     - List my technical skills',
      '  projects   - View my projects',
      '  experience - Show work experience',
      '  contact    - Get my contact info',
      '  resume     - Download my resume',
      '  clear      - Clear terminal',
      '  ls         - List files',
      '  pwd        - Print working directory',
      '  whoami     - Who am I?',
      '  neofetch   - Display system info',
    ],
    about: () => [
      'timi10x - Mobile Engineer & Fintech Specialist',
      '',
      'I build financial products that people trust with their money.',
      'With 5+ years of experience, I\'ve helped 100K+ users manage $50M+ in transactions.',
      '',
      'Specializing in: Kotlin, SwiftUI, Flutter, and offline-first architectures.',
    ],
    skills: () => [
      'Languages:     Kotlin, Swift, Dart, TypeScript',
      'Frameworks:    Android, iOS, Flutter, React Native',
      'Architecture:  MVVM, BLoC, Clean Architecture',
      'Tools:         Git, Firebase, CI/CD, Figma',
      'Specialties:   Fintech, Offline-first, Performance',
    ],
    projects: () => [
      '1. Chaka - Stock trading platform',
      '   Impact: 100K+ active users',
      '   Tech: Kotlin, SwiftUI, MVVM',
      '',
      '2. Expanse Technology - Enterprise fintech',
      '   Impact: $50M+ processed',
      '   Tech: Flutter, Dart, BLoC',
      '',
      '3. Crop2Cash - Agricultural lending',
      '   Impact: 20K+ loans disbursed',
      '   Tech: React Native, Offline-first',
    ],
    experience: () => [
      '2023-Present: Senior Mobile Engineer @ Expanse Technology',
      '2021-2023:    Lead Mobile Engineer @ Chaka',
      '2020-2021:    Mobile Engineer @ Crop2Cash',
    ],
    contact: () => [
      'Email:    timi@example.com',
      'LinkedIn: linkedin.com/in/timi10x',
      'GitHub:   github.com/timmyCoder',
      'Twitter:  @timi10x',
    ],
    resume: () => 'Opening resume... (https://timi10x.com/resume.pdf)',
    clear: () => {
      setHistory([])
      return ''
    },
    ls: () => ['projects/', 'skills.txt', 'experience.txt', 'contact.txt', 'resume.pdf'],
    pwd: () => '/home/timi10x/portfolio',
    whoami: () => 'timi10x - Mobile Engineer extraordinaire 😎',
    neofetch: () => [
      '        ___                 timi10x',
      '       /   \\               ----------------',
      '      |     |              OS: Portfolio v2.0',
      '       \\___/               Host: GitHub Pages',
      '         |                 Kernel: Next.js 15',
      '        / \\                Uptime: 5+ years',
      '       /   \\               Shell: TypeScript',
      '                           Terminal: timi-term',
      '                           CPU: Caffeine-powered',
      '                           Memory: Unlimited',
    ],
  }

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()

    setHistory(prev => [...prev, { type: 'input', content: `$ ${cmd}` }])
    setCommandHistory(prev => [...prev, cmd])

    const newCount = commandCount + 1
    setCommandCount(newCount)
    onCommandCount?.(newCount)

    if (trimmed === '') return

    if (trimmed === 'clear') {
      commands.clear()
      return
    }

    if (commands[trimmed]) {
      const result = commands[trimmed]()
      const lines = Array.isArray(result) ? result : [result]

      setHistory(prev => [
        ...prev,
        ...lines.map(line => ({ type: 'output' as const, content: line }))
      ])
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmed}` },
        { type: 'output', content: 'Type "help" for available commands.' }
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      executeCommand(input)
      setInput('')
      setHistoryIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <div className="bg-black text-green-400 rounded-[10px] overflow-hidden shadow-2xl font-mono">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-white text-sm ml-4">timi@portfolio:~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-[500px] overflow-y-auto" onClick={() => inputRef.current?.focus()}>
        {history.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className={`mb-1 ${
              line.type === 'input' ? 'text-white' :
              line.type === 'error' ? 'text-red-400' :
              'text-green-400'
            }`}
          >
            {line.content}
          </motion.div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <span className="animate-pulse">_</span>
        </form>

        <div ref={bottomRef} />
      </div>
    </div>
  )
}
