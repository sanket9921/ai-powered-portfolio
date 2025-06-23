'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript } from 'react-icons/si';


export default function AboutMeCard() {
  return (
    <section
      id="about-full"
      className="min-h-screen w-full bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* 1. INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hey! I'm <span className="font-semibold text-indigo-500">Sanket Gaikwad</span>, a passionate full stack developer with a love for building smart, scalable, and user-focused applications. I specialize in the <span className="font-semibold">MERN stack</span> and frequently integrate AI capabilities into modern web experiences.
          </p>
          <blockquote className="mt-6 text-lg italic text-indigo-500 border-l-4 pl-4 border-indigo-400 dark:border-indigo-600">
            “I believe great software is born from curiosity, empathy, and clean code.”
          </blockquote>
        </motion.div>

        {/* 2. EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">XYZ University, 2018 – 2022</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">CGPA: 8.6 / 10</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">Higher Secondary School (HSC)</h4>
              <p className="text-gray-600 dark:text-gray-400">ABC Junior College, 2016 – 2018</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Score: 84%</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">Secondary School (SSC)</h4>
              <p className="text-gray-600 dark:text-gray-400">DEF High School, 2016</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Score: 90%</p>
            </div>
          </div>
        </motion.div>

        {/* 3. TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Tech Stack & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: FaReact, name: 'React' },
              { icon: SiTailwindcss, name: 'Tailwind CSS' },
              { icon: FaNodeJs, name: 'Node.js' },
              { icon: SiMongodb, name: 'MongoDB' },
              { icon: SiPostgresql, name: 'PostgreSQL' },
              { icon: SiTypescript, name: 'TypeScript' },
              { icon: FaGitAlt, name: 'Git' },
            ].map(({ icon: Icon, name }, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-105 transition"
              >
                <Icon className="text-4xl text-indigo-500 mb-2" />
                <p className="text-sm text-gray-700 dark:text-gray-300">{name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            My Journey
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-400 dark:border-indigo-600 pl-4">
              <h4 className="text-xl font-semibold">2020 – Started with Web Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built my first portfolio and explored React.</p>
            </div>
            <div className="border-l-4 border-indigo-400 dark:border-indigo-600 pl-4">
              <h4 className="text-xl font-semibold">2021 – Freelance Projects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built dashboards and mock test platforms for clients.</p>
            </div>
            <div className="border-l-4 border-indigo-400 dark:border-indigo-600 pl-4">
              <h4 className="text-xl font-semibold">2023 – AI-Powered Projects</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Started integrating AI into products and prototypes.</p>
            </div>
          </div>
        </motion.div>

        {/* 5. VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            My Values
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Clean, maintainable code</li>
            <li>Building solutions that matter</li>
            <li>Transparent communication</li>
            <li>Never stop learning</li>
          </ul>
        </motion.div>

        {/* 6. VIDEO INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Intro Video
          </h3>
          <div className="aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Intro Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* 7. OPEN TO WORK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
            Open to Collaborate
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I’m actively exploring freelance and product-building opportunities.
          </p>
        </motion.div>

        {/* 8. CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/Sanket_Gaikwad_Resume.pdf"
            download
            className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
