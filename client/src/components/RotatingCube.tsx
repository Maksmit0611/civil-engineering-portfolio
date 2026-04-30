import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial
        color="#00d4ff"
        emissive="#0088ff"
        shininess={100}
        wireframe={false}
      />
      
      {/* Edges for 3D effect */}
      <meshStandardMaterial
        color="#00d4ff"
        metalness={0.8}
        roughness={0.2}
        emissive="#0066ff"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
