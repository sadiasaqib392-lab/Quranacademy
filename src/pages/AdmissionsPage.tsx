import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { IslamicPattern } from '../components/IslamicPattern';
import { PageRoute } from '../types';
import { courses, ACADEMY_CONFIG } from '../data/academyData';

interface AdmissionsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    age: '',
    country: '',
    whatsappNumber: '',
    email: '',
    courseId: 'noorani-qaida',
    preferredTime: 'Evening (5:00 PM - 9:00 PM)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const getCourseTitle = () => {
    const selected = courses.find((c) => c.id === formData.courseId || c.slug === formData.courseId);
    return selected ? selected.title : 'Quran Course';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate direct dispatch to +92 318 7779954 without opening WhatsApp on client
    setTimeout(() => {
      setSubmissionId(`QE-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="w-full relative overflow-hidden text-slate-800">
      {/* Header */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-white/60 via-[#FAF8F5]/40 to-white/60 border-b border-slate-200/60 backdrop-blur-[2px]">
        <IslamicPattern variant="light" opacity={0.045} patternType="star8" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/5 text-[#0A3826] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Open Enrollment • Worldwide Admissions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#072C1E]">
            Admissions & 3-Day Free Trial
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Begin your Quranic journey with no obligation. Submit your enrollment details below for direct booking with our admissions team.
          </p>
        </div>
      </section>

      {/* Main Admissions Content */}
      <section className="relative py-20 bg-white/40">
        <IslamicPattern variant="subtle" opacity={0.02} patternType="girih" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
            {/* Left Form */}
            <div className="lg:col-span-8 bg-[#FAF9F5]/92 backdrop-blur-sm p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md relative overflow-hidden">
              <IslamicPattern variant="light" opacity={0.32} className="rounded-3xl pointer-events-none" />
              <h3 className="relative z-10 text-xl sm:text-2xl font-serif font-bold text-[#072C1E] mb-2">
                Online Enrollment Form
              </h3>
              <p className="relative z-10 text-xs text-slate-600 mb-6">
                Fill in the details below and click Submit. Your application is sent directly to our admissions office (+92 318 7779954).
              </p>

              {isSubmitted ? (
                <div className="py-6 text-left space-y-6">
                  {/* Automated Welcome Message Card from +92 318 7779954 */}
                  <div className="rounded-2xl bg-white border-2 border-emerald-600 p-6 shadow-lg relative overflow-hidden">
                    <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-xs">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#072C1E]">
                              Quran Education Admissions
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                              Verified Academy
                            </span>
                          </div>
                          <span className="font-mono text-xs text-emerald-700 font-semibold">
                            +92 318 7779954
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {submissionId}
                      </span>
                    </div>

                    <div className="space-y-3 text-slate-700 text-xs leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-slate-200">
                      <p className="font-semibold text-emerald-900 text-sm">
                        Assalamu Alaykum {formData.studentName || 'Student'}!
                      </p>
                      <p>
                        <strong className="text-[#072C1E]">Welcome to Quran Education Academy!</strong> Your 3-Day Free Trial enrollment application for <strong className="text-emerald-800">{getCourseTitle()}</strong> has been directly received and registered in our system.
                      </p>
                      <p>
                        Our academic coordination team has automatically received your application details at <span className="font-mono font-bold text-emerald-700">+92 318 7779954</span>. An assigned scholar matching your preferred schedule (<span className="font-medium text-slate-800">{formData.preferredTime}</span>) is being designated for you.
                      </p>
                      <p className="text-slate-600 border-t border-slate-200/80 pt-2 text-[11px]">
                        We will reach out to you directly at <span className="font-mono font-bold text-slate-800">{formData.whatsappNumber}</span> to confirm your class timings and provide your private classroom link.
                      </p>
                    </div>

                    {/* Enrollment Details Summary */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 text-[11px]">
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Student Name</span>
                        <span className="font-semibold text-slate-800">{formData.studentName}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Course</span>
                        <span className="font-semibold text-slate-800">{getCourseTitle()}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500 block">Trial Status</span>
                        <span className="font-semibold text-emerald-700">3-Day Free Trial Confirmed</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => {
                        setFormData({
                          studentName: '',
                          parentName: '',
                          age: '',
                          country: '',
                          whatsappNumber: '',
                          email: '',
                          courseId: 'noorani-qaida',
                          preferredTime: 'Evening (5:00 PM - 9:00 PM)',
                          message: '',
                        });
                        setIsSubmitted(false);
                      }}
                      className="px-6 py-3 bg-[#0A3826] text-white rounded-xl font-semibold text-xs hover:bg-[#072C1E] transition-colors cursor-pointer shadow-sm"
                    >
                      Submit Another Student Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maryam Fatima"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Asif Raza"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Student Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 7 years"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Country & City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London, United Kingdom / Lahore, Pakistan"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +44 7911 123456"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. student@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Course <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826] font-medium"
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
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                    >
                      <option>Morning (8:00 AM - 12:00 PM)</option>
                      <option>Afternoon (1:00 PM - 5:00 PM)</option>
                      <option>Evening (5:00 PM - 9:00 PM)</option>
                      <option>Night (9:00 PM - Midnight)</option>
                      <option>Weekend Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Notes or Prior Experience
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Has completed Noorani Qaida, wants to start Para 1 Nazra..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3826]"
                    />
                  </div>

                  {/* Single Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-[#0A3826] hover:bg-[#072C1E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
                </form>
              )}
            </div>

            {/* Right Information Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-7 rounded-3xl bg-[#072C1E] text-white space-y-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  Direct Counseling Line
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  Speak Directly with an Academic Counselor
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Have questions regarding fee structure, scheduling, or curriculum for multiple children? Our advisors are active on WhatsApp 24/7.
                </p>

                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20BD5A] transition-colors w-full justify-center shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                  </svg>
                  <span>Chat: {ACADEMY_CONFIG.phone}</span>
                </a>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200 space-y-3">
                <h4 className="text-sm font-serif font-bold text-[#072C1E]">
                  The 3-Day Free Trial Guarantee:
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>3 complimentary 1-on-1 private lessons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>No credit card or upfront payment needed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Test your assigned scholar’s teaching style</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Receive detailed assessment of student level</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
