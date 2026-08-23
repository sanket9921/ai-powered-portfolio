'use client';

import { useState, useEffect } from 'react';
import { componentRegistry } from '@/components/componentRegistry';
import ChatClient from '@/components/ai/ChatClient';
import AIResponseCard from '@/components/ai/AIResponseCard';
import SummaryCard from '@/components/ai/SummaryCard';
import SelectionAssistant from '@/components/ai/SelectionAssistant';
import SplashScreen from '@/components/layout/SplashScreen';
import Navbar from '@/components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import CursorBlob from '@/components/ui/CursorBlob';

const menuItems = ['Home', 'AboutMeCard', 'Projects', 'Blogs', 'Contact'];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState<string>('Home');
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  const ActiveComponent = componentRegistry[activeComponent] || (() => <p>Component not found</p>);

  // Hide splash after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white relative overflow-x-hidden">
      <CursorBlob />
      {!showSplash && <SelectionAssistant activeComponent={activeComponent} />}

      {/* Splash Screen */}
      {showSplash && <SplashScreen />}

      {/* Dynamic Summary Card (Appears when AI responds) */}
      <AnimatePresence>
        {!showSplash && summary && (
          <div className="fixed top-20 right-4 sm:right-6 z-50 px-2 sm:px-0">
            <SummaryCard summary={summary} onClose={() => setSummary(null)} />
          </div>
        )}
      </AnimatePresence>

      {/* Main content area with smooth page transitions */}
      {!showSplash && (
        <>
          <Navbar />
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-opacity duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={aiMessage ? 'ai-message' : activeComponent}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {aiMessage ? <AIResponseCard message={aiMessage} /> : <ActiveComponent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}

      {/* Quick Access Navigation Buttons (Instant section switching) */}
      {!showSplash && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-28 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-4xl z-40"
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
                className={`px-4 py-1.5 text-xs sm:text-sm font-medium border rounded-xl backdrop-blur-lg shadow-md transition cursor-pointer ${
                  activeComponent === item
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {item.replace('Card', '').replace('Me', ' Me')}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* AI Chat Input Bar */}
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
