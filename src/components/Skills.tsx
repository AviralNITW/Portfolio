"use client";

import React from "react";
import { Shield, Database, Layout, Settings, Code, BookOpen } from "lucide-react";

interface Skill {
  name: string;
  level: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5 text-[#c5a880]" />,
    skills: [
      { name: "C++", level: "Advanced", percent: 90 },
      { name: "JavaScript", level: "Advanced", percent: 95 },
      { name: "Python", level: "Proficient", percent: 85 },
      { name: "Java", level: "Proficient", percent: 80 }
    ]
  },
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-[#c5a880]" />,
    skills: [
      { name: "React.js", level: "Advanced", percent: 95 },
      { name: "HTML5 & CSS3", level: "Advanced", percent: 95 },
      { name: "TailwindCSS", level: "Advanced", percent: 90 },
      { name: "Next.js", level: "Advanced", percent: 90 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-[#c5a880]" />,
    skills: [
      { name: "Node.js", level: "Proficient", percent: 85 },
      { name: "MongoDB", level: "Proficient", percent: 85 },
      { name: "PostgreSQL", level: "Proficient", percent: 85 },
      { name: "MySQL", level: "Intermediate", percent: 75 },
      { name: "RESTful APIs", level: "Advanced", percent: 90 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="w-5 h-5 text-[#c5a880]" />,
    skills: [
      { name: "Git & GitHub", level: "Advanced", percent: 90 },
      { name: "Linux (System Calls)", level: "Proficient", percent: 80 },
      { name: "VS Code", level: "Advanced", percent: 95 },
      { name: "Render", level: "Proficient", percent: 85 },
      { name: "Redux", level: "Proficient", percent: 80 }
    ]
  },
  {
    title: "Core CS & Interests",
    icon: <BookOpen className="w-5 h-5 text-[#c5a880]" />,
    skills: [
      { name: "Data Structures & Algos", level: "Advanced", percent: 90 },
      { name: "DBMS", level: "Advanced", percent: 90 },
      { name: "Operating Systems", level: "Proficient", percent: 85 },
      { name: "Distributed Systems", level: "Proficient", percent: 80 },
      { name: "Scalable Backend Systems", level: "Proficient", percent: 80 }
    ]
  }
];

export default function Skills() {
  // 3D Tilt Hover Effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="radial-glow radial-glow-purple w-[30vw] h-[30vw] bottom-[10%] right-[10%] z-0" />
      <div className="radial-glow radial-glow-gold w-[25vw] h-[25vw] top-[15%] left-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              My Arsenal
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            TECHNICAL <span className="gold-glow-text font-sans">EXPERTISE</span>
          </h2>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* Category Header */}
              <div data-reveal className="flex items-center gap-3 border-b border-white/5 pb-3">
                {category.icon}
                <h3 className="text-lg font-bold text-white uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    data-reveal
                    className="glass-card card-shadow-3d relative rounded-2xl p-6 bg-gradient-to-b from-white/[0.01] to-transparent border border-white/5 cursor-default select-none transition-all duration-300 ease-out"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Inner 3D depth elements */}
                    <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">
                        {skill.level}
                      </p>
                      <h4 className="text-base font-bold text-white tracking-wide mb-4">
                        {skill.name}
                      </h4>
                      
                      {/* Glow Progress Visualization */}
                      <div className="relative w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full gold-gradient-bg rounded-full shadow-[0_0_8px_#c5a880]"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[10px] text-slate-400 font-medium">Competency</span>
                        <span className="text-[10px] text-[#e6d3ba] font-bold">{skill.percent}%</span>
                      </div>
                    </div>

                    {/* Accent decorative back glow */}
                    <div className="absolute inset-0 bg-[#c5a880]/1 opacity-0 hover:opacity-100 rounded-2xl blur-md transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
