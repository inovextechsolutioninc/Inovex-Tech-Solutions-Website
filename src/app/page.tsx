"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState, Fragment } from "react";

/* ── Animated counting stat ── */
function StatNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-barlow)", fontSize: 36, fontWeight: 900, color: "#e8edeb", letterSpacing: "-0.02em", lineHeight: 1, display: "inline-block" }}>
      {count}<span style={{ fontSize: 22, fontWeight: 700, color: "#96C0B7" }}>{suffix}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main style={{ background: "#0b0f0e", color: "#e8edeb", fontFamily: "var(--font-inter), Inter, sans-serif" }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{ minHeight: "100vh", position: "relative", zIndex: 2, display: "flex", alignItems: "center", paddingTop: 80, overflow: "hidden" }}>
        {/* Grid overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(150,192,183,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(150,192,183,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, black, transparent)",
          pointerEvents: "none", zIndex: 0
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px 80px", width: "100%", position: "relative", zIndex: 2 }}>

          {/* Meta badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a5e58", marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, background: "#96C0B7", borderRadius: "50%", animation: "pulse 2s infinite", flexShrink: 0 }} />
            AI-Native Technology Solutions
          </motion.div>

          {/* Display stack — bordered rows */}
          <motion.h1
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(150,192,183,0.1)", marginBottom: 60, fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", letterSpacing: "inherit", color: "inherit" }}
          >
            {[
              { word: "INTELLIGENT.", aside: "The busywork, gone.", accent: false },
              { word: "AUTOMATED.", aside: "Inside the stack you run.", accent: true },
              { word: "CONNECTED.", aside: "Systems that keep paying.", accent: false },
            ].map((row, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between",
                  borderBottom: "1px solid rgba(150,192,183,0.1)", gap: 20, padding: "4px 0", position: "relative", overflow: "hidden"
                }}
                whileHover={{ backgroundColor: "rgba(150,192,183,0.02)" }}
              >
                <span style={{
                  fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  fontSize: "clamp(64px, 11vw, 152px)",
                  fontWeight: 900, lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase",
                  color: row.accent ? "#96C0B7" : "#e8edeb", flexShrink: 0, padding: "8px 0",
                }}>
                  {row.word}
                </span>
                <span style={{ fontSize: 12, fontWeight: 400, color: "#4a5e58", textAlign: "right", maxWidth: 160, lineHeight: 1.5, alignSelf: "flex-end", paddingBottom: 16, letterSpacing: "0.02em" }}>
                  {row.aside}
                </span>
              </motion.div>
            ))}
          </motion.h1>

          {/* Lower row: copy + stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "start" }}>

            {/* Copy + buttons */}
            <div>
              <p style={{ fontSize: 16, color: "#8fa39d", lineHeight: 1.8, maxWidth: 500, marginBottom: 32 }}>
                Inovex Tech Solutions builds intelligent automation, custom AI models &amp; scalable systems—then wires them into the CRM, website and operations you already run.{" "}
                <strong style={{ color: "#e8edeb", fontWeight: 600 }}>One team. Every layer.</strong>
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 32px", background: "linear-gradient(135deg, #6fa89f, #96C0B7)",
                  color: "white", textDecoration: "none", borderRadius: 50, fontSize: "15.5px", fontWeight: 600, letterSpacing: "0.02em",
                  boxShadow: "0 4px 20px rgba(150,192,183,0.22)"
                }}>
                  Start a Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </Link>
                <Link href="/services" style={{
                  display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px",
                  background: "transparent", color: "#8fa39d", textDecoration: "none",
                  borderRadius: 50, fontSize: "15.5px", fontWeight: 500,
                  border: "1px solid rgba(150,192,183,0.1)"
                }}>
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{
                display: "flex", alignItems: "center",
                background: "#182320", border: "1px solid rgba(150,192,183,0.1)",
                borderRadius: 20, padding: "20px 28px", width: "fit-content"
              }}>
                {[{ target: 150, suffix: "+", label: "Projects Delivered" }, { target: 98, suffix: "%", label: "Client Satisfaction" }, { target: 21, suffix: " days", label: "Avg. Delivery" }].map((s, i) => (
                  <Fragment key={s.label}>
                    {i > 0 && <div style={{ width: 1, height: 40, background: "rgba(150,192,183,0.1)", flexShrink: 0 }} />}
                    <div style={{ textAlign: "center", padding: "0 24px" }}>
                      <StatNumber target={s.target} suffix={s.suffix} />
                      <span style={{ display: "block", fontSize: 11, color: "#4a5e58", marginTop: 5, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                        {s.label}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 2, overflow: "hidden", background: "#0f1614", borderTop: "1px solid rgba(150,192,183,0.1)", borderBottom: "1px solid rgba(150,192,183,0.1)", padding: "20px 0" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ display: "flex", whiteSpace: "nowrap", gap: 32, alignItems: "center" }}
        >
          {Array(2).fill(null).map((_, gi) => (
            <div key={gi} style={{ display: "flex", gap: 32, alignItems: "center", flexShrink: 0 }}>
              {["AI Automation", "Custom LLM Integration", "Chatbot Development", "CRM Automation", "AI-Native Web Development", "Workflow Optimization", "SEO & AI Search", "Predictive Analytics", "API Integration"].map((text, i) => (
                <Fragment key={text}>
                  <span style={{ fontSize: 13.5, fontWeight: 500, color: "#4a5e58", letterSpacing: "0.04em", textTransform: "uppercase" }}>{text}</span>
                  <span style={{ color: "#96C0B7", fontSize: 10 }}>✦</span>
                </Fragment>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          WHAT WE BUILD — Services Grid
      ═══════════════════════════════════════ */}
      <section style={{ padding: "120px 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#96C0B7", background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.18)", padding: "5px 14px", borderRadius: 50, marginBottom: 20 }}>
                What We Build
              </span>
              <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, letterSpacing: "-0.01em", lineHeight: 0.92, textTransform: "uppercase", color: "#e8edeb", marginBottom: 24 }}>
                ONE TEAM FOR THE AI<br />AND EVERYTHING IT<br />PLUGS INTO.
              </h2>
              <p style={{ fontSize: 17, color: "#8fa39d", lineHeight: 1.75 }}>
                We don't bolt AI onto old processes. We start from what intelligence can genuinely take over, then build the workflow, the data pipeline, and the interface around that answer.
              </p>
            </motion.div>
          </div>

          {/* Services grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { num: "01", href: "/services/ai-automation", featured: true, icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>, title: "AI Automation", desc: "Workflow automation across your existing platforms—CRM integration, record hygiene, AI-based reporting, and customer service automation with human handoff built in.", list: ["CRM & API Integration", "Workflow Automation", "Human Handoff & Guardrails"] },
              { num: "02", href: "/services/chatbots", featured: false, icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, title: "Chatbots & AI Apps", desc: "Conversational AI that lives in your product, your site, or your ops—not a tab nobody opens.", list: ["Custom AI Applications", "Assistants & Chatbots", "NLP Models"] },
              { num: "03", href: "/services/ai-development", featured: false, icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: "AI-Native Development", desc: "Product & web development designed around AI from day one—fast, resilient, and built to scale.", list: ["Full-Stack Development", "AI-First Architecture", "Predictive Modelling"] },
              { num: "04", href: "/services/seo", featured: false, icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>, title: "Agentic SEO & AI Search", desc: "Search visibility built for both Google and AI search engines—so you get cited, not skipped.", list: ["Technical SEO", "AI Search Visibility (GEO)", "Content Strategy"] },
              { num: "05", href: "/services/digital-marketing", featured: false, icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>, title: "Digital Marketing", desc: "Paid, content, and reputation campaigns that feed the AI system you just built.", list: ["PPC & Paid Campaigns", "Content Marketing", "Automated Follow-up"] },
            ].map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={s.href} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                  <div style={{
                    background: s.featured ? "linear-gradient(135deg, #182320, rgba(150,192,183,0.05))" : "#182320",
                    border: s.featured ? "1px solid rgba(150,192,183,0.15)" : "1px solid rgba(150,192,183,0.1)",
                    borderRadius: 20, padding: 32, position: "relative", overflow: "hidden",
                    height: "100%", gridColumn: s.featured ? "span 2" : "span 1",
                    transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "rgba(150,192,183,0.45)"; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(150,192,183,0.1)"; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = s.featured ? "rgba(150,192,183,0.15)" : "rgba(150,192,183,0.1)"; el.style.transform = ""; el.style.boxShadow = ""; }}
                  >
                    {/* Arrow */}
                    <div style={{ position: "absolute", top: 28, right: 28, color: "#4a5e58", opacity: 0, transition: "opacity 0.3s, transform 0.3s", transform: "translate(-4px, 4px)" }}
                      className="service-arrow-inner">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#96C0B7" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
                    </div>
                    <div style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace", fontSize: 12, color: "#96C0B7", fontWeight: 600, letterSpacing: "0.1em", marginBottom: 20, opacity: 0.7 }}>{s.num}</div>
                    <div style={{ width: 52, height: 52, background: "rgba(150,192,183,0.1)", border: "1px solid rgba(150,192,183,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#96C0B7", marginBottom: 20 }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize: 19, fontWeight: 700, color: "#e8edeb", marginBottom: 12, letterSpacing: "-0.02em" }}>{s.title}</h3>
                    <p style={{ fontSize: 14.5, color: "#8fa39d", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {s.list.map(li => (
                        <li key={li} style={{ fontSize: 13.5, color: "#4a5e58", paddingLeft: 16, position: "relative", fontWeight: 500 }}>
                          <span style={{ position: "absolute", left: 0, color: "#96C0B7", opacity: 0.6 }}>—</span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROBLEM / SOLUTION
      ═══════════════════════════════════════ */}
      <section style={{ padding: "120px 0", background: "#0f1614", borderTop: "1px solid rgba(150,192,183,0.1)", borderBottom: "1px solid rgba(150,192,183,0.1)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

            {/* Left – Problem */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#96C0B7", background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.18)", padding: "5px 14px", borderRadius: 50, marginBottom: 20 }}>
                The Problem
              </span>
              <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 900, letterSpacing: "-0.01em", lineHeight: 0.95, textTransform: "uppercase", color: "#e8edeb", marginBottom: 20 }}>
                AI STALLS IN PILOT BECAUSE NOTHING IS CONNECTED.
              </h2>
              <p style={{ fontSize: 16, color: "#8fa39d", lineHeight: 1.75, marginBottom: 36, textAlign: "left" }}>
                Most businesses bolt a chatbot onto an old process and call it AI. We start from what a model can genuinely take over, then build everything around that.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Copy-paste CRM updates eating your team's day", "AI pilots that never ship or connect to anything real", "Manual reporting nobody reads and nobody trusts", "Disconnected tools fighting each other for data"].map(pain => (
                  <div key={pain} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14.5, color: "#8fa39d", padding: "14px 16px", background: "rgba(220,100,90,0.04)", border: "1px solid rgba(220,100,90,0.08)", borderRadius: 12, lineHeight: 1.5 }}>
                    <span style={{ color: "#dc6459", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✕</span>
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – Solution card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ background: "#182320", border: "1px solid rgba(150,192,183,0.1)", borderRadius: 28, padding: 36, position: "relative", overflow: "hidden" }}>
                {/* Top gradient line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #96C0B7, transparent)" }} />
                <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#96C0B7", marginBottom: 24 }}>
                  The Inovex Way
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {[
                    { title: "Systems designed around AI, not retrofitted", desc: "We start with what intelligence can take over, then build the workflow around that answer." },
                    { title: "Wired into the tools you already run", desc: "Your CRM, your platforms, your data, your handoffs to a human—all connected." },
                    { title: "Projects finished, on scope and on schedule", desc: "No indefinite pilot, no proof of concept that never ships. We deliver." },
                    { title: "Metrics tied to money, not likes", desc: "We report on numbers that show up in your bank account and cut what doesn't move them." },
                  ].map((sol, i, arr) => (
                    <div key={sol.title} style={{ display: "flex", gap: 16, padding: "20px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(150,192,183,0.1)" : "none" }}>
                      <div style={{ width: 36, height: 36, background: "rgba(150,192,183,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#96C0B7" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: 15, fontWeight: 600, color: "#e8edeb", marginBottom: 6 }}>{sol.title}</h4>
                        <p style={{ fontSize: 13.5, color: "#8fa39d", lineHeight: 1.65, margin: 0 }}>{sol.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS — Vertical Timeline
      ═══════════════════════════════════════ */}
      <section style={{ padding: "120px 0", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#96C0B7", background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.18)", padding: "5px 14px", borderRadius: 50, marginBottom: 20 }}>
                How It Works
              </span>
              <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, letterSpacing: "-0.01em", lineHeight: 0.92, textTransform: "uppercase", color: "#e8edeb", marginBottom: 24 }}>
                SCOPE.<br />PLAN.<br />DELIVER.
              </h2>
              <p style={{ fontSize: 17, color: "#8fa39d", lineHeight: 1.75 }}>
                Every engagement runs the same proven path. You always know what is happening, who owns it, and what it moves.
              </p>
            </motion.div>
          </div>

          {/* Vertical timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", maxWidth: 760, margin: "0 auto" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 32, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, #96C0B7, rgba(150,192,183,0.1))", zIndex: 0 }} />

            {[
              { num: "01", title: "Scope", desc: "Choose the service that fits, then we define requirements together: what to automate, what to integrate, and the standards the work will be judged against.", list: ["Choose a service", "Map the workflow to automate", "Agree success criteria"] },
              { num: "02", title: "Plan", desc: "We meet, walk requirements end to end, and turn them into a build plan with owners, timelines and the systems we will integrate with.", list: ["Requirements walkthrough", "Build & integration plan", "Timeline with owners"] },
              { num: "03", title: "Deliver", desc: "The system ships against every requirement we agreed—integrated, monitored, with reporting that shows what it handled and what happens next.", list: ["Build, integrate, launch", "Reporting you can read", "Iterate on what works"] },
            ].map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 0, position: "relative", zIndex: 2, paddingBottom: i < 2 ? 60 : 0 }}>
                <div style={{ width: 64, height: 64, background: "#0b0f0e", border: "1px solid #96C0B7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jetbrains), monospace", fontSize: 14, fontWeight: 600, color: "#96C0B7", flexShrink: 0, boxShadow: "0 0 20px rgba(150,192,183,0.2)" }}>
                  {step.num}
                </div>
                <div style={{ paddingLeft: 36, paddingTop: 16 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#e8edeb", marginBottom: 12, letterSpacing: "-0.02em" }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "#8fa39d", lineHeight: 1.7, marginBottom: 18, maxWidth: 520 }}>{step.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {step.list.map(li => (
                      <li key={li} style={{ fontSize: 13.5, color: "#4a5e58", paddingLeft: 16, position: "relative", fontWeight: 500 }}>
                        <span style={{ position: "absolute", left: 0, color: "#96C0B7", opacity: 0.7 }}>→</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RESULTS
      ═══════════════════════════════════════ */}
      <section style={{ padding: "120px 0", background: "#0f1614", borderTop: "1px solid rgba(150,192,183,0.1)", borderBottom: "1px solid rgba(150,192,183,0.1)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#96C0B7", background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.18)", padding: "5px 14px", borderRadius: 50, marginBottom: 20 }}>
                Outcomes, Not Activity
              </span>
              <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, letterSpacing: "-0.01em", lineHeight: 0.92, textTransform: "uppercase", color: "#e8edeb", marginBottom: 24 }}>
                WHAT WE<br />REMOVE.
              </h2>
              <p style={{ fontSize: 17, color: "#8fa39d", lineHeight: 1.75 }}>
                We are measured by what we eliminate: manual busywork, disconnected tools, AI pilots that never shipped.
              </p>
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#96C0B7" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, title: "Manual Work Eliminated", desc: "Ticket triage, record updates, first-line answers, routine reporting—runs on its own with a human in the loop where it matters.", stat: "70% avg. reduction in manual ops" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#878E88" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, title: "Faster Lead Response", desc: "Qualified leads answered instantly, 24/7. No human chasing, no missed enquiries, no gap between interest and conversation.", stat: "10x faster lead response time" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7ab5a0" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Systems That Ship", desc: "No indefinite pilots. No proof of concepts that never go live. Built to requirement, integrated, monitored, and handed over.", stat: "100% of projects launched on time" },
            ].map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ background: "#182320", border: "1px solid rgba(150,192,183,0.1)", borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden", height: "100%", transition: "border-color 0.3s, transform 0.3s" }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = "rgba(150,192,183,0.45)"; el.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(150,192,183,0.1)"; el.style.transform = ""; }}>
                  {/* Bottom gradient line on hover — applied via pseudo approach with inner element */}
                  <div style={{ width: 52, height: 52, background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    {r.icon}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e8edeb", marginBottom: 12, letterSpacing: "-0.02em" }}>{r.title}</h3>
                  <p style={{ fontSize: 14, color: "#8fa39d", lineHeight: 1.7, marginBottom: 24 }}>{r.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#96C0B7", background: "rgba(150,192,183,0.08)", border: "1px solid rgba(150,192,183,0.15)", padding: "8px 14px", borderRadius: 50, display: "inline-block", letterSpacing: "0.02em" }}>
                    {r.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section style={{ padding: "120px 0", position: "relative", zIndex: 2 }}>
        {/* Background glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 400, background: "radial-gradient(circle, rgba(150,192,183,0.15), transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ background: "#182320", border: "1px solid rgba(150,192,183,0.2)", borderRadius: 32, padding: 64, maxWidth: 860, margin: "0 auto", position: "relative", overflow: "hidden", boxShadow: "0 0 0 1px rgba(150,192,183,0.05), 0 0 80px rgba(150,192,183,0.08)" }}>
              {/* Top gradient line */}
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, #96C0B7, transparent)" }} />

              <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#96C0B7", marginBottom: 20 }}>
                Ready to Start?
              </div>
              <h2 style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.1, color: "#e8edeb", marginBottom: 20 }}>
                BRING A REAL BOTTLENECK.<br />WE'LL BRING THE SYSTEM.
              </h2>
              <p style={{ fontSize: 16, color: "#8fa39d", lineHeight: 1.75, maxWidth: 600, marginBottom: 48 }}>
                Tell us the problem. We'll come back with the system, the integrations, and the numbers we'd hold ourselves to.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: "linear-gradient(135deg, #6fa89f, #96C0B7)", color: "white", textDecoration: "none", borderRadius: 50, fontSize: "15.5px", fontWeight: 600, letterSpacing: "0.02em", boxShadow: "0 4px 20px rgba(150,192,183,0.22)" }}>
                  Get in Touch
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                </Link>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: "transparent", color: "#8fa39d", textDecoration: "none", borderRadius: 50, fontSize: "15.5px", fontWeight: 500, border: "1px solid rgba(150,192,183,0.1)" }}>
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(150,192,183,0.45); }
          50% { box-shadow: 0 0 0 7px rgba(150,192,183,0); }
        }
      `}</style>
    </main>
  );
}
