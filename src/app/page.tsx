"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamically import the ScrollPathTracker to ensure it runs strictly client-side
// and avoids hydration mismatches since it calculates document-height/offsets
const ScrollPathTracker = dynamic(() => import("@/components/ScrollPathTracker"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative w-full bg-[#030306] overflow-x-hidden selection:bg-[#c5a880]/30 selection:text-white">
      {/* Navigation menu */}
      <Navbar />

      {/* Dynamic Scroll-Driven SVG path light-tracker */}
      <ScrollPathTracker />

      {/* Main Sections */}
      <main className="relative w-full">
        {/* Landing/Hero experience */}
        <Hero />
        
        {/* Core Profile details */}
        <About />
        
        {/* Academics timeline */}
        <Education />
        
        {/* Skill card matrices */}
        <Skills />
        
        {/* Project showcases and details modals */}
        <Projects />
        
        {/* Professional history timeline */}
        <Experience />
        
        {/* Competitions and Awards */}
        <Achievements />
        
        {/* Competitive coding profiles */}
        <Profiles />
        
        {/* Interactive connection panel */}
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
