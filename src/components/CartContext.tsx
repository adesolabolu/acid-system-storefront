"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { CartItem, Product } from '@/types';

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  updateQuantity: (productId: string | number, size: string, delta: number) => void;
  removeItem: (productId: string | number, size: string) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { status } = useSession();

  const fetchCart = useCallback(async () => {
    if (status !== 'authenticated') return;
    try {
      const res = await fetch('/api/cart', { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' } });
      const data = await res.json();
      if (data.cart) {
        const mapped: CartItem[] = data.cart.map((item: any) => ({
          product: {
            id: item.product_sku,
            sku_code: item.product_sku,
            name: item.product_name,
            price: Number(item.base_price),
            base_price: Number(item.base_price),
            visualType: item.cad_type,
            cad_type: item.cad_type,
            description: '',
            category: '',
            isSoldOut: false,
            edition: 'STANDARD',
            tag: '',
            variants: [],
            in_stock: true,
          } as Product,
          quantity: item.quantity,
          size: item.size
        }));
        setCart(mapped);
        localStorage.setItem('acidsys_cart', JSON.stringify(mapped));
      }
    } catch (e) {
      console.error('Failed to fetch DB cart:', e);
    }
  }, [status]);

  // Initial local storage load
  useEffect(() => {
    const saved = localStorage.getItem('acidsys_cart');
    if (saved) {
      try { setCart(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  // DB Sync & SSE integration
  useEffect(() => {
    if (status === 'authenticated') {
      fetchCart();
      const evtSource = new EventSource('/api/cart/stream');
      evtSource.addEventListener('cart_update', () => {
         fetchCart();
      });
      return () => {
        evtSource.close();
      };
    } else if (status === 'unauthenticated') {
      setCart([]);
      localStorage.removeItem('acidsys_cart');
    }
  }, [status, fetchCart]);

  const addToCart = async (product: Product, size: string) => {
    const sku = product.sku_code;
    if (!sku) {
      console.error('Product is missing SKU code');
      return;
    }

    // Optimistic UI update
    setCart((prev) => {
      const idx = prev.findIndex(i => i.product.sku_code === sku && i.size === size);
      if (idx > -1) {
        const next = [...prev];
        next[idx].quantity += 1;
        return next;
      }
      return [...prev, { product, quantity: 1, size }];
    });

    if (status === 'authenticated') {
      await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_sku: sku, quantity: 1, size })
      });
    }
  };

  const updateQuantity = async (productId: string | number, size: string, delta: number) => {
    const item = cart.find(i => i.product.id === productId && i.size === size);
    if (!item) return;
    const sku = item.product.sku_code;
    if (!sku) return;
    
    if (item.quantity + delta <= 0) {
      removeItem(productId, size);
      return;
    }

    // Optimistic
    setCart(prev => prev.map(i => 
      i.product.id === productId && i.size === size ? { ...i, quantity: i.quantity + delta } : i
    ));

    if (status === 'authenticated') {
      await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_sku: sku, quantity: delta, size })
      });
    }
  };

  const removeItem = async (productId: string | number, size: string) => {
    const item = cart.find(i => i.product.id === productId && i.size === size);
    if (!item) return;
    const sku = item.product.sku_code;
    if (!sku) return;

    // Optimistic
    setCart(prev => prev.filter(i => !(i.product.id === productId && i.size === size)));

    if (status === 'authenticated') {
      await fetch('/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_sku: sku, size })
      });
    }
  };

  const clearCart = async () => {
    setCart([]);
    if (status === 'authenticated') {
      try {
        await fetch('/api/cart', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clearAll: true })
        });
      } catch (e) {
        console.error('Failed to clear DB cart', e);
      }
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
