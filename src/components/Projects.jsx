import React from 'react';
import { Layers, ExternalLink, CheckCircle, Code } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../content';

export default function Projects() {
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

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => {
            const hasGithub = project.github && project.github.trim() !== '';
            const hasLive = project.live && project.live.trim() !== '';

            return (
              <div
                key={project.id}
                className="neo-card amber-glass-card p-6 sm:p-7 rounded-3xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/45 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">

                  {/* Top Bar */}
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

                  {/* Subtitle & Description */}
                  <div>
                    <p className="font-mono text-xs font-semibold text-[#6ea8fe] mb-1">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-[#9aa3b2] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Outcome Metric Badge */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs font-medium text-emerald-300">
                      {project.metric}
                    </span>
                  </div>

                  {/* Tech Stack */}
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

                {/* Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                  {/* GitHub link — only show when URL is set */}
                  {hasGithub ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-[#9aa3b2] hover:text-[#ff9d42] flex items-center space-x-1.5 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Repo</span>
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-slate-600 flex items-center space-x-1.5 cursor-default select-none">
                      <GithubIcon className="w-4 h-4" />
                      <span>Research based</span>
                    </span>
                  )}

                  {/* Live Demo — only render when URL exists */}
                  {hasLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-[#ff9d42]/10 hover:bg-[#ff9d42]/20 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-xs font-semibold flex items-center space-x-1.5 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
