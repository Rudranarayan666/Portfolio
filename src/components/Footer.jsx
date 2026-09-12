import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-[2.5px] border-black py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright & Credit */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#fde047] border border-black inline-block" />
          <p className="font-mono text-xs font-bold text-zinc-700">
            Designed &amp; built by <span className="text-black underline decoration-2 decoration-[#fde047]">Rudranarayan Sahu</span> • © 2026
          </p>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="neo-btn neo-btn-secondary px-3 py-1.5 text-xs font-mono"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
