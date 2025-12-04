'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Cylinder, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface LocationMarkerProps {
  position: [number, number, number]
  label: string
  icon: string
  color: string
  onClick?: () => void
}

export default function LocationMarker({ position, label, icon, color, onClick }: LocationMarkerProps) {
  const markerRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (markerRef.current) {
      // Gentle floating animation
      markerRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2
      // Rotate to always face camera
      markerRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <group ref={markerRef} position={position}>
      {/* Base pillar */}
      <Cylinder args={[0.3, 0.3, 4]} position={[0, 2, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Cylinder>

      {/* Glowing top sphere */}
      <Sphere args={[0.5, 32, 32]} position={[0, 4.5, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Sphere>

      {/* Holographic text */}
      <Text
        position={[0, 5.5, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor={color}
      >
        {icon}
      </Text>

      <Text
        position={[0, 4.5, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor={color}
      >
        {label}
      </Text>

      {/* Point light for glow effect */}
      <pointLight position={[0, 4.5, 0]} color={color} intensity={2} distance={10} />

      {/* Clickable area */}
      <mesh position={[0, 2, 0]} onClick={onClick} visible={false}>
        <cylinderGeometry args={[2, 2, 6]} />
      </mesh>
    </group>
  )
}
