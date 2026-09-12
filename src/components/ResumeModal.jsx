import React, { useState } from 'react';
import { FileText, X, ExternalLink, Mail, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../content';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md p-6 sm:p-7 rounded-2xl bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] text-black">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-black bg-zinc-100 hover:bg-[#fca5a5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-black" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-xl bg-[#fde047] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <FileText className="w-6 h-6 text-black" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-black">Rudranarayan's Resume</h3>
            <p className="font-mono text-xs text-zinc-600 font-bold">Software Engineer & AI Researcher</p>
          </div>
        </div>

        <p className="text-sm text-zinc-700 mb-6 leading-relaxed font-medium">
          Official Resume PDF is updated regularly. Request the latest version directly or connect via email.
        </p>

        <div className="space-y-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Request%20-%20Rudranarayan%20Sahu&body=Hi%20Rudranarayan%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThanks!`}
            className="neo-btn neo-btn-primary w-full py-2.5 text-sm font-mono"
          >
            <span>Request Resume via Email</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="neo-btn neo-btn-secondary w-full py-2.5 text-sm font-mono"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
