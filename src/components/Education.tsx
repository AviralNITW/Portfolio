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
    degree: "Master of Computer Applications (MCA)",
    institution: "National Institute of Technology, Warangal (NIT Warangal)",
    year: "2024 - 2027",
    location: "Warangal, India",
    achievements: [
      "Specializing in Computer Science and Software Systems",
      "Consolidating advanced computer application architectures, database systems, and algorithms",
      "Engaged in building interactive, high-fidelity full-stack web applications"
    ]
  },
  {
    degree: "Bachelor's Degree (CS Focus)",
    institution: "Chhatrapati Shahu Ji Maharaj University",
    year: "2020 - 2023",
    location: "Kanpur, India",
    achievements: [
      "Completed degree program in Computer Science fundamentals",
      "Built a solid understanding of object-oriented programming, data structures, and databases",
      "Participated in local college programming contests and built initial web tools"
    ]
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="radial-glow radial-glow-gold w-[30vw] h-[30vw] top-[20%] left-[10%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Academic History
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            EDUCATION <span className="gold-glow-text font-sans">TIMELINE</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/5 ml-4 md:ml-12 space-y-16 py-4">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-16 group">
              
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#030306] border-2 border-[#c5a880] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-white">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] group-hover:bg-white" />
              </div>

              {/* Glowing vertical connector highlight on hover */}
              <div className="absolute left-[-1px] top-6 bottom-[-64px] w-[1px] bg-gradient-to-b from-[#c5a880]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Education Card */}
              <div
                data-reveal
                className="glass-card card-shadow-3d rounded-3xl p-6 md:p-8 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent max-w-4xl"
              >
                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-[#c5a880] transition-colors duration-300">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-slate-300 font-semibold mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#c5a880]" />
                      {item.institution}
                    </p>
                  </div>
                  
                  {/* Timeline Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Key Details
                  </h4>
                  <ul className="list-none space-y-2.5">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-2 shrink-0" />
                        {achievement}
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
