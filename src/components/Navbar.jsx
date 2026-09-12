import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'stack', 'wins', 'certifications', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Wins', href: '#wins' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f4]/90 backdrop-blur-md border-b-[2.5px] border-black transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center space-x-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#fde047] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-heading font-extrabold text-lg text-black group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
            R
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-black">
            Rudra<span className="text-[#eab308]">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all border-2 ${
                  isActive
                    ? 'bg-[#fde047] text-black border-black shadow-[2px_2px_0px_0px_#000]'
                    : 'text-zinc-700 border-transparent hover:text-black hover:border-black hover:bg-white hover:shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="neo-btn neo-btn-secondary px-3.5 py-1.5 text-xs font-mono"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="neo-btn neo-btn-primary px-3.5 py-1.5 text-xs font-mono"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white px-4 pt-4 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg border-2 border-black text-center font-mono text-xs font-bold bg-[#fbf9f4] hover:bg-[#fde047] shadow-[2px_2px_0px_0px_#000]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 neo-btn neo-btn-secondary py-2 text-xs font-mono"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 neo-btn neo-btn-primary py-2 text-xs font-mono text-center"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
