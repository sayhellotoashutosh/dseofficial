'use client';

import React from 'react';
import { Star, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section hero-gradient py-5 mt-5">
      <div className="container py-5">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-white">
            <h1 className="display-4 fw-bold mb-4">{t('heroTitle')}</h1>
            <h2 className="h4 mb-4 opacity-90">{t('heroSubtitle')}</h2>
            <p className="lead mb-5 opacity-85">
              {t('heroDescription')}
            </p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <button 
                className="btn btn-light btn-lg px-4 py-3 fw-semibold"
                onClick={() => scrollToSection('contact')}
              >
                {t('getQuote')}
              </button>
              <button 
                className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold"
                onClick={() => scrollToSection('services')}
              >
                {t('ourServices')}
              </button>
            </div>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="d-flex align-items-center text-white">
                  <Star className="me-2" size={20} />
                  <div>
                    <div className="fw-bold">15+ Years</div>
                    <small className="opacity-75">Experience</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center text-white">
                  <Users className="me-2" size={20} />
                  <div>
                    <div className="fw-bold">1000+</div>
                    <small className="opacity-75">Happy Clients</small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center text-white">
                  <Award className="me-2" size={20} />
                  <div>
                    <div className="fw-bold">Premium</div>
                    <small className="opacity-75">Quality</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="row g-3">
              <div className="col-6">
                <img 
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                  alt="Designer Blouse" 
                  className="img-fluid rounded-3 shadow-lg hover-scale"
                />
              </div>
              <div className="col-6 mt-4">
                <img 
                  src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop" 
                  alt="Traditional Wear" 
                  className="img-fluid rounded-3 shadow-lg hover-scale"
                />
              </div>
              <div className="col-6 mt-n4">
                <img 
                  src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                  alt="Lehenga Design" 
                  className="img-fluid rounded-3 shadow-lg hover-scale"
                />
              </div>
              <div className="col-6">
                <img 
                  src="https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop" 
                  alt="Elegant Dress" 
                  className="img-fluid rounded-3 shadow-lg hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;