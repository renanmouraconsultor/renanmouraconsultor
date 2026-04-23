import type { Project } from '@/types';
import aposentadoriaImg from '@/assets/aposentadoria.jpg';

/**
 * Modalidades de carta de crédito oferecidas.
 * Mantemos o nome "projects" para preservar compatibilidade com componentes
 * existentes (PortfolioGrid, ProjectCard, Lightbox, ProjectDetail).
 * Cada item representa uma modalidade — não um projeto fotográfico.
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'Casa Própria',
    category: 'imovel',
    year: 'Imóveis',
    slug: 'casa-propria',
    icon: 'Home',
    shortDescription: 'Realize o sonho do imóvel próprio com parcelas que cabem no bolso.',
    creditRange: 'R$ 100 mil – R$ 1,5 milhão',
    coverImage:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para aquisição de casa, apartamento, terreno ou imóvel comercial. Use para comprar pronto, na planta ou usado, em qualquer lugar do Brasil. Sem entrada obrigatória, sem juros bancários e com poder de compra à vista.',
    benefits: [
      'Sem juros — apenas taxa de administração',
      'Use como entrada ou pagamento integral',
      'Quitação de financiamento existente',
      'Lance facultativo para antecipar a contemplação'
    ],
    howItWorks: [
      'Escolha o valor da carta conforme seu objetivo',
      'Pague parcelas mensais acessíveis',
      'Seja contemplado por sorteio ou lance',
      'Use o crédito como dinheiro à vista'
    ],
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Casa moderna com jardim', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200', alt: 'Sala de estar iluminada', aspectRatio: 'portrait' },
      { id: '1-3', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Fachada de apartamento', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '2',
    title: 'Carro',
    category: 'veiculo',
    year: 'Veículos',
    slug: 'carro',
    icon: 'Car',
    shortDescription: 'Compre o carro que você quer — zero ou seminovo — sem pagar juros.',
    creditRange: 'R$ 30 mil – R$ 1,1 milhão',
    coverImage:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para compra de automóvel novo ou usado, nacional ou importado. Liberdade total para escolher marca, modelo e concessionária. Você ainda pode somar com o seu carro atual como parte de pagamento.',
    benefits: [
      'Sem juros e sem entrada',
      'Use em qualquer concessionária ou particular',
      'Carro 0 km, seminovo ou usado',
      'Possibilidade de lance com FGTS em algumas modalidades'
    ],
    howItWorks: [
      'Defina o valor do carro dos seus sonhos',
      'Contrate a carta com parcelas mensais',
      'Nove formas diferentes de contemplação',
      'Compre à vista, com poder de negociação'
    ],
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Carro esportivo', aspectRatio: 'landscape' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Carro vermelho', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '3',
    title: 'Moto',
    category: 'veiculo',
    year: 'Veículos',
    slug: 'moto',
    icon: 'Bike',
    shortDescription: 'Sua próxima moto com parcelas leves e sem juros.',
    creditRange: 'R$ 10 mil – R$ 100 mil',
    coverImage:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito ideal para quem quer trocar de moto, comprar a primeira ou investir em um modelo top de linha. Atende motos de trabalho, lazer e alta cilindrada.',
    benefits: [
      'Parcelas a partir de poucas centenas de reais',
      'Sem juros bancários',
      'Use em concessionária ou particular',
      'Diversos prazos disponíveis'
    ],
    howItWorks: [
      'Escolha o valor compatível com o modelo desejado',
      'Pague parcelas acessíveis',
      'Concorra a sorteios mensais',
      'Adquira sua moto à vista'
    ],
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Moto esportiva', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '4',
    title: 'Barco',
    category: 'lazer',
    year: 'Lazer',
    slug: 'barco',
    icon: 'Sailboat',
    shortDescription: 'Lanchas, veleiros e jet skis com planejamento inteligente.',
    creditRange: 'R$ 50 mil – R$ 2 milhões',
    coverImage:
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para embarcações de lazer ou esporte: lanchas, veleiros, jet skis e iates. Uma forma planejada e sem juros de conquistar a embarcação ideal para suas horas livres.',
    benefits: [
      'Sem juros, apenas taxa de administração',
      'Liberdade para escolher modelo e estaleiro',
      'Inclui embarcações novas e usadas',
      'Lance para antecipar contemplação'
    ],
    howItWorks: [
      'Defina o tipo e valor da embarcação',
      'Contrate a carta de crédito',
      'Aguarde a contemplação',
      'Negocie e adquira à vista'
    ],
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Lancha no mar', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '5',
    title: 'Avião',
    category: 'lazer',
    year: 'Lazer',
    slug: 'aviao',
    icon: 'Plane',
    shortDescription: 'Aeronaves para uso particular ou comercial sem comprometer caixa.',
    creditRange: 'R$ 200 mil – R$ 10 milhões',
    coverImage:
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Solução exclusiva para aquisição de aeronaves: monomotores, bimotores, helicópteros e jatos executivos. Estruturação financeira inteligente para empresários e pilotos privados.',
    benefits: [
      'Cartas de alto valor disponíveis',
      'Sem juros bancários',
      'Para aeronaves novas e usadas',
      'Atendimento consultivo dedicado'
    ],
    howItWorks: [
      'Análise do perfil e objetivo de uso',
      'Escolha do valor e prazo da carta',
      'Pagamento de parcelas planejadas',
      'Contemplação por sorteio ou lance'
    ],
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Aeronave executiva', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '6',
    title: 'Construção',
    category: 'imovel',
    year: 'Imóveis',
    slug: 'construcao',
    icon: 'HardHat',
    shortDescription: 'Construa do zero a casa que sempre quis, com crédito planejado.',
    creditRange: 'R$ 80 mil – R$ 1 milhão',
    coverImage:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito específica para construção em terreno próprio. Cobre material, mão de obra e até a compra do terreno. Solução perfeita para quem quer um lar feito sob medida.',
    benefits: [
      'Use para terreno + construção',
      'Liberação por etapas conforme obra',
      'Sem juros — apenas taxa de administração',
      'Acompanhamento durante toda a obra'
    ],
    howItWorks: [
      'Defina o valor total do projeto',
      'Contrate a carta com parcelas mensais',
      'Após contemplação, libere os recursos',
      'Construa no seu ritmo'
    ],
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Casa em construção', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '7',
    title: 'Reforma',
    category: 'imovel',
    year: 'Imóveis',
    slug: 'reforma',
    icon: 'Hammer',
    shortDescription: 'Renove o seu imóvel sem comprometer o orçamento mensal.',
    creditRange: 'R$ 30 mil – R$ 300 mil',
    coverImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para reforma residencial ou comercial: ampliação, modernização, decoração, marcenaria, automação e mais. Transforme seu espaço com planejamento.',
    benefits: [
      'Use para qualquer tipo de reforma',
      'Sem necessidade de avaliação do imóvel',
      'Sem juros bancários',
      'Crédito liberado em conta'
    ],
    howItWorks: [
      'Estime o valor total da reforma',
      'Contrate a carta com parcelas mensais',
      'Concorra à contemplação',
      'Realize a reforma à vista'
    ],
    images: [
      { id: '7-1', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Cozinha reformada', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '8',
    title: 'Viagem',
    category: 'lazer',
    year: 'Lazer',
    slug: 'viagem',
    icon: 'Plane',
    shortDescription: 'Realize a viagem dos sonhos com planejamento e sem juros.',
    creditRange: 'R$ 5 mil – R$ 100 mil',
    coverImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para viagens nacionais e internacionais. Use para passagens, hospedagem, cruzeiros, lua de mel ou intercâmbio. Liberdade para montar o roteiro como quiser.',
    benefits: [
      'Use em qualquer agência ou diretamente',
      'Sem juros bancários',
      'Inclui pacotes, cruzeiros e intercâmbio',
      'Parcelas que cabem no orçamento'
    ],
    howItWorks: [
      'Defina o destino e orçamento ideal',
      'Contrate a carta de crédito',
      'Aguarde a contemplação',
      'Embarque para a viagem dos sonhos'
    ],
    images: [
      { id: '8-1', src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Avião decolando', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '9',
    title: 'Casamento',
    category: 'servicos',
    year: 'Serviços',
    slug: 'casamento',
    icon: 'Heart',
    shortDescription: 'Festa, lua de mel e enxoval no maior dia da sua vida.',
    creditRange: 'R$ 20 mil – R$ 200 mil',
    coverImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para realizar o casamento dos sonhos sem comprometer o início da vida a dois. Cobre festa, decoração, vestido, fotografia, lua de mel e o que mais você precisar.',
    benefits: [
      'Use para todos os custos do casamento',
      'Sem juros — apenas taxa de administração',
      'Liberdade total de fornecedores',
      'Comece a planejar com tranquilidade'
    ],
    howItWorks: [
      'Defina o orçamento total do evento',
      'Contrate a carta com parcelas mensais',
      'Concorra à contemplação',
      'Realize a celebração à vista'
    ],
    images: [
      { id: '9-1', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Cerimônia de casamento', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '10',
    title: 'Cirurgias e Procedimentos',
    category: 'servicos',
    year: 'Serviços',
    slug: 'cirurgias',
    icon: 'HeartPulse',
    shortDescription: 'Cuide da sua saúde e bem-estar com planejamento financeiro.',
    creditRange: 'R$ 10 mil – R$ 200 mil',
    coverImage:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Carta de crédito para procedimentos médicos, estéticos, odontológicos, tratamentos especializados e cirurgias eletivas. Liberdade para escolher o melhor profissional sem urgência financeira.',
    benefits: [
      'Cobre cirurgias, estética e tratamentos',
      'Escolha livre do profissional',
      'Sem juros bancários',
      'Use também para reabilitação e pós-operatório'
    ],
    howItWorks: [
      'Estime o valor total do procedimento',
      'Contrate a carta de crédito',
      'Aguarde a contemplação',
      'Realize o procedimento com tranquilidade'
    ],
    images: [
      { id: '10-1', src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Profissional de saúde', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '11',
    title: 'Investimentos',
    category: 'investimento',
    year: 'Investimentos',
    slug: 'investimentos',
    icon: 'TrendingUp',
    shortDescription: 'Construa patrimônio com cartas de crédito como ativo financeiro.',
    creditRange: 'R$ 50 mil – R$ 5 milhões',
    coverImage:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600',
    description:
      'Use cartas de crédito como estratégia patrimonial: aquisição de imóveis para renda, formação de reserva, aposentadoria planejada e diversificação. Eu monto a estratégia ideal para o seu perfil.',
    benefits: [
      'Estratégia patrimonial sem juros',
      'Diversificação inteligente',
      'Cartas com valorização ao longo do tempo',
      'Planejamento de longo prazo'
    ],
    howItWorks: [
      'Análise do seu perfil de investidor',
      'Escolha das cartas e prazos ideais',
      'Pagamento programado das parcelas',
      'Uso estratégico da contemplação'
    ],
    images: [
      { id: '11-1', src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600', alt: 'Gráficos financeiros', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '12',
    title: 'Aposentadoria',
    category: 'investimento',
    year: 'Aposentadoria',
    slug: 'aposentadoria',
    icon: 'Landmark',
    shortDescription: 'Planeje uma aposentadoria tranquila com cartas de crédito como reserva patrimonial.',
    creditRange: 'R$ 50 mil – R$ 2 milhões',
    coverImage: aposentadoriaImg,
    description:
      'Construa uma aposentadoria sólida usando cartas de crédito como ferramenta de planejamento de longo prazo. Forme patrimônio, gere renda passiva com imóveis e tenha previsibilidade financeira para o futuro — sem depender exclusivamente da previdência.',
    benefits: [
      'Planejamento previdenciário sem juros',
      'Formação de patrimônio com previsibilidade',
      'Possibilidade de renda passiva via imóveis',
      'Complemento estratégico ao INSS e à previdência privada'
    ],
    howItWorks: [
      'Definimos juntos o objetivo da sua aposentadoria',
      'Escolha das cartas e prazos alinhados ao seu horizonte',
      'Pagamento programado e disciplinado',
      'Uso da contemplação para gerar patrimônio ou renda'
    ],
    images: [
      { id: '12-1', src: aposentadoriaImg, alt: 'Casal de idosos felizes e bem vestidos aproveitando a aposentadoria', aspectRatio: 'landscape' }
    ]
  }
];

// Helper: busca modalidade por slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper: filtra modalidades por categoria ('all' retorna todas)
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper: modalidades em destaque na home (primeiras 6)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 6);
};

// Helper: navegação entre modalidades
export const getAdjacentProjects = (
  currentSlug: string
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};