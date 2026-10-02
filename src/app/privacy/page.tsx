"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F8F4E8] font-sans selection:bg-[#D2E823] selection:text-[#09090B] flex flex-col">
      <Navbar cartCount={0} onOpenCart={() => {}} />
      <main className="flex-1 pt-32 pb-24 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-widest mb-4">
            LEGAL // DOCUMENT 001
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight mb-6">
            Privacy Policy
          </h1>
          <div className="w-full h-0.5 bg-[#F8F4E8]/20" />
        </div>

        <div className="space-y-12 font-mono-code text-sm md:text-base text-[#F8F4E8]/80 leading-relaxed">
          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">1. DATA COLLECTION PROTOCOLS</h2>
            <p className="mb-4">
              ACID//SYSTEM ("we", "our", "us") is committed to protecting your privacy. We collect encrypted telemetry data when you interact with our digital storefront, including but not limited to device identifiers, IP addresses, and browsing behavior.
            </p>
            <p>
              When you allocate an item or sign up for priority dispatch alerts, we securely process your email address, shipping coordinates, and transaction identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">2. USE OF SECURED TELEMETRY</h2>
            <p className="mb-4">
              The collected data is strictly utilized for the following operational protocols:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processing and fulfilling your archive allocations.</li>
              <li>Transmitting encrypted batch release notices.</li>
              <li>Optimizing the zero-blur architecture of our digital storefront.</li>
              <li>Detecting anomalies and securing our infrastructure against unauthorized breaches.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">3. THIRD-PARTY EXCHANGES</h2>
            <p>
              We do not compromise your data. Information is only shared with verified infrastructure partners (e.g., payment gateways, dispatch couriers) strictly required to execute your allocation. All third-party nodes are vetted for enterprise-grade security protocols.
            </p>
          </section>

          <section>
            <h2 className="text-[#D2E823] font-bold text-xl mb-4">4. RETENTION & DELETION</h2>
            <p>
              Your data is stored on encrypted servers. You retain the right to request a complete purge of your telemetry footprint from our archives at any time by contacting our operators at LEGAL@ACIDSYSTEM.SYS.
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
