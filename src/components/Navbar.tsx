"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll to update active section and navbar solid background state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section check based on scroll offset
      const scrollPosition = window.scrollY + 200; // Offset for trigger point
      
      for (const item of navItems) {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#030306]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2 text-xl font-bold tracking-wider"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c5a880] to-[#e6d3ba] flex items-center justify-center text-[#030306] font-extrabold text-sm shadow-lg shadow-[#c5a880]/10 group-hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="text-white group-hover:text-luxury-gold transition-colors duration-300">
              AURA
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/5 p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-full ${
                    isActive ? "text-white" : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.06] border border-white/10 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#030306] bg-gradient-to-r from-[#c5a880] to-[#e6d3ba] rounded-full flex items-center gap-1 shadow-lg shadow-[#c5a880]/20 hover:shadow-[#c5a880]/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#030306]/98 backdrop-blur-2xl flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`text-2xl uppercase tracking-widest font-bold flex items-center justify-between border-b border-white/5 py-4 ${
                      isActive ? "gold-glow-text" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-30" />
                  </motion.a>
                );
              })}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-12 left-12 right-12 text-center"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#030306] bg-gradient-to-r from-[#c5a880] to-[#e6d3ba] rounded-full shadow-lg shadow-[#c5a880]/20"
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
