import React from 'react';
import { motion } from 'motion/react';
import { Bed, Bath, Car, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: string;
  property: Property;
  onViewProperty: (property: Property) => void;
  index: number;
}

export default function PropertyCard({ property, onViewProperty, index }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#1F2933]/8 shadow-sm hover:shadow-xl hover:shadow-[#1F2933]/8 hover:border-[#1F2933]/15 transition-all duration-300 flex flex-col h-full"
      id={`property-card-${property.id}`}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAE8DE]">
        <img
          src={property.featuredImage}
          alt={property.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Gradient Scrim for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-[#1F2933] shadow-sm">
            {property.propertyType}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2F80ED] text-white shadow-sm">
            <MapPin className="w-3 h-3" />
            {property.neighborhood}
          </span>
        </div>

        {/* Bottom Price on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white pointer-events-none">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-white/80 font-medium block">
              Annual Rent
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white drop-shadow-sm">
              {property.priceFormatted}
              <span className="text-xs font-normal text-white/80 ml-1">/ year</span>
            </div>
          </div>

          {property.isVerified && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#A8C3A0]/90 text-[#1F2933] backdrop-blur-sm">
              <ShieldCheck className="w-3 h-3 text-[#1F2933]" />
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Location & Title */}
          <div className="flex items-center gap-1.5 text-xs text-[#1F2933]/60 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#2F80ED] shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 className="font-display font-bold text-lg text-[#1F2933] group-hover:text-[#2F80ED] transition-colors leading-snug line-clamp-1">
            {property.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#1F2933]/75 leading-relaxed line-clamp-2">
            {property.shortDescription}
          </p>

          {/* Key Specs Row */}
          <div className="mt-4 pt-3.5 border-t border-[#1F2933]/5 grid grid-cols-3 gap-2 text-xs text-[#1F2933]/70">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#2F80ED]" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-[#2F80ED]" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-[#2F80ED]" />
              <span>{property.parkingSpaces} Parking</span>
            </div>
          </div>
        </div>

        {/* Card Footer Button */}
        <div className="mt-5 pt-3 border-t border-[#1F2933]/5 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#A8C3A0] uppercase tracking-wider">
            Ready For Inspection
          </span>

          <button
            type="button"
            onClick={() => onViewProperty(property)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#2F80ED] bg-[#2F80ED]/8 hover:bg-[#2F80ED] hover:text-white transition-all duration-200"
            id={`view-property-btn-${property.id}`}
          >
            <span>View Property</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
