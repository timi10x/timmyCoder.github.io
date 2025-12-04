'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Text, Html } from '@react-three/drei'
import * as THREE from 'three'

interface PhoneDisplayProps {
  position: [number, number, number]
  company: string
  appName: string
  description: string
  color: string
  onClick: () => void
}

export default function PhoneDisplay({ position, company, appName, description, color, onClick }: PhoneDisplayProps) {
  const phoneRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!phoneRef.current) return

    // Gentle floating animation
    phoneRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1

    // Slight rotation when hovered
    if (hovered) {
      phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group ref={phoneRef} position={position}>
      {/* Phone Body */}
      <RoundedBox
        args={[0.8, 1.6, 0.1]}
        radius={0.1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={hovered ? color : '#1a1a1a'}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[0.7, 1.4, 0.05]}
        radius={0.05}
        position={[0, 0, 0.06]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </RoundedBox>

      {/* App Icon/Logo area */}
      <mesh position={[0, 0.3, 0.12]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>

      {/* Company Text */}
      <Text
        position={[0, -0.2, 0.12]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.6}
      >
        {company}
      </Text>

      {/* App Name */}
      <Text
        position={[0, -0.35, 0.12]}
        fontSize={0.06}
        color="#cccccc"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.6}
      >
        {appName}
      </Text>

      {/* Pedestal */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 0.2, 32]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Pedestal Label */}
      <Text
        position={[0, -0.95, 0.6]}
        fontSize={0.05}
        color="#888888"
        anchorX="center"
        anchorY="middle"
      >
        Click to explore
      </Text>

      {/* Ambient glow */}
      <pointLight position={[0, 0, 1]} intensity={hovered ? 2 : 1} color={color} distance={3} />
    </group>
  )
}
