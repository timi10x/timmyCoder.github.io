'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky, Stars, PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'
import Rover from './Rover'
import MarsTerrain from './MarsTerrain'
import LocationMarker from './LocationMarker'

interface MarsSceneProps {
  onLocationChange: (location: string | null, distance: number | null) => void
  onRoverPositionChange: (position: [number, number, number]) => void
}

const locations = [
  { id: 'skills', position: [20, 2, -20] as [number, number, number], label: 'Skills Station', icon: '⚙️', color: '#6356E5' },
  { id: 'experience', position: [-25, 2, -15] as [number, number, number], label: 'Experience Hub', icon: '🏢', color: '#2ebd59' },
  { id: 'projects', position: [30, 2, 25] as [number, number, number], label: 'Projects Lab', icon: '🚀', color: '#cd201f' },
  { id: 'blog', position: [-20, 2, 30] as [number, number, number], label: 'Blog Archive', icon: '📝', color: '#f59e0b' },
  { id: 'contact', position: [0, 2, -35] as [number, number, number], label: 'Contact Bay', icon: '📡', color: '#8b5cf6' },
]

function MarsExperience({ onLocationChange, onRoverPositionChange }: MarsSceneProps) {
  const roverRef = useRef({
    position: new THREE.Vector3(0, 0, 0),
    rotation: 0,
    speed: 0,
  })

  const { camera } = useThree()
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({})
  const [mouseDown, setMouseDown] = useState(false)
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 })
  const cameraAngle = useRef({ horizontal: 0, vertical: 0 })

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key.toLowerCase()]: true }))
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      setKeys((prev) => ({ ...prev, [e.key.toLowerCase()]: false }))
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // Mouse controls
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setMouseDown(true)
      setMouseStart({ x: e.clientX, y: e.clientY })
    }

    const handleMouseUp = () => {
      setMouseDown(false)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseDown) {
        const deltaX = e.clientX - mouseStart.x
        const deltaY = e.clientY - mouseStart.y

        cameraAngle.current.horizontal -= deltaX * 0.003
        cameraAngle.current.vertical = Math.max(
          -Math.PI / 3,
          Math.min(Math.PI / 3, cameraAngle.current.vertical - deltaY * 0.003)
        )

        setMouseStart({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseDown, mouseStart])

  useFrame(() => {
    const rover = roverRef.current
    let moving = false

    // Handle movement
    if (keys['w'] || keys['arrowup']) {
      rover.speed = 0.15
      moving = true
    } else if (keys['s'] || keys['arrowdown']) {
      rover.speed = -0.1
      moving = true
    } else {
      rover.speed *= 0.9 // Deceleration
    }

    // Handle rotation
    if (keys['a'] || keys['arrowleft']) {
      rover.rotation += 0.05
    }
    if (keys['d'] || keys['arrowright']) {
      rover.rotation -= 0.05
    }

    // Update position
    if (Math.abs(rover.speed) > 0.01) {
      rover.position.x += Math.sin(rover.rotation) * rover.speed
      rover.position.z += Math.cos(rover.rotation) * rover.speed
    }

    // Clamp position to terrain bounds
    rover.position.x = Math.max(-90, Math.min(90, rover.position.x))
    rover.position.z = Math.max(-90, Math.min(90, rover.position.z))

    // Update camera to follow rover (third-person view with mouse control)
    const cameraDistance = 12
    const cameraHeight = 6
    const cameraOffset = new THREE.Vector3(
      Math.sin(rover.rotation + cameraAngle.current.horizontal) * cameraDistance,
      cameraHeight + Math.sin(cameraAngle.current.vertical) * 5,
      Math.cos(rover.rotation + cameraAngle.current.horizontal) * cameraDistance
    )

    camera.position.lerp(
      new THREE.Vector3(
        rover.position.x - cameraOffset.x,
        rover.position.y + cameraOffset.y,
        rover.position.z - cameraOffset.z
      ),
      0.1
    )

    camera.lookAt(rover.position)

    // Check proximity to locations
    let nearestLocation: string | null = null
    let nearestDistance: number | null = null

    locations.forEach((loc) => {
      const dist = rover.position.distanceTo(new THREE.Vector3(...loc.position))
      if (dist < 15 && (nearestDistance === null || dist < nearestDistance)) {
        nearestLocation = loc.label
        nearestDistance = dist
      }
    })

    onLocationChange(nearestLocation, nearestDistance)
    onRoverPositionChange([rover.position.x, rover.position.y, rover.position.z])
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[50, 50, 25]}
        intensity={1}
        color="#ffaa77"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Mars Sky */}
      <Sky
        sunPosition={[100, 20, 100]}
        turbidity={10}
        rayleigh={2}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />

      {/* Stars */}
      <Stars radius={300} depth={50} count={3000} factor={4} saturation={0} fade />

      {/* Terrain */}
      <MarsTerrain />

      {/* Rover */}
      <Rover
        position={[roverRef.current.position.x, roverRef.current.position.y, roverRef.current.position.z]}
        rotation={roverRef.current.rotation}
        speed={roverRef.current.speed}
      />

      {/* Location Markers */}
      {locations.map((loc) => (
        <LocationMarker
          key={loc.id}
          position={loc.position}
          label={loc.label}
          icon={loc.icon}
          color={loc.color}
        />
      ))}

      {/* Fog for atmosphere */}
      <fog attach="fog" args={['#cc7755', 50, 150]} />
    </>
  )
}

export default function MarsScene({ onLocationChange, onRoverPositionChange }: MarsSceneProps) {
  return (
    <Canvas shadows camera={{ position: [0, 6, 12], fov: 75 }}>
      <MarsExperience
        onLocationChange={onLocationChange}
        onRoverPositionChange={onRoverPositionChange}
      />
    </Canvas>
  )
}
