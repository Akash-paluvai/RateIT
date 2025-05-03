import React from 'react';
import { BarChart3, PieChart, Users, Bot } from 'lucide-react';
import Card from '../ui/Card';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 size={28} className="text-primary-500" />,
      title: 'Feedback & Ratings Dashboard',
      description: 'Aggregate and visualize customer feedback from multiple platforms in one comprehensive dashboard.',
    },
    {
      icon: <Bot size={28} className="text-secondary-500" />,
      title: 'Caviar: Your Smart AI Analyst',
      description: 'Our AI assistant analyzes sentiments, highlights trends, and provides actionable recommendations.',
    },
    {
      icon: <Users size={28} className="text-accent-500" />,
      title: 'Nearby Competitor Insights',
      description: 'Track how your restaurant compares to nearby establishments and stay ahead of market trends.',
    },
    {
      icon: <PieChart size={28} className="text-brown-500" />,
      title: 'Real-time Review Analysis',
      description: 'Get instant notifications about new reviews and automated sentiment analysis to stay informed.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
            Everything You Need to Elevate Your Restaurant
          </h2>
          <p className="text-lg text-surface-600">
            RateIT combines powerful analytics, AI insights, and competitor tracking to help you make data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:border-primary-500 transition-all duration-300 h-full" 
              border 
              hover
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-white shadow-soft">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-surface-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-surface-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;