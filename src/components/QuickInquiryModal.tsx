import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageSquare, MapPin, Building, Banknote, User, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/mockData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickInquiryModal({ isOpen, onClose }: QuickInquiryModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredArea, setPreferredArea] = useState('GRA');
  const [propertyType, setPropertyType] = useState('3-Bedroom Apartment');
  const [budget, setBudget] = useState('₦2M – ₦3.5M / year');
  const [moveInTimeframe, setMoveInTimeframe] = useState('Within 1 month');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Haven Ilorin! I am looking for a home in Ilorin with the following criteria:\n\n• Name: ${fullName || 'A prospective tenant/buyer'}\n• Preferred Area: ${preferredArea}\n• Property Type: ${propertyType}\n• Budget: ${budget}\n• Timeframe: ${moveInTimeframe}\n• Phone: ${phone}\n\nPlease share available or upcoming options!`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F2933]/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-auto border border-[#1F2933]/10"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#1F2933]/8 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F80ED]">
                Personalized Property Match
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1F2933]">
                Find Your Ideal Home
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#1F2933]/60 hover:text-[#1F2933] hover:bg-[#F8F7F2]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-[#1F2933]/70">
                Tell us what you're looking for and our local Ilorin consultant will shortlist suitable verified properties for you.
              </p>

              {/* Name */}
              <div>
                <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ibrahim Lawal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 px-3.5 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0802 345 6789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                />
              </div>

              {/* Preferred Area & Property Type Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                    Target Area in Ilorin
                  </label>
                  <select
                    value={preferredArea}
                    onChange={(e) => setPreferredArea(e.target.value)}
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30"
                  >
                    <option value="GRA">GRA Phase 1 & 2</option>
                    <option value="Fate">Fate Road & Environs</option>
                    <option value="Tanke">Tanke University Corridor</option>
                    <option value="Adewole">Adewole Housing Estate</option>
                    <option value="Basin">Basin / Asa Dam Connection</option>
                    <option value="Sango">Sango / Kulende Area</option>
                    <option value="Flexible">Open to Any Good Area</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#2F80ED]" />
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30"
                  >
                    <option value="2-Bedroom Flat">2-Bedroom Modern Flat</option>
                    <option value="3-Bedroom Apartment">3-Bedroom Apartment</option>
                    <option value="4-Bedroom Duplex">4-Bedroom Duplex</option>
                    <option value="Terraced House">Terraced Villa</option>
                    <option value="Detached Bungalow">Detached Bungalow</option>
                    <option value="Land / Buy Option">Property For Outright Purchase</option>
                  </select>
                </div>
              </div>

              {/* Budget & Timeframe Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                    <Banknote className="w-3.5 h-3.5 text-[#2F80ED]" />
                    Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30"
                  >
                    <option value="Under ₦1.5M/yr">Under ₦1.5M / year</option>
                    <option value="₦1.5M – ₦3M/yr">₦1.5M – ₦3M / year</option>
                    <option value="₦3M – ₦5M/yr">₦3M – ₦5M / year</option>
                    <option value="₦5M+/yr & Luxury">₦5M+ / year & Luxury</option>
                    <option value="Purchase: ₦30M - ₦100M">Purchase: ₦30M – ₦100M</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 block">
                    Move-in Target
                  </label>
                  <select
                    value={moveInTimeframe}
                    onChange={(e) => setMoveInTimeframe(e.target.value)}
                    className="w-full h-11 px-3 text-xs sm:text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30"
                  >
                    <option value="Immediately (Within 7 days)">Immediately (Within 7 days)</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1 – 3 months">1 – 3 months</option>
                    <option value="Just scouting for later">Just scouting for later</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-[#2F80ED]/25 transition-all"
                >
                  Submit Search Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 flex items-center justify-center gap-2 rounded-xl text-xs font-semibold text-[#1F2933] bg-[#F8F7F2] hover:bg-[#EBE8DE] border border-[#1F2933]/10"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  Or send directly via WhatsApp
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#A8C3A0]/20 flex items-center justify-center text-[#2F80ED]">
                <CheckCircle2 className="w-9 h-9 text-[#2F80ED]" />
              </div>
              <h4 className="text-xl font-display font-bold text-[#1F2933]">
                Your Request Has Been Received!
              </h4>
              <p className="text-sm text-[#1F2933]/75 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our local Ilorin property consultant is reviewing currently available listings matching your preference in <strong>{preferredArea}</strong>.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Follow Up On WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-[#F8F7F2] hover:bg-[#EBE8DE] text-[#1F2933] text-xs sm:text-sm font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
