'use client';

import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  const handleNav = (hash: string) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/40 dark:bg-black/40 border-b border-gray-200/50 dark:border-gray-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left - Logo */}
        <button
          onClick={() => handleNav('home')}
          className="text-2xl font-bold text-[var(--color-primary)] dark:text-[var(--color-primary)] hover:opacity-80 transition cursor-pointer"
        >
          Sanket.dev
        </button>

        {/* Right - Contact + Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => handleNav('contact')}
            className="px-5 py-1.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-orange-500 hover:text-white transition font-medium text-sm cursor-pointer shadow-sm"
          >
            Contact
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-500 transition text-gray-700 dark:text-white cursor-pointer shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-500" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

