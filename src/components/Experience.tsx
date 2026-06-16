"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle, Lightbulb, Link2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  link?: string;
  responsibilities: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "AI Full-Stack Developer Intern",
    company: "Neuramach AI",
    period: "Present",
    responsibilities: [
      "Fixed and optimized UI/UX issues in a production frontend using Next.js, increasing responsiveness and layout consistency.",
      "Built reusable frontend components with React / Next.js, improving code modularity and maintainability.",
      "Integrated frontend elements with backend services using FastAPI (Python) and REST APIs for smooth data routing.",
      "Worked with PostgreSQL and DBeaver for data querying, query optimization, validation, and schema inspection."
    ],
    skills: ["Next.js", "React.js", "FastAPI", "PostgreSQL", "DBeaver", "RESTful APIs"]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="radial-glow radial-glow-gold w-[30vw] h-[30vw] top-[30%] right-[10%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Professional Experience
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            WORK <span className="gold-glow-text font-sans">HISTORY</span>
          </h2>
        </div>

        {/* Experience Cards Stack */}
        <div className="relative border-l border-white/5 ml-4 md:ml-12 space-y-16 py-4">
          {experienceData.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16 group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#030306] border-2 border-[#c5a880] flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              </div>

              {/* Experience Card */}
              <div
                data-reveal
                className="glass-card card-shadow-3d rounded-3xl p-6 md:p-8 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent max-w-4xl"
              >
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-[#c5a880] transition-colors duration-300">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-slate-300 font-semibold flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-[#c5a880]" />
                        {item.company}
                      </span>
                    </div>
                  </div>
                  
                  {/* Period Badge */}
                  <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-semibold flex items-center gap-1.5 self-start md:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                    {item.period}
                  </span>
                </div>

                {/* Grid Responsibilities and Skills */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Key Core Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-semibold uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
