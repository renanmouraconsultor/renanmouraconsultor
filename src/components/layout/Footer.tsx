import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';

/**
 * Minimal footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-serif text-2xl text-primary">
            {photographerInfo.brandName}
          </p>
          <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
            Consultoria em cartas de crédito para realizar seus sonhos com planejamento e zero juros.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium tracking-wide uppercase text-foreground">Contato</h4>
          <ul className="space-y-2 text-sm font-light text-muted-foreground">
            <li><a href={`mailto:${photographerInfo.email}`} className="hover:text-foreground transition-colors">{photographerInfo.email}</a></li>
            <li><a href={`tel:${photographerInfo.phone.replace(/\D/g, '')}`} className="hover:text-foreground transition-colors">{photographerInfo.phone}</a></li>
            <li>{photographerInfo.location}</li>
          </ul>
        </div>

        <div className="space-y-3 md:text-right">
          <h4 className="text-sm font-medium tracking-wide uppercase text-foreground">Acompanhe</h4>
          <div className="flex items-center gap-4 md:justify-end">
            <a
              href={`https://wa.me/${photographerInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-5" />
            </a>
            {photographerInfo.socialLinks.instagram && (
              <a
                href={photographerInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
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
                className="text-muted-foreground hover:text-accent transition-colors"
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
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center text-xs text-muted-foreground font-light">
          © {currentYear} {photographerInfo.brandName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
