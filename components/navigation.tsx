'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './cart-provider';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-[80%] mx-auto flex justify-between items-center h-16 bg-white/40 rounded-full px-8 backdrop-blur-sm">
          <Link href="/" className="text-2xl font-bold text-[#2A2A2A] font-parkinsans">
            Las Fresas
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink href="#menu">Menú</NavLink>
            <NavLink href="#proceso">Proceso</NavLink>
            <NavLink href="#galeria">Galería</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF4D6D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/menu">Menú</MobileNavLink>
            <MobileNavLink href="/proceso">Proceso</MobileNavLink>
            <MobileNavLink href="/nosotros">Nosotros</MobileNavLink>
            <MobileNavLink href="/contacto">Contacto</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[#2A2A2A] hover:text-[#FF4D6D] transition-colors duration-200 font-albert-sans"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-base font-medium text-[#2A2A2A] hover:text-[#FF4D6D] transition-colors duration-200 font-albert-sans"
    >
      {children}
    </Link>
  );
}