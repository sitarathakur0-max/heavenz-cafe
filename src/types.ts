export type PageId = 'home' | 'about' | 'menu' | 'services' | 'contact';

export interface BusinessInfo {
  name: string;
  tagline: string;
  slogan: string;
  category: string;
  address: string;
  locality: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneFormatted: string;
  whatsappDigits: string;
  whatsappUrl: string;
  facebookUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'HeavenZ Cafe',
  tagline: 'Real Taste of Chicken',
  slogan: 'Quality is our major ingredient',
  category: 'Chicken-focused Cafe & Eatery',
  address: 'Main Rod 54-2L Rd, Okara, 56300, Pakistan',
  locality: 'Okara',
  postalCode: '56300',
  country: 'Pakistan',
  phone: '+92 328 5978320',
  phoneFormatted: '+92 328 5978320',
  whatsappDigits: '923285978320',
  whatsappUrl: 'https://wa.me/923285978320',
  facebookUrl: 'https://www.facebook.com/Okara.pk/',
};
