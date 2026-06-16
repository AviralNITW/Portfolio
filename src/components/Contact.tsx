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
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#030306] overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="radial-glow radial-glow-gold w-[30vw] h-[30vw] top-[20%] left-[5%] z-0" />
      <div className="radial-glow radial-glow-purple w-[35vw] h-[35vw] bottom-[10%] right-[5%] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 text-left">
          <div data-path-trigger className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#c5a880]" />
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a880]">
              Get In Touch
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            CONNECT <span className="gold-glow-text font-sans">WITH ME</span>
          </h2>
        </div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div data-reveal className="lg:col-span-5 space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Let's launch something premium together.
              </h3>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Whether you have a vacancy in your engineering team, a freelance project idea, or just want to chat about WebGL and React development, feel free to drop a message.
              </p>
            </div>

            {/* Direct Channels cards */}
            <div className="space-y-4">
              
              <a
                href="mailto:aviralmishra756@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 group-hover:text-[#c5a880] transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Email Direct</p>
                  <p className="text-sm font-semibold text-white mt-0.5">aviralmishra756@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aviral-mishra-482325324"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 group-hover:text-[#c5a880] transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Professional LinkedIn</p>
                  <p className="text-sm font-semibold text-white mt-0.5">linkedin.com/in/aviral-mishra-482325324</p>
                </div>
              </a>

              <a
                href="https://github.com/AviralNITW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 group-hover:text-[#c5a880] transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Code Repositories</p>
                  <p className="text-sm font-semibold text-white mt-0.5">github.com/AviralNITW</p>
                </div>
              </a>

            </div>
          </div>

          {/* Right Side: Form */}
          <div data-reveal className="lg:col-span-7 w-full relative">
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden">
              
              {/* Overlay success message state */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#08080f]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mb-6"
                    >
                      <CheckCircle2 className="w-16 h-16 text-[#c5a880]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                    <p className="text-slate-400 text-sm max-w-sm mb-8">
                      Thank you for reaching out. I have received your request and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-white/[0.04] border border-white/5 hover:border-white/10 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.01] border border-white/5 focus:border-[#c5a880] text-white text-sm outline-none transition-colors duration-300 placeholder-transparent peer"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-5 top-4 text-xs font-semibold text-slate-500 uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#c5a880] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[9px]"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.01] border border-white/5 focus:border-[#c5a880] text-white text-sm outline-none transition-colors duration-300 placeholder-transparent peer"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-5 top-4 text-xs font-semibold text-slate-500 uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#c5a880] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[9px]"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Subject field */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.01] border border-white/5 focus:border-[#c5a880] text-white text-sm outline-none transition-colors duration-300 placeholder-transparent peer"
                    placeholder="Subject"
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-5 top-4 text-xs font-semibold text-slate-500 uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4.5 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#c5a880] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[9px]"
                  >
                    Subject
                  </label>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.01] border border-white/5 focus:border-[#c5a880] text-white text-sm outline-none transition-colors duration-300 placeholder-transparent peer resize-none"
                    placeholder="Message Details"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-4 text-xs font-semibold text-slate-500 uppercase tracking-widest pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:text-[9px] peer-focus:text-[#c5a880] peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-[9px]"
                  >
                    Message Details
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#e6d3ba] text-[#030306] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/15 hover:shadow-[#c5a880]/30 transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border border-t-transparent border-[#030306] animate-spin" />
                  ) : (
                    <>
                      Transmit Transmission
                      <Send className="w-4 h-4" />
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
