"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F8F4E8] font-sans selection:bg-[#D2E823] selection:text-[#09090B] flex flex-col">
      <Navbar cartCount={0} onOpenCart={() => {}} />
      <main className="flex-1 pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-widest mb-4">
            LEGAL // DOCUMENT 002
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight mb-6">
            Terms of Service
          </h1>
          <div className="w-full h-0.5 bg-[#F8F4E8]/20" />
        </div>

        <div className="space-y-12 font-mono-code text-sm md:text-base text-[#F8F4E8]/80 leading-relaxed">
          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">1. ACCEPTANCE OF PARAMETERS</h2>
            <p className="mb-4">
              By accessing the ACID//SYSTEM digital storefront, you agree to comply with these Terms of Service. If you do not agree with any of these parameters, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">2. ALLOCATIONS & FULFILLMENT</h2>
            <p className="mb-4">
              All inventory is strictly limited. Securing an item in your cart does not guarantee allocation. An allocation is only confirmed once the transaction has successfully cleared our payment gateway and a verified receipt is transmitted to your terminal.
            </p>
            <p>
              We reserve the right to cancel any allocation suspected of bot automation, proxy networks, or unauthorized reselling protocols.
            </p>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">3. INTELLECTUAL PROPERTY ARCHITECTURE</h2>
            <p>
              The architecture, CAD schematics, typography, copy, and structural garments displayed on this platform are the exclusive intellectual property of ACID//SYSTEM. Unauthorized replication, reverse-engineering, or redistribution will result in immediate legal action.
            </p>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">4. RETURN & EXCHANGE PROTOCOLS</h2>
            <p>
              Due to the limited nature of our archives, all allocations are final. We do not accept returns or exchanges unless a structural defect is proven upon immediate delivery. Claims must be filed within 48 hours of dispatch receipt.
            </p>
          </section>
          
          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">5. LIABILITY LIMITATIONS</h2>
            <p>
              ACID//SYSTEM shall not be held liable for any damages arising out of the use or inability to use the materials on our storefront, even if authorized representatives have been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <p className="text-[#F8F4E8]/50 text-xs mt-8">
              LAST UPDATED: OCTOBER 2026 // END OF TRANSMISSION
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
