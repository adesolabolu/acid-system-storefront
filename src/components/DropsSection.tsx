"use client";
import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { GlitchText } from './GlitchText';
import { ProductVisual } from './ProductVisual';

interface DropsSectionProps {
  products: Product[];
  onAddToCart: (product: Product, size?: string) => void;
  onOpenQuickView: (product: Product) => void;
}

export const DropsSection: React.FC<DropsSectionProps> = ({
  products,
  onAddToCart,
  onOpenQuickView,
}) => {
  const [addedProductId, setAddedProductId] = useState<string | number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});


  const handleAdd = (product: Product) => {
    if (product.isSoldOut) return;
    const size = selectedSizes[product.id] || product.variants?.[0]?.size_label || 'ONE SIZE';
    onAddToCart(product, size);
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1200);
  };

  const showcaseProducts = products.slice(0, 4);

  return (
    <section id="drops" className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      {/* Header with Arrow Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b-2 border-[#09090B]">
        <div>
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#09090B] font-bold uppercase tracking-widest mb-1">
            <span className="w-2.5 h-2.5 bg-[#D2E823] border border-[#09090B]" />
            <span>SEASON 04 RELEASES</span>
          </div>
          <GlitchText
            text="CURATED SPECIMENS"
            as="h2"
            className="text-4xl md:text-6xl text-[#09090B]"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {showcaseProducts.map((product) => (
          <div
            key={product.id}
            className="w-full shrink-0 bg-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg flex flex-col justify-between overflow-hidden transition-transform duration-150 hover:-translate-y-1"
          >
            {/* Square image container with 2px border */}
            <div className="relative w-full aspect-square border-b-2 border-[#09090B] bg-[#18181B] overflow-hidden group">
              <ProductVisual
                type={product.visualType}
                isSoldOut={product.isSoldOut}
                telemetrySpec={product.telemetrySpec}
                className="w-full h-full"
              />

              {/* Status Stamp: Sold Out or Limited Edition */}
              {product.isSoldOut ? (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-5 py-2 bg-[#09090B] text-[#F8F4E8] border-2 border-[#F8F4E8] font-display text-lg tracking-widest uppercase rotate-[-8deg] shadow-hard-white">
                    SOLD OUT
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#D2E823] text-[#09090B] border border-[#09090B] rounded-[4px] font-mono-code text-[10px] font-bold uppercase shadow-hard-sm">
                  {product.tag}
                </div>
              )}

              {/* Quick View Button on Image hover */}
              <button
                onClick={() => onOpenQuickView(product)}
                className="absolute bottom-3 right-3 p-2 bg-[#F8F4E8] text-[#09090B] border-2 border-[#09090B] rounded-[8px] shadow-hard-sm opacity-90 hover:opacity-100 hover:bg-[#D2E823] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                title="Quick Spec View"
                data-cursor="pointer"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Product Metadata & Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code text-[#09090B]/70 font-semibold mb-1">
                  <span>{product.category}</span>
                  <span>{product.edition}</span>
                </div>

                <h3 className="font-display text-base text-[#09090B] line-clamp-1 mb-2">
                  {product.name}
                </h3>

                <p className="text-xs text-[#09090B]/80 font-medium line-clamp-2 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selector Pills */}
                {!product.isSoldOut && product.variants && product.variants.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.variants.map((variant: any) => {
                      const isSelected = (selectedSizes[product.id] || product.variants[0].size_label) === variant.size_label;
                      return (
                        <button
                          key={variant.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSizes(prev => ({ ...prev, [product.id]: variant.size_label }));
                          }}
                          className={`px-2 py-1 text-[10px] font-mono-code font-bold uppercase border border-[#09090B] rounded-[4px] transition-all ${
                            isSelected 
                              ? 'bg-[#09090B] text-[#D2E823] shadow-none translate-y-[1px]' 
                              : 'bg-transparent text-[#09090B] hover:bg-[#D2E823]'
                          }`}
                        >
                          {variant.size_label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Price and Add to Bag Bar */}
              <div className="pt-3 border-t-2 border-[#09090B] flex items-center justify-between gap-3">
                <div>
                  <span className="block font-mono-code text-[10px] text-[#09090B]/60 font-bold uppercase">
                    PRICE
                  </span>
                  <span className="font-mono-code text-lg font-bold text-[#09090B] tabular-nums">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>

                {product.isSoldOut ? (
                  <button
                    disabled
                    className="px-4 py-2 bg-[#09090B]/20 text-[#09090B]/50 border-2 border-[#09090B]/40 rounded-[8px] font-mono-code text-xs font-bold uppercase cursor-not-allowed"
                  >
                    ARCHIVED
                  </button>
                ) : (
                  <button
                    onClick={() => handleAdd(product)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase transition-all shadow-hard-sm ${
                      addedProductId === product.id
                        ? 'bg-[#D2E823] text-[#09090B] translate-x-[2px] translate-y-[2px] shadow-none'
                        : 'bg-[#09090B] text-[#D2E823] hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-y-[4px]'
                    }`}
                    data-cursor="pointer"
                  >
                    {addedProductId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>ADD</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Link to Shop */}
      <a
        href="/shop"
        className="block w-full py-6 md:py-8 bg-[#09090B] text-[#D2E823] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg hover:bg-[#D2E823] hover:text-[#09090B] transition-all hover:-translate-y-1 group"
        data-cursor="pointer"
      >
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="font-mono-code text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
            ALLOCATION STATUS: ACTIVE
          </div>
          <div className="font-display text-2xl md:text-4xl uppercase flex items-center gap-4">
            VIEW COMPLETE 30-PIECE ARCHIVE (₦)
            <ArrowRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-2" />
          </div>
        </div>
      </a>
    </section>
  );
};

