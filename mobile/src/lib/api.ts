import { Platform } from 'react-native';

// Fallback to the live production URL to ensure physical device testing works smoothly
const PROD_API_URL = 'https://acid-system.vercel.app';

export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || PROD_API_URL;

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}, token?: string | null) {
  const headers = new Headers(options.headers || {});
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  return response;
}
