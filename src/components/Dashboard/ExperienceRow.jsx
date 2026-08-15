import React from "react";
import { EXPERIENCE } from "../../content";
import { Briefcase, Calendar, MapPin, Sparkles, Building2 } from "lucide-react";
import { soundFx } from "../../utils/soundEffects";

export default function ExperienceRow() {
  return (
    <section id="experience-section" className="py-12 border-b border-slate-900">
      <div className="mb-8 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Sparkles className="w-4 h-4" /> PRODUCTION ENGINEERING LOGS
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
          Experience Timeline
        </h2>
      </div>

      <div className="space-y-6 text-left max-w-4xl mx-auto">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border-slate-800/80 hover:border-cyan-500/40 relative"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold font-heading text-white">{exp.company}</h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    {exp.badge}
                  </span>
                </div>
                <div className="text-sm font-semibold text-cyan-300 mt-1 font-heading">
                  {exp.role}
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {exp.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {exp.location}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {exp.description.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{desc}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 bg-slate-900 text-slate-300 rounded-lg border border-slate-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
