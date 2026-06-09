"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  DollarSign,
  ShieldCheck,
  Bug,
  Rocket,
  Database,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  "dollar-sign": DollarSign,
  "shield-check": ShieldCheck,
  bug: Bug,
  rocket: Rocket,
  database: Database,
};

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.startsWith("$") ? "$" : "";
  const actualSuffix = value.includes("M")
    ? "M"
    : value.includes("%")
    ? "%"
    : value.includes("+")
    ? "+"
    : "";

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="animate-counter">
      {prefix}
      {numericValue >= 10 ? Math.round(count) : count.toFixed(1)}
      {actualSuffix}
    </span>
  );
}

export function AchievementMetrics() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Impact{" "}
              <span className="gradient-text">Metrics</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Quantifiable results that demonstrate engineering excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Zap;
            return (
              <ScrollReveal key={achievement.value} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className="glass rounded-2xl p-6 text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 mb-4 group-hover:from-primary-500/20 group-hover:to-accent-500/20 transition-colors">
                        <Icon
                          size={24}
                          className="text-primary-600 dark:text-primary-400"
                        />
                      </div>

                      <div className="text-4xl font-bold gradient-text mb-2">
                        <AnimatedCounter value={achievement.metric} />
                      </div>

                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.value}
                      </h4>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-12 glass rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Excellence Award at Nisum
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Recognized for outstanding engineering contributions and consistent delivery
                of high-impact solutions
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
