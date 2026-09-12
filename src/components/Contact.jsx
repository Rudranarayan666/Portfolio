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
    <section id="contact" className="py-20 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big Neo-Brutalist Callout Box */}
        <div className="neo-box p-8 sm:p-12 bg-[#fde047] text-center space-y-6 shadow-[8px_8px_0px_0px_#000]">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black font-mono text-xs font-bold text-black shadow-[2px_2px_0px_0px_#000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S TALK</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            Have an opportunity or project in mind?
          </h2>

          <p className="text-zinc-900 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            I am actively looking for SDE and AI/ML internships. My inbox is always open whether you want to collaborate or just say hi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            
            {/* Email mailto button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="neo-btn bg-black text-white hover:bg-zinc-800 px-6 py-3 text-sm font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </a>

            {/* Copy email button */}
            <button
              onClick={handleCopyEmail}
              className="neo-btn neo-btn-secondary px-5 py-3 text-sm font-mono"
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
              className="neo-btn neo-btn-secondary px-4 py-3 text-sm font-mono"
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
              className="neo-btn neo-btn-secondary px-4 py-3 text-sm font-mono"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>

          <div className="pt-2 text-xs font-mono font-bold text-zinc-700">
            {PERSONAL_INFO.email} • {PERSONAL_INFO.location}
          </div>

        </div>

      </div>
    </section>
  );
}
