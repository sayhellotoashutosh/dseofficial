'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    collected: false
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(t('chatbotWelcome'));
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const processBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerMessage = userMessage.toLowerCase();
      
      // Lead collection flow
      if (!leadData.name) {
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
          addBotMessage("Hello! I'd love to help you with your tailoring needs. May I have your name?");
        } else {
          addBotMessage("Thank you for reaching out! To better assist you, may I have your name?");
        }
      } else if (!leadData.phone) {
        setLeadData(prev => ({ ...prev, name: userMessage }));
        addBotMessage(`Nice to meet you, ${userMessage}! Could you please share your phone number?`);
      } else if (!leadData.email) {
        setLeadData(prev => ({ ...prev, phone: userMessage }));
        addBotMessage("Great! What's your email address?");
      } else if (!leadData.service) {
        setLeadData(prev => ({ ...prev, email: userMessage }));
        addBotMessage("Perfect! Which service are you interested in? We offer:\n• Designer Blouses\n• Salwar Suits\n• Lehengas\n• Anarkali Dresses\n• Patiala Suits\n• And more!");
      } else if (!leadData.collected) {
        setLeadData(prev => ({ ...prev, service: userMessage, collected: true }));
        
        // Send lead data via email
        const leadInfo = {
          ...leadData,
          service: userMessage
        };
        
        sendLeadEmail(leadInfo);
        
        addBotMessage(`Thank you ${leadData.name}! I've collected your information:\n\n📱 Phone: ${leadData.phone}\n📧 Email: ${leadData.email}\n👗 Service: ${userMessage}\n\nOur team will contact you within 24 hours to discuss your requirements. Is there anything else you'd like to know about our services?`);
      } else {
        // Handle general queries after lead collection
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
          addBotMessage("Our pricing varies based on design complexity and fabric choice. For accurate pricing, please visit our store or call us at +91 9953110726. We offer competitive rates with premium quality!");
        } else if (lowerMessage.includes('time') || lowerMessage.includes('delivery')) {
          addBotMessage("Typically, our turnaround time is 5-7 days for regular garments and 10-15 days for heavily embellished pieces. Rush orders can be accommodated with prior notice.");
        } else if (lowerMessage.includes('address') || lowerMessage.includes('location')) {
          addBotMessage("Visit us at: B-55-56, Ganpati Apartment, Sri Chand Park Matiala, Uttam Nagar, New Delhi 110059. We're open Mon-Fri 10AM-8PM, Saturday 10AM-6PM.");
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('bye')) {
          addBotMessage("You're welcome! Thank you for choosing DSE Official Boutique. We look forward to creating beautiful outfits for you! 🌟");
        } else {
          addBotMessage("I'm here to help with any questions about our tailoring services, pricing, delivery times, or location. What would you like to know?");
        }
      }
    }, 1000);
  };

  const sendLeadEmail = (leadInfo: any) => {
    const emailBody = `
      New Lead from DSE Boutique Chatbot:
      
      Name: ${leadInfo.name}
      Phone: ${leadInfo.phone}
      Email: ${leadInfo.email}
      Service Interest: ${leadInfo.service}
      Date: ${new Date().toLocaleString()}
      
      Please follow up with this lead within 24 hours.
    `;

    // Create mailto link
    const mailtoLink = `mailto:ds0147513@gmail.com?subject=New Chatbot Lead - ${leadInfo.name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open in new window to avoid navigation
    window.open(mailtoLink, '_blank');
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      processBotResponse(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chat-header d-flex justify-content-between align-items-center">
            <span>{t('chatbotTitle')}</span>
            <button 
              className="btn btn-sm text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input-container">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder={t('typeMessage')}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="btn bg-primary-red text-white"
                onClick={handleSendMessage}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;