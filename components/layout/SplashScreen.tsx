'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[100] px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="p-3.5 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 shadow-xl shadow-orange-500/10"
        >
          <Sparkles className="w-7 h-7 animate-pulse text-orange-400" />
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-4xl font-extrabold tracking-wide text-white"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Sanket <span className="text-orange-500">Gaikwad</span>
        </motion.h1>

        <motion.p
          className="text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Crafting Intelligence Into Portfolios...
        </motion.p>
      </div>
    </motion.div>
  );
}


