import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { PortfolioProvider } from './data/PortfolioContext';
import ProjectDetailPage from './components/ProjectDetailPage';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('portfolio-theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    }
    return true;
  });

  const [inquirySubject, setInquirySubject] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const handleSelectForInquiry = (projectTitle: string) => {
    setInquirySubject(projectTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const PortfolioPage = () => (
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#FFF9F5] text-zinc-900 transition-colors duration-200 dark:bg-[#111215] dark:text-zinc-100">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><AboutSkills /><ProjectsSection onSelectForInquiry={handleSelectForInquiry} /><TestimonialsSection /><ContactSection prefilledSubject={inquirySubject} /></>} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </MotionConfig>
  );

  return (
  <PortfolioProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  </PortfolioProvider>
  );
}
