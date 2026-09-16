import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { Property } from '../types';
import { getWhatsAppLink } from '../data/mockData';

interface ScheduleInspectionModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function ScheduleInspectionModal({
  property,
  onClose,
}: ScheduleInspectionModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM – 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!property) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppConfirmation = () => {
    const message = `Hello Haven Ilorin! I would like to confirm my inspection request:\n\n• Property: ${property.title} (${property.neighborhood})\n• Client: ${fullName}\n• Phone: ${phone}\n• Preferred Date: ${date || 'Soonest available'}\n• Time: ${timeSlot}\n• Note: ${notes || 'None'}`;
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1F2933]/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-auto border border-[#1F2933]/10"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#1F2933]/8 mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2F80ED]">
                In-Person Walkthrough
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1F2933]">
                Schedule Inspection
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#1F2933]/60 hover:text-[#1F2933] hover:bg-[#F8F7F2]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Property Preview */}
              <div className="p-3.5 rounded-xl bg-[#F8F7F2] border border-[#1F2933]/5 flex items-center gap-3">
                <img
                  src={property.featuredImage}
                  alt={property.title}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[#1F2933] truncate">{property.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-[#1F2933]/60 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#2F80ED]" />
                    <span>{property.neighborhood}, Ilorin</span>
                    <span>•</span>
                    <span className="font-semibold text-[#2F80ED]">{property.priceFormatted}/yr</span>
                  </div>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Kemi Balogun"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 px-3.5 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                />
              </div>

              {/* Phone / WhatsApp Number */}
              <div>
                <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#2F80ED]" />
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0803 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                />
              </div>

              {/* Inspection Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#2F80ED]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-11 px-3 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2F80ED]" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full h-11 px-2.5 text-xs sm:text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                  >
                    <option value="Morning (10:00 AM – 12:00 PM)">Morning (10am – 12pm)</option>
                    <option value="Afternoon (2:00 PM – 4:00 PM)">Afternoon (2pm – 4pm)</option>
                    <option value="Evening (4:30 PM – 6:00 PM)">Evening (4:30pm – 6pm)</option>
                  </select>
                </div>
              </div>

              {/* Specific Notes */}
              <div>
                <label className="text-xs font-semibold text-[#1F2933]/70 mb-1 block">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Bringing family, interested in moving in next month, inquire about transformer capacity..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 text-sm bg-[#F8F7F2] rounded-xl border border-[#1F2933]/10 focus:outline-none focus:ring-2 focus:ring-[#2F80ED]/30 focus:border-[#2F80ED]"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2F80ED] hover:bg-[#256ecf] active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-[#2F80ED]/25 transition-all"
                >
                  Confirm Inspection Request
                </button>
                <p className="text-center text-[11px] text-[#1F2933]/60">
                  Our agent will confirm availability with the landlord/caretaker in Ilorin within 2 hours.
                </p>
              </div>
            </form>
          ) : (
            /* Submission Confirmation State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#A8C3A0]/20 flex items-center justify-center text-[#2F80ED]">
                <CheckCircle2 className="w-9 h-9 text-[#2F80ED]" />
              </div>

              <h4 className="text-xl font-display font-bold text-[#1F2933]">
                Inspection Request Received!
              </h4>

              <p className="text-sm text-[#1F2933]/75 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. We've logged your inspection appointment for <strong>{property.title}</strong> on <strong>{date || 'the upcoming scheduled day'}</strong>.
              </p>

              <div className="p-4 rounded-xl bg-[#F8F7F2] text-xs text-[#1F2933]/80 text-left space-y-1 border border-[#1F2933]/5">
                <div><strong>Location:</strong> {property.location}</div>
                <div><strong>Slot:</strong> {timeSlot}</div>
                <div><strong>Contact:</strong> {phone}</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppConfirmation}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct to WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-[#F8F7F2] hover:bg-[#EBE8DE] text-[#1F2933] text-xs sm:text-sm font-semibold transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
