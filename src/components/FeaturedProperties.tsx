import { useState } from 'react';
import { Property, FilterState } from '../types';
import PropertyCard from './PropertyCard';
import { Sparkles, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: Property[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onViewProperty: (property: Property) => void;
  onOpenInquiry: () => void;
}

export default function FeaturedProperties({
  properties,
  filters,
  onFilterChange,
  onViewProperty,
  onOpenInquiry,
}: FeaturedPropertiesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'GRA' | 'Fate' | 'Tanke' | 'Adewole'>('all');

  const handleTabClick = (neighborhood: 'all' | 'GRA' | 'Fate' | 'Tanke' | 'Adewole') => {
    setActiveTab(neighborhood);
    onFilterChange({
      ...filters,
      location: neighborhood,
    });
  };

  return (
    <section id="properties" className="py-20 sm:py-24 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F80ED]/10 text-[#2F80ED] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ilorin Handpicked Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight">
              Featured Properties
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#1F2933]/70 font-normal">
              A selection of homes you might love.
            </p>
          </div>

          {/* Quick Neighborhood Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {(['all', 'GRA', 'Fate', 'Tanke', 'Adewole'] as const).map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => handleTabClick(zone)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  filters.location === zone || (zone === 'all' && filters.location === 'all')
                    ? 'bg-[#1F2933] text-white shadow-sm'
                    : 'bg-white text-[#1F2933]/70 hover:text-[#1F2933] hover:bg-[#ECE9DC] border border-[#1F2933]/5'
                }`}
              >
                {zone === 'all' ? 'All Areas' : zone}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map((prop, idx) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onViewProperty={onViewProperty}
                index={idx}
              />
            ))}
          </div>
        ) : (
          /* Empty Filter State */
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center max-w-2xl mx-auto border border-[#1F2933]/8 shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F8F7F2] flex items-center justify-center text-[#2F80ED] mb-4">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#1F2933]">
              No exact match for this combination
            </h3>
            <p className="mt-2 text-sm text-[#1F2933]/70 leading-relaxed max-w-md mx-auto">
              We have unlisted and upcoming homes across Ilorin that may not be displayed publicly yet. Let us know what you're looking for.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onFilterChange({
                    location: 'all',
                    propertyType: 'all',
                    budget: 'all',
                    bedrooms: 'all',
                    searchQuery: '',
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1F2933] bg-[#F8F7F2] hover:bg-[#EBE8DE]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Search Filters
              </button>
              <button
                type="button"
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2F80ED] hover:bg-[#256ecf]"
              >
                Request Custom Property Search
              </button>
            </div>
          </div>
        )}

        {/* Bottom Portfolio Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#1F2933]/55">
            Looking for something specific in Tanke, GRA, Fate, Adewole, or Basin?
            <button
              type="button"
              onClick={onOpenInquiry}
              className="ml-1.5 font-semibold text-[#2F80ED] hover:underline"
            >
              Ask our agent for tailored recommendations →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
