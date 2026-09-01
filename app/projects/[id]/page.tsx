import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projectsData } from '@/content/projects';
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  Play
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Sanket Gaikwad',
    };
  }

  return {
    title: `${project.title} — Case Study | Sanket Gaikwad`,
    description: project.desc,
    openGraph: {
      title: `${project.title} — Technical Case Study`,
      description: project.desc,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 pt-28 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-semibold hover:border-orange-500 transition shadow-sm"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold shadow-lg shadow-orange-500/20 hover:from-orange-600 hover:to-amber-600 transition"
              >
                <span>Live Product</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 shadow-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/80">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack & AI Case Study</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              <span>Production Delivery</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-orange-50 dark:bg-gray-800 text-orange-600 dark:text-orange-300 border border-orange-200/60 dark:border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Video / Visual Media Demo */}
        {project.videoUrl && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Video Walkthrough</h2>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden bg-black border border-gray-200 dark:border-gray-800 shadow-2xl">
              <iframe
                src={project.videoUrl}
                title={`${project.title} Video Demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Screenshots Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Project Previews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900"
                >
                  <img
                    src={src}
                    alt={`${project.title} preview ${i + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study Core Deep-Dive */}
        {caseStudy && (
          <div className="space-y-8">
            {/* The Problem */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5 text-orange-500 font-bold text-lg">
                <AlertTriangle className="w-5 h-5" />
                <h2>The Problem & Business Context</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Architecture */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg space-y-3">
              <div className="flex items-center gap-2.5 text-orange-500 font-bold text-lg">
                <Cpu className="w-5 h-5" />
                <h2>System Architecture & Tech Decisions</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.architecture}
              </p>
            </div>

            {/* Challenges Overcome */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg space-y-4">
              <div className="flex items-center gap-2.5 text-orange-500 font-bold text-lg">
                <CheckCircle className="w-5 h-5" />
                <h2>Technical Challenges Overcome</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.challenges.map((challenge, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/70 dark:border-gray-700 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics & Impact */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg space-y-4">
              <div className="flex items-center gap-2.5 text-orange-500 font-bold text-lg">
                <BarChart3 className="w-5 h-5" />
                <h2>Verified Metrics & Business Impact</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent dark:from-orange-950/40 dark:via-gray-800/60 dark:to-transparent border border-orange-300 dark:border-orange-900/60 space-y-1"
                  >
                    <span className="text-xl">⚡</span>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Founder Conversion Callout Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Need a similar solution built?</h3>
            <p className="text-sm text-orange-100">
              I specialize in 10-day MVP sprints and scalable AI systems. Let&apos;s turn your product roadmap into reality.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-gray-900 text-sm font-bold shadow-xl hover:bg-gray-100 transition flex-shrink-0"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4 text-orange-500" />
          </Link>
        </div>
      </main>
    </div>
  );
}
