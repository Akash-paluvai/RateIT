import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin size={20} className="text-primary-500" />,
      title: 'Office Address',
      details: [
        '123 Analytics Drive',
        'Restaurant District, CA 94103',
        'United States',
      ],
    },
    {
      icon: <Phone size={20} className="text-primary-500" />,
      title: 'Phone Number',
      details: [
        '+1 (555) 123-4567',
        '+1 (555) 987-6543',
      ],
    },
    {
      icon: <Mail size={20} className="text-primary-500" />,
      title: 'Email Address',
      details: [
        'contact@rateit.com',
        'support@rateit.com',
      ],
    },
    {
      icon: <Clock size={20} className="text-primary-500" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 2:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-medium p-6 md:p-8 h-full">
      <h3 className="text-xl font-semibold text-surface-800 mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex">
            <div className="mr-4 mt-1">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium text-surface-800 mb-1">
                {item.title}
              </h4>
              <div className="text-surface-600 space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-surface-800 mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-primary-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-primary-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-primary-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-100 flex items-center justify-center text-surface-600 hover:bg-primary-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;