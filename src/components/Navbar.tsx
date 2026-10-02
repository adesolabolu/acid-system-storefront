"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingBag, Sliders, Zap } from 'lucide-react';
import { GlitchText } from './GlitchText';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLaboratory?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <header className="sticky top-4 z-40 mx-4 md:mx-8 mb-6">
      <div className="flex items-center justify-between px-5 md:px-7 py-3.5 bg-[#F8F4E8]/90 backdrop-blur-[24px] border-2 border-[#09090B] rounded-[12px] shadow-hard">
        {/* Zone 1: Brand Wordmark in Dela Gothic One */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none"
          aria-label="ACID//SYSTEM Home"
        >
          <div className="w-4 h-4 bg-[#D2E823] border border-[#09090B] rotate-45 transition-transform group-hover:rotate-90 duration-200" />
          <GlitchText
            text="ACID//SYS"
            as="span"
            className="text-xl md:text-2xl text-[#09090B] font-display"
          />
        </Link>

        {/* Zone 2: Navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-bold text-[#09090B]">
          <Link
            href="/shop"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
          >
            SHOP
          </Link>
          <Link
            href="/#bento"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
          >
            COLLECTIONS
          </Link>
          <Link
            href="/#manifesto"
            className="hover:text-[#09090B] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
          >
            ATELIER
          </Link>
        </nav>

        {/* Zone 3: Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Authentic Fashion Label Location & Currency Status Pill */}
          <div
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono-code font-bold uppercase tracking-wider bg-[#D2E823] text-[#09090B] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm"
            title="Atelier Region & Currency"
          >
            <span className="w-2 h-2 rounded-full bg-[#09090B] inline-block animate-ping" />
            <span className="whitespace-nowrap">LAGOS // ₦ NGN</span>
          </div>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-y-[3px]"
            data-cursor="pointer"
            aria-label={`Shopping Bag, ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="whitespace-nowrap font-mono-code font-bold">BAG</span>
            <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-[#D2E823] text-[#09090B] border border-[#09090B] rounded-[4px] text-[11px] font-mono-code font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

