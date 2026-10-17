import React, { useState, useEffect } from 'react';
import { PageId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { MenuPage } from './pages/MenuPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

function getPageFromPath(): PageId {
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  if (path === '/about') return 'about';
  if (path === '/menu') return 'menu';
  if (path === '/services') return 'services';
  if (path === '/contact') return 'contact';
  return 'home';
}

function getPathFromPage(page: PageId): string {
  if (page === 'home') return '/';
  return `/${page}`;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update page title and scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const titles: Record<PageId, string> = {
      home: 'HeavenZ Cafe | Real Taste of Chicken in Okara',
      about: 'About Us | HeavenZ Cafe Okara – Real Taste of Chicken',
      menu: 'Menu & Pricing Enquiries | HeavenZ Cafe Okara',
      services: 'Dine-In, Curbside Pickup & Delivery | HeavenZ Cafe Okara',
      contact: 'Contact Us | HeavenZ Cafe Okara, Pakistan',
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    const targetPath = getPathFromPage(page);
    window.history.pushState({ page }, '', targetPath);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#201F25] selection:bg-[#FFC629] selection:text-[#211568]">
      {/* Header with Top Bar Contract */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && <MenuPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Mandatory Left-Side Floating WhatsApp Button on Every Page */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
