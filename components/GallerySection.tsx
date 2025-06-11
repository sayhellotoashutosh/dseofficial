'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Designer Blouse Collection',
      category: 'Blouses'
    },
    {
      src: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Traditional Salwar Suit',
      category: 'Salwar Suits'
    },
    {
      src: 'https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Elegant Lehenga',
      category: 'Lehengas'
    },
    {
      src: 'https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Anarkali Dress',
      category: 'Anarkali'
    },
    {
      src: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Patiala Suit',
      category: 'Patiala'
    },
    {
      src: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Designer Wear',
      category: 'Designer'
    },
    {
      src: 'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Bridal Lehenga',
      category: 'Bridal'
    },
    {
      src: 'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Party Wear',
      category: 'Party Wear'
    },
    {
      src: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
      alt: 'Saree Styling',
      category: 'Sarees'
    }
  ];

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold text-primary-red mb-4">{t('galleryTitle')}</h2>
            <p className="lead text-muted">{t('gallerySubtitle')}</p>
          </div>
        </div>
        
        <div className="row g-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="gallery-item position-relative overflow-hidden rounded-3 shadow">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="img-fluid w-100 cursor-pointer"
                  style={{ height: '350px', objectFit: 'cover' }}
                  onClick={() => setSelectedImage(image.src)}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-gradient-to-top from-black/70 to-transparent p-3">
                  <h6 className="text-white fw-bold mb-1">{image.alt}</h6>
                  <span className="badge bg-primary-yellow text-dark">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="modal show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-transparent border-0">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;