import { ComponentContextMap } from '@/types/portfolio';
import { projectsData } from '@/content/projects';
import { blogsData } from '@/content/blogs';

export const getProjectKnowledgeBase = (): string => {
  return projectsData
    .map((p) => {
      const caseStudyText = p.caseStudy
        ? `
  - Problem: ${p.caseStudy.problem}
  - System Architecture: ${p.caseStudy.architecture}
  - Technical Challenges: ${p.caseStudy.challenges.join('; ')}
  - Verified Metrics & Impact: ${p.caseStudy.metrics.join('; ')}`
        : '';

      return `Project: "${p.title}" (ID: ${p.id})
  - Description: ${p.desc}
  - Tech Stack: ${p.tech.join(', ')}
  - GitHub: ${p.githubUrl || 'N/A'} | Live Demo: ${p.liveUrl || 'N/A'}${caseStudyText}`;
    })
    .join('\n\n');
};

export const getBlogKnowledgeBase = (): string => {
  return blogsData
    .map(
      (b) => `Article: "${b.title}" (ID: ${b.id})
  - Tags: ${b.tags.join(', ')} | Date: ${b.date} | Read Time: ${b.readTime}
  - Excerpt: ${b.excerpt}
  - Core Insights:
${b.content.trim()}`
    )
    .join('\n\n---\n\n');
};

export const sanketProfileInfo = `
Name: Sanket Gaikwad
Role: Full-Stack Developer & AI Systems Integrator
Core Specialization: Building Production MVPs (10-day sprint model) & Intelligent AI-Integrated Web Apps
Experience: 3+ Years of experience delivering 14+ full-stack projects for startups, coaching institutes, and solo founders.
Technical Skills:
  - Frontend: React.js, Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
  - Backend: Node.js, Express, Spring Boot, Python (Flask)
  - Databases: PostgreSQL, Supabase (RLS), MongoDB, Redis
  - AI / ML: OpenAI API (gpt-4o, gpt-4o-mini), RAG pipelines, Prompt Engineering, Structured JSON parsing (Zod)
Delivery Model & Founder Guarantees:
  - 48-Hour Discovery & Architecture Prototype
  - 10-Day MVP Sprints
  - 100% Code Ownership, Daily Async Slack/Loom Updates, and Post-Launch Support
`;

export const getFullKnowledgeContext = (): string => {
  return `=== SANKET PROFILE ===
${sanketProfileInfo}

=== FLAGSHIP PROJECTS & CASE STUDIES ===
${getProjectKnowledgeBase()}

=== TECHNICAL BLOGS & ARTICLES ===
${getBlogKnowledgeBase()}
`;
};

export const componentInfo: ComponentContextMap = {
  AboutMeCard: sanketProfileInfo,
  Projects: getProjectKnowledgeBase(),
  Blogs: getBlogKnowledgeBase(),
  Contact: `
  Sanket is available for freelance MVP development, full-stack consulting, and AI integrations.
  Delivery Model: 10-day MVP sprints with daily async updates and full code ownership.
  Email: sanket@example.com / Contact form on site.
  `,
  Home: sanketProfileInfo,
};

