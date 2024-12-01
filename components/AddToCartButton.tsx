'use client';

import { useCart } from '@/components/cart-provider';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    options?: Record<string, string>;
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => addItem({ ...product, quantity: product.quantity || 1 })}
      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg 
                 flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <ShoppingCart className="w-4 h-4" />
      <span>Agregar al carrito</span>
    </motion.button>
  );
}
