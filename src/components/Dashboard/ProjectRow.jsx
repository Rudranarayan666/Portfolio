import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, Code, ArrowRight } from "lucide-react";
import { PROJECTS } from "../../content";
import ProjectModal from "./ProjectModal";
import { soundFx } from "../../utils/soundEffects";

export default function ProjectRow() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "AI & Cybersecurity", "AI & Data Engineering", "Full-Stack Web", "Machine Learning & Research"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="dashboard" className="py-12 border-b border-slate-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
            <Sparkles className="w-4 h-4" /> FEATURED SYSTEM ARCHITECTURES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Project Showcase
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-3 py-1.5 rounded-lg border transition ${
                activeCategory === cat
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Netflix Horizontal Poster Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => {
              soundFx.playClick();
              setSelectedProject(project);
            }}
            className="group cursor-pointer glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border-slate-800/80 hover:border-cyan-500/40 relative"
          >
            {/* Poster Header Gradient */}
            <div className={`h-40 bg-gradient-to-br ${project.posterGradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono bg-slate-950/80 text-cyan-300 px-2.5 py-0.5 rounded-md border border-cyan-500/30">
                  {project.badge}
                </span>
                <span className="text-[10px] font-mono text-slate-300 bg-slate-950/50 px-2 py-0.5 rounded">
                  {project.period}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Poster Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                {project.summary}
              </p>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Inspect Details
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
