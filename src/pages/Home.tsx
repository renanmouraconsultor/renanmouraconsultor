import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects, projects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Wallet,
  Sparkles,
  CalendarCheck,
  Home as HomeIcon,
  Car,
  Bike,
  Sailboat,
  Plane,
  HardHat,
  Hammer,
  Heart,
  HeartPulse,
  TrendingUp,
  Landmark,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, LucideIcon> = {
  Home: HomeIcon,
  Car,
  Bike,
  Sailboat,
  Plane,
  HardHat,
  Hammer,
  Heart,
  HeartPulse,
  TrendingUp,
  Landmark,
};

const beneficios = [
  {
    icon: ShieldCheck,
    title: 'Sem juros',
    text: 'Você paga apenas a taxa de administração. Nada de juros bancários comendo o seu plano.',
  },
  {
    icon: Wallet,
    title: 'Parcelas acessíveis',
    text: 'Mensalidades planejadas para caber no seu orçamento, com prazos flexíveis.',
  },
  {
    icon: Sparkles,
    title: 'Poder de compra à vista',
    text: 'Use a carta como dinheiro vivo e negocie descontos vantajosos com o vendedor.',
  },
  {
    icon: CalendarCheck,
    title: 'Planejamento real',
    text: 'Estratégia patrimonial pensada para o seu objetivo, no curto, médio ou longo prazo.',
  },
];

const depoimentos = [
  {
    name: 'Ana e Rafael',
    role: 'Compraram o primeiro apartamento',
    text: 'A consultoria fez toda diferença. Em menos de um ano fomos contemplados e usamos a carta como entrada do nosso apê.',
  },
  {
    name: 'Marcelo S.',
    role: 'Empresário',
    text: 'Estruturei a compra de dois carros para a minha frota sem comprometer o caixa da empresa. Atendimento impecável.',
  },
  {
    name: 'Juliana P.',
    role: 'Realizou a viagem dos sonhos',
    text: 'Sempre achei que era impossível viajar sem se endividar. Com a carta de crédito eu consegui fechar tudo à vista.',
  },
];

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background imagem aspiracional */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Casa moderna com piscina ao entardecer"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero)', opacity: 0.78 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            className="space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {photographerInfo.brandName}
            </motion.p>
            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Realize seus sonhos com<br className="hidden md:block" />
              <span className="text-accent"> cartas de crédito </span>
              inteligentes
            </motion.h1>
            
            <motion.p
              className="text-base md:text-lg font-light leading-relaxed text-white/85 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {photographerInfo.heroIntroduction}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
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
                Fale comigo
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-medium bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white"
              >
                <Link to="/portfolio">
                  Ver modalidades
                  <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Faixa de modalidades — ícones */}
        <section className="border-y border-border bg-secondary/40 py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Modalidades atendidas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {projects.map((m) => {
                const Icon = iconMap[m.icon ?? 'Home'] ?? HomeIcon;
                return (
                  <Link
                    key={m.id}
                    to={`/project/${m.slug}`}
                    className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Icon className="size-6" />
                    <span className="text-xs font-light tracking-wide">{m.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Por que carta de crédito */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Por que carta de crédito?</p>
                <h2 className="font-serif text-3xl md:text-5xl text-primary">
                  Uma forma inteligente de conquistar o que você quer
                </h2>
                <p className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
                  Sem juros bancários, sem entrada obrigatória e com flexibilidade total de uso.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 0.1}>
                  <div className="bg-card border border-border rounded-lg p-7 space-y-4 h-full shadow-sm hover:shadow-[var(--shadow-elegant)] transition-shadow">
                    <div className="inline-flex p-3 rounded-full bg-accent/15 text-accent">
                      <b.icon className="size-6" />
                    </div>
                    <h3 className="font-serif text-xl text-primary">{b.title}</h3>
                    <p className="text-sm font-light text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border bg-secondary/40">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Modalidades em destaque</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">
                Para cada sonho, a carta certa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Conheça as principais soluções que ofereço — clique em qualquer uma para entender como funciona.
              </p>
            </div>
          </ScrollReveal>

          {/* Modalidades grid */}
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-base font-medium tracking-wide text-accent hover:opacity-80 transition-opacity"
              >
                <span>Ver todas as modalidades</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Depoimentos */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Depoimentos</p>
                <h2 className="font-serif text-3xl md:text-4xl text-primary">Histórias de quem já realizou</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {depoimentos.map((d, i) => (
                <ScrollReveal key={d.name} delay={i * 0.1}>
                  <figure className="bg-card border border-border rounded-lg p-7 space-y-4 h-full">
                    <p className="text-sm font-light leading-relaxed text-foreground italic">"{d.text}"</p>
                    <figcaption className="pt-4 border-t border-border">
                      <p className="font-medium text-primary">{d.name}</p>
                      <p className="text-xs text-muted-foreground font-light">{d.role}</p>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-24 md:py-32 px-6 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
          <div className="relative max-w-3xl mx-auto text-center space-y-6 text-white">
            <h2 className="font-serif text-4xl md:text-5xl">
              Vamos transformar seu objetivo em <span className="text-accent">realidade</span>?
            </h2>
            <p className="text-base md:text-lg font-light text-white/85">
              Consulta gratuita, sem compromisso. Em poucos minutos no WhatsApp eu monto o melhor plano para você.
            </p>
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
        </section>
      </div>
    </>
  );
}
