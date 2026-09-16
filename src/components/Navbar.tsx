import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/mockData';

interface NavbarProps {
  onOpenQuickInquiry: () => void;
}

export default function Navbar({ onOpenQuickInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#1F2933]/5 py-3.5'
            : 'bg-[#FFFFFF]/80 backdrop-blur-sm md:bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand / Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
              id="brand-logo-link"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2F80ED] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                <Home className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xl tracking-tight text-[#1F2933]">
                    {siteConfig.brandName}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8C3A0]"></span>
                </div>
                <span className="text-[11px] font-medium text-[#1F2933]/60 -mt-1 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-[#2F80ED]" />
                  {siteConfig.locationBadge}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 bg-white/70 px-6 py-2 rounded-full border border-[#1F2933]/5 shadow-sm/30 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[14px] font-medium text-[#1F2933]/80 hover:text-[#2F80ED] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2F80ED] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action & WhatsApp Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-[#1F2933] bg-[#F8F7F2] hover:bg-[#EBE8DE] border border-[#1F2933]/10 rounded-full transition-colors"
                title="Chat with an agent on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuickInquiry}
                id="navbar-cta-find-home"
                className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-semibold text-white bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] rounded-full shadow-sm shadow-[#2F80ED]/25 transition-all"
              >
                Find a Home
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={onOpenQuickInquiry}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-[#2F80ED] rounded-full"
              >
                Find Home
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="p-2 rounded-lg text-[#1F2933] hover:bg-[#F8F7F2] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#FFFFFF] border-b border-[#1F2933]/10 px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1F2933]/5 text-xs text-[#1F2933]/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Ilorin, Kwara State
                </span>
                <span className="text-[#2F80ED] font-semibold">Demo Presentation</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-[#1F2933] hover:text-[#2F80ED] py-2 transition-colors border-b border-[#1F2933]/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuickInquiry();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#2F80ED] rounded-xl shadow-sm"
                >
                  Find a Home
                </button>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#1F2933] bg-[#F8F7F2] border border-[#1F2933]/10 rounded-xl"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
