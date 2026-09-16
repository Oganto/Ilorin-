export interface Property {
  id: string;
  title: string;
  tagline: string;
  propertyType: 'Duplex' | 'Apartment' | 'Terrace' | 'Bungalow' | 'Villa';
  bedrooms: number;
  bathrooms: number;
  toilets: number;
  parkingSpaces: number;
  location: string;
  neighborhood: 'GRA' | 'Tanke' | 'Fate' | 'Adewole' | 'Basin' | 'Sango';
  priceAnnual: number;
  priceFormatted: string;
  listingType: 'Rent' | 'Sale' | 'Both';
  salePriceFormatted?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  images: string[];
  featuredImage: string;
  floorArea: string;
  isVerified: boolean;
  status: 'Available' | 'Inspection Scheduled' | 'Under Offer';
}

export interface FilterState {
  location: string;
  propertyType: string;
  budget: string;
  bedrooms: string;
  searchQuery: string;
}

export interface SiteConfig {
  brandName: string;
  brandTagline: string;
  locationBadge: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  instagramHandle: string;
  officeAddress: string;
  heroVideoUrl: string;
  heroPosterUrl: string;
}

export interface AgentInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  headline: string;
  introText: string;
  approachBullets: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  location: string;
  quote: string;
  propertyPurchasedOrRented: string;
  avatar: string;
  rating: number;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  detail: string;
}
