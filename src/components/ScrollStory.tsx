import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Subtle cinematic scroll transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.03, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['20px', '0px']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#F8F7F2] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (Large architectural property photo with subtle scale & parallax) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1F2933]/10 bg-[#E8E6DB] aspect-[4/3] sm:aspect-[16/11]">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="w-full h-full will-change-transform"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern residence in Ilorin"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Gradient Scrim & Location pill */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#A8C3A0]" />
                  <span>GRA Phase 1 • Verified Residential Belt</span>
                </div>
                <span className="text-xs text-white/80 hidden sm:inline">
                  Quiet, Secure & Well-Connected
                </span>
              </div>
            </div>

            {/* Secondary Floating Floating Insight Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 bg-white p-5 rounded-2xl shadow-xl border border-[#1F2933]/10 max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-2.5 mb-2 text-[#2F80ED]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  The Ilorin Difference
                </span>
              </div>
              <p className="text-xs text-[#1F2933]/80 leading-relaxed">
                We pre-verify power feeders and municipal borehole connections so you never face water or electrical surprises after moving in.
              </p>
            </motion.div>
          </div>

          {/* Text Content Column */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="lg:col-span-5 order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F80ED]/10 text-[#2F80ED] text-xs font-bold uppercase tracking-wider">
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight leading-[1.15]">
              More Than <span className="font-editorial italic font-normal text-[#2F80ED]">Finding a House.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#1F2933]/85 font-normal leading-relaxed">
              We make the process of finding a home easier by helping you discover options that match what you're actually looking for.
            </p>

            <div className="pt-2 space-y-3.5 text-sm text-[#1F2933]/75">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A8C3A0] mt-1 shrink-0" />
                <span>
                  <strong>Accurate photographs & videos:</strong> What you see on our website matches the physical reality on the ground.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A8C3A0] mt-1 shrink-0" />
                <span>
                  <strong>Honest neighborhood advice:</strong> Tailored guidance for healthcare workers, university faculty, remote professionals, and families.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#A8C3A0] mt-1 shrink-0" />
                <span>
                  <strong>Clear landlord and tenancy terms:</strong> Complete peace of mind with vetted landlords and structured paperwork.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
