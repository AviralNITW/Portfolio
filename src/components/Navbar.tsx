"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Search, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Overview", href: "#home", id: "home" },
  { name: "Systems", href: "#projects", id: "projects" },
  { name: "Capabilities", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

interface NavbarProps {
  onOpenCommandPalette?: () => void;
  onOpenTerminal?: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenTerminal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-full px-4 sm:px-5 py-2.5 flex items-center gap-4 sm:gap-6 ${
          isScrolled
            ? "bg-[#09090e]/85 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.7)]"
            : "bg-[#09090e]/60 backdrop-blur-xl border border-white/[0.05]"
        }`}
      >
        {/* Brand identity pill */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group font-mono text-xs tracking-wider"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
          <span className="font-bold text-white tracking-tight">AVIRAL</span>
          <span className="text-[10px] text-zinc-500 font-normal hidden md:inline">
            // NITW
          </span>
        </a>

        <div className="h-4 w-[1px] bg-white/[0.08] hidden sm:block" />

        {/* Center Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.08]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </div>

        <div className="h-4 w-[1px] bg-white/[0.08] hidden sm:block" />

        {/* Interactive Quick Triggers */}
        <div className="flex items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-emerald-500/40 text-zinc-400 hover:text-emerald-400 font-mono text-xs flex items-center gap-1.5 transition-all"
              title="Interactive Terminal CLI"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline text-[11px]">Shell</span>
            </button>
          )}

          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-white font-mono text-[11px] transition-all"
              title="Command Palette (Ctrl+K)"
            >
              <Search className="w-3 h-3 text-cyan-400" />
              <span>⌘K</span>
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl bg-[#09090e]/95 border border-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl md:hidden font-mono"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-white/[0.08] text-white font-bold"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600" />
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-white/[0.06] flex items-center gap-2">
                {onOpenTerminal && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTerminal();
                    }}
                    className="flex-1 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-emerald-400 flex items-center justify-center gap-1.5"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Launch Terminal</span>
                  </button>
                )}
                {onOpenCommandPalette && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCommandPalette();
                    }}
                    className="flex-1 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-cyan-400 flex items-center justify-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Command Deck</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
