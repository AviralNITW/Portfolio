"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";

interface TerminalMessage {
  type: "input" | "output" | "error" | "system";
  content: React.ReactNode;
}

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveTerminal({ isOpen, onClose }: InteractiveTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState<TerminalMessage[]>([
    {
      type: "system",
      content: (
        <div className="space-y-1">
          <p className="text-[cyan-400] font-bold">AVIRAL MISHRA [NIT WARANGAL] — SHELL v2.4.0</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-emerald-400 font-bold">&apos;help&apos;</span> to view all commands, or ask questions like <span className="text-cyan-400 font-bold">&apos;ragi&apos;</span>, <span className="text-amber-400 font-bold">&apos;sentinel&apos;</span>, <span className="text-purple-400 font-bold">&apos;why-hire&apos;</span>.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Add input to message history
    const newMessages: TerminalMessage[] = [
      ...messages,
      {
        type: "input",
        content: `visitor@aviral-nitw:~$ ${rawCmd}`,
      },
    ];

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    switch (cmd) {
      case "help":
      case "?":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-2 text-xs">
              <p className="text-[cyan-400] font-bold">Available Commands:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-300 font-mono">
                <div><span className="text-emerald-400 font-bold">whoami</span> — Executive bio</div>
                <div><span className="text-emerald-400 font-bold">projects</span> — Featured systems</div>
                <div><span className="text-emerald-400 font-bold">ragi</span> — Hybrid RAG engine</div>
                <div><span className="text-emerald-400 font-bold">sentinel</span> — 5ms fraud model</div>
                <div><span className="text-emerald-400 font-bold">geostock</span> — Kafka streaming</div>
                <div><span className="text-emerald-400 font-bold">skills</span> — Tech stack matrix</div>
                <div><span className="text-emerald-400 font-bold">stats</span> — LeetCode &amp; Ranks</div>
                <div><span className="text-emerald-400 font-bold">experience</span> — NeuraMach.AI</div>
                <div><span className="text-emerald-400 font-bold">why-hire</span> — Pitch for recruiters</div>
                <div><span className="text-emerald-400 font-bold">contact</span> — Email, Phone &amp; Socials</div>
                <div><span className="text-emerald-400 font-bold">clear</span> — Clear console</div>
                <div><span className="text-emerald-400 font-bold">exit</span> — Close terminal</div>
              </div>
            </div>
          ),
        });
        break;

      case "whoami":
      case "about":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-white font-bold">Aviral Mishra</p>
              <p>🎓 MCA Candidate (2024–2027) @ National Institute of Technology, Warangal (NIT Warangal)</p>
              <p>📊 CGPA: 7.80 · CSE Department</p>
              <p>⚡ Specialization: Low-Latency AI Systems (RAG), Event-Driven Data Streams, and Modern Web Architectures</p>
              <p>🏆 NIMCET 2024: All India Rank 246 (Top 1% nationwide out of 25,000+ candidates)</p>
            </div>
          ),
        });
        break;

      case "ragi":
      case "rag":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-cyan-400 font-bold">RAGI — Hybrid RAG Document Intelligence Platform</p>
              <p>• Architecture: Two-stage retrieval pipeline fusing Dense (ChromaDB + all-MiniLM-L6-v2) and Sparse (BM25Okapi).</p>
              <p>• Fusion: Reciprocal Rank Fusion (RRF, k=60) preventing vocabulary mismatch and hallucination.</p>
              <p>• Neural Re-Ranking: BAAI/bge-reranker-base cross-encoder scoring top-25 candidate passages.</p>
              <p>• LLM Generation: Groq LLaMA-3 sub-second streaming with citation attribution.</p>
              <p className="text-slate-400">🔗 Repo: https://github.com/AviralNITW/rag-document-intelligence</p>
            </div>
          ),
        });
        break;

      case "sentinel":
      case "fraud":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-amber-400 font-bold">SENTINEL — Deceptive Review Detection Engine</p>
              <p>• Dataset: 40,000+ scraped e-commerce reviews (Flipkart/Amazon).</p>
              <p>• Feature Vectors: 102-D (100-D Word2Vec embeddings + 2 metadata deviation signals).</p>
              <p>• Optimization: Linear SVM hyperplane weights compressed into .npz numpy arrays.</p>
              <p>• Latency: Pure NumPy dot-product inference executes in &lt; 5ms on serverless (Vercel) without 500MB+ Scikit-learn overhead!</p>
              <p className="text-slate-400">🔗 Live: https://senitel-drab.vercel.app/ | Repo: https://github.com/AviralNITW/Senitel</p>
            </div>
          ),
        });
        break;

      case "geostock":
      case "geostocklive":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-purple-400 font-bold">GeoStockLive — Real-Time Sentiment &amp; Risk Pipeline</p>
              <p>• Stream Ingestion: Apache Kafka cluster distributing parallel global news feeds.</p>
              <p>• NLP Inference: VADER sentiment scoring + spaCy named entity recognition.</p>
              <p>• Database: PostgreSQL with B-Tree indexes and UPSERT routines preventing write collisions.</p>
              <p>• Live Broadcast: Sub-2.0s telemetry pushed to 3D Globe via FastAPI WebSockets.</p>
              <p className="text-slate-400">🔗 Live: https://geo-stock-live-frontend.vercel.app/</p>
            </div>
          ),
        });
        break;

      case "projects":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-2 text-xs text-slate-300">
              <p className="text-[cyan-400] font-bold">Featured Production Systems:</p>
              <p>1. <span className="text-cyan-400 font-bold">RAGI</span> — Enterprise Hybrid RAG Search (BM25 + ChromaDB + BGE + Groq)</p>
              <p>2. <span className="text-amber-400 font-bold">SENTINEL</span> — Deceptive Review Classifier (&lt;5ms NumPy SVM on Vercel)</p>
              <p>3. <span className="text-purple-400 font-bold">GeoStockLive</span> — Real-Time Kafka &amp; WebSocket Market Risk Engine</p>
              <p>4. <span className="text-blue-400 font-bold">Spark &amp; Hadoop Pipeline</span> — Distributed Delta Lake ETL Cluster</p>
              <p>5. <span className="text-emerald-400 font-bold">VoChat</span> — Ephemeral Voice-First Mobile Network (React Native + Firebase)</p>
            </div>
          ),
        });
        break;

      case "skills":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-2 text-xs text-slate-300">
              <p className="text-[cyan-400] font-bold">Core Technical Stack:</p>
              <p>🧠 <span className="text-white font-bold">AI &amp; NLP:</span> RAG, LangChain, ChromaDB, Sentence-Transformers, BGE Cross-Encoder, Word2Vec, spaCy, Scikit-learn</p>
              <p>⚡ <span className="text-white font-bold">Distributed:</span> Apache Kafka, PySpark, WebSockets, Docker, Delta Lake, FastAPI, REST</p>
              <p>💻 <span className="text-white font-bold">Languages:</span> C++, Python, JavaScript, TypeScript, SQL</p>
              <p>🗄️ <span className="text-white font-bold">Databases:</span> PostgreSQL, MongoDB, Redis, Hadoop HDFS</p>
              <p>🎨 <span className="text-white font-bold">Frontend:</span> Next.js 16, React 19, TailwindCSS, Three.js, Framer Motion</p>
              <p>📚 <span className="text-white font-bold">CS Theory:</span> Data Structures &amp; Algos (600+ Solved), OS, DBMS, Networks</p>
            </div>
          ),
        });
        break;

      case "stats":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-[cyan-400] font-bold">Competitive Ranks &amp; Metrics:</p>
              <p>• 🏆 NIMCET 2024: AIR-246 (Top 1% nationwide out of 25,000+ candidates)</p>
              <p>• 🥇 CUET PG 2024: AIR-51 Nationwide</p>
              <p>• 🎖️ MAH-CET 2024: AIR-120</p>
              <p>• 💻 LeetCode: 600+ Problems Solved | Contest Rating: 1,666 | Max Streak: 79 Days</p>
              <p>• 🌟 CodeChef: 3-Star Coder | Max Rating: 1769 | Div 2</p>
            </div>
          ),
        });
        break;

      case "experience":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-[cyan-400] font-bold">NeuraMach.AI (Dec 2025 – Mar 2026)</p>
              <p className="text-white">Role: AI Full Stack Engineering Intern</p>
              <p>• Built interactive Knowledge Concept Graphs &amp; evaluation dashboards using Next.js &amp; React.</p>
              <p>• Engineered modular REST APIs with FastAPI and conducted unit testing with RCA debugging.</p>
              <p>• Managed PostgreSQL query optimization, indexing, and relational schemas in Agile sprints.</p>
            </div>
          ),
        });
        break;

      case "why-hire":
      case "hire":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-2 text-xs text-slate-300">
              <p className="text-emerald-400 font-bold">Top 3 Reasons to Hire Aviral Mishra:</p>
              <p>1. <span className="text-white font-bold">Strong Algorithmic Foundation:</span> AIR-246 in NIMCET, 600+ LeetCode problems, 3-Star CodeChef — translates into fast, optimal problem-solving under tight deadlines.</p>
              <p>2. <span className="text-white font-bold">Modern AI Production Experience:</span> Built hybrid RAG architectures (ChromaDB + BM25 + BGE Re-rankers) and microsecond ML deployments (&lt;5ms NumPy SVMs), not just toy wrappers.</p>
              <p>3. <span className="text-white font-bold">Systems &amp; Full-Stack Breadth:</span> Deep comfort spanning distributed streaming (Kafka, Spark), relational storage (PostgreSQL indexing), and high-end frontend (Next.js 16, Three.js).</p>
            </div>
          ),
        });
        break;

      case "contact":
        newMessages.push({
          type: "output",
          content: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-[cyan-400] font-bold">Contact Channels:</p>
              <p>✉️ Email: aviralmishra756@gmail.com</p>
              <p>📞 Phone: +91-9511057965</p>
              <p>🌐 GitHub: https://github.com/AviralNITW</p>
              <p>💼 LinkedIn: https://www.linkedin.com/in/aviral-mishra-482325324/</p>
            </div>
          ),
        });
        break;

      case "clear":
        setMessages([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        onClose();
        setInputVal("");
        return;

      default:
        newMessages.push({
          type: "error",
          content: `Command not recognized: '${rawCmd}'. Type 'help' to see valid commands or ask about 'ragi', 'sentinel', 'skills'.`,
        });
        break;
    }

    setMessages(newMessages);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInputVal("");
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(history[nextIndex]);
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`relative rounded-2xl bg-[#05050c] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col font-mono transition-all duration-300 ${
              isMaximized ? "w-[96vw] h-[92vh]" : "w-full max-w-3xl h-[65vh] md:h-[550px]"
            }`}
          >
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/5 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span
                    className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block cursor-pointer"
                    onClick={() => setIsMaximized(!isMaximized)}
                  />
                </div>
                <div className="flex items-center gap-2 ml-3 text-xs text-slate-400">
                  <TerminalIcon className="w-3.5 h-3.5 text-[cyan-400]" />
                  <span>aviral@nitw-gateway:~</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Maximize"
                >
                  {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-grow p-4 md:p-6 overflow-y-auto no-scrollbar space-y-3.5 text-xs md:text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className="leading-relaxed">
                  {msg.type === "input" ? (
                    <div className="text-emerald-400 font-bold flex items-center gap-2">
                      <span>{msg.content}</span>
                    </div>
                  ) : msg.type === "error" ? (
                    <div className="text-rose-400 bg-rose-500/5 p-2 rounded-lg border border-rose-500/10">
                      {msg.content}
                    </div>
                  ) : (
                    <div>{msg.content}</div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Command Input Prompt Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/50 border-t border-white/5">
              <span className="text-emerald-400 font-bold shrink-0 text-xs md:text-sm">
                visitor@aviral-nitw:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'ragi', 'why-hire', 'stats'..."
                className="w-full bg-transparent text-white placeholder-slate-600 text-xs md:text-sm focus:outline-none"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-[cyan-400] text-slate-400 hover:text-black transition-colors"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
