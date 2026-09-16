import React from 'react';
import { Search, MapPin, Building, Banknote, Bed, RotateCcw } from 'lucide-react';
import { sampleLocations, propertyTypes, budgetRanges, bedroomOptions } from '../data/mockData';
import { FilterState } from '../types';

interface PropertySearchProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  totalMatches: number;
}

export default function PropertySearch({
  filters,
  onFilterChange,
  onResetFilters,
  totalMatches,
}: PropertySearchProps) {
  const handleChange = (field: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value,
    });
  };

  const hasActiveFilters =
    filters.location !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.budget !== 'all' ||
    filters.bedrooms !== 'all';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultsSection = document.getElementById('properties');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#1F2933]/5 border border-[#1F2933]/10 p-5 sm:p-7 md:p-9 transition-all">
        {/* Header inside search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-[#1F2933]/5">
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#2F80ED]">
              Property Search
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1F2933] mt-0.5">
              Let's Find Your Next Home
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#1F2933]/60 bg-[#F8F7F2] px-3 py-1.5 rounded-full border border-[#1F2933]/5">
              <strong className="text-[#1F2933]">{totalMatches}</strong> homes match criteria
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F80ED] hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Search Controls Form */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location Selector */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#1F2933]/70 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                Location in Ilorin
              </label>
              <div className="relative">
                <select
                  value={filters.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full h-12 px-3.5 bg-[#F8F7F2] hover:bg-[#F2EFE8] focus:bg-white text-sm font-medium text-[#1F2933] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED] transition-colors appearance-none cursor-pointer"
                  id="search-location-select"
                >
                  {sampleLocations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#1F2933]/50">
                  ▼
                </div>
              </div>
            </div>

            {/* Property Type Selector */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#1F2933]/70 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#2F80ED]" />
                Property Type
              </label>
              <div className="relative">
                <select
                  value={filters.propertyType}
                  onChange={(e) => handleChange('propertyType', e.target.value)}
                  className="w-full h-12 px-3.5 bg-[#F8F7F2] hover:bg-[#F2EFE8] focus:bg-white text-sm font-medium text-[#1F2933] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED] transition-colors appearance-none cursor-pointer"
                  id="search-property-type-select"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#1F2933]/50">
                  ▼
                </div>
              </div>
            </div>

            {/* Budget Selector */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#1F2933]/70 mb-1.5 flex items-center gap-1.5">
                <Banknote className="w-3.5 h-3.5 text-[#2F80ED]" />
                Budget
              </label>
              <div className="relative">
                <select
                  value={filters.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  className="w-full h-12 px-3.5 bg-[#F8F7F2] hover:bg-[#F2EFE8] focus:bg-white text-sm font-medium text-[#1F2933] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED] transition-colors appearance-none cursor-pointer"
                  id="search-budget-select"
                >
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#1F2933]/50">
                  ▼
                </div>
              </div>
            </div>

            {/* Bedrooms Selector */}
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-[#1F2933]/70 mb-1.5 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-[#2F80ED]" />
                Bedrooms
              </label>
              <div className="relative">
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleChange('bedrooms', e.target.value)}
                  className="w-full h-12 px-3.5 bg-[#F8F7F2] hover:bg-[#F2EFE8] focus:bg-white text-sm font-medium text-[#1F2933] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED] transition-colors appearance-none cursor-pointer"
                  id="search-bedrooms-select"
                >
                  {bedroomOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#1F2933]/50">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Quick Location Tags & Search Submit Button */}
          <div className="mt-5 pt-4 border-t border-[#1F2933]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-[#1F2933]/50 mr-1">Popular in Ilorin:</span>
              {['GRA', 'Tanke', 'Fate', 'Adewole'].map((locName) => (
                <button
                  key={locName}
                  type="button"
                  onClick={() => handleChange('location', locName)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    filters.location === locName
                      ? 'bg-[#2F80ED] text-white'
                      : 'bg-[#F8F7F2] text-[#1F2933]/80 hover:bg-[#EBE8DE]'
                  }`}
                >
                  {locName}
                </button>
              ))}
            </div>

            <button
              type="submit"
              id="search-properties-submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#2F80ED]/25 transition-all"
            >
              <Search className="w-4 h-4" />
              <span>Search Properties</span>
            </button>
          </div>
        </form>

        {/* Demo Disclaimer */}
        <div className="mt-4 pt-3 border-t border-dashed border-[#1F2933]/10 text-[11px] text-[#1F2933]/55 flex items-center justify-between flex-wrap gap-2">
          <span>
            * Demonstration Data: Sample Ilorin residential areas and property archetypes shown for demonstration presentation.
          </span>
          <span className="text-[#A8C3A0] font-semibold">Client Rebranding Ready</span>
        </div>
      </div>
    </section>
  );
}
