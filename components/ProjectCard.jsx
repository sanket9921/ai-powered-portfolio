'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { HiOutlineDocumentText } from 'react-icons/hi';

// Sample data (replace or import your project array)
const projects = [
  {
    title: 'Mock Test App',
    desc: 'Built for coaching institutes to manage online mock tests with auto-evaluation and analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    images: ['/projects/mock1.png', '/projects/mock2.png', '/projects/mock3.png'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Job Portal MVP',
    desc: 'Startup hiring MVP with job listings and email notifications.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    images: ['/projects/job1.png', '/projects/job2.png', '/projects/job3.png'],
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    title: 'AI Resume Analyzer',
    desc: 'Users upload resumes and get GPT-powered feedback.',
    tech: ['React', 'Express', 'OpenAI API'],
    images: ['/projects/resume1.png', '/projects/resume2.png', '/projects/resume3.png'],
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  },
];

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 shadow-lg p-4"
    >
      {/* Image Slider */}
      <div className="relative">
        <Slider {...settings}>
          {project.images?.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index}`}
              className="w-full h-48 object-cover"
            />
          ))}
        </Slider>

        {/* Play Demo Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full"
        >
          <Play className="w-5 h-5" />
        </button>
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h3 className="text-2xl mt-10 font-semibold text-orange-600">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="mt-3 text-sm text-orange-600 underline inline-flex items-center gap-1 hover:text-orange-700 cursor-pointer">
          <HiOutlineDocumentText className="w-4 h-4" />
          Read Case Study
        </button>

      </div>

      {/* Modal: Demo Video */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-900 p-4 rounded-xl max-w-3xl w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-500 dark:text-gray-400 float-right"
            >
              Close ✕
            </button>
            <div className="mt-4 aspect-video">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-6  text-gray-800 dark:text-white py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-orange-500 text-center py-25"
        >
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
