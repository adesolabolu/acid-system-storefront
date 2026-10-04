"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Grid, User } from 'lucide-react';
import { useSession } from 'next-auth/react';

interface BottomTabBarProps {
  onOpenAuth?: () => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ onOpenAuth }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useSession();

  const handleAccountClick = () => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    } else if (onOpenAuth) {
      onOpenAuth();
    } else {
      router.push('/api/auth/signin');
    }
  };

  return (
    <div className="hidden native-bottom-bar fixed bottom-0 left-0 right-0 z-[200] bg-[#F8F4E8] border-t-2 border-[#09090B] h-16 pb-safe grid-cols-3 shadow-[0_-4px_0_0_rgba(9,9,11,1)]">
      <Link href="/" className={`flex flex-col items-center justify-center gap-1 border-r-2 border-[#09090B] transition-colors ${pathname === '/' ? 'bg-[#09090B] text-[#D2E823]' : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]'}`}>
        <Home className="w-5 h-5" />
        <span className="font-mono-code text-[9px] font-bold uppercase tracking-wider">Home</span>
      </Link>
      <Link href="/shop" className={`flex flex-col items-center justify-center gap-1 border-r-2 border-[#09090B] transition-colors ${pathname === '/shop' ? 'bg-[#09090B] text-[#D2E823]' : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]'}`}>
        <Grid className="w-5 h-5" />
        <span className="font-mono-code text-[9px] font-bold uppercase tracking-wider">Shop</span>
      </Link>
      <div 
        onClick={handleAccountClick} 
        className={`flex flex-col items-center justify-center gap-1 transition-colors cursor-pointer ${pathname === '/dashboard' ? 'bg-[#09090B] text-[#D2E823]' : 'bg-[#F8F4E8] text-[#09090B] hover:bg-[#D2E823]'}`}
      >
        <User className="w-5 h-5" />
        <span className="font-mono-code text-[9px] font-bold uppercase tracking-wider">Account</span>
      </div>
    </div>
  );
};
