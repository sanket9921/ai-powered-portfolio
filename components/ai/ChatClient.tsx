'use client';

import { useState, useRef } from 'react';
import { componentInfo } from '@/content/componentContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Send, FolderGit2, User, FileText, Mail } from 'lucide-react';

export interface ChatClientProps {
  setActiveComponent: (key: string) => void;
  setAiMessage: (text: string | null) => void;
  setSummary: (text: string | null) => void;
}

const promptChips = [
  { label: 'Featured Projects', query: 'Show me your projects', icon: FolderGit2 },
  { label: 'About Sanket', query: 'Tell me about Sanket', icon: User },
  { label: 'Developer Blogs', query: 'Show me your blogs', icon: FileText },
  { label: 'Contact Info', query: 'How can I contact Sanket?', icon: Mail },
];

export default function ChatClient({
  setActiveComponent,
  setAiMessage,
  setSummary,
}: ChatClientProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const processQuery = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: queryText }],
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
            body: JSON.stringify({ userQuery: queryText, context: detail }),
          });

          const summaryData = await summaryRes.json();
          setSummary(summaryData.summary ?? null);
          return;
        }
      } catch (err) {
        setSummary(null);
        setActiveComponent('');
        setAiMessage(content);
      }
    } catch (err) {
      console.error('AI Request Error:', err);
      setAiMessage('Unable to reach AI assistant. Please try again.');
    } finally {
      setIsLoading(false);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processQuery(input);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-50 flex flex-col gap-2"
    >
      {/* AI Suggestion Chips (Visible when input is focused or active) */}
      <AnimatePresence>
        {(isFocused || input.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-2 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <span className="w-full text-center text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-orange-500" />
              <span>Suggested AI Prompts</span>
            </span>
            {promptChips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <button
                  key={idx}
                  onMouseDown={(e) => {
                    e.preventDefault(); // prevent blur before click registers
                    setInput(chip.query);
                    processQuery(chip.query);
                  }}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-orange-950/40 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 border border-transparent hover:border-orange-300 dark:hover:border-orange-700/50 rounded-xl transition cursor-pointer disabled:opacity-50"
                >
                  <Icon className="w-3.5 h-3.5 text-orange-500" />
                  <span>{chip.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Input Bar */}
      <div className="flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-300 dark:border-gray-700 p-2.5 rounded-2xl shadow-2xl relative">
        <Sparkles className="w-5 h-5 text-orange-500 ml-2 animate-pulse hidden sm:block" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={isLoading}
          placeholder={isLoading ? "AI is processing your request..." : "Ask AI anything about Sanket..."}
          className="flex-1 px-3 py-1.5 bg-transparent text-sm focus:outline-none text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:opacity-50"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => processQuery(input)}
          disabled={isLoading || !input.trim()}
          className="bg-gradient-to-tr from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white px-4 py-2 rounded-xl transition text-sm font-medium shadow-md flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Thinking...</span>
            </>
          ) : (
            <>
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
