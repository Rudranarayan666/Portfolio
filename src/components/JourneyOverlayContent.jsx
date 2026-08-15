import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  ChevronDown, 
  Mail, 
  Award,
  Sparkles,
  ShieldCheck,
  Terminal,
  ArrowRight
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION, EXPERIENCE, PROJECTS } from "../content";
import { soundFx } from "../utils/soundEffects";

const panelVariants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -50 : dir === "right" ? 50 : 0,
    y: dir === "center" ? -30 : dir === "up" ? 30 : 0,
    scale: dir === "scale" ? 0.92 : 1,
    filter: "blur(8px)"
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -30 : dir === "right" ? 30 : 0,
    y: dir === "center" ? -20 : dir === "up" ? 20 : 0,
    scale: dir === "scale" ? 0.95 : 1,
    filter: "blur(6px)",
    transition: { duration: 0.3 }
  })
};

export default function JourneyOverlayContent({ frameIndex, scrollProgress }) {
  const isLaunch = frameIndex >= 0 && frameIndex < 150;
  const isAcademy = frameIndex >= 150 && frameIndex < 350;
  const isExperience = frameIndex >= 350 && frameIndex < 550;
  const isDiscoveries = frameIndex >= 550 && frameIndex < 750;
  const isArrival = frameIndex >= 750 && frameIndex <= 900;

  const scrollToDashboard = () => {
    soundFx.playWarp();
    const el = document.getElementById("dashboard");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col overflow-hidden">
      
      {/* Compact Telemetry Bar — Top */}
      <div className="shrink-0 mx-3 mt-16 md:mt-[72px] mb-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300/70 bg-[#050810]/60 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500/10">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>FRAME {String(frameIndex).padStart(4, "0")} / 0900</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">
              TRAJECTORY {Math.round(scrollProgress * 100)}%
            </span>
          </div>
          <span className="text-slate-500">OPTIMAL</span>
        </div>
      </div>

      {/* Content Panels — Middle area, leaves bottom 35% clear for spaceship */}
      <div className="flex-1 relative px-3 md:px-6" style={{ maxHeight: "55vh" }}>
        <AnimatePresence mode="wait">
          
          {/* BEAT 1: LAUNCH — Top-left, compact */}
          {isLaunch && (
            <motion.div
              key="launch"
              custom="left"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-2 left-0 max-w-md pointer-events-auto"
            >
              <div className="glass-panel p-5 md:p-6 rounded-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[10px] font-mono mb-3">
                  <Rocket className="w-3 h-3" />
                  {PERSONAL_INFO.status}
                </div>

                <h1 className="text-2xl md:text-4xl font-black font-display text-white mb-1 tracking-tight leading-none">
                  {PERSONAL_INFO.name}
                </h1>
                
                <p className="text-cyan-300 font-semibold text-xs md:text-sm mb-2 font-heading">
                  {PERSONAL_INFO.title}
                </p>

                <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed mb-4">
                  {PERSONAL_INFO.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 font-mono text-[10px]">
                  {PERSONAL_INFO.metrics.map((m, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-slate-800/60 p-1.5 rounded-lg text-center">
                      <div className="text-cyan-300 font-bold text-xs">{m.value}</div>
                      <div className="text-slate-500 text-[8px] uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 text-[10px] font-mono">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/25 transition">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/50 transition">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                    GitHub
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/50 transition">
                    <Mail className="w-3 h-3" /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* BEAT 2: ACADEMY — Top-right */}
          {isAcademy && (
            <motion.div
              key="academy"
              custom="right"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-2 right-0 max-w-sm pointer-events-auto"
            >
              <div className="glass-panel p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-500/15">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[10px]">
                    <GraduationCap className="w-3.5 h-3.5" />
                    SECTOR 02 // ACADEMY
                  </div>
                  <span className="text-[10px] bg-cyan-500/15 text-cyan-300 font-mono px-2 py-0.5 rounded-full border border-cyan-500/20">
                    CGPA {EDUCATION.cgpa}
                  </span>
                </div>

                <h2 className="text-base font-bold font-heading text-white mb-0.5 leading-tight">
                  {EDUCATION.institution}
                </h2>
                <p className="text-cyan-400 font-mono text-[10px] mb-3">
                  {EDUCATION.degree} • {EDUCATION.timeline}
                </p>

                <div className="space-y-1.5 mb-3">
                  {EDUCATION.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800/50 text-[10px] text-slate-200 leading-tight">
                      <Sparkles className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-gradient-to-r from-cyan-950/30 to-slate-900/60 border border-cyan-500/20 rounded-lg flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-cyan-300">USRF 2026 Research Fellow</div>
                    <div className="text-[9px] text-slate-400">Amity University • Top 1%</div>
                  </div>
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                </div>
              </div>
            </motion.div>
          )}

          {/* BEAT 3: EXPERIENCE — Top-left */}
          {isExperience && (
            <motion.div
              key="experience"
              custom="left"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-2 left-0 max-w-md pointer-events-auto"
            >
              <div className="glass-panel p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-500/15">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[10px]">
                    <Briefcase className="w-3.5 h-3.5" />
                    SECTOR 03 // SYSTEMS ONLINE
                  </div>
                  <span className="text-[10px] bg-cyan-500/15 text-cyan-300 font-mono px-2 py-0.5 rounded-full">
                    EXPERIENCE
                  </span>
                </div>

                <div className="space-y-2.5">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="bg-slate-900/70 p-3 rounded-xl border border-slate-800/50">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white text-xs font-heading">{exp.company}</h3>
                        <span className="text-[9px] font-mono bg-slate-800/80 text-cyan-300 px-1.5 py-0.5 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-[10px] text-cyan-400 font-medium mb-1">{exp.role}</div>
                      <ul className="text-[10px] text-slate-300 space-y-0.5 mb-1.5">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-tight">
                            <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1">
                        {exp.tech.map((t, idx) => (
                          <span key={idx} className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 text-slate-400 border border-slate-800/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* BEAT 4: DISCOVERIES — Top center, narrower */}
          {isDiscoveries && (
            <motion.div
              key="discoveries"
              custom="center"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-3xl pointer-events-auto"
            >
              <div className="glass-panel p-5 rounded-2xl">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-500/15">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-[10px]">
                    <Cpu className="w-3.5 h-3.5" />
                    SECTOR 04 // DEEP SPACE DISCOVERIES
                  </div>
                  <span className="text-[10px] bg-cyan-500/15 text-cyan-300 font-mono px-2 py-0.5 rounded-full">
                    CORE PROJECTS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="bg-slate-900/70 p-3 rounded-xl border border-slate-800/50 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[9px] font-mono bg-cyan-950/80 text-cyan-300 px-1.5 py-0.5 rounded border border-cyan-800/40">
                            {proj.badge}
                          </span>
                          <span className="text-[9px] text-slate-400 font-mono">{proj.period}</span>
                        </div>
                        <h3 className="font-bold text-white text-xs mb-0.5 font-heading leading-tight">{proj.title}</h3>
                        <p className="text-[10px] text-slate-300 leading-tight mb-2 line-clamp-2">
                          {proj.summary}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {proj.tech.slice(0, 4).map((t, idx) => (
                          <span key={idx} className="text-[8px] font-mono px-1.5 py-0.5 bg-slate-950/80 text-slate-400 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* BEAT 5: ARRIVAL — Center */}
          {isArrival && (
            <motion.div
              key="arrival"
              custom="scale"
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-4 left-1/2 -translate-x-1/2 max-w-sm text-center pointer-events-auto"
            >
              <div className="glass-panel p-6 rounded-2xl border-cyan-500/25">
                <div className="w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 text-cyan-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div className="text-[10px] font-mono text-cyan-300/70 mb-1">
                  DOCKING COMPLETE // SECTOR 05
                </div>
                
                <h2 className="text-xl font-black font-display text-white mb-2">
                  COMMAND STATION
                </h2>
                
                <p className="text-slate-400 text-[11px] mb-5 leading-relaxed">
                  Enter the interactive dashboard to explore full project details, skills, and achievements.
                </p>

                <button
                  onClick={scrollToDashboard}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5"
                >
                  Enter Dashboard <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom scroll prompt */}
      <div className="shrink-0 mx-3 mb-3">
        <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 bg-[#050810]/50 backdrop-blur-sm px-4 py-2 rounded-xl">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-cyan-500/50" />
            <span>SPACE JOURNEY</span>
          </div>
          <div className="flex items-center gap-1.5 text-cyan-400/50 animate-bounce">
            <span>SCROLL</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

    </div>
  );
}
