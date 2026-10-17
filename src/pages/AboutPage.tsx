import React from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from '../components/HeavenZLogo.tsx';
import { Utensils, Sparkles, MessageCircle, Phone, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 text-[#201F25]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#211568] to-[#1A1052] text-white py-14 lg:py-20 border-b border-[#FFC629]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#FFC629]/30 rounded-full text-xs font-semibold tracking-wider text-[#FFC629] uppercase">
            <span>Our Story & Philosophy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            About Heaven<span className="text-[#FFC629]">Z</span> Cafe
          </h1>
          <p className="font-display text-xl sm:text-2xl font-bold text-[#FFC629]">
            “Real Taste of Chicken”
          </p>
          <p className="text-sm sm:text-base text-[#FFFDF7]/80 max-w-2xl mx-auto italic">
            “Quality is our major ingredient”
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Signboard Identity Lockup */}
          <div className="flex justify-center">
            <HeavenZLogo variant="signboard" showTagline={true} showSlogan={true} />
          </div>

          {/* Narrative Section */}
          <div className="space-y-6 text-[#201F25]/85 text-base sm:text-lg leading-relaxed">
            <div className="bg-[#FFF6DD] p-6 sm:p-8 rounded-2xl border border-[#FFC629]/40 space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#211568]">
                A Chicken-Focused Eatery in Okara
              </h2>
              <p>
                HeavenZ Cafe is a dedicated culinary destination created for chicken lovers in
                Okara, Pakistan. From our very inception, our single-minded mission has been to
                deliver the authentic flavor of freshly prepared chicken dishes to local foodies,
                families, and friends.
              </p>
              <p>
                Our core tagline, <strong className="text-[#211568]">“Real Taste of Chicken,”</strong> represents
                our promise that every recipe is crafted to bring out rich, genuine savor and crunch
                without shortcuts.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#211568]">
                Our Guiding Motto: “Quality is our major ingredient”
              </h2>
              <p>
                Good food begins with good standards. At HeavenZ Cafe, we prioritize cleanliness,
                proper preparation, and consistent seasoning. We believe that true dining
                satisfaction comes from dependable flavor and warm, welcoming service.
              </p>
              <ul className="space-y-2.5 pt-2 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#30208F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Chicken Expertise:</strong> Dedicated focus on crispy, grilled, and
                    savory chicken selections.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#30208F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Honest Service:</strong> Direct, helpful communication regarding our
                    current kitchen preparations and timings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#30208F] shrink-0 mt-0.5" />
                  <span>
                    <strong>Customer Comfort:</strong> Thoughtful options for dine-in, curbside
                    pickup, and delivery inquiries in Okara.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[#211568] text-white p-6 sm:p-8 rounded-2xl space-y-4 border border-[#FFC629]/30">
              <h2 className="font-display text-2xl font-bold text-[#FFC629]">
                Visiting HeavenZ Cafe & Arranging Your Meal
              </h2>
              <p className="text-[#FFFDF7]/90">
                We are located along Main Rod 54-2L Rd in Okara. Because daily kitchen preparations
                and seating can adjust, we warmly encourage all guests to contact us prior to
                visiting. Whether you are bringing a group for dine-in or requesting a quick curbside
                pickup, our staff will gladly provide the latest menu details and confirm arrangements.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFC629] text-[#211568] font-bold text-sm rounded-xl hover:bg-[#FFE885] transition-colors"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Enquire About Our Menu</span>
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I want to arrange a visit with family/friends.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-[#FFC629]/40 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFC629]" />
                  <span>WhatsApp HeavenZ Cafe</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
