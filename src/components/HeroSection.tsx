"use client";
import React from 'react';
import { ArrowDownRight, Compass, ShieldAlert, Sparkles } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { ProductVisual } from './ProductVisual';

interface HeroSectionProps {
  onExploreDrops: () => void;
  onOpenQuickView: (productId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDrops,
  onOpenQuickView,
}) => {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-16">
      {/* Top sticker bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 native-hide">
        {/* Sticker badge: pill-shaped, rotated -2 degrees, #D2E823 background, 2px border */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D2E823] text-[#09090B] font-display text-xs md:text-sm tracking-wider uppercase border-2 border-[#09090B] rounded-full shadow-hard-sm -rotate-2 select-none hover:rotate-0 transition-transform">
          <Sparkles className="w-3.5 h-3.5 fill-[#09090B]" />
          <span>ACID DROP 004 // LIMITED TO 350 UNITS WORLDWIDE</span>
        </div>

        {/* Clean unboxed metadata separator */}
        <div className="flex items-center gap-2 font-mono-code text-xs text-[#09090B] font-bold">
          <span>BATCH #004</span>
          <span aria-hidden="true">·</span>
          <span>EST. 2026</span>
          <span aria-hidden="true">·</span>
          <span>ALL WEATHER SPEC</span>
        </div>
      </div>

      {/* 12-Column Grid */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: 7 Columns */}
        <div className="lg:col-span-7 flex flex-col justify-center ">
          <div className="space-y-1 mb-6 max-w-full native-hide">
            <div>
              <GlitchText
                text="ENGINEERED"
                as="h1"
                className="text-[2.5rem] sm:text-[3.6rem] md:text-[4.5rem] xl:text-[5.5rem] leading-[0.85] text-[#09090B] block whitespace-nowrap"
              />
            </div>
            <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
              <GlitchText
                text="TAILORING"
                as="h1"
                className="text-[2.5rem] sm:text-[3.6rem] md:text-[4.5rem] xl:text-[5.5rem] leading-[0.85] text-[#09090B] block"
              />
              <span className="font-mono-code text-xs sm:text-sm md:text-base font-bold text-[#09090B] px-2 py-1 bg-[#D2E823] border-2 border-[#09090B] shadow-hard-sm shrink-0">
                LAGOS 2026
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#09090B]/90 font-medium max-w-xl mb-8 leading-relaxed native-hide">
            Heavyweight gabardine, unyielding 500GSM fleece, and zero-compromise structural drape. Designed for high tactile presence.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 ">
            {/* Primary Hard-Shadow Button */}
            <a
              href="/shop"
              className="btn-hard text-lg sm:text-base group inline-flex items-center justify-center w-full sm:w-auto py-4 sm:py-3"
              data-cursor="pointer"
            >
              <span className="flex items-center gap-2">
                <span>EXPLORE COLLECTION</span>
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            {/* Secondary Call-to-action Button: 20px padding, 2px border, 8px shadow */}
            <a
              href="#manifesto"
              className="px-5 py-5 sm:px-6 sm:py-5 text-sm sm:text-base font-bold bg-[#F8F4E8] text-[#09090B] border-2 border-[#09090B] rounded-[12px] shadow-hard-lg hover:bg-[#D2E823] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard transition-all active:translate-y-[4px] active:shadow-none inline-flex items-center gap-2 native-hide"
              data-cursor="pointer"
            >
              <Compass className="w-4 h-4" />
              <span>ATELIER DIRECTIVE</span>
            </a>
          </div>

          {/* Quick Technical Specs Bar */}
          <div className="grid grid-cols-3 gap-3 mt-10 pt-6 border-t-2 border-[#09090B] native-hide">
            <div>
              <span className="block font-mono-code text-[11px] text-[#09090B]/60 font-semibold uppercase">SHELL FABRIC</span>
              <span className="font-display text-sm sm:text-base text-[#09090B]">500D CORDURA</span>
            </div>
            <div>
              <span className="block font-mono-code text-[11px] text-[#09090B]/60 font-semibold uppercase">WATERPROOF</span>
              <span className="font-display text-sm sm:text-base text-[#09090B]">20,000 MM</span>
            </div>
            <div>
              <span className="block font-mono-code text-[11px] text-[#09090B]/60 font-semibold uppercase">HARDWARE</span>
              <span className="font-display text-sm sm:text-base text-[#09090B]">FIDLOCK MAG</span>
            </div>
          </div>
        </div>

        {/* Right Side: 5 Columns with Primary Image Card + Floating Asset Card */}
        <div className="lg:col-span-5 relative ">
          {/* Main Hero Card: 32px border radius, #09090B border */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[32px] border-2 border-[#09090B] overflow-hidden shadow-hard-xl bg-[#09090B]">
            {/* Primary Visual artwork */}
            <ProductVisual type="hero" className="w-full h-full" />

            {/* Bottom Overlay Label inside card */}
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#F8F4E8]/95 backdrop-blur-md border-2 border-[#09090B] rounded-[12px] shadow-hard-sm flex items-center justify-between">
              <div>
                <span className="font-mono-code text-[10px] text-[#09090B]/60 block font-bold">CORE ARTIFACT</span>
                <span className="font-display text-xs md:text-sm text-[#09090B]">SPECIMEN AX-PARKA 04</span>
              </div>
              <span className="px-2.5 py-1 bg-[#D2E823] text-[#09090B] font-mono-code text-xs font-bold border border-[#09090B] rounded-[6px]">
                ₦380,000
              </span>
            </div>
          </div>

          {/* Telemetry Asset Card: flows below image on mobile (relative mt-5), floats on desktop (sm:absolute sm:-bottom-8 sm:-left-8) */}
          <div className="hidden sm:block relative mt-5 w-full sm:w-72 sm:absolute sm:mt-0 sm:-bottom-8 sm:-left-8 z-20 p-4 bg-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg sm:animate-float native-hide">
            <div className="flex items-start justify-between mb-2">
              <span className="inline-block px-2 py-0.5 bg-[#09090B] text-[#D2E823] text-[10px] font-mono-code font-bold uppercase rounded-[4px]">
                LIVE TELEMETRY
              </span>
              <ShieldAlert className="w-4 h-4 text-[#09090B]" />
            </div>
            <div className="font-display text-sm text-[#09090B] mb-1">
              STRUCTURAL STROKE
            </div>
            <p className="text-xs text-[#09090B]/80 font-medium mb-3">
              Guaranteed 2px–4px ink density. 0% blur blurriness. High-impact optical tension.
            </p>
            <div className="flex items-center justify-between font-mono-code text-[11px] pt-2 border-t border-[#09090B]/20">
              <span className="font-bold">STATUS: REFINED</span>
              <span className="text-[#09090B] font-bold">100% VECTOR</span>
            </div>
          </div>

          {/* Top Right Floating Badge */}
          <div className="absolute -top-3 right-2 sm:-top-4 sm:-right-4 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#D2E823] border-2 border-[#09090B] rounded-[10px] shadow-hard font-display text-xs text-[#09090B] animate-float-delayed flex items-center gap-1.5 rotate-3">
            <span className="w-2 h-2 rounded-full bg-[#09090B] inline-block animate-ping" />
            <span>DROP ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};



