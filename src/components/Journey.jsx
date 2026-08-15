import React, { useState } from 'react';
import { Briefcase, GraduationCap, Compass, Trophy, Users, ShieldAlert, Award, Star, BookOpen } from 'lucide-react';
import { EXPERIENCE, CAMPUS_LEADERSHIP, MENTORSHIP } from '../content';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience', 'leadership', 'mentorship'
  const [selectedExperience, setSelectedExperience] = useState(EXPERIENCE[0]?.id || '');
  const [selectedLeadership, setSelectedLeadership] = useState(CAMPUS_LEADERSHIP[0]?.club || '');

  const tabs = [
    { id: 'experience', label: 'Experience & Research', icon: Briefcase },
    { id: 'leadership', label: 'Campus Leadership', icon: Users },
    { id: 'mentorship', label: 'Mentorship & Impact', icon: BookOpen }
  ];

  return (
    <section id="journey" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] font-mono text-xs text-[var(--amber-light)] font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPERIENCE & INVOLVEMENT</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
              My <span className="text-amber-gradient">Journey</span>
            </h2>
          </div>

          {/* Interactive Tab Controller */}
          <div className="flex flex-wrap gap-2 p-1 rounded-2xl bg-white/5 border border-white/10 max-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all ${
                    isActive
                      ? 'bg-[var(--amber-light)] text-[var(--bg-navy)] shadow-lg'
                      : 'text-[#9aa3b2] hover:text-[#f5f3ef] hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel 1: EXPERIENCE & RESEARCH */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Vertical Interactive Connecting Nodes */}
            <div className="lg:col-span-5 space-y-4 relative pl-8 border-l border-white/10 ml-4 py-2">
              {EXPERIENCE.map((exp) => {
                const isSelected = selectedExperience === exp.id;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedExperience(exp.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start space-x-4 relative group ${
                      isSelected
                        ? 'amber-glass-card border-[var(--amber-light)]/50 bg-white/[0.06] scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    {/* Floating Node Connection Dot */}
                    <div
                      className={`absolute -left-[41px] top-7 w-4.5 h-4.5 rounded-full border-2 bg-[var(--bg-navy)] flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-[var(--amber-light)] shadow-[0_0_10px_var(--amber-light)] scale-110'
                          : 'border-white/20 group-hover:border-white/40'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[var(--amber-light)]' : 'bg-white/20'}`} />
                    </div>

                    <div className="space-y-1">
                      <div className="font-mono text-xs text-[var(--amber-light)] font-semibold">{exp.period}</div>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-[var(--amber-light)] transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-[#9aa3b2]">{exp.company}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Node Details Panel */}
            <div className="lg:col-span-7">
              {(() => {
                const exp = EXPERIENCE.find((e) => e.id === selectedExperience) || EXPERIENCE[0];
                if (!exp) return null;
                return (
                  <div className="amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 space-y-6 animate-fadeIn">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div className="space-y-1">
                        <span className="px-2.5 py-1 rounded-full font-mono text-[10px] font-bold bg-[rgba(var(--accent-blue-rgb),0.15)] text-[var(--accent-blue)] border border-[rgba(var(--accent-blue-rgb),0.25)] uppercase tracking-wider">
                          {exp.badge}
                        </span>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-2">
                          {exp.role}
                        </h3>
                        <p className="font-mono text-sm text-[var(--amber-light)] font-semibold">
                          {exp.company} &middot; <span className="text-xs font-normal text-[#9aa3b2]">{exp.location}</span>
                        </p>
                      </div>
                      <span className="font-mono text-xs text-[#9aa3b2] px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="font-mono text-xs font-bold text-[#f5f3ef]/80 uppercase tracking-wide">Key Contributions:</div>
                      <ul className="space-y-3">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="text-sm sm:text-base text-[#9aa3b2] leading-relaxed flex items-start space-x-3">
                            <span className="text-[var(--amber-light)] font-mono select-none mt-1 shrink-0">➜</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-3">
                      <div className="font-mono text-xs font-bold text-[#f5f3ef]/80 uppercase tracking-wide">Applied Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Tab Panel 2: CAMPUS LEADERSHIP */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Clubs Selector */}
            <div className="lg:col-span-5 space-y-4">
              {CAMPUS_LEADERSHIP.map((item) => {
                const isSelected = selectedLeadership === item.club;
                return (
                  <button
                    key={item.club}
                    onClick={() => setSelectedLeadership(item.club)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all flex items-start space-x-4 ${
                      isSelected
                        ? 'amber-glass-card border-[var(--amber-light)]/50 bg-white/[0.06] scale-[1.02]'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${isSelected ? 'text-[var(--amber-light)]' : 'text-[#9aa3b2]'}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-base text-white">
                        {item.club}
                      </h3>
                      <p className="font-mono text-xs text-[var(--accent-blue)]">
                        {item.roles[0]?.role} &middot; {item.roles[0]?.period}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Roles Timeline Card */}
            <div className="lg:col-span-7">
              {(() => {
                const clubData = CAMPUS_LEADERSHIP.find((c) => c.club === selectedLeadership) || CAMPUS_LEADERSHIP[0];
                if (!clubData) return null;
                return (
                  <div className="amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 space-y-6 animate-fadeIn">
                    <div className="border-b border-white/10 pb-5">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        {clubData.club}
                      </h3>
                      <p className="font-mono text-xs text-[#9aa3b2] mt-1">Campus Involvement Timeline</p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-[var(--amber-light)]/20 ml-2 space-y-6 py-2">
                      {clubData.roles.map((r, idx) => (
                        <div key={idx} className="relative group">
                          {/* Inner Timeline Bullet */}
                          <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-navy)] border-2 border-[var(--amber-light)] flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[var(--amber-light)]" />
                          </div>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-heading font-bold text-base text-white">
                                {r.role}
                              </span>
                              <span className="font-mono text-xs text-[var(--amber-light)] font-semibold px-2 py-0.5 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.15)]">
                                {r.period}
                              </span>
                            </div>
                            <p className="text-sm text-[#9aa3b2] leading-relaxed">
                              {r.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Tab Panel 3: MENTORSHIP & IMPACT */}
        {activeTab === 'mentorship' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Stat Card */}
            <div className="md:col-span-4 amber-glass-card p-6 rounded-3xl border border-[var(--amber-light)]/20 flex flex-col justify-between items-center text-center">
              <div className="p-4 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] text-[var(--amber-light)] mt-4">
                <Users className="w-10 h-10" />
              </div>
              <div className="space-y-2 my-6">
                <div className="font-mono text-4xl font-extrabold text-amber-gradient">100+</div>
                <div className="font-heading font-bold text-lg text-white">Students Mentored</div>
                <p className="text-xs text-[#9aa3b2]">Across Bootcamps & Workshops</p>
              </div>
              <span className="font-mono text-[10px] text-[#ff9d42]/90 border border-[#ff9d42]/20 px-3 py-1 rounded-full bg-white/5 mb-2">
                ACTIVE MENTOR
              </span>
            </div>

            {/* Impact Details Card */}
            <div className="md:col-span-8 amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[var(--amber-light)]">
                  <Star className="w-6 h-6" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    {MENTORSHIP.headline}
                  </span>
                </div>
                <div className="space-y-4 pt-2">
                  {MENTORSHIP.details.map((p, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-[#9aa3b2] leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs text-[#9aa3b2]">
                <div>
                  <div className="text-[var(--amber-light)] font-bold text-sm">Cyber</div>
                  <div className="mt-0.5">Labs & CTFs</div>
                </div>
                <div>
                  <div className="text-[var(--accent-blue)] font-bold text-sm">Full Stack</div>
                  <div className="mt-0.5">Web Dev</div>
                </div>
                <div>
                  <div className="text-[var(--amber-light)] font-bold text-sm">DevOps</div>
                  <div className="mt-0.5">Automations</div>
                </div>
                <div>
                  <div className="text-[var(--accent-blue)] font-bold text-sm">Gen AI</div>
                  <div className="mt-0.5">Prompt Eng.</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
