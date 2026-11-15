"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { Terminal, Search } from "lucide-react";

// Dynamically import the ScrollPathTracker to ensure it runs strictly client-side
const ScrollPathTracker = dynamic(() => import("@/components/ScrollPathTracker"), {
  ssr: false,
});

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global keyboard shortcut listener for Ctrl+K / Cmd+K and ` (tilde/backtick)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      } else if (e.key === "`" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative w-full bg-[#050507] text-[#ededed] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Floating navigation dock */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Dynamic Scroll-Driven SVG path light-tracker */}
      <ScrollPathTracker />

      {/* Spotlight Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Shell / Terminal Mode */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Floating Quick Action Pill (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 font-mono">
        <button
          onClick={() => setTerminalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#09090e]/90 border border-white/10 hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 text-xs shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105"
          title="Open Terminal Shell (~)"
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Shell</span>
        </button>

        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#09090e]/90 border border-white/10 hover:border-cyan-500/50 text-zinc-300 hover:text-cyan-400 text-xs shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-105"
          title="Command Palette (Ctrl+K)"
        >
          <Search className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Ctrl K</span>
        </button>
      </div>

      {/* Main Experience Flow */}
      <main className="relative w-full">
        {/* 1. Landing Command Center with Live Architecture Simulation */}
        <Hero
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        
        {/* 2. Flagship Systems with Live Interactive Sandboxes (Proof First) */}
        <Projects />
        
        {/* 3. Subsystem Competencies (No Subjective Percentage Bars) */}
        <Skills />
        
        {/* 4. Professional Work Experience & Production Contributions */}
        <Experience />
        
        {/* 5. Engineering Background & Technical Philosophy */}
        <About />
        
        {/* 6. Formal Computer Science Academics */}
        <Education />
        
        {/* 7. Competitive Milestones & Ranks */}
        <Achievements />
        
        {/* 8. Online Verified Coding Profiles */}
        <Profiles />
        
        {/* 9. Direct Contact Channel */}
        <Contact />
      </main>

      {/* Precision Footer */}
      <Footer />
    </div>
  );
}
