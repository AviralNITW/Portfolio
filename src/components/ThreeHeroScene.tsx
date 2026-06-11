"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function Interactive3DObject({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointLight1 = useRef<THREE.PointLight>(null);
  const pointLight2 = useRef<THREE.PointLight>(null);
  
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate the object slowly
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
      
      if (!isMobile) {
        // Smoothly tilt object towards cursor
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.6, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.6, 0.05);
      }
      
      // Pulse scale slightly
      const scaleFactor = 1.35 + Math.sin(time * 0.8) * 0.05;
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    if (!isMobile) {
      // Move lights dynamically to sweep reflections across the glass geometry
      if (pointLight1.current) {
        pointLight1.current.position.x = THREE.MathUtils.lerp(pointLight1.current.position.x, mouse.x * 4, 0.07);
        pointLight1.current.position.y = THREE.MathUtils.lerp(pointLight1.current.position.y, mouse.y * 4 + 2, 0.07);
      }
      if (pointLight2.current) {
        pointLight2.current.position.x = THREE.MathUtils.lerp(pointLight2.current.position.x, -mouse.x * 4, 0.07);
        pointLight2.current.position.y = THREE.MathUtils.lerp(pointLight2.current.position.y, -mouse.y * 4 - 2, 0.07);
      }
    }
  });

  return (
    <group>
      {/* Luxury lighting configuration */}
      <ambientLight intensity={0.4} />
      
      <pointLight
        ref={pointLight1}
        position={[3, 3, 2]}
        intensity={isMobile ? 3 : 5}
        color="#c5a880" /* Luxury Gold */
        decay={1.2}
      />
      <pointLight
        ref={pointLight2}
        position={[-3, -3, 2]}
        intensity={isMobile ? 2.5 : 4}
        color="#00f2fe" /* Sapphire Blue */
        decay={1.2}
      />
      <directionalLight 
        position={[0, 5, -3]} 
        intensity={2.5} 
        color="#9b51e0" /* Amethyst Purple back glow */ 
      />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          {/* TorusKnot creates a complex structure that shows off refraction and light highlights */}
          <torusKnotGeometry args={[1.0, 0.32, isMobile ? 80 : 160, isMobile ? 12 : 24]} />
          
          {/* High-end glass material with refraction and chromatic aberration */}
          <MeshTransmissionMaterial
            backside={!isMobile} // Disable backside transmission on mobile for performance
            backsideThickness={0.15}
            thickness={0.6}
            ior={1.45}
            transmission={0.92}
            chromaticAberration={0.06}
            anisotropy={0.2}
            roughness={0.06}
            distortion={0.25}
            distortionScale={0.15}
            temporalDistortion={0.1}
            color="#ffffff"
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function ThreeHeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-[#030306] flex items-center justify-center">
        {/* Sleek loading state */}
        <div className="w-8 h-8 rounded-full border border-t-transparent border-[#c5a880] animate-spin" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: !isMobile, alpha: true, preserveDrawingBuffer: true }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Interactive3DObject isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
