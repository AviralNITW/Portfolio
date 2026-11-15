"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Terminal } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "AI Full Stack Engineering Intern",
    company: "NeuraMach.AI",
    period: "Dec 2025 – Mar 2026",
    location: "Remote",
    type: "Industry Internship",
    responsibilities: [
      "Built and deployed end-to-end full-stack features, developing modular backend logic, analytics workflows, and interactive dashboard components.",
      "Engineered modular REST APIs with FastAPI, implemented unit testing with RCA debugging, and designed relational schemas for course workflows.",
      "Developed interactive React.js/Next.js dashboards for Knowledge Concept Graphs and student evaluations, delivering features in Agile sprints.",
      "Worked with PostgreSQL and DBeaver for data querying, query optimization, validation, and schema inspection."
    ],
    skills: ["FastAPI", "PostgreSQL", "React.js", "Next.js", "Swagger/OpenAPI", "Git/GitHub", "Agile (Scrum)"]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Ambient Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-cyan-500/[0.03] blur-[140px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-left border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Industry Experience
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            WORK <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">HISTORY</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-normal mt-2">
            Applied software engineering, REST API design, and full-stack system architecture in production environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/[0.08] ml-3 md:ml-8 space-y-12">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#050507] border-2 border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Bento Card */}
              <div
                data-reveal
                className="obsidian-card rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] max-w-4xl space-y-6"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.04] pb-5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs text-zinc-300 font-mono font-medium flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                        {item.company}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs text-zinc-400 font-mono">{item.location}</span>
                    </div>
                  </div>
                  
                  {/* Period Badge */}
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-zinc-300 font-mono flex items-center gap-1.5 self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                {/* Core Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Key Core Deliverables
                  </h4>
                  <ul className="space-y-2.5 font-sans">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2.5">
                    Technologies &amp; Protocols
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
