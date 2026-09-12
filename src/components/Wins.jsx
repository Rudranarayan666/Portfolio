import React from 'react';
import { Trophy, Award, GraduationCap, Flame, Star, ExternalLink, FileText } from 'lucide-react';
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
    <section id="wins" className="py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <div className="neo-badge bg-[#fde047] text-black">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & MILESTONES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
            Key <span className="underline decoration-4 decoration-[#86efac]">Achievements</span>
          </h2>
          <p className="text-zinc-600 text-sm font-medium">
            Competitive hackathons, research fellowships, and recognition.
          </p>
        </div>

        {/* Grid of Wins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((win) => {
            const Icon = iconMap[win.icon] || Award;
            const hasLinkedin = win.linkedin && win.linkedin.trim() !== '';
            const hasCertificate = win.certificate && win.certificate.trim() !== '';

            return (
              <div
                key={win.id}
                className="neo-box neo-box-hover p-6 bg-white flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl border-2 border-black bg-[#fde047] shadow-[2px_2px_0px_0px_#000]">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-black bg-zinc-100">
                      {win.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-black leading-snug">
                      {win.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-zinc-600 mt-0.5">
                      {win.organization}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                    {win.description}
                  </p>
                </div>

                {/* Proof buttons */}
                <div className="pt-3 border-t-2 border-zinc-100 flex flex-wrap gap-2">
                  {hasCertificate && (
                    <a
                      href={win.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn px-2.5 py-1 bg-[#86efac] text-xs font-mono"
                    >
                      <FileText className="w-3 h-3" />
                      <span>Certificate</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}

                  {hasLinkedin && (
                    <a
                      href={win.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn px-2.5 py-1 bg-[#7dd3fc] text-xs font-mono"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
