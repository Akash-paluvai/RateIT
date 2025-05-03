import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-surface-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
            Get in Touch With Us
          </h1>
          <p className="text-lg text-surface-600">
            Have questions about RateIT? Our team is here to help you transform your restaurant business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;