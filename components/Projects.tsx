'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Mock Test Platform',
    description:
      'Custom AI-powered mock test system for campus and competitive prep. Includes live scoring, analytics, and question banks.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
    liveLink: 'https://your-live-demo-link.com',
    githubLink: 'https://github.com/your-username/mock-test-platform',
  },
  {
    title: 'Campus Job Portal',
    description:
      'Multi-role web app for colleges, companies, and students. Includes job applications, role-based dashboards, and TPO controls.',
    tech: ['React', 'Express', 'Sequelize', 'PostgreSQL'],
    liveLink: 'https://campus-portal.com',
    githubLink: 'https://github.com/your-username/job-portal',
  },
  {
    title: 'Portfolio AI (This Site)',
    description:
      'AI-powered interactive portfolio that dynamically renders sections based on user queries. Built with Next.js and Groq backend.',
    tech: ['Next.js', 'Tailwind', 'AI SDK', 'Groq', 'TypeScript'],
    liveLink: 'https://your-portfolio.com',
    githubLink: 'https://github.com/your-username/portfolio-ai',
  },
];

export default function Projects() {
  return (
    <section
      id="projects-full"
      className="min-h-screen w-full bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12 text-center">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-sm mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-lg">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-500 flex items-center gap-1"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-500 flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
