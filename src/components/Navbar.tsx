"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Sliders, Zap, Loader2, User, Menu } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { useSession, signOut } from "next-auth/react";
import { AuthModal } from './AuthModal';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenLaboratory?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const { data: session, status } = useSession();
  const [showWelcomeToast, setShowWelcomeToast] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      const hasWelcomed = sessionStorage.getItem('acidsys_welcomed');
      if (!hasWelcomed) {
        setShowWelcomeToast(true);
        sessionStorage.setItem('acidsys_welcomed', 'true');
        setTimeout(() => setShowWelcomeToast(false), 4000);
      }

      const wantsNewsletter = localStorage.getItem('acidsys_newsletter_pending');
      if (wantsNewsletter && session?.user?.email) {
        fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: session.user.email }),
        }).catch(console.error);
        localStorage.removeItem('acidsys_newsletter_pending');
      }
    }
  }, [status, session]);

  return (
    <>
    <header className="sticky top-4 z-40 mx-4 md:mx-8 mb-6">
      <div className="flex items-center justify-between px-5 md:px-7 py-3.5 bg-[#F8F4E8]/90 backdrop-blur-[24px] border-2 border-[#09090B] rounded-[12px] shadow-hard">
        {/* Zone 1: Brand Wordmark in Dela Gothic One */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
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
        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop Auth */}
          {status === "loading" ? (
            <div className="hidden md:flex items-center justify-center border-2 border-[#09090b] bg-[#D2E823] text-[#09090b] px-3 py-2 shadow-hard-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          ) : status === "unauthenticated" ? (
            <button onClick={() => setShowAuthModal(true)} className="hidden md:inline-block border-2 border-[#09090b] bg-[#D2E823] text-[#09090b] font-mono-code text-[11px] uppercase px-3 py-2 font-bold shadow-[2px_2px_0px_#09090b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">LOGIN</button>
          ) : status === "authenticated" ? (
            <div className="hidden md:flex items-center gap-2 border-2 border-[#09090b] bg-[#F8F4E8] px-2.5 py-1.5 shadow-hard-sm text-xs font-mono-code">
              <span className="text-[#09090b] font-bold">OP // {session.user?.name?.split(" ")[0] || "AUTH"}</span>
              <Link href="/dashboard" className="text-[10px] text-[#09090b] hover:underline uppercase font-bold px-1">[DASHBOARD]</Link>
              <button onClick={() => { localStorage.removeItem('acidsys_cart'); signOut(); }} className="text-[10px] text-red-600 hover:underline uppercase font-bold px-1">[EXIT]</button>
            </div>
          ) : null}

          {/* Mobile Auth Icon */}
          <div className="md:hidden">
            {status === "loading" ? (
              <div className="p-2 border-2 border-[#09090b] bg-[#D2E823] text-[#09090b] rounded-[8px] shadow-hard-sm flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            ) : status === "unauthenticated" ? (
              <button onClick={() => setShowAuthModal(true)} className="p-2 border-2 border-[#09090b] bg-white text-[#09090b] rounded-[8px] shadow-hard-sm hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center" aria-label="Sign In">
                <User className="w-4 h-4" />
              </button>
            ) : status === "authenticated" ? (
              <Link href="/dashboard" className="p-2 border-2 border-[#09090b] bg-[#D2E823] text-[#09090b] rounded-[8px] shadow-hard-sm hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center" aria-label="Dashboard">
                <User className="w-4 h-4" />
              </Link>
            ) : null}
          </div>

          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2 md:px-4 md:py-2 md:gap-2.5 bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:translate-y-[3px]"
            data-cursor="pointer"
            aria-label={`Shopping Bag, ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden md:inline whitespace-nowrap font-mono-code font-bold text-xs uppercase tracking-wider">BAG</span>
            <span className="hidden md:flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-[#D2E823] text-[#09090B] border border-[#09090B] rounded-[4px] text-[11px] font-mono-code font-bold">
              {cartCount}
            </span>
            <span className="md:hidden absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#D2E823] text-[#09090B] border border-[#09090B] rounded-full text-[10px] font-mono-code font-bold">
              {cartCount}
            </span>
          </button>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center p-2 border-2 border-[#09090B] rounded-[8px] transition-all ${isMobileMenuOpen ? 'bg-[#09090B] text-[#D2E823] shadow-none translate-y-[2px]' : 'bg-white text-[#09090B] shadow-hard-sm hover:bg-[#D2E823] hover:translate-y-[2px] hover:shadow-none'}`}
            aria-label="Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[110%] left-0 right-0 p-4 bg-[#F8F4E8] border-2 border-[#09090B] rounded-[12px] shadow-hard-lg flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200 z-50">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-wider font-bold text-[#09090B]">
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#D2E823] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
              >
                SHOP
              </Link>
              <Link
                href="/#bento"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#D2E823] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
              >
                COLLECTIONS
              </Link>
              <Link
                href="/#manifesto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#D2E823] hover:underline underline-offset-4 decoration-2 decoration-[#09090B] transition-all"
              >
                ATELIER
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>

    {showWelcomeToast && (
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 p-4 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-bold uppercase border-2 border-[#D2E823] rounded-[10px] shadow-hard-lg animate-in slide-in-from-top-4 fade-in duration-300 flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-[#D2E823] animate-pulse" />
        <span>WELCOME BACK, {session?.user?.name?.split(" ")[0] || "OPERATOR"} // SYSTEM SYNCED</span>
      </div>
    )}

    <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

