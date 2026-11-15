"use client";

import React from "react";
import { Brain, Network, Code, Database, Layout, CheckCircle2 } from "lucide-react";

interface Capability {
  name: string;
  subsystem: string;
  tag: string;
  status: "Production" | "Engineered" | "Core";
}

interface CapabilityGroup {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  capabilities: Capability[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Generative AI, NLP & Vector Systems",
    subtitle: "High-precision retrieval architectures & microsecond inference",
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    capabilities: [
      {
        name: "Two-Stage Hybrid RAG",
        subsystem: "Dense MMR + Sparse BM25 Fusion",
        tag: "RRF (k=60)",
        status: "Production",
      },
      {
        name: "Neural Re-Ranking",
        subsystem: "Cross-Encoder Joint Attention",
        tag: "BAAI/bge-reranker",
        status: "Production",
      },
      {
        name: "Vector Embeddings",
        subsystem: "Cosine Similarity & Vector Clustering",
        tag: "all-MiniLM-L6-v2",
        status: "Engineered",
      },
      {
        name: "ChromaDB & Vector Stores",
        subsystem: "HNSW Indexing & Semantic Metadata Filtering",
        tag: "Vector DB",
        status: "Production",
      },
      {
        name: "Word2Vec Feature Engineering",
        subsystem: "100-D Dense Mean Pooling + Metadata Variance",
        tag: "102-D Vectors",
        status: "Engineered",
      },
      {
        name: "Pure NumPy SVM Inference",
        subsystem: "Compressed .npz Weights Dot-Product",
        tag: "< 5ms Serverless",
        status: "Production",
      },
      {
        name: "LLM Orchestration & Streaming",
        subsystem: "Sub-Second Low-Latency Token Generation",
        tag: "Groq LLaMA-3",
        status: "Production",
      },
      {
        name: "NLP Feature Tokenizers",
        subsystem: "Entity Recognition & Polarity Scoring",
        tag: "spaCy & VADER",
        status: "Core",
      },
    ],
  },
  {
    title: "Distributed Streaming & Big Data",
    subtitle: "Event-driven brokers, containerized clusters & ACID transactions",
    icon: <Network className="w-5 h-5 text-purple-400" />,
    capabilities: [
      {
        name: "Apache Kafka",
        subsystem: "Partition Key Routing & Message Queuing",
        tag: "Event Streams",
        status: "Production",
      },
      {
        name: "PySpark Distributed ETL",
        subsystem: "Partition Pruning & Broadcast Hash Joins",
        tag: "Spark 3.x",
        status: "Engineered",
      },
      {
        name: "Delta Lake Lakehouse",
        subsystem: "ACID Transactions & Schema Enforcement",
        tag: "Time-Travel",
        status: "Engineered",
      },
      {
        name: "WebSockets Telemetry",
        subsystem: "Bidirectional Real-Time Risk Broadcast",
        tag: "Sub-2s Latency",
        status: "Production",
      },
      {
        name: "FastAPI Async Microservices",
        subsystem: "Non-blocking Uvicorn Event Loop & OpenAPI",
        tag: "Async Python",
        status: "Production",
      },
      {
        name: "Docker Compose Infrastructure",
        subsystem: "Multi-Node Spark & Hadoop Cluster Topology",
        tag: "Containers",
        status: "Core",
      },
    ],
  },
  {
    title: "Databases & Storage Engines",
    subtitle: "High-throughput schema design, indexing & persistence",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    capabilities: [
      {
        name: "PostgreSQL Advanced Schemas",
        subsystem: "Atomic UPSERTs & Composite B-Tree Indexes",
        tag: "Zero Lock Contention",
        status: "Production",
      },
      {
        name: "Redis In-Memory Caching",
        subsystem: "Key-Value Expiry & Session State Stores",
        tag: "Sub-ms Cache",
        status: "Production",
      },
      {
        name: "MongoDB Aggregations",
        subsystem: "Pipeline Transforms & Flexible Document Models",
        tag: "NoSQL",
        status: "Core",
      },
      {
        name: "Hadoop HDFS Storage",
        subsystem: "Distributed Block Replication & Fault Tolerance",
        tag: "HDFS Clustered",
        status: "Engineered",
      },
    ],
  },
  {
    title: "Core Languages & Algorithmic Engineering",
    subtitle: "Rigorous algorithmic problem solving and low-level control",
    icon: <Code className="w-5 h-5 text-emerald-400" />,
    capabilities: [
      {
        name: "C++ (Modern C++17/20)",
        subsystem: "STL Containers, Memory Allocation & Algorithms",
        tag: "Competitive DSA",
        status: "Core",
      },
      {
        name: "Python (Systems & AI)",
        subsystem: "NumPy Vectorization, Generators & Concurrency",
        tag: "High-Throughput",
        status: "Production",
      },
      {
        name: "TypeScript & JavaScript",
        subsystem: "Strict Type Safety & Async Event Loops",
        tag: "Full-Stack",
        status: "Production",
      },
      {
        name: "Relational SQL",
        subsystem: "Complex Joins, Window Functions & CTEs",
        tag: "Analytics",
        status: "Core",
      },
    ],
  },
  {
    title: "Frontend Architecture & Creative UI",
    subtitle: "High-performance responsive rendering & web graphics",
    icon: <Layout className="w-5 h-5 text-pink-400" />,
    capabilities: [
      {
        name: "React 19 & Next.js 16",
        subsystem: "React Compiler, Server Components & Dynamic Bundles",
        tag: "App Router",
        status: "Production",
      },
      {
        name: "TailwindCSS v4",
        subsystem: "Zero-Runtime JIT Utility Design System",
        tag: "Modern UI",
        status: "Production",
      },
      {
        name: "Three.js / React Three Fiber",
        subsystem: "Interactive Shader Scenes & 3D Shading",
        tag: "WebGL R3F",
        status: "Engineered",
      },
      {
        name: "Framer Motion & GSAP",
        subsystem: "Spring Physics & Coordinated Layout Transitions",
        tag: "Micro-Interactions",
        status: "Production",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full flex items-center justify-center py-28 bg-[#050507] overflow-hidden"
    >
      {/* Background Precision Dot Grid & Ambient Halo */}
      <div className="absolute inset-0 linear-dot-grid opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-cyan-500/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-left space-y-3 border-b border-white/[0.06] pb-8">
          <div data-path-trigger className="inline-flex items-center gap-2">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-[10px] md:text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Subsystem Competencies
            </span>
          </div>
          <h2 data-reveal className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            ENGINEERING <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">CAPABILITIES</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl font-normal">
            No subjective percentage bars. Direct proof of architectural subsystems engineered across production systems, vector pipelines, and distributed data clusters.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {capabilityGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="rounded-3xl bg-white/[0.015] border border-white/5 p-6 md:p-8 space-y-6 hover:border-white/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 shadow-sm">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest self-start sm:self-auto">
                  {group.capabilities.length} Subsystems
                </span>
              </div>

              {/* High-Density Capability Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.capabilities.map((cap, capIdx) => (
                  <div
                    key={capIdx}
                    className="p-4 rounded-2xl bg-[#09090e] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 group-hover:text-cyan-400 transition-colors">
                          {cap.tag}
                        </span>
                        <span
                          className={`text-[9px] font-mono font-bold ${
                            cap.status === "Production"
                              ? "text-emerald-400"
                              : cap.status === "Engineered"
                              ? "text-cyan-400"
                              : "text-amber-400"
                          }`}
                        >
                          {cap.status}
                        </span>
                      </div>

                      <h4 className="text-xs md:text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                        {cap.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                        {cap.subsystem}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[9px] font-mono text-zinc-500">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>Verified in Systems</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
