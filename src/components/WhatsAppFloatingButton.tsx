import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../data/mockData';

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-semibold text-xs sm:text-sm rounded-full shadow-lg shadow-black/15 transition-all duration-200 group"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline font-medium">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
