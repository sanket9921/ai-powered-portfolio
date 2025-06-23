'use client';

import { useState, useEffect } from 'react';
import { componentMap } from '@/components/componentMap';
import SmartInput from '@/components/SmartInput';
import ChatClient from '@/components/ChatClient';
import AIResponseCard from '@/components/AIResponseCard';
import SummaryCard from '@/components/SummaryCard';
import ThemeToggle from '@/components/ThemeToggle';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const menuItems = ['Home', 'AboutMeCard', 'Projects', 'Blogs', 'Contact'];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState<string>('Home');
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true); // Track splash visibility

  const ActiveComponent = componentMap[activeComponent] || (() => <p>Component not found</p>);

  // Hide splash after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white relative">
      {/* Splash Screen */}
      {showSplash && <SplashScreen />}

      {/* Summary box */}
      {!showSplash && summary && (
        <div className="fixed top-6 right-6 w-80 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border dark:border-gray-600 transition-all animate-fade-in">
          <SummaryCard summary={summary} />
        </div>
      )}

      {/* Main content area */}
      {!showSplash && (
        <>
          <Navbar />
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-opacity duration-500">
            {aiMessage ? <AIResponseCard message={aiMessage} /> : <ActiveComponent />}
          </div>
        </>
      )}

      {/* Quick Links */}
      {!showSplash && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-4xl z-40"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveComponent(item);
                  setAiMessage(null);
                  setSummary(null);
                }}
                className="px-4 py-2 text-sm font-medium bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-700 rounded-lg backdrop-blur-lg shadow-md text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 transition"
              >
                {item.replace('Card', '').replace('Me', ' Me')}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Input Bar */}
      {!showSplash && (
        <ChatClient
          setActiveComponent={setActiveComponent}
          setAiMessage={setAiMessage}
          setSummary={setSummary}
        />
      )}
    </main>
  );
}
