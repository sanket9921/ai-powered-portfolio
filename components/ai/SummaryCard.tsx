'use client';

import { motion } from 'framer-motion';
import { Sparkles, X, Zap } from 'lucide-react';

export interface SummaryCardProps {
  summary: string;
  onClose?: () => void;
}

export default function SummaryCard({ summary, onClose }: SummaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-sm rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-orange-500/30 dark:border-orange-500/40 overflow-hidden"
    >
      {/* Top Orange Gradient Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-gradient-x" />

      <div className="p-4 sm:p-5 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">
              Smart AI Insight
            </h3>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white p-1 rounded-lg transition cursor-pointer"
              aria-label="Dismiss Summary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content */}
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>

        {/* Footer Badge */}
        <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1 font-medium text-orange-600 dark:text-orange-400">
            <Zap className="w-3 h-3" />
            <span>Contextual AI Overview</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
