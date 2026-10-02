"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from "next-auth/react";
import { ArrowRight, Check, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';
import { GlitchText } from './GlitchText';
import { ProductVisual } from './ProductVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string | number, size: string, delta: number) => void;
  onRemoveItem: (productId: string | number, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [createdOrderId, setCreatedOrderId] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || session.user?.name || '',
        email: prev.email || session.user?.email || '',
      }));
    }
  }, [session?.user]);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingThreshold = 200000;
  const shippingCost = 15000;
  const freeShipping = subtotal >= shippingThreshold;
  const progressPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.name,
          customerEmail: formData.email,
          shippingAddress: { phone: formData.phone, address: formData.address },
          items: items.map(i => ({
            product_id: i.product.id,
            variant_id: i.product.variants?.find((v: any) => v.size_label === i.size)?.id || null,
            product_name: i.product.name,
            size_label: i.size,
            unit_price: i.product.price, // the aliased base_price
            quantity: i.quantity
          })),
          totalAmount: freeShipping ? subtotal : subtotal + shippingCost
        })
      });

      const data = await response.json();
      if (data.success) {
        setCreatedOrderId(data.orderId);
        setOrderConfirmed(true);
        setShowCheckoutForm(false);
      } else {
        alert('Checkout failed: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred during checkout');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleCloseAll = () => {
    setOrderConfirmed(false);
    setShowCheckoutForm(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-[#09090B]/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ transform: "translateX(100%)" }}
            animate={{ transform: "translateX(0%)" }}
            exit={{ transform: "translateX(100%)" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-md bg-[#F8F4E8] border-l-2 border-[#09090B] h-full shadow-hard-xl flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#09090B] bg-[#F8F4E8]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#09090B]" />
            <GlitchText
              text="BAG MANIFEST"
              as="h2"
              className="text-lg md:text-xl text-[#09090B]"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-[#09090B] rounded-[8px] bg-transparent hover:bg-[#D2E823] transition-colors"
            data-cursor="pointer"
          >
            <X className="w-5 h-5 text-[#09090B]" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3 bg-[#D2E823] border-b-2 border-[#09090B]">
          <div className="flex items-center justify-between font-mono-code text-xs font-bold text-[#09090B] mb-1.5">
            <span>
              {freeShipping
                ? '★ UNLOCKED FREE NATIONWIDE & GLOBAL DISPATCH'
                : `ADD ₦${(shippingThreshold - subtotal).toLocaleString()} MORE FOR FREE SHIPPING`}
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-[#09090B]/20 border border-[#09090B] rounded-none overflow-hidden">
            <div
              className="h-full bg-[#09090B] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {orderConfirmed ? (
            <div className="p-6 bg-white border-2 border-[#09090B] rounded-[16px] shadow-hard text-center">
              <div className="w-12 h-12 bg-[#D2E823] border-2 border-[#09090B] rounded-full mx-auto flex items-center justify-center mb-3">
                <Check className="w-6 h-6 text-[#09090B]" />
              </div>
              <div className="font-mono-code text-xs text-[#09090B]/60 font-bold uppercase mb-1">
                DISPATCH PROTOCOL INITIATED
              </div>
              <h3 className="font-display text-xl text-[#09090B] mb-2">
                ORDER #{createdOrderId || 'ACID-2026'} CONFIRMED
              </h3>
              <p className="text-xs text-[#09090B]/80 font-medium mb-4">
                Manifest recorded. Your artifacts are being boxed in sealed archival packaging and prepared for dispatch from Lagos atelier.
              </p>
              <div className="p-3 bg-[#F8F4E8] border border-[#09090B] rounded-[8px] font-mono-code text-xs text-left space-y-1 mb-4">
                <div className="flex justify-between font-bold">
                  <span>TRACKING ID:</span>
                  <span>ACID-LAGOS-9942</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH CARRIER:</span>
                  <span>DHL EXPRESS / ATELIER DISPATCH</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span>
                  <span className="text-[#09090B] font-bold">PREPARING SHIPMENT</span>
                </div>
              </div>
              <button
                onClick={handleCloseAll}
                className="w-full btn-hard py-3 text-xs uppercase"
                data-cursor="pointer"
              >
                RETURN TO STORE
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 border-2 border-dashed border-[#09090B]/50 rounded-full mx-auto flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-[#09090B]/40" />
              </div>
              <h3 className="font-display text-lg text-[#09090B] mb-2">
                BAG IS CURRENTLY EMPTY
              </h3>
              <p className="text-xs text-[#09090B]/70 font-medium max-w-xs mx-auto mb-6">
                No tactical drops allocated. Inspect the new collection to secure limited pieces.
              </p>
              <button
                onClick={onClose}
                className="btn-hard py-2.5 px-6 text-xs uppercase"
                data-cursor="pointer"
              >
                EXPLORE DROPS
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="p-4 bg-white border-2 border-[#09090B] rounded-[12px] shadow-hard-sm flex gap-4"
              >
                {/* Visual thumbnail */}
                <div className="w-20 h-20 border-2 border-[#09090B] rounded-[8px] overflow-hidden bg-[#18181B] shrink-0">
                  <ProductVisual type={item.product.visualType} identifier={item.product.slug || item.product.sku_code || item.product.id} telemetrySpec={item.product.telemetrySpec} className="w-full h-full" />
                </div>

                {/* Info & Stepper */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-display text-xs text-[#09090B] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="font-mono-code text-[11px] text-[#09090B]/70 font-bold">
                        SIZE: {item.size} · ₦{item.product.price.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id, item.size)}
                      className="text-[#09090B]/50 hover:text-red-600 transition-colors p-1"
                      title="Remove artifact"
                      data-cursor="pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#09090B]/20">
                    <div className="flex items-center border-2 border-[#09090B] rounded-[6px] overflow-hidden bg-[#F8F4E8]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                        className="px-2 py-1 hover:bg-[#D2E823] transition-colors"
                        data-cursor="pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 font-mono-code text-xs font-bold text-[#09090B]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                        className="px-2 py-1 hover:bg-[#D2E823] transition-colors"
                        data-cursor="pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono-code text-xs font-bold text-[#09090B]">
                      ₦{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {!orderConfirmed && items.length > 0 && (
          <div className="p-6 border-t-2 border-[#09090B] bg-white space-y-4">
            <div className="space-y-1.5 font-mono-code text-xs">
              <div className="flex justify-between text-[#09090B]/70 font-bold">
                <span>SUBTOTAL:</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#09090B]/70 font-bold">
                <span>SHIPPING:</span>
                <span>{freeShipping ? 'FREE' : `₦${shippingCost.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between text-[#09090B] font-bold text-sm pt-2 border-t border-[#09090B]/20">
                <span>ESTIMATED TOTAL:</span>
                <span className="tabular-nums">
                  ₦{(freeShipping ? subtotal : subtotal + shippingCost).toLocaleString()}
                </span>
              </div>
            </div>

            {showCheckoutForm ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-3 pt-2 border-t border-[#09090B]/20">
                <input required type="text" placeholder="FULL NAME" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-[#F8F4E8] border border-[#09090B] px-3 py-2 text-xs font-mono-code placeholder:text-[#09090B]/40 focus:outline-none focus:border-[#D2E823] focus:ring-1 focus:ring-[#D2E823]" />
                <input required type="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-[#F8F4E8] border border-[#09090B] px-3 py-2 text-xs font-mono-code placeholder:text-[#09090B]/40 focus:outline-none focus:border-[#D2E823] focus:ring-1 focus:ring-[#D2E823]" />
                <input required type="tel" placeholder="PHONE NUMBER" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#F8F4E8] border border-[#09090B] px-3 py-2 text-xs font-mono-code placeholder:text-[#09090B]/40 focus:outline-none focus:border-[#D2E823] focus:ring-1 focus:ring-[#D2E823]" />
                <textarea required placeholder="DELIVERY ADDRESS" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full bg-[#F8F4E8] border border-[#09090B] px-3 py-2 text-xs font-mono-code placeholder:text-[#09090B]/40 focus:outline-none focus:border-[#D2E823] focus:ring-1 focus:ring-[#D2E823] min-h-[60px]" />
                
                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="w-full btn-hard py-3.5 text-xs uppercase flex items-center justify-center gap-2 mt-2"
                >
                  {isCheckingOut ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#D2E823] border-t-transparent rounded-full animate-spin" />
                      <span>INITIALIZING CHECKOUT DISPATCH...</span>
                    </>
                  ) : (
                    <>
                      <span>CONFIRM SECURE PAYMENT</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full btn-hard py-3.5 text-xs uppercase flex items-center justify-center gap-2"
                data-cursor="pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

