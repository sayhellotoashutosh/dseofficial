'use client';

import React from 'react';
import { Phone, Mail, MapPin, Scissors, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <Scissors className="text-primary-yellow me-2" size={24} />
              <h5 className="fw-bold mb-0">DSE Official Boutique</h5>
            </div>
            <p className="text-muted mb-4">
              {t('footerDescription')}
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-primary-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-yellow">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-yellow">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2">
            <h6 className="fw-bold text-primary-yellow mb-3">{t('quickLinks')}</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button 
                  className="btn btn-link text-primary-yellow text-decoration-none p-0"
                  onClick={() => scrollToSection('home')}
                >
                  {t('home')}
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-primary-yellow text-decoration-none p-0"
                  onClick={() => scrollToSection('services')}
                >
                  {t('services')}
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-primary-yellow text-decoration-none p-0"
                  onClick={() => scrollToSection('gallery')}
                >
                  {t('gallery')}
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-primary-yellow text-decoration-none p-0"
                  onClick={() => scrollToSection('about')}
                >
                  {t('about')}
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="btn btn-link text-primary-yellow text-decoration-none p-0"
                  onClick={() => scrollToSection('contact')}
                >
                  {t('contact')}
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-bold text-primary-yellow mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-primary-yellow small">{t('designerBlouse')}</span>
              </li>
              <li className="mb-2">
                <span className="text-primary-yellow small">{t('salwarSuit')}</span>
              </li>
              <li className="mb-2">
                <span className="text-primary-yellow small">{t('lehenga')}</span>
              </li>
              <li className="mb-2">
                <span className="text-primary-yellow small">{t('anarkaliDress')}</span>
              </li>
              <li className="mb-2">
                <span className="text-primary-yellow small">{t('otherDresses')}</span>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h6 className="fw-bold text-primary-yellow mb-3">{t('contactInfo')}</h6>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="text-primary-yellow me-2" />
                <span className="text-primary-yellow">+91 9953110726</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Mail size={16} className="text-primary-yellow me-2" />
                <span className="text-primary-yellow">ds0147513@gmail.com</span>
              </div>
              <div className="d-flex align-items-start">
                <MapPin size={16} className="text-primary-yellow me-2 mt-1" />
                <span className="text-primary-yellow small">
                  B-55-56, Ganpati Apartment,<br />
                  Sri Chand Park Matiala,<br />
                  Uttam Nagar, New Delhi 110059
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-primary-yellow small mb-0">
              © 2025 DSE Official Boutique. {t('allRightsReserved')}
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-primary-yellow small mb-0">
              Crafted with ❤️ for beautiful fashion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;