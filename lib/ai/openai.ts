import { ChatMessage } from '@/types/ai';

/**
 * Clean, beginner-friendly OpenAI chat completion helper.
 * Uses OpenAI's fast and cost-effective gpt-4o-mini model.
 */
export async function getChatCompletion(messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('💥 Error: OPENAI_API_KEY is not set in environment variables');
    throw new Error('OPENAI_API_KEY is missing');
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('💥 OpenAI API error:', errorText);
    throw new Error(`OpenAI API returned status ${res.status}`);
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content ?? null;
}
