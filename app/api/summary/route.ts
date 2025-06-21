// app/api/summary/route.ts

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { userQuery, context } = await req.json();

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY ?? ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'system',
            content: `You are an assistant for Sanket's portfolio. Based on the context, generate a 1-2 sentence summary that's short, relevant, and helpful.`,
          },
          {
            role: 'user',
            content: `Query: ${userQuery}\n\nContext:\n${context}`,
          },
        ],
      }),
    });

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;

    return Response.json({ summary: content });
  } catch (err) {
    console.error('💥 Summary API error:', err);
    return Response.json({ summary: null });
  }
}
