import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-bg pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link href="/" className="font-display font-bold text-2xl tracking-wide text-white block mb-4">
            INOVEX TECH SOLUTIONS<span className="text-brand-primary">.</span>
          </Link>
          <p className="text-gray-400 max-w-sm">
            Inovex Tech Solutions builds intelligent automation, custom AI models & scalable systems—then wires them into the platforms you already run.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services/ai-automation" className="hover:text-brand-primary transition">AI Automation</Link></li>
            <li><Link href="/services/chatbots" className="hover:text-brand-primary transition">Chatbots & AI Apps</Link></li>
            <li><Link href="/services/ai-development" className="hover:text-brand-primary transition">AI-Native Development</Link></li>
            <li><Link href="/services/seo" className="hover:text-brand-primary transition">Agentic SEO</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-brand-primary transition">About Us</Link></li>
            <li><Link href="/solutions" className="hover:text-brand-primary transition">How We Work</Link></li>
            <li><Link href="/contact" className="hover:text-brand-primary transition">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Inovex Tech Solutions. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
