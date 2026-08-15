import React from "react";
import { ACHIEVEMENTS, CERTIFICATIONS } from "../../content";
import { Trophy, Award, Users, GraduationCap, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { soundFx } from "../../utils/soundEffects";

export default function AchievementRow() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Trophy": return <Trophy className="w-6 h-6 text-amber-400" />;
      case "Award": return <Award className="w-6 h-6 text-cyan-400" />;
      case "Users": return <Users className="w-6 h-6 text-blue-400" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements-section" className="py-12 border-b border-slate-900">
      <div className="mb-8 text-left">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
          <Sparkles className="w-4 h-4" /> RECOGNITION & CERTIFICATIONS
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
          Achievements & Honors
        </h2>
      </div>

      {/* Main Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
        {ACHIEVEMENTS.map((ach) => (
          <div
            key={ach.id}
            onMouseEnter={() => soundFx.playHover()}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border-slate-800/80 hover:border-cyan-500/40 flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
              {getIcon(ach.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {ach.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{ach.organization}</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                {ach.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {ach.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Row */}
      <div className="glass-panel p-6 rounded-2xl border-slate-800 text-left">
        <h3 className="text-xs font-mono uppercase text-cyan-400 mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> VERIFIED PROFESSIONAL CERTIFICATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex justify-between items-center"
            >
              <div>
                <div className="text-xs font-bold text-white font-heading mb-1">{cert.title}</div>
                <div className="text-[11px] font-mono text-cyan-400">{cert.issuer}</div>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 shrink-0">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
