import React from 'react';

export interface CADIllustrationProps {
  identifier: string | number; // Accepts product sku (ACID-1000..ACID-1029), slug, or db id
  className?: string;
}

export const CADIllustration: React.FC<CADIllustrationProps> = ({ identifier, className = '' }) => {
  const idStr = String(identifier).toLowerCase().trim();

  const illustrations: Record<string, React.ReactNode> = {
    "acid-sys-technical-blazer": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,46 40,68 50,142 64,140 66,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,46 160,68 150,142 136,140 134,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,46 132,46 138,156 62,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="86,40 114,40 116,48 84,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="84,48 64,74 78,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="116,48 136,74 122,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M78,78 L92,120 L92,145" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="100" cy="120" r="2" fill="#D2E823" />

          
          <rect x="68" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />
          <rect x="112" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />

          
          <polyline points="68,74 30,74 30,52" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="40" width="70" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="48.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">NOTCH LAPEL 7CM</text>

          
          <polyline points="92,130 156,130 156,150" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="152" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="160.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HOLSTER HARNESS</text>
        </svg>
    ),
    "acid-1000": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,46 40,68 50,142 64,140 66,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,46 160,68 150,142 136,140 134,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,46 132,46 138,156 62,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="86,40 114,40 116,48 84,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="84,48 64,74 78,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="116,48 136,74 122,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M78,78 L92,120 L92,145" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="100" cy="120" r="2" fill="#D2E823" />

          
          <rect x="68" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />
          <rect x="112" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />

          
          <polyline points="68,74 30,74 30,52" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="40" width="70" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="48.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">NOTCH LAPEL 7CM</text>

          
          <polyline points="92,130 156,130 156,150" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="152" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="160.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HOLSTER HARNESS</text>
        </svg>
    ),
    "1000": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,46 40,68 50,142 64,140 66,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,46 160,68 150,142 136,140 134,78" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,46 132,46 138,156 62,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="86,40 114,40 116,48 84,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="84,48 64,74 78,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="116,48 136,74 122,78 100,115 100,48" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M78,78 L92,120 L92,145" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="100" cy="120" r="2" fill="#D2E823" />

          
          <rect x="68" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />
          <rect x="112" y="128" width="20" height="5" fill="#27272A" stroke="#52525B" strokeWidth="0.75" />

          
          <polyline points="68,74 30,74 30,52" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="40" width="70" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="48.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">NOTCH LAPEL 7CM</text>

          
          <polyline points="92,130 156,130 156,150" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="152" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="160.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HOLSTER HARNESS</text>
        </svg>
    ),
    "neo-brutalist-trench-coat": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,68 46,145 60,143 64,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,68 154,145 140,143 136,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 144,178 56,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="82,38 118,38 122,48 78,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="78,48 64,72 84,78 96,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="122,48 136,72 116,78 104,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 134,60 128,100 100,94" fill="#1E2028" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="62" y="106" width="76" height="8" fill="#09090B" stroke="#52525B" strokeWidth="1" />
          <rect x="94" y="104" width="12" height="12" fill="#D2E823" stroke="#09090B" strokeWidth="1" />

          
          <text x="100" y="152" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="3">ACID</text>

          
          <polyline points="128,78 162,78 162,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="44" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM STORM FLAP</text>

          
          <polyline points="62,110 30,110 30,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="132" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK BUCKLE</text>
        </svg>
    ),
    "acid-1001": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,68 46,145 60,143 64,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,68 154,145 140,143 136,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 144,178 56,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="82,38 118,38 122,48 78,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="78,48 64,72 84,78 96,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="122,48 136,72 116,78 104,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 134,60 128,100 100,94" fill="#1E2028" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="62" y="106" width="76" height="8" fill="#09090B" stroke="#52525B" strokeWidth="1" />
          <rect x="94" y="104" width="12" height="12" fill="#D2E823" stroke="#09090B" strokeWidth="1" />

          
          <text x="100" y="152" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="3">ACID</text>

          
          <polyline points="128,78 162,78 162,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="44" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM STORM FLAP</text>

          
          <polyline points="62,110 30,110 30,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="132" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK BUCKLE</text>
        </svg>
    ),
    "1001": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,68 46,145 60,143 64,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,68 154,145 140,143 136,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 144,178 56,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="82,38 118,38 122,48 78,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="78,48 64,72 84,78 96,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="122,48 136,72 116,78 104,52" fill="#22232A" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 134,60 128,100 100,94" fill="#1E2028" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="62" y="106" width="76" height="8" fill="#09090B" stroke="#52525B" strokeWidth="1" />
          <rect x="94" y="104" width="12" height="12" fill="#D2E823" stroke="#09090B" strokeWidth="1" />

          
          <text x="100" y="152" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="3">ACID</text>

          
          <polyline points="128,78 162,78 162,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="44" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM STORM FLAP</text>

          
          <polyline points="62,110 30,110 30,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="132" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK BUCKLE</text>
        </svg>
    ),
    "asymmetric-wool-overcoat": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,70 46,146 60,144 64,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,70 154,146 140,144 136,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,46 134,46 142,168 58,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="84,34 116,40 120,50 80,48" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M84,48 L126,110 L130,170" stroke="#D2E823" strokeWidth="1.5" />

          
          <text x="96" y="142" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <line x1="68" y1="118" x2="88" y2="124" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="84,38 34,38 34,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="60" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="68.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FUNNEL COLLAR 9CM</text>

          
          <polyline points="126,115 160,115 160,135" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="137" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="145.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP CLOSURE</text>
        </svg>
    ),
    "acid-1002": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,70 46,146 60,144 64,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,70 154,146 140,144 136,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,46 134,46 142,168 58,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="84,34 116,40 120,50 80,48" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M84,48 L126,110 L130,170" stroke="#D2E823" strokeWidth="1.5" />

          
          <text x="96" y="142" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <line x1="68" y1="118" x2="88" y2="124" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="84,38 34,38 34,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="60" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="68.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FUNNEL COLLAR 9CM</text>

          
          <polyline points="126,115 160,115 160,135" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="137" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="145.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP CLOSURE</text>
        </svg>
    ),
    "1002": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,70 46,146 60,144 64,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,70 154,146 140,144 136,82" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,46 134,46 142,168 58,178" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="84,34 116,40 120,50 80,48" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <path d="M84,48 L126,110 L130,170" stroke="#D2E823" strokeWidth="1.5" />

          
          <text x="96" y="142" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <line x1="68" y1="118" x2="88" y2="124" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="84,38 34,38 34,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="60" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="68.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FUNNEL COLLAR 9CM</text>

          
          <polyline points="126,115 160,115 160,135" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="137" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="145.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP CLOSURE</text>
        </svg>
    ),
    "cropped-flight-jacket": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,52 30,76 45,128 62,125 64,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,52 170,76 155,128 138,125 136,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <rect x="32" y="90" width="10" height="18" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <polygon points="64,52 136,52 140,132 60,132" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="52" x2="100" y2="142" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M84,52 Q100,60 116,52" stroke="#52525B" strokeWidth="3" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="60" y="132" width="80" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <polyline points="32,98 16,98 16,70" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="58" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="66.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MA-1 ZIP POCKET</text>

          
          <polyline points="138,136 164,136 164,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="120" y="156" width="74" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="124" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOX CROP 52CM</text>
        </svg>
    ),
    "acid-1003": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,52 30,76 45,128 62,125 64,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,52 170,76 155,128 138,125 136,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <rect x="32" y="90" width="10" height="18" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <polygon points="64,52 136,52 140,132 60,132" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="52" x2="100" y2="142" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M84,52 Q100,60 116,52" stroke="#52525B" strokeWidth="3" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="60" y="132" width="80" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <polyline points="32,98 16,98 16,70" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="58" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="66.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MA-1 ZIP POCKET</text>

          
          <polyline points="138,136 164,136 164,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="120" y="156" width="74" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="124" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOX CROP 52CM</text>
        </svg>
    ),
    "1003": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,52 30,76 45,128 62,125 64,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,52 170,76 155,128 138,125 136,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <rect x="32" y="90" width="10" height="18" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <polygon points="64,52 136,52 140,132 60,132" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="52" x2="100" y2="142" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M84,52 Q100,60 116,52" stroke="#52525B" strokeWidth="3" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="60" y="132" width="80" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <polyline points="32,98 16,98 16,70" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="58" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="66.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MA-1 ZIP POCKET</text>

          
          <polyline points="138,136 164,136 164,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="120" y="156" width="74" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="124" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOX CROP 52CM</text>
        </svg>
    ),
    "modular-utility-vest": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M78,44 L66,60 L62,112 L70,112 L66,155 L134,155 L130,112 L138,112 L134,60 L122,44 L110,68 L90,68 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="68" x2="100" y2="155" stroke="#F8F4E8" strokeWidth="1.2" />

          
          <line x1="72" y1="80" x2="94" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="80" x2="128" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="70" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="106" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="122,80 156,80 156,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="44" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOLLE LADDER GRID</text>

          
          <polyline points="70,126 34,126 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3D BELLOWS BAY</text>
        </svg>
    ),
    "acid-1004": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M78,44 L66,60 L62,112 L70,112 L66,155 L134,155 L130,112 L138,112 L134,60 L122,44 L110,68 L90,68 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="68" x2="100" y2="155" stroke="#F8F4E8" strokeWidth="1.2" />

          
          <line x1="72" y1="80" x2="94" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="80" x2="128" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="70" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="106" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="122,80 156,80 156,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="44" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOLLE LADDER GRID</text>

          
          <polyline points="70,126 34,126 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3D BELLOWS BAY</text>
        </svg>
    ),
    "1004": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M78,44 L66,60 L62,112 L70,112 L66,155 L134,155 L130,112 L138,112 L134,60 L122,44 L110,68 L90,68 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="68" x2="100" y2="155" stroke="#F8F4E8" strokeWidth="1.2" />

          
          <line x1="72" y1="80" x2="94" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="80" x2="128" y2="80" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="70" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="106" y="108" width="24" height="36" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="122,80 156,80 156,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="44" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOLLE LADDER GRID</text>

          
          <polyline points="70,126 34,126 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3D BELLOWS BAY</text>
        </svg>
    ),
    "deconstructed-wrap-blazer": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,48 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,48 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,48 132,48 138,158 62,158" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M88,48 L126,116 L126,158" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <text x="96" y="98" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <path d="M126,116 C136,130 118,148 130,172" stroke="#D2E823" strokeWidth="2" />

          <line x1="62" y1="154" x2="138" y2="154" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <polyline points="88,60 36,60 36,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">KIMONO WRAP FRONT</text>

          
          <polyline points="128,135 160,135 160,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="156" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INDUSTRIAL TIE TAPE</text>
        </svg>
    ),
    "acid-1005": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,48 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,48 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,48 132,48 138,158 62,158" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M88,48 L126,116 L126,158" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <text x="96" y="98" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <path d="M126,116 C136,130 118,148 130,172" stroke="#D2E823" strokeWidth="2" />

          <line x1="62" y1="154" x2="138" y2="154" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <polyline points="88,60 36,60 36,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">KIMONO WRAP FRONT</text>

          
          <polyline points="128,135 160,135 160,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="156" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INDUSTRIAL TIE TAPE</text>
        </svg>
    ),
    "1005": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="180" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,48 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,48 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,48 132,48 138,158 62,158" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M88,48 L126,116 L126,158" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <text x="96" y="98" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <path d="M126,116 C136,130 118,148 130,172" stroke="#D2E823" strokeWidth="2" />

          <line x1="62" y1="154" x2="138" y2="154" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <polyline points="88,60 36,60 36,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">KIMONO WRAP FRONT</text>

          
          <polyline points="128,135 160,135 160,154" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="156" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="164.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INDUSTRIAL TIE TAPE</text>
        </svg>
    ),
    "oversized-poplin-shirt": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,42 32,74 42,84 62,64 62,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,42 168,74 158,84 138,64 138,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <path d="M62,42 L138,42 L140,148 Q100,166 60,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="96" y="42" width="8" height="114" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="54" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <polygon points="100,46 76,36 84,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,46 124,36 116,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M68,70 L90,70 L90,98 L79,104 L68,98 Z" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="62,58 28,58 28,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="26" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="34.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED YOKE 62CM</text>

          
          <polyline points="136,146 164,146 164,164" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="166" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="174.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CURVED SHIRTTAIL</text>
        </svg>
    ),
    "acid-1006": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,42 32,74 42,84 62,64 62,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,42 168,74 158,84 138,64 138,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <path d="M62,42 L138,42 L140,148 Q100,166 60,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="96" y="42" width="8" height="114" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="54" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <polygon points="100,46 76,36 84,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,46 124,36 116,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M68,70 L90,70 L90,98 L79,104 L68,98 Z" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="62,58 28,58 28,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="26" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="34.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED YOKE 62CM</text>

          
          <polyline points="136,146 164,146 164,164" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="166" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="174.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CURVED SHIRTTAIL</text>
        </svg>
    ),
    "1006": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,42 32,74 42,84 62,64 62,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,42 168,74 158,84 138,64 138,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <path d="M62,42 L138,42 L140,148 Q100,166 60,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="96" y="42" width="8" height="114" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="54" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <polygon points="100,46 76,36 84,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,46 124,36 116,46" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M68,70 L90,70 L90,98 L79,104 L68,98 Z" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="62,58 28,58 28,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="26" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="34.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED YOKE 62CM</text>

          
          <polyline points="136,146 164,146 164,164" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="166" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="174.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CURVED SHIRTTAIL</text>
        </svg>
    ),
    "geometric-panel-button-down": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,44 36,72 46,82 64,62 64,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,44 164,72 154,82 136,62 136,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,44 134,44 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="44" x2="100" y2="154" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 78,38 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 122,38 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M66,74 L100,108 L134,74" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="100" y="132" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="124,82 158,82 158,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="112" y="46" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="116" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">45° ANGULAR SEAM</text>

          
          <polyline points="100,110 40,110 40,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="8" y="78" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="12" y="86.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FLY FRONT PLACKET</text>
        </svg>
    ),
    "acid-1007": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,44 36,72 46,82 64,62 64,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,44 164,72 154,82 136,62 136,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,44 134,44 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="44" x2="100" y2="154" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 78,38 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 122,38 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M66,74 L100,108 L134,74" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="100" y="132" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="124,82 158,82 158,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="112" y="46" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="116" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">45° ANGULAR SEAM</text>

          
          <polyline points="100,110 40,110 40,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="8" y="78" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="12" y="86.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FLY FRONT PLACKET</text>
        </svg>
    ),
    "1007": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,44 36,72 46,82 64,62 64,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,44 164,72 154,82 136,62 136,122" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="66,44 134,44 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="44" x2="100" y2="154" stroke="#52525B" strokeWidth="1.5" />

          
          <polygon points="100,48 78,38 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 122,38 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <path d="M66,74 L100,108 L134,74" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="100" y="132" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="124,82 158,82 158,58" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="112" y="46" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="116" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">45° ANGULAR SEAM</text>

          
          <polyline points="100,110 40,110 40,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="8" y="78" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="12" y="86.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FLY FRONT PLACKET</text>
        </svg>
    ),
    "silk-utility-shirt": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,74 46,84 64,64 64,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,74 154,84 136,64 136,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <rect x="42" y="80" width="10" height="4" fill="#D2E823" />
          <rect x="148" y="80" width="10" height="4" fill="#D2E823" />

          
          <polygon points="66,46 134,46 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="46" x2="100" y2="154" stroke="#3F3F46" strokeWidth="1.2" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="138" r="1.5" fill="#D2E823" />

          
          <polygon points="100,50 78,38 88,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,50 122,38 112,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="70" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="68" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="108" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="148,80 166,80 166,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="118" y="42" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="122" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TAB SLEEVES</text>

          
          <polyline points="68,88 34,88 34,112" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="114" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="122.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL BELLOWS BAYS</text>
        </svg>
    ),
    "acid-1008": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,74 46,84 64,64 64,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,74 154,84 136,64 136,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <rect x="42" y="80" width="10" height="4" fill="#D2E823" />
          <rect x="148" y="80" width="10" height="4" fill="#D2E823" />

          
          <polygon points="66,46 134,46 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="46" x2="100" y2="154" stroke="#3F3F46" strokeWidth="1.2" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="138" r="1.5" fill="#D2E823" />

          
          <polygon points="100,50 78,38 88,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,50 122,38 112,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="70" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="68" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="108" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="148,80 166,80 166,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="118" y="42" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="122" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TAB SLEEVES</text>

          
          <polyline points="68,88 34,88 34,112" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="114" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="122.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL BELLOWS BAYS</text>
        </svg>
    ),
    "1008": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="66,46 36,74 46,84 64,64 64,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="134,46 164,74 154,84 136,64 136,124" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <rect x="42" y="80" width="10" height="4" fill="#D2E823" />
          <rect x="148" y="80" width="10" height="4" fill="#D2E823" />

          
          <polygon points="66,46 134,46 138,154 62,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="100" y1="46" x2="100" y2="154" stroke="#3F3F46" strokeWidth="1.2" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="138" r="1.5" fill="#D2E823" />

          
          <polygon points="100,50 78,38 88,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,50 122,38 112,50" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="70" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <rect x="68" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <rect x="108" y="76" width="24" height="26" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="148,80 166,80 166,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="118" y="42" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="122" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TAB SLEEVES</text>

          
          <polyline points="68,88 34,88 34,112" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="114" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="122.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL BELLOWS BAYS</text>
        </svg>
    ),
    "asymmetric-collar-tunic": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 140,172 60,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,44 L80,34 L114,38 L118,44" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="114" y1="44" x2="114" y2="172" stroke="#D2E823" strokeWidth="1.2" />
          <circle cx="114" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="76" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="136" r="1.5" fill="#D2E823" />

          
          <text x="96" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="114,76 156,76 156,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="42" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">OFFSET PLACKET</text>

          
          <polyline points="60,150 32,150 32,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HIGH SIDE SPLIT 24CM</text>
        </svg>
    ),
    "acid-1009": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 140,172 60,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,44 L80,34 L114,38 L118,44" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="114" y1="44" x2="114" y2="172" stroke="#D2E823" strokeWidth="1.2" />
          <circle cx="114" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="76" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="136" r="1.5" fill="#D2E823" />

          
          <text x="96" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="114,76 156,76 156,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="42" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">OFFSET PLACKET</text>

          
          <polyline points="60,150 32,150 32,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HIGH SIDE SPLIT 24CM</text>
        </svg>
    ),
    "1009": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="68,44 38,70 48,144 62,142 66,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="132,44 162,70 152,144 138,142 134,80" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="68,44 132,44 140,172 60,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,44 L80,34 L114,38 L118,44" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="114" y1="44" x2="114" y2="172" stroke="#D2E823" strokeWidth="1.2" />
          <circle cx="114" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="76" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="114" cy="136" r="1.5" fill="#D2E823" />

          
          <text x="96" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="114,76 156,76 156,54" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="42" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="50.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">OFFSET PLACKET</text>

          
          <polyline points="60,150 32,150 32,130" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">HIGH SIDE SPLIT 24CM</text>
        </svg>
    ),
    "boxy-camp-collar-shirt": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 26,72 38,94 62,82 62,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,44 174,72 162,94 138,82 138,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,44 136,44 138,148 62,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="100,60 76,42 90,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="100,60 124,42 110,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="60" x2="100" y2="148" stroke="#52525B" strokeWidth="1.5" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="76,42 34,42 34,62" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="65" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="73.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CAMP NOTCH COLLAR</text>

          
          <polyline points="138,144 166,144 166,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="108" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="116.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SQUARE HEM CUT</text>
        </svg>
    ),
    "acid-1010": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 26,72 38,94 62,82 62,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,44 174,72 162,94 138,82 138,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,44 136,44 138,148 62,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="100,60 76,42 90,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="100,60 124,42 110,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="60" x2="100" y2="148" stroke="#52525B" strokeWidth="1.5" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="76,42 34,42 34,62" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="65" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="73.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CAMP NOTCH COLLAR</text>

          
          <polyline points="138,144 166,144 166,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="108" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="116.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SQUARE HEM CUT</text>
        </svg>
    ),
    "1010": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 26,72 38,94 62,82 62,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,44 174,72 162,94 138,82 138,148" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,44 136,44 138,148 62,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <polygon points="100,60 76,42 90,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <polygon points="100,60 124,42 110,58" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="60" x2="100" y2="148" stroke="#52525B" strokeWidth="1.5" />
          <circle cx="100" cy="74" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="114" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="134" r="1.5" fill="#D2E823" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="76,42 34,42 34,62" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="65" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="73.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CAMP NOTCH COLLAR</text>

          
          <polyline points="138,144 166,144 166,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="108" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="116.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SQUARE HEM CUT</text>
        </svg>
    ),
    "translucent-layering-shirt": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 34,74 44,84 62,64 62,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />
          <polygon points="136,44 166,74 156,84 138,64 138,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <path d="M64,44 L136,44 L138,150 Q100,164 62,150 Z" fill="#1A1B20" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <rect x="96" y="44" width="8" height="112" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="136" r="1.5" fill="#D2E823" />

          
          <polygon points="100,48 80,40 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 120,40 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="66,90 28,90 28,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="54" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="62.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOUND FRENCH SEAMS</text>

          
          <polyline points="156,80 176,80 176,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-BUTTON CUFF 8CM</text>
        </svg>
    ),
    "acid-1011": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 34,74 44,84 62,64 62,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />
          <polygon points="136,44 166,74 156,84 138,64 138,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <path d="M64,44 L136,44 L138,150 Q100,164 62,150 Z" fill="#1A1B20" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <rect x="96" y="44" width="8" height="112" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="136" r="1.5" fill="#D2E823" />

          
          <polygon points="100,48 80,40 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 120,40 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="66,90 28,90 28,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="54" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="62.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOUND FRENCH SEAMS</text>

          
          <polyline points="156,80 176,80 176,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-BUTTON CUFF 8CM</text>
        </svg>
    ),
    "1011": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,44 34,74 44,84 62,64 62,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />
          <polygon points="136,44 166,74 156,84 138,64 138,122" fill="#17181C" stroke="#52525B" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <path d="M64,44 L136,44 L138,150 Q100,164 62,150 Z" fill="#1A1B20" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <rect x="96" y="44" width="8" height="112" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <circle cx="100" cy="56" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="116" r="1.5" fill="#D2E823" />
          <circle cx="100" cy="136" r="1.5" fill="#D2E823" />

          
          <polygon points="100,48 80,40 86,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="100,48 120,40 114,48" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="66,90 28,90 28,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="54" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="62.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOUND FRENCH SEAMS</text>

          
          <polyline points="156,80 176,80 176,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-BUTTON CUFF 8CM</text>
        </svg>
    ),
    "structured-scuba-hoodie": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <line x1="28" y1="102" x2="48" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="172" y1="102" x2="152" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <polygon points="62,48 138,48 142,154 58,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,54 C74,28 100,24 100,24 C100,24 126,28 122,54 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <path d="M82,54 Q100,66 118,54" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M76,118 L124,118 L130,148 L70,148 Z" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,24 152,24 152,44" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="46" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SCULPTURAL HOOD</text>

          
          <polyline points="76,128 34,128 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INSET KANGAROO BAY</text>
        </svg>
    ),
    "acid-1012": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <line x1="28" y1="102" x2="48" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="172" y1="102" x2="152" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <polygon points="62,48 138,48 142,154 58,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,54 C74,28 100,24 100,24 C100,24 126,28 122,54 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <path d="M82,54 Q100,66 118,54" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M76,118 L124,118 L130,148 L70,148 Z" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,24 152,24 152,44" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="46" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SCULPTURAL HOOD</text>

          
          <polyline points="76,128 34,128 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INSET KANGAROO BAY</text>
        </svg>
    ),
    "1012": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <line x1="28" y1="102" x2="48" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="172" y1="102" x2="152" y2="100" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <polygon points="62,48 138,48 142,154 58,154" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,54 C74,28 100,24 100,24 C100,24 126,28 122,54 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <path d="M82,54 Q100,66 118,54" stroke="#F8F4E8" strokeWidth="1.5" />

          
          <path d="M76,118 L124,118 L130,148 L70,148 Z" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,24 152,24 152,44" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="46" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="54.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SCULPTURAL HOOD</text>

          
          <polyline points="76,128 34,128 34,148" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="150" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="158.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">INSET KANGAROO BAY</text>
        </svg>
    ),
    "brushed-cotton-mock-neck": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,48 28,74 42,142 58,138 60,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,48 172,74 158,142 142,138 140,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,48 136,48 140,152 60,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="84" y="32" width="32" height="16" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="48" x2="100" y2="152" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,40 38,40 38,60" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="62" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="70.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOCK COLLAR 4.5CM</text>

          
          <polyline points="100,120 150,120 150,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="142" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="150.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SPINE SEAM</text>
        </svg>
    ),
    "acid-1013": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,48 28,74 42,142 58,138 60,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,48 172,74 158,142 142,138 140,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,48 136,48 140,152 60,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="84" y="32" width="32" height="16" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="48" x2="100" y2="152" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,40 38,40 38,60" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="62" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="70.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOCK COLLAR 4.5CM</text>

          
          <polyline points="100,120 150,120 150,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="142" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="150.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SPINE SEAM</text>
        </svg>
    ),
    "1013": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,48 28,74 42,142 58,138 60,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="136,48 172,74 158,142 142,138 140,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="64,48 136,48 140,152 60,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="84" y="32" width="32" height="16" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="48" x2="100" y2="152" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,40 38,40 38,60" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="62" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="70.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MOCK COLLAR 4.5CM</text>

          
          <polyline points="100,120 150,120 150,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="142" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="150.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SPINE SEAM</text>
        </svg>
    ),
    "heavyweight-graphic-tee": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 176,74 154,98 138,86 138,158 62,158 62,86 46,98 24,74" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,40 C84,52 116,52 116,40" stroke="#52525B" strokeWidth="3" />

          
          <rect x="74" y="78" width="52" height="34" fill="#121316" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="12" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>
          <text x="100" y="104" fill="#F8F4E8" fontSize="4" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">SYSTEMS</text>

          
          <polyline points="138,86 168,86 168,110" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="112" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="120.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DROP SHOULDER 24CM</text>

          
          <polyline points="62,154 30,154 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TWIN-NEEDLE HEM</text>
        </svg>
    ),
    "acid-1014": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 176,74 154,98 138,86 138,158 62,158 62,86 46,98 24,74" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,40 C84,52 116,52 116,40" stroke="#52525B" strokeWidth="3" />

          
          <rect x="74" y="78" width="52" height="34" fill="#121316" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="12" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>
          <text x="100" y="104" fill="#F8F4E8" fontSize="4" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">SYSTEMS</text>

          
          <polyline points="138,86 168,86 168,110" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="112" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="120.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DROP SHOULDER 24CM</text>

          
          <polyline points="62,154 30,154 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TWIN-NEEDLE HEM</text>
        </svg>
    ),
    "1014": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 176,74 154,98 138,86 138,158 62,158 62,86 46,98 24,74" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,40 C84,52 116,52 116,40" stroke="#52525B" strokeWidth="3" />

          
          <rect x="74" y="78" width="52" height="34" fill="#121316" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 2" />

          
          <text x="100" y="96" fill="#D2E823" fontSize="12" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>
          <text x="100" y="104" fill="#F8F4E8" fontSize="4" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">SYSTEMS</text>

          
          <polyline points="138,86 168,86 168,110" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="112" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="120.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DROP SHOULDER 24CM</text>

          
          <polyline points="62,154 30,154 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TWIN-NEEDLE HEM</text>
        </svg>
    ),
    "distressed-knit-sweater": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,44 22,76 36,150 54,146 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,44 178,76 164,150 146,146 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,44 138,44 142,156 58,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M82,44 C82,56 118,56 118,44" stroke="#52525B" strokeWidth="2.5" />

          
          <line x1="72" y1="84" x2="88" y2="84" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="114" y1="120" x2="132" y2="120" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <text x="100" y="104" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,84 34,84 34,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">LADDER DISTRESSING</text>

          
          <polyline points="134,154 164,154 164,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">RAW FRAYED HEM</text>
        </svg>
    ),
    "acid-1015": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,44 22,76 36,150 54,146 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,44 178,76 164,150 146,146 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,44 138,44 142,156 58,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M82,44 C82,56 118,56 118,44" stroke="#52525B" strokeWidth="2.5" />

          
          <line x1="72" y1="84" x2="88" y2="84" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="114" y1="120" x2="132" y2="120" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <text x="100" y="104" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,84 34,84 34,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">LADDER DISTRESSING</text>

          
          <polyline points="134,154 164,154 164,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">RAW FRAYED HEM</text>
        </svg>
    ),
    "1015": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,44 22,76 36,150 54,146 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,44 178,76 164,150 146,146 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,44 138,44 142,156 58,156" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M82,44 C82,56 118,56 118,44" stroke="#52525B" strokeWidth="2.5" />

          
          <line x1="72" y1="84" x2="88" y2="84" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />
          <line x1="114" y1="120" x2="132" y2="120" stroke="#D2E823" strokeWidth="1" strokeDasharray="2 1" />

          
          <text x="100" y="104" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="84,84 34,84 34,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="106" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="114.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">LADDER DISTRESSING</text>

          
          <polyline points="134,154 164,154 164,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">RAW FRAYED HEM</text>
        </svg>
    ),
    "oversized-french-terry-crewneck": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,46 26,74 40,140 58,136 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,46 174,74 160,140 142,136 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,46 138,46 140,146 60,146" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,46 C84,56 116,56 116,46" stroke="#52525B" strokeWidth="2.5" />
          <polygon points="94,56 106,56 100,66" fill="none" stroke="#D2E823" strokeWidth="1" />

          
          <rect x="60" y="146" width="80" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,66 144,66 144,84" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="86" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="94.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">V-STITCH GUSSET</text>

          
          <polyline points="60,152 30,152 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">7CM RIBBED HEM</text>
        </svg>
    ),
    "acid-1016": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,46 26,74 40,140 58,136 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,46 174,74 160,140 142,136 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,46 138,46 140,146 60,146" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,46 C84,56 116,56 116,46" stroke="#52525B" strokeWidth="2.5" />
          <polygon points="94,56 106,56 100,66" fill="none" stroke="#D2E823" strokeWidth="1" />

          
          <rect x="60" y="146" width="80" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,66 144,66 144,84" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="86" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="94.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">V-STITCH GUSSET</text>

          
          <polyline points="60,152 30,152 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">7CM RIBBED HEM</text>
        </svg>
    ),
    "1016": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,46 26,74 40,140 58,136 58,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,46 174,74 160,140 142,136 142,88" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,46 138,46 140,146 60,146" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M84,46 C84,56 116,56 116,46" stroke="#52525B" strokeWidth="2.5" />
          <polygon points="94,56 106,56 100,66" fill="none" stroke="#D2E823" strokeWidth="1" />

          
          <rect x="60" y="146" width="80" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <text x="100" y="100" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="100,66 144,66 144,84" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="86" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="94.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">V-STITCH GUSSET</text>

          
          <polyline points="60,152 30,152 30,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">7CM RIBBED HEM</text>
        </svg>
    ),
    "panelled-zip-up-hoodie": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,48 138,48 142,148 58,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,50 C74,26 100,24 100,24 C100,24 126,26 122,50 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="50" x2="100" y2="156" stroke="#F8F4E8" strokeWidth="1.2" />
          <rect x="97" y="96" width="6" height="8" fill="#D2E823" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polygon points="64,116 94,116 94,148 60,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="136,116 106,116 106,148 140,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="100,24 150,24 150,46" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="48" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="56.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3-PANEL APEX HOOD</text>

          
          <polyline points="97,100 44,100 44,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="124" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="132.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-WAY METAL ZIP</text>
        </svg>
    ),
    "acid-1017": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,48 138,48 142,148 58,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,50 C74,26 100,24 100,24 C100,24 126,26 122,50 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="50" x2="100" y2="156" stroke="#F8F4E8" strokeWidth="1.2" />
          <rect x="97" y="96" width="6" height="8" fill="#D2E823" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polygon points="64,116 94,116 94,148 60,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="136,116 106,116 106,148 140,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="100,24 150,24 150,46" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="48" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="56.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3-PANEL APEX HOOD</text>

          
          <polyline points="97,100 44,100 44,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="124" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="132.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-WAY METAL ZIP</text>
        </svg>
    ),
    "1017": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,48 24,78 38,138 56,134 58,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />
          <polygon points="138,48 176,78 162,138 144,134 142,90" fill="#17181C" stroke="#3F3F46" strokeWidth="1.5" />

          
          <polygon points="62,48 138,48 142,148 58,148" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M78,50 C74,26 100,24 100,24 C100,24 126,26 122,50 Z" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="100" y1="50" x2="100" y2="156" stroke="#F8F4E8" strokeWidth="1.2" />
          <rect x="97" y="96" width="6" height="8" fill="#D2E823" />

          
          <text x="100" y="86" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polygon points="64,116 94,116 94,148 60,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="136,116 106,116 106,148 140,148" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />

          
          <polyline points="100,24 150,24 150,46" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="48" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="56.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">3-PANEL APEX HOOD</text>

          
          <polyline points="97,100 44,100 44,122" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="124" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="132.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">2-WAY METAL ZIP</text>
        </svg>
    ),
    "wide-leg-technical-trousers": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,32 138,32 148,172 112,172 100,82 88,172 52,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="32" width="76" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="56" y1="112" x2="94" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="56" y1="116" x2="94" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="112" x2="144" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="116" x2="144" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="74" y="85" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <line x1="136" y1="44" x2="128" y2="68" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="94,114 150,114 150,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="76" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="84.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL KNEE DARTS</text>

          
          <polyline points="132,56 162,56 162,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="24" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="32.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CONCEALED ZIP BAY</text>
        </svg>
    ),
    "acid-1018": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,32 138,32 148,172 112,172 100,82 88,172 52,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="32" width="76" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="56" y1="112" x2="94" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="56" y1="116" x2="94" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="112" x2="144" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="116" x2="144" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="74" y="85" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <line x1="136" y1="44" x2="128" y2="68" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="94,114 150,114 150,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="76" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="84.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL KNEE DARTS</text>

          
          <polyline points="132,56 162,56 162,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="24" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="32.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CONCEALED ZIP BAY</text>
        </svg>
    ),
    "1018": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,32 138,32 148,172 112,172 100,82 88,172 52,172" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="32" width="76" height="10" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="56" y1="112" x2="94" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="56" y1="116" x2="94" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="112" x2="144" y2="112" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />
          <line x1="106" y1="116" x2="144" y2="116" stroke="#D2E823" strokeWidth="1.2" strokeDasharray="3 2" />

          
          <text x="74" y="85" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <line x1="136" y1="44" x2="128" y2="68" stroke="#52525B" strokeWidth="1.5" />

          
          <polyline points="94,114 150,114 150,90" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="76" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="84.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DUAL KNEE DARTS</text>

          
          <polyline points="132,56 162,56 162,38" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="24" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="32.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CONCEALED ZIP BAY</text>
        </svg>
    ),
    "pleated-wool-trousers": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,30 138,30 144,166 115,166 100,76 85,166 56,166" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="30" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="78" y1="42" x2="68" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="122" y1="42" x2="132" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="56" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <rect x="115" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="126" y="82" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <polyline points="78,42 36,42 36,66" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="68" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DOUBLE BOX PLEATS</text>

          
          <polyline points="115,160 160,160 160,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="126" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TURN-UP CUFF 4CM</text>
        </svg>
    ),
    "acid-1019": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,30 138,30 144,166 115,166 100,76 85,166 56,166" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="30" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="78" y1="42" x2="68" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="122" y1="42" x2="132" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="56" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <rect x="115" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="126" y="82" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <polyline points="78,42 36,42 36,66" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="68" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DOUBLE BOX PLEATS</text>

          
          <polyline points="115,160 160,160 160,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="126" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TURN-UP CUFF 4CM</text>
        </svg>
    ),
    "1019": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,30 138,30 144,166 115,166 100,76 85,166 56,166" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="30" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <line x1="78" y1="42" x2="68" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="122" y1="42" x2="132" y2="166" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <rect x="56" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />
          <rect x="115" y="156" width="29" height="10" fill="#22232A" stroke="#52525B" strokeWidth="1" />

          
          <text x="126" y="82" fill="#D2E823" fontSize="9" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1.5">ACID</text>

          
          <polyline points="78,42 36,42 36,66" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="68" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DOUBLE BOX PLEATS</text>

          
          <polyline points="115,160 160,160 160,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="126" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TURN-UP CUFF 4CM</text>
        </svg>
    ),
    "cargo-parachute-pants": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M62,34 L138,34 L152,112 L140,170 L114,170 L100,80 L86,170 L60,170 L48,112 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="34" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <path d="M96,46 C94,54 92,58 90,62" stroke="#D2E823" strokeWidth="1.5" />
          <path d="M104,46 C106,54 108,58 110,62" stroke="#D2E823" strokeWidth="1.5" />

          
          <rect x="46" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="46,86 62,86 60,94 48,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="138" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="138,86 154,86 152,94 140,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="76" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="60" cy="168" r="2" fill="#D2E823" />
          <circle cx="140" cy="168" r="2" fill="#D2E823" />

          
          <polyline points="46,102 18,102 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="126" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BELLOWS CARGO BAY</text>

          
          <polyline points="140,168 166,168 166,146" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="132" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANKLE BUNGEE CINCH</text>
        </svg>
    ),
    "acid-1020": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M62,34 L138,34 L152,112 L140,170 L114,170 L100,80 L86,170 L60,170 L48,112 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="34" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <path d="M96,46 C94,54 92,58 90,62" stroke="#D2E823" strokeWidth="1.5" />
          <path d="M104,46 C106,54 108,58 110,62" stroke="#D2E823" strokeWidth="1.5" />

          
          <rect x="46" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="46,86 62,86 60,94 48,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="138" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="138,86 154,86 152,94 140,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="76" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="60" cy="168" r="2" fill="#D2E823" />
          <circle cx="140" cy="168" r="2" fill="#D2E823" />

          
          <polyline points="46,102 18,102 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="126" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BELLOWS CARGO BAY</text>

          
          <polyline points="140,168 166,168 166,146" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="132" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANKLE BUNGEE CINCH</text>
        </svg>
    ),
    "1020": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M62,34 L138,34 L152,112 L140,170 L114,170 L100,80 L86,170 L60,170 L48,112 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="34" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <path d="M96,46 C94,54 92,58 90,62" stroke="#D2E823" strokeWidth="1.5" />
          <path d="M104,46 C106,54 108,58 110,62" stroke="#D2E823" strokeWidth="1.5" />

          
          <rect x="46" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="46,86 62,86 60,94 48,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="138" y="86" width="16" height="34" fill="#17181C" stroke="#52525B" strokeWidth="1.2" />
          <polygon points="138,86 154,86 152,94 140,94" fill="#24262E" stroke="#52525B" strokeWidth="1" />

          
          <text x="100" y="76" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <circle cx="60" cy="168" r="2" fill="#D2E823" />
          <circle cx="140" cy="168" r="2" fill="#D2E823" />

          
          <polyline points="46,102 18,102 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="126" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BELLOWS CARGO BAY</text>

          
          <polyline points="140,168 166,168 166,146" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="132" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="140.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANKLE BUNGEE CINCH</text>
        </svg>
    ),
    "asymmetric-skort": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,42 136,42 148,136 116,136 100,85 84,136 52,136" fill="#17181C" stroke="#3F3F46" strokeWidth="1.2" />

          
          <polygon points="64,42 136,42 152,142 80,148 64,115" fill="#1C1D22" stroke="#F8F4E8" strokeWidth="1.75" />

          
          <line x1="64" y1="56" x2="105" y2="56" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="52" width="10" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <line x1="120" y1="56" x2="136" y2="144" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,56 28,56 28,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TENSION STRAP 25MM</text>

          
          <polyline points="152,142 168,142 168,118" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="104" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="112.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP APRON</text>
        </svg>
    ),
    "acid-1021": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,42 136,42 148,136 116,136 100,85 84,136 52,136" fill="#17181C" stroke="#3F3F46" strokeWidth="1.2" />

          
          <polygon points="64,42 136,42 152,142 80,148 64,115" fill="#1C1D22" stroke="#F8F4E8" strokeWidth="1.75" />

          
          <line x1="64" y1="56" x2="105" y2="56" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="52" width="10" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <line x1="120" y1="56" x2="136" y2="144" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,56 28,56 28,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TENSION STRAP 25MM</text>

          
          <polyline points="152,142 168,142 168,118" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="104" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="112.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP APRON</text>
        </svg>
    ),
    "1021": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="64,42 136,42 148,136 116,136 100,85 84,136 52,136" fill="#17181C" stroke="#3F3F46" strokeWidth="1.2" />

          
          <polygon points="64,42 136,42 152,142 80,148 64,115" fill="#1C1D22" stroke="#F8F4E8" strokeWidth="1.75" />

          
          <line x1="64" y1="56" x2="105" y2="56" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="52" width="10" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <line x1="120" y1="56" x2="136" y2="144" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="105" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,56 28,56 28,78" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="80" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="88.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">TENSION STRAP 25MM</text>

          
          <polyline points="152,142 168,142 168,118" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="104" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="112.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ASYM WRAP APRON</text>
        </svg>
    ),
    "tailored-bermuda-shorts": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 154,142 114,142 100,82 86,142 46,142" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="40" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="134" y="40" width="8" height="12" fill="#3F3F46" stroke="#52525B" strokeWidth="1" />
          <circle cx="138" cy="46" r="1.5" fill="#D2E823" />

          <rect x="70" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="96" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="122" y="38" width="4" height="16" fill="#3F3F46" />

          
          <line x1="82" y1="52" x2="74" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="118" y1="52" x2="126" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="75" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="138,46 168,46 168,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="70" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED TAB WAIST</text>

          
          <polyline points="46,138 24,138 24,116" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="102" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="110.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">4CM BLIND HEM</text>
        </svg>
    ),
    "acid-1022": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 154,142 114,142 100,82 86,142 46,142" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="40" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="134" y="40" width="8" height="12" fill="#3F3F46" stroke="#52525B" strokeWidth="1" />
          <circle cx="138" cy="46" r="1.5" fill="#D2E823" />

          <rect x="70" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="96" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="122" y="38" width="4" height="16" fill="#3F3F46" />

          
          <line x1="82" y1="52" x2="74" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="118" y1="52" x2="126" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="75" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="138,46 168,46 168,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="70" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED TAB WAIST</text>

          
          <polyline points="46,138 24,138 24,116" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="102" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="110.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">4CM BLIND HEM</text>
        </svg>
    ),
    "1022": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="62,40 138,40 154,142 114,142 100,82 86,142 46,142" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="62" y="40" width="76" height="12" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="134" y="40" width="8" height="12" fill="#3F3F46" stroke="#52525B" strokeWidth="1" />
          <circle cx="138" cy="46" r="1.5" fill="#D2E823" />

          <rect x="70" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="96" y="38" width="4" height="16" fill="#3F3F46" />
          <rect x="122" y="38" width="4" height="16" fill="#3F3F46" />

          
          <line x1="82" y1="52" x2="74" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="118" y1="52" x2="126" y2="142" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="75" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="138,46 168,46 168,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="70" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">EXTENDED TAB WAIST</text>

          
          <polyline points="46,138 24,138 24,116" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="102" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="110.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">4CM BLIND HEM</text>
        </svg>
    ),
    "flared-denim-jeans": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M64,36 L136,36 L132,96 L156,172 L114,172 L100,82 L86,172 L44,172 L68,96 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M64,48 Q78,50 82,66" stroke="#52525B" strokeWidth="1.5" />
          <path d="M136,48 Q122,50 118,66" stroke="#52525B" strokeWidth="1.5" />
          <rect x="74" y="50" width="8" height="6" fill="none" stroke="#D2E823" strokeWidth="0.75" />

          
          <path d="M100,48 L100,74 Q94,78 94,68" stroke="#3F3F46" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <line x1="68" y1="104" x2="94" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="104" x2="132" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SCOOP</text>

          
          <polyline points="132,104 168,104 168,82" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="68" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOOTCUT FLARE PIVOT</text>
        </svg>
    ),
    "acid-1023": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M64,36 L136,36 L132,96 L156,172 L114,172 L100,82 L86,172 L44,172 L68,96 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M64,48 Q78,50 82,66" stroke="#52525B" strokeWidth="1.5" />
          <path d="M136,48 Q122,50 118,66" stroke="#52525B" strokeWidth="1.5" />
          <rect x="74" y="50" width="8" height="6" fill="none" stroke="#D2E823" strokeWidth="0.75" />

          
          <path d="M100,48 L100,74 Q94,78 94,68" stroke="#3F3F46" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <line x1="68" y1="104" x2="94" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="104" x2="132" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SCOOP</text>

          
          <polyline points="132,104 168,104 168,82" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="68" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOOTCUT FLARE PIVOT</text>
        </svg>
    ),
    "1023": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M64,36 L136,36 L132,96 L156,172 L114,172 L100,82 L86,172 L44,172 L68,96 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M64,48 Q78,50 82,66" stroke="#52525B" strokeWidth="1.5" />
          <path d="M136,48 Q122,50 118,66" stroke="#52525B" strokeWidth="1.5" />
          <rect x="74" y="50" width="8" height="6" fill="none" stroke="#D2E823" strokeWidth="0.75" />

          
          <path d="M100,48 L100,74 Q94,78 94,68" stroke="#3F3F46" strokeWidth="1.2" strokeDasharray="2 1" />

          
          <line x1="68" y1="104" x2="94" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="106" y1="104" x2="132" y2="104" stroke="#D2E823" strokeWidth="1" strokeDasharray="3 2" />

          
          <text x="100" y="85" fill="#D2E823" fontSize="10" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="64,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">REINFORCED SCOOP</text>

          
          <polyline points="132,104 168,104 168,82" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="68" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="76.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">BOOTCUT FLARE PIVOT</text>
        </svg>
    ),
    "chunky-combat-boots": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="168" x2="180" y2="168" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M48,60 L78,60 L80,95 L112,112 L148,124 L168,138 L168,148 L48,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <circle cx="78" cy="70" r="1.5" fill="#D2E823" />
          <circle cx="80" cy="82" r="1.5" fill="#D2E823" />
          <circle cx="84" cy="94" r="1.5" fill="#D2E823" />
          <circle cx="92" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="104" cy="112" r="1.5" fill="#D2E823" />

          
          <rect x="42" y="148" width="130" height="18" rx="2" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="52" y="162" width="12" height="6" fill="#09090B" />
          <rect x="72" y="162" width="12" height="6" fill="#09090B" />
          <rect x="112" y="162" width="12" height="6" fill="#09090B" />
          <rect x="132" y="162" width="12" height="6" fill="#09090B" />
          <rect x="152" y="162" width="12" height="6" fill="#09090B" />

          
          <text x="64" y="105" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="78,70 34,70 34,50" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="36" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="44.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SPEED HOOKS x6</text>

          
          <polyline points="132,162 166,162 166,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="126" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COMMANDO LUG TREAD</text>
        </svg>
    ),
    "acid-1024": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="168" x2="180" y2="168" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M48,60 L78,60 L80,95 L112,112 L148,124 L168,138 L168,148 L48,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <circle cx="78" cy="70" r="1.5" fill="#D2E823" />
          <circle cx="80" cy="82" r="1.5" fill="#D2E823" />
          <circle cx="84" cy="94" r="1.5" fill="#D2E823" />
          <circle cx="92" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="104" cy="112" r="1.5" fill="#D2E823" />

          
          <rect x="42" y="148" width="130" height="18" rx="2" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="52" y="162" width="12" height="6" fill="#09090B" />
          <rect x="72" y="162" width="12" height="6" fill="#09090B" />
          <rect x="112" y="162" width="12" height="6" fill="#09090B" />
          <rect x="132" y="162" width="12" height="6" fill="#09090B" />
          <rect x="152" y="162" width="12" height="6" fill="#09090B" />

          
          <text x="64" y="105" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="78,70 34,70 34,50" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="36" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="44.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SPEED HOOKS x6</text>

          
          <polyline points="132,162 166,162 166,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="126" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COMMANDO LUG TREAD</text>
        </svg>
    ),
    "1024": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="168" x2="180" y2="168" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M48,60 L78,60 L80,95 L112,112 L148,124 L168,138 L168,148 L48,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <circle cx="78" cy="70" r="1.5" fill="#D2E823" />
          <circle cx="80" cy="82" r="1.5" fill="#D2E823" />
          <circle cx="84" cy="94" r="1.5" fill="#D2E823" />
          <circle cx="92" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="104" cy="112" r="1.5" fill="#D2E823" />

          
          <rect x="42" y="148" width="130" height="18" rx="2" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="52" y="162" width="12" height="6" fill="#09090B" />
          <rect x="72" y="162" width="12" height="6" fill="#09090B" />
          <rect x="112" y="162" width="12" height="6" fill="#09090B" />
          <rect x="132" y="162" width="12" height="6" fill="#09090B" />
          <rect x="152" y="162" width="12" height="6" fill="#09090B" />

          
          <text x="64" y="105" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="78,70 34,70 34,50" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="36" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="44.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">SPEED HOOKS x6</text>

          
          <polyline points="132,162 166,162 166,140" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="126" width="84" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="134.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COMMANDO LUG TREAD</text>
        </svg>
    ),
    "molded-slip-on-mules": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M52,142 C52,130 68,124 84,120 Q106,104 136,108 L168,136 L168,148 L52,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="46" y="148" width="128" height="16" rx="4" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="104" y1="116" x2="108" y2="128" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="114" y1="118" x2="118" y2="130" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="124" y1="122" x2="128" y2="132" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="82" y="138" fill="#D2E823" fontSize="8" fontFamily="monospace" fontWeight="900" letterSpacing="1.5">ACID</text>

          
          <polyline points="136,108 162,108 162,86" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="72" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="80.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MONOBLOC EVA FOAM</text>

          
          <polyline points="52,154 26,154 26,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROCKER BEVEL 12°</text>
        </svg>
    ),
    "acid-1025": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M52,142 C52,130 68,124 84,120 Q106,104 136,108 L168,136 L168,148 L52,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="46" y="148" width="128" height="16" rx="4" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="104" y1="116" x2="108" y2="128" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="114" y1="118" x2="118" y2="130" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="124" y1="122" x2="128" y2="132" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="82" y="138" fill="#D2E823" fontSize="8" fontFamily="monospace" fontWeight="900" letterSpacing="1.5">ACID</text>

          
          <polyline points="136,108 162,108 162,86" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="72" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="80.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MONOBLOC EVA FOAM</text>

          
          <polyline points="52,154 26,154 26,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROCKER BEVEL 12°</text>
        </svg>
    ),
    "1025": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M52,142 C52,130 68,124 84,120 Q106,104 136,108 L168,136 L168,148 L52,148 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <rect x="46" y="148" width="128" height="16" rx="4" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />

          
          <line x1="104" y1="116" x2="108" y2="128" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="114" y1="118" x2="118" y2="130" stroke="#D2E823" strokeWidth="1.2" />
          <line x1="124" y1="122" x2="128" y2="132" stroke="#D2E823" strokeWidth="1.2" />

          
          <text x="82" y="138" fill="#D2E823" fontSize="8" fontFamily="monospace" fontWeight="900" letterSpacing="1.5">ACID</text>

          
          <polyline points="136,108 162,108 162,86" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="72" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="80.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">MONOBLOC EVA FOAM</text>

          
          <polyline points="52,154 26,154 26,132" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="118" width="76" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="126.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROCKER BEVEL 12°</text>
        </svg>
    ),
    "square-toe-leather-derbies": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M42,130 L42,102 Q56,98 74,96 L100,96 Q122,110 152,122 L172,122 L172,142 L42,142 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="172" y1="122" x2="172" y2="142" stroke="#D2E823" strokeWidth="2" />

          
          <path d="M82,94 L114,112" stroke="#52525B" strokeWidth="3" />
          <circle cx="86" cy="98" r="1.5" fill="#D2E823" />
          <circle cx="96" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="106" cy="110" r="1.5" fill="#D2E823" />

          
          <rect x="38" y="142" width="138" height="12" rx="1" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="40" y="154" width="36" height="8" fill="#121316" stroke="#3F3F46" strokeWidth="1.2" />

          
          <text x="64" y="125" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="172,132 172,104 146,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="100" y="92" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="104" y="100.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CHISELED SQUARE TOE</text>

          
          <polyline points="38,145 18,145 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="110" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="118.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">GOODYEAR STORM WELT</text>
        </svg>
    ),
    "acid-1026": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M42,130 L42,102 Q56,98 74,96 L100,96 Q122,110 152,122 L172,122 L172,142 L42,142 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="172" y1="122" x2="172" y2="142" stroke="#D2E823" strokeWidth="2" />

          
          <path d="M82,94 L114,112" stroke="#52525B" strokeWidth="3" />
          <circle cx="86" cy="98" r="1.5" fill="#D2E823" />
          <circle cx="96" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="106" cy="110" r="1.5" fill="#D2E823" />

          
          <rect x="38" y="142" width="138" height="12" rx="1" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="40" y="154" width="36" height="8" fill="#121316" stroke="#3F3F46" strokeWidth="1.2" />

          
          <text x="64" y="125" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="172,132 172,104 146,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="100" y="92" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="104" y="100.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CHISELED SQUARE TOE</text>

          
          <polyline points="38,145 18,145 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="110" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="118.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">GOODYEAR STORM WELT</text>
        </svg>
    ),
    "1026": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="20" y1="165" x2="180" y2="165" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <path d="M42,130 L42,102 Q56,98 74,96 L100,96 Q122,110 152,122 L172,122 L172,142 L42,142 Z" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <line x1="172" y1="122" x2="172" y2="142" stroke="#D2E823" strokeWidth="2" />

          
          <path d="M82,94 L114,112" stroke="#52525B" strokeWidth="3" />
          <circle cx="86" cy="98" r="1.5" fill="#D2E823" />
          <circle cx="96" cy="104" r="1.5" fill="#D2E823" />
          <circle cx="106" cy="110" r="1.5" fill="#D2E823" />

          
          <rect x="38" y="142" width="138" height="12" rx="1" fill="#24262E" stroke="#52525B" strokeWidth="1.5" />
          <rect x="40" y="154" width="36" height="8" fill="#121316" stroke="#3F3F46" strokeWidth="1.2" />

          
          <text x="64" y="125" fill="#D2E823" fontSize="8.5" fontFamily="monospace" fontWeight="900" letterSpacing="1">ACID</text>

          
          <polyline points="172,132 172,104 146,104" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="100" y="92" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="104" y="100.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">CHISELED SQUARE TOE</text>

          
          <polyline points="38,145 18,145 18,124" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="110" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="118.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">GOODYEAR STORM WELT</text>
        </svg>
    ),
    "technical-harness-backpack": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <rect x="65" y="42" width="70" height="116" rx="6" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M68,48 C50,60 50,110 65,142" stroke="#52525B" strokeWidth="4" />
          <path d="M132,48 C150,60 150,110 135,142" stroke="#52525B" strokeWidth="4" />
          <line x1="56" y1="84" x2="144" y2="84" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="80" width="12" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <rect x="65" y="42" width="70" height="14" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <line x1="100" y1="56" x2="100" y2="142" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="115" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="65,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TOP CLOSURE</text>

          
          <polyline points="106,84 154,84 154,64" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="50" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="58.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK STERNUM RIG</text>
        </svg>
    ),
    "acid-1027": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <rect x="65" y="42" width="70" height="116" rx="6" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M68,48 C50,60 50,110 65,142" stroke="#52525B" strokeWidth="4" />
          <path d="M132,48 C150,60 150,110 135,142" stroke="#52525B" strokeWidth="4" />
          <line x1="56" y1="84" x2="144" y2="84" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="80" width="12" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <rect x="65" y="42" width="70" height="14" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <line x1="100" y1="56" x2="100" y2="142" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="115" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="65,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TOP CLOSURE</text>

          
          <polyline points="106,84 154,84 154,64" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="50" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="58.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK STERNUM RIG</text>
        </svg>
    ),
    "1027": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <rect x="65" y="42" width="70" height="116" rx="6" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M68,48 C50,60 50,110 65,142" stroke="#52525B" strokeWidth="4" />
          <path d="M132,48 C150,60 150,110 135,142" stroke="#52525B" strokeWidth="4" />
          <line x1="56" y1="84" x2="144" y2="84" stroke="#D2E823" strokeWidth="1.5" />
          <rect x="94" y="80" width="12" height="8" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <rect x="65" y="42" width="70" height="14" fill="#24262E" stroke="#52525B" strokeWidth="1.2" />

          
          <line x1="100" y1="56" x2="100" y2="142" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="115" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="65,48 30,48 30,68" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="70" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="78.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ROLL-TOP CLOSURE</text>

          
          <polyline points="106,84 154,84 154,64" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="50" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="58.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">FIDLOCK STERNUM RIG</text>
        </svg>
    ),
    "asymmetric-crossbody-bag": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="56,65 146,50 140,136 64,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M42,175 L56,65 L70,30" stroke="#52525B" strokeWidth="5" />
          <path d="M146,50 L160,30" stroke="#52525B" strokeWidth="5" />
          <rect x="134" y="44" width="16" height="10" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <line x1="72" y1="84" x2="134" y2="74" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="146,50 168,50 168,32" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="20" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="28.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COBRA LOCK BUCKLE</text>

          
          <polyline points="134,74 165,74 165,96" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="98" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="106.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANGLED SLING ZIP</text>
        </svg>
    ),
    "acid-1028": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="56,65 146,50 140,136 64,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M42,175 L56,65 L70,30" stroke="#52525B" strokeWidth="5" />
          <path d="M146,50 L160,30" stroke="#52525B" strokeWidth="5" />
          <rect x="134" y="44" width="16" height="10" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <line x1="72" y1="84" x2="134" y2="74" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="146,50 168,50 168,32" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="20" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="28.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COBRA LOCK BUCKLE</text>

          
          <polyline points="134,74 165,74 165,96" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="98" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="106.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANGLED SLING ZIP</text>
        </svg>
    ),
    "1028": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <polygon points="56,65 146,50 140,136 64,152" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />

          
          <path d="M42,175 L56,65 L70,30" stroke="#52525B" strokeWidth="5" />
          <path d="M146,50 L160,30" stroke="#52525B" strokeWidth="5" />
          <rect x="134" y="44" width="16" height="10" fill="#09090B" stroke="#D2E823" strokeWidth="1.2" />

          
          <line x1="72" y1="84" x2="134" y2="74" stroke="#D2E823" strokeWidth="1.5" strokeDasharray="3 2" />

          
          <text x="100" y="112" fill="#D2E823" fontSize="11" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="2">ACID</text>

          
          <polyline points="146,50 168,50 168,32" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="114" y="20" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="118" y="28.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">COBRA LOCK BUCKLE</text>

          
          <polyline points="134,74 165,74 165,96" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="116" y="98" width="78" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="120" y="106.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">ANGLED SLING ZIP</text>
        </svg>
    ),
    "modular-belt-bag": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <line x1="20" y1="98" x2="180" y2="98" stroke="#52525B" strokeWidth="6" />

          
          <rect x="52" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <line x1="56" y1="84" x2="90" y2="84" stroke="#D2E823" strokeWidth="1.5" />

          <rect x="106" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <polygon points="106,74 148,74 142,88 112,88" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="123" y="88" width="8" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <text x="73" y="105" fill="#D2E823" fontSize="7.5" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1">ACID</text>

          
          <polyline points="20,98 20,126 44,126" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="128" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="136.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">50MM NYLON WEBBING</text>

          
          <polyline points="94,84 94,56 120,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="44" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DETACHABLE PODS x2</text>
        </svg>
    ),
    "acid-1029": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <line x1="20" y1="98" x2="180" y2="98" stroke="#52525B" strokeWidth="6" />

          
          <rect x="52" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <line x1="56" y1="84" x2="90" y2="84" stroke="#D2E823" strokeWidth="1.5" />

          <rect x="106" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <polygon points="106,74 148,74 142,88 112,88" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="123" y="88" width="8" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <text x="73" y="105" fill="#D2E823" fontSize="7.5" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1">ACID</text>

          
          <polyline points="20,98 20,126 44,126" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="128" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="136.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">50MM NYLON WEBBING</text>

          
          <polyline points="94,84 94,56 120,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="44" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DETACHABLE PODS x2</text>
        </svg>
    ),
    "1029": (
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 200 200" className={`w-full h-full ${className}`} fill="none">
          <rect width="100%" height="100%" fill="#121316" />
          <pattern id={`dotGrid-${idStr}`} width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
          <rect width="100%" height="100%" fill={`url(#dotGrid-${idStr})`} />

          <line x1="100" y1="20" x2="100" y2="185" stroke="#27272A" strokeDasharray="3 3" strokeWidth="1" />

          
          <line x1="20" y1="98" x2="180" y2="98" stroke="#52525B" strokeWidth="6" />

          
          <rect x="52" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <line x1="56" y1="84" x2="90" y2="84" stroke="#D2E823" strokeWidth="1.5" />

          <rect x="106" y="74" width="42" height="48" rx="3" fill="#1C1D22" stroke="#3F3F46" strokeWidth="1.75" />
          <polygon points="106,74 148,74 142,88 112,88" fill="#24262E" stroke="#52525B" strokeWidth="1" />
          <rect x="123" y="88" width="8" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="1" />

          
          <text x="73" y="105" fill="#D2E823" fontSize="7.5" fontFamily="monospace" fontWeight="900" textAnchor="middle" letterSpacing="1">ACID</text>

          
          <polyline points="20,98 20,126 44,126" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="6" y="128" width="80" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="10" y="136.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">50MM NYLON WEBBING</text>

          
          <polyline points="94,84 94,56 120,56" stroke="#D2E823" strokeWidth="0.75" strokeDasharray="2 2" />
          <rect x="110" y="44" width="82" height="12" fill="#09090B" stroke="#D2E823" strokeWidth="0.75" />
          <text x="114" y="52.5" fill="#D2E823" fontSize="6" fontFamily="monospace" fontWeight="bold">DETACHABLE PODS x2</text>
        </svg>
    ),
  };

  let content = illustrations[idStr];
  if (!content) {
    const foundKey = Object.keys(illustrations).find(k => k.includes(idStr) || idStr.includes(k));
    if (foundKey) {
      content = illustrations[foundKey];
    }
  }

  if (content) {
    return content;
  }

  return (
    <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" className={`w-full h-full ${className}`} fill="none">
      <rect width="100%" height="100%" fill="#121316" />
      <pattern id="dotGridFb" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" opacity="0.15" /></pattern>
      <rect width="100%" height="100%" fill="url(#dotGridFb)" />
      
      {/* Corner crosshairs */}
      <path d="M10,10 L20,10 M10,10 L10,20" stroke="#3F3F46" strokeWidth="1" />
      <path d="M190,10 L180,10 M190,10 L190,20" stroke="#3F3F46" strokeWidth="1" />
      <path d="M10,190 L20,190 M10,190 L10,180" stroke="#3F3F46" strokeWidth="1" />
      <path d="M190,190 L180,190 M190,190 L190,180" stroke="#3F3F46" strokeWidth="1" />
      
      <text x="100" y="100" fill="#3F3F46" fontSize="10" fontFamily="monospace" textAnchor="middle">NO CAD FOR {idStr.toUpperCase()}</text>
    </svg>
  );
};
