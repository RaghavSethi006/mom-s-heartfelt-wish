import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  // Generate particles in a sphere
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 15 + Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
    
    // Soft pastel colors
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      // Rose
      colors[i3] = 1;
      colors[i3 + 1] = 0.7;
      colors[i3 + 2] = 0.8;
    } else if (colorChoice < 0.66) {
      // Lavender
      colors[i3] = 0.8;
      colors[i3 + 1] = 0.7;
      colors[i3 + 2] = 1;
    } else {
      // Peach
      colors[i3] = 1;
      colors[i3 + 1] = 0.85;
      colors[i3 + 2] = 0.7;
    }
  }
  
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });
  
  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.15}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export const ParticleField = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleSystem />
      </Canvas>
    </div>
  );
};
