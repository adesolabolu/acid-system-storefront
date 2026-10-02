import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Layers, ShieldCheck, Tag } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const BentoCategoryGrid: React.FC = () => {
  return (
    <section id="dispatch-standard" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-[#09090B]">
        <div>
          <div className="font-mono-code text-xs text-[#09090B] font-bold uppercase tracking-widest mb-1">
            LOGISTICS PROTOCOL // DISPATCH ARCHIVE
          </div>
          <GlitchText
            text="UNBOXING & DISPATCH STANDARD"
            as="h2"
            className="text-3xl md:text-5xl text-[#09090B]"
          />
        </div>
        <p className="text-sm md:text-base text-[#09090B]/80 max-w-md font-medium">
          Every garment is serialized, sealed against transit friction, and delivered in military-grade packaging.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Panel 1 (Large Left Card) */}
        <div className="bento-card-interactive md:col-span-2 lg:col-span-2 lg:row-span-2 relative p-8 md:p-10 bg-[#09090B] text-[#F8F4E8] rounded-[24px] border-2 border-[#09090B] shadow-hard-lg flex flex-col justify-between overflow-hidden group">
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2E823' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 w-48 h-48 md:w-72 md:h-72 opacity-25 group-hover:opacity-40 transition-opacity">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#D2E823]" fill="none" strokeWidth="2">
              <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" />
              <rect x="50" y="50" width="100" height="100" strokeWidth="3" />
              <line x1="20" y1="100" x2="180" y2="100" strokeWidth="2" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D2E823] text-[#09090B] font-mono-code text-xs font-bold rounded-[6px] border border-[#09090B]">
              <Layers className="w-3.5 h-3.5" />
              <span>PACKAGING SPEC // 01</span>
            </div>
          </div>

          <div className="relative z-10 mt-20 md:mt-32">
            <div className="font-mono-code text-xs text-[#D2E823] font-bold tracking-widest uppercase mb-2">
              HEAVY-GAUGE MATTE METALLIC SHIELD
            </div>
            <GlitchText
              text="VACUUM-SEALED FOIL BARRIER"
              as="h3"
              className="text-3xl sm:text-4xl md:text-5xl text-[#F8F4E8] mb-4"
            />
            <p className="text-sm md:text-base text-[#F8F4E8]/80 max-w-lg mb-6 leading-relaxed">
              Custom airtight silver moisture barrier pouch with tear-notch access. UV-resistant, dust-proof, and water-sealed. Zero disposable plastic polybags.
            </p>

            <div className="flex flex-wrap items-center gap-6 font-mono-code text-[11px]">
              <span className="text-[#D2E823] font-bold">100% RECYCLABLE</span>
              <span className="text-[#F8F4E8]/60">·</span>
              <span className="text-[#F8F4E8]/80">AIRTIGHT TRANSIT</span>
              <span className="text-[#F8F4E8]/60">·</span>
              <span className="text-[#F8F4E8]/80">MIL-SPEC GRADE</span>
            </div>
          </div>
        </div>

        {/* Panel 2 (Top Right Card) */}
        <div className="bento-card-interactive relative p-6 sm:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group">
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-bold rounded-[6px]">
              <Cpu className="w-3.5 h-3.5" />
              <span>VERIFICATION // 02</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="font-mono-code text-[11px] text-[#09090B]/70 font-bold uppercase tracking-wider mb-1">
              LASER-STAMPED METALLIC CARD
            </div>
            <GlitchText
              text="SERIALIZED ID CARDS"
              as="h3"
              className="text-2xl text-[#09090B] mb-2"
            />
            <p className="text-xs text-[#09090B]/80 font-medium mb-4">
              Every production piece includes a laser-stamped batch certificate denoting its unique archive run number and fabric mill provenance.
            </p>
            <div className="font-mono-code text-[11px] text-[#09090B] font-bold uppercase">
              UNIQUE ARCHIVE SERIAL · ANTI-COUNTERFEIT
            </div>
          </div>
        </div>

        {/* Panel 3 (Mid Right Card) */}
        <div className="bento-card-interactive relative p-6 sm:p-8 bg-[#D2E823] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard bg-radial-dots flex flex-col justify-between group">
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#09090B] text-[#D2E823] font-mono-code text-xs font-bold rounded-[6px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TRANSIT SPEED // 03</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="font-mono-code text-[11px] text-[#09090B]/70 font-bold uppercase tracking-wider mb-1">
              PRIORITY LOGISTICS
            </div>
            <GlitchText
              text="RAPID METRO DISPATCH"
              as="h3"
              className="text-2xl text-[#09090B] mb-2"
            />
            <p className="text-xs text-[#09090B]/80 font-medium mb-4">
              Same-day to 24-hour dispatch across Lagos Metro. 3–5 business day tracked express door-to-door delivery nationwide and globally.
            </p>
            <div className="font-mono-code text-[11px] text-[#09090B] font-bold uppercase">
              REAL-TIME WAYBILL TRACKING · DIRECT COURIER
            </div>
          </div>
        </div>

        {/* Panel 4 (Bottom Wide Banner) */}
        <div className="bento-card-interactive md:col-span-2 lg:col-span-3 p-6 md:p-8 bg-[#F8F4E8] text-[#09090B] rounded-[20px] border-2 border-[#09090B] shadow-hard flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#09090B] text-[#D2E823] rounded-[10px] border border-[#09090B]">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono-code text-xs text-[#09090B]/70 font-bold uppercase tracking-wider">
                GUARANTEE // 04
              </div>
              <GlitchText
                text="7-DAY COMPLIMENTARY SIZE EXCHANGE"
                as="h3"
                className="text-2xl md:text-3xl text-[#09090B]"
              />
              <p className="text-xs md:text-sm text-[#09090B]/80 max-w-xl font-medium mt-1">
                Unworn garments in original foil packaging qualify for seamless sizing adjustments. Engineered for zero acquisition risk.
              </p>
            </div>
          </div>

          <Link href="/terms" className="inline-flex items-center gap-2 px-5 py-3 bg-[#09090B] text-[#D2E823] rounded-[10px] font-bold font-mono-code text-xs uppercase tracking-wider shadow-[4px_4px_0px_#D2E823] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all border-2 border-[#09090B]">
            <span>[ READ DISPATCH PROTOCOL ↗ ]</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

