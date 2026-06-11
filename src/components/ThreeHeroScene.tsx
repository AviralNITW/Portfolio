"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Interactive3DObject({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const pointLight1 = useRef<THREE.PointLight>(null);
  const pointLight2 = useRef<THREE.PointLight>(null);
  const pointLight3 = useRef<THREE.PointLight>(null);
  const groupRef = useRef<THREE.Group>(null);
  
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

    // Breathing scale animation for the entire group (very slow and organic)
    if (groupRef.current) {
      const breathingScale = 1.0 + Math.sin(time * 0.35) * 0.025;
      groupRef.current.scale.set(breathingScale, breathingScale, breathingScale);

      // Smooth mouse-controlled tilt (Apple Vision Pro style)
      if (!isMobile) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.22, 0.025);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.22, 0.025);
      }
    }

    // Slowly rotate central gold-chrome sphere
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.04;
    }

    // Orbiting rotations for the two nested transmissive gold bangles
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.035;
      ring1Ref.current.rotation.y = time * 0.055;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * 0.045;
      ring2Ref.current.rotation.y = -time * 0.06;
      ring2Ref.current.rotation.z = time * 0.025;
    }

    // Dynamic light sweeps following the cursor slowly
    if (!isMobile) {
      if (pointLight1.current) {
        pointLight1.current.position.x = THREE.MathUtils.lerp(pointLight1.current.position.x, mouse.x * 2.5 + 4, 0.04);
        pointLight1.current.position.y = THREE.MathUtils.lerp(pointLight1.current.position.y, mouse.y * 2.5 + 3.5, 0.04);
      }
      if (pointLight2.current) {
        pointLight2.current.position.x = THREE.MathUtils.lerp(pointLight2.current.position.x, mouse.x * 2 - 4, 0.04);
        pointLight2.current.position.y = THREE.MathUtils.lerp(pointLight2.current.position.y, mouse.y * 2 - 3, 0.04);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Fog for atmospheric depth */}
      <fog attach="fog" args={["#050505", 2.2, 5.0]} />

      {/* HDRI Environment for realistic chrome/glass reflections */}
      <Environment preset="studio" />

      {/* Floating Dust Particles */}
      <Sparkles count={55} scale={5.0} size={1.5} speed={0.15} color="#e8d7b5" opacity={0.6} />

      {/* Stars Background */}
      <Stars radius={70} depth={50} count={600} factor={2} saturation={0.5} fade speed={0.8} />

      {/* Volumetric Gold & Purple Glowing Atmosphere (Behind the Sculpture) */}
      <mesh position={[-0.4, 0.4, -0.8]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#ffe8be"
          transparent={true}
          opacity={0.03}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0.4, -0.4, -0.8]}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent={true}
          opacity={0.035}
          depthWrite={false}
        />
      </mesh>

      {/* Luxury Lighting Configuration */}
      <ambientLight intensity={0.15} />
      
      {/* Key Light 1: Back-Right-Rim (Warm Gold edge glow) */}
      <pointLight
        ref={pointLight1}
        position={[3.0, -2.0, -2.5]}
        intensity={isMobile ? 15 : 95}
        color="#ffbc66" /* Rich golden edge reflection */
        decay={1.2}
      />
      
      {/* Key Light 2: Back-Left-Rim (Warm Gold edge glow) */}
      <pointLight
        ref={pointLight2}
        position={[-3.0, 2.0, -2.5]}
        intensity={isMobile ? 12 : 85}
        color="#ffb855" /* Warm gold/amber rim */
        decay={1.2}
      />
      
      {/* Key Light 3: Front-Right-Top (Soft Gold Face Highlight) */}
      <directionalLight 
        position={[2.5, 2.5, 3.0]} 
        intensity={18} 
        color="#ffe3b3" 
      />

      {/* Accent Light 4: Purple Rim Light (Back-Top-Right) */}
      <pointLight
        ref={pointLight3}
        position={[2.5, 3.0, -2.5]}
        intensity={isMobile ? 10 : 55}
        color="#a855f7" /* Rich purple rim */
        decay={1.2}
      />

      {/* 3D Structure Group */}
      <group scale={isMobile ? 0.88 : 1.30}>
        
        {/* Central Black Chrome Sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.42, 64, 64]} />
          <meshPhysicalMaterial
            color="#030303" /* Deep black obsidian */
            metalness={0.98}
            roughness={0.02}
            clearcoat={1.0}
            clearcoatRoughness={0.02}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* Nested Torus 1 (Inner Bangle - Wide Clear Glass) */}
        <mesh ref={ring1Ref} rotation={[0.8, -0.5, -0.5]} scale={[1.0, 1.0, 4.2]}>
          <torusGeometry args={[0.82, 0.065, 32, 120]} />
          <meshPhysicalMaterial
            color="#050505" /* Dark smoked glass body */
            transparent={true}
            opacity={0.35} /* Clear transmissive depth */
            roughness={0.01} /* Razor-sharp reflections */
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.01}
            ior={2.2} /* High refraction index for strong edge Fresnel glow */
            envMapIntensity={0.25} /* Reduces white studio environment wash */
          />
        </mesh>

        {/* Nested Torus 2 (Outer Bangle - Wide Clear Glass) */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 4, -Math.PI / 6, Math.PI / 8]} scale={[1.0, 1.0, 5.5]}>
          <torusGeometry args={[1.04, 0.05, 32, 120]} />
          <meshPhysicalMaterial
            color="#050505"
            transparent={true}
            opacity={0.35}
            roughness={0.01}
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.01}
            ior={2.2}
            envMapIntensity={0.25}
          />
        </mesh>

      </group>
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
      <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
        {/* Sleek loading state */}
        <div className="w-8 h-8 rounded-full border border-t-transparent border-[#e8d7b5] animate-spin" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 45 }}
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
