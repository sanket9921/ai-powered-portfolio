// app/api/summary/route.ts

import { NextRequest } from 'next/server';
import { getChatCompletion } from '@/lib/ai/openai';
import { ChatMessage } from '@/types/ai';

export async function POST(req: NextRequest) {
  try {
    const { userQuery, context } = await req.json();

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are an assistant for Sanket's portfolio. Based on the context, generate a 1-2 sentence summary that's short, relevant, and helpful.`,
      },
      {
        role: 'user',
        content: `Query: ${userQuery}\n\nContext:\n${context}`,
      },
    ];

    const content = await getChatCompletion(messages);
    return Response.json({ summary: content });
  } catch (err) {
    console.error('💥 Summary API error:', err);
    return Response.json({ summary: null });
  }
}
