import React from 'react';
import { Trophy, Award, GraduationCap, Flame, Star, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../content';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Flame: Flame,
  GraduationCap: GraduationCap,
  Star: Star
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((win) => {
            const Icon = iconMap[win.icon] || Star;
            const hasLinkedin = win.linkedin && win.linkedin.trim() !== '';
            const hasCertificate = win.certificate && win.certificate.trim() !== '';

            return (
              <div
                key={win.id}
                className="neo-card amber-glass-card p-6 rounded-3xl border border-[rgba(var(--amber-light-rgb),0.2)] hover:scale-[1.02] transition-transform flex flex-col justify-between space-y-4"
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

                {/* LinkedIn post link — only shown if URL is set */}
                {hasLinkedin && (
                  <a
                    href={win.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#6ea8fe]/10 border border-[#6ea8fe]/25 text-[#6ea8fe] font-mono text-[10px] font-semibold hover:bg-[#6ea8fe]/20 transition-all w-full justify-center neo-card"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    View LinkedIn Post
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                {/* Certificate link — only shown if URL is set */}
                {hasCertificate && (
                  <a
                    href={win.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#ff9d42]/10 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-[10px] font-semibold hover:bg-[#ff9d42]/20 transition-all w-full justify-center neo-card"
                  >
                    <Award className="w-3.5 h-3.5" />
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
