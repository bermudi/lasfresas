'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleCheck, Leaf, Heart, Clock } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: 'Selección Premium',
    description: 'Elegimos las fresas más frescas y dulces'
  },
  {
    icon: Heart,
    title: 'Preparación Artesanal',
    description: 'Elaboramos nuestra crema con ingredientes naturales'
  },
  {
    icon: CircleCheck,
    title: 'Control de Calidad',
    description: 'Verificamos cada detalle antes de servir'
  },
  {
    icon: Clock,
    title: 'Entrega Inmediata',
    description: 'Servicio rápido para mantener la frescura'
  }
];

export function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-[#F7F0F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-gray-600 font-poppins">
            Cuidamos cada detalle en la preparación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-6 inline-block">
                <step.icon className="w-12 h-12 text-[#FF4D6D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2A2A] mb-2">{step.title}</h3>
              <p className="text-gray-600 font-poppins">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}