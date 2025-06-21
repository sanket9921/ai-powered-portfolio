'use client';

import { useState } from 'react';

type Props = {
  setActiveComponent: (key: string) => void;
  setAiMessage: (text: string | null) => void;
};

export default function SmartInput({ setActiveComponent, setAiMessage }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `
You are an assistant for Sanket Gaikwad's portfolio.
If a user asks about Sanket (like "tell me about yourself", "show projects", etc), respond with JSON:
{ "action": "render_component", "component": "Projects" }

Else, answer the question normally as plain text.

you are representing me as sanket gaikwad, a full-stack developer and freelancer. if any user asks anything else which are not related about us just reply them sry bro i am not chat gpt
            `.trim(),
          },
          {
            role: 'user',
            content: input,
          },
        ],
      }),
    });

    const { content } = await res.json();
    setInput('');
    setAiMessage(null);

    try {
      const parsed = JSON.parse(content);
      if (parsed?.action === 'render_component' && parsed.component) {
        setActiveComponent(parsed.component);
        return;
      }
    } catch {
      // Not a JSON response → treat as normal message
    }

    setAiMessage(content);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-4 left-64 right-6 max-w-4xl mx-auto flex gap-2 p-2 bg-white shadow rounded border"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border rounded focus:outline-none"
        placeholder="Ask me something..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Send
      </button>
    </form>
  );
}
