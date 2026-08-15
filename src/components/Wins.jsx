import React from 'react';
import { Trophy, Award, GraduationCap, Flame, Star } from 'lucide-react';
import { ACHIEVEMENTS } from '../content';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Flame: Flame,
  GraduationCap: GraduationCap
};

export default function Wins() {
  return (
    <section id="wins" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] font-mono text-xs text-[var(--amber-light)] font-semibold tracking-wider uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>MILESTONES & HONORS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            Key <span className="text-amber-gradient">Achievements</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((win, idx) => {
            const Icon = iconMap[win.icon] || Star;
            return (
              <div
                key={win.id}
                className="amber-glass-card p-6 rounded-3xl border border-[rgba(var(--amber-light-rgb),0.2)] hover:scale-[1.02] transition-transform flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[var(--amber-light)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] text-[var(--amber-light)] border border-[rgba(var(--amber-light-rgb),0.2)]">
                      {win.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white leading-snug">
                    {win.title}
                  </h3>
                  <p className="font-mono text-xs text-[var(--accent-blue)] mt-0.5">
                    {win.organization}
                  </p>
                </div>

                <p className="text-xs text-[#9aa3b2] leading-relaxed border-t border-white/5 pt-3 font-sans">
                  {win.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
