import React from 'react';
import { GlitchText } from './GlitchText';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      operator: 'OP // TUNDE O.',
      location: 'LAGOS // VICTORIA ISLAND',
      spec: '520GSM SPEC HOODIE • VERIFIED',
      rating: '★★★★★ [5.0/5.0]',
      quote: '“The weight on this fleece is insane. It drops completely boxy and holds its form in heavy AC. Delivery arrived in under 24 hours in the foil pouch.”',
    },
    {
      operator: 'OP // CHINWE A.',
      location: 'LAGOS // IKEJA',
      spec: 'RAW TWILL TROUSER • VERIFIED',
      rating: '★★★★★ [5.0/5.0]',
      quote: '“Finally trousers tailored with real knee articulation. The fabric doesn\'t feel thin like standard imported retail. Cleanest silhouette in my wardrobe.”',
    },
    {
      operator: 'OP // MARCUS D.',
      location: 'LONDON // UK',
      spec: 'VIRGIN WOOL BLAZER • VERIFIED',
      rating: '★★★★★ [5.0/5.0]',
      quote: '“The raw edge detailing and shoulder drop look like a £600 piece from Dover Street Market. Arrived in London in 4 days in perfect shape.”',
    },
  ];

  return (
    <section className="border-y-2 border-[#09090b] bg-[#F8F4E8] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-[#09090B]">
          <div>
            <div className="font-mono-code text-xs text-[#09090B] font-bold uppercase tracking-widest mb-1">
              ■ VERIFIED OPERATORS // FIELD LOGS
            </div>
            <GlitchText
              text="DISPATCH TRANSCRIPTS"
              as="h2"
              className="text-3xl md:text-5xl text-[#09090B]"
            />
          </div>
          <p className="text-sm md:text-base text-[#09090B]/80 max-w-md font-medium">
            Unfiltered operational feedback from clients across Lagos and global transit.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#F8F4E8] p-6 border-2 border-[#09090b] shadow-[4px_4px_0px_#09090b] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono-code text-[10px] sm:text-xs text-[#09090b] font-bold border-b border-[#09090b]/20 pb-3 mb-4 flex justify-between">
                  <span>{review.operator}</span>
                  <span>{review.location}</span>
                </div>
                <p className="font-medium text-[#09090b] text-sm md:text-base leading-relaxed mb-6 italic">
                  {review.quote}
                </p>
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#09090b]/20">
                <div className="font-mono-code text-[11px] text-[#09090b] font-bold mb-1 uppercase tracking-wider">
                  {review.spec}
                </div>
                <div className="font-mono-code text-[#09090b] font-bold text-xs">
                  {review.rating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
