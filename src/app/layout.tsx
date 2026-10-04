import type { Metadata } from 'next';
import { Dela_Gothic_One, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';

const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dela',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'ACID//SYS READY-TO-WEAR',
  description: 'ACID//SYS READY-TO-WEAR',
};

import { headers } from 'next/headers';
import { CartProvider } from '@/components/CartContext';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isNativeApp = userAgent.includes('AcidSysMobileApp');

  return (
    <html lang="en" className={isNativeApp ? 'is-native-app' : ''}>
      <body className={`${delaGothicOne.variable} ${spaceGrotesk.variable}`}>
        <SessionWrapper>
          <CartProvider>
            {children}
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
