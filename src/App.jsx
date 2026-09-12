import React, { useState } from 'react';
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
import Chatbot from './components/Chatbot';
import FastBootIntro from './components/FastBootIntro';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [bootDone, setBootDone] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] neo-grid-bg relative transition-colors duration-200">
      {/* 2-Second Kinetic Boot & Blast-Door Opening */}
      {!bootDone && (
        <FastBootIntro onComplete={() => setBootDone(true)} />
      )}

      {/* Neo-Brutalist Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. About */}
        <About />

        {/* 3. Experience & Leadership */}
        <Journey />

        {/* 4. Featured Projects (Animated Slider) */}
        <Projects />

        {/* 5. Tech Stack (Brand Icons) */}
        <Stack />

        {/* 6. Achievements / Wins */}
        <Wins />

        {/* 7. Certifications */}
        <Certificates />

        {/* 8. Contact Callout */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Neo-Brutalist AI Assistant */}
      <Chatbot />
    </div>
  );
}
