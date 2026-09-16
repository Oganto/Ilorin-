import { motion } from 'motion/react';
import { howItWorksSteps } from '../data/mockData';
import { Compass, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white border-y border-[#1F2933]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8C3A0]/20 text-[#1F2933] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#2F80ED]" />
            <span>The Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight leading-[1.15]">
            Finding a Home <span className="font-editorial italic font-normal text-[#2F80ED]">Should Be Simple.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1F2933]/70 font-normal leading-relaxed">
            We've removed the stress, confusing agent circles, and wasted inspection trips. Here is how we make finding your next home in Ilorin effortless.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#F8F7F2] border border-[#1F2933]/6 hover:border-[#2F80ED]/30 hover:bg-[#F2EFE8] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#2F80ED] tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#A8C3A0] shadow-xs group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#1F2933] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#1F2933]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Highlight */}
              <div className="mt-6 pt-4 border-t border-[#1F2933]/8 text-[11px] font-semibold text-[#2F80ED]">
                {step.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
