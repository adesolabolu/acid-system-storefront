import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { API_BASE_URL, fetchWithAuth } from '../lib/api';

export interface CartItem {
  id: number;
  product_sku: string;
  product_name: string;
  size: string;
  quantity: number;
  base_price: string | number;
}

interface CartContextData {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (sku: string, size: string) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  fetchCart: () => Promise<void>;
  isSyncing: boolean;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  const fetchCart = useCallback(async () => {
    if (!token) return;
    try {
      setIsSyncing(true);
      const res = await fetchWithAuth('/api/cart', {}, token);
      const data = await res.json();
      if (data.cart) {
        setCartItems(data.cart);
      }
    } catch (err) {
      console.error('Fetch cart error', err);
    } finally {
      setIsSyncing(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchCart();

      let intervalId = setInterval(() => {
        fetchCart();
      }, 15000);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${API_BASE_URL}/api/cart/stream`, true);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      
      let lastProcessedLength = 0;
      xhr.onprogress = () => {
        const text = xhr.responseText;
        const newText = text.substring(lastProcessedLength);
        if (newText.includes('cart_update')) {
          fetchCart();
        }
        lastProcessedLength = text.length;
      };
      xhr.send();

      return () => {
        clearInterval(intervalId);
        xhr.abort();
      };
    } else {
      setCartItems([]);
    }
  }, [token, fetchCart]);

  const addToCart = async (sku: string, size: string) => {
    if (!token) return;
    try {
      const res = await fetchWithAuth('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ product_sku: sku, quantity: 1, size }),
      }, token);
      const data = await res.json();
      if (data.success) {
        fetchCart();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = async (id: number) => {
    if (!token) return;
    try {
      const res = await fetchWithAuth('/api/cart', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      }, token);
      const data = await res.json();
      if (data.success) {
        fetchCart();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (Number(item.base_price || 0) * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, totalPrice, addToCart, removeFromCart, fetchCart, isSyncing }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
