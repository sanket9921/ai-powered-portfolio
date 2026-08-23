// app/api/ai/route.ts

import { NextRequest } from 'next/server';
import { componentInfo } from '@/content/componentContext';
import { getChatCompletion } from '@/lib/ai/openai';
import { ChatMessage } from '@/types/ai';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const userQuery = messages[messages.length - 1]?.content?.toLowerCase() ?? '';
    let relevantInfo = '';

    if (userQuery.includes('project')) relevantInfo = componentInfo.Projects;
    else if (userQuery.includes('about')) relevantInfo = componentInfo.AboutMeCard;
    else if (userQuery.includes('blog')) relevantInfo = componentInfo.Blogs;

    const fullMessages: ChatMessage[] = [
      {
        role: 'system',
        content: `
You are an AI assistant for Sanket's portfolio.

If the user asks about a known section like "projects", "about me", or "blogs", use the context below and respond in strict JSON format:

{
  "action": "render_component",
  "component": "<ComponentName>",
  "summary": "<Short summary of the section>"
}

actual componet names are: AboutMeCard, Projects, Blogs

Only respond with JSON if the question relates to a known component. Otherwise reply in normal text.

Context:
${relevantInfo}
    `.trim()
      },
      {
        role: 'user',
        content: userQuery
      }
    ];

    const content = await getChatCompletion(fullMessages);
    console.log('🌐 OpenAI Response:', content);

    if (!content) {
      return Response.json({ error: 'OpenAI returned no content' }, { status: 500 });
    }

    return Response.json({ content });
  } catch (err) {
    console.error('💥 AI API Error:', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
