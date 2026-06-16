"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";

// Dynamically import ThreeHeroScene to prevent SSR/Hydration errors
const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(500px circle at ${e.clientX}px ${e.clientY}px, rgba(232, 215, 181, 0.04), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505] pt-36 pb-12"
    >
      {/* Layer 1: Cinematic Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10" 
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(5, 5, 5, 0.8) 100%)"
        }} 
      />

      {/* Layer 2: Cursor spotlight glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: "radial-gradient(500px circle at 0px 0px, rgba(232, 215, 181, 0.04), transparent 80%)"
        }}
      />

      {/* Layer 3: Soft Fog/Atmospheric Glows */}
      <div className="absolute top-[15%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-[#c6a87d]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#9b51e0]/3 blur-[150px] pointer-events-none z-0" />

      {/* Layer 4: Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full"
        >
          {/* Left Side: Editorial Content with Social Sidebar */}
          <div className="lg:col-span-7 flex items-start gap-8 md:gap-14 text-left w-full relative z-20">
            
            {/* Social & Chapter Sidebar (Vertical) */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-col items-center gap-7 text-[10px] uppercase tracking-[0.25em] text-[#8a8a8a] font-bold shrink-0 pt-2"
            >
              <span className="text-[#e8d7b5] font-serif text-sm">01</span>
              <div className="w-[1px] h-16 bg-white/10" />
              <div className="flex flex-col gap-6">
                <a
                  href="https://github.com/AviralNITW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#e8d7b5] hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(232,215,181,0.5)] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aviral-mishra-482325324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#e8d7b5] hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(232,215,181,0.5)] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#e8d7b5] hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(232,215,181,0.5)] transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aviralmishra756@gmail.com"
                  className="text-slate-400 hover:text-[#e8d7b5] hover:scale-115 hover:drop-shadow-[0_0_8px_rgba(232,215,181,0.5)] transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Hero Main Copy */}
            <div className="flex-grow space-y-7">
              


              {/* Headline Name */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl sm:text-8xl lg:text-[7.2rem] font-serif font-light text-white tracking-tight leading-[0.82] flex flex-col uppercase"
              >
                <span className="bg-gradient-to-b from-white to-[#f0f0f0] bg-clip-text text-transparent font-light">AVIRAL</span>
                <span className="bg-gradient-to-b from-[#ffffff] via-[#e8d7b5] to-[#d9c6a1] bg-clip-text text-transparent font-light tracking-[0.01em]">MISHRA</span>
              </motion.h1>

              {/* Sub-Headline */}
              <motion.h2
                variants={itemVariants}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#e8d7b5] leading-relaxed max-w-md"
              >
                I build digital experiences that make an <span className="text-white">impact.</span>
              </motion.h2>

              {/* Hero Description */}
              <motion.p
                variants={itemVariants}
                className="text-[#8a8a8a] text-sm md:text-base max-w-lg leading-relaxed font-medium"
              >
                I engineer modern, responsive full-stack applications and AI solutions with a focus on performance, scalability and beautiful user experiences.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("projects");
                  }}
                  className="px-8 py-4 rounded-full bg-[#e8d7b5] text-[#050505] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(232,215,181,0.18)] hover:shadow-[0_0_45px_rgba(232,215,181,0.35)] hover:scale-[1.03] transition-all duration-300"
                >
                  Explore Projects
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                
                <a
                  href="/Aviral_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-transparent border border-white/10 hover:border-white/20 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/[0.03] hover:scale-[1.03] transition-all duration-300"
                >
                  View Resume
                  <FileText className="w-3.5 h-3.5 text-[#e8d7b5]" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Orbital Ring 3D Scene with Overlap */}
          <div className="lg:col-span-5 w-full h-[50vh] lg:h-[65vh] relative flex items-center justify-center lg:-ml-24 z-0">

            
            {/* Subtle Blue-Purple Radial Halo behind sculpture */}
            <div 
              className="absolute w-[130%] h-[130%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full blur-[110px] z-0 opacity-15"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(0, 229, 255, 0.08) 65%, transparent 100%)"
              }}
            />

            <ThreeHeroScene />
          </div>
        </motion.div>
      </div>

      {/* Bottom Row: Stats, Tech Stack & Scroll Track */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 mt-12 border-t border-white/[0.03] shadow-[0_-15px_30px_-15px_rgba(232,215,181,0.04)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Stats strip */}
          <div className="md:col-span-5 flex items-center justify-between md:justify-start gap-8 flex-wrap">
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-serif text-white">3</p>
              <p className="text-[9px] uppercase tracking-widest text-[#8a8a8a] font-bold">Projects Completed</p>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-serif text-[#e8d7b5]">3+</p>
              <p className="text-[9px] uppercase tracking-widest text-[#8a8a8a] font-bold">Years Coding</p>
            </div>
            <div className="text-left">
              <p className="text-2xl sm:text-3xl font-serif text-white">100%</p>
              <p className="text-[9px] uppercase tracking-widest text-[#8a8a8a] font-bold">Commitment</p>
            </div>
          </div>

          {/* Tech Stack Strip */}
          <div className="md:col-span-4 flex items-center justify-center gap-3.5 bg-white/[0.01] border border-white/5 py-2.5 px-5 rounded-full backdrop-blur-sm self-center justify-self-center">
            <span className="text-[8px] uppercase tracking-widest text-[#8a8a8a] font-bold mr-1.5">Tech Stack</span>
            <div className="flex items-center gap-3 text-slate-400">
              {/* Next.js Icon representation */}
              <span className="w-4 h-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[9px] font-bold text-white cursor-default" title="Next.js">N</span>
              
              {/* React (Atom style) */}
              <svg className="w-4.5 h-4.5 text-slate-400 hover:text-white transition-colors" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>React</title>
                <ellipse cx="50" cy="50" rx="10" ry="38" transform="rotate(30 50 50)" stroke="currentColor" strokeWidth="6"/>
                <ellipse cx="50" cy="50" rx="10" ry="38" transform="rotate(90 50 50)" stroke="currentColor" strokeWidth="6"/>
                <ellipse cx="50" cy="50" rx="10" ry="38" transform="rotate(150 50 50)" stroke="currentColor" strokeWidth="6"/>
                <circle cx="50" cy="50" r="6" fill="currentColor"/>
              </svg>

              {/* TypeScript (TS box) */}
              <span className="px-1 py-0.5 rounded-[3px] bg-white/5 border border-white/10 text-[7px] font-extrabold text-white cursor-default" title="TypeScript">TS</span>

              {/* JavaScript (JS box) */}
              <span className="px-1 py-0.5 rounded-[3px] bg-white/5 border border-white/10 text-[7px] font-extrabold text-white cursor-default" title="JavaScript">JS</span>

              {/* Node.js (Leaf shape representation) */}
              <svg className="w-4 h-4 text-slate-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <title>Node.js</title>
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z"/>
                <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
              </svg>

              {/* AWS / Cloud */}
              <svg className="w-4 h-4 text-slate-400 hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <title>AWS</title>
                <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.04-1.24.12A6.5 6.5 0 0 0 2 13c0 3.31 2.69 6 6 6Z"/>
              </svg>
            </div>
          </div>

          {/* Scroll Track */}
          <div className="md:col-span-3 flex items-center justify-end gap-3 text-right">
            <span className="text-[8px] uppercase tracking-[0.2em] font-semibold text-[#8a8a8a]">Scroll to Explore</span>
            <div 
              onClick={() => handleScrollTo("about")}
              className="w-8 h-5 rounded-full border border-white/10 p-1 flex items-center justify-start cursor-pointer hover:border-white/30 transition-colors duration-300"
            >
              <motion.div
                animate={{
                  x: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-[#e8d7b5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
