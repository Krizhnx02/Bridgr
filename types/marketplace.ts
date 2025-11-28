export interface Benefit {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Vendor {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  features: string[];
  rating: number;
}

export interface ComparisonRow {
  vendor: string;
  fees: string;
  setupTime: string;
  documents: string;
  keyPerk: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CategoryData {
  title: string;
  description: string;
  benefits: Benefit[];
  partnerBenefits?: string[]; // Simple string array for partners section
  vendors: Vendor[];
  comparisonData: ComparisonRow[];
  faqs: FAQ[];
}

export interface VendorData {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  description: string;
  rating: number;
  features: string[];
  pricing?: {
    plan?: string;
    monthlyFee?: string;
    setupFee?: string;
  };
  highlights: string[];
  requirements?: string[];
  howToApply: string[];
  faqs: FAQ[];
}

