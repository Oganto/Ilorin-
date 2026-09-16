import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MapPin, ArrowRight, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../data/mockData';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax and scale on hero background
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1F2933]"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={siteConfig.heroPosterUrl}
          className="w-full h-full object-cover object-center"
        >
          <source src={siteConfig.heroVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Bright-Friendly Subtle Gradient Overlay - ensuring text readability without looking black/murky */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/85 via-[#1F2933]/40 to-[#1F2933]/25" />
        <div className="absolute inset-0 bg-[#2F80ED]/10 mix-blend-overlay" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-24 flex flex-col items-center text-center"
      >
        {/* Location Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <MapPin className="w-3.5 h-3.5 text-[#A8C3A0]" />
          <span>Ilorin, Kwara State</span>
          <span className="w-1 h-1 rounded-full bg-white/60"></span>
          <span className="text-white/80 text-[11px]">Modern Housing Service</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1]"
        >
          Find a Place You'll <span className="font-editorial italic font-normal text-[#F8F7F2]">Love to Call Home.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed text-balance"
        >
          Discover quality homes in Ilorin that fit your lifestyle, needs and budget.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={onExploreClick}
            id="hero-explore-cta"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] text-white font-semibold text-base shadow-lg shadow-[#2F80ED]/35 transition-all duration-200 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/95 hover:bg-white text-[#1F2933] font-semibold text-base backdrop-blur-md border border-white/40 shadow-md transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Subtle Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A8C3A0]" />
            <span>Verified Ilorin Properties</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#A8C3A0]" />
            <span>GRA • Tanke • Fate • Adewole</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span>Agent On Call For Inspections</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Curve / Wave transition into Warm Ivory */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F8F7F2] to-transparent pointer-events-none" />
    </section>
  );
}
