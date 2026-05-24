import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const FloatingCube = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#00f3ff"
        emissive="#00f3ff"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

export default FloatingCube;
