import React, { useState } from "react";
import { PERSONAL_INFO } from "../../content";
import { Mail, Phone, Copy, Check, Send, Terminal, Sparkles } from "lucide-react";
import { soundFx } from "../../utils/soundEffects";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playWarp();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-section" className="py-16 text-left">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Sparkles className="w-4 h-4" /> TRANSMISSION CHANNEL
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mb-3">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Open for software engineering opportunities, AI research collaborations, full-stack builds, and hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Direct Telemetry Cards */}
          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                  <div className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                onMouseEnter={() => soundFx.playHover()}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition border border-slate-700"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-slate-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">PHONE TELEMETRY</div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white font-mono hover:text-cyan-300 transition">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel glass-panel-hover p-4 rounded-xl border-slate-800 flex items-center gap-3 text-cyan-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                <span className="text-xs font-mono font-bold">LINKEDIN</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="glass-panel glass-panel-hover p-4 rounded-xl border-slate-800 flex items-center gap-3 text-cyan-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                <span className="text-xs font-mono font-bold">GITHUB</span>
              </a>
            </div>
          </div>

          {/* Sci-Fi Contact Form Terminal */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl border-cyan-500/30 relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-4 h-4" /> TRANSMIT MESSAGE
              </span>
              <span>ENCRYPTION: 256-BIT</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center text-cyan-300 font-mono space-y-2">
                <Check className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <div className="text-lg font-bold">TRANSMISSION SENT SUCCESSFULLY</div>
                <p className="text-xs text-slate-400">Thank you. Rudranarayan will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">YOUR NAME / CALLSIGN</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">SENDER EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">TRANSMISSION MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Discuss project requirements, hiring, or collaboration..."
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-slate-900 text-center font-mono text-xs text-slate-500">
          <p>© 2026 Rudranarayan Sahu. Engineered with React, GSAP ScrollTrigger & HTML5 Canvas.</p>
        </div>
      </div>
    </section>
  );
}
