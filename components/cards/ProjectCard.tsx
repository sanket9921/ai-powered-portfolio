'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Cpu, CheckCircle, AlertTriangle, BarChart3, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { ProjectItem } from '@/types/portfolio';
import { projectsData } from '@/content/projects';

export interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

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
      className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-5 border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between"
    >
      <div>
        {/* Image Slider */}
        <div className="relative rounded-xl overflow-hidden shadow-inner">
          <Slider {...settings}>
            {project.images?.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${project.title} Screenshot ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </Slider>

          {/* Play Demo Button */}
          <button
            onClick={() => setIsVideoOpen(true)}
            className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-full shadow-lg transition cursor-pointer z-10"
            title="Watch Video Demo"
          >
            <Play className="w-4 h-4 fill-white" />
          </button>
        </div>

        {/* Text Content */}
        <div className="space-y-3 mt-6">
          <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.desc}</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 mt-6 flex items-center justify-between gap-2">
        {project.caseStudy && (
          <button
            onClick={() => setIsCaseStudyOpen(true)}
            className="text-xs font-semibold text-orange-600 dark:text-orange-400 inline-flex items-center gap-1.5 hover:underline cursor-pointer"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>Read Case Study</span>
          </button>
        )}

        <div className="flex items-center gap-3 ml-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
              title="View GitHub Repository"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-md transition"
              title="View Live Product"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onClose={() => setIsVideoOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white dark:bg-gray-900 p-5 rounded-2xl max-w-3xl w-full border dark:border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white">{project.title} - Video Demo</h4>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 hover:text-black dark:hover:text-white p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Case Study Modal */}
      {project.caseStudy && (
        <Dialog open={isCaseStudyOpen} onClose={() => setIsCaseStudyOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border dark:border-gray-700 shadow-2xl space-y-6">
              <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-800 pb-4">
                <div>
                  <span className="text-xs uppercase font-bold text-orange-500 tracking-wider">Technical Case Study</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{project.title}</h3>
                </div>
                <button
                  onClick={() => setIsCaseStudyOpen(false)}
                  className="text-gray-500 hover:text-black dark:hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Problem */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span>The Problem</span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Architecture */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-orange-500" />
                  <span>System Architecture</span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  {project.caseStudy.architecture}
                </p>
              </div>

              {/* Challenges */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>Technical Challenges Overcome</span>
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-800">
                  {project.caseStudy.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Key Results / Metrics */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-orange-500" />
                  <span>Key Impact & Metrics</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.metrics.map((m, i) => (
                    <div key={i} className="p-3 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 rounded-xl text-xs font-medium text-orange-800 dark:text-orange-300">
                      ⚡ {m}
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </motion.div>
  );
};

export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 px-6 text-gray-800 dark:text-white py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-orange-500 text-center py-16"
        >
          My Projects & Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
