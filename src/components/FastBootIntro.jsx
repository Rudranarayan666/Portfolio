import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function FastBootIntro({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [statusText, setStatusText] = useState('BOOTING RUDRA_SYS v2.6...');
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    // 0ms - 500ms
    const t1 = setTimeout(() => {
      setPercent(38);
      setStatusText('MOUNTING FULL-STACK & AI AGENTS...');
    }, 350);

    // 500ms - 1000ms
    const t2 = setTimeout(() => {
      setPercent(74);
      setStatusText('SYNCHRONIZING REPOSITORIES & METRICS...');
    }, 850);

    // 1000ms - 1400ms
    const t3 = setTimeout(() => {
      setPercent(100);
      setStatusText('ALL SYSTEMS OPERATIONAL • ACCESS GRANTED');
    }, 1300);

    // 1400ms: Trigger crazy split blast-door opening
    const t4 = setTimeout(() => {
      setIsOpening(true);
    }, 1600);

    // 2100ms: Complete and unmount
    const t5 = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsOpening(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden select-none pointer-events-auto"
      title="Click anywhere to open immediately"
    >
      {/* Top Shutter Blast Door */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '-100%' : 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#fde047] border-b-[4px] border-black z-20 flex items-end justify-center pb-4 shadow-2xl"
      >
        <div className="flex items-center gap-2 font-mono text-xs font-black text-black tracking-widest uppercase opacity-70">
          <Zap className="w-4 h-4 fill-black" />
          <span>RUDRANARAYAN SAHU // PORTFOLIO BOOTLOADER</span>
          <Zap className="w-4 h-4 fill-black" />
        </div>
      </motion.div>

      {/* Bottom Shutter Blast Door */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '100%' : 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#fbf9f4] border-t-[4px] border-black z-20 flex items-start justify-center pt-4 shadow-2xl"
      >
        <div className="font-mono text-[11px] font-bold text-zinc-600 tracking-wider">
          TAP ANYWHERE OR WAIT 2 SEC TO ENTER
        </div>
      </motion.div>

      {/* Center Console Card */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.15, opacity: 0, transition: { duration: 0.25 } }}
            className="absolute inset-0 z-30 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-6 sm:p-7 rounded-2xl bg-white border-[3.5px] border-black shadow-[8px_8px_0px_0px_#000] space-y-5"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-black pb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border border-black" />
                  <span className="font-mono text-xs font-bold text-black ml-2">
                    BOOT_EXEC.sh
                  </span>
                </div>
                
                <button
                  onClick={handleSkip}
                  className="px-2 py-0.5 rounded border border-black bg-zinc-100 hover:bg-[#fde047] font-mono text-[10px] font-extrabold text-black"
                >
                  SKIP ⏭
                </button>
              </div>

              {/* Kinetic Big Counter */}
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="font-heading font-black text-5xl sm:text-6xl text-black tracking-tight leading-none">
                    {percent}%
                  </div>
                  <div className="font-mono text-[11px] font-bold text-zinc-500 mt-1 uppercase">
                    INITIALIZING KERNEL
                  </div>
                </div>

                <div className="text-right">
                  {percent === 100 ? (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2.5 py-1 rounded border-2 border-black bg-[#86efac] text-black shadow-[2px_2px_0px_0px_#000]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>READY</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2.5 py-1 rounded border-2 border-black bg-[#fde047] text-black shadow-[2px_2px_0px_0px_#000] animate-pulse">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>LOADING</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Striped Neo-Brutalist Progress Bar */}
              <div className="w-full h-4 rounded-lg border-2 border-black bg-zinc-100 p-0.5 overflow-hidden shadow-[2px_2px_0px_0px_#000]">
                <motion.div
                  className="h-full rounded bg-[#fde047] border-r border-black"
                  initial={{ width: '0%' }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>

              {/* Live Status Ticker */}
              <div className="p-2.5 rounded-lg bg-zinc-900 border-2 border-black font-mono text-[11px] font-bold text-[#fde047] flex items-center justify-between">
                <span className="truncate">{statusText}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0 ml-2" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
