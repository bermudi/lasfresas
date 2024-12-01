import './globals.css';
import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { CartProvider } from '@/components/cart-provider';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCTA } from '@/components/floating-cta';
import { TestSitePopup } from '@/components/test-site-popup';
import { cn } from '@/lib/utils';

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  variable: '--font-albert-sans'
});

const parkin = Albert_Sans({ 
  subsets: ['latin'],
  variable: '--font-parkin-sans'
});

export const metadata: Metadata = {
  title: 'Las Fresas | Fresas con Crema Premium',
  description: 'Los mejores postres mexicanos de fresas con crema',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-albert-sans antialiased', albertSans.variable, parkin.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <Navigation />
            {children}
            <Toaster />
            <FloatingCTA />
            <TestSitePopup />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}