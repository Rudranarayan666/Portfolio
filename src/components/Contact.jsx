import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';

export default function Contact() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneNumber = 'contact through email';

  const handlePhoneClick = () => {
    if (!phoneRevealed) {
      setPhoneRevealed(true);
    } else {
      navigator.clipboard.writeText(phoneNumber);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Large Glass Center Panel */}
        <div className="amber-glass-card p-8 sm:p-12 rounded-3xl border border-[#ff9d42]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">

          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff9d42]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#ff9d42]" />
            <span className="font-mono text-xs font-semibold text-[#ff9d42] tracking-wider uppercase">
              LET'S BUILD TOGETHER
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f5f3ef] tracking-tight">
            Looking for an intern who <span className="text-amber-gradient">ships? 🚀</span>
          </h2>

          {/* Blurb */}
          <p className="text-base sm:text-lg text-[#9aa3b2] max-w-2xl mx-auto leading-relaxed font-sans">
            I'm actively seeking Software Engineering ,Full Stack ,AI-ML internship opportunities. Whether it's a project, a role, or just to talk shop — my inbox is always open.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">

            {/* Email Me Solid Button */}
            <a
              href="mailto:rudrasahu797@gmail.com"
              className="px-6 py-3.5 rounded-xl btn-amber-gradient text-sm font-bold flex items-center space-x-2 shadow-xl"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <Send className="w-4 h-4 ml-1" />
            </a>

            {/* LinkedIn Outline Button */}
            <a
              href="https://www.linkedin.com/in/rudranarayan-sahu-42017a368/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-[#6ea8fe]/40 hover:border-[#6ea8fe] text-[#6ea8fe] font-mono text-sm font-semibold transition-all flex items-center space-x-2"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>

            {/* Click-to-Reveal Phone Button */}
            <button
              onClick={handlePhoneClick}
              className="px-6 py-3.5 rounded-xl bg-white/5 border border-[#ff9d42]/40 hover:border-[#ff9d42] text-[#ff9d42] font-mono text-sm font-semibold transition-all flex items-center space-x-2"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Number Copied!</span>
                </>
              ) : phoneRevealed ? (
                <>
                  <Phone className="w-4 h-4" />
                  <span>{phoneNumber}</span>
                  <Copy className="w-3.5 h-3.5 ml-1 opacity-60" />
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4" />
                  <span>📞 Reveal Phone</span>
                </>
              )}
            </button>

          </div>

          {/* Quick Contact Details Summary */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#9aa3b2]">
            <div>
              <span className="text-[#ff9d42]">Email:</span> rudrasahu797@gmail.com
            </div>
            <div>
              <span className="text-[#6ea8fe]">Location:</span> Thane, MH, India
            </div>
            <div>
              <span className="text-[#f5a623]">Status:</span> Available 
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
