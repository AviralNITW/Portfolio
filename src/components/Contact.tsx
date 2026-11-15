"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/aviralmishra756@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || "Portfolio Contact Message",
          message: formState.message
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("FormSubmit Error:", data);
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Connection Error:", error);
      alert("Unable to connect to the email server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-left border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Direct Ingestion
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            GET IN <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">TOUCH</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-normal mt-2">
            Open for full-time Software Engineer &amp; AI Engineering roles, distributed systems discussions, or high-throughput collaborations.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Direct channels column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="obsidian-card rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Communication Channels
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Verified routes for career opportunities, technical inquiries, and engineering discussions.
                </p>
              </div>

              {/* Direct email card */}
              <a
                href="mailto:aviralmishra756@gmail.com"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 flex items-center gap-3.5 transition-all group font-mono"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-bold">
                    Primary Inbox
                  </span>
                  <span className="text-xs text-white group-hover:text-cyan-400 transition-colors truncate block">
                    aviralmishra756@gmail.com
                  </span>
                </div>
              </a>

              {/* Social Channels */}
              <div className="space-y-2 pt-2 border-t border-white/[0.04] font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/aviral-mishra-482325324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-zinc-600">↗</span>
                </a>

                <a
                  href="https://github.com/AviralNITW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="text-zinc-600">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="obsidian-card rounded-3xl p-6 md:p-8 border border-white/[0.08] bg-[#09090e] relative overflow-hidden">
              {/* Success Modal / State */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#09090e]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mb-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Transmitted</h3>
                    <p className="text-zinc-400 text-xs max-w-sm mb-6 leading-relaxed">
                      Thank you for reaching out. Your transmission has been ingested and routed to my primary inbox.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 text-xs font-mono text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 text-white text-xs outline-none transition-colors placeholder-zinc-600"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 text-white text-xs outline-none transition-colors placeholder-zinc-600"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 text-white text-xs outline-none transition-colors placeholder-zinc-600"
                    placeholder="Engineering Role / Project Discussion"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-cyan-400 text-white text-xs outline-none transition-colors placeholder-zinc-600 resize-none font-sans"
                    placeholder="Describe your project, role, or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-black animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
