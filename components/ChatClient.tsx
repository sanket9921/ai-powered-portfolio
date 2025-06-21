'use client';

import { useState } from 'react';
import { componentMap } from './componentMap';
import SummaryCard from './SummaryCard';
import AIResponseCard from './AIResponseCard';
import {componentInfo} from '@/data/componentInfo'; // this is your detailed info

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
    }

    setInput('');
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 max-w-4xl mx-auto px-4 flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me something..."
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={handleSend}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
