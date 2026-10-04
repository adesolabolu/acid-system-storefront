"use client";

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from './CartContext';
import { Product } from '@/types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { ProductVisual } from './ProductVisual';
import { ArrowRight, Check, Plus, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { GlitchText } from './GlitchText';

interface ShopClientProps {
  products: Product[];
}

export default function ShopClient({ products }: ShopClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const { cart, addToCart, updateQuantity, removeItem, clearCart, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory.toUpperCase());
  const [selectedSize, setSelectedSize] = useState('ALL');
  const [sortOrder, setSortOrder] = useState<'LOW_TO_HIGH' | 'HIGH_TO_LOW'>('LOW_TO_HIGH');

  const [addedProductId, setAddedProductId] = useState<string | number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const handleAddToCart = (product: Product, size: string) => {
    addToCart(product, size);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1200);
    setIsCartOpen(true);
  };

  const categories = ['ALL', 'TAILORING', 'SHIRTING', 'TOPS', 'BOTTOMS', 'FOOTWEAR & CARRY'];
  const sizes = ['ALL', 'S', 'M', 'L', 'XL', '30', '32', '34', '36', 'EU 41-44', 'ONE SIZE'];

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.material && p.material.toLowerCase().includes(q))
      );
    }

    // Category
    if (selectedCategory !== 'ALL') {
      const sel = selectedCategory.toLowerCase();
      result = result.filter(p => {
        const cat = (p.category || '').toLowerCase();
        if (sel === 'tailoring') return cat.includes('tailoring');
        if (sel === 'shirting') return cat.includes('shirting');
        if (sel === 'tops') return cat.includes('heavyweight tops');
        if (sel === 'bottoms') return cat.includes('bottoms');
        if (sel === 'footwear & carry' || sel === 'footwear') return cat.includes('footwear & carry');
        return false;
      });
    }

    // Size
    if (selectedSize !== 'ALL') {
      result = result.filter(p => {
        if (!p.variants) return false;
        return p.variants.some(v => v.size_label === selectedSize);
      });
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortOrder === 'LOW_TO_HIGH') return a.price - b.price;
      return b.price - a.price;
    });

    return result;
  }, [products, searchQuery, selectedCategory, selectedSize, sortOrder]);

  return (
    <div className="min-h-screen bg-[#F8F4E8] text-[#09090B] font-sans selection:bg-[#D2E823] selection:text-[#09090B]">
      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-1 bg-[#D2E823] text-[#09090B] border-2 border-[#09090B] shadow-hard-sm font-mono-code text-[10px] font-bold tracking-widest uppercase">
              {filteredProducts.length} ALLOCATIONS
            </span>
          </div>
          <GlitchText
            text="READY-TO-WEAR ARCHIVE // SEASON 2026"
            as="h1"
            className="text-3xl md:text-5xl lg:text-6xl text-[#09090B] uppercase"
          />
        </header>

        {/* Sticky Filter Bar */}
        <div className="sticky top-[88px] z-30 bg-[#F8F4E8] border-y-2 border-[#09090B] py-4 mb-10 flex flex-col gap-4 shadow-sm native-unsticky">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search & Sort */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#09090B]/50" />
                <input
                  type="text"
                  placeholder="SEARCH SPECIMENS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase placeholder:text-[#09090B]/40 focus:outline-none focus:ring-2 focus:ring-[#D2E823]"
                />
              </div>
              <button
                onClick={() => setSortOrder(s => s === 'LOW_TO_HIGH' ? 'HIGH_TO_LOW' : 'LOW_TO_HIGH')}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase hover:bg-[#D2E823] transition-colors shrink-0"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {sortOrder === 'LOW_TO_HIGH' ? 'PRICE: LOW > HIGH' : 'PRICE: HIGH > LOW'}
              </button>
            </div>

            {/* Categories (Hidden on Native) */}
            <div className="flex items-center gap-2 w-full lg:w-auto pb-2 lg:pb-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] native-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 font-mono-code text-[10px] font-bold uppercase tracking-wider rounded-[6px] border-2 border-[#09090B] whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#09090B] text-[#D2E823] shadow-hard-sm'
                      : 'bg-white text-[#09090B] hover:bg-[#D2E823]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sizes (Hidden on Native) */}
          <div className="flex items-center gap-2 pb-1 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] native-hide">
            <span className="font-mono-code text-[10px] font-bold text-[#09090B]/60 mr-2 shrink-0">SIZE:</span>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                className={`shrink-0 px-2 py-1 font-mono-code text-[10px] font-bold uppercase rounded-[4px] border border-[#09090B] whitespace-nowrap transition-all ${
                  selectedSize === s
                    ? 'bg-[#09090B] text-[#D2E823]'
                    : 'bg-transparent text-[#09090B] hover:bg-[#D2E823]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Native App Dropdowns (Only visible on Native) */}
          <div className="native-only-flex w-full gap-3 mt-1">
            <div className="relative flex-1">
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 bg-white border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase focus:outline-none focus:ring-2 focus:ring-[#D2E823] shadow-hard-sm"
              >
                {categories.map(c => <option key={c} value={c}>{c === 'ALL' ? 'ALL CATEGORIES' : c}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-[#09090B]" />
              </div>
            </div>
            <div className="relative flex-1">
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 bg-white border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase focus:outline-none focus:ring-2 focus:ring-[#D2E823] shadow-hard-sm"
              >
                {sizes.map(s => <option key={s} value={s}>{s === 'ALL' ? 'ALL SIZES' : s}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-[#09090B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 native-product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full bg-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg flex flex-col justify-between overflow-hidden transition-transform duration-150 hover:-translate-y-1"
            >
              {/* Visual */}
              <div className="relative w-full aspect-square border-b-2 border-[#09090B] bg-[#18181B] overflow-hidden group">
                <ProductVisual
                  type={product.visualType}
                  identifier={product.slug || product.sku_code || product.id}
                  isSoldOut={product.isSoldOut}
                  telemetrySpec={product.telemetrySpec}
                  className="w-full h-full p-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {product.isSoldOut ? (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="px-5 py-2 bg-[#09090B] text-[#F8F4E8] border-2 border-[#F8F4E8] font-display text-lg tracking-widest uppercase rotate-[-8deg] shadow-hard-white">
                      SOLD OUT
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#D2E823] text-[#09090B] border border-[#09090B] rounded-[4px] font-mono-code text-[10px] font-bold uppercase shadow-hard-sm">
                    {product.category}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-[#09090B] line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-mono-code font-bold text-[#09090B]/60 uppercase mb-3">
                    {product.material || 'TECHNICAL FABRIC'}
                  </p>

                  {/* Size Selector Pills */}
                  {!product.isSoldOut && product.variants && product.variants.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
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

                {/* Footer Action */}
                <div className="pt-4 border-t-2 border-[#09090B] flex items-center justify-between gap-3">
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
                      onClick={() => handleAddToCart(product, selectedSizes[product.id] || product.variants?.[0]?.size_label || 'ONE SIZE')}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 border-2 border-[#09090B] rounded-[8px] font-mono-code text-xs font-bold uppercase transition-all shadow-hard-sm ${
                        addedProductId === product.id
                          ? 'bg-[#D2E823] text-[#09090B] translate-x-[2px] translate-y-[2px] shadow-none'
                          : 'bg-[#09090B] text-[#D2E823] hover:bg-[#D2E823] hover:text-[#09090B] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-y-[4px]'
                      }`}
                    >
                      {addedProductId === product.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>ADDED</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>ADD TO ALLOCATION</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}
