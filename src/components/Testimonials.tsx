import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { demoTestimonials } from '../data/mockData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const current = demoTestimonials[currentIndex];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % demoTestimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + demoTestimonials.length) % demoTestimonials.length);
  };

  return (
    <section className="py-24 bg-white border-y border-[#1F2933]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] mb-2 block">
              Client Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight">
              Stories From New Residents
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#1F2933]/50">
              {currentIndex + 1} of {demoTestimonials.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#1F2933]/15 flex items-center justify-center text-[#1F2933] hover:bg-[#F8F7F2] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#1F2933]/15 flex items-center justify-center text-[#1F2933] hover:bg-[#F8F7F2] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Presentation Card with Animated Slide */}
        <div className="relative bg-[#F8F7F2] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#1F2933]/8 min-h-[300px] flex flex-col justify-between">
          <Quote className="w-12 h-12 text-[#2F80ED]/20 mb-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              <blockquote className="text-lg sm:text-xl md:text-2xl text-[#1F2933] font-normal leading-relaxed">
                "{current.quote}"
              </blockquote>

              <div className="pt-6 border-t border-[#1F2933]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-display font-bold text-base text-[#1F2933]">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-[#1F2933]/65">
                      {current.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <div className="inline-flex items-center gap-1 text-xs text-[#2F80ED] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{current.location}</span>
                  </div>
                  <span className="text-[11px] text-[#1F2933]/55">
                    Found: {current.propertyPurchasedOrRented}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4 border-t border-[#1F2933]/5">
            {demoTestimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#2F80ED]' : 'w-2 bg-[#1F2933]/20 hover:bg-[#1F2933]/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Demo Replacement Note */}
          <div className="mt-4 text-center">
            <span className="text-[11px] text-[#1F2933]/45">
              * Demonstration Data: Easily replaced with verified client feedback from Ilorin residents upon launch.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
