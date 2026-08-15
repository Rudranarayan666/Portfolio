import React from 'react';
import { Trophy, Award, Users, GraduationCap, Flame } from 'lucide-react';

const winsData = [
  {
    title: 'HackDeck 2.0 (2026)',
    badge: '1st Prize',
    subtitle: 'IEEE Cybersecurity CTF Hackathon',
    description: 'Secured 1st Place in CTF challenges & cybersecurity problem solving.',
    icon: Trophy,
    color: 'text-[#ff9d42]',
    borderColor: 'border-[#ff9d42]/30'
  },
  {
    title: '3× Winner, 4× Finalist',
    badge: 'National Scale',
    subtitle: 'National-Level Hackathon Competitions',
    description: 'Demonstrated rapid prototyping, full-stack shipping & pitch presentation skills.',
    icon: Award,
    color: 'text-[#f5a623]',
    borderColor: 'border-[#f5a623]/30'
  },
  {
    title: 'Smart India Hackathon',
    badge: 'Team Leader',
    subtitle: 'Internal Hackathon Round',
    description: 'Led cross-functional developer team to solve real-world problem statements.',
    icon: Users,
    color: 'text-[#6ea8fe]',
    borderColor: 'border-[#6ea8fe]/30'
  },
  {
    title: 'USRF 2026 Fellow',
    badge: 'Top 1% Select',
    subtitle: 'Amity University Research Program',
    description: 'Awarded research fellowship for Machine Learning & Explainable AI.',
    icon: GraduationCap,
    color: 'text-[#ff9d42]',
    borderColor: 'border-[#ff9d42]/30'
  }
];

export default function Wins() {
  return (
    <section id="wins" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>MILESTONES & HONORS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            Key <span className="text-amber-gradient">Achievements</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {winsData.map((win, idx) => {
            const Icon = win.icon;
            return (
              <div
                key={idx}
                className={`amber-glass-card p-6 rounded-3xl border ${win.borderColor} hover:scale-[1.02] transition-transform flex flex-col justify-between space-y-4`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${win.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#ff9d42]/10 text-[#ff9d42] border border-[#ff9d42]/25">
                      {win.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {win.title}
                  </h3>
                  <p className="font-mono text-xs text-[#6ea8fe] mt-0.5">
                    {win.subtitle}
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
