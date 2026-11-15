"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code2,
  Layers,
  Zap,
  ArrowRight,
  FileText,
  Trophy,
  Briefcase,
  Brain,
  University,
  Award,
  BookOpen,
  Cpu,
} from "lucide-react";

const _cachedAboutIcons = [
  MapPin, GraduationCap, Code2, Layers, Zap, ArrowRight,
  FileText, Trophy, Briefcase, Brain, University, Award, BookOpen, Cpu
];
void _cachedAboutIcons;

const stats = [
  { value: "600+", label: "LeetCode Solved", sub: "1666+ Rating (3★)", icon: <Code2 className="w-4 h-4 text-amber-400" /> },
  { value: "6+", label: "Engineered Systems", sub: "AI & Distributed Streams", icon: <Layers className="w-4 h-4 text-cyan-400" /> },
  { value: "AIR 246", label: "NIMCET (Top 1%)", sub: "National NIT Rank", icon: <Trophy className="w-4 h-4 text-emerald-400" /> },
  { value: "AIR 51", label: "CUET PG Nationwide", sub: "Central Universities", icon: <Zap className="w-4 h-4 text-purple-400" /> },
];

const whatIDo = [
  {
    number: "01",
    title: "High-Precision Hybrid RAG & Vector Retrieval",
    description:
      "Designing multi-stage retrieval architectures combining dense vector spaces (MMR with ChromaDB) and sparse lexical matching (BM25) fused through Reciprocal Rank Fusion (k=60) and cross-encoder re-ranking.",
  },
  {
    number: "02",
    title: "Event-Driven Distributed Streaming",
    description:
      "Building high-throughput telemetry pipelines using Apache Kafka brokers with partition-key routing, parallel NLP workers, PostgreSQL conflict UPSERTs, and real-time WebSocket client fanout.",
  },
  {
    number: "03",
    title: "Sub-5ms Serverless Vector Inference",
    description:
      "Deploying mathematical models without bulky runtime dependencies — such as compressing linear SVM hyperplane weights into pure vectorized NumPy dot-products executed in 3.4ms on zero-GPU serverless.",
  },
  {
    number: "04",
    title: "Distributed Data Lakehouses & Concurrency",
    description:
      "Configuring containerized PySpark master-worker topologies, Hadoop HDFS, Delta Lake ACID transactions, and robust schema enforcement for analytical data marts.",
  },
];

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center py-28 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-10 w-[500px] h-[350px] bg-cyan-500/[0.03] blur-[140px] pointer-events-none rounded-full z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16"
      >
        {/* Section Label */}
        <motion.div variants={itemVariants} className="border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Identity &amp; Philosophy
            </span>
          </div>
          <h2
            data-reveal
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans"
          >
            ENGINEERING{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">
              BACKGROUND
            </span>
          </h2>
        </motion.div>

        {/* Hero Bio Row */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Left — Sticky Profile Card */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="obsidian-card relative w-full rounded-3xl p-7 overflow-hidden border border-white/[0.08] bg-[#09090e]/90">
              {/* Avatar & Identifiers */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] mb-4 shadow-xl shadow-cyan-500/10">
                  <img
                    src="/profile.jpg"
                    alt="Aviral Mishra"
                    className="w-full h-full rounded-full object-cover bg-[#08080f]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Aviral Mishra
                </h3>
                <p className="text-xs text-cyan-400 font-mono uppercase tracking-widest mt-1">
                  Distributed &amp; Applied AI Engineer
                </p>
              </div>

              {/* Info rows */}
              <div className="space-y-3.5 text-xs text-zinc-300 font-mono mb-6">
                <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Institute</p>
                    <p className="text-white font-medium">NIT Warangal (MCA &apos;27)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2.5">
                  <Brain className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Focus</p>
                    <p className="text-white font-medium">Hybrid RAG &amp; Stream Systems</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-white/[0.04] pb-2.5">
                  <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Industry Experience</p>
                    <p className="text-white font-medium">NeuraMach.AI (AI Full Stack)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Warangal, Telangana, India</p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-white/[0.06] text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Open to SWE &amp; AI Roles</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Technical Thesis & Stats */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug tracking-tight">
              I build systems that solve{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                production bottlenecks
              </span>{" "}
              with mathematical precision.
            </h3>

            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base font-normal">
              <p>
                I&apos;m <span className="text-white font-semibold">Aviral Mishra</span>, an MCA candidate at the{" "}
                <span className="text-white font-semibold">National Institute of Technology, Warangal (NIT Warangal)</span>.
                My work centers on the intersection of modern NLP retrieval systems and distributed stream processing.
              </p>
              <p>
                Rather than treating AI as a black box, I engineer the architectural mechanics around it:
                from fusing dense ChromaDB embeddings with sparse BM25 lexical tokens via{" "}
                <span className="text-cyan-300 font-mono font-medium">Reciprocal Rank Fusion (k=60)</span> in RAGI,
                to stripping away heavy machine learning frameworks to execute compressed linear SVM weights in{" "}
                <span className="text-emerald-300 font-mono font-medium">3.4ms pure NumPy dot-products</span> in SENTINEL,
                to architecting fault-tolerant Apache Kafka ingestion brokers with sub-2s client fanout in GeoStockLive.
              </p>
              <p>
                Grounded in solid computer science fundamentals — Data Structures, Operating Systems, Concurrency, and Distributed Architecture — I back up my engineering with proven competitive problem-solving:{" "}
                <span className="text-white font-semibold">AIR 246 in NIMCET (Top 1% nationwide)</span>,{" "}
                <span className="text-white font-semibold">AIR 51 in CUET PG</span>, and over{" "}
                <span className="text-white font-semibold">600+ solved problems on LeetCode</span> with a 1666+ contest rating.
              </p>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-[#09090e] border border-white/[0.06] hover:border-cyan-500/30 transition-all text-center group"
                >
                  <div className="flex justify-center mb-1.5 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[9px] text-zinc-500 mt-0.5">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wide flex items-center gap-2 hover:bg-zinc-200 shadow-md transition-all"
              >
                <span>View Engineered Systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/Aviral_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-mono text-xs flex items-center gap-2 transition-all"
              >
                <span>Download Resume</span>
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Core Competency Grid ── */}
        <motion.div variants={itemVariants} className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[1px] bg-cyan-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400 font-semibold">
              Core Technical Focus
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIDo.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#09090e] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300"
              >
                <span className="text-[10px] font-mono font-bold text-cyan-400/70 tracking-[0.25em] uppercase mb-2 block">
                  {item.number} // ARCHITECTURE
                </span>
                <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
