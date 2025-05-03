import React from 'react';
import { Star } from 'lucide-react';
import Card from '../ui/Card';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Owner, Urban Spice Bistro',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'RateIT completely transformed how we handle customer feedback. The AI insights helped us identify issues we never knew existed, and our satisfaction scores have improved by 27% in just three months.',
      rating: 5,
    },
    {
      name: 'David Chen',
      position: 'Manager, Fusion Kitchen',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'The competitor analysis feature is a game-changer. We were able to spot emerging trends in our area and adjust our menu accordingly. Our new items are now our top sellers!',
      rating: 5,
    },
    {
      name: 'Miguel Rodriguez',
      position: 'Owner, Taco Paradise',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Caviar AI provides insights that would take hours to uncover manually. The sentiment analysis helps us focus our training efforts where they matter most. Highly recommended!',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-900 mb-4">
            Trusted by Restaurant Owners
          </h2>
          <p className="text-lg text-surface-600">
            Discover how RateIT has helped restaurant owners elevate their business and improve customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col justify-between" shadow="medium">
              <div>
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-surface-300'} 
                    />
                  ))}
                </div>
              
                {/* Content */}
                <p className="text-surface-700 mb-6 italic">"{testimonial.content}"</p>
              </div>
              
              {/* Author */}
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-surface-800">{testimonial.name}</h4>
                  <p className="text-sm text-surface-500">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;