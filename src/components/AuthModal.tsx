"use client";
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlitchText } from './GlitchText';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [optIn, setOptIn] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSignIn = () => {
    setIsConnecting(true);
    if (optIn) {
      localStorage.setItem('acidsys_newsletter_pending', 'true');
    } else {
      localStorage.removeItem('acidsys_newsletter_pending');
    }
    signIn('google');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 bg-[#09090B]/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-md bg-[#F8F4E8] border-2 border-[#09090B] rounded-[16px] shadow-hard-lg overflow-hidden"
          >
            {/* Header */}
        <div className="bg-[#09090B] text-[#D2E823] p-4 flex items-center justify-between border-b-2 border-[#09090B]">
          <div className="font-mono-code font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D2E823] rounded-full animate-pulse" />
            SYSTEM AUTHENTICATION
          </div>
          <button 
            onClick={onClose}
            className="text-[#F8F4E8] hover:text-[#D2E823] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <GlitchText
            text="LOGIN"
            as="h2"
            className="text-2xl md:text-3xl font-display uppercase text-[#09090B] mb-2"
          />
          <p className="text-[#09090B]/70 font-medium text-sm mb-8">
            Authenticate your terminal to sync cart data, track previous deployments, and access the operator dashboard.
          </p>

          <button
            onClick={handleSignIn}
            disabled={isConnecting}
            className="w-full flex items-center justify-center gap-3 py-4 bg-white border-2 border-[#09090B] rounded-[10px] shadow-hard-sm hover:translate-y-[2px] hover:shadow-none transition-all text-[#09090B] font-mono-code font-bold text-sm disabled:opacity-50"
          >
            {isConnecting ? (
              <span>ESTABLISHING CONNECTION...</span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>CONTINUE WITH GOOGLE</span>
              </>
            )}
          </button>

          {/* Newsletter Opt-in */}
          <div className="mt-6 flex items-start gap-3">
            <button
              type="button"
              onClick={() => setOptIn(!optIn)}
              className={`mt-0.5 flex-shrink-0 w-5 h-5 border-2 rounded-[4px] flex items-center justify-center transition-colors ${
                optIn 
                  ? 'bg-[#09090B] border-[#09090B]' 
                  : 'bg-white border-[#09090B]'
              }`}
            >
              {optIn && <Check className="w-3 h-3 text-[#D2E823]" />}
            </button>
            <div 
              className="text-xs font-mono-code text-[#09090B] cursor-pointer select-none"
              onClick={() => setOptIn(!optIn)}
            >
              <span className="font-bold">ENROLL IN PRIORITY ALERTS</span>
              <p className="text-[#09090B]/60 mt-1">Receive encrypted batch release notices prior to public drops. Zero spam.</p>
            </div>
            </div>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
