"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Cpu, MapPin, University } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background soft glows */}
      <div className="radial-glow radial-glow-purple w-[30vw] h-[30vw] top-[25%] right-[5%] z-0" />
      <div className="radial-glow radial-glow-gold w-[35vw] h-[35vw] bottom-[10%] left-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Who I Am
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            ABOUT <span className="gold-glow-text font-sans">MY JOURNEY</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Animated Profile Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card card-shadow-3d relative w-full max-w-sm rounded-3xl p-8 overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              {/* Metallic corner borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c5a880]/30 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#c5a880]/30 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#c5a880]/30 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c5a880]/30 rounded-br-3xl" />

              {/* Decorative inner circular glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c5a880]/2 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header Profile Representation */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#c5a880] to-[#e6d3ba] p-[2px] mb-4 shadow-xl shadow-[#c5a880]/5">
                  <img
                    src="/profile.jpg"
                    alt="Aviral Mishra"
                    className="w-full h-full rounded-full object-cover bg-[#08080f]"
                  />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Aviral Mishra</h3>
                <p className="text-xs text-[#c5a880] uppercase tracking-widest font-semibold mt-1">MCA Candidate</p>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <University className="w-4.5 h-4.5 text-[#c5a880]" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Institute</p>
                    <p className="font-medium text-xs">NIT Warangal</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <BookOpen className="w-4.5 h-4.5 text-[#c5a880]" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Specialization</p>
                    <p className="font-medium">Computer Science & Applications</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4.5 h-4.5 text-[#c5a880]" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                    <p className="font-medium">Warangal, India</p>
                  </div>
                </div>
              </div>

              {/* Recruiting Status Badge */}
              <div className="mt-8 pt-4 border-t border-white/5 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[10px] uppercase font-bold tracking-widest text-[#e6d3ba]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Open to Opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <h3 data-reveal className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Engineering performance-focused web solutions.
            </h3>
            
            <p data-reveal className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My journey into software development is driven by a passion for building robust web architectures and high-fidelity layouts. Currently pursuing my **Master of Computer Applications (MCA)** at **National Institute of Technology, Warangal (NIT Warangal)**, I consolidate advanced concepts in computer systems, algorithms, and databases.
            </p>

            <p data-reveal className="text-slate-400 leading-relaxed text-sm sm:text-base">
              From crafting responsive React/Next.js components to writing optimized PostgreSQL queries, I bridge frontend engineering and backend scalability. I enjoy turning complex data pipelines and mock designs into clean, production-grade products.
            </p>

            {/* Current Focus Areas Grid */}
            <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
                <h4 className="font-bold text-[#c5a880] text-sm uppercase tracking-wider mb-2">01. Web Architectures</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building responsive, reusable frontend frameworks on Next.js integrated with secure, high-throughput REST APIs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
                <h4 className="font-bold text-[#c5a880] text-sm uppercase tracking-wider mb-2">02. Databases & Algorithms</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Structuring optimal database schemas, constructing complex queries, and writing clean, algorithmic problem solutions.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
