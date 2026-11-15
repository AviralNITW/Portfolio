"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  ExternalLink,
  Terminal,
  X,
  Compass,
  Cpu,
  Sparkles,
  Layers
} from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Profiles & Resume" | "Contact & Tools";
  shortcut?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotice(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedNotice(null), 2200);
  };

  const actions: ActionItem[] = [
    // Navigation
    {
      id: "nav-projects",
      title: "Jump to Featured Projects",
      category: "Navigation",
      shortcut: "P",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      onSelect: () => handleScrollTo("projects"),
    },
    {
      id: "nav-skills",
      title: "Jump to Technical Expertise & Skills",
      category: "Navigation",
      shortcut: "S",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      onSelect: () => handleScrollTo("skills"),
    },
    {
      id: "nav-experience",
      title: "Jump to Work Experience",
      category: "Navigation",
      shortcut: "E",
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      onSelect: () => handleScrollTo("experience"),
    },
    {
      id: "nav-about",
      title: "Jump to About & Academics",
      category: "Navigation",
      shortcut: "A",
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      onSelect: () => handleScrollTo("about"),
    },
    {
      id: "nav-contact",
      title: "Jump to Contact Form",
      category: "Navigation",
      shortcut: "C",
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      onSelect: () => handleScrollTo("contact"),
    },

    // Projects Direct
    {
      id: "proj-ragi",
      title: "View RAGI (Hybrid RAG Intelligence Platform)",
      category: "Projects",
      shortcut: "RAG",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      onSelect: () => {
        handleScrollTo("projects");
      },
    },
    {
      id: "proj-sentinel",
      title: "Open SENTINEL Live Demo (<5ms Fraud Engine)",
      category: "Projects",
      shortcut: "LIVE",
      icon: <ExternalLink className="w-4 h-4 text-amber-400" />,
      onSelect: () => {
        window.open("https://senitel-drab.vercel.app/", "_blank");
        onClose();
      },
    },
    {
      id: "proj-geostock",
      title: "Open GeoStockLive Demo (Kafka Streaming)",
      category: "Projects",
      icon: <ExternalLink className="w-4 h-4 text-purple-400" />,
      onSelect: () => {
        window.open("https://geo-stock-live-frontend.vercel.app/", "_blank");
        onClose();
      },
    },

    // Profiles & Resume
    {
      id: "act-resume",
      title: "Download Official Resume (PDF)",
      category: "Profiles & Resume",
      shortcut: "PDF",
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      onSelect: () => {
        window.open("/Aviral_Resume.pdf", "_blank");
        onClose();
      },
    },
    {
      id: "act-leetcode",
      title: "Open LeetCode Profile (600+ Solved, 1666 Rating)",
      category: "Profiles & Resume",
      icon: <Code2 className="w-4 h-4 text-[#ffa116]" />,
      onSelect: () => {
        window.open("https://leetcode.com/u/AviralNITW/", "_blank");
        onClose();
      },
    },
    {
      id: "act-github",
      title: "Open GitHub Profile (@AviralNITW)",
      category: "Profiles & Resume",
      icon: <Github className="w-4 h-4 text-white" />,
      onSelect: () => {
        window.open("https://github.com/AviralNITW", "_blank");
        onClose();
      },
    },
    {
      id: "act-linkedin",
      title: "Open LinkedIn Profile",
      category: "Profiles & Resume",
      icon: <Linkedin className="w-4 h-4 text-[#0077b5]" />,
      onSelect: () => {
        window.open("https://www.linkedin.com/in/aviral-mishra-482325324/", "_blank");
        onClose();
      },
    },

    // Contact & Tools
    {
      id: "act-terminal",
      title: "Launch Interactive Terminal / Ask AI",
      category: "Contact & Tools",
      shortcut: ">_",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      onSelect: () => {
        onClose();
        if (onOpenTerminal) onOpenTerminal();
      },
    },
    {
      id: "act-copy-email",
      title: "Copy Email: aviralmishra756@gmail.com",
      category: "Contact & Tools",
      icon: <Mail className="w-4 h-4 text-slate-300" />,
      onSelect: () => copyToClipboard("aviralmishra756@gmail.com", "Email"),
    },
    {
      id: "act-copy-phone",
      title: "Copy Phone: +91-9511057965",
      category: "Contact & Tools",
      icon: <Phone className="w-4 h-4 text-slate-300" />,
      onSelect: () => copyToClipboard("+91-9511057965", "Phone Number"),
    },
  ];

  const filteredActions = actions.filter((action) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q) ||
      (action.shortcut && action.shortcut.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filteredActions.length || 1)) % (filteredActions.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].onSelect();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredActions, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#09090e] border border-white/[0.08] shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden z-10 flex flex-col font-sans"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-white/[0.01]">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search (e.g. 'RAG', 'Resume', 'Skills', 'LeetCode')..."
                className="w-full bg-transparent text-white placeholder-zinc-500 text-sm md:text-base font-medium focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded-md text-zinc-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-mono">
                ESC
              </div>
            </div>

            {/* Notification alert for copy */}
            {copiedNotice && (
              <div className="px-5 py-2 bg-emerald-500/10 border-b border-emerald-500/20 text-xs text-emerald-400 font-medium flex items-center justify-between">
                <span>{copiedNotice}</span>
              </div>
            )}

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto no-scrollbar p-2 space-y-1">
              {filteredActions.length === 0 ? (
                <div className="p-8 text-center text-zinc-500 text-xs">
                  No matching commands found for &quot;{query}&quot;. Try searching &apos;Projects&apos; or &apos;Skills&apos;.
                </div>
              ) : (
                filteredActions.map((action, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={action.id}
                      onClick={action.onSelect}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-cyan-500/15 text-white border border-cyan-500/30 shadow-sm"
                          : "text-zinc-300 hover:bg-white/[0.03] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-white/[0.03]"
                          }`}
                        >
                          {action.icon}
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-semibold tracking-wide">
                            {action.title}
                          </p>
                          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                            {action.category}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {action.shortcut && (
                          <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-cyan-400">
                            {action.shortcut}
                          </span>
                        )}
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected ? "text-cyan-400 translate-x-1" : "text-transparent"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Palette Footer */}
            <div className="px-5 py-3 border-t border-white/[0.06] bg-black/50 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>ESC Close</span>
              </div>
              <span className="text-cyan-400 font-medium hidden sm:inline">Aviral Mishra // Command Deck</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
