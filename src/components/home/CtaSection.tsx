import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Restaurant owner using tablet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Ready to Transform Your Restaurant's Customer Experience?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join hundreds of restaurant owners who are leveraging data-driven insights to improve their business. Get started with RateIT today.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/dashboard">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    icon={<ChevronRight size={20} />}
                    iconPosition="right"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;