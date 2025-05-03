import React from 'react';
import { Bot, Database, LineChart } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Database size={32} className="text-primary-500" />,
      title: 'Automated Review Collection',
      description: 'Our advanced web scraping engine automatically gathers reviews from Google, Zomato, Swiggy, and other platforms.',
    },
    {
      icon: <Bot size={32} className="text-secondary-500" />,
      title: 'AI-Powered Analysis',
      description: 'Caviar, our smart assistant, analyzes the data to identify trends, sentiment patterns, and actionable insights.',
    },
    {
      icon: <LineChart size={32} className="text-accent-500" />,
      title: 'Strategic Recommendations',
      description: 'Get personalized suggestions to improve your restaurant operations and boost customer satisfaction.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
            How RateIT Works
          </h2>
          <p className="text-lg text-surface-600">
            A simple three-step process that transforms scattered customer feedback into a competitive advantage for your restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-surface-200 -translate-x-full transform translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-surface-50 border-2 border-surface-200 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-surface-800 mb-3">{step.title}</h3>
                <p className="text-surface-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;