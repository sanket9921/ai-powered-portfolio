import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaBriefcase, FaTools, FaLightbulb, FaRocket, FaRobot, FaServer, FaBook, FaBrain, FaLock, FaUsers, FaArrowRight, FaEye, FaShieldAlt, FaCrosshairs, FaHandsHelping, FaChessKing, FaCertificate, FaUniversity, FaCrown, FaAws, FaGithub, FaLinkedin, FaTwitter, FaChartLine, FaPlay } from "react-icons/fa";
import CursorBlob from "./CursorBlob";
import {
  LayoutDashboard,
  Server,
  BrainCircuit,
  MessageSquareDot,
  Code2,
  Rocket,
  Presentation,
  UserPlus,
  Briefcase,
  BadgeCheck,
  UserCheck,
} from 'lucide-react';

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Connection,
  Edge,
} from 'react-flow-renderer';
import {
  SiReact,
  SiSpring,
  SiMongodb,
  SiSupabase,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiSpringboot,
  SiTypescript,
  SiPostgresql,
  SiExpress,
} from 'react-icons/si';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'Frontend to backend — I build scalable, modern web apps fast.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    desc: 'Embed LLMs, chatbots, or smart automation in your product.',
  },
  {
    icon: Rocket,
    title: 'MVP Launch Support',
    desc: 'Get from idea to usable MVP — without overengineering.',
  },
  {
    icon: Presentation,
    title: 'Tech Consulting',
    desc: 'Need guidance or architecture help? I provide expert direction.',
  },
];

const reasons = [
  {
    icon: LayoutDashboard,
    title: 'Product-First Thinking',
    desc: 'I approach every project with user experience and business goals in mind.',
  },
  {
    icon: Server,
    title: 'End-to-End Ownership',
    desc: 'From frontend UI to backend APIs, I handle the full stack confidently.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Enhanced Development',
    desc: 'I use AI to speed up tasks and unlock smarter, scalable features.',
  },
  {
    icon: MessageSquareDot,
    title: 'Clear Communication',
    desc: 'Daily updates, async collaboration, and no ghosting — ever.',
  },
];

const steps = [
  {
    icon: Code2,
    year: '2019',
    title: 'Started Coding',
    desc: 'Learned the fundamentals of frontend — HTML, CSS, JS — and built mini projects for fun.',
  },
  {
    icon: UserCheck,
    year: '2021',
    title: 'First Freelance Project',
    desc: 'Built a real-world landing page, collaborated with a client, and learned how to deliver value.',
  },
  {
    icon: Briefcase,
    year: '2022',
    title: 'Startup Collaborations',
    desc: 'Worked with early-stage teams to build MVPs and contribute to fast-moving codebases.',
  },
  {
    icon: Rocket,
    year: '2023–Now',
    title: 'Full-Time Freelancer',
    desc: 'Helping founders ship fast, solve hard problems, and scale smart — all through clean code.',
  },
];

const techStack = {
  Frontend: [
    {
      name: 'React.js',
      icon: SiReact,
      desc: 'Modern UI library for building interfaces',
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      desc: 'React framework for SSR and fullstack apps',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      desc: 'Utility-first CSS framework for rapid styling',
    },

  ],
  Backend: [
    {
      name: 'Express.js',
      icon: SiExpress,
      desc: 'Minimalist Node.js framework for APIs',
    },
    {
      name: 'Spring Boot',
      icon: SiSpringboot,
      desc: 'Java backend framework for scalable APIs',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      desc: 'Event-driven JS runtime for server-side apps',
    },
  ],
  Database: [
    {
      name: 'MongoDB',
      icon: SiMongodb,
      desc: 'NoSQL database optimized for fast dev & scale',
    },
    {
      name: 'Supabase',
      icon: SiSupabase,
      desc: 'Open source Firebase alternative with Postgres',
    },
    {
      name: 'postgresql',
      icon: SiPostgresql,
      desc: 'Relational database for structured data',
    },
  ],
  Infra: [
    {
      name: 'TypeScript',
      icon: SiTypescript,
      desc: 'Strongly typed JS for reliable development',
    },
  ],
};

