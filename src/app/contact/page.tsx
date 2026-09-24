"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

const serviceOptions = [
  { value: "ai-automation", label: "AI Automation" },
  { value: "chatbots", label: "Chatbots & AI Apps" },
  { value: "ai-dev", label: "AI-Native Development" },
  { value: "seo", label: "Agentic SEO" },
  { value: "other", label: "Not Sure Yet" }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  
  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      service: formData.get('service'), // Gets value from hidden input
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center pt-32 pb-32 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column - Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-block px-3 py-1 text-sm font-mono text-brand-primary border border-brand-primary/30 rounded-full w-max">
            Let's Talk
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight leading-none">
            BRING A REAL<br />
            <span className="text-brand-primary">BOTTLENECK.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-md">
            Tell us the problem. We'll come back with the system, the integrations, and the numbers we'd hold ourselves to.
          </p>

          <div className="pt-8 space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-2">What happens next?</h4>
              <ul className="space-y-4 text-gray-400 text-sm mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-surface border border-brand-primary/30 flex items-center justify-center text-brand-primary text-xs shrink-0 mt-0.5">1</div>
                  You send your requirements via the secure API.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-surface border border-brand-primary/30 flex items-center justify-center text-brand-primary text-xs shrink-0 mt-0.5">2</div>
                  We review the technical feasibility within 24 hours.
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-surface border border-brand-primary/30 flex items-center justify-center text-brand-primary text-xs shrink-0 mt-0.5">3</div>
                  We schedule a scoping call to map the exact architecture.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-brand-surface/80 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative z-20">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received</h3>
                <p className="text-gray-400">Our systems have successfully processed your request. We will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-primary hover:text-white transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input required type="text" id="name" name="name" className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-gray-600" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email *</label>
                    <input required type="email" id="email" name="email" className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-gray-600" placeholder="jane@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                    <input type="text" id="company" name="company" className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-gray-600" placeholder="Company Ltd" />
                  </div>
                  
                  {/* Premium Custom Dropdown */}
                  <div className="space-y-2 relative" ref={dropdownRef}>
                    <label className="text-sm font-medium text-gray-300">Service of Interest</label>
                    <input type="hidden" name="service" value={selectedService.value} />
                    
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full bg-brand-bg/50 border ${isDropdownOpen ? 'border-brand-primary ring-1 ring-brand-primary' : 'border-white/10'} rounded-lg px-4 py-3.5 text-white flex items-center justify-between transition-all`}
                    >
                      <span className="text-white">{selectedService.label}</span>
                      <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-brand-primary" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-brand-surface border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl"
                        >
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setSelectedService(option);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                                selectedService.value === option.value 
                                  ? 'bg-brand-primary/10 text-brand-primary font-medium' 
                                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details *</label>
                  <textarea required id="message" name="message" rows={4} className="w-full bg-brand-bg/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none placeholder:text-gray-600" placeholder="Tell us about your current workflow bottlenecks..."></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-black font-semibold rounded-lg px-4 py-4 flex items-center justify-center gap-2 hover:bg-white transition-all hover:shadow-[0_0_20px_rgba(150,192,183,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting to Secure API...</span>
                  ) : (
                    <>
                      <span>Initialize Project</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
