import React, { useState, useEffect } from 'react';
import {
  Home,
  Star,
  BookOpen,
  Sparkles,
  Bookmark,
  LayoutGrid,
  HelpCircle,
  Mail,
  Lock,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { ACADEMY_CONFIG } from '../data/academyData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, courseSlug?: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnroll,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';

  // Navigation Links: Home, About, Courses, How It Works, Packages, Blog, FAQ, Contact
  const navLinks: {
    label: string;
    page: PageRoute;
    icon: React.ComponentType<{ className?: string }>;
    hasDropdown?: boolean;
    isAction?: boolean;
  }[] = [
    { label: 'HOME', page: 'home', icon: Home },
    { label: 'ABOUT', page: 'about', icon: Star },
    { label: 'COURSES', page: 'courses', icon: BookOpen, hasDropdown: true },
    { label: 'HOW IT WORKS', page: 'how-it-works', icon: Sparkles },
    { label: 'PACKAGES', page: 'pricing', icon: Bookmark },
    { label: 'BLOG', page: 'blog', icon: LayoutGrid },
    { label: 'FAQ', page: 'faq', icon: HelpCircle },
    { label: 'CONTACT', page: 'contact', icon: Mail },
  ];

  // Quick course list for the dropdown
  const featuredCourses = [
    { name: 'Noorani Qaida', slug: 'noorani-qaida' },
    { name: 'Quran Reading (Nazra)', slug: 'quran-reading' },
    { name: 'Quran with Tajweed', slug: 'quran-tajweed' },
    { name: 'Quran Memorization (Hifz)', slug: 'quran-memorization' },
    { name: 'Quran Translation', slug: 'quran-translation' },
    { name: 'Basic Arabic Language', slug: 'basic-arabic' },
  ];

  const handleNavClick = (page: PageRoute, isAction?: boolean) => {
    if (isAction) {
      onOpenEnroll();
      return;
    }
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-md">
      {/* Top Contact Strip */}
      <div className="bg-[#0A3826] text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-8 border-b border-emerald-900/60 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-3 text-emerald-100 text-xs sm:text-sm">
            <span className="text-[#D4AF37] font-serif font-bold text-sm sm:text-base">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="text-emerald-500">|</span>
            <span className="font-medium">Online Quran Academy with Certified Scholars</span>
          </div>

          {/* Right Contact Details */}
          {isHome ? (
            /* Home page specific contact details: WhatsApp +92 309 6000449, WhatsApp +92 318 7779954, Email info@quraneducation.uk, NO country flags */
            <div className="flex items-center justify-end flex-wrap gap-3 sm:gap-4 ml-auto text-xs sm:text-sm">
              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/923096000449"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
                title="Chat on WhatsApp +92 309 6000449"
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="font-mono font-medium text-xs sm:text-[13px]">+92 309 6000449</span>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/923187779954"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
                title="Chat on WhatsApp +92 318 7779954"
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="font-mono font-medium text-xs sm:text-[13px]">+92 318 7779954</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@quraneducation.uk"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
                title="Email info@quraneducation.uk"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="font-sans font-medium text-xs sm:text-[13px]">info@quraneducation.uk</span>
              </a>
            </div>
          ) : (
            /* Other pages: preserve original international badges with flags */
            <div className="flex items-center justify-end flex-wrap gap-2 sm:gap-3 text-xs ml-auto">
              {/* UK */}
              <a
                href="tel:+448085310303"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              >
                <span className="text-xs" role="img" aria-label="UK flag">🇬🇧</span>
                <span className="font-mono text-xs">+44 808 531 0303</span>
              </a>

              {/* AUS */}
              <a
                href="tel:+61280035454"
                className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              >
                <span className="text-xs" role="img" aria-label="Australia flag">🇦🇺</span>
                <span className="font-mono text-xs">61 (2) 8003 5454</span>
              </a>

              {/* USA */}
              <a
                href="tel:+13189310931"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
              >
                <span className="text-xs" role="img" aria-label="USA flag">🇺🇸</span>
                <span className="font-mono text-xs">1 (318) 931 0931</span>
              </a>

              {/* WhatsApp */}
              <a
                href={ACADEMY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-bold transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.97.57 3.807 1.558 5.36L2 22l4.75-1.523A9.97 9.97 0 0 0 12.031 22C17.566 22 22 17.566 22 12.031 22 6.496 17.566 2 12.031 2zm5.72 14.34c-.24.67-1.39 1.28-1.92 1.36-.51.08-1.17.11-3.79-.95-2.24-.9-3.69-3.17-3.8-3.32-.11-.15-.92-1.22-.92-2.33 0-1.11.58-1.65.79-1.88.2-.23.45-.29.6-.29.15 0 .3 0 .43.01.14.01.32-.05.5.39.18.44.62 1.52.68 1.63.06.11.1.25.02.4-.07.15-.11.24-.22.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.81 1.12.22.11.35.1.48-.05.13-.15.56-.65.71-.88.15-.22.3-.18.5-.11.2.07 1.29.61 1.51.72.22.11.37.17.43.26.05.1.05.58-.19 1.25z" />
                </svg>
                <span className="font-mono text-xs text-white font-semibold">
                  {ACADEMY_CONFIG.phone}
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Bar with Golden Left Sweep Design */}
      <div
        className={`w-full relative transition-all duration-300 bg-white ${
          isScrolled ? 'py-1 shadow-lg' : 'py-0'
        }`}
      >
        <div className="w-full relative flex items-stretch justify-between">
          {/* Golden Curved Sweep on Left */}
          <div className="relative shrink-0 flex items-center pr-12 sm:pr-20 z-10">
            {/* The Golden Background Polygon & Curved Edge */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#D9A328] via-[#E2B338] to-[#F1C84D] shadow-md"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0% 100%)',
              }}
            />

            {/* Logo inside Golden Left Banner */}
            <div className="relative z-20 py-2.5 sm:py-3.5 pl-4 sm:pl-8 lg:pl-12 pr-6">
              <a
                href="#/home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="focus:outline-hidden transition-transform hover:scale-102 cursor-pointer flex items-center"
                aria-label="Quran Education Home"
              >
                <Logo size="md" variant="white" tagline="Online Quran Academy" isFooter={false} />
              </a>
            </div>
          </div>

          {/* Right Navigation & Action Items */}
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative z-10 bg-white/95">
            <div className="flex items-center justify-between gap-4">
              {/* Desktop Nav Links with Proportional, Readable Font Size (15–16px) */}
              <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = currentPage === link.page;

                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                        onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                      >
                        <a
                          href={`#/${link.page}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.page);
                          }}
                          className={`flex items-center gap-1.5 text-[15px] xl:text-[16px] font-bold tracking-wide uppercase transition-colors py-2 cursor-pointer ${
                            isActive
                              ? 'text-[#0A3826] font-extrabold'
                              : 'text-slate-700 hover:text-[#0A3826]'
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{link.label}</span>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
                        </a>

                        {/* Courses Dropdown Menu */}
                        {isCoursesDropdownOpen && (
                          <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200/80 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-left">
                            <div className="px-3.5 py-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-serif border-b border-slate-100">
                              Available Courses
                            </div>
                            {featuredCourses.map((c) => (
                              <a
                                key={c.slug}
                                href={`#/course/${c.slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate('course-detail', c.slug);
                                  setIsCoursesDropdownOpen(false);
                                }}
                                className="block px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#0A3826] transition-colors cursor-pointer"
                              >
                                {c.name}
                              </a>
                            ))}
                            <div className="mt-1 pt-1 border-t border-slate-100">
                              <a
                                href="#/courses"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate('courses');
                                  setIsCoursesDropdownOpen(false);
                                }}
                                className="block px-3.5 py-1.5 text-xs font-bold text-[#0A3826] hover:underline cursor-pointer"
                              >
                                View All Courses →
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.label}
                      href={`#/${link.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.page);
                      }}
                      className={`flex items-center gap-1.5 text-[15px] xl:text-[16px] font-bold tracking-wide uppercase transition-colors py-2 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'text-[#0A3826] font-extrabold'
                          : 'text-slate-700 hover:text-[#0A3826]'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Right Action: LOGIN Button ONLY on other pages; REMOVED on Home page */}
              {!isHome && (
                <div className="hidden sm:flex items-center gap-3 shrink-0 ml-auto">
                  <button
                    onClick={() => onOpenEnroll()}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A3826] hover:bg-[#072C1E] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>LOGIN</span>
                  </button>
                </div>
              )}

              {/* Mobile Menu Hamburger */}
              <div className="flex lg:hidden items-center gap-2 ml-auto">
                {!isHome && (
                  <button
                    onClick={() => onOpenEnroll()}
                    className="px-3 py-1.5 bg-[#0A3826] text-white rounded-full text-[11px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1"
                  >
                    <Lock className="w-3 h-3 text-[#D4AF37]" />
                    <span>LOGIN</span>
                  </button>
                )}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-slate-700 hover:text-[#0A3826] focus:outline-hidden rounded-lg"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Subtle Gold Underline underneath Nav Links */}
            <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#E2B338]/30 to-transparent mt-1" />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-emerald-950/10 shadow-2xl px-6 py-6 space-y-4 text-left animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.page;
              return (
                <a
                  key={link.label}
                  href={`#/${link.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    handleNavClick(link.page);
                  }}
                  className={`flex items-center gap-3 text-base font-bold uppercase py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-[#0A3826]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full py-3 bg-gradient-to-r from-[#0A3826] to-[#072C1E] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-md"
            >
              Book 3-Day Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
