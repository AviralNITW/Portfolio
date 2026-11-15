"use client";

import React from "react";
import { Github, Linkedin, ExternalLink, Code2, Award, Star } from "lucide-react";

interface CodingProfile {
  platform: string;
  handle: string;
  url: string;
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
}

const profilesData: CodingProfile[] = [
  {
    platform: "LeetCode",
    handle: "leetcode.com/u/AviralNITW",
    url: "https://leetcode.com/u/AviralNITW/",
    stats: [
      { label: "Problems Solved", value: "600+" },
      { label: "Contest Rating", value: "1,666 (Top 15%)" },
      { label: "Max Problem Streak", value: "79 Days" }
    ],
    icon: <Code2 className="w-5 h-5 text-amber-400" />
  },
  {
    platform: "GitHub",
    handle: "github.com/AviralNITW",
    url: "https://github.com/AviralNITW",
    stats: [
      { label: "Public Repositories", value: "10+" },
      { label: "Featured Distributed Systems", value: "6" },
      { label: "Active Pipeline Commits", value: "Consistent" }
    ],
    icon: <Github className="w-5 h-5 text-white" />
  },
  {
    platform: "CodeChef",
    handle: "codechef.com/users/aviralnitw",
    url: "https://www.codechef.com/users/aviralnitw",
    stats: [
      { label: "Peak Rating", value: "1769 (3★)" },
      { label: "Competitive Division", value: "Division 2" },
      { label: "Global Rank", value: "5,626" }
    ],
    icon: <Award className="w-5 h-5 text-cyan-400" />
  },
  {
    platform: "LinkedIn",
    handle: "linkedin.com/in/aviral-mishra-482325324",
    url: "https://www.linkedin.com/in/aviral-mishra-482325324",
    stats: [
      { label: "Professional Network", value: "500+ Connections" },
      { label: "Current Affiliation", value: "NIT Warangal" },
      { label: "Industry Role", value: "AI Full Stack Intern" }
    ],
    icon: <Linkedin className="w-5 h-5 text-blue-400" />
  }
];

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-left border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Online Verification
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            CODING <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">PROFILES</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-normal mt-2">
            Verified algorithmic profiles, open-source repositories, and competitive contest ratings.
          </p>
        </div>

        {/* Profiles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {profilesData.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="obsidian-card group relative rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl font-mono"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide font-sans">
                        {profile.platform}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">
                        {profile.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Statistics Stack */}
                <div className="space-y-3 pt-4 border-t border-white/[0.04] text-xs">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center">
                      <span className="text-zinc-400 font-sans">{stat.label}</span>
                      <span className="text-white font-bold tracking-wide">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Hint */}
              <div className="mt-6 pt-4 border-t border-white/[0.04] text-[11px] text-zinc-500 font-bold uppercase tracking-wider group-hover:text-cyan-400 flex items-center justify-between transition-colors">
                <span>Inspect Credentials</span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
