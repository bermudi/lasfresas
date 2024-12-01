'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="w-full max-w-2xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-card rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-parkinsans text-primary mb-6 text-center">
          Mándame un recadito! 🍓
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-albert-sans text-foreground mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 
                       transition-colors hover:border-primary/50"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-albert-sans text-foreground mb-2"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 
                       transition-colors hover:border-primary/50"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-albert-sans text-foreground mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 
                       transition-colors hover:border-primary/50 resize-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary text-primary-foreground font-albert-sans 
                     py-3 rounded-lg hover:opacity-90 transition-opacity
                     shadow-md hover:shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
