import React from 'react';
import { Cpu, Code2, Server, Cloud, Award } from 'lucide-react';

const stackCategories = [
  {
    title: 'Core Computer Science',
    icon: Code2,
    color: 'text-[#ff9d42]',
    pills: ['Python ⭐⭐⭐⭐⭐', 'DSA', 'OOP', 'SQL + DBMS', 'Git/GitHub', 'Linux', 'Computer Networks', 'OS basics']
  },
  {
    title: 'AI/ML & Data Science',
    icon: Cpu,
    color: 'text-[#f5a623]',
    pills: [
      'NumPy + Pandas', 'EDA + Data Preprocessing', 'Scikit-learn', 'Statistics',
      'ML Algorithms', 'Feature Engineering', 'Model Evaluation', 'TensorFlow/PyTorch',
      'Deep Learning', 'XAI / SHAP', 'GenAI', 'LLMs', 'RAG', 'AI Agents'
    ]
  },
  {
    title: 'Software Engineering',
    icon: Server,
    color: 'text-[#6ea8fe]',
    pills: ['Django / FastAPI', 'REST APIs', 'React basics', 'PostgreSQL/MySQL', 'Authentication', 'Testing', 'Docker']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-[#ff9d42]',
    pills: ['Linux commands', 'Docker', 'CI/CD', 'GitHub Actions', 'AWS', 'Kubernetes']
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(var(--amber-light-rgb),0.1)] border border-[rgba(var(--amber-light-rgb),0.2)] font-mono text-xs text-[var(--amber-light)] font-semibold tracking-wider uppercase">
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
                className="amber-glass-card p-6 rounded-3xl border border-[rgba(var(--amber-light-rgb),0.2)] hover:border-[rgba(var(--amber-light-rgb),0.35)] transition-all space-y-4"
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
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-[rgba(var(--amber-light-rgb),0.1)] border border-white/10 hover:border-[rgba(var(--amber-light-rgb),0.3)] text-[#f5f3ef] hover:text-[var(--amber-light)] font-mono text-xs sm:text-sm font-semibold transition-all shadow-sm"
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
