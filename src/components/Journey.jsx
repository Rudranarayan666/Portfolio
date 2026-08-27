import React, { useState } from 'react';
import { Briefcase, GraduationCap, Compass, Trophy, Users, ShieldAlert, Award, Star, BookOpen, ExternalLink, FileText } from 'lucide-react';
import { EXPERIENCE, CAMPUS_LEADERSHIP, MENTORSHIP } from '../content';

export default function Journey() {
  const [selectedExperience, setSelectedExperience] = useState(EXPERIENCE[0]?.id || '');
  const [selectedLeadership, setSelectedLeadership] = useState(CAMPUS_LEADERSHIP[0]?.club || '');

  return (
    <div className="space-y-24">

    {/* ─────────────────── EXPERIENCE & RESEARCH ─────────────────── */}
    <section id="experience" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] font-mono text-xs text-[var(--amber-light)] font-semibold tracking-wider uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              <span>PROFESSIONAL TIMELINE</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
              Experience & <span className="text-amber-gradient">Research</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Node List */}
          <div className="lg:col-span-5 space-y-4 relative pl-8 border-l border-white/10 ml-4 py-2">
            {EXPERIENCE.map((exp) => {
              const isSelected = selectedExperience === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start space-x-4 relative group neo-card ${
                    isSelected
                      ? 'amber-glass-card border-[var(--amber-light)]/50 bg-white/[0.06] scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                  }`}
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[41px] top-7 w-4 h-4 rounded-full border-2 bg-[var(--bg-navy)] flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-[var(--amber-light)] shadow-[0_0_10px_var(--amber-light)] scale-110'
                        : 'border-white/20 group-hover:border-white/40'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[var(--amber-light)]' : 'bg-white/20'}`} />
                  </div>

                  <div className="space-y-1 w-full">
                    <div className="font-mono text-xs text-[var(--amber-light)] font-semibold">{exp.period}</div>
                    <h3 className="font-heading font-bold text-base text-white group-hover:text-[var(--amber-light)] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-[#9aa3b2]">{exp.company}</p>
                    {/* Certificate chip on node */}
                    {exp.certificate && (
                      <div className="inline-flex items-center gap-1 mt-1">
                        <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          ✓ Certificate Available
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detail Panel */}
          <div className="lg:col-span-7">
            {(() => {
              const exp = EXPERIENCE.find((e) => e.id === selectedExperience) || EXPERIENCE[0];
              if (!exp) return null;
              return (
                <div className="neo-card amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 space-y-6 animate-fadeIn">
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

                  {/* Action Links: LinkedIn post + Certificate */}
                  {(exp.linkedin || exp.certificate) && (
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                      {exp.linkedin && (
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6ea8fe]/10 border border-[#6ea8fe]/30 text-[#6ea8fe] font-mono text-xs font-semibold hover:bg-[#6ea8fe]/20 transition-all neo-card"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                          View LinkedIn Post
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {exp.certificate && (
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold hover:bg-emerald-500/20 transition-all neo-card"
                        >
                          <FileText className="w-4 h-4" />
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>

    {/* ─────────────────── CAMPUS LEADERSHIP ─────────────────── */}
    <section id="leadership" className="py-10 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--accent-blue-rgb),0.1)] border border-[rgba(var(--accent-blue-rgb),0.2)] font-mono text-xs text-[var(--accent-blue)] font-semibold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>COMMUNITY</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
              Campus <span className="text-blue-gradient">Leadership</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Club Selector */}
          <div className="lg:col-span-5 space-y-4">
            {CAMPUS_LEADERSHIP.map((item) => {
              const isSelected = selectedLeadership === item.club;
              return (
                <button
                  key={item.club}
                  onClick={() => setSelectedLeadership(item.club)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all flex items-start space-x-4 neo-card ${
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
                    {/* LinkedIn buttons — renders all linkedinPosts, fallback to single linkedin */}
                    {(item.linkedinPosts?.length > 0 || item.linkedin) && (
                      <div className="flex flex-wrap gap-2 shrink-0">
                        {(item.linkedinPosts && item.linkedinPosts.length > 0
                          ? item.linkedinPosts
                          : [{ label: 'View Activity', url: item.linkedin }]
                        ).map((post, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-mono text-[#6ea8fe] mt-1 bg-[#6ea8fe]/10 border border-[#6ea8fe]/20 px-2 py-0.5 rounded-full">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                            </svg>
                            {post.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Roles Timeline */}
          <div className="lg:col-span-7">
            {(() => {
              const clubData = CAMPUS_LEADERSHIP.find((c) => c.club === selectedLeadership) || CAMPUS_LEADERSHIP[0];
              if (!clubData) return null;
              return (
                <div className="neo-card amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 space-y-6 animate-fadeIn">
                  <div className="border-b border-white/10 pb-5 flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        {clubData.club}
                      </h3>
                      <p className="font-mono text-xs text-[#9aa3b2] mt-1">Campus Involvement Timeline</p>
                    </div>
                    {/* LinkedIn buttons — renders all posts from linkedinPosts, fallback to single linkedin */}
                    {(clubData.linkedinPosts?.length > 0 || clubData.linkedin) && (
                      <div className="flex flex-wrap gap-2 shrink-0">
                        {(clubData.linkedinPosts && clubData.linkedinPosts.length > 0
                          ? clubData.linkedinPosts
                          : [{ label: 'LinkedIn', url: clubData.linkedin }]
                        ).map((post, idx) => (
                          <a
                            key={idx}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#6ea8fe]/10 border border-[#6ea8fe]/30 text-[#6ea8fe] font-mono text-xs font-semibold hover:bg-[#6ea8fe]/20 transition-all neo-card"
                          >
                            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.77z"/>
                            </svg>
                            {post.label}
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative pl-6 border-l-2 border-[var(--amber-light)]/20 ml-2 space-y-6 py-2">
                    {clubData.roles.map((r, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-navy)] border-2 border-[var(--amber-light)] flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[var(--amber-light)]" />
                        </div>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="font-heading font-bold text-base text-white">{r.role}</span>
                            <span className="font-mono text-xs text-[var(--amber-light)] font-semibold px-2 py-0.5 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.15)]">
                              {r.period}
                            </span>
                          </div>
                          <p className="text-sm text-[#9aa3b2] leading-relaxed">{r.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>

    {/* ─────────────────── MENTORSHIP & IMPACT ─────────────────── */}
    <section id="mentorship" className="py-10 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] font-mono text-xs text-[#f5a623] font-semibold tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>GIVING BACK</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
              Mentorship & <span className="text-orange-gradient">Impact</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Stat Card */}
          <div className="md:col-span-4 neo-card amber-glass-card p-6 rounded-3xl border border-[var(--amber-light)]/20 flex flex-col justify-between items-center text-center">
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

          {/* Impact Details */}
          <div className="md:col-span-8 neo-card amber-glass-card p-6 sm:p-8 rounded-3xl border border-[var(--amber-light)]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[var(--amber-light)]">
                <Star className="w-6 h-6" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  {MENTORSHIP.headline}
                </span>
              </div>
              <div className="space-y-4 pt-2">
                {MENTORSHIP.details.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-[#9aa3b2] leading-relaxed font-sans">{p}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              {/* Mentorship topic tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs text-[#9aa3b2]">
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

              {/* LinkedIn posts from mentorship activities */}
              {MENTORSHIP.linkedinPosts && MENTORSHIP.linkedinPosts.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {MENTORSHIP.linkedinPosts.map((post, idx) => (
                    <a
                      key={idx}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#6ea8fe]/10 border border-[#6ea8fe]/30 text-[#6ea8fe] font-mono text-xs font-semibold hover:bg-[#6ea8fe]/20 transition-all neo-card"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      {post.label}
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
