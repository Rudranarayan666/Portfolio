import React from 'react';

const symbols = [
  { text: '&&', top: '12%', left: '8%', delay: '0s', duration: '7s' },
  { text: '</>', top: '22%', right: '10%', delay: '1s', duration: '8s' },
  { text: '#', top: '45%', left: '5%', delay: '2s', duration: '6.5s' },
  { text: '=>', top: '55%', right: '7%', delay: '0.5s', duration: '7.5s' },
  { text: '{}', top: '75%', left: '12%', delay: '1.5s', duration: '8.5s' },
  { text: '01', top: '85%', right: '14%', delay: '3s', duration: '6s' },
  { text: '::', top: '35%', left: '88%', delay: '2.5s', duration: '9s' },
];

export default function FloatingSymbols({ isReducedMotion = false }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {symbols.map((item, idx) => (
        <span
          key={idx}
          className={`absolute font-mono text-xl md:text-2xl font-bold text-[#ff9d42]/15 select-none ${
            isReducedMotion ? '' : 'animate-float-symbol'
          }`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}
