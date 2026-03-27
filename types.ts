
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  outcome: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
}

export enum RoutePath {
  HOME = '/',
  WORK = '/work',
  SERVICES = '/services',
  PRICING = '/pricing',
  ABOUT = '/about',
  BLOG = '/insights',
  CONTACT = '/contact'
}
