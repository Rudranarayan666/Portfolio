import React from 'react';
import { MapPin, GraduationCap, Award, UserCheck, Sparkles } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      label: 'BASED IN',
      title: 'Thane, Maharashtra, India',
      subtitle: 'Available for Remote & On-site Internships and job related Roles',
      icon: MapPin,
      color: 'text-[#ff9d42]',
      border: 'border-[#ff9d42]/30'
    },
    {
      label: 'STUDYING',
      title: 'B.E. Information Technology, APSIT',
      subtitle: 'CGPA 9.22 · 2023–2027 Batch',
      icon: GraduationCap,
      color: 'text-[#6ea8fe]',
      border: 'border-[#6ea8fe]/30'
    },
    {
      label: 'CURRENTLY',
      title: 'USRF 2026 Research Fellow',
      subtitle: 'Amity University (Selected in Top 1%)',
      icon: Award,
      color: 'text-[#f5a623]',
      border: 'border-[#f5a623]/30'
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            About <span className="text-amber-gradient">Me</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Detailed Bio Paragraph */}
          <div className="lg:col-span-7 amber-glass-card p-6 sm:p-8 rounded-3xl border border-[#ff9d42]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#ff9d42] mb-2">
                <UserCheck className="w-6 h-6" />
                <span className="font-mono text-sm font-semibold tracking-wide uppercase text-white">
                  Engineering & Research Mindset
                </span>
              </div>
              <p className="text-[#f5f3ef]/90 text-base sm:text-lg leading-relaxed font-sans">
                Software Engineering student with experience in full-stack development, AI-driven systems, and cybersecurity. Built scalable applications using Python, React.js, Node.js, and FastAPI — with strong problem-solving skills sharpened across hackathons and leadership roles.
              </p>
              <p className="text-[#9aa3b2] text-base leading-relaxed font-sans">
                Mentored 100+ students and led hackathon teams while making production-level projects. Currently deepening research skills as a USRF Research Fellow focused on machine learning explainability and robust benchmark pipelines.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center font-mono text-xs text-[#9aa3b2]">
              <div>
                <div className="text-[#ff9d42] font-bold text-sm">Full-Stack</div>
                <div className="mt-0.5">Scalable Architecture</div>
              </div>
              <div>
                <div className="text-[#6ea8fe] font-bold text-sm">AI / ML</div>
                <div className="mt-0.5">Ensembles & SHAP</div>
              </div>
              <div>
                <div className="text-[#f5a623] font-bold text-sm">Leadership</div>
                <div className="mt-0.5">100+ Mentored</div>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Info Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`amber-glass-card p-5 rounded-2xl border ${card.border} flex items-start space-x-4 hover:scale-[1.01] transition-transform`}
                >
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="font-mono text-xs font-semibold text-[#9aa3b2] tracking-wider">
                      {card.label}
                    </div>
                    <div className="font-heading font-bold text-base text-[#f5f3ef]">
                      {card.title}
                    </div>
                    <div className="font-mono text-xs text-[#ff9d42]/90">
                      {card.subtitle}
                    </div>
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
