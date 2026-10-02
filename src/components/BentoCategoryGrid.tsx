import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Tag } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const BentoCategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-[#09090B]">
        <div>
          <div className="font-mono-code text-xs text-[#09090B] font-bold uppercase tracking-widest mb-1">
            ARCHITECTURAL INDEX
          </div>
          <GlitchText
            text="BENTO ARCHIVE"
            as="h2"
            className="text-3xl md:text-5xl text-[#09090B]"
          />
        </div>
        <p className="text-sm md:text-base text-[#09090B]/80 max-w-md font-medium">
          Modular capsules engineered under strict Neo-Brutalist guidelines.
          Explore tactical apparel, modular bags, and brutalist hardware.
        </p>
      </div>

      {/* Bento Grid: 1 large 2x2 card + 2 1x1 cards + 1 wide 2x1 card for harmonious desktop & mobile grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large 2x2 Card: Dark background #09090B, high-contrast text, subtle background image/graphic at 40% opacity with mix-blend-overlay */}
        <Link
          href="/shop?category=tailoring"
          className="bento-card-interactive md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-8 md:p-10 bg-[#09090B] text-[#F8F4E8] rounded-[24px] border-2 border-[#09090B] shadow-hard-lg flex flex-col justify-between overflow-hidden group cursor-pointer block"
          data-cursor="pointer"
        >
          {/* Subtle background graphic at 40% opacity with mix-blend-overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2E823' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Abstract Vector Graphic Overlaid on the Right */}
          <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-48 h-48 md:w-72 md:h-72 opacity-25 group-hover:opacity-40 transition-opacity">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#D2E823]" fill="none" strokeWidth="2">
              <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" />
              <rect x="50" y="50" width="100" height="100" strokeWidth="3" />
              <line x1="20" y1="100" x2="180" y2="100" strokeWidth="2" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="2" />
            </svg>
          </div>

          {/* Card Top */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D2E823] text-[#09090B] font-mono-code text-xs font-bold rounded-[6px] border border-[#09090B]">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPSULE 01</span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#D2E823] text-[#D2E823] flex items-center justify-center group-hover:bg-[#D2E823] group-hover:text-[#09090B] transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Card Content & Typo */}
          <div className="relative z-10 mt-20 md:mt-32">
            <div className="font-mono-code text-xs text-[#D2E823] font-bold tracking-widest uppercase mb-2">
              TECHNICAL APPAREL & OUTERWEAR
            </div>
            <GlitchText
              text="MODULAR SHELLS"
              as="h3"
              className="text-3xl sm:text-4xl md:text-5xl text-[#F8F4E8] mb-4"
            />
            <p className="text-sm md:text-base text-[#F8F4E8]/80 max-w-lg mb-6 leading-relaxed">
              3-Layer waterproof membranes bonded to 500D ballistic cordura.
              Articulated sleeve geometry, magnetic storm closures, and laser-sealed seam tape.
            </p>

            <div className="flex flex-wrap items-center gap-6 font-mono-code text-xs">
              <span className="text-[#D2E823] font-bold">14 ACTIVE ITEMS</span>
              <span className="text-[#F8F4E8]/60">·</span>
              <span className="text-[#F8F4E8]/80">MEMBRANE 20K/20K</span>
              <span className="text-[#F8F4E8]/60">·</span>
              <span className="text-[#F8F4E8]/80">FIDLOCK HARDWARE</span>
            </div>
          </div>
        </Link>

        {/* Smaller 1x1 Card #1: Hard shadow + Radial Dot Pattern (1px dots every 20px) */}
        <Link
          href="/shop?category=tops"
          className="bento-card-interactive relative p-6 sm:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group cursor-pointer block"
          data-cursor="pointer"
        >
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-bold rounded-[6px]">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPSULE 02</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#09090B] text-[#09090B] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-[#D2E823] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8">
            <div className="font-mono-code text-[11px] text-[#09090B]/70 font-bold uppercase tracking-wider mb-1">
              HEAVYWEIGHT & POPLIN
            </div>
            <GlitchText
              text="SHIRTING & TOPS"
              as="h3"
              className="text-2xl text-[#09090B] mb-2"
            />
            <p className="text-xs text-[#09090B]/80 font-medium mb-4">
              MOLLE modular attachments and Fidlock magnetic releases for rapid equipment deployment.
            </p>
            <div className="font-mono-code text-xs text-[#09090B] font-bold">
              08 ARTIFACTS IN CATALOG
            </div>
          </div>
        </Link>

        {/* Smaller 1x1 Card #2: Hard shadow + Radial Dot Pattern (1px dots every 20px) */}
        <Link
          href="/shop?category=bottoms"
          className="bento-card-interactive relative p-6 sm:p-8 bg-[#D2E823] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group cursor-pointer block"
          data-cursor="pointer"
        >
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-bold rounded-[6px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CAPSULE 03</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#09090B] text-[#09090B] flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-[#D2E823] transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-8">
            <div className="font-mono-code text-[11px] text-[#09090B]/70 font-bold uppercase tracking-wider mb-1">
              TAILORED & TACTICAL
            </div>
            <GlitchText
              text="MONOLITH BOTTOMS"
              as="h3"
              className="text-2xl text-[#09090B] mb-2"
            />
            <p className="text-xs text-[#09090B]/80 font-medium mb-4">
              Grade-5 titanium carabiners and laser-etched brutalist tools rated up to 35kN.
            </p>
            <div className="font-mono-code text-xs text-[#09090B] font-bold">
              06 EDITIONS PRODUCED
            </div>
          </div>
        </Link>

        {/* Wide Card spanning 3 columns for balanced grid layout */}
        <Link
          href="/shop?category=footwear"
          className="bento-card-interactive md:col-span-2 lg:col-span-3 p-6 md:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer block"
          data-cursor="pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#09090B] text-[#D2E823] rounded-[10px] border border-[#09090B]">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono-code text-xs text-[#09090B]/70 font-bold uppercase tracking-wider">
                CAPSULE 04 · BRUTALIST FOOTWEAR
              </div>
              <GlitchText
                text="HEAVY LUG TREAD SNEAKERS"
                as="h3"
                className="text-2xl md:text-3xl text-[#09090B]"
              />
              <p className="text-xs md:text-sm text-[#09090B]/80 max-w-xl font-medium mt-1">
                Monolithic lug soles sculpted from vulcanized tire rubber, paired with ripstop ballistic uppers.
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#09090B] text-[#D2E823] rounded-[10px] font-bold text-xs uppercase tracking-wider group-hover:bg-[#D2E823] group-hover:text-[#09090B] transition-colors border-2 border-[#09090B]">
            <span>VIEW FOOTWEAR ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </section>
  );
};

