import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';

/**
 * Contact page with form and contact information
 * Features validated contact form and availability status
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contato"
        description={`Fale com a ${photographerInfo.brandName} para uma consulta gratuita sobre cartas de crédito. ${photographerInfo.availability}`}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border bg-secondary/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Contato</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-primary">
              Vamos conversar
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              Consulta gratuita, sem compromisso
            </p>
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:opacity-90 rounded-full px-8 py-6 text-base font-medium shadow-[var(--shadow-gold)]"
              >
                <a
                  href={`https://wa.me/${photographerInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 mr-2" />
                  Falar agora no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.8, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-primary">
                  Envie sua mensagem
                </h2>
                <p className="text-muted-foreground font-light">
                  Preencha o formulário e eu te respondo em até 24h. {photographerInfo.availability}.
                </p>
              </div>

              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="space-y-3">
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-primary">
                  Informações de contato
                </h2>
                <p className="text-muted-foreground font-light">
                  Prefere falar comigo diretamente? Estes são os canais.
                </p>
              </div>

              <Separator />

              {/* Contact Details */}
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent/15 text-accent">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">WhatsApp</p>
                    <a
                      href={`https://wa.me/${photographerInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-light hover:text-accent transition-colors"
                    >
                      {photographerInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent/15 text-accent">
                    <Mail className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">E-mail</p>
                    <a
                      href={`mailto:${photographerInfo.email}`}
                      className="text-base md:text-lg font-light hover:text-accent transition-colors"
                    >
                      {photographerInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent/15 text-accent">
                    <Phone className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">Telefone</p>
                    <a
                      href={`tel:${photographerInfo.phone.replace(/\D/g, '')}`}
                      className="text-base md:text-lg font-light hover:text-accent transition-colors"
                    >
                      {photographerInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent/15 text-accent">
                    <MapPin className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">Atendimento</p>
                    <p className="text-base md:text-lg font-light">
                      {photographerInfo.location}
                    </p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-sm bg-accent/15 text-accent">
                    <Clock className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-light tracking-wide text-muted-foreground">Horário</p>
                    <p className="text-base md:text-lg font-light">Seg a Sex • 09h – 19h</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>
    </>
  );
}
