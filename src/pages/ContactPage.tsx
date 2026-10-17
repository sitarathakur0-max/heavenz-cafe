import React, { useState } from 'react';
import { PageId, BUSINESS_INFO } from '../types.ts';
import { HeavenZLogo } from '../components/HeavenZLogo.tsx';
import {
  Phone,
  MessageCircle,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Compass,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    enquiryType: 'general',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    // Direct redirection via WhatsApp with the pre-filled inquiry details
    const text = `Hello HeavenZ Cafe, I am submitting an enquiry from your website:
Name: ${formData.name}
Phone/Contact: ${formData.contact || 'Not specified'}
Enquiry Type: ${formData.enquiryType}
Message: ${formData.message}`;

    const url = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-0 text-[#201F25]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#211568] to-[#1A1052] text-white py-14 lg:py-20 border-b border-[#FFC629]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#FFC629]/30 rounded-full text-xs font-semibold tracking-wider text-[#FFC629] uppercase">
            <span>Get in Touch</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Contact Heaven<span className="text-[#FFC629]">Z</span> Cafe
          </h1>
          <p className="font-display text-xl sm:text-2xl font-bold text-[#FFC629]">
            “Real Taste of Chicken”
          </p>
          <p className="text-sm sm:text-base text-[#FFFDF7]/80 max-w-2xl mx-auto">
            We are here to answer your questions regarding our menu, table dining, curbside pickup,
            and delivery options in Okara.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Cols: Verified Business Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#30208F]">
                    Direct Channels
                  </span>
                  <h2 className="font-display text-2xl font-bold text-[#211568]">
                    Reach Our Team
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-gray-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-[#30208F] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xs uppercase text-gray-500 block">
                        Address (Okara)
                      </span>
                      <span className="font-medium text-[#201F25]">
                        {BUSINESS_INFO.address}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-gray-50 rounded-xl">
                    <Phone className="w-5 h-5 text-[#30208F] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xs uppercase text-gray-500 block">
                        Direct Phone
                      </span>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                        className="font-bold text-[#211568] hover:text-[#30208F] hover:underline"
                      >
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 p-3.5 bg-gray-50 rounded-xl">
                    <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xs uppercase text-gray-500 block">
                        WhatsApp Contact
                      </span>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#211568] hover:text-[#30208F] hover:underline"
                      >
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Important verified hours note */}
                <div className="p-4 bg-[#FFF6DD] border border-[#FFC629]/40 rounded-xl text-xs text-[#201F25]/85 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#211568]">
                    <Clock className="w-4 h-4 text-[#30208F]" />
                    <span>Operating Hours Confirmation:</span>
                  </div>
                  <p>
                    Daily cafe opening hours and kitchen schedules are not published as fixed
                    guarantees. We warmly encourage visitors to contact HeavenZ Cafe via WhatsApp or
                    phone to confirm today&apos;s active hours before visiting.
                  </p>
                </div>

                {/* Facebook note */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="font-bold text-xs text-gray-500 block mb-1">
                    Community Reference:
                  </span>
                  <a
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#30208F] hover:text-[#211568] hover:underline font-semibold"
                  >
                    <span>Okara Community Page (External Directory Reference)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-gray-500 mt-1">
                    * General Okara community reference provided for local context.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Direct Interactive Contact & WhatsApp Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#30208F]">
                    Send a Message
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#211568]">
                    Enquire Directly with HeavenZ Cafe
                  </h2>
                  <p className="text-sm text-[#201F25]/75">
                    Fill out this form to connect directly with HeavenZ Cafe via WhatsApp or phone.
                    No hidden delays.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="p-4 bg-[#25D366]/10 border border-[#25D366] rounded-xl text-xs sm:text-sm text-[#1B7038] flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Enquiry Prepared!</span>
                      Your enquiry has been transferred to WhatsApp. You can also contact us
                      directly at{' '}
                      <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="underline font-bold">
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                      .
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Ahmed"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#30208F] focus:ring-2 focus:ring-[#FFC629] text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Phone / Contact */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Your Phone Number or WhatsApp
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. 0321 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#30208F] focus:ring-2 focus:ring-[#FFC629] text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Enquiry Type */}
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiryType"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Enquiry Purpose
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#30208F] focus:ring-2 focus:ring-[#FFC629] text-sm outline-none bg-white transition-all"
                    >
                      <option value="Menu & Price Enquiry">Menu & Food Prices</option>
                      <option value="Dine-In Seating Enquiry">Dine-In & Table Availability</option>
                      <option value="Curbside Pickup Order">Curbside Pickup Order</option>
                      <option value="Delivery Coverage Check">Delivery Coverage in Okara</option>
                      <option value="General Question">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your questions or order items here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#30208F] focus:ring-2 focus:ring-[#FFC629] text-sm outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl shadow transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Send via WhatsApp (+92 328 5978320)</span>
                    </button>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#211568] hover:bg-[#30208F] text-white font-bold text-sm sm:text-base rounded-xl transition-all"
                    >
                      <Phone className="w-4 h-4 text-[#FFC629]" />
                      <span>Direct Call</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-gray-500 text-center pt-1">
                    * Submitting opens a direct conversation with HeavenZ Cafe on WhatsApp so you receive immediate, genuine assistance.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
