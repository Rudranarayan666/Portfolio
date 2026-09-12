import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, FileText, MessageSquare, MapPin, Code2, Trophy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { HERO_ROLES, PERSONAL_INFO } from '../content';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'CGPA', value: '9.22', badge: 'APSIT Mumbai', color: 'bg-[#fde047]' },
    { label: 'USRF Fellow', value: 'Top 1%', badge: 'Amity University', color: 'bg-[#86efac]' },
    { label: 'Hackathons', value: '3× Wins', badge: '4× Finalist', color: 'bg-[#7dd3fc]' },
    { label: 'Mentorship', value: '100+', badge: 'Students Guided', color: 'bg-[#d8b4fe]' }
  ];

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card */}
        <div className="neo-box p-6 sm:p-10 lg:p-12 mb-8 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#86efac] border-2 border-black shadow-[2px_2px_0px_0px_#000] font-mono text-xs font-bold text-black">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Open for SDE & AI/ML Opportunities</span>
              </div>

              {/* Title & Name */}
              <div className="space-y-1">
                <p className="text-zinc-600 font-mono text-sm font-semibold tracking-wide">
                  HELLO, MY NAME IS
                </p>
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-none">
                  Rudranarayan <span className="underline decoration-4 decoration-[#fde047]">Sahu</span>
                </h1>
              </div>

              {/* Simple Rotating Role */}
              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-zinc-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] font-mono text-base sm:text-lg font-bold">
                <span className="text-zinc-500 mr-2">Role:</span>
                <span className="text-black bg-[#fde047] px-2 py-0.5 rounded border border-black">
                  {HERO_ROLES[roleIndex]}
                </span>
              </div>

              {/* Simple Clean Bio */}
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium max-w-xl">
                Information Technology student at APSIT, Mumbai. I build full-stack web applications, machine learning tools, and solve real-world problems with simple, performant code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="neo-btn neo-btn-primary px-5 py-2.5 text-sm"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="neo-btn neo-btn-secondary px-5 py-2.5 text-sm font-mono"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>

                <a
                  href="#contact"
                  className="neo-btn neo-btn-secondary px-4 py-2.5 text-sm font-mono"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>

              {/* Social Links Strip */}
              <div className="flex items-center gap-3 pt-4 border-t-2 border-zinc-200">
                <span className="text-xs font-mono font-bold text-zinc-500">FIND ME:</span>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#fde047] transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4 text-black" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#7dd3fc] transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-black" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 rounded-lg bg-zinc-100 border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#fca5a5] transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4 text-black" />
                </a>
              </div>

            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative">
                {/* Photo frame with solid Neo-brutalist border and hard offset shadow */}
                <div className="w-56 h-56 sm:w-68 sm:h-68 rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_0px_#000] bg-[#fde047] overflow-hidden">
                  <img
                    src="/photo.png"
                    alt="Rudranarayan Sahu"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                      e.target.parentNode.innerHTML = '<span class="font-heading font-extrabold text-5xl">RS</span>';
                    }}
                  />
                </div>

                {/* Floating neo-badges */}
                <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  <span className="font-mono text-xs font-bold text-black">Thane / Mumbai</span>
                </div>

                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-[#86efac] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center space-x-1.5">
                  <Trophy className="w-3.5 h-3.5 text-black" />
                  <span className="font-mono text-xs font-bold text-black">CTF 1st Rank</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="neo-box neo-box-hover p-4 sm:p-5 text-center bg-white"
            >
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-zinc-700 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="mt-2">
                <span className={`inline-block font-mono text-[11px] font-bold px-2 py-0.5 rounded border border-black ${stat.color}`}>
                  {stat.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
