"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, LineChart, Search, Workflow, Settings } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Workflow,
    title: "AI Growth Engine",
    desc: "Turn lead capture, follow-up, and operations into scalable automated systems.",
    features: ["CRM Syncing", "Email Triage", "Lead Qualification"],
    link: "/services/ai-automation"
  },
  {
    icon: Bot,
    title: "Chatbot & Assistant System",
    desc: "RAG chatbots that answer from your own documents, cite sources, and deflect tickets.",
    features: ["Custom LLMs", "Ticket Deflection", "Internal Knowledge"],
    link: "/services/chatbots"
  },
  {
    icon: Code,
    title: "AI-Native Web Platform",
    desc: "Fast, AI-first web products engineered for real traffic and modern search.",
    features: ["Next.js Architecture", "API Integration", "Secure Infrastructure"],
    link: "/services/ai-development"
  },
  {
    icon: Search,
    title: "Agentic SEO System",
    desc: "Closed-loop SEO with autonomous agents that structure your data for LLMs.",
    features: ["Generative Engine Optimization", "Schema Injection", "Auto-Auditing"],
    link: "/services/seo"
  },
  {
    icon: LineChart,
    title: "Digital Growth Engine",
    desc: "Paid, content and reputation campaigns feeding your AI pipeline.",
    features: ["Paid Ads", "Content Strategy", "Conversion Optimization"],
    link: "/services/digital-marketing"
  },
  {
    icon: Settings,
    title: "Custom AI Build",
    desc: "Bespoke AI systems for complex or entirely unique business requirements.",
    features: ["Custom Architecture", "Proprietary Data", "Deep Integration"],
    link: "/contact"
  }
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-32">
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-block px-3 py-1 text-sm font-mono text-brand-primary border border-brand-primary/30 rounded-full mb-6">
            Productized Solutions
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-none mb-6 uppercase">
            End-to-End Systems.<br />
            <span className="text-brand-primary">Built & Handed Over.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Productised AI solutions you can launch fast. Each system is scoped, built and integrated in a fixed timeline with defined deliverables.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-surface border border-white/5 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors group flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-bg border border-white/10 flex items-center justify-center text-brand-primary mb-6">
                <s.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{s.desc}</p>
              
              <ul className="space-y-2 mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-3" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <Link href={s.link} className="inline-flex items-center text-brand-primary font-semibold hover:text-white transition-colors mt-auto w-max">
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-brand-surface border border-white/5 rounded-3xl p-12 mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-white mb-4">HOW WE PICK THE RIGHT SOLUTION</h2>
            <p className="text-gray-400">We don't guess. We map the bottleneck first.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnose</h3>
              <p className="text-gray-400 text-sm">We audit your current operations, data structure, and traffic to find exactly where an AI system can replace manual hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Design</h3>
              <p className="text-gray-400 text-sm">We select one of our productized systems and map exactly how it will wire into your specific CRM and website.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Deploy</h3>
              <p className="text-gray-400 text-sm">We build, test, and hand over the system in a fixed timeline. No endless pilots. No scope creep.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
