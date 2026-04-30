import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function RotatingPyramid() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color="#00d4ff"
        emissive="#0088ff"
        shininess={100}
      />
    </mesh>
  );
}

export function FloatingOctahedron() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <octahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color="#ff00ff"
        emissive="#cc00ff"
        shininess={100}
      />
    </mesh>
  );
}

export function RotatingIcosahedron() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.3}>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhongMaterial
        color="#00ff88"
        emissive="#00cc66"
        shininess={100}
      />
    </mesh>
  );
}
