'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export default function DemosSection() {
  const [projectInput, setProjectInput] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!projectInput.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    setRecommendation(null);

    try {
      const res = await fetch('/api/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: `Recommend tech stack for: ${projectInput}`,
          context: `Sanket is expert in React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Supabase, Tailwind CSS, and OpenAI API integrations. Suggest an architectural tech stack.`,
        }),
      });
      const data = await res.json();
      setRecommendation(data.summary ?? 'Recommended Stack: Next.js + Node.js + PostgreSQL + Tailwind CSS.');
    } catch {
      setRecommendation('Recommended Stack: Next.js (App Router) + Supabase + Tailwind CSS + OpenAI API.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="demos" className="min-h-screen bg-white dark:bg-gray-900 px-6 py-24 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Feature Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
          >
            AI Architecture <span className="text-orange-500">Playground</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base"
          >
            Test an interactive AI stack recommender powered by OpenAI. Describe your product idea to get an instant tailored technical architecture recommendation.
          </motion.p>
        </div>

        {/* Interactive Tool Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-700/60 shadow-2xl space-y-6 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 border-b border-gray-100 dark:border-gray-700/60 pb-4">
            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Project Architecture Assistant</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Powered by OpenAI gpt-4o-mini & Sanket's Tech Stack Knowledge Base</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
              Describe Your Product Idea:
            </label>
            <textarea
              rows={3}
              value={projectInput}
              onChange={(e) => setProjectInput(e.target.value)}
              placeholder="e.g. Real-time SaaS platform for coaching institutes with automated mock test analytics and candidate tracking..."
              className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 dark:text-white resize-none"
            />
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !projectInput.trim()}
              className="w-full py-3.5 rounded-xl bg-gradient-to-tr from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white font-medium text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing Architecture & Stack...</span>
                </>
              ) : (
                <>
                  <span>Generate Recommended Stack</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Recommendation Output */}
          {recommendation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50 space-y-2"
            >
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>AI Recommendation Result</span>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                {recommendation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
