'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="h-screen relative overflow-hidden bg-[#F7F0F0]">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"
          style={{ filter: 'brightness(0.9)' }}
        />
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Las Fresas
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-white mb-8 font-poppins"
          >
            Fresas con crema premium, hechas con amor
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              data-order-button
              size="lg"
              className="bg-[#FF4D6D] hover:bg-[#ff3357] text-white font-poppins"
            >
              Ordenar Ahora
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}