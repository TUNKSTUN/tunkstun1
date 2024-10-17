import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Trail, BakeShadows } from "@react-three/drei";
import * as THREE from "three";

// Main component for the orbiting atoms
const OrbitingAtoms = () => {
  return (
    <div style={styles.container}>
      <Canvas
        shadows
        camera={{
          position: [0, 10, 30], // Adjusted camera position for better visibility
          fov: 55,
        }}
        gl={{ antialias: false }}
      >
        <CameraMovement />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={10} castShadow />
        <PulsatingSun />
        <Atoms />
        <Stars />
        <BakeShadows />
      </Canvas>
    </div>
  );
};

// Camera movement component with slight y-axis oscillation
const CameraMovement = () => {
  useFrame(({ camera, clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const radius = 30; // Camera distance from the center
    const speed = 0.1; // Speed of the camera movement
    const yOscillationAmplitude = 5; // Amplitude of the y-axis movement
    const yOscillationSpeed = 0.5; // Speed of the up-and-down movement

    const x = -30;
    const z = Math.cos(elapsedTime * speed) * radius;

    const y = -5 + Math.sin(elapsedTime * yOscillationSpeed) * yOscillationAmplitude;

    camera.position.set(x, y, z);
    camera.lookAt(-1, -1, 20);
  });

  return null;
};
const PulsatingSun = () => {
  const sunRef = useRef();

  useFrame(({ clock }) => {
    const scale = 1 + Math.sin(clock.getElapsedTime() * 0.5) * 0.02; // Reduced scaling effect
    sunRef.current.scale.set(scale, scale, scale); // Scale the sun
  });

  return (
    <mesh ref={sunRef} castShadow>
      <sphereGeometry args={[5.0, 32, 32]} />
      <meshBasicMaterial color="orange" /> {/* Set color to yellow */}
    </mesh>
  );
};



// Atom component with pixel art texture
const Atom = ({ radius, speed, inclination, eccentricity }) => {
  const ref = useRef();
  const [color, setColor] = useState("white");
  const texture = useMemo(() => new THREE.TextureLoader().load('/path/to/pixel-atom.png'), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const x = Math.cos(t) * radius * (1 + eccentricity);
    const y = Math.sin(t) * radius * Math.sin(inclination);
    const z = Math.sin(t) * radius * Math.cos(inclination);
    ref.current.position.set(x, y, z);

    const hue = (t * 10) % 360;
    setColor(`hsl(${hue}, 100%, 50%)`);
  });

  return (
    <Trail width={5} length={1} color={color} attenuation={(t) => t * t}>
      <Sphere ref={ref} args={[0.9, 32, 32]} castShadow>
      <meshBasicMaterial color="white" />
      </Sphere>
    </Trail>
  );
};

// Component to manage multiple atoms with more varied orbital parameters
const Atoms = () => {
  const orbitParams = useMemo(() => [
    { radius: 6, speed: 0.5, inclination: -0.2, eccentricity: 0.1 },
    { radius: 8.5, speed: 0.6, inclination: 0.4, eccentricity: 0.15 },
    { radius: 9, speed: 0.5, inclination: -0.5, eccentricity: 0.4 },
    { radius: 10.5, speed: 0.8, inclination: 0.15, eccentricity: 0.5 },
    { radius: 16, speed: 0.2, inclination: -0.20, eccentricity: 2 },
    { radius: 12.5, speed: 0.3, inclination: 0.37, eccentricity: 0.2 },
  ], []);
  
  return (
    <>
      {orbitParams.map((params, index) => (
        <Atom key={index} {...params} />
      ))}
    </>
  );
};

// Stars component to scatter tiny spheres around the scene
const Stars = () => {
  const starCount = 1000;
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < starCount; i++) {
      positions.push([
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      ]);
    }
    return positions;
  }, [starCount]);

  return (
    <>
      {starPositions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </>
  );
};

// Styles for the canvas container and text overlay
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "black",
  },
};

export default OrbitingAtoms;
