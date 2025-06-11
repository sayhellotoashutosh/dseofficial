'use client';

import React from 'react';
import { Scissors, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { 
      key: 'blouse', 
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Scissors
    },
    { 
      key: 'designerBlouse', 
      image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Sparkles
    },
    { 
      key: 'salwarSuit', 
      image: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Star
    },
    { 
      key: 'designerSalwarSuit', 
      image: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Sparkles
    },
    { 
      key: 'patialaSuit', 
      image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Scissors
    },
    { 
      key: 'pantSuit', 
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Star
    },
    { 
      key: 'lehenga', 
      image: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Sparkles
    },
    { 
      key: 'anarkaliDress', 
      image: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Star
    },
    { 
      key: 'sareeFallPico', 
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Scissors
    },
    { 
      key: 'lehengaCholi', 
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Sparkles
    },
    { 
      key: 'otherDresses', 
      image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      icon: Star
    }
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold text-primary-red mb-4">{t('servicesTitle')}</h2>
            <p className="lead text-muted">{t('servicesSubtitle')}</p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card service-card h-100 border-0 shadow-sm">
                  <div className="position-relative gallery-item">
                    <img 
                      src={service.image} 
                      alt={t(service.key)} 
                      className="card-img-top"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <div className="bg-primary-red text-white rounded-circle p-2">
                        <IconComponent size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold text-primary-red">{t(service.key)}</h5>
                    <p className="card-text text-muted">
                      Expert craftsmanship with attention to detail and perfect fit guaranteed.
                    </p>
                    <button className="btn btn-outline-danger fw-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;