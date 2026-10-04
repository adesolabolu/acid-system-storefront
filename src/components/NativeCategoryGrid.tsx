"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { name: 'TAILORING', href: '/shop?category=tailoring', bg: 'bg-[#D2E823]', text: 'text-[#09090B]' },
  { name: 'SHIRTING', href: '/shop?category=shirting', bg: 'bg-[#F8F4E8]', text: 'text-[#09090B]' },
  { name: 'TOPS', href: '/shop?category=tops', bg: 'bg-[#09090B]', text: 'text-[#D2E823]' },
  { name: 'BOTTOMS', href: '/shop?category=bottoms', bg: 'bg-[#F8F4E8]', text: 'text-[#09090B]' },
  { name: 'FOOTWEAR', href: '/shop?category=footwear', bg: 'bg-[#09090B]', text: 'text-[#F8F4E8]', colSpan: true },
];

export const NativeCategoryGrid = () => {
  return (
    <section className="native-only max-w-7xl mx-auto px-4 py-8">
      <div className="font-mono-code text-[10px] text-[#09090B] font-bold uppercase tracking-widest mb-4">
        BROWSE BY CATEGORY
      </div>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat, i) => (
          <Link 
            key={i} 
            href={cat.href}
            className={`relative p-4 flex flex-col h-40 sm:h-48 rounded-[16px] border-2 border-[#09090B] shadow-hard-sm active:translate-y-[2px] active:shadow-none transition-all ${cat.bg} ${cat.colSpan ? 'col-span-2' : ''}`}
          >
            <div className={`font-display text-xl uppercase pr-6 ${cat.text}`}>
              {cat.name}
            </div>
            <div className={`absolute bottom-4 right-4 ${cat.text}`}>
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
