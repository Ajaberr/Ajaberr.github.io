import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import './NarutoFireball.css';

function Fireball({ scrollProgress }) {
  const fireballRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (!fireballRef.current) return;

    // Rotate the fireball
    fireballRef.current.rotation.y += 0.02;
    fireballRef.current.rotation.x += 0.01;

    // Pulsing effect
    const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
    fireballRef.current.scale.set(pulse, pulse, pulse);

    // Follow scroll - move vertically
    const targetY = (scrollProgress - 0.5) * 8;
    fireballRef.current.position.y = THREE.MathUtils.lerp(
      fireballRef.current.position.y,
      targetY,
      0.05
    );

    // Spiral motion
    const spiral = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    fireballRef.current.position.x = spiral;

    // Particles rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= 0.01;
    }
  });

  // Create particle system for fire effect
  const particleCount = 100;
  const particles = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 2 + Math.random() * 1;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    particles[i3] = radius * Math.sin(phi) * Math.cos(theta);
    particles[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particles[i3 + 2] = radius * Math.cos(phi);
  }

  return (
    <group>
      {/* Main Fireball */}
      <Sphere ref={fireballRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ff4500"
          emissive="#ff6600"
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>

      {/* Inner core - brighter */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#ffff00"
          emissive="#ffaa00"
          emissiveIntensity={3}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Particle cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#ff6600"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Glow effect */}
      <Sphere args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Point light for illumination */}
      <pointLight position={[0, 0, 0]} intensity={3} distance={10} color="#ff6600" />
    </group>
  );
}

function FireTrail({ scrollProgress }) {
  const trailRef = useRef();

  useFrame((state) => {
    if (!trailRef.current) return;

    // Rotate trail
    trailRef.current.rotation.z += 0.02;

    // Position based on scroll
    const targetY = (scrollProgress - 0.5) * 8 - 1;
    trailRef.current.position.y = THREE.MathUtils.lerp(
      trailRef.current.position.y,
      targetY,
      0.03
    );

    const spiral = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    trailRef.current.position.x = spiral;
  });

  return (
    <mesh ref={trailRef} position={[0, -1, -1]}>
      <coneGeometry args={[0.5, 2, 8]} />
      <meshBasicMaterial
        color="#ff8800"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

const NarutoFireball = ({ scrollProgress = 0 }) => {
  return (
    <div className="naruto-fireball-container">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <Fireball scrollProgress={scrollProgress} />
        <FireTrail scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default NarutoFireball;
