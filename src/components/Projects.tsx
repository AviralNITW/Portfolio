"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Cpu,
  Network,
  Terminal as TerminalIcon,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export type ProjectCategory = "all" | "ai" | "distributed" | "fullstack";

/* =========================================================================
   INTERACTIVE PLAYGROUND 1: SENTINEL REVIEW FRAUD CLASSIFIER
   ========================================================================= */
function SentinelInteractiveWidget() {
  const [selectedPreset, setSelectedPreset] = useState<"fake" | "real">("fake");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    label: string;
    isFraud: boolean;
    confidence: number;
    latency: string;
    vectorDim: string;
    steps: string[];
  }>({
    label: "DECEPTIVE / INCENTIVIZED REVIEW",
    isFraud: true,
    confidence: 96.4,
    latency: "3.4ms",
    vectorDim: "102-D (100-D W2V + 2 Metadata)",
    steps: [
      "Regex Tokenization: 14 lexical tokens extracted",
      "Gensim Word2Vec: 100-D mean pooled embeddings computed",
      "Metadata Concatenation: rating deviation + sentiment variance added (102-D)",
      "NumPy Dot-Product: (W · X) + b hyperplane evaluation in 3.4ms"
    ]
  });

  const runSimulation = (preset: "fake" | "real") => {
    setSelectedPreset(preset);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      if (preset === "fake") {
        setResult({
          label: "DECEPTIVE / INCENTIVIZED REVIEW",
          isFraud: true,
          confidence: 96.4,
          latency: "3.2ms",
          vectorDim: "102-D Vector",
          steps: [
            "Regex Tokenization: Extreme hyperbolic sentiment detected",
            "Gensim Word2Vec: Dense embedding aligned with known bot cluster",
            "NumPy Hyperplane: Decision boundary score: +2.84 (> 0 threshold)",
            "Pure NumPy evaluation finished in 3.2ms on serverless"
          ]
        });
      } else {
        setResult({
          label: "VERIFIED ORGANIC REVIEW",
          isFraud: false,
          confidence: 98.1,
          latency: "3.7ms",
          vectorDim: "102-D Vector",
          steps: [
            "Regex Tokenization: Nuanced product specification tokens found",
            "Gensim Word2Vec: Semantic embeddings match verified buyer corpus",
            "NumPy Hyperplane: Decision boundary score: -3.12 (< 0 threshold)",
            "Pure NumPy evaluation finished in 3.7ms on serverless"
          ]
        });
      }
    }, 450);
  };

  return (
    <div className="rounded-2xl bg-black/60 border border-white/10 p-4 md:p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-amber-400">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider text-[11px] uppercase">
            SENTINEL Inference Sandbox
          </span>
        </div>
        <span className="text-[10px] text-slate-400">Pure NumPy SVM (No Scikit-learn overhead)</span>
      </div>

      {/* Preset Review Selectors */}
      <div className="space-y-1.5">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Select Test Sample Payload:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            onClick={() => runSimulation("fake")}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedPreset === "fake"
                ? "bg-amber-500/10 border-amber-500/50 text-amber-200"
                : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[11px]">Bot / Fraud Review</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">Target</span>
            </div>
            <p className="text-[10px] text-slate-400 line-clamp-1 italic">
              &quot;BEST ITEM EVER five stars love it buy now amazing results guaranteed!!&quot;
            </p>
          </button>

          <button
            onClick={() => runSimulation("real")}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              selectedPreset === "real"
                ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-200"
                : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-[11px]">Organic Buyer Review</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Target</span>
            </div>
            <p className="text-[10px] text-slate-400 line-clamp-1 italic">
              &quot;Battery lasts 6.5 hours on 60% brightness. Plastic hinge has slight flex.&quot;
            </p>
          </button>
        </div>
      </div>

      {/* Live Computation Stream */}
      <div className="p-3 rounded-xl bg-[#050508] border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-400">Execution Pipeline:</span>
          <span className="text-cyan-400 font-bold">Latency: {result.latency}</span>
        </div>

        {isAnalyzing ? (
          <div className="py-4 flex items-center justify-center gap-2 text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Computing 102-D Dot Product (W · X) + b ...</span>
          </div>
        ) : (
          <div className="space-y-1 text-[10px] text-slate-300">
            {result.steps.map((st, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-cyan-400">❯</span>
                <span>{st}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Result Status Banner */}
      <div
        className={`p-3 rounded-xl border flex items-center justify-between ${
          result.isFraud
            ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
        }`}
      >
        <div className="flex items-center gap-2">
          {result.isFraud ? (
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <div>
            <p className="font-bold text-[11px]">{result.label}</p>
            <p className="text-[9px] opacity-80">Confidence: {result.confidence}% · Vector: 102-D</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 font-bold text-[10px] text-white">
          &lt; 5ms Vercel
        </span>
      </div>
    </div>
  );
}

/* =========================================================================
   INTERACTIVE PLAYGROUND 2: RAGI HYBRID RETRIEVAL FLOW
   ========================================================================= */
function RagiInteractiveWidget() {
  const [activeQuery, setActiveQuery] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const queries = [
    {
      q: "Explain Reciprocal Rank Fusion (RRF k=60) formulation",
      denseMatch: "all-MiniLM-L6-v2 vector match (Score: 0.89)",
      sparseMatch: "BM25 keyword match for 'RRF', 'formulation' (Score: 14.2)",
      rrfScore: "Rank #1 (Score: 0.0328) -> Cross-Encoder Verified",
      stream: "RRF fuses dense & sparse ranks using sum(1 / (60 + rank)). Eliminates vector hallucination."
    },
    {
      q: "How does the BGE cross-encoder boost precision?",
      denseMatch: "ChromaDB MMR retrieval top-20 candidates",
      sparseMatch: "BM25 inverted index token matching",
      rrfScore: "Joint query-passage attention rescores top-5 candidates",
      stream: "BAAI/bge-reranker-base performs full cross-attention, boosting passage relevance precision by 35%+."
    }
  ];

  const triggerRAG = (idx: number) => {
    setActiveQuery(idx);
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 400);
  };

  const curr = queries[activeQuery];

  return (
    <div className="rounded-2xl bg-black/60 border border-white/10 p-4 md:p-5 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <div className="flex items-center gap-2 text-cyan-400">
          <Cpu className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider text-[11px] uppercase">
            RAGI Two-Stage Hybrid Simulator
          </span>
        </div>
        <span className="text-[10px] text-slate-400">Dense MMR + Sparse BM25 + BGE Reranker</span>
      </div>

      {/* Query Selector Tabs */}
      <div className="space-y-1.5">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Select Question Vector:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {queries.map((item, idx) => (
            <button
              key={idx}
              onClick={() => triggerRAG(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                activeQuery === idx
                  ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-200"
                  : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-[10px]">Query #{idx + 1}</span>
                <span className="text-[8px] px-1.5 py-0.2 rounded bg-white/10 font-mono">Run</span>
              </div>
              <p className="text-[10px] text-slate-300 line-clamp-1 italic">&quot;{item.q}&quot;</p>
            </button>
          ))}
        </div>
      </div>

      {/* Two-Stage Retrieval Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-cyan-500/20">
          <p className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">Stage 1A: Dense Vector Search</p>
          <p className="text-[10px] text-slate-300 mt-1">ChromaDB MMR + all-MiniLM-L6-v2</p>
          <p className="text-[9px] text-slate-400 mt-0.5">{curr.denseMatch}</p>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-cyan-500/20">
          <p className="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">Stage 1B: Sparse Lexical Match</p>
          <p className="text-[10px] text-slate-300 mt-1">BM25Okapi Exact Keyword Index</p>
          <p className="text-[9px] text-slate-400 mt-0.5">{curr.sparseMatch}</p>
        </div>
      </div>

      {/* Stage 2 Cross-Encoder & Stream Output */}
      <div className="p-3 rounded-xl bg-[#05050a] border border-cyan-500/30 space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-cyan-400 font-bold">Stage 2: BGE Cross-Encoder Neural Re-Ranker</span>
          <span className="text-emerald-400 font-mono">Groq LLaMA-3 Stream</span>
        </div>
        <p className="text-[10px] text-slate-300">
          <span className="text-cyan-400 font-bold">Fused RRF Output:</span> {curr.rrfScore}
        </p>
        <p className="text-[11px] text-slate-200 font-sans leading-relaxed border-t border-white/5 pt-1.5">
          &quot;{curr.stream}&quot;
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
   INTERACTIVE PLAYGROUND 3: GEOSTOCKLIVE KAFKA TELEMETRY PULSE
   ========================================================================= */
function GeoStockLiveInteractiveWidget() {
  const [pulseCount, setPulseCount] = useState(142);
  const [latency, setLatency] = useState(1.4);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
      setLatency(Number((1.2 + Math.random() * 0.5).toFixed(2)));
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl bg-black/60 border border-white/10 p-4 font-mono text-xs space-y-3">
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-2 text-purple-400">
          <Network className="w-3.5 h-3.5" />
          <span className="font-bold tracking-wider text-[11px] uppercase">
            Kafka Telemetry Broker
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          WebSocket Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[9px] text-slate-400 uppercase">Kafka Feed Rate</p>
          <p className="text-sm font-bold text-white mt-0.5">{pulseCount} msgs/min</p>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[9px] text-slate-400 uppercase">E2E Stream Latency</p>
          <p className="text-sm font-bold text-purple-300 mt-0.5">&lt; {latency}s</p>
        </div>
        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[9px] text-slate-400 uppercase">PostgreSQL Write</p>
          <p className="text-sm font-bold text-emerald-400 mt-0.5">UPSERT Atomic</p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MAIN BENTO GRID PROJECTS SHOWCASE
   ========================================================================= */
export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [expandedDiagram, setExpandedDiagram] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center py-28 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Grid & Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.06] pb-8">
          <div className="text-left space-y-3">
            <div data-path-trigger className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Architectural Case Studies
              </span>
            </div>
            <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
              ENGINEERED <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">SYSTEMS</span>
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl font-normal">
              Direct technical case studies featuring live interactive sandboxes, verified algorithmic proofs, and sub-second latencies.
            </p>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#0a0a0f] border border-white/[0.08] backdrop-blur-md font-mono">
            {[
              { id: "all", label: "All Systems" },
              { id: "ai", label: "AI & Vector" },
              { id: "distributed", label: "Distributed Streams" },
              { id: "fullstack", label: "Full Stack" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ProjectCategory)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BENTO GRID LAYOUT (TOP 1% ASYMMETRICAL CRAFT)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ==================== BENTO CARD 1: SENTINEL (HERO ANCHOR, 7 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "ai") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                      Flagship ML Microservice · &lt; 5ms Cold Start
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setExpandedDiagram("/projects/sentinel/arch_system_overview.png")}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-all text-[10px] font-mono border border-white/10"
                    >
                      Architecture Blueprint ↗
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                    SENTINEL — Deceptive Review Detection Engine
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-2 font-normal">
                    End-to-end NLP classifier trained on 40,000+ reviews. Linear SVM weights compressed into pure NumPy <code className="text-amber-300">.npz</code> arrays for instant serverless evaluation under 5ms on Vercel without heavy ML libraries.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Python", "Linear SVM", "Word2Vec 100-D", "Pure NumPy", "Flask", "BeautifulSoup", "Vercel"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Embedded Live Playground */}
                <div className="pt-2">
                  <SentinelInteractiveWidget />
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-slate-400">Dataset: <strong className="text-white">40k+ Reviews</strong></span>
                  <span className="text-slate-400">Vector: <strong className="text-white">102-D</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/AviralNITW/Senitel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-white transition-all border border-white/10"
                    title="Source Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://senitel-drab.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-white/10 hover:bg-zinc-200 hover:scale-105 transition-all"
                  >
                    Launch Live App
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==================== BENTO CARD 2: RAGI HYBRID RAG (5 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "ai") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold">
                      Enterprise GenAI Intelligence
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">LangChain + Groq LLaMA-3</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                    RAGI — Two-Stage Hybrid RAG Platform
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1 font-normal">
                    Fuses dense semantic search (ChromaDB + MiniLM) with sparse lexical keywords (BM25Okapi) using Reciprocal Rank Fusion (<code className="text-cyan-300">RRF k=60</code>), rescoring candidates with BGE cross-encoder.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["PyTorch", "ChromaDB", "BM25Okapi", "BGE Reranker", "Groq LLaMA-3", "Streamlit"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[9px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Embedded Interactive RAG Simulator */}
                <div className="pt-2">
                  <RagiInteractiveWidget />
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <span className="text-[10px] text-cyan-400 font-mono font-bold">
                  Precision Boost: +35% with Cross-Encoder
                </span>
                <a
                  href="https://github.com/AviralNITW/rag-document-intelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  Codebase
                </a>
              </div>
            </motion.div>
          )}

          {/* ==================== BENTO CARD 3: GEOSTOCKLIVE (6 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "distributed") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-300 font-bold">
                      Distributed Stream Processing
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">FastAPI + Kafka</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                    GeoStockLive — Market Risk &amp; Sentiment Pipeline
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Event-driven financial telemetry streaming breaking headlines through Kafka into parallel VADER/spaCy sentiment workers. Pushes real-time geopolitical risk scores via WebSockets to a Mapbox 3D globe.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Apache Kafka", "WebSockets", "FastAPI", "PostgreSQL UPSERT", "Docker", "Mapbox GL"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Kafka Live Stream Pulse */}
                <GeoStockLiveInteractiveWidget />
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <span className="text-[10px] text-slate-400 font-mono">
                  Sub-2s End-to-End Latency
                </span>
                <a
                  href="https://geo-stock-live-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Platform
                </a>
              </div>
            </motion.div>
          )}

          {/* ==================== BENTO CARD 4: SPARK & HADOOP PIPELINE (6 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "distributed") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300 font-bold">
                      Big Data Infrastructure
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">PySpark + Delta Lake</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                    Distributed Spark-Hadoop Lakehouse
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Multi-container Docker cluster orchestrating PySpark Master/Workers, Hadoop HDFS, and Hive metastore. Implements ACID transactions with Delta Lake, schema enforcement, and distributed analytical marts.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Apache Spark", "PySpark", "Hadoop HDFS", "Delta Lake", "Hive", "Docker Compose", "PostgreSQL"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Lakehouse Cluster Specs Grid */}
                <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">ACID Transactions</p>
                    <p className="font-bold text-white mt-0.5">Delta Lake Time-Travel</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">Metastore Catalog</p>
                    <p className="font-bold text-white mt-0.5">Apache Hive + HDFS</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                <span className="text-[10px] text-slate-400 font-mono">
                  Fault-Tolerant Distributed Cluster
                </span>
                <a
                  href="https://github.com/AviralNITW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Cluster
                </a>
              </div>
            </motion.div>
          )}

          {/* ==================== BENTO CARD 5: VOCHAT (3 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "fullstack") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-3 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-rose-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-rose-300 font-bold">
                      Mobile · Full Stack
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">React Native + Firebase</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                    VoChat
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Real-time cross-platform messaging app with JWT auth, FCM push notifications, and live presence indicators. Firebase Realtime DB ensures sub-100ms message delivery across Android & iOS.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["React Native", "Firebase RTDB", "JWT", "FCM Push", "AsyncStorage", "Expo"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* VoChat Feature Grid */}
                <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">Message Latency</p>
                    <p className="font-bold text-white mt-0.5">&lt; 100ms P99</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">Platforms</p>
                    <p className="font-bold text-white mt-0.5">Android + iOS</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/5">
                <span className="text-[10px] text-slate-400 font-mono">
                  Sub-100ms Real-Time Messaging
                </span>
                <a
                  href="https://github.com/AviralNITW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Source
                </a>
              </div>
            </motion.div>
          )}

          {/* ==================== BENTO CARD 6: EMS (3 COLS) ==================== */}
          {(activeTab === "all" || activeTab === "fullstack") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-3 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.005] border border-white/10 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-teal-300 font-bold">
                      Web · Full Stack
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">React + Node + MongoDB</span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
                    EMS — Event Management System
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Full-stack event management platform with role-based access (Admin / Organizer / Attendee), real-time seat booking, payment flow, and event analytics dashboard. Live on Vercel.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Node.js", "MongoDB", "Express", "JWT RBAC", "Vercel"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[10px] text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* EMS feature grid */}
                <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">Access Control</p>
                    <p className="font-bold text-white mt-0.5">3-Role RBAC JWT</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <p className="text-[9px] text-slate-500 uppercase">Deployment</p>
                    <p className="font-bold text-white mt-0.5">Vercel Live</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/5">
                <span className="text-[10px] text-slate-400 font-mono">
                  Live Production Deploy
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/AviralNITW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  <a
                    href="https://ems-master.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-mono flex items-center gap-1.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* =========================================================================
          ARCHITECTURE BLUEPRINT FULLSCREEN MODAL
         ========================================================================= */}
      <AnimatePresence>
        {expandedDiagram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedDiagram(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-3xl bg-[#090912] border border-white/10 p-6 md:p-8 overflow-hidden z-10 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h4 className="text-base font-bold text-white font-mono">
                    SENTINEL — System Architecture &amp; Data Pipeline
                  </h4>
                  <p className="text-xs text-slate-400">Flipkart Scraper $\rightarrow$ Word2Vec Feature Vectorization $\rightarrow$ NumPy Hyperplane $\rightarrow$ Vercel Serverless</p>
                </div>
                <button
                  onClick={() => setExpandedDiagram(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/5 bg-black/60 max-h-[70vh] flex items-center justify-center">
                <img
                  src={expandedDiagram}
                  alt="Architecture Blueprint"
                  className="w-full h-auto max-h-[68vh] object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
