import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../content';

const ISSUER_COLORS = {
  Oracle: 'bg-[#fca5a5]',
  IBM: 'bg-[#7dd3fc]',
  Celonis: 'bg-[#d8b4fe]',
};

export default function Certificates() {
  return (
    <section id="certifications" className="py-12 sm:py-16 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="space-y-1 mb-8">
          <div className="neo-badge bg-[#7dd3fc] text-black">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-black">
            Certifications & <span className="underline decoration-4 decoration-[#fde047]">Badges</span>
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm font-medium">
            Industry-certified skills in AI, data analysis, and systems.
          </p>
        </div>

        {/* Grid of Certifications: 1 column on mobile, 2 on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CERTIFICATIONS.map((cert) => {
            const issuerBg = ISSUER_COLORS[cert.issuer] || 'bg-[#fde047]';

            return (
              <div
                key={cert.id}
                className="neo-box neo-box-hover p-5 sm:p-6 bg-white flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded border border-black shadow-[1.5px_1.5px_0px_0px_#000] ${issuerBg} text-black`}>
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-zinc-500">
                      {cert.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-black">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-zinc-600 font-medium mt-1">
                      {cert.role}
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3 border-t-2 border-zinc-100">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn neo-btn-secondary min-h-[42px] w-full py-2 text-xs font-mono"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
