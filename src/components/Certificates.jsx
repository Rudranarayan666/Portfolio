import React, { useState } from 'react';
import { Award, ExternalLink, X, ShieldCheck, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../content';

// Issuer color mapping
const ISSUER_STYLES = {
  Oracle: { color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
  IBM: { color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
  Celonis: { color: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/10' },
};

const getIssuerStyle = (issuer) =>
  ISSUER_STYLES[issuer] || { color: 'text-[#ff9d42]', border: 'border-[#ff9d42]/30', bg: 'bg-[#ff9d42]/10' };

export default function Certificates() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const openPreview = (url, title) => {
    if (!url) return;
    // Oracle badge links and Drive links: open in new tab for best experience
    // We try to show in modal for drive links
    if (url.includes('drive.google.com')) {
      // Convert to embed URL
      const fileId = url.match(/\/d\/(.*?)\//)?.[1] || url.match(/id=(.*?)(&|$)/)?.[1];
      if (fileId) {
        setPreviewUrl(`https://drive.google.com/file/d/${fileId}/preview`);
        setPreviewTitle(title);
        return;
      }
    }
    // Fallback: open externally
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const closePreview = () => {
    setPreviewUrl(null);
    setPreviewTitle('');
  };

  return (
    <>
      <section id="certifications" className="py-20 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="space-y-2 mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#ff9d42]/10 border border-[#ff9d42]/20 font-mono text-xs text-[#ff9d42] font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#f5f3ef]">
              Certifications & <span className="text-amber-gradient">Badges</span>
            </h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => {
              const style = getIssuerStyle(cert.issuer);
              const hasUrl = cert.certificateUrl && cert.certificateUrl.trim() !== '';

              return (
                <div
                  key={cert.id}
                  className="neo-card amber-glass-card p-6 rounded-3xl border border-[#ff9d42]/20 hover:border-[#ff9d42]/40 transition-all flex flex-col gap-4"
                >
                  {/* Top: Issuer badge + Verified chip */}
                  <div className="flex items-center justify-between">
                    <div className={`px-3 py-1.5 rounded-xl ${style.bg} border ${style.border} font-mono text-xs font-bold ${style.color}`}>
                      {cert.issuer}
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono text-[10px] text-emerald-300 font-semibold">{cert.badge}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-heading font-bold text-base text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs text-[#9aa3b2] mt-1">{cert.role}</p>
                  </div>

                  {/* Duration */}
                  <div className="font-mono text-xs text-[#9aa3b2] border-t border-white/10 pt-3">
                    Issued: <span className="text-[#ff9d42]">{cert.duration}</span>
                  </div>

                  {/* View Certificate Button */}
                  {hasUrl ? (
                    <button
                      onClick={() => openPreview(cert.certificateUrl, cert.title)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ff9d42]/10 hover:bg-[#ff9d42]/20 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-xs font-semibold transition-all neo-card w-full"
                    >
                      <Award className="w-4 h-4" />
                      View Certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-500 font-mono text-xs w-full cursor-default select-none">
                      <Award className="w-4 h-4" />
                      Certificate Link Coming Soon
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Certificate Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0a0e1a] rounded-3xl border border-[#ff9d42]/30 overflow-hidden shadow-2xl shadow-[#ff9d42]/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <div className="font-mono text-xs text-[#ff9d42] font-semibold uppercase tracking-wider mb-0.5">Certificate</div>
                <h3 className="font-heading font-bold text-white text-sm">{previewTitle}</h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={previewUrl.replace('/preview', '/view')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ff9d42]/10 border border-[#ff9d42]/30 text-[#ff9d42] font-mono text-xs font-semibold hover:bg-[#ff9d42]/20 transition-all"
                >
                  Open Full
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={closePreview}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#9aa3b2] hover:text-white transition-colors"
                  aria-label="Close preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Preview */}
            <div className="w-full aspect-[4/3] max-h-[70vh]">
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title={previewTitle}
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
