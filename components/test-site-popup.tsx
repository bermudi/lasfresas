'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function TestSitePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element or its parents have the data-order-button attribute
      if (target.closest('[data-order-button]')) {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 2000); // Close after 2 seconds
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed inset-x-0 top-24 z-[100] flex justify-center items-center px-4"
        >
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-6 border-2 border-primary relative overflow-hidden">
            {/* Decorative strawberries */}
            <div className="absolute -top-4 -left-4 w-12 h-12 text-3xl rotate-[-25deg]">🍓</div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 text-3xl rotate-[25deg]">🍓</div>

            <h3 className="text-2xl font-parkinsans text-primary text-center mb-2">
              Sitio de Prueba
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              Este sitio es una recreación del sitio de un cliente.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
