'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: '1',
    name: 'Fresas Clásicas',
    description: 'Nuestras tradicionales fresas con crema, decoradas con chocolate rallado',
    price: 89,
    image: 'https://images.unsplash.com/photo-1584448275442-37f6357a499e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    name: 'Fresas Especiales',
    description: 'Con nuestra crema especial y toppings premium a elección',
    price: 119,
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Fresas Supremas',
    description: 'La experiencia definitiva con fresas seleccionadas y decoración artesanal',
    price: 149,
    image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export function ProductShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="menu" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 font-poppins">Descubre el sabor de la perfección</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover-lift">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 font-poppins">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#FF4D6D]">${product.price}</span>
                    <Button variant="outline" className="hover:bg-[#FF4D6D] hover:text-white">
                      Ordenar
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}