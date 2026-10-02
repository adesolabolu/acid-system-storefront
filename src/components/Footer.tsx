"use client";
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#09090B] text-[#F8F4E8] border-t-2 border-[#09090B] pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Newsletter Strip */}
        <div className="p-8 md:p-10 border-2 border-[#F8F4E8]/20 rounded-[20px] bg-[#121215] mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-widest mb-1">
              PRIORITY DISPATCH ALERTS
            </div>
            <GlitchText
              text="ACID DROP TELEMETRY"
              as="h3"
              className="text-2xl md:text-3xl text-[#F8F4E8] mb-2"
            />
            <p className="text-xs md:text-sm text-[#F8F4E8]/70 font-medium">
              Receive encrypted batch release notices 30 minutes prior to public release. Zero spam.
            </p>
          </div>

          {/* Newsletter signup: transparent background, 2px border, #D2E823 submit button */}
          <form onSubmit={handleSubmit} className="w-full lg:max-w-md">
            {submitted ? (
              <div className="p-4 bg-[#D2E823] text-[#09090B] border-2 border-[#09090B] rounded-[10px] font-mono-code text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>TERMINAL ENROLLED // EXPECT BATCH 005 TRANSMISSION</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="OPERATOR@DOMAIN.SYS"
                  required
                  className="flex-1 px-4 py-3.5 bg-transparent border-2 border-[#F8F4E8] text-[#F8F4E8] placeholder-[#F8F4E8]/40 font-mono-code text-xs rounded-[10px] focus:outline-none focus:border-[#D2E823] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#D2E823] text-[#09090B] border-2 border-[#D2E823] font-mono-code font-bold text-xs uppercase tracking-wider rounded-[10px] shadow-hard-white hover:bg-white hover:border-white transition-all active:translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap"
                  data-cursor="pointer"
                >
                  <span>JOIN DROPS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* 3-Column Layout: Store, Info, Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#F8F4E8]/20">
          {/* Column 1: Store */}
          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-wider mb-4">
              01 // STORE CATALOG
            </div>
            <ul className="space-y-3 font-display text-sm tracking-wide uppercase">
              <li>
                <a href="#drops" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Outerwear Capsules
                </a>
              </li>
              <li>
                <a href="#drops" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Heavyweight Tops
                </a>
              </li>
              <li>
                <a href="#drops" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Ballistic Bags & Rigs
                </a>
              </li>
              <li>
                <a href="#drops" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Titanium Hardware
                </a>
              </li>
              <li>
                <a href="#drops" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Archived Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Info */}
          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-wider mb-4">
              02 // ATELIER & EDITORIAL
            </div>
            <ul className="space-y-3 font-display text-sm tracking-wide uppercase">
              <li>
                <a href="#editorial" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Garment Architecture
                </a>
              </li>
              <li>
                <a href="#editorial" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  500GSM Raw Textile Mill
                </a>
              </li>
              <li>
                <a href="#editorial" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Waterproof Membranes 20K
                </a>
              </li>
              <li>
                <a href="#editorial" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Archival Packaging Standards
                </a>
              </li>
              <li>
                <a href="#editorial" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Lagos & Global Dispatch FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Network */}
          <div>
            <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-wider mb-4">
              03 // NETWORK & CHANNELS
            </div>
            <ul className="space-y-3 font-display text-sm tracking-wide uppercase">
              <li>
                <a href="#social" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Instagram // @ACIDSYS
                </a>
              </li>
              <li>
                <a href="#social" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Lookbook Discord Server
                </a>
              </li>
              <li>
                <a href="#social" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Substack Release Notes
                </a>
              </li>
              <li>
                <a href="#social" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Archival Photography
                </a>
              </li>
              <li>
                <a href="#social" className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors">
                  Lagos Atelier Lookbook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-[#F8F4E8]/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D2E823]" />
            <span>ACID//SYSTEM © 2026. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span>NEO-BRUTALIST ARCHITECTURE · ZERO BLUR SHADOW PROTOCOL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

