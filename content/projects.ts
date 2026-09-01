import { ProjectItem } from '@/types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'mock-test-engine',
    title: 'Mock Test Engine Platform',
    desc: 'Built for coaching institutes to manage online mock tests with auto-evaluation, real-time analytics, and student scorecards.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
    images: ['/projects/mock1.png', '/projects/mock2.png', '/projects/mock3.png'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    githubUrl: 'https://github.com/sanket9921/mock-test-app',
    liveUrl: 'https://mocktest-demo.vercel.app',
    caseStudy: {
      problem: 'Coaching institutes struggled to conduct timed, concurrent online mock exams with automatic grading and instant analytics.',
      architecture: 'Microservices setup with React frontend, Node.js API gateway, Redis test-timer cache, and MongoDB for structured test submission storage.',
      challenges: [
        'Preventing test paper tampering during active network disconnections.',
        'Handling concurrent submission spikes for 5,000+ simultaneous test takers.',
      ],
      metrics: [
        '99.9% uptime during peak exam windows.',
        'Reduced test evaluation time from 48 hours to instant automated feedback.',
      ],
    },
  },
  {
    id: 'job-portal-mvp',
    title: 'Job Portal MVP for Startups',
    desc: 'Role-based MERN job board for TPO admins, startup recruiters, and student applicants with email notification triggers.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    images: ['/projects/job1.png', '/projects/job2.png', '/projects/job3.png'],
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    githubUrl: 'https://github.com/sanket9921/job-portal-mvp',
    liveUrl: 'https://jobportal-demo.vercel.app',
    caseStudy: {
      problem: 'Early-stage startups needed a fast, zero-bloat candidate tracking & job board MVP delivered in 10 days.',
      architecture: 'Next.js App Router for server-rendered job listings, Supabase Row-Level Security (RLS) for multi-tenant data safety.',
      challenges: [
        'Implementing strict role-based authorization (Student vs Recruiter vs TPO Admin).',
        'Automating instant transaction emails via Resend API on job application updates.',
      ],
      metrics: [
        'Delivered MVP in 10 days from concept to launch.',
        'Processed over 1,200+ job applications in the first month.',
      ],
    },
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume & CV Analyzer',
    desc: 'Upload resumes (PDF/Docx) and get instant GPT-powered feedback on structure, ATS keywords, impact phrasing, and formatting.',
    tech: ['React', 'Express', 'OpenAI API', 'Tailwind CSS'],
    images: ['/projects/resume1.png', '/projects/resume2.png', '/projects/resume3.png'],
    videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
    githubUrl: 'https://github.com/sanket9921/ai-resume-analyzer',
    liveUrl: 'https://resume-analyzer-ai.vercel.app',
    caseStudy: {
      problem: 'Job seekers lacked actionable, immediate feedback on why their resumes failed automated ATS screening systems.',
      architecture: 'React frontend uploading PDFs to Node.js backend parsing plain text via pdf-parse, passed through OpenAI GPT models with structured Zod response parsing.',
      challenges: [
        'Extracting clean plain text from complex multi-column PDF layouts.',
        'Designing prompts to deliver specific, score-backed advice without hallucination.',
      ],
      metrics: [
        'Average resume analysis completed in under 4 seconds.',
        'Used by 800+ job seekers with an average ATS score boost of +25%.',
      ],
    },
  },
];
