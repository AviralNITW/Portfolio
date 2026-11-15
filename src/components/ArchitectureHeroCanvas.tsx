"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Network,
  Cpu,
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  Play,
  RotateCw,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Database
} from "lucide-react";

type PipelineMode = "rag" | "sentinel" | "kafka";

interface NodeItem {
  id: string;
  name: string;
  sub: string;
  tag: string;
  type: "source" | "compute" | "storage" | "output";
  latency: string;
}

const pipelineData: Record<
  PipelineMode,
  {
    title: string;
    description: string;
    badge: string;
    metricLabel: string;
    metricValue: string;
    nodes: NodeItem[];
    activePacketLabel: string;
  }
> = {
  rag: {
    title: "Two-Stage Hybrid RAG Pipeline",
    description: "Dense ChromaDB (MMR) + Sparse BM25 with Reciprocal Rank Fusion (k=60) & Cross-Encoder Neural Re-Ranking.",
    badge: "PRECISION RETRIEVAL",
    metricLabel: "Retrieval Accuracy Gain",
    metricValue: "+42% Over Dense-Only",
    activePacketLabel: "Query Embedding (384-D) -> Hybrid Fusion -> Cross-Encoder -> Groq LLaMA-3",
    nodes: [
      { id: "q", name: "User Query", sub: "Text Prompt", tag: "INPUT", type: "source", latency: "< 1ms" },
      { id: "dense", name: "ChromaDB MMR", sub: "all-MiniLM-L6-v2", tag: "DENSE", type: "compute", latency: "14ms" },
      { id: "sparse", name: "BM25 Lucene", sub: "Exact Lexical Match", tag: "SPARSE", type: "compute", latency: "6ms" },
      { id: "rrf", name: "RRF Fusion", sub: "k=60 Harmonic Sum", tag: "RANK", type: "compute", latency: "1.2ms" },
      { id: "rerank", name: "BAAI Cross-Encoder", sub: "Joint Attention", tag: "RE-RANK", type: "compute", latency: "22ms" },
      { id: "llm", name: "Groq LLaMA-3", sub: "Sub-Second Stream", tag: "OUTPUT", type: "output", latency: "180ms" },
    ],
  },
  sentinel: {
    title: "Sentinel Vector Fraud Engine",
    description: "Flipkart Review Scraper feeding Gensim 100-D Word2Vec mean pooling into a Pure NumPy Hyperplane dot-product.",
    badge: "SUB-4MS INFERENCE",
    metricLabel: "Serverless Execution",
    metricValue: "3.4ms Cold Start",
    activePacketLabel: "Scraped Review -> Word2Vec (100-D) -> NumPy (W*X + b) -> Bot/Organic Verdict",
    nodes: [
      { id: "scrape", name: "Review Ingestion", sub: "Raw HTML / Tokenizer", tag: "SCRAPE", type: "source", latency: "12ms" },
      { id: "w2v", name: "Word2Vec 100-D", sub: "Mean Pooled Vectors", tag: "EMBED", type: "compute", latency: "2.1ms" },
      { id: "meta", name: "Feature Concat", sub: "Rating & Polarity Delta", tag: "102-D", type: "compute", latency: "0.4ms" },
      { id: "numpy", name: "NumPy Hyperplane", sub: "Vectorized Dot-Product", tag: "MATH", type: "compute", latency: "0.9ms" },
      { id: "verdict", name: "Fraud Classifier", sub: "Deceptive vs Organic", tag: "VERDICT", type: "output", latency: "3.4ms" },
    ],
  },
  kafka: {
    title: "GeoStockLive Stream Engine",
    description: "Event-driven financial headline ingestion through Apache Kafka into parallel spaCy workers, PostgreSQL UPSERT & WebSockets.",
    badge: "EVENT-DRIVEN STREAM",
    metricLabel: "End-to-End Latency",
    metricValue: "< 1.8s WebSocket Fanout",
    activePacketLabel: "Financial Ticker -> Kafka Broker -> NLP Workers -> PostgreSQL UPSERT -> 3D Mapbox",
    nodes: [
      { id: "feed", name: "Financial Feeds", sub: "Reuters / Bloomberg", tag: "INGEST", type: "source", latency: "< 50ms" },
      { id: "kafka", name: "Apache Kafka", sub: "Partition Key Routing", tag: "BROKER", type: "compute", latency: "4.2ms" },
      { id: "nlp", name: "spaCy / VADER", sub: "Parallel Sentiment", tag: "NLP", type: "compute", latency: "38ms" },
      { id: "pg", name: "PostgreSQL", sub: "Conflict UPSERT", tag: "DB", type: "storage", latency: "12ms" },
      { id: "ws", name: "WebSocket Fanout", sub: "3D Mapbox Telemetry", tag: "CLIENT", type: "output", latency: "18ms" },
    ],
  },
};

