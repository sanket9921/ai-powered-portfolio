'use client';

import { useState } from 'react';
import { componentMap } from '@/components/componentMap';
import SmartInput from '@/components/SmartInput';
import ChatClient from '@/components/ChatClient';
import AIResponseCard from '@/components/AIResponseCard';
import SummaryCard from '@/components/SummaryCard';
import ThemeToggle from '@/components/ThemeToggle';

const menuItems = ['Home', 'AboutMeCard', 'Projects', 'Blogs', 'Contact'];

export default function Page() {
  const [activeComponent, setActiveComponent] = useState<string>('Home');
  const [aiMessage, setAiMessage] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const ActiveComponent = componentMap[activeComponent] || (() => <p>Component not found</p>);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white relative">
      {/* Summary box (right-fixed) */}
      {summary && (
        <div className="fixed top-6 right-6 w-80 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border dark:border-gray-600 transition-all animate-fade-in">
          <SummaryCard summary={summary} />
        </div>
      )}

      {/* Main content area */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <ThemeToggle />
        {aiMessage ? <AIResponseCard message={aiMessage} /> : <ActiveComponent />}
      </div>

      {/* Quick Links */}
      <div className="fixed bottom-20 left-0 right-0 px-6 max-w-4xl mx-auto flex flex-wrap justify-center gap-2 z-10">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              setActiveComponent(item);
              setAiMessage(null);
              setSummary(null);
            }}
            className="bg-white dark:bg-gray-900 border dark:border-gray-600 px-4 py-2 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium"
          >
            {item.replace('Card', '').replace('Me', ' Me')}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <ChatClient
        setActiveComponent={setActiveComponent}
        setAiMessage={setAiMessage}
        setSummary={setSummary}
      />
    </main>
  );
}
