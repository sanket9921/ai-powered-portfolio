'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';
import ThemeToggle from './ThemeToggle';

export default function Home() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black dark:bg-slate-900 dark:text-white text-center overflow-hidden">
      <ThemeToggle />
      <ParticlesBackground />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600 dark:text-indigo-400"
      >
        👋 Hi, I'm Sanket
      </motion.h1>

      {/* Subheadline */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-xl md:text-2xl font-medium text-gray-700 dark:text-slate-300 mb-6"
      >
        Freelance Full Stack Developer 🚀
      </motion.h2>

      {/* One-liner */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl text-gray-600 dark:text-slate-400 mb-8 text-base md:text-lg"
      >
        I build AI-powered apps, full-stack systems, and scalable platforms for startups and teams.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button
          onClick={() => scrollToId('Projects')}
          className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2 rounded-xl text-white font-medium shadow"
        >
          🚀 View Projects
        </button>
        <button
          onClick={() => scrollToId('Contact')}
          className="border border-gray-400 dark:border-slate-600 hover:border-gray-600 dark:hover:border-slate-400 text-gray-700 dark:text-slate-300 px-6 py-2 rounded-xl font-medium"
        >
          📬 Hire Me
        </button>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div
          className="animate-bounce text-gray-600 dark:text-slate-400 cursor-pointer"
          onClick={() => scrollToId('Projects')}
        >
          ↓
        </div>
      </motion.div>
    </div>
  );
}
