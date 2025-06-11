'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    gallery: 'Gallery',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'DSE Official Boutique',
    heroSubtitle: 'Premium Ladies Tailoring & Designer Wear',
    heroDescription: 'Experience exquisite craftsmanship and personalized service for all your fashion needs. From traditional to contemporary designs, we bring your vision to life.',
    getQuote: 'Get Quote',
    ourServices: 'Our Services',
    
    // Services
    servicesTitle: 'Our Premium Services',
    servicesSubtitle: 'Expert tailoring and design services for the modern woman',
    blouse: 'Blouse',
    designerBlouse: 'Designer Blouse',
    salwarSuit: 'Salwar Suit (Plain)',
    designerSalwarSuit: 'Designer Salwar Suit',
    patialaSuit: 'Patiala Suit',
    pantSuit: 'Pant Suit',
    lehenga: 'Lehenga',
    anarkaliDress: 'Anarkali Dress',
    sareeFallPico: 'Saree Fall Pico',
    lehengaCholi: 'Lehenga Choli',
    otherDresses: 'Other Women\'s Dresses',
    
    // About
    aboutTitle: 'About DSE Official Boutique',
    aboutDescription: 'With years of experience in the fashion industry, DSE Official Boutique has been serving the women of Delhi with premium tailoring services and designer wear. Our skilled artisans combine traditional techniques with contemporary designs to create stunning outfits that reflect your personal style.',
    whyChooseUs: 'Why Choose Us?',
    expertCraftsmanship: 'Expert Craftsmanship',
    personalizedService: 'Personalized Service',
    qualityMaterials: 'Quality Materials',
    timelyDelivery: 'Timely Delivery',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to create your perfect outfit? Contact us today!',
    phone: 'Phone',
    address: 'Address',
    email: 'Email',
    businessHours: 'Business Hours',
    monFri: 'Mon - Fri: 10:00 AM - 8:00 PM',
    saturday: 'Saturday: 10:00 AM - 6:00 PM',
    sunday: 'Sunday: Closed',
    
    // Contact Form
    contactFormTitle: 'Send us a Message',
    fullName: 'Full Name',
    emailAddress: 'Email Address',
    phoneNumber: 'Phone Number',
    serviceInterested: 'Service Interested In',
    selectService: 'Select a Service',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Gallery
    galleryTitle: 'Our Work Gallery',
    gallerySubtitle: 'Explore our collection of beautiful designs and craftsmanship',
    
    // Chatbot
    chatbotTitle: 'DSE Boutique Assistant',
    chatbotWelcome: 'Hello! I\'m here to help you with your tailoring needs. How can I assist you today?',
    typeMessage: 'Type your message...',
    send: 'Send',
    
    // Footer
    footerDescription: 'DSE Official Boutique - Your trusted partner for premium ladies tailoring and designer wear in New Delhi.',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.'
  },
  hi: {
    // Navigation
    home: 'होम',
    services: 'सेवाएं',
    gallery: 'गैलरी',
    about: 'हमारे बारे में',
    contact: 'संपर्क',
    
    // Hero Section
    heroTitle: 'डीएसई ऑफिशियल बुटीक',
    heroSubtitle: 'प्रीमियम महिला दर्जी और डिजाइनर वेयर',
    heroDescription: 'आपकी सभी फैशन आवश्यकताओं के लिए उत्कृष्ट शिल्प कौशल और व्यक्तिगत सेवा का अनुभव करें। पारंपरिक से समकालीन डिजाइन तक, हम आपके सपनों को साकार करते हैं।',
    getQuote: 'कोटेशन पाएं',
    ourServices: 'हमारी सेवाएं',
    
    // Services
    servicesTitle: 'हमारी प्रीमियम सेवाएं',
    servicesSubtitle: 'आधुनिक महिला के लिए विशेषज्ञ दर्जी और डिजाइन सेवाएं',
    blouse: 'ब्लाउज',
    designerBlouse: 'डिजाइनर ब्लाउज',
    salwarSuit: 'सलवार सूट (सादा)',
    designerSalwarSuit: 'डिजाइनर सलवार सूट',
    patialaSuit: 'पटियाला सूट',
    pantSuit: 'पैंट सूट',
    lehenga: 'लहंगा',
    anarkaliDress: 'अनारकली ड्रेस',
    sareeFallPico: 'साड़ी फॉल पिको',
    lehengaCholi: 'लहंगा चोली',
    otherDresses: 'अन्य महिलाओं के कपड़े',
    
    // About
    aboutTitle: 'डीएसई ऑफिशियल बुटीक के बारे में',
    aboutDescription: 'फैशन उद्योग में वर्षों के अनुभव के साथ, डीएसई ऑफिशियल बुटीक दिल्ली की महिलाओं को प्रीमियम दर्जी सेवाएं और डिजाइनर वेयर प्रदान कर रहा है। हमारे कुशल कारीगर पारंपरिक तकनीकों को समकालीन डिजाइन के साथ मिलाकर आश्चर्यजनक पोशाकें बनाते हैं।',
    whyChooseUs: 'हमें क्यों चुनें?',
    expertCraftsmanship: 'विशेषज्ञ शिल्प कौशल',
    personalizedService: 'व्यक्तिगत सेवा',
    qualityMaterials: 'गुणवत्तापूर्ण सामग्री',
    timelyDelivery: 'समय पर डिलीवरी',
    
    // Contact
    contactTitle: 'संपर्क में रहें',
    contactSubtitle: 'अपना परफेक्ट आउटफिट बनाने के लिए तैयार हैं? आज ही संपर्क करें!',
    phone: 'फोन',
    address: 'पता',
    email: 'ईमेल',
    businessHours: 'व्यावसायिक घंटे',
    monFri: 'सोम - शुक्र: 10:00 AM - 8:00 PM',
    saturday: 'शनिवार: 10:00 AM - 6:00 PM',
    sunday: 'रविवार: बंद',
    
    // Contact Form
    contactFormTitle: 'हमें संदेश भेजें',
    fullName: 'पूरा नाम',
    emailAddress: 'ईमेल पता',
    phoneNumber: 'फोन नंबर',
    serviceInterested: 'जिस सेवा में रुचि है',
    selectService: 'एक सेवा चुनें',
    message: 'संदेश',
    sendMessage: 'संदेश भेजें',
    
    // Gallery
    galleryTitle: 'हमारी कार्य गैलरी',
    gallerySubtitle: 'हमारे सुंदर डिजाइन और शिल्प कौशल के संग्रह का अन्वेषण करें',
    
    // Chatbot
    chatbotTitle: 'डीएसई बुटीक सहायक',
    chatbotWelcome: 'नमस्ते! मैं आपकी दर्जी की जरूरतों में मदद करने के लिए यहां हूं। आज मैं आपकी कैसे सहायता कर सकता हूं?',
    typeMessage: 'अपना संदेश लिखें...',
    send: 'भेजें',
    
    // Footer
    footerDescription: 'डीएसई ऑफिशियल बुटीक - नई दिल्ली में प्रीमियम महिला दर्जी और डिजाइनर वेयर के लिए आपका विश्वसनीय साझीदार।',
    quickLinks: 'त्वरित लिंक',
    contactInfo: 'संपर्क जानकारी',
    followUs: 'हमें फॉलो करें',
    allRightsReserved: 'सभी अधिकार सुरक्षित।'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};