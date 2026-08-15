import React from 'react';
import { Cpu, Code2, Server, Database, Cloud, Award } from 'lucide-react';

const stackCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-[#ff9d42]',
    pills: ['C++', 'Java', 'JavaScript', 'Python', 'Apex', 'C# (.NET)']
  },
  {
    title: 'Frameworks & Full Stack',
    icon: Server,
    color: 'text-[#6ea8fe]',
    pills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'FastAPI', 'REST APIs']
  },
  {
    title: 'Data & Machine Learning',
    icon: Cpu,
    color: 'text-[#f5a623]',
    pills: ['Power BI', 'Advanced Excel', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistical Modeling']
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    color: 'text-[#ff9d42]',
    pills: ['SQL', 'MySQL', 'MongoDB', 'Firebase', 'Vercel', 'Git', 'GitHub', 'Docker', 'Agile', 'Scrum', 'Microservices']
  },
  {
    title: 'Certifications',
    icon: Award,
    color: 'text-[#6ea8fe]',
    pills: [
      'IBM · Data Analysis with Python',
      'Celonis · Process Mining Fundamentals',
      'IBM · Prompt Engineering for Everyone'
    ]
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>MY TOOLKIT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            Tech <span className="text-amber-gradient">Stack</span>
          </h2>
        </div>

        {/* Categorized Pill Groups */}
        <div className="space-y-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="amber-glass-card p-6 rounded-3xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/35 transition-all space-y-4"
              >
                <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
                  <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.pills.map((pill, pillIdx) => (
                    <span
                      key={pillIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-[#ff9d42]/10 border border-white/10 hover:border-[#ff9d42]/30 text-[#f5f3ef] hover:text-[#ff9d42] font-mono text-xs sm:text-sm font-medium transition-all shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
