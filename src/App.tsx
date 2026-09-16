import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyDetailModal from './components/PropertyDetailModal';
import ScheduleInspectionModal from './components/ScheduleInspectionModal';
import QuickInquiryModal from './components/QuickInquiryModal';
import HowItWorks from './components/HowItWorks';
import ScrollStory from './components/ScrollStory';
import WhyChooseUs from './components/WhyChooseUs';
import AboutAgent from './components/AboutAgent';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { sampleProperties } from './data/mockData';
import { Property, FilterState } from './types';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    location: 'all',
    propertyType: 'all',
    budget: 'all',
    bedrooms: 'all',
    searchQuery: '',
  });

  const [selectedPropertyForDetail, setSelectedPropertyForDetail] = useState<Property | null>(null);
  const [selectedPropertyForInspection, setSelectedPropertyForInspection] = useState<Property | null>(null);
  const [isQuickInquiryOpen, setIsQuickInquiryOpen] = useState(false);

  // Filter properties dynamically
  const filteredProperties = useMemo(() => {
    return sampleProperties.filter((prop) => {
      // Filter by location
      if (filters.location !== 'all' && prop.neighborhood !== filters.location) {
        return false;
      }

      // Filter by property type
      if (filters.propertyType !== 'all' && prop.propertyType !== filters.propertyType) {
        return false;
      }

      // Filter by bedrooms
      if (filters.bedrooms !== 'all') {
        const requiredBeds = parseInt(filters.bedrooms, 10);
        if (filters.bedrooms === '4' ? prop.bedrooms < 4 : prop.bedrooms !== requiredBeds) {
          return false;
        }
      }

      // Filter by budget
      if (filters.budget === 'under-1.5m' && prop.priceAnnual >= 1500000) {
        return false;
      }
      if (filters.budget === '1.5m-3m' && (prop.priceAnnual < 1500000 || prop.priceAnnual > 3000000)) {
        return false;
      }
      if (filters.budget === '3m-5m' && (prop.priceAnnual < 3000000 || prop.priceAnnual > 5000000)) {
        return false;
      }
      if (filters.budget === 'above-5m' && prop.priceAnnual < 5000000) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      location: 'all',
      propertyType: 'all',
      budget: 'all',
      bedrooms: 'all',
      searchQuery: '',
    });
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F2] text-[#1F2933] selection:bg-[#2F80ED]/20 selection:text-[#2F80ED]">
      {/* Top Sticky Navigation */}
      <Navbar onOpenQuickInquiry={() => setIsQuickInquiryOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Full-Screen Cinematic Hero with Video Background */}
        <Hero onExploreClick={() => handleScrollToSection('properties')} />

        {/* Search Bar right after Hero */}
        <PropertySearch
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          totalMatches={filteredProperties.length}
        />

        {/* Featured Properties Listing */}
        <FeaturedProperties
          properties={filteredProperties}
          filters={filters}
          onFilterChange={setFilters}
          onViewProperty={(prop) => setSelectedPropertyForDetail(prop)}
          onOpenInquiry={() => setIsQuickInquiryOpen(true)}
        />

        {/* How It Works - 4 Steps */}
        <HowItWorks />

        {/* Featured Scroll Story */}
        <ScrollStory />

        {/* Why Choose Us - 4 Benefits */}
        <WhyChooseUs />

        {/* About the Agent */}
        <AboutAgent onOpenInquiry={() => setIsQuickInquiryOpen(true)} />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Final Strong CTA */}
        <FinalCTA onFindPropertyClick={() => handleScrollToSection('properties')} />
      </main>

      {/* Footer */}
      <Footer onOpenQuickInquiry={() => setIsQuickInquiryOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Property Detail Modal */}
      {selectedPropertyForDetail && (
        <PropertyDetailModal
          property={selectedPropertyForDetail}
          onClose={() => setSelectedPropertyForDetail(null)}
          onScheduleInspection={(prop) => setSelectedPropertyForInspection(prop)}
        />
      )}

      {/* Schedule Inspection Modal */}
      {selectedPropertyForInspection && (
        <ScheduleInspectionModal
          property={selectedPropertyForInspection}
          onClose={() => setSelectedPropertyForInspection(null)}
        />
      )}

      {/* Quick Inquiry Matcher Modal */}
      <QuickInquiryModal
        isOpen={isQuickInquiryOpen}
        onClose={() => setIsQuickInquiryOpen(false)}
      />
    </div>
  );
}
