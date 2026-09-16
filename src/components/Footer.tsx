import { Home, MapPin, Phone, Mail, MessageSquare, Instagram, ArrowUp } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/mockData';

interface FooterProps {
  onOpenQuickInquiry: () => void;
}

export default function Footer({ onOpenQuickInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F2933] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2F80ED] flex items-center justify-center text-white">
                <Home className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Modern housing discovery and tenant representation in Ilorin, Kwara State. Helping individuals and families find quality accommodation in secure, reliable neighborhoods.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A8C3A0] pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{siteConfig.officeAddress}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8C3A0]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Agent
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Ilorin Neighborhoods */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8C3A0]">
              Coverage Areas
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>GRA Phase 1 & 2</li>
              <li>Fate Road Area</li>
              <li>Tanke University Axis</li>
              <li>Adewole Housing Estate</li>
              <li>Basin & Asa Dam Hub</li>
              <li>Sango & Kulende</li>
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8C3A0]">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm text-white/70">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2F80ED]" />
                <span>Call: {siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A8C3A0]" />
                <span>{siteConfig.email}</span>
              </a>

              <a
                href={`https://instagram.com/${siteConfig.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{siteConfig.instagramHandle}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenQuickInquiry}
                className="w-full py-2 px-3 text-xs font-semibold text-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Request Property Inspection
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved. Built for Ilorin, Kwara State.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#A8C3A0]">Demo Business Website Template</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
