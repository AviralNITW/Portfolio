"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Compass, Layers } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  tech: string[];
  github: string;
  live?: string;
  illustration: React.ReactNode;
  highlights: string[];
}

const projectsData: Project[] = [
  {
    id: "ems",
    title: "Employee Management System (EMS)",
    subtitle: "Enterprise Personnel Platform",
    description: "A role-based employee workspace featuring admin controls, JWT authentication, and full CRUD workflows.",
    detailedDescription: "EMS Workspace is an enterprise dashboard designed with administrative tools and role-based permissions. Admins have access to operational logs and employee CRUD metrics, while employees can track individual tasks. Built on Node.js/Express and integrated with React.",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Node.js", "REST API", "LocalStorage"],
    github: "https://github.com",
    live: "https://github.com",
    highlights: [
      "Engineered role-based employee management with Admin and Employee access control.",
      "Developed secure authentication and authorization workflows to protect employee data.",
      "Implemented CRUD APIs and integrated them with a responsive React frontend.",
      "Enhanced UX using form validation, error handling, and persistent local storage/SQL principles."
    ],
    illustration: (
      <svg viewBox="0 0 400 240" className="w-full h-full opacity-70">
        <rect x="50" y="40" width="300" height="160" rx="12" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
        <line x1="50" y1="75" x2="350" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        <line x1="130" y1="75" x2="130" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        <circle cx="90" cy="105" r="6" fill="#c5a880" opacity="0.8" />
        <circle cx="90" cy="135" r="6" fill="rgba(255,255,255,0.2)" />
        <circle cx="90" cy="165" r="6" fill="rgba(255,255,255,0.2)" />
        <rect x="155" y="95" width="170" height="40" rx="6" fill="none" stroke="#00f2fe" strokeWidth="1" opacity="0.4" />
        <path d="M 165 125 L 205 110 L 245 120 L 285 105 L 315 115" fill="none" stroke="#00f2fe" strokeWidth="1.5" />
        <circle cx="315" cy="115" r="3" fill="#ffffff" />
        <rect x="155" y="150" width="75" height="35" rx="6" fill="none" stroke="#c5a880" strokeWidth="1" opacity="0.4" />
        <rect x="250" y="150" width="75" height="35" rx="6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "geostocklive",
    title: "GeoStockLive",
    subtitle: "Geopolitical Sentiment Risk Pipeline",
    description: "An AI-powered pipeline tracking real-time global news sentiment impact on stock market indexes.",
    detailedDescription: "GeoStockLive uses natural language processing (NLP) pipelines to score real-time risk on global locations. Connected via Kafka brokers and WebSockets, it provides interactive geographical visualizations of risk indicators to correlate news and stock trends.",
    tech: ["React.js", "FastAPI", "PostgreSQL", "Apache Kafka", "WebSockets", "NLP"],
    github: "https://github.com",
    live: "https://github.com",
    highlights: [
      "Built an AI-powered platform analyzing real-time geopolitical news impact on stocks.",
      "Developed scalable NLP pipelines for sentiment analysis and risk scoring.",
      "Implemented real-time updates using Kafka, WebSockets, and FastAPI.",
      "Created interactive dashboards with 3D risk visualization and live alerts."
    ],
    illustration: (
      <svg viewBox="0 0 400 240" className="w-full h-full opacity-70">
        <defs>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c5a880" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c5a880" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="120" r="80" fill="url(#globe-glow)" />
        <circle cx="200" cy="120" r="70" fill="none" stroke="#c5a880" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
        <ellipse cx="200" cy="120" rx="70" ry="25" fill="none" stroke="#c5a880" strokeWidth="1" opacity="0.4" />
        <ellipse cx="200" cy="120" rx="70" ry="50" fill="none" stroke="#c5a880" strokeWidth="1" opacity="0.2" />
        <line x1="200" y1="50" x2="200" y2="190" stroke="#c5a880" strokeWidth="1" opacity="0.3" />
        <g stroke="#00f2fe" strokeWidth="1.5">
          <line x1="160" y1="100" x2="230" y2="90" opacity="0.5" />
          <line x1="230" y1="90" x2="245" y2="135" opacity="0.5" />
          <line x1="160" y1="100" x2="180" y2="145" opacity="0.5" />
        </g>
        <circle cx="160" cy="100" r="4" fill="#00f2fe" className="animate-ping" />
        <circle cx="230" cy="90" r="4" fill="#c5a880" />
        <circle cx="245" cy="135" r="4.5" fill="#00f2fe" />
        <circle cx="180" cy="145" r="4" fill="#9b51e0" />
        <path d="M 20 220 L 380 220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      </svg>
    )
  },
  {
    id: "vochat",
    title: "VoChat",
    subtitle: "P2P Ephemeral Voice-Only Network",
    description: "A voice-only messaging and community network featuring secure JWT sessions and media notifications.",
    detailedDescription: "VoChat is a secure mobile voice application removing photos and texts in favor of purely ephemeral audio interaction. Integrates Firebase Cloud Messaging (FCM) and Cloud Storage with dynamic backend routing.",
    tech: ["React Native", "Node.js", "MongoDB", "Firebase Storage", "JWT Auth", "FCM"],
    github: "https://github.com",
    highlights: [
      "Developed a voice-only social media app without photos or text messaging.",
      "Implemented secure JWT authentication and scalable backend APIs.",
      "Built ephemeral audio messaging with auto-delete functionality.",
      "Integrated Firebase Storage & FCM for media handling and push notifications."
    ],
    illustration: (
      <svg viewBox="0 0 400 240" className="w-full h-full opacity-70">
        <defs>
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9b51e0" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c5a880" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path d="M 50 120 Q 80 80, 110 120 T 170 120 T 230 120 T 290 120 T 350 120" fill="none" stroke="url(#wave-grad)" strokeWidth="2" />
        <path d="M 50 120 Q 80 150, 110 120 T 170 120 T 230 120 T 290 120 T 350 120" fill="none" stroke="url(#wave-grad)" strokeWidth="1" opacity="0.3" />
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 4">
          <circle cx="110" cy="120" r="16" fill="none" />
          <circle cx="230" cy="120" r="16" fill="none" />
          <circle cx="290" cy="120" r="16" fill="none" />
        </g>
        <circle cx="110" cy="120" r="3.5" fill="#00f2fe" />
        <circle cx="230" cy="120" r="3.5" fill="#9b51e0" />
        <circle cx="290" cy="120" r="3.5" fill="#c5a880" />
      </svg>
    )
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="radial-glow radial-glow-purple w-[35vw] h-[35vw] top-[15%] left-[5%] z-0" />
      <div className="radial-glow radial-glow-gold w-[30vw] h-[30vw] bottom-[10%] right-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Featured Creations
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            ENGINEERING <span className="gold-glow-text font-sans">PORTFOLIO</span>
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              className="glass-card card-shadow-3d rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent cursor-pointer flex flex-col h-full group"
            >
              {/* Image / Vector Illustration Area */}
              <div className="relative aspect-video bg-black/40 border-b border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#c5a880]/1 group-hover:bg-[#c5a880]/5 transition-colors duration-500" />
                <motion.div 
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.illustration}
                </motion.div>
                
                {/* Tech category header icon */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/60 border border-white/5 text-slate-300">
                  <Layers className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-[10px] text-[#c5a880] uppercase tracking-widest font-bold mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#c5a880] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-medium tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-[#c5a880] font-bold">
                      +{project.tech.length - 3} More
                    </span>
                  )}
                </div>

                {/* Action footer link hint */}
                <div className="flex items-center gap-1.5 text-xs text-[#c5a880] font-bold uppercase tracking-widest">
                  Reveal Specs
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Expansion Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-12 md:py-24">
            
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              layoutId={`card-container-${selectedProject.id}`}
              className="relative w-full max-w-3xl rounded-3xl bg-[#08080f] border border-white/10 overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.04] border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all duration-300 z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable details wrapper */}
              <div className="overflow-y-auto no-scrollbar flex-grow">
                {/* Illustration Banner */}
                <div className="relative aspect-video md:aspect-[21/9] bg-black/60 border-b border-white/5 flex items-center justify-center p-8">
                  {selectedProject.illustration}
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-xs text-[#c5a880] uppercase tracking-widest font-bold">
                      {selectedProject.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] flex items-center gap-1.5">
                      <Compass className="w-4 h-4" />
                      Key Features & Scope
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-2 shrink-0 animate-pulse" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Tech stack pills */}
                  <div className="space-y-3 mb-10">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      Technologies Utilized
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA External links */}
                  <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-8">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/5 hover:border-white/10 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code Repository
                    </a>
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#c5a880] to-[#e6d3ba] text-[#030306] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Launch Live Demo
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
