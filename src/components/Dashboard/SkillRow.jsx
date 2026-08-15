import React from "react";
import { SKILLS_CATEGORIES } from "../../content";
import { Code2, Brain, Layers, Database, Sparkles } from "lucide-react";
import { soundFx } from "../../utils/soundEffects";

export default function SkillRow() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Code2": return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "Brain": return <Brain className="w-5 h-5 text-cyan-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-cyan-400" />;
      case "Database": return <Database className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills-section" className="py-12 border-b border-slate-900">
      <div className="mb-8 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Sparkles className="w-4 h-4" /> ENGINEERING CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
          Full-Stack Toolkit
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="glass-panel p-6 rounded-2xl border-slate-800/80 hover:border-cyan-500/30 transition text-left"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                {getIcon(cat.icon)}
              </div>
              <h3 className="text-xl font-bold font-heading text-white">
                {cat.name}
              </h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  onMouseEnter={() => soundFx.playHover()}
                  className="group p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 transition"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 font-heading">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Meter Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 font-mono leading-tight">
                    {skill.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
