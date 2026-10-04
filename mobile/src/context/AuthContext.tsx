import React, { createContext, useContext, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as SecureStore from 'expo-secure-store';
import { API_BASE_URL, fetchWithAuth } from '../lib/api';

WebBrowser.maybeCompleteAuthSession();

export interface User {
  id: number;
  email: string;
  name?: string;
  image?: string;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: () => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID || 'PLACEHOLDER_IOS',
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID || 'PLACEHOLDER_ANDROID',
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID || 'PLACEHOLDER_WEB',
  });

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      fetchUserInfo(response.authentication.accessToken);
    }
  }, [response]);

  const loadSession = async () => {
    try {
      const storedToken = await SecureStore.getItemAsync('session_token');
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserInfo = async (accessToken: string) => {
    try {
      setIsLoading(true);
      const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const googleUser = await res.json();

      const backendRes = await fetchWithAuth('/api/auth/mobile-login', {
        method: 'POST',
        body: JSON.stringify({
          email: googleUser.email,
          name: googleUser.name,
          image: googleUser.picture,
        }),
      });

      const data = await backendRes.json();
      if (data.success) {
        await SecureStore.setItemAsync('session_token', data.token);
        setToken(data.token);
        setUser(data.user);
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const login = () => {
    promptAsync();
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('session_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
