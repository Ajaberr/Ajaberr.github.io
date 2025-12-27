import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './Background3D.css';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const x = Math.cos(theta) * Math.cos(phi) * 150;
      const y = Math.sin(phi) * 150;
      const z = Math.sin(theta) * Math.cos(phi) * 150;
      sphere.set([x, y, z], i * 3);
    }
    return [sphere];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#64FFDA"
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function WaveGeometry() {
  const mesh = useRef();
  const count = 100;
  const sep = 3;

  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    const positions = mesh.current.geometry.attributes.position;
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y =
          Math.sin(state.clock.elapsedTime * 0.5 + x * 0.05) * 5 +
          Math.sin(state.clock.elapsedTime * 0.3 + z * 0.05) * 5;
        positions.setY(i, y);
        i++;
      }
    }
    positions.needsUpdate = true;
  });

  const positions = useMemo(() => {
    const positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        positions.push(x, 0, z);
      }
    }
    return new Float32Array(positions);
  }, []);

  return (
    <points ref={mesh} position={[0, -50, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        color="#91C8D9"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

const Background3D = () => {
  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
        <WaveGeometry />
      </Canvas>
    </div>
  );
};

export default Background3D;
