// app/api/ai/route.ts

import { NextRequest } from 'next/server';
import { getFullKnowledgeContext } from '@/content/componentContext';
import { getChatCompletion } from '@/lib/ai/openai';
import { ChatMessage } from '@/types/ai';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const userMessage = messages[messages.length - 1]?.content ?? '';
    const knowledgeBase = getFullKnowledgeContext();

    const systemPrompt = `
You are the interactive AI Technical Representative for Sanket Gaikwad's portfolio.
Sanket is a Full-Stack Developer & AI Systems Integrator specializing in building production MVPs in 10-day sprints and AI-integrated applications.

=== COMPLETE KNOWLEDGE BASE ===
${knowledgeBase}
===============================

Your job is to assist recruiters, startup founders, and engineering managers:

1. **NAVIGATION / SECTION INTENT**:
If the user's primary goal is simply to navigate to or display a section (e.g. "show me your projects", "how do I contact Sanket", "open blogs", "go to about me", "open the job portal case study", "show me your AI resume analyzer"):
Respond ONLY with a valid JSON object in this exact schema:
{
  "action": "render_component",
  "component": "Home" | "AboutMeCard" | "Projects" | "Blogs" | "Contact",
  "targetId": "mock-test-engine" | "job-portal-mvp" | "ai-resume-analyzer" | "building-ai-portfolio-nextjs15" | "scaling-mern-job-portals" | "effective-freelance-developer-guide" | null,
  "summary": "1-2 sentence summary explaining what is being shown."
}

2. **TECHNICAL / ARCHITECTURAL / RAG Q&A INTENT**:
If the user asks specific technical questions, inquires about architecture choices, database scalability, problem solving, metrics, or blog topics (e.g. "How did you handle 5,000 concurrent users in the mock test engine?", "Why choose Supabase RLS?", "What tech stack was used for the AI resume analyzer?", "What is your 10-day MVP sprint process?"):
Do NOT return JSON. Reply with an authentic, direct, and technically thorough markdown answer citing the exact architecture details, challenges overcome, and verified metrics from the Knowledge Base.

Do not fabricate projects or achievements not listed in the knowledge base.
`.trim();

    const fullMessages: ChatMessage[] = [
      {
        role: 'system',
        content: systemPrompt,
      },
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const content = await getChatCompletion(fullMessages);

    if (!content) {
      return Response.json({ error: 'OpenAI returned no content' }, { status: 500 });
    }

    return Response.json({ content });
  } catch (err: any) {
    console.error('💥 AI API Error:', err);
    return Response.json(
      {
        content:
          "I'm currently unable to reach OpenAI (API key might be missing or rate limited). You can explore Sanket's projects, case studies, and blogs using the navigation bar above!",
      },
      { status: 200 }
    );
  }
}

