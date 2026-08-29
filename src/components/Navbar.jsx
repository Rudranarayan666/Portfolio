import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume, isReducedMotion, onToggleMotion }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = ['about', 'journey', 'projects', 'wins', 'stack', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Wins', href: '#wins' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#ff9d42] rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl btn-amber-gradient flex items-center justify-center font-heading font-extrabold text-lg text-[#090c16] shadow-md group-hover:scale-105 transition-transform">
            R
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-[#f5f3ef]">
            Rudra<span className="text-[#ff9d42]">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg font-mono text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#ff9d42] bg-[#ff9d42]/10 border border-[#ff9d42]/20'
                    : 'text-[#9aa3b2] hover:text-[#f5f3ef] hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Motion toggle pill */}
          <button
            onClick={onToggleMotion}
            title={isReducedMotion ? "Enable Animations" : "Reduce Motion"}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff9d42]/30 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
          >
            <Sparkles className={`w-4 h-4 ${isReducedMotion ? 'opacity-40' : 'text-[#ff9d42]'}`} />
          </button>

          {/* Resume Outline Button */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-xl border border-[#ff9d42]/40 text-[#ff9d42] hover:bg-[#ff9d42]/10 font-mono text-xs font-semibold flex items-center space-x-1.5 transition-all hover:scale-105"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Hire Me Solid Gradient Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-xl btn-amber-gradient text-xs font-semibold flex items-center space-x-1.5 shadow-lg"
          >
            <span>Hire Me</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#f5f3ef] hover:text-[#ff9d42]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden amber-glass-card border-b border-[#ff9d42]/20 px-6 pt-4 pb-8 space-y-3 mt-2 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-mono text-sm text-[#f5f3ef] hover:text-[#ff9d42] hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 rounded-xl border border-[#ff9d42]/40 text-[#ff9d42] font-mono text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>↓ Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2 rounded-xl btn-amber-gradient text-xs font-semibold flex items-center justify-center space-x-2 text-center"
            >
              <span>Hire Me ➤</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
