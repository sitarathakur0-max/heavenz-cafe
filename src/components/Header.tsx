import React, { useState } from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from './HeavenZLogo.tsx';
import { Menu as MenuIcon, X, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#211568] border-b border-[#FFC629]/25 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629] rounded-lg"
            aria-label="HeavenZ Cafe Home"
          >
            <HeavenZLogo variant="header" showTagline={true} />
          </button>

          {/* Zone 2: 4-5 Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC629] rounded ${
                    isActive
                      ? 'text-[#FFC629] font-bold'
                      : 'text-[#FFFDF7]/85 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFC629] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello HeavenZ Cafe, I would like to enquire about your chicken menu and dining options.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#211568] bg-[#FFC629] hover:bg-[#FFE885] active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#FFC629] hover:bg-[#30208F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1B1154] border-t border-[#FFC629]/20 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#30208F] text-[#FFC629] font-bold'
                    : 'text-white hover:bg-[#30208F]/50 hover:text-[#FFC629]'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-white/10">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello HeavenZ Cafe, I would like to enquire about your chicken menu.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#211568] bg-[#FFC629] hover:bg-[#FFE885] rounded-lg shadow transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order / Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
