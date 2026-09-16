import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  Bed,
  Bath,
  Car,
  Maximize2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Share2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Property } from '../types';
import { getPropertyWhatsAppLink } from '../data/mockData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleInspection: (property: Property) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  onScheduleInspection,
}: PropertyDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F2933]/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-auto border border-[#1F2933]/10 max-h-[92vh] flex flex-col"
        >
          {/* Top Modal Navigation Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2933]/8 bg-white sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#2F80ED]/10 text-[#2F80ED]">
                {property.propertyType}
              </span>
              <span className="text-xs text-[#1F2933]/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                {property.neighborhood}, Ilorin
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleShare}
                className="p-2 rounded-full text-[#1F2933]/70 hover:text-[#1F2933] hover:bg-[#F8F7F2] transition-colors relative"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink && (
                  <span className="absolute -bottom-7 right-0 text-[10px] bg-[#1F2933] text-white px-2 py-0.5 rounded-md whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full text-[#1F2933]/70 hover:text-[#1F2933] hover:bg-[#F8F7F2] transition-colors"
                id="close-property-detail-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-5 sm:p-7 md:p-8 space-y-7">
            {/* Gallery Section */}
            <div className="space-y-3">
              {/* Main Image Viewport */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#EAE8DE]">
                <img
                  src={property.images[activeImageIndex] || property.featuredImage}
                  alt={`${property.title} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />

                {property.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1F2933] flex items-center justify-center shadow-md backdrop-blur-sm transition-transform hover:scale-105"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1F2933] flex items-center justify-center shadow-md backdrop-blur-sm transition-transform hover:scale-105"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                  {activeImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnails Strip */}
              {property.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#2F80ED] scale-105 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title, Pricing & Highlights */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#1F2933]/8">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#1F2933]/60 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                  <span>{property.location}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1F2933] leading-tight">
                  {property.title}
                </h2>
                <p className="mt-1 text-sm text-[#1F2933]/70 font-medium">
                  {property.tagline}
                </p>
              </div>

              {/* Price Block */}
              <div className="bg-[#F8F7F2] p-4 rounded-2xl border border-[#1F2933]/5 text-left md:text-right shrink-0">
                <span className="text-xs uppercase tracking-wider text-[#1F2933]/60 font-semibold block">
                  Annual Lease
                </span>
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#2F80ED]">
                  {property.priceFormatted}
                  <span className="text-xs font-normal text-[#1F2933]/70 ml-1">/ yr</span>
                </div>
                {property.salePriceFormatted && (
                  <span className="text-xs text-[#1F2933]/60 block mt-0.5">
                    or Outright Sale: <strong>{property.salePriceFormatted}</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8F7F2]/60 p-4 rounded-2xl border border-[#1F2933]/5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#2F80ED] shadow-2xs">
                  <Bed className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#1F2933]/60 block">Bedrooms</span>
                  <span className="text-sm font-bold text-[#1F2933]">{property.bedrooms} En-suite</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#2F80ED] shadow-2xs">
                  <Bath className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#1F2933]/60 block">Bathrooms</span>
                  <span className="text-sm font-bold text-[#1F2933]">{property.bathrooms} Baths</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#2F80ED] shadow-2xs">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#1F2933]/60 block">Parking</span>
                  <span className="text-sm font-bold text-[#1F2933]">{property.parkingSpaces} Vehicles</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#2F80ED] shadow-2xs">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#1F2933]/60 block">Approx Floor Area</span>
                  <span className="text-sm font-bold text-[#1F2933]">{property.floorArea}</span>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div>
              <h3 className="text-base font-display font-bold text-[#1F2933] mb-2.5">
                Property Overview
              </h3>
              <p className="text-sm sm:text-base text-[#1F2933]/80 leading-relaxed">
                {property.fullDescription}
              </p>
            </div>

            {/* Features & Amenities */}
            <div>
              <h3 className="text-base font-display font-bold text-[#1F2933] mb-3">
                Features & Neighborhood Conveniences
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F7F2] border border-[#1F2933]/5 text-xs sm:text-sm text-[#1F2933]/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A8C3A0] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="p-4 rounded-2xl bg-[#A8C3A0]/15 border border-[#A8C3A0]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#1F2933] shrink-0 mt-0.5" />
              <div className="text-xs text-[#1F2933]/85">
                <strong>Ground-Truth Inspection Guarantee:</strong> This home has been physically verified by our local Ilorin consultant. Utilities (water supply & neighborhood power feeder) and documentation status have been pre-checked.
              </div>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-4 sm:p-5 bg-white border-t border-[#1F2933]/8 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
            <div className="text-xs text-[#1F2933]/60 hidden sm:block">
              Free scheduling with our local Ilorin consultant
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={getPropertyWhatsAppLink(property)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#1F2933] bg-[#F8F7F2] hover:bg-[#EBE8DE] border border-[#1F2933]/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onScheduleInspection(property);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] shadow-md shadow-[#2F80ED]/25 transition-all"
                id="modal-schedule-inspection-cta"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Inspection</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
