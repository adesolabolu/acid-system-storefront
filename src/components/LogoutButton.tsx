"use client";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem('acidsys_cart');
        signOut({ callbackUrl: '/' });
      }}
      className="mt-6 flex items-center justify-center gap-2 w-full bg-[#09090B] text-[#F8F4E8] font-mono-code font-bold text-xs uppercase px-4 py-3 border-2 border-[#09090B] hover:bg-red-600 hover:border-red-600 transition-colors"
    >
      <LogOut className="w-4 h-4" />
      <span>TERMINATE CONNECTION</span>
    </button>
  );
};
