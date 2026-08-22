import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, FileText, MessageSquare, MapPin, Code2, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Spline from '@splinetool/react-spline';

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI/ML Researcher',
  'USRF Research Fellow'
];

export default function Hero({ onOpenResume, isReducedMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (isReducedMotion) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  const stats = [
    { label: 'CGPA', value: '9.22' },
    { label: 'Shipped Projects', value: '3+' },
    { label: 'Hackathon Wins', value: '3×' },
    { label: 'Finalist Runs', value: '4×' },
    { label: 'Grad Year', value: '2027' }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 z-10 overflow-hidden">
      
      {/* Spline 3D Background */}
      {!isReducedMotion && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen scale-150 transform-gpu translate-y-10">
          <Spline scene="https://prod.spline.design/6cd11a6f-3224-4f6a-9058-2fbcd96f53bd/scene.splinecode" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Left Column (Text Content) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff9d42] animate-pulse" />
              <span className="font-mono text-xs font-medium text-[#ff9d42] tracking-wide">
                Hello World, from Thane to the Cloud
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <p className="text-[#9aa3b2] text-lg font-medium tracking-wide">Hi, I'm</p>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mt-1">
                <span className="text-amber-gradient">Rudranarayan Sahu</span>
              </h1>
            </div>

            {/* Rotating Role Line */}
            <div className="h-10 flex items-center">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#f5f3ef] mr-2">I am a</span>
              <span
                className={`font-mono text-xl sm:text-2xl font-bold text-[#ff9d42] border-b-2 border-[#ff9d42] pb-0.5 transition-all duration-300 ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {roles[roleIndex]}
              </span>
            </div>

            {/* Bio One-Liner */}
            <p className="text-base sm:text-lg text-[#9aa3b2] leading-relaxed max-w-2xl">
              I build AI-driven systems and full-stack products — from AI content detectors to ML research pipelines — with rigor and a bias for shipping.
            </p>

            {/* CTA Button Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl btn-amber-gradient text-sm font-bold flex items-center space-x-2 shadow-lg"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-white/5 border border-[#ff9d42]/30 hover:border-[#ff9d42]/60 text-[#f5f3ef] hover:text-[#ff9d42] font-mono text-sm font-semibold transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>↓ Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#f5f3ef] font-mono text-sm font-medium transition-all flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Talk ➤</span>
              </a>
            </div>

            {/* Social Links & Open Status Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                {/* GitHub Profile Link */}
                <a
                  href="https://github.com/Rudranarayan666"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href="https://www.linkedin.com/in/rudranarayan-sahu-42017a368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#6ea8fe] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                {/* Email Direct Link */}
                <a
                  href="mailto:rudrasahu797@gmail.com"
                  title="Send Email"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-xs font-semibold text-emerald-300">
                  Open to SDE / AI-ML Internships
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Photo Panel with Floating Badges */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Photo Glow Backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ff9d42]/20 via-[#f5a623]/10 to-[#6ea8fe]/20 blur-2xl -z-10 hero-photo-glow" />

              {/* Main Photo Card with Swirling Animation */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div 
                  className="absolute inset-0 rounded-full overflow-hidden amber-glass-card p-2 border-[3px] border-dashed border-[#ff9d42]/60 shadow-2xl shadow-[#ff9d42]/20"
                  style={{
                    animation: isReducedMotion ? 'none' : 'swirl 15s linear infinite'
                  }}
                >
                  <style>{`
                    @keyframes swirl {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    .counter-swirl {
                      animation: counter-swirl 15s linear infinite;
                    }
                    @keyframes counter-swirl {
                      0% { transform: rotate(0deg) scale(1.05); }
                      100% { transform: rotate(-360deg) scale(1.05); }
                    }
                  `}</style>
                  <div className={isReducedMotion ? "w-full h-full rounded-full overflow-hidden" : "counter-swirl w-full h-full rounded-full overflow-hidden"}>
                    <img
                      src="/photo.png"
                      alt="Rudranarayan Sahu - Software Engineer & AI Researcher"
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 rounded-full"
                      onError={(e) => {
                        // Fallback avatar background if photo load fails
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gradient-to-b', 'from-[#0d1224]', 'to-[#090c16]', 'flex', 'items-center', 'justify-center', 'h-full');
                      }}
                    />
                  </div>
                </div>

              {/* Overlapping Badge 1: Top-Left */}
                <div className="absolute top-6 left-4 px-3 py-1.5 rounded-xl amber-glass-card border border-[#ff9d42]/40 shadow-xl flex items-center space-x-1.5 animate-fadeIn">
                  <MapPin className="w-3.5 h-3.5 text-[#ff9d42]" />
                  <span className="font-mono text-xs font-semibold text-white">Based in Thane</span>
                </div>

                {/* Overlapping Badge 2: Bottom-Left */}
                <div className="absolute bottom-6 left-4 px-3.5 py-1.5 rounded-xl amber-glass-card border border-[#6ea8fe]/40 shadow-xl flex items-center space-x-1.5 animate-fadeIn">
                  <Code2 className="w-3.5 h-3.5 text-[#6ea8fe]" />
                  <span className="font-mono text-xs font-semibold text-[#6ea8fe]">&lt; Full Stack + AI /&gt;</span>
                </div>

                {/* Overlapping Badge 3: Bottom-Right */}
                <div className="absolute bottom-6 right-4 px-3 py-1.5 rounded-xl amber-glass-card border border-[#ff9d42]/40 shadow-xl flex items-center space-x-1.5 animate-fadeIn">
                  <Trophy className="w-3.5 h-3.5 text-[#f5a623]" />
                  <span className="font-mono text-xs font-semibold text-[#ff9d42]">IEEE CTF Winner</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stat Strip (5 Stats, Monospace Numbers) */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="amber-glass-card p-4 rounded-2xl text-center border border-[#ff9d42]/20 hover:border-[#ff9d42]/40 transition-all"
            >
              <div className="font-mono font-extrabold text-2xl sm:text-3xl text-amber-gradient">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[#9aa3b2] mt-1 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
