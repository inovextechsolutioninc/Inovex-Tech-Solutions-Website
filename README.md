# Inovex Tech Solutions - AI-Native Website

The official enterprise website for Inovex Tech Solutions. This is a modern, high-performance Next.js web application that doesn't just display information—it actively operates our agency using integrated AI agents.

## 🚀 Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS + Framer Motion
* **AI Integration:** Anthropic API (Claude 3.5 Sonnet & Haiku)
* **Deployment:** Cloudflare Pages
* **Automation:** GitHub Actions (Cron Jobs)

## 🤖 Integrated AI Agents

This repository houses three custom AI agents that run our operations autonomously:

1. **GEO Content Agent (`/scripts/agents/geo-content-agent.mjs`)**
   Runs daily via GitHub Actions. Researches trending AI topics, drafts technical SEO articles in JSON-LD format, and commits them to the codebase to trigger a site rebuild.
2. **Site Reliability Agent (`/scripts/agents/site-reliability-agent.mjs`)**
   Runs automatically to scan all generated content for broken links, ensuring our technical SEO score remains at 100/100.
3. **CRM Enrichment Agent (`/src/app/api/crm-agent/route.ts`)**
   A Next.js API webhook that intercepts contact form submissions, uses Claude to research the prospect's company domain, and prepares a custom sales pitch.

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your Anthropic API key:
   ```env
   ANTHROPIC_API_KEY=your_claude_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Deployment
This project is configured for seamless deployment to **Cloudflare Pages**. Any push to the `main` branch will automatically trigger a production build using `@cloudflare/next-on-pages`.
