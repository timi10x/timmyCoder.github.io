'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface MacBookProps {
  openProgress: number // 0 = closed, 1 = fully open
}

export default function MacBook({ openProgress }: MacBookProps) {
  const lidRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Mesh>(null)

  // Lid rotation based on open progress (0° to 120°)
  const lidRotation = -openProgress * (Math.PI * 0.66)

  useEffect(() => {
    if (lidRef.current) {
      lidRef.current.rotation.x = lidRotation
    }
  }, [lidRotation])

  // Gentle floating animation when closed
  useFrame((state) => {
    if (openProgress < 0.1) {
      const time = state.clock.getElapsedTime()
      if (lidRef.current) {
        lidRef.current.position.y = Math.sin(time * 0.5) * 0.05
      }
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Base (Keyboard part) */}
      <group position={[0, 0, 0]}>
        {/* Bottom case */}
        <RoundedBox args={[6, 0.2, 4]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#d1d1d6"
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>

        {/* Keyboard area */}
        <mesh position={[0, 0.11, 0]}>
          <boxGeometry args={[5.5, 0.02, 3.5]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* Trackpad */}
        <RoundedBox args={[2, 0.02, 1.5]} radius={0.05} position={[0, 0.11, 1]}>
          <meshStandardMaterial color="#2a2a2a" metalness={0.5} roughness={0.3} />
        </RoundedBox>

        {/* Apple logo on base */}
        <Sphere args={[0.15, 32, 32]} position={[0, 0.12, -1.5]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </group>

      {/* Lid (Screen part) - Rotates around back edge */}
      <group
        ref={lidRef}
        position={[0, 0.1, -2]}
        rotation={[lidRotation, 0, 0]}
      >
        {/* Screen back */}
        <RoundedBox args={[6, 4, 0.2]} radius={0.1} position={[0, 2, 0]}>
          <meshStandardMaterial
            color="#d1d1d6"
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>

        {/* Screen */}
        <mesh
          ref={screenRef}
          position={[0, 2, 0.11]}
        >
          <planeGeometry args={[5.5, 3.5]} />
          <meshStandardMaterial
            color="#000000"
            emissive="#1a1a2e"
            emissiveIntensity={openProgress * 0.5}
          />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 2, 0.12]}>
          <planeGeometry args={[5.6, 3.6]} />
          <meshStandardMaterial color="#0a0a0a" />
        </mesh>

        {/* Apple logo on lid */}
        <Sphere args={[0.2, 32, 32]} position={[0, 2, -0.11]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Sphere>

        {/* Notch (modern MacBook style) */}
        <mesh position={[0, 3.6, 0.11]}>
          <boxGeometry args={[0.8, 0.15, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Lighting */}
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[-5, 3, 2]} intensity={0.5} color="#6356E5" />
      <pointLight position={[5, 3, 2]} intensity={0.5} color="#2ebd59" />
    </group>
  )
}
