'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import PhoneDisplay from './PhoneDisplay'

interface MuseumProps {
  onPhoneClick: (index: number) => void
}

const exhibits = [
  {
    company: 'Chaka Stocks',
    appName: 'Stock Trading',
    description: 'Real-time stock trading and investment management',
    color: '#cd201f',
    position: [-3, 1.5, 0] as [number, number, number],
  },
  {
    company: 'Crop2Cash',
    appName: 'Paddybase',
    description: 'Agricultural supply chain management',
    color: '#2ebd59',
    position: [0, 1.5, 0] as [number, number, number],
  },
  {
    company: 'Expanse Tech',
    appName: 'Mobile Solutions',
    description: 'Scalable mobile architecture',
    color: '#6356E5',
    position: [3, 1.5, 0] as [number, number, number],
  },
]

export default function Museum({ onPhoneClick }: MuseumProps) {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={60} />

        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow />

        {/* Environment */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Grid lines on floor */}
        <gridHelper args={[20, 20, '#333333', '#1a1a1a']} position={[0, 0.01, 0]} />

        {/* Back wall */}
        <mesh position={[0, 5, -5]}>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color="#0f0f0f" />
        </mesh>

        {/* Phone Displays */}
        {exhibits.map((exhibit, index) => (
          <PhoneDisplay
            key={exhibit.company}
            position={exhibit.position}
            company={exhibit.company}
            appName={exhibit.appName}
            description={exhibit.description}
            color={exhibit.color}
            onClick={() => onPhoneClick(index)}
          />
        ))}

        {/* Museum Title */}
        <group position={[0, 7, -4.9]}>
          <mesh>
            <boxGeometry args={[8, 1, 0.1]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        </group>

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
