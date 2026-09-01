'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, X, Bot, ArrowRight } from 'lucide-react';

export interface AIResponseCardProps {
  message: string;
  onClose?: () => void;
}

export default function AIResponseCard({ message, onClose }: AIResponseCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-4xl rounded-3xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border border-orange-500/30 dark:border-orange-500/40 overflow-hidden"
      >
        {/* Top Gradient Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />

        {/* Card Header */}
        <div className="p-6 md:p-8 pb-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-orange-500 text-white shadow-md shadow-orange-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Sanket&apos;s AI Technical Assistant
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 px-2.5 py-0.5 rounded-full border border-orange-200 dark:border-orange-800">
                  <Sparkles className="w-3 h-3" />
                  RAG Answer
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Direct insights from verified architecture specs, projects, and dev notes
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer flex items-center gap-1.5 text-xs font-medium"
              title="Copy answer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>

            {onClose && (
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
                title="Dismiss Response"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Answer Content */}
        <div className="p-6 md:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-line font-normal">
            {message}
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 sm:p-6 bg-gray-50/70 dark:bg-gray-800/40 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span>
            💡 Have more questions? Type another prompt below or navigate using the section buttons.
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 font-semibold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
            >
              <span>Back to Portfolio View</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

