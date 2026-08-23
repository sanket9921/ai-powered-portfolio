'use client';

import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectsGrid from '@/components/cards/ProjectCard';

export default function Projects() {
  return (
    <>
      <section
        id="projects-hero"
        className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold text-orange-500"
          >
            Real Projects. Real Impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            I’ve helped early-stage startups, solo founders, and growing teams turn ideas into working products — fast. From MVPs to internal tools, I build software that ships smart and scales smoothly.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            🚀 10+ fullstack projects delivered using React, Next.js, Spring Boot, and more.
          </motion.p>
        </div>
      </section>

      <ProjectsGrid />
    </>
  );
}
