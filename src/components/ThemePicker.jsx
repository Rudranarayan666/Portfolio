import React, { useState } from 'react';
import { Palette, Check, X } from 'lucide-react';

const themes = [
  {
    id: 'amber-navy',
    name: 'Kesari Punjab',
    preview: ['#ff9d42', '#f5a623', '#6ea8fe']
  },
  {
    id: 'royal-blue',
    name: 'Royal Blue',
    preview: ['#3b82f6', '#1d4ed8', '#60a5fa']
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    preview: ['#ec4899', '#a855f7', '#22d3ee']
  },
  {
    id: 'emerald-matrix',
    name: 'Emerald Matrix',
    preview: ['#10b981', '#059669', '#34d399']
  },
  {
    id: 'royal-amethyst',
    name: 'Royal Amethyst',
    preview: ['#d946ef', '#8b5cf6', '#c084fc']
  }
];

export default function ThemePicker({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full btn-amber-gradient shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all group"
        title="Choose Theme Color"
        aria-label="Toggle Color Theme Selector"
      >
        <Palette className="w-6 h-6 text-[var(--bg-navy)]" />
      </button>

      {/* Theme Picker Drawer / Popover Card */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-64 p-5 rounded-3xl border border-[var(--amber-light)]/20 bg-[rgba(9,12,22,0.92)] backdrop-blur-xl shadow-2xl space-y-4 animate-fadeIn text-[#f5f3ef]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Color Theme
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#9aa3b2] hover:text-[var(--amber-light)] transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {themes.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all text-left ${
                    isActive
                      ? 'amber-glass-card border-[var(--amber-light)]/50 bg-white/[0.06]'
                      : 'bg-white/5 border-white/5 hover:border-white/15 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {/* Circle Swatch Preview */}
                    <div className="flex -space-x-1">
                      {theme.preview.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-[#090c16] shadow-sm shrink-0"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-xs font-semibold text-white tracking-wide">
                      {theme.name}
                    </span>
                  </div>

                  {isActive && <Check className="w-4 h-4 text-[var(--amber-light)] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
