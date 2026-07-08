"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, X, Compass, Layers, FileText } from "lucide-react";

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
  documentation?: string;
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
    live: "https://ems-master.vercel.app/",
    highlights: [
      "Engineered role-based employee management with Admin and Employee access control.",
      "Developed secure authentication and authorization workflows to protect employee data.",
      "Implemented CRUD APIs and integrated them with a responsive React frontend.",
      "Enhanced UX using form validation, error handling, and persistent local storage/SQL principles."
    ],
    documentation: `1. Requirements Analysis & Database Design:
Designed the MongoDB database schemas for user credentials, log actions, and role mappings.

2. Backend API Implementation:
Spun up a Node.js/Express server. Integrated JWT validation middleware and bcrypt hashing for secure session endpoints.

3. Frontend Dashboard Integration:
Built task tracking interfaces, input validation forms, and state management in React. Styled with responsive TailwindCSS.

4. Log Auditing & Testing:
Wrote system workflows tracking administrator log modifications and tested end-to-end personnel updates.`,
    illustration: (
      <img src="/ems_logo.png" alt="EMS Logo" className="w-full h-full object-contain p-4 filter brightness-110" />
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
    live: "https://geo-stock-live-frontend.vercel.app/",
    highlights: [
      "Built an AI-powered platform analyzing real-time geopolitical news impact on stocks.",
      "Developed scalable NLP pipelines for sentiment analysis and risk scoring.",
      "Implemented real-time updates using Kafka, WebSockets, and FastAPI.",
      "Created interactive dashboards with 3D risk visualization and live alerts."
    ],
    documentation: `1. Ingestion Infrastructure:
Configured Apache Kafka clusters queuing streaming global news feeds in parallel.

2. NLP Sentiment Inference:
Routed raw feeds to transformer scoring nodes, classifying real-time geopolitical risk parameters.

3. Real-Time Websocket Updates:
Established active WebSocket connections via Python/FastAPI to push live indexes.

4. 3D Visualization:
Integrated Mapbox GL rendering real-time risk coordinate points on an interactive 3D globe.`,
    illustration: (
      <img src="/geostock_logo.png" alt="GeoStockLive Logo" className="w-full h-full object-contain p-4 filter brightness-110" />
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
      <img src="/vochat_logo.png" alt="VoChat Logo" className="w-full h-full object-contain p-4 filter brightness-110" />
    )
  }
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);
    
    const glowX = e.clientX - rect.left;
    const glowY = e.clientY - rect.top;
    card.style.setProperty("--glow-x", `${glowX}px`);
    card.style.setProperty("--glow-y", `${glowY}px`);
    card.style.setProperty("--glow-opacity", "1");
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    const card = cardRef.current;
    if (card) {
      card.style.setProperty("--glow-opacity", "0");
    }
  };

  return (
    <div className="w-full h-full" style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        layoutId={`card-container-${project.id}`}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="glass-card card-shadow-3d rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent cursor-pointer flex flex-col h-full group relative transition-all duration-500 hover:border-[#c5a880]/30 hover:shadow-[0_0_50px_rgba(197,168,128,0.03)]"
      >
        {/* Glow spotlight background */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(280px circle at var(--glow-x, 0px) var(--glow-y, 0px), rgba(197, 168, 128, 0.08), transparent 85%)`
          }}
        />

        {/* Image / Vector Illustration Area */}
        <div 
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
          className="relative aspect-video bg-black/40 border-b border-white/5 flex items-center justify-center overflow-hidden z-20"
        >
          <div className="absolute inset-0 bg-[#c5a880]/1 group-hover:bg-[#c5a880]/4 transition-colors duration-500" />
          
          <motion.div 
            className="w-full h-full flex items-center justify-center"
            style={{ transform: "translateZ(40px)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            {project.illustration}
          </motion.div>
          
          {/* Tech category header icon */}
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/60 border border-white/5 text-slate-300 shadow-lg"
          >
            <Layers className="w-4 h-4" />
          </div>
        </div>

        {/* Card Body */}
        <div 
          style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
          className="p-6 md:p-8 flex flex-col flex-grow z-20"
        >
          <p 
            style={{ transform: "translateZ(15px)" }}
            className="text-[10px] text-[#c5a880] uppercase tracking-widest font-bold mb-2"
          >
            {project.subtitle}
          </p>
          
          <h3 
            style={{ transform: "translateZ(25px)" }}
            className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-[#c5a880] transition-colors duration-300"
          >
            {project.title}
          </h3>
          
          <p 
            style={{ transform: "translateZ(15px)" }}
            className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow font-medium"
          >
            {project.description}
          </p>

          {/* Tech Pills */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-medium tracking-wider hover:bg-[#c5a880]/10 hover:text-white transition-colors duration-300"
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

          {/* Action footer link hint & Live Link Button */}
          <div 
            style={{ transform: "translateZ(25px)" }}
            className="flex items-center justify-between mt-auto pt-2"
          >
            <div className="flex items-center gap-1.5 text-xs text-[#c5a880] font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
              Reveal Specs
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </div>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#c5a880]/30 hover:bg-[#c5a880] hover:text-[#030306] text-[#c5a880] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg hover:shadow-[#c5a880]/10"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
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

                  {/* Documentation / Development Walkthrough */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      Development Walkthrough
                    </h4>
                    {selectedProject.documentation ? (
                      <div className="text-sm text-slate-400 leading-relaxed space-y-3 whitespace-pre-line p-5 rounded-2xl bg-white/[0.01] border border-white/5 font-sans">
                        {selectedProject.documentation}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 italic p-5 rounded-2xl bg-white/[0.01] border border-white/5 border-dashed">
                        Development case study and system architecture documentation are currently being drafted. A complete step-by-step guide detailing the creation of this project will be available here soon!
                      </div>
                    )}
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
