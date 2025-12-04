'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import MacBook from './MacBook'

interface MacBookSceneProps {
  openProgress: number
}

export default function MacBookScene({ openProgress }: MacBookSceneProps) {
  return (
    <Canvas shadows>
      <PerspectiveCamera
        makeDefault
        position={[0, 4, 8]}
        fov={50}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        <MacBook openProgress={openProgress} />
      </Suspense>

      {/* Disable controls when opening */}
      {openProgress < 0.1 && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      )}
    </Canvas>
  )
}
