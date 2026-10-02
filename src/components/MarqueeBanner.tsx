import React from 'react';

interface MarqueeBannerProps {
  items?: string[];
  theme?: 'acid' | 'dark';
  className?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = [
    '★ ACID SYSTEM // BATCH 004 NOW LIVE',
    '/// 2PX SOLID BLACK INK BORDERS',
    '⚡ ZERO-BLUR HARD SHADOWS ONLY',
    '★ 100% BALLISTIC CORDURA & TITANIUM',
    '/// DELA GOTHIC DISPLAY ARCHITECTURE',
    '⚡ LIMITED RUN OF 350 UNITS PER DROP',
    '★ SHIPS IN CUSTOM ARCHIVAL PACKAGING',
  ],
  theme = 'acid',
  className = '',
}) => {
  const isAcid = theme === 'acid';

  return (
    <div
      className={`relative w-full overflow-hidden border-y-2 border-[#09090B] py-3.5 select-none ${
        isAcid ? 'bg-[#D2E823] text-[#09090B]' : 'bg-[#09090B] text-[#F8F4E8]'
      } ${className}`}
    >
      <div className="animate-marquee flex items-center gap-12 font-display text-sm tracking-wider uppercase">
        {/* Render twice for seamless looping */}
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 whitespace-nowrap">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-none bg-current rotate-45 inline-block opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
};
