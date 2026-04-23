import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag, Wallet, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';
import { Button } from '@/components/ui/button';
import { photographerInfo } from '@/data/photographer';

/**
 * Project detail page with hero image, gallery, and full-screen lightbox
 * Features smooth animations and immersive image viewing experience
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const { prev, next } = getAdjacentProjects(project.slug);
  const whatsappText = encodeURIComponent(
    `Olá! Tenho interesse na carta de crédito para ${project.title}. Pode me passar mais informações?`
  );

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Hero Image - 70vh */}
      <motion.div
        className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8 pb-10 md:pb-16">
          <div className="max-w-5xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">Carta de crédito</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-primary">
              {project.title}
            </h1>
            {project.shortDescription && (
              <p className="text-base md:text-lg font-light text-muted-foreground max-w-2xl">
                {project.shortDescription}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Project Info Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm font-light">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1">
              <Tag className="size-3.5 text-accent" />
              {project.year}
            </span>
            {project.creditRange && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1">
                <Wallet className="size-3.5 text-accent" />
                {project.creditRange}
              </span>
            )}
          </div>

          <Separator />

          {/* Descrição */}
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
            {project.description}
          </p>

          {/* Benefícios + Como funciona */}
          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {project.benefits && project.benefits.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-primary">Benefícios</h2>
                <ul className="space-y-3">
                  {project.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm md:text-base font-light text-foreground">
                      <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.howItWorks && project.howItWorks.length > 0 && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-primary">Como funciona</h2>
                <ol className="space-y-3">
                  {project.howItWorks.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm md:text-base font-light text-foreground">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="rounded-lg border border-border bg-secondary/60 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-xl text-primary">Quer simular essa carta?</p>
              <p className="text-sm text-muted-foreground font-light">Sem compromisso, em poucos minutos pelo WhatsApp.</p>
            </div>
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:opacity-90 rounded-full px-6 py-5 font-medium shadow-[var(--shadow-gold)]"
            >
              <a
                href={`https://wa.me/${photographerInfo.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4 mr-2" />
                Simular agora
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

        {/* Image Gallery - Edge to edge */}
        {project.images.length > 0 && (
          <section className="py-12 md:py-16 bg-secondary/40 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-8 md:space-y-12">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <ImageWithLightbox
                    image={image}
                    onClick={() => openLightbox(index)}
                    priority={index === 0}
                    index={0}
                    className="w-full rounded-lg overflow-hidden"
                  />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Navegação entre modalidades */}
        <section className="border-t border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 gap-6">
            <div>
              {prev && (
                <Link to={`/project/${prev.slug}`} className="group inline-flex flex-col gap-1 text-muted-foreground hover:text-accent transition-colors">
                  <span className="text-xs uppercase tracking-[0.3em]">← Anterior</span>
                  <span className="font-serif text-lg text-primary group-hover:text-accent">{prev.title}</span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link to={`/project/${next.slug}`} className="group inline-flex flex-col gap-1 items-end text-muted-foreground hover:text-accent transition-colors">
                  <span className="text-xs uppercase tracking-[0.3em]">Próxima →</span>
                  <span className="font-serif text-lg text-primary group-hover:text-accent inline-flex items-center gap-2">
                    {next.title} <ArrowRight className="size-4" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
