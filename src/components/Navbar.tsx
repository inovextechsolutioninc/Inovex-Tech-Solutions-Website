import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-2xl tracking-wide text-white">
          INOVEX TECH SOLUTIONS<span className="text-brand-primary">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/contact" className="bg-brand-primary text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-white transition-colors">
            Start a Project
          </Link>
        </div>

        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
