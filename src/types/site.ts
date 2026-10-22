export type PackageId =
  | "bedah-bisnis-digital"
  | "rapikan-brand-konten"
  | "website-landing-page-bisnis"
  | "marketing-jalan-bulanan";

export type SolutionIconName = "ShieldCheck" | "Target" | "ChartNoAxesCombined";

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  fullName: string;
  monogram: string;
  positioning: string;
  role: string;
  company: string;
  bio: string;
  brands: readonly string[];
  expertise: readonly string[];
  workingPrinciples: readonly string[];
}

export interface HeroContent {
  badge: string;
  headline: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: "#portofolio";
  stats: readonly HeroStat[];
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  recommendedPackageId: PackageId;
}

export interface SolutionPillar {
  id: string;
  title: string;
  description: string;
  iconName: SolutionIconName;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: readonly string[];
  ctaLabel: string;
}

export interface PackageItem {
  id: PackageId;
  name: string;
  subtitle: string;
  priceText: string;
  badge: string | null;
  features: readonly string[];
  isPopular: boolean;
}

export interface PortfolioCaseStudy {
  id: string;
  brandName: string;
  category: string;
  metricHighlight: string;
  challenge: string;
  role: string;
  approach: string;
  result: string;
  insight: string;
}

export interface ConsultationStep {
  stepNumber: 1 | 2 | 3 | 4;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  roleLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialContact {
  whatsappNumber: string;
  whatsappDisplayNumber: string;
  email: string;
  instagram: string;
  tiktok: string;
  facebook: string;
}

export interface NavigationItem {
  label: string;
  href: "#tentang" | "#layanan" | "#paket" | "#portofolio" | "#faq";
}

export interface ConsultationFormData {
  name: string;
  businessName: string;
  businessType: string;
  customNotes: string;
  socialOrWeb: string;
  needsOverride?: string;
}

export interface OpenDrawerOptions {
  offer?: string;
  portfolio?: string;
}

export interface ConsultationContextValue {
  consultationNeeds: string;
  selectedProblems: string[];
  toggleProblem: (problem: string) => void;
  clearProblems: () => void;
  selectedServiceOrPackage: string;
  selectOffer: (offer: string) => void;
  portfolioReference: string | null;
  setPortfolioRef: (portfolio: string | null) => void;
  isDrawerOpen: boolean;
  openDrawer: (options?: OpenDrawerOptions) => void;
  closeDrawer: () => void;
  generateWhatsAppUrl: (formData: ConsultationFormData) => string;
}
