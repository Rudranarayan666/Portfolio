import React from 'react';
import { Cpu, Code2, Server, Cloud, Award } from 'lucide-react';

const stackCategories = [
  {
    title: 'Core Computer Science',
    icon: Code2,
    badgeBg: 'bg-[#fde047]',
    pills: ['Python', 'Data Structures & Algorithms', 'Java', '.NET & C#', 'OOP', 'SQL & Relational DBs', 'Git & GitHub', 'Linux', 'Operating Systems', 'Computer Networks']
  },
  {
    title: 'AI / Machine Learning & Data',
    icon: Cpu,
    badgeBg: 'bg-[#86efac]',
    pills: ['PyTorch', 'Scikit-Learn', 'DuckDB', 'Pandas & NumPy', 'LangChain', 'Agentic AI & MCP', 'XAI / SHAP', 'OpenCV', 'Generative AI', 'Vector Databases', 'Claude Code']
  },
  {
    title: 'Full-Stack Development',
    icon: Server,
    badgeBg: 'bg-[#7dd3fc]',
    pills: ['React.js', 'Next.js', 'FastAPI', 'Node.js & Express', 'MongoDB', 'MySQL', 'RESTful APIs', 'Authentication (JWT/OAuth)', 'HTML5 & Tailwind CSS']
  },
  {
    title: 'DevOps, Cloud & Tools',
    icon: Cloud,
    badgeBg: 'bg-[#d8b4fe]',
    pills: ['Docker', 'Linux Bash', 'CI/CD Pipelines', 'GitHub Actions', 'Firebase', 'Vercel', 'Postman', 'VS Code Configurations']
  }
];

export default function Stack() {
  return (
    <section id="stack" className="py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <div className="neo-badge bg-[#d8b4fe] text-black">
            <Cpu className="w-3.5 h-3.5" />
            <span>MY TOOLKIT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
            Tech <span className="underline decoration-4 decoration-[#86efac]">Stack</span>
          </h2>
          <p className="text-zinc-600 text-sm font-medium">
            Languages, frameworks, and tools I use to build robust software.
          </p>
        </div>

        {/* Categorized Pill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="neo-box p-6 bg-white space-y-4"
              >
                <div className="flex items-center space-x-3 border-b-2 border-zinc-100 pb-3">
                  <div className={`p-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] ${cat.badgeBg}`}>
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-black">
                    {cat.title}
                  </h3>
                </div>

                {/* Tactile Stickers */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.pills.map((pill, pillIdx) => (
                    <span
                      key={pillIdx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-50 hover:bg-[#fde047] border-2 border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-default select-none"
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
