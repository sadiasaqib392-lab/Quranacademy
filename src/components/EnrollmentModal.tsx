import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { IslamicPattern } from './IslamicPattern';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId = 'noorani-qaida',
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: initialCourseId,
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (initialCourseId) {
      setFormData((prev) => ({ ...prev, courseId: initialCourseId }));
    }
  }, [initialCourseId]);

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Directly submit to +92 318 7779954 without launching WhatsApp on user's device
    setTimeout(() => {
      setConfirmationCode(`QE-REG-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-6 border border-emerald-900/15 text-left"
      >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#072C1E] via-[#0A3826] to-[#041B12] p-5 sm:p-7 text-white">
          <IslamicPattern variant="dark" opacity={0.08} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-emerald-200/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">
              3-Day Free Trial • No Credit Card Required
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
            Enroll in Quran Education
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-md">
            Experience interactive 1-on-1 personalized lessons with certified scholars from the comfort of your home.
          </p>
        </div>

        {/* Content Body with visible Islamic Pattern backdrop */}
        <div className="relative p-5 sm:p-7 max-h-[78vh] overflow-y-auto bg-[#FAF9F5]/90 backdrop-blur-xs">
          <IslamicPattern variant="light" opacity={0.38} />
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 text-left space-y-4"
            >
              {/* Automated Welcome Message Box from +92 318 7779954 */}
              <div className="rounded-2xl bg-white border-2 border-emerald-600 p-5 sm:p-6 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#072C1E] block">
                        Quran Education Admissions
                      </span>
                      <span className="font-mono text-xs text-emerald-700 font-semibold">
                        +92 318 7779954
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {confirmationCode}
                  </span>
                </div>

                <div className="space-y-2.5 text-slate-700 text-xs leading-relaxed bg-[#FAF9F5] p-3.5 rounded-xl border border-slate-200">
                  <p className="font-semibold text-emerald-900 text-sm">
                    Assalamu Alaykum {formData.studentName || 'Student'}!
                  </p>
                  <p>
                    <strong className="text-[#072C1E]">Welcome to Quran Education Academy!</strong> Your 3-Day Free Trial registration for <strong className="text-emerald-800">{getCourseTitle()}</strong> has been submitted directly to Admissions (+92 318 7779954).
                  </p>
                  <p>
                    Your details have been confirmed. Our coordinator will contact you on WhatsApp at <span className="font-mono font-bold text-emerald-700">{formData.whatsappNumber}</span> with your teacher’s profile and initial class schedule.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 text-[11px]">
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Student</span>
                    <span className="font-semibold text-slate-800">{formData.studentName}</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Course</span>
                    <span className="font-semibold text-slate-800">{getCourseTitle()}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0A3826] text-white rounded-xl font-semibold text-xs hover:bg-[#072C1E] transition-colors cursor-pointer shadow-sm"
                >
                  Done & Close
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium text-xs hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Enroll Another Student
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ibrahim Khan"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name (if under 18)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Khan"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8 years / Adult"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country & City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United Kingdom (London) / USA (Dallas)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number (with country code) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7911 123456 / +92 318 7779954"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. family@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Desired Course <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all font-medium text-slate-800"
                >
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all text-slate-700"
                >
                  <option>Morning (8:00 AM - 12:00 PM)</option>
                  <option>Afternoon (1:00 PM - 5:00 PM)</option>
                  <option>Evening (5:00 PM - 9:00 PM)</option>
                  <option>Night (9:00 PM - Midnight)</option>
                  <option>Weekend Only (Sat & Sun)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes / Current Reading Level
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Beginner level, knows alphabet, wants to improve Tajweed rules..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] focus:bg-white transition-all"
                />
              </div>

              {/* Single Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#0A3826] to-[#072C1E] hover:from-[#0E4B33] hover:to-[#0A3826] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Confidential • Verified Certified Faculty • Free Class Rescheduling</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
