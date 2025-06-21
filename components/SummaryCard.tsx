// components/SummaryCard.tsx

'use client';

import { motion } from 'framer-motion';

export default function SummaryCard({ summary }: { summary: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed top-24 right-4 w-80 p-4 rounded-xl bg-white dark:bg-gray-900 shadow-lg border dark:border-gray-700 z-50"
    >
      <h2 className="text-lg font-semibold mb-2">AI Summary</h2>
      <p className="text-sm text-gray-800 dark:text-gray-200">{summary}</p>
    </motion.div>
  );
}
