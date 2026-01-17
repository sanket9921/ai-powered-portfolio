'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'ai_portfolio_intro_seen';

export default function PortfolioIntroModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(STORAGE_KEY);
    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-zinc-900 p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-white">
          🚧 Portfolio Under Active Development
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          This is an <strong>AI-powered, experimental portfolio</strong>.
          Some sections may be incomplete, evolving, or temporarily non-functional
          as new ideas, agents, and systems are being built.
        </p>

        <p className="mt-3 text-sm text-zinc-400">
          You’re seeing a work-in-progress — not a static showcase.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
