import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../data/mockData';

interface FinalCTAProps {
  onFindPropertyClick: () => void;
}

export default function FinalCTA({ onFindPropertyClick }: FinalCTAProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F7F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-[#2F80ED] rounded-3xl p-8 sm:p-14 lg:p-16 text-white text-center shadow-xl shadow-[#2F80ED]/20 relative overflow-hidden"
        >
          {/* Subtle geometric circles for depth */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#A8C3A0]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20">
              <MapPin className="w-3.5 h-3.5 text-[#A8C3A0]" />
              <span>Ilorin, Kwara State</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.15]">
              Ready to Find Your <span className="font-editorial italic font-normal text-[#F8F7F2]">Next Home?</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-white/90 font-normal leading-relaxed text-balance">
              Tell us what you're looking for and let's start the search.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={onFindPropertyClick}
                id="final-cta-find-property"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#1F2933] hover:bg-[#F8F7F2] active:scale-[0.98] font-semibold text-sm shadow-md transition-all duration-200"
              >
                <span>Find a Property</span>
                <ArrowRight className="w-4 h-4 text-[#2F80ED]" />
              </button>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-whatsapp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-sm transition-colors duration-200"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-white/70">
              Prompt response from an agent based locally in Ilorin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
