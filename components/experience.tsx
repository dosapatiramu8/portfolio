"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  CheckCircle2,
  Award,
  ChevronRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Professional{" "}
              <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Building impactful solutions at scale across enterprise environments
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.company}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50 z-10">
                    <div className="absolute inset-0 rounded-full animate-ping bg-primary-500/40" />
                  </div>

                  <div className="lg:w-1/2 pl-12 lg:pl-0">
                    <div
                      className={`glass rounded-2xl p-6 lg:p-8 ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                            <Building2 size={22} className="text-primary-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {exp.company}
                            </h3>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                              {exp.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-500/10 text-xs font-medium text-primary-600 dark:text-primary-400 ml-auto">
                          <Calendar size={12} />
                          {exp.duration}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-0.5 text-primary-500 flex-shrink-0"
                            />
                            {resp}
                          </motion.div>
                        ))}
                      </div>

                      {exp.achievements && (
                        <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-white/10">
                          <div className="flex items-center gap-2 mb-3">
                            <Award size={16} className="text-amber-500" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              Key Achievements
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {exp.achievements.map((ach, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 bg-emerald-500/5 rounded-lg px-3 py-2"
                              >
                                <CheckCircle2
                                  size={12}
                                  className="text-emerald-500 flex-shrink-0"
                                />
                                {ach}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
