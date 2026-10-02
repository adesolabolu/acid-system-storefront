import React from 'react';

interface CadSchematicProps {
  type: string;
  className?: string;
  telemetrySpec?: string;
}

export function CadSchematic({ type, className = '', telemetrySpec = '0-BLUR/4PX' }: CadSchematicProps) {
  // SVG paths for abstract CAD representation
  const paths: Record<string, string> = {
    blz: "M 20 20 L 80 20 L 90 40 L 90 90 L 10 90 L 10 40 Z M 45 20 L 45 90 M 55 20 L 55 90", // Blazer
    cot: "M 15 15 L 85 15 L 95 50 L 90 95 L 10 95 L 5 50 Z M 50 15 L 50 95", // Coat
    sht: "M 25 15 L 75 15 L 85 35 L 85 85 L 15 85 L 15 35 Z M 50 15 L 50 85 M 40 15 L 60 15", // Shirt
    tee: "M 20 25 L 80 25 L 90 50 L 80 55 L 80 90 L 20 90 L 20 55 L 10 50 Z", // Tee/Hoodie
    trs: "M 30 10 L 70 10 L 80 90 L 55 90 L 50 40 L 45 90 L 20 90 Z M 35 10 L 35 90 M 65 10 L 65 90", // Trousers
    srt: "M 25 15 L 75 15 L 85 60 L 55 60 L 50 35 L 45 60 L 15 60 Z", // Shorts
    ftw: "M 15 60 C 15 40 40 40 60 40 L 85 50 L 90 85 L 10 85 Z M 15 75 L 90 75", // Footwear
    rig: "M 30 20 L 70 20 L 75 80 L 25 80 Z M 20 30 L 80 30 M 40 20 L 40 80 M 60 20 L 60 80", // Rig
  };

  const d = paths[type] || paths.tee; // Fallback to tee

  return (
    <div className={`relative bg-[#121316] w-full aspect-square overflow-hidden border border-[#333] ${className}`}>
      {/* Radial dot grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#D2E823 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}
      />

      {/* Dashed Centerline Axis */}
      <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[#333] -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#333] -translate-y-1/2 pointer-events-none" />

      {/* Vector Drawing */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full p-4"
        fill="none"
        stroke="#D2E823"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d={d} className="animate-pulse" />
      </svg>

      {/* Telemetry Spec Badge */}
      <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-[#D2E823] text-[#121316] text-[10px] font-mono font-bold leading-none uppercase z-10 shadow-hard-sm">
        SPEC:{telemetrySpec}
      </div>
    </div>
  );
}
