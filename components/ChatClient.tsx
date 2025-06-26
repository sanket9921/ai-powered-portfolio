'use client';

import { useState } from 'react';
import { componentMap } from './componentMap';
import SummaryCard from './SummaryCard';
import AIResponseCard from './AIResponseCard';
import { componentInfo } from '@/data/componentInfo'; // this is your detailed info
import { motion } from 'framer-motion';

export default function ChatClient({
  setActiveComponent,
  setAiMessage,
  setSummary,
}: {
  setActiveComponent: (key: string) => void;
  setAiMessage: (text: string | null) => void;
  setSummary: (text: string | null) => void;
}) {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: input }],
      }),
    });

    const { content } = await res.json();

    try {
      const parsed = JSON.parse(content);
      if (parsed?.action === 'render_component') {
        const componentKey = parsed.component;
        setActiveComponent(componentKey);
        setAiMessage(null);

        // Trigger second call for summary
        const detail = componentInfo[componentKey] ?? '';
        const summaryRes = await fetch('/api/summary', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userQuery: input, context: detail }),
        });

        const summaryData = await summaryRes.json();
        setSummary(summaryData.summary ?? null);
        return;
      }
    } catch (err) {
      setSummary(null);
      setActiveComponent(''); // optional
      setAiMessage(content);
    } finally {

      // Reset input after processing
      setInput('');
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-9999"
    >
      <div className="flex items-center gap-2 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-gray-700 p-3 rounded-2xl shadow-2xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Sanket..."
          className="flex-1 px-4 py-2 bg-transparent text-sm focus:outline-none text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleSend}
          className="bg-gradient-to-tr from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 py-2 rounded-lg transition text-sm font-medium shadow-md"
        >
          Send
        </motion.button>
      </div>
    </motion.div>


  );
}
