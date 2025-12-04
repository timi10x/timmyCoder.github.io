'use client'

import { useMemo } from 'react'
import * as THREE from 'three'

export default function MarsTerrain() {
  // Create terrain with noise
  const terrain = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(200, 200, 100, 100)
    const vertices = geometry.attributes.position.array

    // Add some height variation for Mars-like terrain
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i]
      const z = vertices[i + 1]

      // Simple noise function for terrain
      vertices[i + 2] =
        Math.sin(x * 0.05) * Math.cos(z * 0.05) * 1.5 +
        Math.sin(x * 0.1) * Math.cos(z * 0.1) * 0.8 +
        Math.random() * 0.3
    }

    geometry.computeVertexNormals()
    return geometry
  }, [])

  return (
    <>
      {/* Main terrain */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <primitive object={terrain} />
        <meshStandardMaterial
          color="#cd5c33"
          roughness={0.95}
          metalness={0.1}
        />
      </mesh>

      {/* Additional ground plane for safety */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[300, 300]} />
        <meshStandardMaterial color="#b04523" />
      </mesh>
    </>
  )
}
