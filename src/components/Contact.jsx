import React, { useState } from 'react';
import { Mail, Send, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../content';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big Responsive Neo-Brutalist Callout Box */}
        <div className="neo-box p-6 sm:p-10 lg:p-12 bg-[#fde047] text-center space-y-5 sm:space-y-6 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S TALK</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-black tracking-tight leading-tight">
            Have an opportunity or project in mind?
          </h2>

          <p className="text-zinc-900 text-sm sm:text-base lg:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            I am actively looking for SDE and AI/ML internships. My inbox is always open whether you want to collaborate or just say hi.
          </p>

          {/* Action Buttons: Stack on small mobile, row on tablet/desktop */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2">
            
            {/* Email mailto button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="neo-btn bg-black text-white hover:bg-zinc-800 min-h-[44px] px-6 py-3 text-xs sm:text-sm font-mono shadow-[2.5px_2.5px_0px_0px_#000]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </a>

            {/* Copy email button */}
            <button
              onClick={handleCopyEmail}
              className="neo-btn neo-btn-secondary min-h-[44px] px-5 py-3 text-xs sm:text-sm font-mono shadow-[2.5px_2.5px_0px_0px_#000]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-secondary min-h-[44px] px-4 py-3 text-xs sm:text-sm font-mono shadow-[2.5px_2.5px_0px_0px_#000]"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-secondary min-h-[44px] px-4 py-3 text-xs sm:text-sm font-mono shadow-[2.5px_2.5px_0px_0px_#000]"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          <div className="pt-2 text-[11px] sm:text-xs font-mono font-bold text-zinc-700 break-words">
            {PERSONAL_INFO.email} • {PERSONAL_INFO.location}
          </div>

        </div>

      </div>
    </section>
  );
}
