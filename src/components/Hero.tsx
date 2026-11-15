"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ExternalLink,
  Code2,
  Trophy,
  Layers,
  Sparkles,
  Command,
  CheckCircle2
} from "lucide-react";
import ArchitectureHeroCanvas from "./ArchitectureHeroCanvas";

interface HeroProps {
  onOpenCommandPalette?: () => void;
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenCommandPalette, onOpenTerminal }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
      suppressHydrationWarning
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Dot Grid & Ambient Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-30 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/[0.04] blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-purple-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-12">
        {/* Top Hero Row: Editorial Header & Authoritative Mission */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-4xl text-left"
        >
          {/* Status Badge & Affiliation Pill */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold tracking-wide">AVAILABLE FOR HIGH-IMPACT SWE &amp; AI ROLES</span>
            </div>

            <span className="text-zinc-600 hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-zinc-400">
              <span className="text-cyan-400 font-bold">MCA</span>
              <span>@ National Institute of Technology, Warangal</span>
            </div>
          </motion.div>

          {/* Headline Name & Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Architecting <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Low-Latency AI</span> &amp; Distributed Systems.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed font-normal pt-1">
              Hi, I&apos;m <span className="text-white font-semibold">Aviral Mishra</span>. I engineer two-stage hybrid RAG pipelines, event-driven Apache Kafka stream clusters, and microsecond serverless inference engines with mathematical rigor and production resilience.
            </p>
          </motion.div>

          {/* Action Array Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wide flex items-center gap-2 hover:bg-zinc-200 shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-all duration-200"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="/Aviral_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono text-xs flex items-center gap-2 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 font-mono text-xs flex items-center gap-2 transition-all duration-200"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>CLI Terminal</span>
              </button>
            )}

            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 text-zinc-400 hover:text-white font-mono text-xs transition-colors"
              >
                <Command className="w-3 h-3 text-cyan-400" />
                <span>Ctrl K</span>
              </button>
            )}
          </motion.div>

          {/* High-Precision Signal Matrix */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 font-mono"
          >
            <div className="p-3 rounded-xl bg-[#0a0a0f]/80 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Algorithmic</span>
              <span className="text-sm font-bold text-amber-300 mt-0.5 block">600+ LeetCode</span>
              <span className="text-[10px] text-zinc-400">1666+ Rating (3★)</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0a0a0f]/80 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">National Rank</span>
              <span className="text-sm font-bold text-emerald-400 mt-0.5 block">AIR 246 NIMCET</span>
              <span className="text-[10px] text-zinc-400">Top 1% Nationwide</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0a0a0f]/80 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Entrance Rank</span>
              <span className="text-sm font-bold text-cyan-400 mt-0.5 block">AIR 51 CUET PG</span>
              <span className="text-[10px] text-zinc-400">Central Universities</span>
            </div>

            <div className="p-3 rounded-xl bg-[#0a0a0f]/80 border border-white/[0.06]">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Academics</span>
              <span className="text-sm font-bold text-purple-300 mt-0.5 block">7.80 CGPA</span>
              <span className="text-[10px] text-zinc-400">NIT Warangal MCA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Centerpiece: Distinctive Interactive Architecture Command Center */}
        <div className="w-full">
          <ArchitectureHeroCanvas />
        </div>
      </div>
    </section>
  );
}
