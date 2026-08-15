import React, { useState, useEffect } from 'react';
import NetworkCanvas from './components/NetworkCanvas';
import FloatingSymbols from './components/FloatingSymbols';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Wins from './components/Wins';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Detect system preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
    }
  }, []);

  const handleToggleMotion = () => {
    setIsReducedMotion((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#090c16] text-[#f5f3ef] relative selection:bg-[#ff9d42]/30 selection:text-[#ff9d42]">
      
      {/* 1. Persistent Fixed Canvas Constellation Background */}
      <NetworkCanvas isReducedMotion={isReducedMotion} />

      {/* 2. Floating Code Accent Symbols (&&, #, </>, =>, {}, 01, ::) */}
      <FloatingSymbols isReducedMotion={isReducedMotion} />

      {/* 3. Sticky Glass Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isReducedMotion={isReducedMotion}
        onToggleMotion={handleToggleMotion}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          isReducedMotion={isReducedMotion}
        />
        <About />
        <Journey />
        <Projects />
        <Wins />
        <Stack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Download / Request Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
