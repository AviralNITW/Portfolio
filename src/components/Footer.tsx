"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full py-12 bg-[#050507] border-t border-white/[0.06] overflow-hidden z-10 font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Identity */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-white font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>AVIRAL MISHRA</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400 font-normal">NIT WARANGAL MCA</span>
          </div>
          <p className="text-[11px] text-zinc-500 font-normal">
            Engineered with Next.js, React 19, TypeScript, and Framer Motion.
          </p>
        </div>

        {/* Right Side: Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <span>Return to Top</span>
          <span className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/20 group-hover:-translate-y-0.5 transition-all">
            <ArrowUp className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>

      {/* Subtle top border gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </footer>
  );
}