export default function AboutMeCard() {


  return (<>

    <div className="w-full hero-blob-bg relative overflow-hidden">
      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <section id="hero" className="relative container mx-auto h-auto md:h-screen bg-none pt-20 md:pt-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 h-full items-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-center p-4 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Floating Headline */}
            <motion.div
              className=""
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="container mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-left text-gray-800 dark:text-white">
                  The <span className="text-[var(--color-primary)]">Mind</span> Behind the <span className="text-[var(--color-primary)]">Code</span>
                </h1>
              </div>
            </motion.div>

            {/* Intro Text */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 text-center md:text-left leading-relaxed z-20 mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Hi, I'm Sanket! A passionate developer and AI enthusiast with a knack for creating innovative solutions that blend technology and creativity. Welcome to my portfolio!
            </motion.p>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center md:justify-start mt-6 space-x-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl md:text-3xl text-gray-800 hover:text-gray-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl md:text-3xl text-blue-700 hover:text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl md:text-3xl text-blue-500 hover:text-blue-400" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section - Hidden on small screens, shown on medium and up */}
          <motion.div
            className="relative hidden md:flex justify-end items-end mt-[50px] mr-10 z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Cards */}
            <div
              className="absolute w-full h-[400px] md:w-full md:h-[750px] bottom-0 right-20 z-0 bg-[length:40px_40px] bg-[center] bg-grid-light dark:bg-grid-dark"
            />
            <div className="absolute w-full h-[700px] z-10 rotate-6" style={{ backgroundColor: '#ffb38a' }}></div>
            <div className="absolute w-full h-[700px] z-20" style={{ backgroundColor: '#ff7e26' }}></div>

            {/* Main Image */}
            <motion.div
              className="relative w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] z-30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/sanket_photo2.png"
                alt="Avatar"
                className="w-full h-full object-cover"
              />

              {/* Play Button */}
              <motion.div
                className="absolute left-[-75px] bottom-1/2 z-40"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => alert('Play intro video')}
                  className="relative w-20 h-20 md:w-30 md:h-30 rounded-full flex items-center justify-center bg-white backdrop-blur-lg text-[var(--color-primary)] text-xl md:text-3xl font-bold shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <FaPlay />
                  <span className="absolute inset-0 rounded-full border-4 border-[var(--color-primary)] animate-ping-slow" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>

    <section
      id="why-hire-me"
      className="min-h-screen flex items-center bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-16 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left: Heading + Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 order-2 lg:order-1"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Built <span className="text-[var(--color-primary)]"> Different.</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
            I combine clean code, product thinking, and AI-enhanced workflows to deliver MVPs that move fast — and feel right.
          </p>
          <p className="italic text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
            “Delivered my MVP in just 10 days — exceeded expectations!” — Startup Founder
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-orange-600 transition text-sm sm:text-base">
            View My Work →
          </button>
        </motion.div>

        {/* Right: Zigzag Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative order-1 lg:order-2">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg dark:border dark:border-gray-700 shadow-lg h-48 sm:h-64 z-10 flex flex-col justify-between ${index % 2 === 0 ? 'sm:mt-6' : 'sm:mb-6'
                }`}
            >
              <item.icon className="w-8 sm:w-10 h-8 sm:h-10 mb-2 sm:mb-4 text-[var(--color-primary)]" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section
      id="what-i-do-best"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 py-12 sm:py-20 text-gray-800 dark:text-white flex items-center"
    >
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-10 gap-8 sm:gap-16 items-start">
        {/* Left: Services (70%) - Reordered to appear first on mobile */}
        <div className="col-span-1 lg:col-span-7 space-y-8 sm:space-y-12 order-2 lg:order-1">
          {services.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4 sm:gap-6`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-full shadow-md">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
                </div>

                {/* Text */}
                <div className="text-center md:text-left max-w-xl">
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 dark:text-orange-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Heading (30%) - Reordered to appear first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-3 text-center lg:text-right space-y-4 sm:space-y-6 order-1 lg:order-2"
        >
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Focused <span className="text-[var(--color-primary)]"> Expertise.</span> Measurable <span className="text-[var(--color-primary)]">Outcomes.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:ml-auto">
            I bring a product-minded approach to development — delivering fast, scalable solutions that solve real problems, align with business goals, and are ready to grow from day one.
          </p>
        </motion.div>
      </div>
    </section>

    <section
      id="my-journey"
      className="min-h-screen bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-950 py-12 sm:py-24 px-4 sm:px-6 text-gray-800 dark:text-white relative"    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-28"
        >
          My <span className="text-[var(--color-primary)]">Journey</span>
        </motion.h2>

        {/* Glowing center trail */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-orange-400 dark:border-orange-600 z-0" />

        <div className="relative z-10  space-y-20 ">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
              >
                {/* Line connector dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full z-10 shadow-md" />

                {/* Card */}
                <div
                  className={`relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full md:w-[40%] z-10 ${isEven ? 'md:ml-16' : 'md:mr-16'
                    }`}
                >
                  <div className="bg-orange-100 dark:bg-gray-700 p-3 rounded-full mb-4 inline-block">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <p className="text-sm text-orange-600 font-medium">{step.year}</p>
                  <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

   <section
  id="tech-stack"
  className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-24 px-4 sm:px-6 text-gray-800 dark:text-white mb-5"
>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8 sm:gap-16 items-start">
    {/* Left: Tech stack - reordered to appear second on mobile */}
    <div className="space-y-8 sm:space-y-14 order-2 lg:order-1">
      {Object.entries(techStack).map(([category, tools], catIndex) => (
        <div key={category} className="space-y-3 sm:space-y-4">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="text-lg sm:text-xl font-semibold text-orange-600"
          >
            {category}
          </motion.h3>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {tools.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative group"
                >
                  <div className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-orange-100 dark:bg-gray-800 text-xs sm:text-sm font-medium shadow-sm sm:shadow-md hover:scale-105 hover:shadow-lg transition duration-200 ring-1 sm:ring-2 ring-transparent hover:ring-orange-400">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                    <span>{tool.name}</span>
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 bottom-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 text-xs bg-orange-200 text-black px-2 py-1 rounded-md whitespace-nowrap z-10 transition-all duration-300">
                    {tool.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    {/* Right: Heading and description - reordered to appear first on mobile */}
    <div className="flex items-center h-full order-1 lg:order-2">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left space-y-4 sm:space-y-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          The <span className="text-[var(--color-primary)]">Tools</span> Behind My <span className="text-[var(--color-primary)]">Velocity</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Every project I touch is powered by a thoughtful blend of modern technologies.
          These tools aren't just checkboxes — they're part of the way I think, build, and deliver.
        </p>
      </motion.div>
    </div>
  </div>
</section>


  </>
  );
}