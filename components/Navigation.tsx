'use client';

import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold text-primary-red" href="#">
          <Scissors className="me-2" size={24} />
          DSE Official Boutique
        </a>
        
        <div className="d-flex align-items-center">
          <button
            className="language-switcher me-3"
            onClick={toggleLanguage}
          >
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
          
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link fw-semibold" onClick={() => scrollToSection('home')}>
                {t('home')}
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link fw-semibold" onClick={() => scrollToSection('services')}>
                {t('services')}
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link fw-semibold" onClick={() => scrollToSection('gallery')}>
                {t('gallery')}
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link fw-semibold" onClick={() => scrollToSection('about')}>
                {t('about')}
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link fw-semibold" onClick={() => scrollToSection('contact')}>
                {t('contact')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;