"use client";

import { motion } from "framer-motion";
import {
  Brain,
  DollarSign,
  TrendingUp,
  ExternalLink,
  Github,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { projects } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  "dollar-sign": DollarSign,
  "trending-up": TrendingUp,
};

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Enterprise solutions that drive real business impact
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Brain;
            return (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full"
                >
                  <div className="glow-card h-full">
                    <div className="relative glass rounded-2xl p-6 h-full flex flex-col">
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient}`}
                      />

                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {project.impact && (
                        <div className="mb-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                            💰 {project.impact}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50 dark:border-white/10">
                        <button className="flex items-center gap-1.5 text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 transition-colors">
                          <ExternalLink size={12} />
                          View Details
                        </button>
                        <button className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                          <Github size={12} />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
