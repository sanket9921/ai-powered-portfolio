# AI Portfolio Creator 🚀

A smart, AI-powered interactive developer portfolio built with Next.js, Tailwind CSS, and OpenAI's `@ai-sdk/react`. This portfolio responds to natural language queries, dynamically renders components like Projects, Blogs, About Me, and more — all backed by real-time AI interaction.

## ✨ Features

- 🤖 Ask anything — AI-powered interaction via text input
- 🧠 Dynamic component rendering based on AI understanding
- 🪄 Smart summaries for each section
- 🌙 Dark mode / Light mode toggle
- ⚡ Fast & responsive design with Tailwind CSS v4
- 🎨 Beautiful animations powered by Framer Motion

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS
- **AI:** OpenAI SDK + Groq backend (via `/api/chat` and `/api/summary`)
- **Components:** Modular, dynamic, and mapped via `componentMap.ts`

## 📁 Project Structure

```
/app
  /api
    /chat      - AI prompt handler (first response)
    /summary   - Section-specific summary generator
/components
  ComponentRenderer.tsx
  SmartInput.tsx
  AIResponseCard.tsx
  ...
/data
  componentInfo.ts - Metadata for dynamic component summaries
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/ai-portfolio-creator.git
cd ai-portfolio-creator

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your OpenAI / Groq API key to `.env`

# Run the dev server
npm run dev
```

## 🧪 Example Prompt Usage

- “Tell me about myself”
- “Show me your projects”
- “What are your recent blogs?”
- “How can I contact you?”

## 📸 Demo

[Add a short Loom / GIF / screenshot preview here]

## 🛠️ Author

- **Sanket Gaikwad**  
  [LinkedIn](https://www.linkedin.com/in/your-profile) • [Twitter](https://twitter.com/your-handle)

## 📄 License

MIT

---

> Made with ❤️ by Sanket, powered by the magic of AI.