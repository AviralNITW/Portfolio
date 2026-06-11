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
    <footer className="relative w-full py-12 bg-[#030306] border-t border-white/5 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
            © {new Date().getFullYear()} Aura Portfolio. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-600 mt-1 uppercase tracking-wider font-semibold">
            Handcrafted with Next.js, WebGL & GSAP
          </p>
        </div>

        {/* Right Side: Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors duration-300"
        >
          Back to Apex
          <span className="p-2 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 group-hover:text-white group-hover:border-white/10 group-hover:-translate-y-1 transition-all duration-300">
            <ArrowUp className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>

      {/* Decorative linear glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent" />
    </footer>
  );
}
