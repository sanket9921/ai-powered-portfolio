'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { blogsData, BlogPost } from '@/content/blogs';
import { Clock, Calendar, ArrowRight, Tag, X, BookOpen } from 'lucide-react';

export default function Blogs() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  // Extract unique tags
  const allTags = ['All', ...Array.from(new Set(blogsData.flatMap((b) => b.tags)))];

  const filteredBlogs = selectedTag === 'All'
    ? blogsData
    : blogsData.filter((b) => b.tags.includes(selectedTag));

  return (
    <section id="blogs" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-24 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-xs font-semibold"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Insights</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Dev Notes & <span className="text-orange-500">Case Studies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base"
          >
            I write about web development, AI integration patterns, scalable backend architecture, and freelance experiences.
          </motion.p>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/60 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Date & Read Time */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-orange-500 transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {blog.tags.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] bg-orange-50 dark:bg-gray-700/50 text-orange-600 dark:text-orange-300 px-2.5 py-0.5 rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Full Article Button */}
              <button
                onClick={() => setActiveBlog(blog)}
                className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/60 inline-flex items-center justify-between text-xs font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 cursor-pointer w-full group"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeBlog && (
            <Dialog open={!!activeBlog} onClose={() => setActiveBlog(null)} className="relative z-50">
              <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border dark:border-gray-700 shadow-2xl space-y-6">
                  <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-800 pb-4">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-1">
                        <span>{activeBlog.date}</span>
                        <span>•</span>
                        <span>{activeBlog.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeBlog.title}</h3>
                    </div>
                    <button
                      onClick={() => setActiveBlog(null)}
                      className="text-gray-500 hover:text-black dark:hover:text-white p-1 cursor-pointer"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="prose dark:prose-invert max-w-none text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                    {activeBlog.content}
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-2">
                    {activeBlog.tags.map((t, i) => (
                      <span key={i} className="text-xs bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
