'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingCodeProps {
  scrollY: number
}

const codeSnippets = [
  '{ kotlin }',
  '<SwiftUI>',
  'fun build()',
  '@Composable',
  'class Mobile',
  'interface App',
  'async/await',
  'MVVM',
]

export default function FloatingCode({ scrollY }: FloatingCodeProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = time * 0.1
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.5
  })

  return (
    <group ref={groupRef}>
      {codeSnippets.map((snippet, index) => {
        const angle = (index / codeSnippets.length) * Math.PI * 2
        const radius = 8
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <Float
            key={snippet}
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <Text
              position={[x, Math.sin(index) * 2, z]}
              fontSize={0.3}
              color="#6356E5"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
            >
              {snippet}
            </Text>
          </Float>
        )
      })}
    </group>
  )
}
