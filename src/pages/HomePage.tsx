import React, { useState } from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from '../components/HeavenZLogo.tsx';
import {
  Utensils,
  Car,
  Bike,
  Phone,
  MessageCircle,
  MapPin,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import heroImage from '../assets/images/heavenz_chicken_specialty_1792221108489.jpg';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Where is HeavenZ Cafe located?',
      a: `HeavenZ Cafe is situated on Main Rod 54-2L Rd, Okara, 56300, Pakistan. You can reach the cafe easily from central Okara or contact our team for helpful directional guidance.`,
    },
    {
      q: 'How can I contact HeavenZ Cafe?',
      a: `You can call HeavenZ Cafe directly at ${BUSINESS_INFO.phoneFormatted} or send a message on WhatsApp at ${BUSINESS_INFO.phoneFormatted}. Our team is happy to assist with your questions.`,
    },
    {
      q: 'How can I enquire about the menu?',
      a: `To enquire about our latest chicken dishes and menu selections, simply message us on WhatsApp or call us. We will provide details on currently prepared items.`,
    },
    {
      q: 'Does HeavenZ Cafe offer dine-in?',
      a: `Yes, dine-in is an available option. We recommend getting in touch via phone or WhatsApp beforehand to enquire about seating and table availability for you, your friends, or your family.`,
    },
    {
      q: 'Can I arrange curbside pickup?',
      a: `Yes, curbside pickup can be arranged. Customers are welcome to contact HeavenZ Cafe in advance to place an order and arrange a convenient pickup time outside the cafe.`,
    },
    {
      q: 'Is delivery available in my area?',
      a: `HeavenZ Cafe offers no-contact delivery enquiries. Because delivery coverage and availability depend on your specific area within or around Okara, please contact the cafe directly via WhatsApp or phone to confirm if delivery is available to your location.`,
    },
    {
      q: 'What are the cafe\'s opening hours?',
      a: `Operating hours can vary depending on daily scheduling and holidays. Because opening hours are not published as a fixed guarantee, we encourage all visitors to contact HeavenZ Cafe via WhatsApp or phone to confirm today's timings before visiting.`,
    },
    {
      q: 'How can I ask about current food prices?',
      a: `Please reach out to HeavenZ Cafe directly on WhatsApp or by phone. Our staff will share our up-to-date prices and currently available chicken selections without any guesswork.`,
    },
  ];

  return (
    <div className="space-y-0 text-[#201F25]">
      {/* SECTION A: Hero Section */}
      <section className="relative bg-gradient-to-b from-[#211568] via-[#211568] to-[#1a1052] text-white pt-12 pb-16 lg:py-24 border-b border-[#FFC629]/20 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFC629]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#30208F]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#FFC629]/30 rounded-full text-xs font-semibold tracking-wider text-[#FFC629] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>Okara, Pakistan</span>
              </div>

              {/* Main Headings */}
              <div className="space-y-2">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Welcome to{' '}
                  <span className="text-white">
                    Heaven<span className="text-[#FFC629]">Z</span> Cafe
                  </span>
                </h1>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#FFC629] tracking-wide">
                  “Real Taste of Chicken”
                </p>
              </div>

              {/* Slogan pill */}
              <div className="flex items-center gap-2 text-sm text-[#FFFDF7]/85 font-medium italic">
                <Sparkles className="w-4 h-4 text-[#FFC629] shrink-0" />
                <span>Quality is our major ingredient</span>
              </div>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#FFFDF7]/90 leading-relaxed max-w-2xl">
                Discover HeavenZ Cafe in Okara, a welcoming place for food lovers looking to enjoy a
                chicken-focused cafe experience. Whether you&apos;re planning a stop with family or
                friends, enquiring about the menu, or arranging your visit, get in touch with HeavenZ
                Cafe for the latest information.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFC629] hover:bg-[#FFE885] active:scale-[0.98] text-[#211568] font-bold text-base rounded-xl shadow-lg transition-all"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I am enquiring from your website about today’s menu and visiting.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-[#FFFDF7] border border-[#FFC629]/40 font-bold text-base rounded-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-[#FFC629]" />
                  <span>Contact Us on WhatsApp</span>
                </a>
              </div>

              {/* Highlights strip */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 text-xs text-[#FFFDF7]/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFC629]" />
                  <span>Dine-In Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFC629]" />
                  <span>Curbside Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FFC629]" />
                  <span>Delivery Enquiries</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFC629]/40 shadow-2xl bg-[#1B1154]">
                <img
                  src={heroImage}
                  alt="Freshly prepared chicken specialty at HeavenZ Cafe"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211568]/95 via-[#211568]/40 to-transparent flex flex-col justify-end p-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFC629] mb-1">
                    <span>HeavenZ Culinary Focus</span>
                    <span aria-hidden="true">·</span>
                    <span>Chicken Specialties</span>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Fresh, flavorful chicken preparations made with care.
                  </p>
                  <p className="text-[11px] text-[#FFFDF7]/70 italic mt-1">
                    * Illustrative presentation. Ask our team for today&apos;s verified dishes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Brand Introduction */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7] border-b border-[#211568]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#30208F]">
              Welcome to Okara&apos;s Chicken Hub
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#211568]">
              A Warm Welcome at HeavenZ Cafe
            </h2>
            <p className="font-display text-xl font-bold text-[#30208F]">
              “Real Taste of Chicken”
            </p>
            <div className="w-16 h-1 bg-[#FFC629] mx-auto rounded-full" />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="space-y-4 text-[#201F25]/85 text-base leading-relaxed bg-[#FFF6DD]/40 p-6 sm:p-8 rounded-2xl border border-[#FFC629]/30">
              <h3 className="font-display text-xl font-bold text-[#211568]">
                Dedicated to Genuine Taste & Hospitality
              </h3>
              <p>
                At HeavenZ Cafe in Okara, we are passionate about serving real chicken flavor.
                Our philosophy centers around our guiding principle: “Quality is our major
                ingredient.” Every guest who walks through our doors or reaches out for an order is
                greeted with sincere warmth.
              </p>
              <p>
                Whether you are craving crispy bites, hearty sandwiches, or flavorful meals with
                friends, HeavenZ Cafe offers an inviting setting to savor good chicken in Okara.
              </p>
            </div>

            <div className="space-y-4 text-[#201F25]/85 text-base leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-display text-xl font-bold text-[#211568]">
                Current Menu & Dining Availability
              </h3>
              <p>
                We believe in total transparency with our customers. Because our kitchen sources
                fresh ingredients, our exact daily offerings and meal portions may be confirmed
                directly with our staff.
              </p>
              <p>
                Customers are welcome to contact HeavenZ Cafe at any time to enquire about currently
                available dishes, check dine-in seating, arrange curbside pickup, or confirm delivery
                arrangements in their part of Okara.
              </p>
              <div className="pt-2">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, please let me know today’s menu availability.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#30208F] hover:text-[#211568] underline decoration-[#FFC629] decoration-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask HeavenZ Staff on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Menu Preview */}
      <section className="py-16 lg:py-20 bg-[#FFF6DD] border-b border-[#FFC629]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#30208F]">
              Culinary Selections
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#211568]">
              Explore the HeavenZ Menu
            </h2>
            <p className="text-sm sm:text-base text-[#201F25]/75">
              Suggested categories representing our chicken-focused cafe offerings.
            </p>
          </div>

          {/* 4 Suggested Categories */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Chicken Specialties',
                desc: 'Crispy fried chicken, seasoned skewers, and freshly prepared chicken dishes.',
                icon: Utensils,
              },
              {
                title: 'Burgers & Snacks',
                desc: 'Chicken burgers, zesty wraps, and quick savory cafe snacks for fast dining.',
                icon: Sparkles,
              },
              {
                title: 'Meals & Combos',
                desc: 'Satisfying combo meals paired with dips, fries, and side accompaniments.',
                icon: Compass,
              },
              {
                title: 'Beverages',
                desc: 'Refreshing cold soft drinks, juices, and cafe beverages to accompany your meal.',
                icon: ShieldCheck,
              },
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-[#FFC629]/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#211568] text-[#FFC629] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#211568]">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#201F25]/75 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-semibold text-[#30208F]">
                    Contact for current selection
                  </div>
                </div>
              );
            })}
          </div>

          {/* Refined Verified Menu Message & WhatsApp CTA */}
          <div className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#FFC629] shadow-md text-center space-y-4">
            <div className="w-12 h-12 bg-[#211568] text-[#FFC629] rounded-full mx-auto flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#211568]">
              Looking for our latest menu?
            </h3>
            <p className="text-sm sm:text-base text-[#201F25]/85">
              Contact HeavenZ Cafe to ask about currently available dishes and prices. We will share
              today&apos;s freshly prepared selections directly with you.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello HeavenZ Cafe, could you please send me your current menu and food prices?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC629] hover:bg-[#FFE885] active:scale-[0.98] text-[#211568] font-bold text-sm sm:text-base rounded-xl shadow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask About the Menu on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#211568] hover:bg-[#30208F] text-white font-medium text-sm rounded-xl transition-colors"
              >
                <span>View Menu Page</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: The HeavenZ Experience */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7] border-b border-[#211568]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#30208F]">
              Hospitality & Service
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#211568]">
              Good Food. Good Company.
            </h2>
            <p className="text-base text-[#201F25]/80">
              Three flexible dining options tailored for your comfort in Okara.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dine-In */}
            <div className="bg-white rounded-2xl p-7 border border-[#211568]/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#30208F] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#211568]">
                  Dine-In
                </h3>
                <p className="text-sm text-[#201F25]/80 leading-relaxed">
                  Enjoy freshly cooked chicken served hot at our cafe. We invite visitors to contact
                  HeavenZ Cafe in advance to enquire about dining arrangements and check current
                  table availability.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30208F] hover:text-[#211568]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFC629]" />
                  <span>Call to Check Seating ({BUSINESS_INFO.phoneFormatted})</span>
                </a>
              </div>
            </div>

            {/* Curbside Pickup */}
            <div className="bg-white rounded-2xl p-7 border border-[#211568]/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#30208F] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#211568]">
                  Curbside Pickup
                </h3>
                <p className="text-sm text-[#201F25]/80 leading-relaxed">
                  On the move? Visitors can enquire about arranging pickup. Call ahead or message on
                  WhatsApp to place your order, and collect your packaged meal right at the cafe on
                  Main Rod 54-2L Rd.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I would like to arrange a curbside pickup order.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30208F] hover:text-[#211568]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire for Curbside Pickup</span>
                </a>
              </div>
            </div>

            {/* Delivery Enquiries */}
            <div className="bg-white rounded-2xl p-7 border border-[#211568]/15 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#30208F] transition-colors">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#211568]">
                  Delivery Enquiries
                </h3>
                <p className="text-sm text-[#201F25]/80 leading-relaxed">
                  Prefer enjoying your meal at home? Customers are encouraged to contact HeavenZ
                  Cafe to confirm delivery availability, timing, and arrangements for their specific
                  location in Okara.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, is delivery available to my location in Okara?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30208F] hover:text-[#211568]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Check Delivery for Your Area</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: Why Choose HeavenZ Cafe? */}
      <section className="py-16 lg:py-20 bg-[#211568] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFC629]">
              The HeavenZ Commitment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Why Choose HeavenZ Cafe?
            </h2>
            <p className="text-base text-[#FFFDF7]/85">
              Built on honest taste, personal service, and customer convenience in Okara.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1B1154] p-6 rounded-xl border border-[#FFC629]/20 space-y-3">
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Chicken-Focused Identity
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/80 leading-relaxed">
                Specializing in chicken recipes crafted for true food enthusiasts who value authentic
                taste and satisfying portions.
              </p>
            </div>

            <div className="bg-[#1B1154] p-6 rounded-xl border border-[#FFC629]/20 space-y-3">
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Recognizable Brand
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/80 leading-relaxed">
                Known for our distinctive HeavenZ signature style, warm purple-and-gold visual
                identity, and our tagline “Real Taste of Chicken.”
              </p>
            </div>

            <div className="bg-[#1B1154] p-6 rounded-xl border border-[#FFC629]/20 space-y-3">
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Convenient Direct Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/80 leading-relaxed">
                Quick, responsive communication via WhatsApp and direct telephone before you visit or
                order, avoiding unexpected surprises.
              </p>
            </div>

            <div className="bg-[#1B1154] p-6 rounded-xl border border-[#FFC629]/20 space-y-3">
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Flexible Service Options
              </h3>
              <p className="text-xs sm:text-sm text-[#FFFDF7]/80 leading-relaxed">
                Welcoming dine-in seating, convenient curbside takeaway, and no-contact delivery
                options suited to your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: Plan Your Visit */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7] border-b border-[#211568]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF6DD] border-2 border-[#FFC629] rounded-3xl p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#30208F]">
                  Location & Contact
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#211568]">
                  Planning to Visit HeavenZ Cafe?
                </h2>
                <div className="space-y-3 text-[#201F25]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#30208F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-sm block">Address:</span>
                      <span className="text-base">{BUSINESS_INFO.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#30208F] shrink-0" />
                    <div>
                      <span className="font-bold text-sm block">Direct Phone & WhatsApp:</span>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                        className="text-base text-[#211568] font-bold hover:underline"
                      >
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/80 rounded-xl border border-[#FFC629]/40 text-xs text-[#201F25]/85">
                  <span className="font-bold text-[#211568]">Please Note Regarding Hours:</span>{' '}
                  Opening hours are subject to daily kitchen scheduling. We encourage all visitors
                  to contact HeavenZ Cafe via WhatsApp or phone call to confirm current timings
                  before heading over.
                </div>

                {/* 4 Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211568] hover:bg-[#30208F] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#FFC629]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hello HeavenZ Cafe, I am planning to visit today and want to check your timings and seating.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onNavigate('menu')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#211568]/30 hover:border-[#211568] text-[#211568] font-bold text-sm rounded-xl transition-colors"
                  >
                    <Utensils className="w-4 h-4 text-[#30208F]" />
                    <span>Ask About the Menu</span>
                  </button>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      'HeavenZ Cafe Main Rod 54-2L Rd Okara 56300 Pakistan'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFC629] hover:bg-[#FFE885] text-[#211568] font-bold text-sm rounded-xl transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Get Location Information</span>
                  </a>
                </div>
              </div>

              {/* Signboard visual display */}
              <div className="lg:col-span-5 flex justify-center">
                <HeavenZLogo variant="signboard" showSlogan={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7] border-b border-[#211568]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#30208F]">
              Have Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#211568]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#201F25]/75">
              Verified answers to common enquiries about HeavenZ Cafe in Okara.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#211568]/15 rounded-xl bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-display text-base font-bold text-[#211568] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC629]"
                    aria-expanded={isOpen}
                  >
                    <span>
                      {idx + 1}. {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#30208F] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#201F25]/50 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#201F25]/85 leading-relaxed border-t border-gray-100 bg-[#FFFDF7]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION H: Final CTA */}
      <section className="py-16 lg:py-20 bg-[#211568] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="flex justify-center mb-2">
            <HeavenZLogo variant="header" showTagline={false} />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience the <span className="text-[#FFC629]">Real Taste of Chicken</span>
          </h2>

          <p className="text-base sm:text-lg text-[#FFFDF7]/90 max-w-2xl mx-auto leading-relaxed">
            Planning a visit or looking for the current menu? Get in touch with HeavenZ Cafe in
            Okara for information about available dishes and service options.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                'Hello HeavenZ Cafe, I want to ask about today’s chicken menu and arrange a visit.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FFC629] hover:bg-[#FFE885] active:scale-[0.98] text-[#211568] font-bold text-base rounded-xl shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp HeavenZ Cafe</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-[#FFC629]/40 font-bold text-base rounded-xl transition-all"
            >
              <Phone className="w-5 h-5 text-[#FFC629]" />
              <span>Call the Cafe ({BUSINESS_INFO.phoneFormatted})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
