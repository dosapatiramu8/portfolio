"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Layers, Sparkles, Bot } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const aiCapabilities = [
  {
    icon: Brain,
    title: "Generative AI",
    description:
      "Building intelligent applications using LLMs for content generation, summarization, and conversational AI.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Layers,
    title: "RAG Pipelines",
    description:
      "Retrieval-Augmented Generation architectures combining vector databases with LLMs for accurate, contextual responses.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Network,
    title: "Agentic Workflows",
    description:
      "Designing autonomous AI agents that can reason, plan, and execute complex multi-step tasks.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Vector Databases",
    description:
      "Implementing semantic search and similarity matching using embedding models and vector stores.",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    icon: Sparkles,
    title: "Sentiment Analysis",
    description:
      "AI-powered customer sentiment analysis for actionable business intelligence and insights.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Bot,
    title: "MCP (Model Context Protocol)",
    description:
      "Implementing standardized protocols for AI model communication and context management.",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function AIInnovation() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Sparkles size={16} className="text-accent-500" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                AI &amp; Innovation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              AI &amp;{" "}
              <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Pushing the boundaries of what is possible with Generative AI and modern architectures
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, i) => (
            <ScrollReveal key={capability.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full"
              >
                <div className="glass rounded-2xl p-6 h-full relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${capability.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <capability.icon size={22} className="text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-16 glass rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl">
                  <Brain size={32} className="text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  🚀 Sentilytics — AI-Powered Review Intelligence
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Built an end-to-end Generative AI platform that analyzes thousands of customer
                  reviews using LLMs, extracts sentiment patterns, identifies key themes, and
                  generates actionable business insights — transforming raw feedback into strategic
                  intelligence.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium shadow-lg">
                  <Brain size={14} />
                  GenAI Project
                </span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
