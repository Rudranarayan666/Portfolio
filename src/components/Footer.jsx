import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 py-8 bg-[#090c16]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright & Credit */}
        <p className="font-mono text-xs text-[#9aa3b2]">
          Designed &amp; built by <span className="text-[#ff9d42] font-semibold">Rudranarayan Sahu</span> · © 2026
        </p>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors flex items-center space-x-1.5 font-mono text-xs"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
