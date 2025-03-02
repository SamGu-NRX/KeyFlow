export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQItemProps {
  question: string;
  answer: string;
}
