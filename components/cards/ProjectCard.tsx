'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, X, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { ProjectItem } from '@/types/portfolio';
import { projectsData } from '@/content/projects';

export interface ProjectCardProps {
  project: ProjectItem;
  isOpenByDefault?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
          {project.videoUrl && (
            <button
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-full shadow-lg transition cursor-pointer z-10"
              title="Watch Video Demo"
            >
              <Play className="w-4 h-4 fill-white" />
            </button>
          )}
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
        {project.caseStudy ? (
          <Link
            href={`/projects/${project.id}`}
            className="text-xs font-bold text-orange-600 dark:text-orange-400 inline-flex items-center gap-1.5 hover:underline cursor-pointer group"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
          </Link>
        ) : <div />}

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

      {/* Video Demo Modal */}
      {project.videoUrl && (
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
      )}
    </motion.div>
  );
};

export interface ProjectsGridProps {
  initialProjectId?: string | null;
}

export default function ProjectsGrid({ initialProjectId }: ProjectsGridProps) {
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
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpenByDefault={initialProjectId === project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

