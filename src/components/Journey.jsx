import React from 'react';
import { Briefcase, GraduationCap, Calendar, Compass } from 'lucide-react';

const timelineData = [
  {
    role: 'USRF Research Fellow',
    org: 'Amity Centre for Artificial Intelligence, Amity University',
    period: '2026–Ongoing',
    type: 'Research',
    description: 'Top 1% of applicants. Research on ensemble ML models, explainability (SHAP, permutation importance), and leakage-controlled benchmarking.',
    icon: Briefcase,
    accent: 'border-[#ff9d42]',
    tagColor: 'bg-[#ff9d42]/10 text-[#ff9d42] border-[#ff9d42]/30'
  },
  {
    role: 'Software Developer Intern (Hybrid)',
    org: 'IPLIT Solutions LLP',
    period: 'Jun 2025–Feb 2026',
    type: 'Industry',
    description: 'Automated Odoo workflows improving backend efficiency; built healthcare backend modules using Python, Java, AngularJS.',
    icon: Briefcase,
    accent: 'border-[#f5a623]',
    tagColor: 'bg-[#f5a623]/10 text-[#f5a623] border-[#f5a623]/30'
  },
  {
    role: 'Backend Developer Intern',
    org: '1Stop.ai',
    period: 'May–Jun 2025',
    type: 'Industry',
    description: 'Built and optimized REST APIs using PHP and MySQL, improving data processing efficiency.',
    icon: Briefcase,
    accent: 'border-[#6ea8fe]',
    tagColor: 'bg-[#6ea8fe]/10 text-[#6ea8fe] border-[#6ea8fe]/30'
  },
  {
    role: 'B.E. Information Technology',
    org: 'A.P. Shah Institute of Technology (APSIT), Thane',
    period: '2023–2027 (Expected)',
    type: 'Education',
    description: 'CGPA 9.22. Focus on full-stack development, AI-driven systems, and cybersecurity.',
    icon: GraduationCap,
    accent: 'border-[#ff9d42]',
    tagColor: 'bg-[#ff9d42]/10 text-[#ff9d42] border-[#ff9d42]/30'
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>EXPERIENCE & EDUCATION</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            My <span className="text-amber-gradient">Journey</span>
          </h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l-2 border-gradient-to-b from-[#ff9d42] via-[#f5a623] to-[#6ea8fe] ml-4 sm:ml-8 md:ml-32 space-y-12 pl-6 sm:pl-10">
          
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090c16] border-2 border-[#ff9d42] flex items-center justify-center shadow-[0_0_12px_rgba(255,157,66,0.5)] group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#ff9d42]" />
                </div>

                {/* Left Timestamp for Desktop view */}
                <div className="hidden md:block absolute -left-36 top-1 font-mono text-xs font-semibold text-[#ff9d42] w-24 text-right">
                  {item.period}
                </div>

                {/* Main Card Content */}
                <div className="amber-glass-card p-6 rounded-2xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/40 transition-all space-y-3">
                  
                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#ff9d42]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-white">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs text-[#9aa3b2]">
                          {item.org}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`px-2.5 py-1 rounded-full font-mono text-xs border ${item.tagColor}`}>
                        {item.type}
                      </span>
                      <span className="md:hidden inline-flex items-center font-mono text-xs text-[#ff9d42]">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9aa3b2] leading-relaxed pt-2 border-t border-white/5 font-sans">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
