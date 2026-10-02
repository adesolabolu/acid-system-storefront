import React from 'react';
import { Layers, Compass, Zap, ShieldCheck } from 'lucide-react';
import { GlitchText } from './GlitchText';

export const ManifestoSection: React.FC = () => {
  const tenets = [
    {
      num: '01',
      title: '520GSM MASS OVER SEASONS',
      desc: 'We calibrate strictly by fabric weight, not marketing calendars. Knits start at 520GSM dense loopback cotton, designed to hold permanent sculptural structure.',
      icon: Layers,
      badge: 'SPECIFICATION RATIO',
    },
    {
      num: '02',
      title: 'ARCHITECTURAL ANATOMY',
      desc: 'Form follows movement. Sleeve articulation darts, dropped shoulder slopes, and functional gussets eliminate decorative excess in favor of pure utility.',
      icon: Compass,
      badge: 'PATTERN STANDARD',
    },
    {
      num: '03',
      title: 'CLIMATIC RESILIENCE',
      desc: 'Engineered for the heat and friction of Lagos and global transit. Breathable natural fibers reinforced with multi-needle stitching at stress vectors.',
      icon: Zap,
      badge: 'FIELD TESTED',
    },
    {
      num: '04',
      title: 'CLOSED SERIAL EDITIONS',
      desc: 'Every collection drop is strictly numbered and limited. We produce zero disposable deadstock—once an edition registry is closed, the pattern is permanently archived.',
      icon: ShieldCheck,
      badge: 'BATCH VERIFIED',
    },
  ];

  return (
    <section id="manifesto" className="max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-20">
      <div className="p-8 md:p-12 bg-[#09090B] text-[#F8F4E8] rounded-[28px] border-2 border-[#09090B] shadow-hard-xl relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-radial-dots-acid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mb-12">
          <div className="font-mono-code text-xs text-[#D2E823] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span>■ ATELIER DOCTRINE // LAGOS LAB</span>
          </div>
          <GlitchText
            text="THE SYSTEM MANIFESTO"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl text-[#F8F4E8] mb-4"
          />
          <p className="text-sm md:text-base text-[#F8F4E8]/80 font-medium leading-relaxed">
            We reject disposable fast-fashion, thin synthetic blends, and flimsy tailoring. Every garment must possess physical mass, visible architectural seams, and unyielding structural presence.
          </p>
        </div>

        {/* 4 Tenet Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.num}
                className="p-6 bg-[#161619] border-2 border-[#D2E823]/40 hover:border-[#D2E823] rounded-[16px] flex flex-col justify-between transition-all duration-150 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code text-xs font-bold text-[#D2E823] px-2 py-0.5 bg-[#09090B] border border-[#D2E823]/40 rounded-[4px]">
                      TENET {tenet.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#D2E823] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display text-base text-[#F8F4E8] mb-2">
                    {tenet.title}
                  </h3>
                  <p className="text-xs text-[#F8F4E8]/70 font-medium leading-relaxed">
                    {tenet.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F8F4E8]/10 font-mono-code text-[11px] text-[#D2E823] font-bold">
                  {tenet.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
