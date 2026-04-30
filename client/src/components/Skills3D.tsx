import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Skill3DProps {
  skill: string;
  level: number;
  color: string;
  position: [number, number, number];
}

export function Skill3D({ skill, level, color, position }: Skill3DProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={Math.max(0.5, level / 100)}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        shininess={100}
      />
    </mesh>
  );
}
