import React from 'react';
import { Layers, ExternalLink, CheckCircle2, Code, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../content';

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="space-y-1 mb-10">
          <div className="neo-badge bg-[#86efac] text-black">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
            Featured <span className="underline decoration-4 decoration-[#fde047]">Projects</span>
          </h2>
          <p className="text-zinc-600 text-sm font-medium">
            Real software built to solve real problems.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => {
            const hasGithub = project.github && project.github.trim() !== '';
            const hasLive = project.live && project.live.trim() !== '';

            return (
              <div
                key={project.id}
                className="neo-box neo-box-hover p-6 bg-white flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  
                  {/* Top Bar: Title & Year */}
                  <div className="flex items-start justify-between gap-3 border-b-2 border-zinc-100 pb-3">
                    <div>
                      <span className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-black mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border border-black bg-[#fde047] shadow-[2px_2px_0px_0px_#000] shrink-0">
                      {project.date}
                    </span>
                  </div>

                  {/* Clean Simple Description */}
                  <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Outcome Metric Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#86efac] border border-black font-mono text-xs font-bold text-black">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metric.replace('✓ ', '')}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-100 border border-black text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Footer Buttons */}
                <div className="pt-3 border-t-2 border-zinc-100 flex items-center justify-between gap-3">
                  {hasGithub ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn neo-btn-secondary px-3.5 py-1.5 text-xs font-mono"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      Research Implementation
                    </span>
                  )}

                  {hasLive && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn neo-btn-primary px-3.5 py-1.5 text-xs font-mono"
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
