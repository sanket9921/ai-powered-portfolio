'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, MousePointerClick, ArrowRight, X, Zap } from 'lucide-react';

const STORAGE_KEY = 'ai_portfolio_intro_seen';

export interface PortfolioIntroModalProps {
  delayMs?: number;
}

export default function PortfolioIntroModal({ delayMs = 1800 }: PortfolioIntroModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only check and show after splash screen delay
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem(STORAGE_KEY);
      if (!hasSeen) {
        setOpen(true);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  };

  const handleTryAI = () => {
    handleClose();
    if (typeof window !== 'undefined') {
      // Dispatches sample prompt to ChatClient
      window.dispatchEvent(
        new CustomEvent('ask-ai-query', { detail: { query: 'Show me your projects' } })
      );
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full max-w-xl rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-orange-500/30 dark:border-orange-500/40 shadow-2xl overflow-hidden"
          >
            {/* Top Orange Gradient Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800/80">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Interactive AI Showcase</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Welcome to <span className="text-orange-500">Sanket&apos;s</span> Portfolio
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    This site demonstrates AI capabilities natively through live interaction. Here are 2 features you can test right now:
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-white p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer flex-shrink-0"
                  aria-label="Close intro"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 2 Flagship AI Feature Cards */}
              <div className="space-y-3.5">
                {/* Feature 1: Ask AI Anything */}
                <div className="p-4 rounded-2xl bg-orange-50/70 dark:bg-gray-800/60 border border-orange-200/80 dark:border-gray-700/70 flex items-start gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/20 flex-shrink-0 mt-0.5">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      <span>1. Ask AI Anything About Sanket</span>
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Use the floating prompt bar at the bottom to navigate sections naturally or ask deep technical questions about system architecture, database choices, and MVP delivery sprints.
                    </p>
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-medium bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 px-2.5 py-0.5 rounded-md border border-orange-200 dark:border-orange-900/60">
                        💬 &ldquo;Show me your projects&rdquo;
                      </span>
                      <span className="text-[10px] font-medium bg-white dark:bg-gray-900 text-orange-600 dark:text-orange-400 px-2.5 py-0.5 rounded-md border border-orange-200 dark:border-orange-900/60">
                        ⚡ &ldquo;How did you scale the Mock Test App?&rdquo;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feature 2: Highlight Text to Ask AI */}
                <div className="p-4 rounded-2xl bg-orange-50/70 dark:bg-gray-800/60 border border-orange-200/80 dark:border-gray-700/70 flex items-start gap-3.5 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-orange-500 to-yellow-400 text-white shadow-md shadow-orange-500/20 flex-shrink-0 mt-0.5">
                    <MousePointerClick className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                      <span>2. Highlight Any Text to Ask AI</span>
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      Select or highlight any text or tech term anywhere on the page to open an instant 1-click AI explainer toolbar.
                    </p>
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-medium bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-orange-500" />
                        <span>Select words like &ldquo;PostgreSQL&rdquo; or &ldquo;Redis&rdquo;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={handleTryAI}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-orange-500/50 hover:border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/30 text-xs font-semibold transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span>Try Asking AI</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-tr from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white text-xs font-bold shadow-lg shadow-orange-500/20 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

