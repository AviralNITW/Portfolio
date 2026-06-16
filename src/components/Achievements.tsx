"use client";

import React from "react";
import { Trophy, Award, Users, ShieldCheck } from "lucide-react";

interface Achievement {
  category: "hackathon" | "certification" | "leadership" | "award";
  title: string;
  sub: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const achievementsData: Achievement[] = [
  {
    category: "award",
    title: "NIMCET: AIR-246",
    sub: "National NIT Entrance Exam",
    date: "2024",
    description: "Secured All India Rank 246 in the national entrance exam for admission to MCA programs across all NITs.",
    icon: <Trophy className="w-6 h-6 text-[#c5a880]" />
  },
  {
    category: "award",
    title: "CUET: AIR-51",
    sub: "Central Universities Entrance Test",
    date: "2024",
    description: "Achieved All India Rank 51 among thousands of candidates in the CUET PG exam.",
    icon: <Award className="w-6 h-6 text-[#00f2fe]" />
  },
  {
    category: "award",
    title: "MAH-CET: AIR-120",
    sub: "Maharashtra CET Exam",
    date: "2024",
    description: "Secured All India Rank 120 in the MAH-CET postgraduate exam.",
    icon: <ShieldCheck className="w-6 h-6 text-[#9b51e0]" />
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="radial-glow radial-glow-purple w-[30vw] h-[30vw] bottom-[20%] left-[5%] z-0" />
      <div className="radial-glow radial-glow-gold w-[35vw] h-[35vw] top-[10%] right-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Accomplishments
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            KEY <span className="gold-glow-text font-sans">ACHIEVEMENTS</span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((ach, idx) => (
            <div
              key={idx}
              data-reveal
              className="glass-card card-shadow-3d relative rounded-3xl p-6 md:p-8 border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent flex gap-6 items-start hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Icon Wrapper */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-300 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                {ach.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-[#c5a880] uppercase tracking-widest font-bold">
                    {ach.sub}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5">
                    {ach.date}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {ach.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed pt-2">
                  {ach.description}
                </p>
              </div>

              {/* Corner decorative light element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-tr-3xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
