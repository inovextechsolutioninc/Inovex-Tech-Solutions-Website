"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col pt-32 pb-32">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <div className="inline-block px-3 py-1 text-sm font-mono text-brand-primary border border-brand-primary/30 rounded-full mb-6">
            About Inovex Tech
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-none mb-6">
            WE ARE A SPECIALIST<br />
            <span className="text-brand-primary">AI-NATIVE TEAM.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light">
            We build intelligent systems for businesses that want to scale output without linearly scaling their headcount.
          </p>
        </motion.div>

        {/* Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-4xl text-white">AI SHOULD DO THE WORK, NOT SIT IN A PILOT.</h2>
            <p className="text-gray-400 text-lg">
              The industry is obsessed with proof-of-concepts that look cool but never touch production data. We are obsessed with the opposite: boring, reliable, invisible AI systems that run your operations, answer your customers, and grow your traffic.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-brand-surface/50 border border-white/5 p-8 rounded-2xl">
              <div className="text-4xl font-display font-bold text-brand-primary mb-1">150+</div>
              <div className="text-sm text-gray-400 font-medium">Projects Shipped</div>
            </div>
            <div className="bg-brand-surface/50 border border-white/5 p-8 rounded-2xl">
              <div className="text-4xl font-display font-bold text-brand-primary mb-1">98%</div>
              <div className="text-sm text-gray-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-brand-surface/50 border border-white/5 p-8 rounded-2xl">
              <div className="text-4xl font-display font-bold text-brand-primary mb-1">21</div>
              <div className="text-sm text-gray-400 font-medium">Days Avg. Delivery</div>
            </div>
            <div className="bg-brand-surface/50 border border-white/5 p-8 rounded-2xl">
              <div className="text-4xl font-display font-bold text-brand-primary mb-1">5+</div>
              <div className="text-sm text-gray-400 font-medium">Years AI Experience</div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="font-display font-bold text-4xl text-white mb-12 text-center">OUR ENGINEERING VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Outcomes Over Activity", desc: "We don't bill you for thinking about the problem. We bill you for the system that solves it." },
              { icon: Zap, title: "Wired In, Not Bolted On", desc: "AI is useless if it doesn't talk to your CRM, your database, and your team." },
              { icon: Users, title: "No Endless Pilots", desc: "Every project has a defined scope, a defined timeline, and a defined handover date." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-surface border border-white/5 p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                  <v.icon size={120} className="absolute -top-6 -right-6" />
                </div>
                <v.icon className="text-brand-primary mb-6 relative z-10" size={32} />
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{v.title}</h3>
                <p className="text-gray-400 relative z-10">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary/10 border border-brand-primary/30 rounded-3xl p-12 text-center"
        >
          <h2 className="font-display font-bold text-4xl text-white mb-6">READY TO WORK TOGETHER?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition-colors">
            Start a Project <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
