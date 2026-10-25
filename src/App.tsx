import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { EnrollmentModal } from './components/EnrollmentModal';
import { ISLAMIC_BG_PATTERN } from './assets/bgPattern';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { TeachersPage } from './pages/TeachersPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { BlogPage } from './pages/BlogPage';
import { FAQPage } from './pages/FAQPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [courseSlug, setCourseSlug] = useState('noorani-qaida');
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseId, setEnrollCourseId] = useState('noorani-qaida');

  // Multi-page hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('course/')) {
        const slug = hash.replace('course/', '');
        setCourseSlug(slug);
        setCurrentPage('course-detail');
        return;
      }

      if (hash === 'packages') {
        setCurrentPage('pricing');
        return;
      }

      if (hash === 'enroll') {
        setCurrentPage('admissions');
        return;
      }

      const validPages: PageRoute[] = [
        'home',
        'about',
        'courses',
        'course-detail',
        'teachers',
        'how-it-works',
        'pricing',
        'admissions',
        'blog',
        'faq',
        'testimonials',
        'contact',
        'privacy',
        'terms',
      ];

      if (validPages.includes(hash as PageRoute)) {
        setCurrentPage(hash as PageRoute);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title and favicon dynamically for every open page/tab
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Home | Quran Education - Online Quran Academy',
      courses: 'All Courses | Quran Education',
      about: 'About Us | Quran Education',
      'how-it-works': 'How It Works | Quran Education',
      pricing: 'Packages & Tuition | Quran Education',
      admissions: 'Enroll in 3-Day Free Trial | Quran Education',
      blog: 'Islamic Blog & Guides | Quran Education',
      faq: 'FAQ | Quran Education',
      contact: 'Contact Us | Quran Education',
      teachers: 'Our Certified Scholars | Quran Education',
      testimonials: 'Student Reviews & Success Stories | Quran Education',
      privacy: 'Privacy Policy | Quran Education',
      terms: 'Terms of Service | Quran Education',
    };

    if (currentPage === 'course-detail' && courseSlug) {
      const courseTitles: Record<string, string> = {
        'noorani-qaida': 'Noorani Qaida Course | Quran Education',
        'quran-reading': 'Quran Reading (Nazra) Course | Quran Education',
        'quran-tajweed': 'Quran with Tajweed Course | Quran Education',
        'quran-memorization': 'Quran Memorization (Hifz) | Quran Education',
        'quran-translation': 'Quran Translation Course | Quran Education',
        'salah-and-duas': 'Salah and Daily Masnoon Dua | Quran Education',
        'basic-islamic-studies': 'Basic Islamic Studies Course | Quran Education',
        'comprehensive-islamic-studies': 'Comprehensive Islamic Studies | Quran Education',
        'advanced-islamic-studies': 'Advanced Islamic Studies Course | Quran Education',
      };
      document.title = courseTitles[courseSlug] || 'Course Details | Quran Education';
    } else {
      document.title = titles[currentPage] || 'Quran Education | Online Islamic Academy';
    }

    // Ensure tab favicon is set to logo.png
    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/logo.png';
  }, [currentPage, courseSlug]);

  const handleNavigate = (page: PageRoute, slug?: string) => {
    const targetHash =
      page === 'course-detail' && slug
        ? `#/course/${slug}`
        : `#/${page === 'pricing' ? 'packages' : page === 'admissions' ? 'enroll' : page}`;
    window.open(targetHash, '_blank');
  };

  const handleOpenEnroll = (courseId?: string) => {
    if (courseId) {
      setEnrollCourseId(courseId);
    }
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 font-sans selection:bg-[#0A3826] selection:text-white relative transition-all duration-300">
      {/* Universal Fixed Islamic Geometric Pattern Viewport Layer - 100% Mobile & Desktop Compatible */}
      <div
        className="site-bg-pattern-layer"
        style={{ backgroundImage: `url("${ISLAMIC_BG_PATTERN}")` }}
        aria-hidden="true"
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnroll={handleOpenEnroll}
      />

      {/* Main Multi-page Body */}
      <main className="flex-1 relative z-10 bg-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage === 'course-detail' ? `course-${courseSlug}` : currentPage}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'about' && (
              <AboutPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'courses' && (
              <CoursesPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'course-detail' && (
              <CourseDetailPage
                courseSlug={courseSlug}
                onNavigate={handleNavigate}
                onOpenEnroll={handleOpenEnroll}
              />
            )}
            {currentPage === 'teachers' && (
              <TeachersPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'how-it-works' && (
              <HowItWorksPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'pricing' && (
              <PricingPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'admissions' && (
              <AdmissionsPage onNavigate={handleNavigate} />
            )}
            {currentPage === 'blog' && (
              <BlogPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'faq' && (
              <FAQPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'testimonials' && (
              <TestimonialsPage onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />
            )}
            {currentPage === 'contact' && <ContactPage />}
            {currentPage === 'privacy' && (
              <LegalPage initialTab="privacy" onNavigate={handleNavigate} />
            )}
            {currentPage === 'terms' && (
              <LegalPage initialTab="terms" onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenEnroll={handleOpenEnroll} />

      {/* Floating 24/7 WhatsApp Widget */}
      <WhatsAppWidget />

      {/* WhatsApp 3-Day Free Trial Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        initialCourseId={enrollCourseId}
      />
    </div>
  );
}
