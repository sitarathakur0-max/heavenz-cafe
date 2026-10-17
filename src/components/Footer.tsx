import React from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from './HeavenZLogo.tsx';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#211568] text-[#FFFDF7] border-t-2 border-[#FFC629]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629] rounded"
              aria-label="HeavenZ Cafe Home"
            >
              <HeavenZLogo variant="footer" showTagline={true} />
            </button>
            <p className="text-xs italic text-[#FFC629] font-medium">
              “{BUSINESS_INFO.slogan}”
            </p>
            <p className="text-sm text-[#FFFDF7]/80 leading-relaxed">
              HeavenZ Cafe is Okara&apos;s dedicated chicken-focused eatery, welcoming guests to enjoy
              fresh taste, friendly service, and convenient dine-in, curbside pickup, and delivery
              enquiries.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFC629] mb-4">
              Explore HeavenZ
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#FFFDF7]/80 hover:text-[#FFC629] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#FFFDF7]/80 hover:text-[#FFC629] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="text-[#FFFDF7]/80 hover:text-[#FFC629] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Menu & Pricing Enquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#FFFDF7]/80 hover:text-[#FFC629] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Dining & Order Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#FFFDF7]/80 hover:text-[#FFC629] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Inquiries */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFC629] mb-4">
              Contact & Orders
            </h2>
            <ul className="space-y-3 text-sm text-[#FFFDF7]/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFC629] shrink-0 mt-1" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFC629] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="hover:text-[#FFC629] underline decoration-[#FFC629]/40 transition-colors"
                >
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#FFC629] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC629] underline decoration-[#FFC629]/40 transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-xs text-[#FFFDF7]/70">
                <span className="font-semibold text-[#FFC629]">Dining Arrangements:</span> Dine-in,
                Curbside Pickup, and Delivery Enquiries. Please verify daily timings with the cafe.
              </div>
            </div>
          </div>

          {/* Column 4: Local Community & Direct Actions */}
          <div className="space-y-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFC629] mb-2">
              Okara Location
            </h2>
            <p className="text-xs text-[#FFFDF7]/80 leading-relaxed">
              Situated on Main Rod 54-2L Rd in Okara. Customers are encouraged to contact HeavenZ Cafe directly for the latest menu updates and table availability.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#FFFDF7]/75 hover:text-[#FFC629] transition-colors"
              >
                <span>Okara Community Reference</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello HeavenZ Cafe, I want to ask about today’s menu.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-[#211568] bg-[#FFC629] hover:bg-[#FFE885] rounded-md transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat with HeavenZ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFFDF7]/60 gap-4">
          <p>© {currentYear} HeavenZ Cafe. All rights reserved. Okara, Pakistan.</p>
          <div className="flex items-center gap-4">
            <span>“Real Taste of Chicken”</span>
            <span aria-hidden="true">·</span>
            <span>Quality is our major ingredient</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
