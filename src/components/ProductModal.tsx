"use client";
import React, { useState } from 'react';
import { Check, Plus, Shield, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { GlitchText } from './GlitchText';
import { ProductVisual } from './ProductVisual';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [justAdded, setJustAdded] = useState<boolean>(false);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAdd = () => {
    if (product.isSoldOut) return;
    onAddToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 bg-[#09090B]/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-3xl bg-[#F8F4E8] border-2 border-[#09090B] rounded-[24px] shadow-hard-xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#09090B] bg-[#F8F4E8]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#D2E823] border border-[#09090B]" />
            <span className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#09090B]">
              SPECIMEN INSPECTION // {String(product.id).toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-[#09090B] rounded-[8px] bg-transparent hover:bg-[#D2E823] transition-colors"
            data-cursor="pointer"
          >
            <X className="w-5 h-5 text-[#09090B]" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Visual container */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square border-2 border-[#09090B] rounded-[16px] overflow-hidden bg-[#18181B] shadow-hard">
              <ProductVisual
                type={product.visualType}
                identifier={product.slug || product.sku_code || product.id}
                isSoldOut={product.isSoldOut}
                telemetrySpec={product.telemetrySpec}
                className="w-full h-full"
              />
              {product.isSoldOut && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-6 py-2 bg-[#09090B] text-[#F8F4E8] border-2 border-[#F8F4E8] font-display text-xl tracking-widest uppercase rotate-[-8deg] shadow-hard-white">
                    SOLD OUT
                  </div>
                </div>
              )}
            </div>

            {/* Quick Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 bg-[#D2E823] border border-[#09090B] rounded-[6px] font-mono-code text-xs font-bold text-[#09090B]">
                {product.edition}
              </span>
              <span className="px-2.5 py-1 bg-[#09090B] text-[#D2E823] border border-[#09090B] rounded-[6px] font-mono-code text-xs font-bold">
                {product.category}
              </span>
              {product.colorway && (
                <span className="px-2.5 py-1 bg-white border border-[#09090B] rounded-[6px] font-mono-code text-xs font-bold text-[#09090B]">
                  COLOR: {product.colorway}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Spec sheet & Action */}
          <div className="flex flex-col justify-between">
            <div>
              <GlitchText
                text={product.name}
                as="h2"
                className="text-2xl md:text-3xl text-[#09090B] mb-2"
              />

              <div className="text-2xl font-mono-code font-bold text-[#09090B] mb-4">
                ₦{product.price.toLocaleString()}
              </div>

              <p className="text-sm text-[#09090B]/90 font-medium mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Size selection */}
              {!product.isSoldOut && (
                <div className="mb-6">
                  <div className="flex items-center justify-between font-mono-code text-xs font-bold text-[#09090B] mb-2 uppercase">
                    <span>SELECT SIZE (BOXY FIT)</span>
                    <span className="text-[#09090B]/60">TRUE TO BRUTALIST SIZE</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {(product.variants?.map(v => v.size_label) || ['ONE SIZE']).map((s: string) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2 font-mono-code text-xs font-bold border-2 border-[#09090B] rounded-[8px] transition-all ${
                          selectedSize === s
                            ? 'bg-[#09090B] text-[#D2E823] shadow-hard-sm'
                            : 'bg-white text-[#09090B] hover:bg-[#D2E823]'
                        }`}
                        data-cursor="pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="border-2 border-[#09090B] rounded-[12px] overflow-hidden mb-6 bg-white">
                  <div className="bg-[#09090B] text-[#D2E823] px-3 py-1.5 font-mono-code text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>GARMENT SPECIFICATIONS</span>
                  </div>
                  <div className="divide-y divide-[#09090B]/20 font-mono-code text-xs">
                    {product.specs.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between px-3 py-2">
                        <span className="text-[#09090B]/70 font-bold">{item.label}</span>
                        <span className="text-[#09090B] font-bold text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action CTA */}
            <div>
              {product.isSoldOut ? (
                <button
                  disabled
                  className="w-full py-4 bg-[#09090B]/20 text-[#09090B]/50 border-2 border-[#09090B]/40 rounded-[12px] font-mono-code text-sm font-bold uppercase cursor-not-allowed text-center"
                >
                  SPECIMEN ALLOCATED // ARCHIVED
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="w-full btn-hard py-4 text-sm uppercase flex items-center justify-center gap-2"
                  data-cursor="pointer"
                >
                  {justAdded ? (
                    <>
                      <Check className="w-5 h-5 text-[#D2E823]" />
                      <span>ADDED TO BAG (SIZE {selectedSize})</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 text-[#D2E823]" />
                      <span>ADD TO BAG — ₦{product.price.toLocaleString()}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

