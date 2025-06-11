'use client';

import React from 'react';
import { Award, Clock, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      titleKey: 'expertCraftsmanship',
      description: 'Years of experience in traditional and modern tailoring techniques'
    },
    {
      icon: Heart,
      titleKey: 'personalizedService',
      description: 'Every garment is crafted with personal attention and care'
    },
    {
      icon: Users,
      titleKey: 'qualityMaterials',
      description: 'Only the finest fabrics and materials for lasting quality'
    },
    {
      icon: Clock,
      titleKey: 'timelyDelivery',
      description: 'Reliable delivery schedules that respect your timeline'
    }
  ];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row g-3">
              <div className="col-6">
                <img 
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" 
                  alt="Boutique Interior" 
                  className="img-fluid rounded-3 shadow hover-scale"
                />
              </div>
              <div className="col-6 mt-4">
                <img 
                  src="https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop" 
                  alt="Tailoring Process" 
                  className="img-fluid rounded-3 shadow hover-scale"
                />
              </div>
              <div className="col-12 mt-n4">
                <img 
                  src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop" 
                  alt="Finished Garments" 
                  className="img-fluid rounded-3 shadow hover-scale"
                />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-primary-red mb-4">{t('aboutTitle')}</h2>
            <p className="lead text-muted mb-4">
              {t('aboutDescription')}
            </p>
            
            <h4 className="fw-bold text-primary-red mb-4">{t('whyChooseUs')}</h4>
            
            <div className="row g-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="bg-light-yellow rounded-3 p-3 me-3">
                        <IconComponent className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-2">{t(feature.titleKey)}</h6>
                        <p className="text-muted small mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="row g-4 mt-4 pt-4 border-top">
              <div className="col-4 text-center">
                <h4 className="fw-bold text-primary-red">15+</h4>
                <p className="text-muted small mb-0">Years Experience</p>
              </div>
              <div className="col-4 text-center">
                <h4 className="fw-bold text-primary-red">1000+</h4>
                <p className="text-muted small mb-0">Happy Clients</p>
              </div>
              <div className="col-4 text-center">
                <h4 className="fw-bold text-primary-red">100%</h4>
                <p className="text-muted small mb-0">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;