"use client";

import React from "react";
import { Trophy, Award, Users, ShieldCheck, Code2, ArrowUpRight } from "lucide-react";

interface Achievement {
  category: "hackathon" | "certification" | "leadership" | "award";
  title: string;
  sub: string;
  date: string;
  description: string;
  accent: "cyan" | "emerald" | "amber" | "purple";
  icon: React.ReactNode;
}

const achievementsData: Achievement[] = [
  {
    category: "award",
    title: "NIMCET: AIR-246",
    sub: "National NIT Entrance Exam (Top 1%)",
    date: "2024",
    accent: "emerald",
    description: "Secured All India Rank 246 out of 25,000+ candidates for MCA admission across all National Institutes of Technology.",
    icon: <Trophy className="w-5 h-5 text-emerald-400" />
  },
  {
    category: "award",
    title: "CUET PG: AIR-51",
    sub: "Central Universities Entrance Test",
    date: "2024",
    accent: "cyan",
    description: "Achieved All India Rank 51 nationwide among thousands of computer science applicants.",
    icon: <Award className="w-5 h-5 text-cyan-400" />
  },
  {
    category: "award",
    title: "MAH-CET: AIR-120",
    sub: "Maharashtra CET Postgraduate Exam",
    date: "2024",
    accent: "purple",
    description: "Secured All India Rank 120 demonstrating rigorous analytical and algorithmic aptitude.",
    icon: <ShieldCheck className="w-5 h-5 text-purple-400" />
  },
  {
    category: "award",
    title: "600+ LeetCode & 3★ CodeChef",
    sub: "Algorithmic & Competitive Programming",
    date: "Continuous",
    accent: "amber",
    description: "Consistent problem solver across advanced Graphs, Dynamic Programming, and SQL with a 79-day max streak and 1666+ contest rating.",
    icon: <Code2 className="w-5 h-5 text-amber-400" />
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[350px] bg-emerald-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-left border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Verified Proof
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            KEY <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">ACHIEVEMENTS</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-normal mt-2">
            Competitive national examinations, problem-solving ratings, and algorithmic benchmarks.
          </p>
        </div>

        {/* Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievementsData.map((ach, idx) => (
            <div
              key={idx}
              data-reveal
              className="obsidian-card relative rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] flex gap-5 items-start hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Category Icon Wrapper */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 shrink-0">
                {ach.icon}
              </div>

              {/* Text content */}
              <div className="space-y-2 flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                  <span className={`text-[11px] uppercase tracking-wider font-bold ${
                    ach.accent === "emerald"
                      ? "text-emerald-400"
                      : ach.accent === "cyan"
                      ? "text-cyan-400"
                      : ach.accent === "amber"
                      ? "text-amber-400"
                      : "text-purple-400"
                  }`}>
                    {ach.sub}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-semibold px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/5">
                    {ach.date}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {ach.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
