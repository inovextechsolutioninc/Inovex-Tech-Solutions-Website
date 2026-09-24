"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "ai-automation",
    title: "AI Automation",
    desc: "Workflow automation across your existing platforms—CRM integration, record hygiene, AI-based reporting, and customer service automation with human handoff built in.",
    features: [
      "CRM Record Hygiene & Syncing",
      "Email Triage & Intelligent Routing",
      "Customer Support First-Line Defense",
      "Automated Reporting & Analytics",
      "Lead Qualification Pipelines",
      "Document Processing & Extraction"
    ],
    replaces: "Manual data entry, missed follow-ups, and copy-pasting between disconnected tools.",
    link: "/services/ai-automation"
  },
  {
    id: "chatbots",
    title: "Chatbots & AI Apps",
    desc: "Conversational AI that lives in your product, your site, or your ops. RAG chatbots that answer from your own documents, cite sources, and deflect tickets.",
    features: [
      "Retrieval Augmented Generation (RAG)",
      "Customer Support Deflection Bots",
      "Internal Knowledge Base Assistants",
      "Lead Qualification Widgets",
      "WhatsApp & SMS Integrations",
      "Custom Fine-tuned LLMs"
    ],
    replaces: "Endless support tickets for basic questions and clunky, rule-based 90s chatbots.",
    link: "/services/chatbots"
  },
  {
    id: "ai-development",
    title: "AI-Native Development",
    desc: "Product & web development designed around AI from day one—fast, resilient, and built to scale using modern React and Serverless architectures.",
    features: [
      "Next.js / React Web Applications",
      "Custom API & Backend Systems",
      "Data Dashboards & Analytics UIs",
      "Serverless Cloud Infrastructure",
      "Secure Authentication Systems",
      "CI/CD Deployment Pipelines"
    ],
    replaces: "Slow WordPress sites and applications that can't integrate with modern AI APIs.",
    link: "/services/ai-development"
  },
  {
    id: "seo",
    title: "Agentic SEO & Search",
    desc: "Search visibility built for both Google and AI search engines. We structure your data so you get cited by ChatGPT and Perplexity, not skipped.",
    features: [
      "Generative Engine Optimization (GEO)",
      "JSON-LD Schema Injection",
      "Autonomous SEO Auditing",
      "Technical Site Structure",
      "Content Strategy & Gap Analysis",
      "AI Crawler Accessibility"
    ],
    replaces: "Outdated keyword stuffing and invisibility in modern AI chat interfaces.",
    link: "/services/seo"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Paid, content, and reputation campaigns that feed the AI systems you just built. Stop paying for clicks and start paying for qualified system inputs.",
    features: [
      "Paid Search (PPC) Campaigns",
      "Content & Inbound Marketing",
      "Automated Follow-up Sequences",
      "Conversion Rate Optimization",
      "Reputation Management",
      "Performance Analytics"
    ],
    replaces: "Wasted ad spend that drives traffic to unoptimized, leaky conversion funnels.",
    link: "/services/digital-marketing"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative flex flex-col pt-32 pb-32">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-none mb-6 uppercase">
            Five Disciplines.<br />
            <span className="text-brand-primary">One System.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            We offer 5 integrated service lines. They work independently, but compound massively when connected together.
          </p>
        </motion.div>

        {/* Nav Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-24 sticky top-24 z-40 bg-brand-bg/80 backdrop-blur-md py-4 rounded-2xl border border-white/5 shadow-2xl">
          {services.map((s) => (
            <a 
              key={s.id} 
              href={`#${s.id}`}
              className="px-5 py-2 rounded-full bg-white/5 text-gray-300 text-sm font-medium hover:bg-brand-primary/20 hover:text-brand-primary transition-colors border border-white/5"
            >
              {s.title}
            </a>
          ))}
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-40 border-b border-white/5 pb-32 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left: Title & Features */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <div className="inline-block px-3 py-1 text-xs font-mono text-brand-primary border border-brand-primary/30 rounded-full mb-4">
                      0{i + 1} // Service Line
                    </div>
                    <h2 className="font-display font-bold text-4xl text-white mb-4">{s.title}</h2>
                    <p className="text-lg text-gray-400">{s.desc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {s.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-brand-primary shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6">
                    <Link href={s.link} className="inline-flex items-center gap-2 bg-white/5 text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-primary hover:text-black transition-colors">
                      View Service Details <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                
                {/* Right: Highlight Card */}
                <div className="lg:col-span-5">
                  <div className="bg-brand-surface border border-brand-primary/20 rounded-2xl p-8 h-full flex flex-col justify-center">
                    <h4 className="text-brand-primary font-mono text-sm uppercase mb-4">What this replaces</h4>
                    <p className="text-xl text-white font-medium leading-relaxed mb-8">
                      "{s.replaces}"
                    </p>
                    <div className="mt-auto border-t border-white/10 pt-6">
                      <span className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                        Productised delivery starting at 21 days
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary text-black rounded-3xl p-12 text-center max-w-4xl mx-auto mt-16"
        >
          <h2 className="font-display font-bold text-4xl mb-4">START WITH ONE SERVICE. SCALE TO ALL FIVE.</h2>
          <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
            You don't need to rebuild your entire business overnight. Pick the biggest bottleneck, let us automate it, and use the saved capital to fund the next one.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-xl">
            Book a Scoping Call <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
