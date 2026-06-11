"use client";

import React from "react";
import { Github, Linkedin, ExternalLink, Code2, Award, Star } from "lucide-react";

interface CodingProfile {
  platform: string;
  handle: string;
  url: string;
  accentColor: string;
  glowClass: string;
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
}

const profilesData: CodingProfile[] = [
  {
    platform: "LeetCode",
    handle: "leetcode.com/u/AviralNITW",
    url: "https://leetcode.com/u/AviralNITW/",
    accentColor: "#ffa116",
    glowClass: "shadow-[#ffa116]/5 border-[#ffa116]/20 hover:border-[#ffa116]/50",
    stats: [
      { label: "Problems Solved", value: "450+" },
      { label: "Global Ranking", value: "Top 8%" },
      { label: "Max Streak", value: "120 Days" }
    ],
    icon: <Code2 className="w-6 h-6 text-[#ffa116]" />
  },
  {
    platform: "GitHub",
    handle: "github.com/AviralNITW",
    url: "https://github.com/AviralNITW",
    accentColor: "#ffffff",
    glowClass: "shadow-white/5 border-white/10 hover:border-white/40",
    stats: [
      { label: "Repositories", value: "24" },
      { label: "Year Contributions", value: "850+" },
      { label: "Pull Requests", value: "84" }
    ],
    icon: <Github className="w-6 h-6 text-white" />
  },
  {
    platform: "CodeChef",
    handle: "codechef.com/users/aviralmishra756",
    url: "https://codechef.com/users/aviralmishra756",
    accentColor: "#9b7653",
    glowClass: "shadow-[#9b7653]/5 border-[#9b7653]/20 hover:border-[#9b7653]/50",
    stats: [
      { label: "Max Rating", value: "1680 (3★)" },
      { label: "Global Rank", value: "4,200" },
      { label: "Division", value: "Div 2" }
    ],
    icon: <Award className="w-6 h-6 text-[#9b7653]" />
  },
  {
    platform: "Codeforces",
    handle: "codeforces.com/profile/aviralmishra756",
    url: "https://codeforces.com/profile/aviralmishra756",
    accentColor: "#3182ce",
    glowClass: "shadow-[#3182ce]/5 border-[#3182ce]/20 hover:border-[#3182ce]/50",
    stats: [
      { label: "Max Rating", value: "1320 (Pupil)" },
      { label: "Contests Solved", value: "34" },
      { label: "Problem Rating Peak", value: "1450" }
    ],
    icon: <Star className="w-6 h-6 text-[#3182ce]" />
  },
  {
    platform: "LinkedIn",
    handle: "linkedin.com/in/aviral-mishra-482325324",
    url: "https://www.linkedin.com/in/aviral-mishra-482325324",
    accentColor: "#0077b5",
    glowClass: "shadow-[#0077b5]/5 border-[#0077b5]/20 hover:border-[#0077b5]/50",
    stats: [
      { label: "Connections", value: "500+" },
      { label: "Profile Views", value: "Top 8%" },
      { label: "Content Engagements", value: "Top 12%" }
    ],
    icon: <Linkedin className="w-6 h-6 text-[#0077b5]" />
  }
];

export default function Profiles() {
  return (
    <section
      id="profiles"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="radial-glow radial-glow-gold w-[35vw] h-[35vw] bottom-[15%] left-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Competitive Standing
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            CODING <span className="gold-glow-text font-sans">PROFILES</span>
          </h2>
        </div>

        {/* Profiles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profilesData.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className={`glass-card group relative rounded-3xl p-6 md:p-8 border bg-gradient-to-b from-white/[0.01] to-transparent flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-2xl ${profile.glowClass}`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-300">
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {profile.platform}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        {profile.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Statistics Stack */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  {profile.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-sm">
                      <span className="text-slate-400 font-medium">{stat.label}</span>
                      <span className="text-white font-bold tracking-wide">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Hint */}
              <div className="mt-8 pt-4 border-t border-white/5 text-xs text-slate-500 font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                View Credentials →
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
