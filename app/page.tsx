import { Hero } from '@/components/hero';
import { ProductShowcase } from '@/components/product-showcase';
import { Process } from '@/components/process';
import { Gallery } from '@/components/gallery';
import { FloatingCTA } from '@/components/floating-cta';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Process />
      <Gallery />
      <ContactForm />
      <FloatingCTA />
    </main>
  );
}