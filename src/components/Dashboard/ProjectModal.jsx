import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, Shield, Calendar, Layers } from "lucide-react";
import { soundFx } from "../../utils/soundEffects";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl glass-panel bg-[#0a0d1a] border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl my-8 text-left"
        >
          {/* Header Poster Banner */}
          <div className={`h-48 md:h-64 bg-gradient-to-r ${project.posterGradient} p-6 md:p-8 flex flex-col justify-end relative overflow-hidden border-b border-cyan-500/20`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-950 transition border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {project.period}
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-white mb-1">
              {project.title}
            </h2>
            <p className="text-xs md:text-sm text-cyan-300 font-heading">
              {project.tagline}
            </p>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> ARCHITECTURAL OVERVIEW
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div>
              <h3 className="text-xs font-mono uppercase text-cyan-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> KEY ENGINEERING DELIVERABLES
              </h3>
              <div className="space-y-2.5">
                {project.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 text-xs md:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h3 className="text-xs font-mono uppercase text-cyan-400 mb-2">
                TECHNOLOGY & FRAMEWORKS
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 bg-slate-900 text-cyan-300 rounded-lg border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs border border-slate-700 transition"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg> View Source Code
              </a>
              {project.links.demo !== "#" && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Interactive Demo
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
