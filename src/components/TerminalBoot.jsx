import React, { useState, useEffect, useRef } from "react";
import { TERMINAL_BOOT_LOGS, PERSONAL_INFO } from "../content";

export default function TerminalBoot({ onBootComplete }) {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const terminalRef = useRef(null);
  // Prevent double-trigger on React StrictMode double-mount
  const hasLaunchedRef = useRef(false);

  // Typewriter effect — runs automatically on mount
  useEffect(() => {
    if (currentLine >= TERMINAL_BOOT_LOGS.length) {
      // All lines typed — show SYSTEM READY state, then auto-launch after 3.5s
      const timer = setTimeout(() => setIsComplete(true), 200);
      return () => clearTimeout(timer);
    }

    const fullLine = TERMINAL_BOOT_LOGS[currentLine];

    if (currentChar < fullLine.length) {
      const speed = fullLine[currentChar] === "." ? 20 : 5;
      const timer = setTimeout(() => {
        setLines((prev) => {
          const copy = [...prev];
          copy[currentLine] = fullLine.substring(0, currentChar + 1);
          return copy;
        });
        setCurrentChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Line complete — pause, then next
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setLines((prev) => [...prev, ""]);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Auto-launch after SYSTEM READY is shown for ~3.5 seconds
  useEffect(() => {
    if (!isComplete) return;

    const timer = setTimeout(() => {
      if (hasLaunchedRef.current) return;
      hasLaunchedRef.current = true;
      setFadeOut(true);
      setTimeout(() => {
        if (onBootComplete) onBootComplete();
      }, 700);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isComplete, onBootComplete]);

  // Skip boot immediately
  const handleSkip = () => {
    if (hasLaunchedRef.current) return;
    hasLaunchedRef.current = true;
    setFadeOut(true);
    setTimeout(() => {
      if (onBootComplete) onBootComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#050810] flex items-center justify-center transition-all duration-700 ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-4">
        {/* Terminal Window Chrome */}
        <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/5">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0e1a] border-b border-cyan-500/15">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-[11px] font-mono text-slate-500 ml-2">
              rudra@portfolio:~
            </span>
            <div className="ml-auto">
              <button
                onClick={handleSkip}
                className="text-[10px] font-mono text-slate-600 hover:text-slate-400 transition px-2 py-0.5 rounded border border-slate-800 hover:border-slate-600"
              >
                SKIP →
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="bg-[#080c16] p-5 md:p-6 font-mono text-sm md:text-[13px] min-h-[280px] max-h-[400px] overflow-y-auto"
          >
            {/* ASCII Header */}
            <pre className="text-cyan-500/60 text-[10px] md:text-xs mb-4 leading-tight select-none">
{`  ╔═══════════════════════════════════════╗
  ║   R U D R A N A R A Y A N   S A H U  ║
  ║   Software & AI Systems Engineer      ║
  ╚═══════════════════════════════════════╝`}
            </pre>

            {/* Boot Log Lines */}
            {lines.map((line, idx) => (
              <div
                key={idx}
                className={`mb-1 leading-relaxed ${
                  line.includes("OK") || line.includes("VERIFIED") || line.includes("CONFIRMED") || line.includes("LOADED")
                    ? "text-emerald-400"
                    : line.includes("SYSTEM READY")
                    ? "text-cyan-300 font-bold text-base"
                    : line.includes("LAUNCHING")
                    ? "text-cyan-300 font-bold"
                    : "text-slate-400"
                }`}
              >
                {line}
                {idx === currentLine && currentLine < TERMINAL_BOOT_LOGS.length && (
                  <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
                )}
              </div>
            ))}

            {/* Blinking cursor while typing */}
            {!isComplete && currentLine >= TERMINAL_BOOT_LOGS.length && (
              <div className="text-cyan-400">
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse align-middle" />
              </div>
            )}

            {/* SYSTEM READY state — auto-launches after 3.5s */}
            {isComplete && (
              <div className="mt-6 flex flex-col items-center gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-sm text-emerald-300 font-mono font-bold tracking-widest">
                    ALL SYSTEMS NOMINAL — LAUNCHING PORTFOLIO...
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full max-w-xs h-1 bg-slate-800 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                    style={{ animation: "bootProgress 3.5s linear forwards" }}
                  />
                </div>
                <style>{`
                  @keyframes bootProgress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                  }
                  @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                  .animate-fadeIn {
                    animation: fadeIn 0.4s ease forwards;
                  }
                `}</style>
              </div>
            )}
          </div>
        </div>

        {/* Bottom status */}
        <div className="flex justify-between items-center mt-3 px-2 text-[10px] font-mono text-slate-600">
          <span>{PERSONAL_INFO.email}</span>
          <span>v2.0.26 • {new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
}
