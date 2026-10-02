"use client";
import React, { useState, useEffect } from 'react';
import { BentoCategoryGrid } from './BentoCategoryGrid';
import { CartDrawer } from './CartDrawer';
import { CustomCursor } from './CustomCursor';
import { DropsSection } from './DropsSection';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { MarqueeBanner } from './MarqueeBanner';
import { ManifestoSection } from './ManifestoSection';
import { Navbar } from './Navbar';
import { NoiseOverlay } from './NoiseOverlay';
import { ProductModal } from './ProductModal';
import { CartItem, Product } from '../types';

export default function ClientStorefront({ initialProducts }: { initialProducts: Product[] }) {
  const [products] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Persist cart to local storage
  useEffect(() => {
    const saved = localStorage.getItem('acidsys_cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch(e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('acidsys_cart', JSON.stringify(cart));
  }, [cart]);

  // Cart helper functions
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: Product, size?: string) => {
    // Determine size to use
    let selectedSize = size;
    if (!selectedSize) {
      selectedSize = product.variants?.[0]?.size_label || 'ONE SIZE';
    }

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === selectedSize
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { product, quantity: 1, size: selectedSize }];
    });
    showToast(`ADDED ${product.name} (SIZE ${selectedSize}) TO BAG`);
  };

  const handleUpdateQuantity = (productId: string | number, size: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveItem = (productId: string | number, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenQuickViewById = (productId: string | number) => {
    const found = products.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
      setIsProductModalOpen(true);
    }
  };

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleScrollToDrops = () => {
    const el = document.getElementById('drops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromBento = (category: string) => {
    setSelectedCategory(category);
    handleScrollToDrops();
  };

  return (
    <div className="min-h-screen bg-[#F8F4E8] text-[#09090B] flex flex-col relative selection:bg-[#D2E823] selection:text-[#09090B]">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <HeroSection onExploreDrops={handleScrollToDrops} onOpenQuickView={(id) => handleOpenQuickViewById(id)} />
        <MarqueeBanner theme="acid" />
        <BentoCategoryGrid />
        <DropsSection
          products={products}
          onAddToCart={handleAddToCart}
          onOpenQuickView={handleOpenQuickView}
        />
        <MarqueeBanner
          theme="dark"
          items={[
            '★ ARCHIVAL GRADE PACKAGING',
            '/// 4PX BOX-SHADOW ZERO-BLUR',
            '⚡ 100% CORDURA & VULCANIZED RUBBER',
            '★ WORLDWIDE EXPRESS PROTOCOL',
            '/// DELA GOTHIC ONE HEADINGS',
          ]}
        />
        <ManifestoSection />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-[#D2E823] text-[#09090B] font-mono-code text-xs font-bold uppercase border-2 border-[#09090B] rounded-[10px] shadow-hard animate-bounce flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#09090B]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
