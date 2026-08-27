import React, { useState, useEffect } from 'react';
import NetworkCanvas from './components/NetworkCanvas';
import FloatingSymbols from './components/FloatingSymbols';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Journey from './components/Journey';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Wins from './components/Wins';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ThemePicker from './components/ThemePicker';
import Chatbot from './components/Chatbot';
import TerminalBoot from './components/TerminalBoot';
import Cursor3D from './components/Cursor3D';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [theme, setTheme] = useState('amber-navy');
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    // Detect system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme attribute to the HTML tag
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleMotion = () => {
    setIsReducedMotion((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-navy)] text-[var(--text-main)] relative selection:bg-[var(--amber-light)]/30 selection:text-[var(--amber-light)] transition-colors duration-300">

      {/* Terminal Boot Splash Screen — auto-launches, no click required */}
      {!bootComplete && (
        <TerminalBoot onBootComplete={() => setBootComplete(true)} />
      )}

      {/* 3D Moving Cursor */}
      <Cursor3D isReducedMotion={isReducedMotion} />

      {/* Persistent Canvas Constellation Background */}
      <NetworkCanvas isReducedMotion={isReducedMotion} />

      {/* Floating Code Accent Symbols */}
      <FloatingSymbols isReducedMotion={isReducedMotion} />

      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isReducedMotion={isReducedMotion}
        onToggleMotion={handleToggleMotion}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        {/* 1. Hero — rotating roles + circular text + open-to-work badge */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          isReducedMotion={isReducedMotion}
        />

        {/* 2. About */}
        <About />

        
        

        {/* 4. Experience, Leadership, Mentorship */}
        <Journey />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. Certifications with modal viewer */}
        <Certificates />

        {/* 7. Achievements / Wins */}
        <Wins />

        {/* 8. Skills / Tech Stack */}
        <Stack />

        {/* 9. Contact Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Color Theme Selector */}
      <ThemePicker currentTheme={theme} onThemeChange={setTheme} />

      {/* AI Chatbot Assistant */}
      <Chatbot />

    </div>
  );
}
