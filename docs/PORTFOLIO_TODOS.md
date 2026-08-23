# Portfolio Actionable TODO Checklist & Priority Tracker

Track the step-by-step implementation of real content, resume deep-linking, project RAG Q&A, lead generation features, video demos, tailored resumes, client testimonials, and production hardening.

---

## 🔗 Phase 1: Resume Deep-Linking & Project RAG Q&A Engine (High Priority)

- [ ] **Task 1.1: Resume Deep-Link Hash Routing**
  - **File**: [`app/page.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/app/page.tsx)
  - **Details**: Parse URL hash on load (e.g. `/#projects/mern-job-portal` or `/#blogs/nextjs15-ai-architecture`) to directly switch to the corresponding section and open the target Case Study modal or Blog reader.
- [ ] **Task 1.2: Project & Blog RAG Q&A Knowledge Engine**
  - **File**: `app/api/ai/route.ts`
  - **Details**: Upgrade AI route handler to perform RAG over project specifications in `content/projects.ts` and `content/blogs.ts`. When recruiters ask questions like *"How did Sanket optimize PostgreSQL queries in Job Portal?"*, feed full technical context (architecture, DB choices, latency hacks, metrics) to OpenAI.
- [ ] **Task 1.3: In-Modal "Ask AI About This Project" Chip**
  - **File**: [`components/cards/ProjectCard.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/cards/ProjectCard.tsx)
  - **Details**: Add a quick prompt button inside Case Study modals: `✨ Ask AI About This Project` to pre-scope the assistant for project Q&A.

---

## 🚀 Phase 2: High-Converting Contact & AI Lead Estimator (High Priority)

- [ ] **Task 2.1: Interactive AI Project Scope & Cost Estimator**
  - **File**: [`components/sections/Contact.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/sections/Contact.tsx)
  - **Details**: Build an interactive AI scope tool where founders select project type (*SaaS MVP*, *Full-Stack App*, *AI Integration*), target timeline (*10-Day Sprint*, *1 Month*), and 1-sentence product description. Captures high-intent lead details (Name, Company Name, Contact Email, Phone/WhatsApp number, Budget Range).
- [ ] **Task 2.2: Contact Submission API Route**
  - **File**: `app/api/contact/route.ts`
  - **Details**: Create backend route handler to process lead form submissions and send notification emails via Resend / SendGrid / Nodemailer.

---

## 🎥 Phase 3: Video Walkthroughs & Tailored Resume Modal (High Priority)

- [ ] **Task 3.1: Personal Video Pitch in Hero Section**
  - **File**: [`components/sections/Home.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/sections/Home.tsx)
  - **Details**: Embed a 60-second video of Sanket introducing his 10-day MVP delivery model and inviting visitors to test the live AI assistant.
- [ ] **Task 3.2: Case Study Loom Video Walkthroughs**
  - **File**: [`components/cards/ProjectCard.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/cards/ProjectCard.tsx)
  - **Details**: Embed 90-second Loom/YouTube video product walkthroughs inside each project's Case Study modal.
- [ ] **Task 3.3: Tailored Resume & CV Viewer Modal**
  - **File**: `components/ui/ResumeModal.tsx`
  - **Details**: Build an interactive resume viewer modal with download buttons for tailored PDFs:
    - 📄 *Full-Stack Software Engineer Resume*
    - 🤖 *AI Systems Architect Resume*

---

## 💎 Phase 4: Flagship Projects, Founder Process & Testimonials (High Priority)

- [ ] **Task 4.1: Replace Sample Project Screenshots & Live Demo Links**
  - **File**: [`content/projects.ts`](file:///d:/Learning/Projects/ai-powered-portfolio/content/projects.ts) & `public/images/`
  - **Details**: Replace generic slider placeholder images with real high-resolution screenshots and update `liveUrl` and `githubUrl` fields.
- [ ] **Task 4.2: Quantify Case Study Metrics**
  - **File**: [`content/projects.ts`](file:///d:/Learning/Projects/ai-powered-portfolio/content/projects.ts)
  - **Details**: Ensure each case study modal displays real, verified impact metrics (e.g. *"Processed 50,000+ student queries"*, *"Reduced search latency by 65%"*).
- [ ] **Task 4.3: "How I Work with Founders" Process & Guarantees**
  - **File**: [`components/sections/Home.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/sections/Home.tsx)
  - **Details**: Add a 3-step delivery process section (*48-Hour Discovery & Architecture*, *10-Day MVP Sprints*, *Production AI Integration*) and founder guarantees (*100% Code Ownership*, *Daily Slack Updates*).
- [ ] **Task 4.4: Replace Dummy Client Testimonials**
  - **File**: [`components/sections/Home.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/sections/Home.tsx)
  - **Details**: Replace sample quote names (*Jim Corner*, *Priya Verma*) and duplicate avatar images (`sanket_photo.png`) with real client feedback or LinkedIn recommendations.

---

## 🛡️ Phase 5: Responsive UX, SEO & Production Hardening (High Priority)

- [ ] **Task 5.1: Audit Mobile Touch Target Sizes**
  - **Files**: [`components/ai/ChatClient.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/components/ai/ChatClient.tsx) & [`app/page.tsx`](file:///d:/Learning/Projects/ai-powered-portfolio/app/page.tsx)
  - **Details**: Verify prompt chips, navigation buttons, and inputs meet minimum 44×44px touch targets on mobile devices (<375px).
- [ ] **Task 5.2: OpenGraph, Meta Tags & JSON-LD Schema**
  - **File**: `app/layout.tsx`
  - **Details**: Add `title`, `description`, `openGraph` card image, Twitter metadata, and `Person` JSON-LD schema for search engines and social sharing.
- [ ] **Task 5.3: API Rate Limiting & Fallback Error UI**
  - **Files**: `app/api/ai/route.ts` & [`lib/ai/openai.ts`](file:///d:/Learning/Projects/ai-powered-portfolio/lib/ai/openai.ts)
  - **Details**: Implement API request rate limiting and clean user-facing error fallback messages if `OPENAI_API_KEY` is missing or quota is exceeded.
