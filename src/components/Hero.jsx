import React, { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, FileText, MessageSquare, MapPin, Code2, Trophy, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { HERO_ROLES, HERO_AVAILABILITY, HERO_CIRCULAR_TEXT, PERSONAL_INFO } from '../content';

export default function Hero({ onOpenResume, isReducedMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (isReducedMotion) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  const stats = [
    { label: 'CGPA', value: '9.22' },
    { label: 'Built Projects', value: '8+' },
    { label: 'Hackathon Wins', value: '3×' },
    { label: 'Finalist Runs', value: '4×' },
    { label: 'Grad Year', value: '2027' }
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isReducedMotion || isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * -20;
    setMousePos({ x, y });
  };

  // Circular text radius — adjust to fit around image
  const CIRCLE_RADIUS = 150;
  const circumference = 2 * Math.PI * CIRCLE_RADIUS;

  return (
    <section
      className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 z-10 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Particle Background */}
      {!isReducedMotion && (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <style>{`
            @keyframes particleFloat {
              0% { transform: translateY(0) translateX(0); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
            }
            .particles-container {
              position: absolute;
              top: 0; left: 0; width: 100%; height: 100%;
              overflow: hidden;
            }
            .particle {
              position: absolute;
              bottom: -10px;
              width: 4px; height: 4px;
              background: var(--amber-light);
              border-radius: 50%;
              box-shadow: 0 0 10px var(--amber-light);
              animation: particleFloat linear infinite;
            }
          `}</style>
          <div className="particles-container">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random()
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-transform duration-200 ease-out"
           style={(!isMobile && !isReducedMotion) ? { transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`, transformStyle: 'preserve-3d' } : {}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center" style={(!isMobile && !isReducedMotion) ? { transform: 'translateZ(30px)' } : {}}>

          {/* ── Left Column: Text Content ── */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1 text-center lg:text-left">

            {/* Eyebrow Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/25 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff9d42] animate-pulse" />
              <span className="font-mono text-xs font-medium text-[#ff9d42] tracking-wide">
                Hello World, from Thane to the Cloud
              </span>
            </div>

            {/* Name */}
            <div>
              <p className="text-[#9aa3b2] text-lg font-medium tracking-wide">Hi, I'm</p>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mt-1 break-words">
                <span className="text-amber-gradient">Rudranarayan Sahu</span>
              </h1>
            </div>

            {/* Rotating Role Line */}
            <div className="min-h-10 flex flex-wrap items-center justify-center lg:justify-start">
              <span className="font-mono text-lg sm:text-2xl font-bold text-[#f5f3ef] mr-2">I am a</span>
              <span
                className={`font-mono text-lg sm:text-2xl font-bold text-[#ff9d42] border-b-2 border-[#ff9d42] pb-0.5 transition-all duration-300 ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {HERO_ROLES[roleIndex]}
              </span>
            </div>

            {/* Open-to-Work Availability Badge — prominent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 neo-card text-left mx-auto lg:mx-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold text-emerald-300 tracking-wider uppercase">
                  Available Now
                </span>
                <span className="font-sans text-xs text-emerald-400/80">
                  {HERO_AVAILABILITY}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#9aa3b2] leading-relaxed max-w-2xl">
              I build AI-driven systems and full-stack products — from AI content detectors to ML research pipelines — with rigor and a bias for shipping.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl btn-amber-gradient text-sm font-bold flex justify-center items-center space-x-2 shadow-lg"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-white/5 border border-[#ff9d42]/30 hover:border-[#ff9d42]/60 text-[#f5f3ef] hover:text-[#ff9d42] font-mono text-sm font-semibold transition-all flex justify-center items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>↓ Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#f5f3ef] font-mono text-sm font-medium transition-all flex justify-center items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Let's Talk ➤</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#6ea8fe] transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  title="Send Email"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* ── Right Column: Photo with Circular Text ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-md mx-auto">

              {/* Photo Glow Backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ff9d42]/20 via-[#f5a623]/10 to-[#6ea8fe]/20 blur-2xl -z-10 hero-photo-glow" />

              {/* Circular Text + Photo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto flex items-center justify-center">

                {/* ── Circular Rolling Text (SVG) ── */}
                {!isReducedMotion && (
                  <div className="hidden sm:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-full"
                      style={{ animation: 'spinText 18s linear infinite' }}
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                        />
                      </defs>
                      <text
                        className="fill-[#ff9d42] font-mono"
                        style={{
                          fontSize: '11px',
                          fontFamily: 'JetBrains Mono, monospace',
                          letterSpacing: '2px',
                          filter: 'drop-shadow(0 0 6px rgba(255,157,66,0.5))'
                        }}
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          {HERO_CIRCULAR_TEXT} {HERO_CIRCULAR_TEXT}
                        </textPath>
                      </text>
                    </svg>

                    <style>{`
                      @keyframes spinText {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                      }
                    `}</style>
                  </div>
                )}

                {/* Inner photo frame — stable (not rotating) */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-[3px] border-[#ff9d42]/60 shadow-2xl shadow-[#ff9d42]/20 amber-glass-card z-10">
                  <img
                    src="/photo.png"
                    alt="Rudranarayan Sahu - Software Engineer & AI Researcher"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.style.background = 'linear-gradient(to bottom, #0d1224, #090c16)';
                    }}
                  />
                </div>

                {/* Badge: Top-Left */}
                <div className="hidden sm:flex absolute top-4 left-0 px-2.5 sm:px-3 py-1.5 rounded-xl amber-glass-card border border-[#ff9d42]/40 shadow-xl items-center space-x-1.5 animate-fadeIn neo-card scale-90 sm:scale-100 origin-top-left">
                  <MapPin className="w-3.5 h-3.5 text-[#ff9d42]" />
                  <span className="font-mono text-[10px] sm:text-xs font-semibold text-white">Based in Thane</span>
                </div>

                {/* Badge: Bottom-Left */}
                <div className="hidden sm:flex absolute bottom-4 left-0 px-2.5 sm:px-3.5 py-1.5 rounded-xl amber-glass-card border border-[#6ea8fe]/40 shadow-xl items-center space-x-1.5 animate-fadeIn neo-card scale-90 sm:scale-100 origin-bottom-left">
                  <Code2 className="w-3.5 h-3.5 text-[#6ea8fe]" />
                  <span className="font-mono text-xs font-semibold text-[#6ea8fe]">&lt; Full Stack + AI /&gt;</span>
                </div>

                {/* Badge: Bottom-Right */}
                <div className="hidden sm:flex absolute bottom-4 right-0 px-2.5 sm:px-3 py-1.5 rounded-xl amber-glass-card border border-[#ff9d42]/40 shadow-xl items-center space-x-1.5 animate-fadeIn neo-card scale-90 sm:scale-100 origin-bottom-right">
                  <Trophy className="w-3.5 h-3.5 text-[#f5a623]" />
                  <span className="font-mono text-xs font-semibold text-[#ff9d42]">IEEE CTF Winner</span>
                </div>
              </div>

            </div>

            {/* Mobile Badges Row */}
            <div className="flex sm:hidden flex-wrap justify-center gap-2 mt-4 max-w-xs px-4">
              <div className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-[#ff9d42]/30 shadow-md flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-[#ff9d42]" />
                <span className="font-mono text-[10px] font-semibold text-white">Thane</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-[#6ea8fe]/30 shadow-md flex items-center space-x-1.5">
                <Code2 className="w-3 h-3 text-[#6ea8fe]" />
                <span className="font-mono text-[10px] font-semibold text-[#6ea8fe]">&lt; Full Stack + AI /&gt;</span>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-white/5 border border-[#ff9d42]/30 shadow-md flex items-center space-x-1.5">
                <Trophy className="w-3 h-3 text-[#f5a623]" />
                <span className="font-mono text-[10px] font-semibold text-[#ff9d42]">IEEE CTF Winner</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stat Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="neo-card amber-glass-card p-4 rounded-2xl text-center border border-[#ff9d42]/20 hover:border-[#ff9d42]/40 transition-all"
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
