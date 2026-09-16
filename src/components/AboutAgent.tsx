import { motion } from 'motion/react';
import { MessageSquare, Phone, Mail, MapPin, Shield } from 'lucide-react';
import { agentInfo, getWhatsAppLink } from '../data/mockData';

interface AboutAgentProps {
  onOpenInquiry: () => void;
}

export default function AboutAgent({ onOpenInquiry }: AboutAgentProps) {
  return (
    <section id="about" className="py-24 bg-[#F8F7F2] border-t border-[#1F2933]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#1F2933]/8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Agent Portrait Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Image Card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#ECE9DE] shadow-lg">
                  <img
                    src={agentInfo.image}
                    alt={agentInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/80 via-transparent to-transparent" />
                  
                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs uppercase tracking-wider text-[#A8C3A0] font-semibold block mb-0.5">
                      {agentInfo.title}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      {agentInfo.name}
                    </h3>
                    <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-[#2F80ED]" />
                      {agentInfo.location}
                    </p>
                  </div>
                </div>

                {/* Replaceable Notice for Client Presentation */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] text-[#1F2933]/50 font-medium">
                    * Placeholder Portrait — Easily replaced with client's real photo & profile
                  </span>
                </div>
              </div>
            </div>

            {/* Agent Details & Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2F80ED] mb-2 block">
                  About The Agent
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1F2933] tracking-tight leading-[1.15]">
                  {agentInfo.headline}
                </h2>
              </div>

              {/* Exact user requested copy */}
              <p className="text-base sm:text-lg text-[#1F2933]/80 font-normal leading-relaxed">
                "{agentInfo.introText}"
              </p>

              {/* Approach List */}
              <div className="space-y-3 pt-2">
                {agentInfo.approachBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#1F2933]/75">
                    <Shield className="w-4 h-4 text-[#2F80ED] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Contact Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppLink(`Hello ${agentInfo.name}! I would like to inquire about housing options in Ilorin.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-[#2F80ED]/25 transition-all"
                  id="agent-chat-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8F7F2] hover:bg-[#EBE8DE] text-[#1F2933] font-semibold text-sm border border-[#1F2933]/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1F2933]" />
                  <span>Request Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
