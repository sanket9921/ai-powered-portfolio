export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

export const blogsData: BlogPost[] = [
  {
    id: 'building-ai-portfolio-nextjs15',
    title: 'Building an Intent-Driven AI Portfolio with Next.js 15 & OpenAI',
    excerpt: 'How to combine Next.js 15 App Router, OpenAI gpt-4o-mini, and dynamic React component registry to build a natural language responsive developer portfolio.',
    content: `
### Why Build an AI-Driven Portfolio?

Static portfolio websites are great for traditional resumes, but modern full-stack + AI developers need to show — not just tell — their capabilities.

In this article, I walk through the architecture behind my personal portfolio where users can prompt the UI naturally (e.g. *"Show me your projects"* or *"How can I contact Sanket?"*) and the site dynamically routes to the target component while serving an AI summary snippet.

---

### Core System Architecture

1. **Intent Classifier API Route (\`/api/ai\`)**:
   Receives user natural language input, passes context snippets from a local knowledge base, and instructs OpenAI to output a structured JSON action payload:
   \`\`\`json
   {
     "action": "render_component",
     "component": "Projects",
     "summary": "Short context..."
   }
   \`\`\`

2. **Decoupled Component Registry (\`componentRegistry.ts\`)**:
   Maps string identifier keys directly to React Section components.

3. **Dual-Stage Context Summary (\`/api/summary\`)**:
   Generates a 1-2 sentence personalized response rendered in a glassmorphism floating overlay card.

---

### Key Takeaways

- **Decouple Data & UI**: Keeping knowledge base context in standalone data modules prevents API bloat.
- **Fail Gracefully**: If the AI response isn't a valid JSON action, fall back to a conversational text card.
    `,
    date: 'Aug 20, 2026',
    readTime: '4 min read',
    tags: ['Next.js', 'OpenAI', 'AI Architecture', 'TypeScript'],
  },
  {
    id: 'scaling-mern-job-portals',
    title: 'Architecting Scalable Job Portals: Lessons Learned Delivering MVPs in 10 Days',
    excerpt: 'Key technical decisions, database indexing strategies, and multi-role authorization patterns for high-velocity startup job boards.',
    content: `
### Speed vs. Scalability in Startup MVPs

When building an MVP in 10 days for startup recruitment, overengineering is your worst enemy. However, neglecting database indexes and authorization scoping will cause immediate production headaches.

---

### 3 Technical Pillars

1. **Row-Level Security (RLS)**:
   Using Supabase RLS ensures that Student applicants can never access internal TPO administrator queries or private recruiter feedback notes.

2. **Transactional Event Notifications**:
   Instead of blocking HTTP requests to send notification emails, dispatch jobs asynchronously using webhooks and Resend/SendGrid APIs.

3. **Optimized Search Indexing**:
   Adding composite indexes on \`(job_title, location, active_status)\` in PostgreSQL reduced listing query times by over 80%.
    `,
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    tags: ['Full Stack', 'PostgreSQL', 'Architecture', 'Startups'],
  },
  {
    id: 'effective-freelance-developer-guide',
    title: 'The Product-Minded Developer: How to Deliver High-Impact Client Software',
    excerpt: 'Practical advice for full-stack freelancers on scope management, daily async updates, clean code principles, and client communication.',
    content: `
### Beyond Writing Code

Great freelance software engineering isn't just about syntax — it's about solving real business problems and delivering software founders can confidently scale.

---

### Core Communication Rules

- **No Ghosting Ever**: Provide quick daily async bullet updates on Slack/Loom.
- **Product-First Thinking**: Ask *"Why are we building this feature?"* before writing a line of code.
- **Clean Architecture**: Ship MVPs fast, but keep folder structures modular so future developers can onboard easily.
    `,
    date: 'Jun 10, 2026',
    readTime: '3 min read',
    tags: ['Freelancing', 'Product Mindset', 'Career'],
  },
];
