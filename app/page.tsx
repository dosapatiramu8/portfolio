import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { AchievementMetrics } from "@/components/achievement-metrics";
import { TechArchitecture } from "@/components/tech-architecture";
import { AIInnovation } from "@/components/ai-innovation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";

export default function Home() {
  return (
    <main className="relative">
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AchievementMetrics />
      <TechArchitecture />
      <AIInnovation />
      <Contact />
      <Footer />
    </main>
  );
}
