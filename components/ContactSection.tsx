'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'blouse',
    'designerBlouse',
    'salwarSuit',
    'designerSalwarSuit',
    'patialaSuit',
    'pantSuit',
    'lehenga',
    'anarkaliDress',
    'sareeFallPico',
    'lehengaCholi',
    'otherDresses'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      const emailBody = `
        New Inquiry from DSE Boutique Website:
        
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service: ${formData.service}
        Message: ${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:ds0147513@gmail.com?subject=New Boutique Inquiry from ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      alert('Thank you for your inquiry! Your email client should open now.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold text-primary-red mb-4">{t('contactTitle')}</h2>
            <p className="lead text-muted">{t('contactSubtitle')}</p>
          </div>
        </div>
        
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary-red mb-4">{t('contactFormTitle')}</h4>
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label fw-semibold">
                        {t('fullName')} *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        {t('emailAddress')} *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        {t('phoneNumber')} *
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="service" className="form-label fw-semibold">
                        {t('serviceInterested')}
                      </label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">{t('selectService')}</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {t(service)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">
                        {t('message')} *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn bg-primary-red text-white fw-semibold px-4 py-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="me-2" />
                            {t('sendMessage')}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light-yellow rounded-3 p-3 me-3">
                        <Phone className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{t('phone')}</h6>
                        <p className="text-muted mb-0">+91 9953110726</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light-yellow rounded-3 p-3 me-3">
                        <Mail className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{t('email')}</h6>
                        <p className="text-muted mb-0">ds0147513@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-light-yellow rounded-3 p-3 me-3">
                        <MapPin className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{t('address')}</h6>
                        <p className="text-muted mb-0">
                          B-55-56, Ganpati Apartment,<br />
                          Sri Chand Park Matiala,<br />
                          Uttam Nagar, New Delhi 110059
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light-yellow rounded-3 p-3 me-3">
                        <Clock className="text-primary-red" size={24} />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{t('businessHours')}</h6>
                        <p className="text-muted mb-1">{t('monFri')}</p>
                        <p className="text-muted mb-1">{t('saturday')}</p>
                        <p className="text-muted mb-0">{t('sunday')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;