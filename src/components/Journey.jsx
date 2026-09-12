import React, { useState } from 'react';
import { Briefcase, Users, ExternalLink, FileText } from 'lucide-react';
import { EXPERIENCE, CAMPUS_LEADERSHIP, MENTORSHIP } from '../content';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-12 sm:py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header & Tab Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1">
            <div className="neo-badge bg-[#7dd3fc] text-black">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER & LEADERSHIP</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-black">
              Experience & <span className="underline decoration-4 decoration-[#fde047]">Activities</span>
            </h2>
          </div>

          {/* Simple Responsive Tab Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-1 rounded-xl border-2 border-black shadow-[2.5px_2.5px_0px_0px_#000] w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 sm:flex-none min-h-[40px] px-3 sm:px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                activeTab === 'experience'
                  ? 'bg-[#fde047] text-black border border-black shadow-[1px_1px_0px_0px_#000]'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`flex-1 sm:flex-none min-h-[40px] px-3 sm:px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all ${
                activeTab === 'leadership'
                  ? 'bg-[#fde047] text-black border border-black shadow-[1px_1px_0px_0px_#000]'
                  : 'text-zinc-600 hover:text-black'
              }`}
            >
              Leadership & Impact
            </button>
          </div>
        </div>

        {/* Tab 1: Experience & Research */}
        {activeTab === 'experience' && (
          <div className="space-y-4 sm:space-y-6">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="neo-box p-4 sm:p-7 bg-white hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-zinc-100 pb-3 sm:pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-black">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded border border-black bg-[#fde047]">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-zinc-700 mt-0.5">
                      {exp.company} • <span className="text-zinc-500 font-normal">{exp.location}</span>
                    </p>
                  </div>

                  <span className="font-mono text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-lg border-2 border-black bg-zinc-50 shadow-[1.5px_1.5px_0px_0px_#000] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-black font-bold mt-0.5 select-none shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech & Links */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tool, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded bg-zinc-100 border border-black text-black"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {exp.certificate && (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn min-h-[38px] px-3 py-1 bg-[#86efac] text-xs font-mono"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {exp.linkedin && (
                      <a
                        href={exp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neo-btn min-h-[38px] px-3 py-1 bg-[#7dd3fc] text-xs font-mono"
                      >
                        <span>LinkedIn Post</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Leadership & Mentorship */}
        {activeTab === 'leadership' && (
          <div className="space-y-4 sm:space-y-6">
            
            {/* Mentorship Highlight Banner */}
            <div className="neo-box p-5 sm:p-6 bg-[#fde047] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="font-mono text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-black">
                  COMMUNITY IMPACT
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-black">
                  {MENTORSHIP.headline}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-900 font-medium max-w-xl">
                  {MENTORSHIP.details[0]}
                </p>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border-2 border-black shadow-[2.5px_2.5px_0px_0px_#000] text-center shrink-0 min-w-[130px]">
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-black">100+</div>
                <div className="font-mono text-[11px] font-bold text-zinc-600">Students Mentored</div>
              </div>
            </div>

            {/* Clubs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {CAMPUS_LEADERSHIP.map((club, idx) => (
                <div
                  key={idx}
                  className="neo-box p-5 sm:p-6 bg-white space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2 border-b-2 border-zinc-100 pb-3">
                      <div>
                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 border border-black uppercase">
                          STUDENT ORG
                        </span>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-black mt-1">
                          {club.club}
                        </h3>
                      </div>
                      <Users className="w-5 h-5 text-black shrink-0" />
                    </div>

                    {/* Roles Timeline */}
                    <div className="space-y-3 pt-1">
                      {club.roles.map((r, rIdx) => (
                        <div key={rIdx} className="space-y-0.5">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="font-bold text-black">{r.role}</span>
                            <span className="text-zinc-500 font-medium">{r.period}</span>
                          </div>
                          <p className="text-xs text-zinc-600">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn Activity Link */}
                  {(club.linkedinPosts?.length > 0 || club.linkedin) && (
                    <div className="pt-3 border-t-2 border-zinc-100 flex flex-wrap gap-2">
                      {(club.linkedinPosts && club.linkedinPosts.length > 0
                        ? club.linkedinPosts
                        : [{ label: 'View Post', url: club.linkedin }]
                      ).map((post, pIdx) => (
                        <a
                          key={pIdx}
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neo-btn min-h-[36px] px-2.5 py-1 bg-zinc-100 hover:bg-[#7dd3fc] text-[11px] font-mono"
                        >
                          <span>{post.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
