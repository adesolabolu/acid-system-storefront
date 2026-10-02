"use client";
import React, { useState } from 'react';
import { Check, Copy, Sliders, RefreshCw, Zap } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const SpecificationLaboratory: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [shadowSize, setShadowSize] = useState<number>(4);
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [buttonPressed, setButtonPressed] = useState<boolean>(false);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const tokens = [
    { name: 'CANVAS PAPER', hex: '#F8F4E8', role: 'Dominant 60% Field', textDark: true },
    { name: 'PRIMARY INK', hex: '#09090B', role: '30% Borders & Strokes', textDark: false },
    { name: 'ACID ACCENT', hex: '#D2E823', role: '10% High-Vis Highlight', textDark: true },
  ];

  return (
    <section id="laboratory" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="p-6 md:p-10 bg-[#F8F4E8] border-2 border-[#09090B] rounded-[24px] shadow-hard-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b-2 border-[#09090B]">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#09090B] font-bold uppercase tracking-widest mb-1">
              <Sliders className="w-4 h-4 text-[#09090B]" />
              <span>TOKEN & ATOM SPECIFICATION</span>
            </div>
            <GlitchText
              text="DESIGN SYSTEM LAB"
              as="h2"
              className="text-3xl md:text-5xl text-[#09090B]"
            />
          </div>
          <p className="text-sm text-[#09090B]/80 font-medium max-w-md">
            Interactive verification sandbox testing typography scale, zero-blur hard shadow
            math, and physical keyframe micro-interactions.
          </p>
        </div>

        {/* 3 Interactive Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Color Tokens */}
          <div className="p-6 bg-[#FFFFFF] border-2 border-[#09090B] rounded-[16px] shadow-hard flex flex-col justify-between">
            <div>
              <div className="font-mono-code text-xs font-bold text-[#09090B] uppercase tracking-wider mb-2">
                01. COLOR PALETTE SYSTEM
              </div>
              <h3 className="font-display text-lg text-[#09090B] mb-4">
                HIGH CONTRAST
              </h3>

              <div className="space-y-3">
                {tokens.map((token) => (
                  <div
                    key={token.hex}
                    onClick={() => copyToClipboard(token.hex)}
                    className="p-3 border-2 border-[#09090B] rounded-[10px] flex items-center justify-between cursor-pointer hover:translate-x-1 transition-transform group"
                    style={{ backgroundColor: token.hex }}
                    data-cursor="pointer"
                  >
                    <div>
                      <span
                        className={`block font-display text-xs ${
                          token.textDark ? 'text-[#09090B]' : 'text-[#F8F4E8]'
                        }`}
                      >
                        {token.name}
                      </span>
                      <span
                        className={`font-mono-code text-[11px] font-bold ${
                          token.textDark ? 'text-[#09090B]/70' : 'text-[#F8F4E8]/70'
                        }`}
                      >
                        {token.role}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-[6px] border border-[#09090B] font-mono-code text-xs font-bold ${
                        token.textDark ? 'bg-white text-[#09090B]' : 'bg-[#09090B] text-[#D2E823]'
                      }`}
                    >
                      {copiedHex === token.hex ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{token.hex}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#09090B]/20 font-mono-code text-xs text-[#09090B]/70">
              * Strict 60-30-10 distribution. No random pastels or soft gradients.
            </div>
          </div>

          {/* Column 2: Hard Shadow Math Simulator */}
          <div className="p-6 bg-[#FFFFFF] border-2 border-[#09090B] rounded-[16px] shadow-hard flex flex-col justify-between">
            <div>
              <div className="font-mono-code text-xs font-bold text-[#09090B] uppercase tracking-wider mb-2">
                02. HARD SHADOW ENGINE
              </div>
              <h3 className="font-display text-lg text-[#09090B] mb-4">
                ZERO-BLUR MATRIX
              </h3>

              {/* Slider for shadow offset */}
              <div className="mb-4">
                <div className="flex justify-between font-mono-code text-xs font-bold mb-2">
                  <span>OFFSET: {shadowSize}PX</span>
                  <span>BLUR: 0PX (STRICT)</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 2, 4, 8].map((size) => (
                    <button
                      key={size}
                      onClick={() => setShadowSize(size)}
                      className={`py-1.5 font-mono-code text-xs font-bold border-2 border-[#09090B] rounded-[6px] transition-colors ${
                        shadowSize === size
                          ? 'bg-[#09090B] text-[#D2E823]'
                          : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]'
                      }`}
                      data-cursor="pointer"
                    >
                      {size}PX
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for border stroke */}
              <div className="mb-6">
                <div className="flex justify-between font-mono-code text-xs font-bold mb-2">
                  <span>STROKE: {strokeWidth}PX</span>
                  <span>COLOR: #09090B</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[2, 4].map((width) => (
                    <button
                      key={width}
                      onClick={() => setStrokeWidth(width)}
                      className={`py-1.5 font-mono-code text-xs font-bold border-2 border-[#09090B] rounded-[6px] transition-colors ${
                        strokeWidth === width
                          ? 'bg-[#09090B] text-[#D2E823]'
                          : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]'
                      }`}
                      data-cursor="pointer"
                    >
                      {width}PX BORDER
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Box */}
              <div
                className="w-full p-4 bg-[#D2E823] text-[#09090B] rounded-[12px] transition-all duration-150 flex items-center justify-between"
                style={{
                  border: `${strokeWidth}px solid #09090B`,
                  boxShadow: `${shadowSize}px ${shadowSize}px 0px 0px #09090B`,
                }}
              >
                <div>
                  <span className="font-display text-sm block">CALCULATED COMPONENT</span>
                  <span className="font-mono-code text-[11px] font-bold">
                    box-shadow: {shadowSize}px {shadowSize}px 0px #09090B
                  </span>
                </div>
                <Zap className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#09090B]/20 font-mono-code text-xs text-[#09090B]/70">
              * Blur parameter clamped strictly to 0px across all CSS declarations.
            </div>
          </div>

          {/* Column 3: Glitch & Tactile Micro-Interactions */}
          <div className="p-6 bg-[#FFFFFF] border-2 border-[#09090B] rounded-[16px] shadow-hard flex flex-col justify-between">
            <div>
              <div className="font-mono-code text-xs font-bold text-[#09090B] uppercase tracking-wider mb-2">
                03. MICRO-INTERACTIONS
              </div>
              <h3 className="font-display text-lg text-[#09090B] mb-4">
                TACTILE RESPONSE
              </h3>

              {/* Interactive Glitch tester */}
              <div className="p-4 bg-[#09090B] text-[#F8F4E8] rounded-[12px] border-2 border-[#09090B] mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-code text-[10px] text-[#D2E823] font-bold">
                    KEYFRAME GLITCH [±2PX TRANSLATE]
                  </span>
                  <button
                    onClick={() => setIsGlitching(!isGlitching)}
                    className="p-1 bg-[#27272A] hover:bg-[#3F3F46] rounded text-white"
                    title="Toggle continuous glitch"
                    data-cursor="pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isGlitching ? 'animate-spin' : ''}`} />
                  </button>
                </div>
                <div className="py-2 text-center overflow-hidden">
                  <GlitchText
                    text="DELA GOTHIC"
                    as="div"
                    className="text-2xl text-[#D2E823]"
                    glitchAlways={isGlitching}
                  />
                  <span className="font-mono-code text-xs text-[#F8F4E8]/60 mt-1 block">
                    {isGlitching ? 'GLITCHING CONSTANTLY' : 'HOVER TO TRIGGER JITTER'}
                  </span>
                </div>
              </div>

              {/* Button physical press simulator */}
              <div>
                <span className="block font-mono-code text-xs font-bold text-[#09090B] mb-2 uppercase">
                  PHYSICAL BUTTON PRESS SIMULATOR
                </span>
                <button
                  onMouseDown={() => setButtonPressed(true)}
                  onMouseUp={() => setButtonPressed(false)}
                  onMouseLeave={() => setButtonPressed(false)}
                  className="w-full btn-hard py-3 text-xs uppercase"
                  data-cursor="pointer"
                >
                  {buttonPressed ? 'PRESSED: TRANSLATE(4PX)' : 'CLICK & HOLD TO TEST PRESS'}
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#09090B]/20 font-mono-code text-xs text-[#09090B]/70">
              * Mechanical response $\le$ 150ms with zero elastic rubber-banding.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

