import React from 'react';
import { CadSchematic } from './CadSchematic';
import { CADIllustration } from './CADIllustration';

interface ProductVisualProps {
  type: string;
  identifier?: string | number;
  className?: string;
  isSoldOut?: boolean;
  telemetrySpec?: string;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ type, identifier, className = '', isSoldOut = false, telemetrySpec }) => {
  if (type === 'hero') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-[#18181B] select-none ${className}`}>
        {/* Hero SVG as before... abbreviated for brevity or re-use existing hero svg */}
        <svg viewBox="0 0 600 500" className="w-full h-full p-4 object-contain">
          <defs>
            <pattern id="acidGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#D2E823" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E24" />
              <stop offset="100%" stopColor="#0B0B0E" />
            </linearGradient>
          </defs>
          <rect width="600" height="500" fill="url(#acidGrid)" />
          <g transform="translate(100, 40)">
            <path d="M 140 30 L 260 30 L 280 80 L 320 120 L 80 120 L 120 80 Z" fill="#27272A" stroke="#09090B" strokeWidth="4" />
            <rect x="150" y="85" width="100" height="10" fill="#D2E823" rx="2" stroke="#09090B" strokeWidth="2" />
            <text x="200" y="93" fill="#09090B" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SPEC-TX 20K/20K</text>
            <polygon points="80,120 320,120 350,330 290,360 200,340 110,360 50,330" fill="url(#jacketGrad)" stroke="#09090B" strokeWidth="4" />
            <polygon points="80,120 40,240 85,280 100,230 110,160" fill="#27272A" stroke="#09090B" strokeWidth="4" />
            <polygon points="320,120 360,240 315,280 300,230 290,160" fill="#27272A" stroke="#09090B" strokeWidth="4" />
            <line x1="200" y1="120" x2="200" y2="340" stroke="#09090B" strokeWidth="6" />
            <line x1="200" y1="120" x2="200" y2="340" stroke="#D2E823" strokeWidth="2" strokeDasharray="8 4" />
            <rect x="120" y="150" width="60" height="80" rx="4" fill="#121215" stroke="#D2E823" strokeWidth="2" />
            <rect x="220" y="150" width="70" height="60" rx="4" fill="#121215" stroke="#09090B" strokeWidth="3" />
            <rect x="220" y="225" width="70" height="85" rx="4" fill="#121215" stroke="#09090B" strokeWidth="3" />
            <rect x="130" y="215" width="40" height="6" fill="#D2E823" />
            <rect x="230" y="195" width="50" height="6" fill="#D2E823" />
            <rect x="230" y="295" width="50" height="6" fill="#D2E823" />
            <circle cx="200" cy="50" r="18" fill="none" stroke="#D2E823" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="175" y1="50" x2="225" y2="50" stroke="#D2E823" strokeWidth="1" />
            <line x1="200" y1="25" x2="200" y2="75" stroke="#D2E823" strokeWidth="1" />
            <g transform="translate(130, 165)">
              <text x="0" y="12" fill="#D2E823" fontSize="9" fontFamily="Dela Gothic One, sans-serif">ACID</text>
              <text x="0" y="22" fill="#F8F4E8" fontSize="6" fontFamily="monospace">LAB//MOD-04</text>
            </g>
          </g>
          <line x1="60" y1="160" x2="140" y2="160" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />
          <text x="60" y="150" fill="#D2E823" fontSize="8" fontFamily="monospace">CORDURA 500D</text>
          <line x1="460" y1="280" x2="380" y2="280" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />
          <text x="400" y="270" fill="#D2E823" fontSize="8" fontFamily="monospace">FIDLOCK SLIDER</text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${isSoldOut ? 'grayscale contrast-125 opacity-60' : ''} ${className}`}>
      {identifier && identifier !== 'hero' ? (
        <CADIllustration identifier={identifier} className="w-full h-full" />
      ) : (
        <CadSchematic type={type} telemetrySpec={telemetrySpec} className="w-full h-full" />
      )}
    </div>
  );
};
