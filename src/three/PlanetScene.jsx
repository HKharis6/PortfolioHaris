import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Asteroid = ({ position, scale, color }) => {
  const mesh = useRef(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.elapsedTime * 0.2;
      mesh.current.rotation.y = clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} roughness={0.6} metalness={0.4} />
    </mesh>
  );
};

const Planet = () => {
  const planetRef = useRef(null);
  const ringRef = useRef(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = clock.elapsedTime * 0.08;
      planetRef.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.14;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={planetRef}>
        <sphereGeometry args={[2.35, 40, 40]} />
        <meshStandardMaterial color="#161a34" metalness={0.7} roughness={0.25} emissive="#0a3f7f" emissiveIntensity={0.12} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.08, 12, 72]} />
        <meshBasicMaterial color="#6f45ff" transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial color="#17b7ff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

const PlanetScene = () => {
  const asteroidPositions = useMemo(
    () => [
      { position: [4.7, 1.6, -2.5], scale: 0.5, color: '#6b5cff' },
      { position: [-4.2, 0.8, -3], scale: 0.45, color: '#00ecff' },
      { position: [1.5, -3.2, -2], scale: 0.36, color: '#e35fff' },
      { position: [-1.8, -2.2, -1.7], scale: 0.32, color: '#8f6bff' }
    ],
    []
  );

  const particles = useMemo(
    () => new Array(42).fill().map(() => ({
      position: [
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 25
      ],
      scale: Math.random() * 0.04 + 0.01
    })),
    []
  );

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 12], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
    >
      <fog attach="fog" args={['#050713', 8, 20]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#6fd6ff" />
      <pointLight position={[-5, -3, 5]} intensity={0.7} color="#b97bff" />
      <Planet />
      {asteroidPositions.map((props, index) => (
        <Asteroid key={index} {...props} />
      ))}
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#61dcff" transparent opacity={0.45} />
        </mesh>
      ))}
    </Canvas>
  );
};

export default PlanetScene;
