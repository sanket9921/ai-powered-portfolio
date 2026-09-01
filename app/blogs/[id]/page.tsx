import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogsData } from '@/content/blogs';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  ArrowRight,
  Share2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return {
      title: 'Article Not Found | Sanket Gaikwad',
    };
  }

  return {
    title: `${blog.title} | Sanket Gaikwad`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogsData.filter((b) => b.id !== id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pt-28 space-y-10">
        {/* Navigation & Breadcrumbs */}
        <div className="flex items-center justify-between">
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <div className="space-y-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-gray-800/80 shadow-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/80">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Article</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            {blog.title}
          </h1>

          {/* Author & Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-bold text-white shadow-md">
                SG
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Sanket Gaikwad</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Full-Stack & AI Systems Integrator</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-500" />
                {blog.date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl space-y-6">
          <div className="prose dark:prose-invert max-w-none text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line space-y-6">
            {blog.content}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-orange-500 mr-1" />
            {blog.tags.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-orange-50 dark:bg-gray-800 text-orange-600 dark:text-orange-400 border border-orange-200/60 dark:border-gray-700"
              >
                #{t}
              </span>
            ))}
          </div>
        </article>

        {/* Related Articles Card */}
        {relatedBlogs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blogs/${item.id}`}
                  className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition shadow-md flex flex-col justify-between space-y-3 group"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-orange-500">{item.date}</span>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition">
                      {item.title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 dark:text-orange-400">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center space-y-3 shadow-xl">
          <h3 className="text-2xl font-bold">Have a technical problem or MVP to build?</h3>
          <p className="text-sm text-orange-100 max-w-xl mx-auto">
            I help solo founders and teams build scalable full-stack applications with intelligent AI integrations.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-gray-900 text-sm font-bold shadow-lg hover:bg-gray-100 transition"
            >
              <span>Get in Touch with Sanket</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
