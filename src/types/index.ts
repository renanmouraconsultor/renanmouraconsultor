/**
 * Core TypeScript interfaces for Frame Portfolio
 * Based on SPECIFICATION.md data model requirements
 */

export type ProjectCategory =
  | 'imovel'
  | 'veiculo'
  | 'lazer'
  | 'servicos'
  | 'investimento';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  camera?: string;
  location?: string;
  slug: string;
  /** Lucide icon name for the modality */
  icon?: string;
  /** Short tagline shown on cards */
  shortDescription?: string;
  /** Typical credit range, e.g. "R$ 50 mil – R$ 1,5 mi" */
  creditRange?: string;
  /** Bullet list of benefits */
  benefits?: string[];
  /** "How it works" steps specific to this modality */
  howItWorks?: string[];
}

export interface PhotographerInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  portraitImage: string;
  brandName: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  modalidade: string;
  message: string;
  timestamp: Date;
}
