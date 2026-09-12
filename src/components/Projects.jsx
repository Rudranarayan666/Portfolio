import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../content';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const currentProject = PROJECTS[currentIndex];
  const hasGithub = currentProject.github && currentProject.github.trim() !== '';
  const hasLive = currentProject.live && currentProject.live.trim() !== '';

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section id="projects" className="py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header & Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div className="space-y-1">
            <div className="neo-badge bg-[#86efac] text-black">
              <Layers className="w-3.5 h-3.5" />
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
              Featured <span className="underline decoration-4 decoration-[#fde047]">Projects</span>
            </h2>
            <p className="text-zinc-600 text-sm font-medium">
              Interactive slider of production-ready apps, AI agents, and research systems.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Current Slide Counter */}
            <div className="px-3.5 py-1.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-extrabold">
              <span className="text-black">0{currentIndex + 1}</span>
              <span className="text-zinc-400 mx-1">/</span>
              <span className="text-zinc-500">0{PROJECTS.length}</span>
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="neo-btn neo-btn-secondary p-2.5"
              aria-label="Previous Project"
              title="Previous project (or Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="neo-btn neo-btn-primary p-2.5"
              aria-label="Next Project"
              title="Next project (or Right Arrow)"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* Animated Carousel Card */}
        <div className="relative overflow-hidden min-h-[420px] sm:min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="neo-box p-6 sm:p-10 bg-white w-full shadow-[6px_6px_0px_0px_#000]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                {/* Left Column: Project Details */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* Category & Status Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    {currentProject.badge && (
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border-2 border-black bg-[#fde047] shadow-[2px_2px_0px_0px_#000]">
                        ⭐ {currentProject.badge}
                      </span>
                    )}
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border border-black bg-zinc-100 text-zinc-700">
                      {currentProject.date}
                    </span>
                    <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      {currentProject.subtitle}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-black tracking-tight">
                    {currentProject.title}
                  </h3>

                  {/* Simple & Clear Description */}
                  <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
                    {currentProject.description}
                  </p>

                  {/* Highlight Metric Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#86efac] border-2 border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-black" />
                    <span>{currentProject.metric.replace('✓ ', '')}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-1.5 pt-1">
                    <div className="font-mono text-[11px] font-bold text-zinc-500 uppercase">
                      Technologies & Frameworks:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.stack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-zinc-100 border-2 border-black text-black shadow-[1px_1px_0px_0px_#000]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t-2 border-zinc-100 flex flex-wrap items-center gap-3">
                    {hasGithub ? (
                      <a
                        href={currentProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn neo-btn-primary px-5 py-2.5 text-xs font-mono"
                      >
                        <GithubIcon className="w-4 h-4 text-black" />
                        <span>View Source Code</span>
                        <ArrowUpRight className="w-4 h-4 text-black" />
                      </a>
                    ) : (
                      <span className="font-mono text-xs font-bold text-zinc-500 px-3 py-2 rounded border border-zinc-300">
                        Research Baseline Project
                      </span>
                    )}

                    {hasLive && (
                      <a
                        href={currentProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn neo-btn-secondary px-5 py-2.5 text-xs font-mono"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Column: Decorative Architecture Box */}
                <div className="lg:col-span-4 hidden lg:flex flex-col justify-center">
                  <div className="p-6 rounded-2xl border-2 border-black bg-zinc-50 shadow-[4px_4px_0px_0px_#000] space-y-4">
                    <div className="flex items-center justify-between border-b-2 border-black pb-2">
                      <span className="font-mono text-xs font-bold uppercase text-zinc-600">
                        ARCHITECTURE HIGHLIGHT
                      </span>
                      <Cpu className="w-4 h-4 text-black" />
                    </div>

                    <div className="space-y-2 font-mono text-xs font-bold">
                      <div className="p-2 rounded bg-white border border-black flex items-center justify-between">
                        <span>Reliability</span>
                        <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">Deterministic</span>
                      </div>
                      <div className="p-2 rounded bg-white border border-black flex items-center justify-between">
                        <span>Explainability</span>
                        <span className="text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded border border-blue-300">SHAP / XAI</span>
                      </div>
                      <div className="p-2 rounded bg-white border border-black flex items-center justify-between">
                        <span>Security</span>
                        <span className="text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded border border-purple-300">SHA-256</span>
                      </div>
                    </div>

                    <p className="text-[11px] font-sans font-medium text-zinc-600 leading-relaxed">
                      Zero-hallucination execution loop with strict citations bound to source documents.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Project Selector Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => goToSlide(idx)}
                className={`px-3 py-1.5 rounded-lg border-2 border-black font-mono text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#fde047] text-black shadow-[3px_3px_0px_0px_#000] -translate-y-0.5'
                    : 'bg-white text-zinc-600 hover:text-black hover:bg-zinc-100 shadow-[2px_2px_0px_0px_#000]'
                }`}
              >
                <span className="text-zinc-500 mr-1.5">0{idx + 1}.</span>
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
