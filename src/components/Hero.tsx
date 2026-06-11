"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, FileText, Github, Linkedin, MessageSquare, Terminal } from "lucide-react";

// Dynamically import ThreeHeroScene to prevent SSR/Hydration errors
const ThreeHeroScene = dynamic(() => import("./ThreeHeroScene"), { ssr: false });

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030306] py-24 md:py-0"
    >
      {/* 3D Interactive WebGL Scene */}
      <ThreeHeroScene />

      {/* Luxury Radial Glow Backgrounds */}
      <div className="radial-glow radial-glow-gold w-[40vw] h-[40vw] top-[10%] left-[20%] z-0" />
      <div className="radial-glow radial-glow-purple w-[35vw] h-[35vw] bottom-[15%] right-[15%] z-0" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Tagline Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
          >
            <Terminal className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
              AI Full-Stack Developer & MCA @ NIT Warangal
            </span>
          </motion.div>

          {/* Headline Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6"
          >
            <span className="text-white block font-sans">AVIRAL MISHRA</span>
            <span className="gold-glow-text block font-sans mt-2">PORTFOLIO</span>
          </motion.h1>

          {/* Subtitle / Role Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl font-medium leading-relaxed tracking-wide mb-10"
          >
            I engineer modern, responsive full-stack applications, specializing in high-fidelity interfaces on Next.js and robust, real-time data streaming architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#c5a880] to-[#e6d3ba] text-[#030306] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/20 hover:shadow-[#c5a880]/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
              className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/[0.06] transition-all duration-300 hover:scale-[1.03]"
            >
              Get In Touch
              <MessageSquare className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links & Resume Link */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/AviralNITW"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/aviral-mishra-482325324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <div className="w-[1px] h-6 bg-white/10" />

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download triggered!");
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-colors duration-300"
            >
              <FileText className="w-4 h-4 text-[#c5a880]" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-slate-400">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-[#c5a880]"
          />
        </div>
      </div>
    </section>
  );
}
