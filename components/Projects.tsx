'use client';

import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from "./ProjectCard"
import ProjectsGrid from './ProjectCard';

const projects = [
  {
    title: 'Mock Test App',
    desc: 'Built for coaching institutes to conduct and manage online mock tests efficiently, with auto-evaluation and analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    images: [
      '/images/mock1.png',
      '/images/mock2.png',
      '/images/mock3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Job Portal MVP',
    desc: 'Launched in 10 days to help early-stage startups connect with talent. Includes job listing, applications, and email notifications.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    images: [
      '/images/job1.png',
      '/images/job2.png',
      '/images/job3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    title: 'Internal Ops Dashboard',
    desc: 'Custom admin panel for startup team to manage tasks, users, and internal workflows. Integrated with Google Sheets and Slack API.',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    images: [
      '/images/ops1.png',
      '/images/ops2.png',
      '/images/ops3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/vbLkJsGz8LQ',
  },
  {
    title: 'E-learning Course Hub',
    desc: 'Multi-role platform where admins upload lessons, students enroll, and progress is tracked via a dashboard.',
    tech: ['Vue', 'Firebase', 'Tailwind CSS'],
    images: [
      '/images/learn1.png',
      '/images/learn2.png',
      '/images/learn3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/VYOjWnS4cMY',
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'Frontend + backend app where users upload resumes and get GPT-powered feedback on structure, keywords, and formatting.',
    tech: ['React', 'Express', 'OpenAI API'],
    images: [
      '/images/resume1.png',
      '/images/resume2.png',
      '/images/resume3.png',
    ],
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
];



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
