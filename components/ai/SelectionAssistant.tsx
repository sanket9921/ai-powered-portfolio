'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Loader2, Send } from 'lucide-react';

export interface SelectionAssistantProps {
  activeComponent?: string;
}

export default function SelectionAssistant({ activeComponent }: SelectionAssistantProps) {
  const [selectedText, setSelectedText] = useState('');
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [userQuery, setUserQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Track sections that have already displayed the hint toast once during this session
  const seenSectionsRef = useRef<Set<string>>(new Set());

  // Show hint toast ONLY ONCE per unique section/page visit
  useEffect(() => {
    if (!activeComponent) return;

    if (!seenSectionsRef.current.has(activeComponent)) {
      seenSectionsRef.current.add(activeComponent);
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4500);
      return () => clearTimeout(timer);
    } else {
      setShowToast(false);
    }
  }, [activeComponent]);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.selection-assistant')) return;

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;

      const text = selection.toString().trim();
      if (text.length >= 3 && text.length <= 140) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        setPosition({
          top: window.scrollY + rect.top - 50,
          left: window.scrollX + rect.left + rect.width / 2,
        });
        setSelectedText(text);
        setExplanation(null);
        setUserQuery('');
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedText || isLoading) return;

    setIsLoading(true);

    const queryPrompt = userQuery.trim()
      ? userQuery.trim()
      : `Explain this technical concept simply in 1-2 sentences: "${selectedText}"`;

    try {
      const res = await fetch('/api/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userQuery: queryPrompt,
          context: `Selected Text: "${selectedText}". Sanket is a full-stack developer portfolio. Answer concisely in 1-2 sentences.`,
        }),
      });

      const data = await res.json();
      setExplanation(data.summary ?? `"${selectedText}" is a core concept used in building modern web applications.`);
    } catch {
      setExplanation(`"${selectedText}" is a technology feature used in Sanket's projects.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setExplanation(null);
    setSelectedText('');
    setUserQuery('');
    setPosition(null);
  };

  return (
    <>
      {/* Top-Right Guidance Hint Toast (Displays ONLY ONCE per unique section visit) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -25, x: 25, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed top-20 right-4 sm:right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-orange-500/70 shadow-2xl shadow-orange-500/10 text-xs text-gray-800 dark:text-white"
          >
            <div className="p-1.5 rounded-xl bg-orange-500 text-white shadow-md">
              <Sparkles className="w-4 h-4 fill-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-orange-600 dark:text-orange-400">AI Assistant Tip</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Highlight any text to Ask AI</span>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-gray-400 hover:text-black dark:hover:text-white ml-2 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Selection AI Assistant Popover */}
      {isOpen && position && (
        <AnimatePresence>
          <div
            style={{
              position: 'absolute',
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: 'translateX(-50%)',
            }}
            className="z-50 pointer-events-auto selection-assistant"
          >
            {!explanation ? (
              /* Single Unified Selection Bar */
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-black/90 dark:bg-gray-900/95 text-white p-2 rounded-2xl shadow-2xl border border-orange-500/40 backdrop-blur-md flex items-center gap-2 max-w-sm sm:max-w-md"
              >
                <Sparkles className="w-4 h-4 text-orange-400 fill-orange-400 ml-1.5 flex-shrink-0 animate-pulse" />

                <form onSubmit={handleSend} className="flex items-center gap-1.5 flex-1">
                  <input
                    autoFocus
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    disabled={isLoading}
                    placeholder={`Ask AI about "${selectedText.slice(0, 15)}..." (or press Enter)`}
                    className="w-48 sm:w-64 px-2.5 py-1 text-xs bg-white/10 text-white rounded-lg focus:outline-none placeholder:text-gray-400 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-medium transition flex items-center gap-1 cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <>
                        <span>{userQuery.trim() ? 'Ask' : 'Explain'}</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </form>

                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white p-1 rounded-lg transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ) : (
              /* Response Display Tooltip */
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-72 sm:w-85 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-orange-500/30 text-left space-y-2 relative"
              >
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <span className="flex items-center gap-1 text-xs font-bold text-orange-500 truncate max-w-[220px]">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>"{selectedText}"</span>
                  </span>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-black dark:hover:text-white p-0.5 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  {explanation}
                </p>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
