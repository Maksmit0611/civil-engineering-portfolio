import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Canvas3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  background?: string;
}

export default function Canvas3D({
  children,
  cameraPosition = [0, 0, 5],
  enableControls = true,
  background = '#0f172a',
}: Canvas3DProps) {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera position={cameraPosition} makeDefault fov={75} />
      <color attach="background" args={[background]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#00d4ff" />
      
      <Suspense fallback={null}>
        {children}
      </Suspense>

      {enableControls && <OrbitControls autoRotate autoRotateSpeed={2} />}
    </Canvas>
  );
}
