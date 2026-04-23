import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio page with masonry grid
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {

  return (
    <>
      <SEOHead 
        title="Modalidades"
        description="Conheça todas as modalidades de cartas de crédito: casa, carro, moto, barco, avião, construção, reforma, viagem, casamento, cirurgias e investimentos."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Cartas de crédito</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-primary">
              Modalidades
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              Cada objetivo merece uma estratégia. Escolha a modalidade que combina com o seu sonho e veja como funciona.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de modalidades */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PortfolioGrid projects={projects} />
        </div>
      </section>

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </>
  );
}
