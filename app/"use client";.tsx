"use client";

import { metrics } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";

export function AchievementMetrics() {
  return (
    <section className="section-wrap">
      <SectionHeading title="Achievement Metrics" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <div key={metric.label} className="glass rounded-2xl p-5 text-center">
            <p className="text-3xl font-bold gradient-text">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm text-zinc-300">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
