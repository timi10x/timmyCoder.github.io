'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TechNode {
  id: string
  name: string
  category: 'language' | 'framework' | 'tool' | 'database'
  connections: string[]
  x: number
  y: number
}

const techNodes: TechNode[] = [
  { id: 'kotlin', name: 'Kotlin', category: 'language', connections: ['android', 'mvvm', 'coroutines'], x: 200, y: 100 },
  { id: 'swift', name: 'Swift', category: 'language', connections: ['ios', 'swiftui', 'combine'], x: 400, y: 100 },
  { id: 'dart', name: 'Dart', category: 'language', connections: ['flutter', 'bloc'], x: 300, y: 250 },

  { id: 'android', name: 'Android', category: 'framework', connections: ['firebase', 'room'], x: 150, y: 250 },
  { id: 'ios', name: 'iOS', category: 'framework', connections: ['firebase', 'coredata'], x: 450, y: 250 },
  { id: 'flutter', name: 'Flutter', category: 'framework', connections: ['firebase', 'sqlite'], x: 300, y: 400 },

  { id: 'mvvm', name: 'MVVM', category: 'tool', connections: [], x: 100, y: 400 },
  { id: 'swiftui', name: 'SwiftUI', category: 'tool', connections: [], x: 500, y: 400 },
  { id: 'bloc', name: 'BLoC', category: 'tool', connections: [], x: 350, y: 550 },

  { id: 'firebase', name: 'Firebase', category: 'database', connections: [], x: 200, y: 550 },
  { id: 'room', name: 'Room', category: 'database', connections: [], x: 50, y: 550 },
  { id: 'sqlite', name: 'SQLite', category: 'database', connections: [], x: 450, y: 550 },

  { id: 'coroutines', name: 'Coroutines', category: 'tool', connections: [], x: 250, y: 50 },
  { id: 'combine', name: 'Combine', category: 'tool', connections: [], x: 350, y: 50 },
  { id: 'coredata', name: 'CoreData', category: 'database', connections: [], x: 550, y: 550 },
]

export default function TechStackGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language': return 'bg-primaryblue text-white'
      case 'framework': return 'bg-primaryivory border-2 border-primaryblue text-primaryblue'
      case 'tool': return 'bg-white border-2 border-primaryblue text-primaryblue'
      case 'database': return 'bg-primaryblue/20 border-2 border-primaryblue text-primaryblue'
      default: return 'bg-white text-primaryblue'
    }
  }

  const isConnected = (node1: string, node2: string) => {
    const n1 = techNodes.find(n => n.id === node1)
    const n2 = techNodes.find(n => n.id === node2)
    return n1?.connections.includes(node2) || n2?.connections.includes(node1)
  }

  const shouldHighlightConnection = (from: string, to: string) => {
    if (!hoveredNode && !selectedNode) return false
    const activeNode = selectedNode || hoveredNode
    return (from === activeNode || to === activeNode) && isConnected(from, to)
  }

  return (
    <div className="relative bg-white border-2 border-primaryblue rounded-[10px] p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-black text-primaryblue mb-2">Tech Stack Network</h3>
        <p className="text-sm text-primaryblue/60">Click or hover to explore connections</p>
      </div>

      <svg className="w-full" viewBox="0 0 600 600" style={{ minHeight: '400px' }}>
        {/* Draw connections */}
        {techNodes.map((node) =>
          node.connections.map((connId) => {
            const connNode = techNodes.find((n) => n.id === connId)
            if (!connNode) return null

            const isHighlighted = shouldHighlightConnection(node.id, connNode.id)

            return (
              <motion.line
                key={`${node.id}-${connId}`}
                x1={node.x}
                y1={node.y}
                x2={connNode.x}
                y2={connNode.y}
                stroke={isHighlighted ? '#243DE8' : '#243DE840'}
                strokeWidth={isHighlighted ? 3 : 1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            )
          })
        )}

        {/* Draw nodes */}
        {techNodes.map((node) => {
          const isActive = hoveredNode === node.id || selectedNode === node.id
          const isConnectedToActive = (hoveredNode || selectedNode) && isConnected(node.id, hoveredNode || selectedNode || '')

          return (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 35 : isConnectedToActive ? 30 : 25}
                className={getCategoryColor(node.category)}
                fill="currentColor"
                stroke="#243DE8"
                strokeWidth={isActive ? 3 : 2}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                style={{ cursor: 'pointer' }}
                whileHover={{ scale: 1.2 }}
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold pointer-events-none select-none"
                fill={node.category === 'language' ? 'white' : '#243DE8'}
                style={{ fontSize: isActive ? '14px' : '10px' }}
              >
                {node.name}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primaryblue rounded-full" />
          <span className="text-primaryblue/70">Language</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primaryivory border-2 border-primaryblue rounded-full" />
          <span className="text-primaryblue/70">Framework</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border-2 border-primaryblue rounded-full" />
          <span className="text-primaryblue/70">Tool</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primaryblue/20 border-2 border-primaryblue rounded-full" />
          <span className="text-primaryblue/70">Database</span>
        </div>
      </div>
    </div>
  )
}
