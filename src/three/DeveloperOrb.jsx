import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const SparkField = () => {
  const points = useRef(null);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.rotation.y = clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={points}>
      <sphereGeometry args={[2.8, 18, 18]} />
      <pointsMaterial color="#5ddfff" size={0.035} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
};

const Orb = () => {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.elapsedTime * 0.25;
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 2]} />
        <meshStandardMaterial color="#4d7cff" metalness={0.7} roughness={0.2} emissive="#151a3d" emissiveIntensity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.05, 12, 72]} />
        <meshStandardMaterial color="#00f3ff" transparent opacity={0.28} />
      </mesh>
      <SparkField />
    </group>
  );
};

const DeveloperOrb = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 5]} intensity={1} color="#7f85ff" />
      <Orb />
    </Canvas>
  );
};

export default DeveloperOrb;