export default function ArchitectureHeroCanvas() {
  const [activeMode, setActiveMode] = useState<PipelineMode>("rag");
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  const currentPipeline = pipelineData[activeMode];

  // Automated packet pulse simulation along nodes
  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % currentPipeline.nodes.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [isSimulating, currentPipeline.nodes.length]);

  return (
    <div className="w-full rounded-2xl bg-[#09090e]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl p-5 sm:p-6 font-sans relative overflow-hidden group">
      {/* Top Console Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[10px] text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE ARCHITECTURE ENGINE</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400/90 hidden md:inline">
            // {currentPipeline.badge}
          </span>
        </div>

        {/* Pipeline Mode Selectors */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/5 font-mono text-[11px]">
          <button
            onClick={() => {
              setActiveMode("rag");
              setActiveNodeIndex(0);
            }}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeMode === "rag"
                ? "bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Hybrid RAG
          </button>
          <button
            onClick={() => {
              setActiveMode("sentinel");
              setActiveNodeIndex(0);
            }}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeMode === "sentinel"
                ? "bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Sentinel SVM
          </button>
          <button
            onClick={() => {
              setActiveMode("kafka");
              setActiveNodeIndex(0);
            }}
            className={`px-3 py-1 rounded-lg transition-all ${
              activeMode === "kafka"
                ? "bg-purple-500/15 text-purple-300 font-bold border border-purple-500/30 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Kafka Stream
          </button>
        </div>
      </div>

      {/* Main Architecture Visualizer Stage */}
      <div className="py-6 space-y-5">
        {/* Architecture Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>{currentPipeline.title}</span>
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl mt-1 leading-relaxed">
              {currentPipeline.description}
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-right font-mono shrink-0">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block">
              {currentPipeline.metricLabel}
            </span>
            <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
              {currentPipeline.metricValue}
            </span>
          </div>
        </div>

        {/* Dynamic Topology Node Flow Grid */}
        <div className="relative pt-2">
          {/* Subtle background connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0 hidden lg:block" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 relative z-10 font-mono">
            {currentPipeline.nodes.map((node, idx) => {
              const isActive = idx === activeNodeIndex;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeIndex(idx)}
                  className={`cursor-pointer p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                    isActive
                      ? "bg-white/[0.06] border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] scale-[1.02]"
                      : "bg-[#0c0c12]/90 border-white/[0.05] hover:border-white/20 text-zinc-400"
                  }`}
                >
                  {/* Active node pulsing indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-node-highlight"
                      className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none"
                    />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase">
                        #{idx + 1}
                      </span>
                      <span
                        className={`text-[8px] px-1.5 py-0.5 rounded ${
                          isActive
                            ? "bg-cyan-500/20 text-cyan-300 font-bold"
                            : "bg-white/[0.04] text-zinc-500"
                        }`}
                      >
                        {node.tag}
                      </span>
                    </div>

                    <h4
                      className={`text-xs font-bold tracking-tight line-clamp-1 ${
                        isActive ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {node.name}
                    </h4>
                    <p className="text-[10px] text-zinc-500 mt-1 leading-tight line-clamp-1">
                      {node.sub}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[9px]">
                    <span className="text-zinc-500">Latency</span>
                    <span
                      className={`font-bold ${
                        isActive ? "text-cyan-400" : "text-zinc-400"
                      }`}
                    >
                      {node.latency}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Packet Telemetry Stream Console */}
        <div className="rounded-xl bg-black/70 border border-white/[0.05] p-3 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <div className="truncate">
              <span className="text-zinc-500 mr-2 text-[10px]">CURRENT STAGE:</span>
              <span className="text-zinc-300 text-[11px]">
                {currentPipeline.nodes[activeNodeIndex]?.name} //{" "}
                <span className="text-cyan-400">
                  {currentPipeline.nodes[activeNodeIndex]?.sub}
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-[10px]">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="px-2 py-1 rounded-md bg-white/[0.04] hover:bg-white/10 text-zinc-300 border border-white/5 flex items-center gap-1 transition-colors"
            >
              {isSimulating ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Streaming</span>
                </>
              ) : (
                <>
                  <Play className="w-2.5 h-2.5 text-zinc-400" />
                  <span>Resume</span>
                </>
              )}
            </button>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Sub-system verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
