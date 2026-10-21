import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { IslamicLogo } from './IslamicLogo';

interface FooterProps {
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

interface StudentGalleryItem {
  id: number;
  src: string;
  alt: string;
  name: string;
  course: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnroll }) => {
  const [selectedStudent, setSelectedStudent] = useState<StudentGalleryItem | null>(null);

  const handleNav = (page: PageRoute, slug?: string) => {
    onNavigate(page, slug);
  };

  // 11 Students matching the reference banner gallery
  const students: StudentGalleryItem[] = [
    {
      id: 1,
      src: '/assets/images/boy_quran_student_1792430316665.jpg',
      alt: 'Young boy in prayer cap reading Quran on rehal',
      name: 'Muhammad Rayyan',
      course: 'Noorani Qaida & Tajweed',
    },
    {
      id: 2,
      src: '/assets/images/student_quran_online.jpg',
      alt: 'Student learning Quran online',
      name: 'Maryam Fatima',
      course: 'Quran Recitation & Hifz',
    },
    {
      id: 3,
      src: '/assets/images/girl_online_laptop_1792430342816.jpg',
      alt: 'Girl attending online Quran class on laptop',
      name: 'Aisha Siddiqa',
      course: 'Quranic Arabic & Translation',
    },
    {
      id: 4,
      src: '/assets/images/girl_white_hijab_1792430342115.jpg',
      alt: 'Girl in white hijab smiling with Holy Quran',
      name: 'Zainab Noor',
      course: 'Tajweed Mastery',
    },
    {
      id: 5,
      src: '/assets/images/quran_tajweed_reading_1790269867429.jpg',
      alt: 'Student reading Quran with Tajweed',
      name: 'Abdullah Omar',
      course: 'Quran Reading (Nazra)',
    },
    {
      id: 6,
      src: '/assets/images/islamic_academy_learning_1790269898921.jpg',
      alt: 'Student studying Quran at academy',
      name: 'Fatima Zahra',
      course: 'Islamic Studies & Daily Duas',
    },
    {
      id: 7,
      src: '/assets/images/girl_teal_hijab_1792430343468.jpg',
      alt: 'Young girl in teal hijab reading Quran',
      name: 'Khadijah Bilal',
      course: 'Basic Arabic Language',
    },
    {
      id: 8,
      src: '/assets/images/girl_black_hijab_quran_1792432274793.jpg',
      alt: 'Young girl in black hijab reciting Quran on rehal',
      name: 'Amina Binte Ali',
      course: 'Hifz ul Quran',
    },
    {
      id: 9,
      src: '/assets/images/quran_hifz_study_1792049866584.jpg',
      alt: 'Student engaged in Quran memorization',
      name: 'Hafsa Tariq',
      course: 'Tajweed & Memorization',
    },
    {
      id: 10,
      src: '/assets/images/student_quran_online_1792049844560.jpg',
      alt: 'Student studying Quran lessons',
      name: 'Ibrahim Khalil',
      course: 'Quranic Arabic',
    },
    {
      id: 11,
      src: '/assets/images/boy_holding_quran_1792430342987.jpg',
      alt: 'Boy holding Holy Quran with golden calligraphy',
      name: 'Hamza Farooq',
      course: 'Quran Memorization',
    },
  ];

  // Quick Links in the exact requested order
  const quickLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Courses', page: 'courses' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Packages', page: 'pricing' },
    { label: 'Blog', page: 'blog' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
    { label: 'Enroll', page: 'admissions' },
  ];

  const handlePrevStudent = () => {
    if (!selectedStudent) return;
    const currentIndex = students.findIndex((s) => s.id === selectedStudent.id);
    const prevIndex = (currentIndex - 1 + students.length) % students.length;
    setSelectedStudent(students[prevIndex]);
  };

  const handleNextStudent = () => {
    if (!selectedStudent) return;
    const currentIndex = students.findIndex((s) => s.id === selectedStudent.id);
    const nextIndex = (currentIndex + 1) % students.length;
    setSelectedStudent(students[nextIndex]);
  };

  return (
    <footer className="w-full relative mt-6 text-white selection:bg-[#0A3826] selection:text-white bg-transparent">
      {/* Background Layer: Asymmetrical Arched Canopy matching user's reference image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 440"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Secondary Layer: Faint Warm Silver-Gray Wave */}
          <path
            d="M0,120 C180,60 260,10 380,12 C640,16 1020,95 1440,70 L1440,440 L0,440 Z"
            fill="#D5D2C9"
            fillOpacity="0.55"
          />

          {/* Primary Layer: Dark Forest Green Canopy Shape */}
          <path
            d="M0,170 C140,95 230,0 330,0 C460,0 860,70 1440,135 L1440,440 L0,440 Z"
            fill="#032918"
          />

          {/* Bottom Islamic Architectural Arch Trim Line */}
          <path
            d="M0,422 L650,422 C670,422 682,430 695,430 C705,430 712,402 720,402 C728,402 735,430 745,430 C758,430 770,422 790,422 L1440,422"
            stroke="#D4AF37"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Foreground Content: Compact layout exactly matching reference image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-7 sm:pb-8">
        
        {/* Brand Header Section: Logo + Quran Education + Tagline + Description */}
        <div className="text-left pt-2 sm:pt-3 pb-3 sm:pb-4 pl-2 sm:pl-6 lg:pl-10">
          {/* Logo & Title */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="shrink-0">
              <IslamicLogo className="w-14 h-16 sm:w-16 sm:h-18 md:w-20 md:h-22 drop-shadow-md" color="#FFAA00" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F5BA14] font-medium leading-none drop-shadow-xs">
                  Quran
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-sans text-[#FFAA00] font-black leading-none drop-shadow-xs">
                  Education
                </span>
              </div>

              <span className="text-xs sm:text-sm md:text-[15px] text-[#F5BA14] font-medium lowercase tracking-wider mt-1 font-serif">
                online islamic academy
              </span>
            </div>
          </div>

          {/* User Required Description directly below logo */}
          <p className="mt-3.5 text-white/90 text-sm sm:text-[15px] leading-relaxed max-w-2xl font-normal">
            Quran Education is a non-partisan organization, we are not part of any group, Islamic organization or mosques. We welcome all students interested in learning Quran.
          </p>
        </div>

        {/* 3 Main Columns Layout with 2 golden vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start pt-4 border-t border-emerald-900/60 pl-2 sm:pl-6 lg:pl-10">
          
          {/* Column 1: Contact & Socialize */}
          <div className="md:col-span-4 lg:col-span-3 text-left space-y-4">
            
            {/* FEEL FREE TO CONTACT US */}
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#FACC15] uppercase tracking-wider mb-3">
                FEEL FREE TO CONTACT US
              </h3>

              <div className="space-y-2.5">
                {/* Phone 1: WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+923187779954"
                    className="text-white hover:text-[#FACC15] transition-colors font-mono text-sm sm:text-[15px] font-medium"
                  >
                    +92 318 7779954
                  </a>
                </div>

                {/* Phone 2: WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+923096000449"
                    className="text-white hover:text-[#FACC15] transition-colors font-mono text-sm sm:text-[15px] font-medium"
                  >
                    +92 309 6000449
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-[#032918] flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-[#032918]" />
                  </div>
                  <a
                    href="mailto:info@quraneducation.uk"
                    className="text-white hover:text-[#FACC15] transition-colors text-sm sm:text-[15px] font-medium break-all"
                  >
                    info@quraneducation.uk
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIALIZE WITH US */}
            <div className="pt-2">
              <h3 className="text-sm sm:text-[15px] font-bold text-[#FACC15] uppercase tracking-wider mb-3">
                SOCIALIZE WITH US
              </h3>

              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com/quraneducationacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white text-[#032918] hover:bg-[#FACC15] hover:text-[#032918] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/quraneducation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-white text-[#032918] hover:bg-[#FACC15] hover:text-[#032918] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@quraneducationacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white text-[#032918] hover:bg-[#FACC15] hover:text-[#032918] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* First Golden Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 self-stretch justify-center">
            <div className="w-[1.2px] bg-[#D4AF37] h-full min-h-[190px] mx-auto opacity-75" />
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 lg:col-span-2 text-left">
            <h3 className="text-sm sm:text-[15px] font-bold text-[#FACC15] uppercase tracking-wider mb-3">
              QUICK LINKS
            </h3>

            <ul className="space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.page)}
                    className="flex items-center gap-2 text-white/95 hover:text-[#FACC15] transition-colors text-sm sm:text-[15px] font-normal cursor-pointer text-left py-0.5"
                  >
                    <span className="text-[#FFAA00] font-bold text-sm select-none">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Golden Vertical Divider Line */}
          <div className="hidden lg:flex lg:col-span-1 self-stretch justify-center">
            <div className="w-[1.2px] bg-[#D4AF37] h-full min-h-[190px] mx-auto opacity-75" />
          </div>

          {/* Column 3: Students Gallery */}
          <div className="md:col-span-5 lg:col-span-5 text-left">
            <h3 className="text-sm sm:text-[15px] font-bold text-[#FACC15] uppercase tracking-wider mb-3">
              STUDENTS GALLERY
            </h3>

            {/* 6x2 Responsive Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {/* 11 Student Thumbnails */}
              {students.map((student) => (
                <button
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className="relative rounded-xl overflow-hidden aspect-square min-w-[50px] min-h-[50px] sm:min-w-[58px] sm:min-h-[58px] md:min-w-[64px] md:min-h-[64px] border border-white/20 shadow-sm group bg-emerald-950/40 cursor-pointer focus:outline-hidden hover:scale-105 transition-transform duration-200"
                  title={`${student.name} - ${student.course}`}
                >
                  <img
                    src={student.src}
                    alt={student.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ))}

              {/* 12th Tile: Golden VIEW MORE */}
              <button
                onClick={() => setSelectedStudent(students[0])}
                className="rounded-xl aspect-square min-w-[50px] min-h-[50px] sm:min-w-[58px] sm:min-h-[58px] md:min-w-[64px] md:min-h-[64px] bg-gradient-to-b from-[#FFAA00] via-[#F59E0B] to-[#D97706] border border-[#FACC15]/60 shadow-sm flex flex-col items-center justify-center p-1 cursor-pointer hover:brightness-110 active:scale-95 transition-all text-center group"
                title="View Student Gallery"
              >
                {/* Top Islamic Filigree Flourish */}
                <svg
                  className="w-4 h-1.5 text-white/90 mb-0.5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 8"
                  fill="currentColor"
                >
                  <path d="M12 0 C14 3 18 4 24 4 C18 4 14 5 12 8 C10 5 6 4 0 4 C6 4 10 3 12 0 Z" />
                </svg>

                <span className="text-[10px] sm:text-[11px] font-black text-white tracking-widest leading-none drop-shadow-xs">
                  VIEW
                </span>
                <span className="text-[10px] sm:text-[11px] font-black text-white tracking-widest leading-none mt-0.5 drop-shadow-xs">
                  MORE
                </span>

                {/* Bottom Islamic Filigree Flourish */}
                <svg
                  className="w-4 h-1.5 text-white/90 mt-0.5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 8"
                  fill="currentColor"
                >
                  <path d="M12 0 C14 3 18 4 24 4 C18 4 14 5 12 8 C10 5 6 4 0 4 C6 4 10 3 12 0 Z" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-200/70 border-t border-emerald-900/40">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Quran Education. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Interactive Lightbox Modal for Student Gallery & Enrollment */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-[#072C1E] border border-[#D4AF37]/50 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg mb-4">
                <img
                  src={selectedStudent.src}
                  alt={selectedStudent.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between w-full px-6 mb-2">
                <button
                  onClick={handlePrevStudent}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous student"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-[#FACC15]">
                    {selectedStudent.name}
                  </h4>
                  <p className="text-sm text-emerald-200/90 font-medium">
                    {selectedStudent.course}
                  </p>
                </div>
                <button
                  onClick={handleNextStudent}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next student"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 mb-5 max-w-sm">
                Enrolled in interactive one-on-one live Quran classes with our certified scholars.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedStudent(null);
                    onOpenEnroll();
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B88204] hover:from-[#E2B338] hover:to-[#C59210] text-[#072C1E] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Enroll Now
                </button>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
