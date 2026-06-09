"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";

const architectureLayers = [
  {
    name: "Client Layer",
    color: "from-blue-500 to-cyan-500",
    items: ["REST APIs", "GraphQL", "API Gateway"],
  },
  {
    name: "Service Layer",
    color: "from-primary-500 to-indigo-500",
    items: ["Spring Boot", "Spring WebFlux", "Microservices"],
  },
  {
    name: "Event Layer",
    color: "from-accent-500 to-purple-500",
    items: ["Apache Kafka", "Event Sourcing", "CQRS"],
  },
  {
    name: "Data Layer",
    color: "from-emerald-500 to-teal-500",
    items: ["MongoDB", "MySQL", "Vector DB", "Astra DB"],
  },
  {
    name: "Infrastructure",
    color: "from-orange-500 to-rose-500",
    items: ["AWS", "Docker", "Jenkins", "CI/CD"],
  },
  {
    name: "AI/ML Layer",
    color: "from-pink-500 to-rose-500",
    items: ["GenAI", "RAG", "Embeddings", "LLMs"],
  },
];

export function TechArchitecture() {
  return (
    <section className="relative py-24 lg:py-32 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              System{" "}
              <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A holistic view of the technology stack I architect and build with
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {architectureLayers.map((layer, i) => (
            <ScrollReveal key={layer.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative glass rounded-2xl p-5 overflow-hidden group"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${layer.color}`}
                />

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pl-4">
                  <div className="min-w-[140px]">
                    <span
                      className={`text-sm font-bold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent`}
                    >
                      {layer.name}
                    </span>
                  </div>

                  <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-gray-300 dark:from-gray-600 to-transparent" />

                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 group-hover:border-primary-500/30 transition-colors"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {i < architectureLayers.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-px h-4 bg-gradient-to-b from-primary-500/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Event-Driven",
                description:
                  "Asynchronous, decoupled systems using Kafka for real-time data streaming",
                emoji: "⚡",
              },
              {
                title: "Reactive",
                description:
                  "Non-blocking I/O with Spring WebFlux for high-throughput services",
                emoji: "🔄",
              },
              {
                title: "AI-Enhanced",
                description:
                  "Leveraging GenAI and RAG for intelligent data processing and insights",
                emoji: "🧠",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
