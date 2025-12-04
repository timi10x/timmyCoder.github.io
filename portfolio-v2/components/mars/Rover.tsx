'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Sphere, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

interface RoverProps {
  position: [number, number, number]
  rotation: number
  speed: number
}

export default function Rover({ position, rotation, speed }: RoverProps) {
  const roverRef = useRef<THREE.Group>(null)
  const wheelRefs = useRef<(THREE.Group | null)[]>([])

  useFrame(() => {
    // Rotate wheels based on speed
    wheelRefs.current.forEach((wheel) => {
      if (wheel && speed !== 0) {
        wheel.rotation.x += speed * 0.5
      }
    })
  })

  return (
    <group ref={roverRef} position={position} rotation={[0, rotation, 0]}>
      {/* Rover Body */}
      <group position={[0, 0.8, 0]}>
        {/* Main chassis */}
        <RoundedBox args={[2, 0.6, 3]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.3} />
        </RoundedBox>

        {/* Solar panels */}
        <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.05, 2]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Camera mast */}
        <Cylinder args={[0.1, 0.1, 1.5]} position={[0, 0.75, -0.5]}>
          <meshStandardMaterial color="#888888" metalness={0.7} roughness={0.3} />
        </Cylinder>

        {/* Camera head */}
        <RoundedBox args={[0.4, 0.3, 0.3]} radius={0.05} position={[0, 1.5, -0.5]}>
          <meshStandardMaterial color="#666666" metalness={0.6} roughness={0.4} />
        </RoundedBox>

        {/* Camera lenses */}
        <Sphere args={[0.08, 16, 16]} position={[-0.1, 1.5, -0.65]}>
          <meshStandardMaterial color="#000000" emissive="#4444ff" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[0.1, 1.5, -0.65]}>
          <meshStandardMaterial color="#000000" emissive="#4444ff" emissiveIntensity={0.3} />
        </Sphere>

        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.8]} position={[0.8, 0.4, 0.5]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial color="#999999" />
        </Cylinder>
      </group>

      {/* Wheels */}
      {[
        [-0.9, 0.3, -1.2], // Front left
        [0.9, 0.3, -1.2],  // Front right
        [-0.9, 0.3, 1.2],  // Rear left
        [0.9, 0.3, 1.2],   // Rear right
      ].map((pos, i) => (
        <group
          key={i}
          ref={(el) => (wheelRefs.current[i] = el)}
          position={pos as [number, number, number]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <Cylinder args={[0.35, 0.35, 0.3, 16]}>
            <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.8} />
          </Cylinder>
          {/* Wheel treads */}
          {Array.from({ length: 8 }).map((_, j) => (
            <mesh
              key={j}
              position={[
                Math.cos((j / 8) * Math.PI * 2) * 0.36,
                Math.sin((j / 8) * Math.PI * 2) * 0.36,
                0,
              ]}
              rotation={[0, 0, (j / 8) * Math.PI * 2]}
            >
              <boxGeometry args={[0.1, 0.05, 0.3]} />
              <meshStandardMaterial color="#1a1a1a" />
            </mesh>
          ))}
        </group>
      ))}

      {/* Astronaut */}
      <group position={[0, 2, 0]}>
        {/* Helmet */}
        <Sphere args={[0.35, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>

        {/* Visor */}
        <Sphere args={[0.33, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#1a1a3e"
            emissive="#6356E5"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Sphere>

        {/* Body */}
        <Cylinder args={[0.3, 0.35, 0.8]} position={[0, -0.6, 0]}>
          <meshStandardMaterial color="#eeeeee" />
        </Cylinder>

        {/* Life support backpack */}
        <RoundedBox args={[0.4, 0.5, 0.2]} radius={0.05} position={[0, -0.5, 0.3]}>
          <meshStandardMaterial color="#cccccc" metalness={0.5} />
        </RoundedBox>
      </group>

      {/* Headlights */}
      <spotLight
        position={[0, 1, -1.5]}
        angle={0.5}
        penumbra={0.5}
        intensity={2}
        distance={20}
        color="#ffffff"
        castShadow
      />
    </group>
  )
}
