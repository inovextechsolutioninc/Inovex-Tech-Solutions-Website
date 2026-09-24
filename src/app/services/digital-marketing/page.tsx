"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Share2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DigitalMarketingPage() {
  return (
    <div className="bg-brand-bg min-h-screen text-gray-300">
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Performance <span className="text-brand-primary">Digital Marketing</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-400">
            Omnichannel campaigns engineered for ROI. We blend creative storytelling with rigorous data analytics to scale your customer acquisition across paid and organic channels.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <MousePointerClick className="w-8 h-8" />, title: "PPC & Paid Social", desc: "Highly targeted Google Ads and Meta campaigns designed to minimize CAC and maximize ROAS." },
            { icon: <Share2 className="w-8 h-8" />, title: "Social Media Strategy", desc: "Engaging content calendars, community management, and influencer partnerships to build brand loyalty." },
            { icon: <Users className="w-8 h-8" />, title: "Conversion Optimization", desc: "A/B testing, heatmaps, and funnel optimizations to turn more visitors into paying customers." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-brand-primary transition-colors"
            >
              <div className="text-brand-primary mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-primary/10 p-12 rounded-3xl border border-brand-primary/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to scale your revenue?</h2>
          <p className="text-lg mb-8 text-gray-300">Let's craft a growth strategy tailored to your business goals.</p>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-colors">
            Start Growing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
