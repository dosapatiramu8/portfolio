"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Brain, Coffee, Target } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { personalInfo } from "@/lib/data";

const highlights = [
  { icon: Server, label: "Microservices", value: "20+" },
  { icon: Code2, label: "Production Apps", value: "15+" },
  { icon: Cloud, label: "Cloud Deployments", value: "50+" },
  { icon: Brain, label: "AI Projects", value: "3+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  { icon: Target, label: "Years Experience", value: "5+" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About{" "}
              <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              A passionate engineer crafting robust, scalable backend systems
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Engineering Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in building enterprise-grade distributed systems that handle
                  millions of events, optimize business operations, and leverage cutting-edge
                  AI technologies to deliver transformative solutions.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  What Drives Me
                </h3>
                <ul className="space-y-3">
                  {[
                    "Designing systems that scale to millions of users",
                    "Building event-driven architectures with Kafka",
                    "Leveraging Generative AI for real-world business impact",
                    "Mentoring teams and establishing engineering best practices",
                    "Contributing to open source and tech communities",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-5 text-center group cursor-default"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 mb-3 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-colors">
                    <item.icon
                      size={22}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
