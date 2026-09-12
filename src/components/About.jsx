import React from 'react';
import { MapPin, GraduationCap, Award, UserCheck, Sparkles, Code2, HeartHandshake } from 'lucide-react';

export default function About() {
  const cards = [
    {
      badge: 'EDUCATION',
      title: 'B.E. Information Technology',
      subtitle: 'A.P. Shah Institute of Technology, Thane',
      meta: '2023 – 2027 • CGPA: 9.22 / 10.0',
      icon: GraduationCap,
      bg: 'bg-[#fde047]'
    },
    {
      badge: 'CURRENT RESEARCH',
      title: 'USRF 2026 Fellow',
      subtitle: 'Amity University, Centre for AI',
      meta: 'Selected in Top 1% Nationwide',
      icon: Award,
      bg: 'bg-[#86efac]'
    },
    {
      badge: 'LOCATION',
      title: 'Mumbai / Thane, India',
      subtitle: 'Available for Remote & On-site roles',
      meta: 'Open to relocate if needed',
      icon: MapPin,
      bg: 'bg-[#7dd3fc]'
    }
  ];

  return (
    <section id="about" className="py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <div className="neo-badge bg-[#fde047] text-black">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
            About <span className="underline decoration-4 decoration-[#86efac]">Me</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Simple Story */}
          <div className="lg:col-span-7 neo-box p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-black font-mono text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4 text-black" />
                <span>Background & Philosophy</span>
              </div>
              
              <p className="text-zinc-800 text-base sm:text-lg leading-relaxed font-medium">
                I am an Information Technology student at APSIT with a strong focus on building practical software and dependable machine learning systems.
              </p>
              
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                My work spans scalable web backends, responsive React frontends, and AI pipelines. I enjoy turning complex data into clear, self-explanatory interfaces. As a USRF Research Fellow, I focus on machine learning explainability and honest evaluation baselines.
              </p>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Beyond my own projects, I actively give back: mentoring 100+ students through hands-on technical workshops, leading campus clubs, and winning national cybersecurity hackathons.
              </p>
            </div>

            {/* 3 Simple Pillars */}
            <div className="pt-4 border-t-2 border-black grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-zinc-100 border-2 border-black">
                <div className="font-heading font-bold text-xs sm:text-sm text-black">Full-Stack</div>
                <div className="text-[11px] font-mono text-zinc-600">React & APIs</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-100 border-2 border-black">
                <div className="font-heading font-bold text-xs sm:text-sm text-black">AI & ML</div>
                <div className="text-[11px] font-mono text-zinc-600">Ensembles & XAI</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-100 border-2 border-black">
                <div className="font-heading font-bold text-xs sm:text-sm text-black">Community</div>
                <div className="text-[11px] font-mono text-zinc-600">100+ Guided</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="neo-box neo-box-hover p-5 bg-white flex items-start space-x-4"
                >
                  <div className={`p-3 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] ${card.bg} shrink-0`}>
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[11px] font-extrabold text-zinc-600 tracking-wider">
                      {card.badge}
                    </span>
                    <h3 className="font-heading font-bold text-base text-black">
                      {card.title}
                    </h3>
                    <p className="text-xs text-zinc-700 font-medium">
                      {card.subtitle}
                    </p>
                    <p className="text-[11px] font-mono font-bold text-zinc-500 pt-1">
                      {card.meta}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
