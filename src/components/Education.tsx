"use client";

import React from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  location: string;
  achievements: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA) · CGPA: 7.80",
    institution: "National Institute of Technology, Warangal (NIT Warangal)",
    year: "2024 - 2027",
    location: "Warangal, India",
    achievements: [
      "Department of Computer Science and Engineering",
      "Specializing in Advanced Database Systems, Concurrency, and Distributed Computing",
      "Active competitive programmer and systems developer"
    ]
  },
  {
    degree: "B.Sc. in Computer Applications · 62.61%",
    institution: "Brahmanand College (Affiliated to CSJM University)",
    year: "2020 - 2023",
    location: "Kanpur, India",
    achievements: [
      "Core coursework in Data Structures, Object-Oriented Programming, and DBMS",
      "Built early web tools and participated in regional programming challenges",
      "Graduated with top percentile in CS entrance exams nationwide"
    ]
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-purple-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-left border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Academic Background
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            EDUCATION <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">TIMELINE</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-normal mt-2">
            Formal computer science training, algorithmic foundations, and distributed systems curriculum.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/[0.08] ml-3 md:ml-8 space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Education Bento Card */}
              <div
                data-reveal
                className="obsidian-card rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] max-w-4xl space-y-5"
              >
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.04] pb-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {item.degree}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-300 font-mono font-medium mt-1.5 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                  
                  {/* Timeline Badge */}
                  <div className="flex flex-wrap items-center gap-2 font-mono">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-zinc-300 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.year}</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[11px] text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Curriculum &amp; Department Honors
                  </span>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
