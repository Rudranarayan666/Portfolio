import React from 'react';
import { Layers, ExternalLink, CheckCircle, Code } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const projectsData = [
  {
    id: 'rc-ads',
    title: 'RC-ADS',
    subtitle: 'Reality-Consistent AI Detection System',
    date: 'Feb–Mar 2026',
    description: 'AI-powered content detection system analyzing media authenticity, metadata, and behavioral signals to flag AI-generated content.',
    metric: '✓ Explainable AACS via multi-engine fusion',
    stack: ['Python', 'FastAPI', 'OpenCV', 'scikit-image'],
    // Placeholder links marked for Rudra to fill in real repository or live links
    codeLink: '#',
    demoLink: '#'
  },
  {
    id: 'datatalk-ai',
    title: 'DataTalk AI',
    subtitle: 'Natural-Language Analytics Platform',
    date: 'Feb 2026',
    description: 'Query CSV datasets in plain English via English-to-SQL conversion with self-healing query execution using DuckDB.',
    metric: '✓ Self-healing SQL execution',
    stack: ['Python', 'DuckDB', 'Plotly', 'Power BI'],
    // Placeholder links marked for Rudra to fill in real repository or live links
    codeLink: '#',
    demoLink: '#'
  },
  {
    id: 'lifeskillsphere',
    title: 'LifeSkillSphere',
    subtitle: 'Full-Stack Life-Skills Platform',
    date: 'Oct–Dec 2025',
    description: 'Mood tracking, psychometric assessments, and interactive learning modules with progress tracking and achievement badges.',
    metric: '✓ Achievement-badge engagement system',
    stack: ['React.js', 'Next.js', 'MongoDB', 'Firebase'],
    // Placeholder links marked for Rudra to fill in real repository or live links
    codeLink: '#',
    demoLink: '#'
  },
  {
    id: 'usrf-ml-research',
    title: 'USRF ML Research',
    subtitle: 'Amity Centre for Artificial Intelligence',
    date: '2026–Ongoing',
    description: 'Ensemble classification and explainability research; identifying and correcting data leakage in prior published pipelines.',
    metric: '✓ Leakage-controlled honest benchmarking',
    stack: ['Scikit-learn', 'SHAP', 'Pandas', 'Optuna'],
    // Placeholder links marked for Rudra to fill in real repository or live links
    codeLink: '#',
    demoLink: '#'
  }
];

export default function Projects() {
  const handlePlaceholderClick = (e, type, title) => {
    if (e.target.getAttribute('href') === '#') {
      e.preventDefault();
      alert(`${type} link placeholder for ${title}: Add real URL in src/components/Projects.jsx`);
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>WHAT I'VE BUILT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            Featured <span className="text-amber-gradient">Projects</span>
          </h2>
        </div>

        {/* Responsive Grid of Glass Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="amber-glass-card p-6 sm:p-7 rounded-3xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/45 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Top Bar: Date Tag + Title */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-[#ff9d42]" />
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#ff9d42] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#9aa3b2] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {project.date}
                  </span>
                </div>

                {/* Subtitle & 2-line Description */}
                <div>
                  <p className="font-mono text-xs font-semibold text-[#6ea8fe] mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[#9aa3b2] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Green Concrete Outcome Metric Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs font-medium text-emerald-300">
                    {project.metric}
                  </span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-[#f5f3ef]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Link Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                {/* Repository / Code Link */}
                <a
                  href={project.codeLink}
                  onClick={(e) => handlePlaceholderClick(e, 'Code', project.title)}
                  className="font-mono text-xs font-semibold text-[#9aa3b2] hover:text-[#ff9d42] flex items-center space-x-1.5 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code Repo</span>
                </a>

                {/* Demo / Details Link */}
                <a
                  href={project.demoLink}
                  onClick={(e) => handlePlaceholderClick(e, 'Demo', project.title)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ff9d42]/10 hover:bg-[#ff9d42]/20 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-xs font-semibold flex items-center space-x-1.5 transition-all"
                >
                  <span>Details / Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
