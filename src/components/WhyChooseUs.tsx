import { motion } from 'motion/react';
import { Compass, UserCheck, Layers, CheckCircle2 } from 'lucide-react';
import { whyChooseUsBenefits } from '../data/mockData';

const iconMap = {
  'local-knowledge': Compass,
  'personal-assistance': UserCheck,
  'property-options': Layers,
  'simple-process': CheckCircle2,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] mb-2 block">
            The Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight">
            Why Work With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2933]/70 font-normal leading-relaxed">
            Built from the ground up to provide a modern, transparent housing discovery experience in Kwara State.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsBenefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.id as keyof typeof iconMap] || Compass;

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
                className="p-7 rounded-2xl bg-[#F8F7F2] border border-[#1F2933]/6 hover:border-[#2F80ED]/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Minimal Line Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#1F2933]/8 flex items-center justify-center text-[#2F80ED] mb-6 shadow-2xs">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-display font-bold text-[#1F2933] mb-2.5">
                    {benefit.title}
                  </h3>

                  <p className="text-sm font-medium text-[#1F2933]/85 mb-3 leading-snug">
                    {benefit.description}
                  </p>

                  <p className="text-xs text-[#1F2933]/65 leading-relaxed">
                    {benefit.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F2933]/6 flex items-center gap-1.5 text-[11px] font-semibold text-[#A8C3A0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8C3A0]"></span>
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
