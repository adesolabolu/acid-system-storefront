"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  const { data: session, status } = useSession();
  const [hasFetchedDbCart, setHasFetchedDbCart] = useState(false);

  // Initial local storage load
  useEffect(() => {
    const saved = localStorage.getItem('acidsys_cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  // Fetch from DB when authenticated
  useEffect(() => {
    if (status === 'authenticated' && !hasFetchedDbCart) {
      fetch('/api/cart')
        .then((res) => res.json())
        .then((data) => {
          if (data.cart && Array.isArray(data.cart)) {
            setCart((prev) => {
              const merged = [...data.cart];
              for (const item of prev) {
                const existing = merged.find(
                  (m) => m.product.id === item.product.id && m.size === item.size
                );
                if (existing) {
                  existing.quantity = Math.max(existing.quantity, item.quantity);
                } else {
                  merged.push(item);
                }
              }
              return merged;
            });
          }
          setHasFetchedDbCart(true);
        })
        .catch(console.error);
    } else if (status === 'unauthenticated') {
      setHasFetchedDbCart(false);
    }
  }, [status, hasFetchedDbCart]);

  // Sync to local storage & DB
  useEffect(() => {
    localStorage.setItem('acidsys_cart', JSON.stringify(cart));
    if (status === 'authenticated' && hasFetchedDbCart) {
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart }),
      }).catch(console.error);
    }
  }, [cart, status, hasFetchedDbCart]);

  const addToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { product, quantity: 1, size }];
    });
  };

  const updateQuantity = (productId: string | number, size: string, delta: number) => {
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

  const removeItem = (productId: string | number, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)));
  };

  const clearCart = () => setCart([]);

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
