"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-gray-200/50 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold gradient-text">
              Ramu Dosapati
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
              Built with <Heart size={12} className="text-rose-500" /> using
              Next.js, TypeScript &amp; Tailwind
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary-500/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary-500/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary-500/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </motion.a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
