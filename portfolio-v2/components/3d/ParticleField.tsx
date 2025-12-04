'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count: number
  scrollY: number
}

export default function ParticleField({ count, scrollY }: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null)

  // Generate random particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }

    return positions
  }, [count])

  // Generate random colors for particles
  const particlesColor = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const color1 = new THREE.Color('#6356E5') // primary
    const color2 = new THREE.Color('#2ebd59') // secondary
    const color3 = new THREE.Color('#cd201f') // accent

    for (let i = 0; i < count; i++) {
      const mixedColor = Math.random()
      let color: THREE.Color

      if (mixedColor < 0.33) {
        color = color1
      } else if (mixedColor < 0.66) {
        color = color2
      } else {
        color = color3
      }

      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return colors
  }, [count])

  // Animate particles
  useFrame((state) => {
    if (!points.current) return

    const time = state.clock.getElapsedTime()

    // Rotate particle field
    points.current.rotation.y = time * 0.05
    points.current.rotation.x = Math.sin(time * 0.1) * 0.1

    // React to scroll
    points.current.position.z = scrollY * 0.001
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesColor.length / 3}
          array={particlesColor}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
