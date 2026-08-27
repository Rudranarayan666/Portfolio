import React, { useState } from 'react';
import { Package, ExternalLink, ChevronDown, ChevronUp, Wrench, Star } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PRODUCTS } from '../content';

export default function Products() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="products" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
            <Package className="w-3.5 h-3.5" />
            <span>WHAT I'VE BUILT</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
            Products & <span className="text-amber-gradient">Contributions</span>
          </h2>
          <p className="text-[#9aa3b2] text-sm max-w-xl">
            End-to-end products I built or significantly contributed to — from concept to deployment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => {
            const isExpanded = expandedId === product.id;
            const hasGithub = product.github && product.github.trim() !== '';
            const hasLive = product.live && product.live.trim() !== '';

            return (
              <div
                key={product.id}
                className="neo-card amber-glass-card rounded-3xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/40 transition-all flex flex-col overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">

                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#ff9d42]/10 border border-[#ff9d42]/25 text-[#ff9d42] shrink-0">
                        <Package className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#ff9d42] transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-mono text-xs text-[#6ea8fe] mt-0.5">{product.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9aa3b2] leading-relaxed">
                    {product.description}
                  </p>

                  {/* Contribution Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#ff9d42]/10 border border-[#ff9d42]/20 self-start">
                    <Star className="w-3.5 h-3.5 text-[#ff9d42] shrink-0" />
                    <span className="font-mono text-xs text-[#ff9d42] font-medium">{product.contribution}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-[#f5f3ef]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features (expandable) */}
                  {isExpanded && (
                    <div className="space-y-2 animate-fadeIn">
                      <div className="font-mono text-xs font-bold text-[#f5f3ef]/80 uppercase tracking-wide flex items-center gap-2">
                        <Wrench className="w-3.5 h-3.5 text-[#ff9d42]" />
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-[#9aa3b2]">
                            <span className="text-[#ff9d42] font-mono mt-0.5 shrink-0">✦</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    {/* GitHub */}
                    {hasGithub ? (
                      <a
                        href={product.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-semibold text-[#9aa3b2] hover:text-[#ff9d42] flex items-center gap-1.5 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-slate-600 flex items-center gap-1.5">
                        <GithubIcon className="w-4 h-4" />
                        Private Repo
                      </span>
                    )}

                    {/* Live */}
                    {hasLive && (
                      <a
                        href={product.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-[#ff9d42]/10 hover:bg-[#ff9d42]/20 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-xs font-semibold flex items-center gap-1.5 transition-all"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Expand/Collapse */}
                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="flex items-center gap-1.5 font-mono text-xs text-[#9aa3b2] hover:text-[#ff9d42] transition-colors"
                    aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                  >
                    {isExpanded ? (
                      <>Less <ChevronUp className="w-3.5 h-3.5" /></>
                    ) : (
                      <>Features <ChevronDown className="w-3.5 h-3.5" /></>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
