import React, { useEffect, useState } from 'react';

const Cursor3D = ({ isReducedMotion }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    if (isReducedMotion || window.innerWidth < 768) return; // Disable on mobile or if reduced motion is on

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = () => {
      const target = event.target;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isReducedMotion]);

  if (isReducedMotion || window.innerWidth < 768) return null;

  return (
    <>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div 
          className={`w-3 h-3 bg-[var(--amber-light)] rounded-full transition-all duration-300 ${
            isPointer ? 'scale-150 opacity-100' : 'scale-100 opacity-80'
          }`}
          style={{
            boxShadow: '0 0 10px var(--amber-light), 0 0 20px var(--amber-light)',
          }}
        />
      </div>
      
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) rotateX(${position.y % 30}deg) rotateY(${position.x % 30}deg)`,
        }}
      >
        <div 
          className={`w-10 h-10 border border-[var(--amber-light)] rounded-full transition-all duration-300 flex items-center justify-center ${
            isPointer ? 'scale-[1.5] opacity-50 bg-[var(--amber-light)]/10' : 'scale-100 opacity-30 animate-pulse'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            animation: isPointer ? 'none' : 'tremble 0.2s infinite alternate ease-in-out'
          }}
        >
           <style>{`
            @keyframes tremble {
              0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
              25% { transform: translate(1px, 1px) rotate(1deg) scale(1.02); }
              50% { transform: translate(-1px, -2px) rotate(-1deg) scale(0.98); }
              75% { transform: translate(-2px, 1px) rotate(0deg) scale(1.01); }
              100% { transform: translate(1px, -1px) rotate(1deg) scale(0.99); }
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Cursor3D;
