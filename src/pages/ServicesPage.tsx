import React from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { Utensils, Car, Bike, Phone, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 text-[#201F25]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#211568] to-[#1A1052] text-white py-14 lg:py-20 border-b border-[#FFC629]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#FFC629]/30 rounded-full text-xs font-semibold tracking-wider text-[#FFC629] uppercase">
            <span>Dining Options</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Services
          </h1>
          <p className="font-display text-xl sm:text-2xl font-bold text-[#FFC629]">
            Flexible Ways to Enjoy Heaven<span className="text-white">Z</span> Chicken
          </p>
          <p className="text-sm sm:text-base text-[#FFFDF7]/80 max-w-2xl mx-auto">
            Whether you wish to sit down at the cafe, collect your order quickly from your vehicle,
            or arrange delivery in Okara, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Service 1: Dine-In */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#211568]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211568] text-[#FFC629] rounded-lg text-xs font-bold uppercase tracking-wider">
                <Utensils className="w-4 h-4" />
                <span>Service Option 01</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#211568]">
                Dine-In Experience
              </h2>
              <p className="text-base text-[#201F25]/85 leading-relaxed">
                Experience hot, fresh chicken right in our cafe atmosphere. Enjoy comfortable seating
                with friends or family while savoring freshly cooked meals straight from our kitchen.
              </p>
              <div className="bg-[#FFF6DD] p-4 rounded-xl border border-[#FFC629]/40 text-xs sm:text-sm text-[#201F25]/90 space-y-1">
                <span className="font-bold text-[#211568]">Arranging Dine-In:</span>
                <p>
                  We invite customers to call or message us before arriving to enquire about current
                  seating arrangements and table availability for your group.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211568] hover:bg-[#30208F] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFC629]" />
                  <span>Call to Check Table ({BUSINESS_INFO.phoneFormatted})</span>
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I would like to check table availability for dine-in today.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#211568] text-white rounded-2xl p-6 text-center space-y-3 border border-[#FFC629]/30">
              <div className="w-12 h-12 bg-[#FFC629] text-[#211568] rounded-full mx-auto flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Freshly Served
              </h3>
              <p className="text-xs text-[#FFFDF7]/80">
                Piping hot chicken prepared with care and served directly to your table.
              </p>
            </div>
          </div>

          {/* Service 2: Curbside Pickup */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#211568]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211568] text-[#FFC629] rounded-lg text-xs font-bold uppercase tracking-wider">
                <Car className="w-4 h-4" />
                <span>Service Option 02</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#211568]">
                Curbside Pickup
              </h2>
              <p className="text-base text-[#201F25]/85 leading-relaxed">
                Short on time or heading home from work? You can arrange curbside pickup directly
                with HeavenZ Cafe. Place your order via telephone or WhatsApp, drive up to our cafe on
                Main Rod 54-2L Rd, and our team will bring your packaged order out to you.
              </p>
              <div className="bg-[#FFF6DD] p-4 rounded-xl border border-[#FFC629]/40 text-xs sm:text-sm text-[#201F25]/90 space-y-1">
                <span className="font-bold text-[#211568]">Arranging Curbside Pickup:</span>
                <p>
                  Contact HeavenZ Cafe with your desired items and estimated arrival time so we can
                  have your meal ready and packaged for smooth handoff.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I want to place an order for curbside pickup.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order for Curbside Pickup</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211568] hover:bg-[#30208F] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFC629]" />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#211568] text-white rounded-2xl p-6 text-center space-y-3 border border-[#FFC629]/30">
              <div className="w-12 h-12 bg-[#FFC629] text-[#211568] rounded-full mx-auto flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Quick & Convenient
              </h3>
              <p className="text-xs text-[#FFFDF7]/80">
                Call ahead so your meal is packed, warm, and ready when you pull up.
              </p>
            </div>
          </div>

          {/* Service 3: No-Contact Delivery */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#211568]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211568] text-[#FFC629] rounded-lg text-xs font-bold uppercase tracking-wider">
                <Bike className="w-4 h-4" />
                <span>Service Option 03</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#211568]">
                No-Contact Delivery Enquiries
              </h2>
              <p className="text-base text-[#201F25]/85 leading-relaxed">
                Enjoy your favorite chicken dishes in the comfort of your home. We support
                no-contact delivery arrangements. Contact the cafe to confirm current delivery
                availability, rider dispatch, and delivery timing for your location in Okara.
              </p>
              <div className="bg-[#FFF6DD] p-4 rounded-xl border border-[#FFC629]/40 text-xs sm:text-sm text-[#201F25]/90 space-y-1">
                <span className="font-bold text-[#211568]">Confirming Delivery Coverage:</span>
                <p>
                  Because delivery availability depends on rider schedules and your location in
                  Okara, we ask customers to message or call us with their address to confirm
                  details.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello HeavenZ Cafe, I want to check delivery availability for my address in Okara.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Check Delivery on WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211568] hover:bg-[#30208F] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFC629]" />
                  <span>Call to Confirm Delivery</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#211568] text-white rounded-2xl p-6 text-center space-y-3 border border-[#FFC629]/30">
              <div className="w-12 h-12 bg-[#FFC629] text-[#211568] rounded-full mx-auto flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-display text-lg font-bold text-[#FFC629]">
                Direct to Your Door
              </h3>
              <p className="text-xs text-[#FFFDF7]/80">
                Carefully packaged and handed off with safe, no-contact protocol.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
