import { motion } from 'framer-motion';
import { Instagram, Linkedin, Facebook, ShieldCheck, Handshake, Sparkles, MessageCircle } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

const valores = [
  { icon: ShieldCheck, title: 'Transparência', text: 'Condições, taxas e prazos explicados de forma clara antes de qualquer assinatura.' },
  { icon: Handshake, title: 'Atendimento personalizado', text: 'Cada cliente recebe um plano desenhado sob medida para o seu objetivo e orçamento.' },
  { icon: Sparkles, title: 'Acompanhamento contínuo', text: 'Suporte do primeiro contato até a contemplação e uso do crédito.' },
];

/**
 * About page with photographer biography and professional information
 * Features split layout with portrait video and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="Sobre"
        description={`Conheça ${photographerInfo.brandName}: ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border bg-secondary/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-primary">
              Sobre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Consultor financeiro especializado em cartas de crédito
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait and Biography - Split Layout */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.8, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted shadow-[var(--shadow-elegant)]">
                <img
                  src={photographerInfo.portraitImage}
                  alt={`Retrato de ${photographerInfo.brandName}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href={`https://wa.me/${photographerInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="size-5" />
                </a>
                {photographerInfo.socialLinks.instagram && (
                  <a
                    href={photographerInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.linkedin && (
                  <a
                    href={photographerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.facebook && (
                  <a
                    href={photographerInfo.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="size-5" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Biography and Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Name and Tagline */}
              <div className="space-y-3">
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary">
                  {photographerInfo.brandName}
                </h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">
                  {photographerInfo.tagline}
                </p>
              </div>

              <Separator />

              {/* Biography */}
              <div className="space-y-4">
                {photographerInfo.biography.split('\n\n').map((paragraph, index) => {
                  const parts = paragraph.split(/(Ademicon)/g);
                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {parts.map((part, i) =>
                        part === 'Ademicon' ? (
                          <span key={i} className="text-red-600 dark:text-red-500 font-medium">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">E-mail: </span>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {photographerInfo.email}
                  </a>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Atendimento: </span>
                  <span className="text-foreground">{photographerInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/40 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Meus valores</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">O que guia o meu atendimento</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-lg p-8 space-y-4 shadow-[var(--shadow-elegant)]">
                <div className="inline-flex p-3 rounded-full bg-accent/15 text-accent">
                  <v.icon className="size-6" />
                </div>
                <h3 className="font-serif text-xl text-primary">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
