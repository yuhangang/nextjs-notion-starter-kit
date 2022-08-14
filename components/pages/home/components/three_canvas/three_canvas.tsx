import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

export default function ThreeCanvas() {
    return <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5] }}>
      <pointLight color='indianred' />
      <pointLight position={[10, 10, -10]} color='orange' />
      <pointLight position={[-10, -10, 10]} color='lightblue' />
      <Content />
    </Canvas>
  }
  
  function Content() {
    const ref = useRef<THREE.Group>()
    useFrame(
      () =>
        (ref.current.rotation.x =
          ref.current.rotation.y =
          ref.current.rotation.z +=
            0.01)
    )
    return (
      <group ref={ref}>
        <Dodecahedron position={[-2, 0, 0]} />
        <Dodecahedron position={[0, -2, -3]} />
        <Dodecahedron position={[2, 0, 0]} />
      </group>
    )
  }

  function Dodecahedron({ ...props }) {
    return (
      <mesh {...props}>
        <dodecahedronGeometry />
        <meshStandardMaterial roughness={0.75} emissive='#404057' />
        <Html distanceFactor={10}>
          <div>
            hello <br />
            world
          </div>
        </Html>
      </mesh>
    )
  }