import type { PhotographerInfo } from '@/types';
import portraitImage from '@/assets/renan-moura.jpeg';

/**
 * Consultant + brand info.
 * Kept under the "photographer" filename to avoid breaking existing imports.
 * Replace placeholder name, phone, email, social links with the user's real data.
 */
export const photographerInfo: PhotographerInfo = {
  brandName: 'Crédito & Realização',
  name: 'Renan Moura',
  tagline: 'Cartas de crédito para realizar seus sonhos',
  heroIntroduction:
    'Planejamento inteligente, parcelas acessíveis e zero juros. Eu ajudo você a transformar grandes objetivos em conquistas concretas.',
  biography: `Atuo como consultor financeiro especializado em cartas de crédito (consórcios), oferecendo soluções para quem busca conquistar bens e realizar projetos com planejamento e disciplina financeira — sem pagar juros bancários.

Trabalho lado a lado com cada cliente para entender o objetivo, o momento de vida e o orçamento disponível, desenhando o plano que melhor encaixa na sua realidade. Minha missão é tornar a contratação simples, transparente e segura, do primeiro contato até a contemplação.`,
  approach: `Acredito que decisões financeiras importantes merecem clareza e tempo. Por isso, todo atendimento começa com uma consulta gratuita: entendo seu objetivo, explico como a carta de crédito funciona e mostro o caminho mais inteligente para você chegar lá.

Transparência total nas condições, acompanhamento contínuo até a contemplação e suporte na utilização do crédito — esse é o padrão de atendimento que ofereço.`,
  awards: [
    'Mais de 500 clientes atendidos',
    'Parceiro de administradoras autorizadas pelo Banco Central',
    'Especialista em planejamento patrimonial',
    'Atendimento personalizado em todo o Brasil'
  ],
  clients: [
    'Famílias',
    'Profissionais liberais',
    'Empreendedores',
    'Investidores',
    'Aposentados',
    'Jovens compradores'
  ],
  education: 'Especialização em Planejamento Financeiro e Crédito',
  location: 'Atendimento em todo o Brasil',
  email: 'renanmouraconsultor@gmail.com',
  phone: '+55 (67) 99185-1068',
  whatsapp: '5567991851068',
  availability: 'Disponível para novas consultas esta semana',
  socialLinks: {
    instagram: 'https://www.instagram.com/renanmouraconsultor',
    linkedin: '',
    facebook: ''
  },
  portraitImage
};