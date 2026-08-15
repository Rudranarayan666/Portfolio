import React from 'react';
import { FileText, X, ExternalLink, Mail, Check } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rudrasahu797@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090c16]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md p-6 rounded-2xl amber-glass-card border border-[#ff9d42]/30 shadow-2xl text-[#f5f3ef]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9aa3b2] hover:text-[#ff9d42] transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-xl bg-[#ff9d42]/10 border border-[#ff9d42]/20 text-[#ff9d42]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-white">Rudranarayan's Resume</h3>
            <p className="font-mono text-xs text-[#9aa3b2]">PDF Document Placeholder</p>
          </div>
        </div>

        <p className="text-sm text-[#9aa3b2] mb-6 leading-relaxed">
          Rudra's official Resume PDF is currently hosted privately. You can request the latest copy directly or connect via email.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => {
              // Placeholder link notification
              alert('Resume PDF Link: Replace href in code with Google Drive or hosted PDF URL.');
            }}
            className="w-full py-2.5 px-4 rounded-xl btn-amber-gradient flex items-center justify-center space-x-2 text-sm font-semibold"
          >
            <span>View Resume PDF (Placeholder)</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9d42]/40 text-[#f5f3ef] hover:text-[#ff9d42] transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>Request Resume via Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
