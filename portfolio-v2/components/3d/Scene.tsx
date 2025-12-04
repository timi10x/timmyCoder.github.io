'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import ParticleField from './ParticleField'
import FloatingCode from './FloatingCode'

export default function Scene() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      className="w-full h-full"
    >
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />

      {/* 3D Elements */}
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleField count={1000} scrollY={scrollY} />
        <FloatingCode scrollY={scrollY} />
      </Suspense>

      {/* Controls - disable for production, enable for development */}
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  )
}
