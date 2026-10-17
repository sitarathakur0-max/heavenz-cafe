import React, { useState } from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from '../components/HeavenZLogo.tsx';
import {
  Utensils,
  MessageCircle,
  Phone,
  Info,
  Sparkles,
  CheckCircle,
  Flame,
  Coffee,
  HelpCircle,
} from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: PageId) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedInquiryType, setSelectedInquiryType] = useState('full-menu');

  const inquiryTypes = [
    {
      id: 'full-menu',
      label: 'Complete Daily Menu & Prices',
      prefill: 'Hello HeavenZ Cafe, please send me your complete daily chicken menu and updated prices.',
    },
    {
      id: 'fried-chicken',
      label: 'Crispy Fried Chicken Deals',
      prefill: 'Hello HeavenZ Cafe, what crispy fried chicken deals and portion sizes do you have available today?',
    },
    {
      id: 'burgers',
      label: 'Burgers & Wraps',
      prefill: 'Hello HeavenZ Cafe, could you please share your chicken burger and wrap options and prices?',
    },
    {
      id: 'combos',
      label: 'Family & Group Meals',
      prefill: 'Hello HeavenZ Cafe, what family/group chicken platters and combo options are available today?',
    },
  ];

  const currentPrefill =
    inquiryTypes.find((t) => t.id === selectedInquiryType)?.prefill ||
    'Hello HeavenZ Cafe, please share your current menu.';

  return (
    <div className="space-y-0 text-[#201F25]">
      {/* Menu Header */}
      <section className="bg-gradient-to-b from-[#211568] to-[#1A1052] text-white py-14 lg:py-20 border-b border-[#FFC629]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#FFC629]/30 rounded-full text-xs font-semibold tracking-wider text-[#FFC629] uppercase">
            <span>Chicken-Focused Offerings</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Heaven<span className="text-[#FFC629]">Z</span> Cafe Menu
          </h1>
          <p className="font-display text-xl sm:text-2xl font-bold text-[#FFC629]">
            “Real Taste of Chicken”
          </p>
          <p className="text-sm sm:text-base text-[#FFFDF7]/80 max-w-2xl mx-auto">
            Authentic, freshly prepared chicken dishes crafted for pure flavor in Okara.
          </p>
        </div>
      </section>

      {/* Menu Policy & Direct Inquiry Hub */}
      <section className="py-12 lg:py-16 bg-[#FFFDF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Transparency Card */}
          <div className="bg-[#FFF6DD] border-2 border-[#FFC629] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#211568] text-[#FFC629] flex items-center justify-center shrink-0">
              <Info className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center md:text-left flex-1">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#211568]">
                Looking for our latest menu & prices?
              </h2>
              <p className="text-sm sm:text-base text-[#201F25]/85 leading-relaxed">
                We prepare fresh chicken daily and maintain strict quality standards. To ensure you
                receive 100% accurate information on today&apos;s available dishes, portion sizes, and
                exact prices, please contact HeavenZ Cafe directly on WhatsApp or phone.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  'Hello HeavenZ Cafe, please share today’s menu and prices.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFC629] hover:bg-[#FFE885] active:scale-[0.98] text-[#211568] font-bold text-sm rounded-xl shadow transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Menu Inquiry Assistant */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-[#211568]">
                Instant Menu Enquiry Assistant
              </h3>
              <p className="text-sm text-[#201F25]/75">
                Select what you would like to ask about, then tap the button to start a direct chat
                with HeavenZ Cafe:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inquiryTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedInquiryType(t.id)}
                  className={`p-4 rounded-xl text-left border transition-all flex items-start justify-between gap-3 ${
                    selectedInquiryType === t.id
                      ? 'bg-[#211568] text-white border-[#211568] shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 text-[#201F25] border-gray-200'
                  }`}
                >
                  <span className="font-semibold text-sm">{t.label}</span>
                  {selectedInquiryType === t.id && (
                    <CheckCircle className="w-4 h-4 text-[#FFC629] shrink-0 mt-0.5" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-4 bg-[#FFF6DD]/60 rounded-xl border border-[#FFC629]/30 text-xs text-[#201F25]/80 space-y-1">
              <span className="font-bold text-[#211568]">WhatsApp message preview:</span>
              <p className="italic font-mono text-[13px] text-[#211568]">&ldquo;{currentPrefill}&rdquo;</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(currentPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base rounded-xl shadow transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send via WhatsApp (+92 328 5978320)</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#211568] hover:bg-[#30208F] text-white font-bold text-sm rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFC629]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Suggested Cafe Categories Overview */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-display text-2xl font-bold text-[#211568]">
                Suggested Cafe Categories
              </h3>
              <p className="text-sm text-[#201F25]/75 max-w-xl mx-auto">
                These categories illustrate the types of chicken preparations available. Ask our team
                for today&apos;s verified dishes and pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#211568]">
                      Chicken Specialties
                    </h4>
                    <span className="text-xs text-[#30208F] font-semibold">
                      Crispy & Savory Selections
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#201F25]/80 leading-relaxed">
                  Golden fried chicken pieces, seasoned chicken tenders, and specialty chicken cuts
                  seasoned with our signature flavor profile.
                </p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-gray-500">Portions & Deals upon inquiry</span>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hello HeavenZ Cafe, what chicken specialties are available right now?'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#30208F] hover:underline"
                  >
                    Ask on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center shrink-0">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#211568]">
                      Burgers & Fast Snacks
                    </h4>
                    <span className="text-xs text-[#30208F] font-semibold">
                      Toasted Buns & Savory Wraps
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#201F25]/80 leading-relaxed">
                  Juicy chicken patty burgers, zesty chicken wraps, and crispy side snacks made
                  fresh to order for on-the-go or cafe dining.
                </p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-gray-500">Fresh daily buns & sauces</span>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hello HeavenZ Cafe, what burgers and snacks are on the menu today?'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#30208F] hover:underline"
                  >
                    Ask on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#211568]">
                      Platters & Combos
                    </h4>
                    <span className="text-xs text-[#30208F] font-semibold">
                      Family & Group Meals
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#201F25]/80 leading-relaxed">
                  Value meal combinations featuring chicken pieces paired with sauces, crispy fries,
                  and beverages for sharing with family and friends.
                </p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-gray-500">Combo sizes confirmed on request</span>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hello HeavenZ Cafe, what combo platters do you have available today?'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#30208F] hover:underline"
                  >
                    Ask on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              {/* Category 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#211568] text-[#FFC629] flex items-center justify-center shrink-0">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#211568]">
                      Beverages & Refreshers
                    </h4>
                    <span className="text-xs text-[#30208F] font-semibold">
                      Cold Drinks & Sips
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#201F25]/80 leading-relaxed">
                  Chilled soft drinks, mineral water, and cafe refreshments perfectly selected to
                  complement savory chicken meals.
                </p>
                <div className="pt-2 flex justify-between items-center text-xs">
                  <span className="text-gray-500">Chilled varieties available</span>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      'Hello HeavenZ Cafe, what beverages are available today?'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#30208F] hover:underline"
                  >
                    Ask on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
