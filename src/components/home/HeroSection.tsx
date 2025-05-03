import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEgMSAyLjEgMi4yczEgMi4yIDIuMiAyLjIgMi4yLTEgMi4yLTIuMmMwLTEuMi0xLTIuMi0yLjItMi4ycy0yLjItMS0yLjItMi4xIDEtMi4yIDIuMi0yLjJjMS4yIDAgMi4yIDEgMi4yIDIuMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjIiLz48cGF0aCBkPSJNMzYgNDJjMS4yIDAgMi4xIDEgMi4xIDIuMnMxIDIuMSAyLjIgMi4xIDIuMi0xIDIuMi0yLjFjMC0xLjItMS0yLjItMi4yLTIuMnMtMi4yLTEtMi4yLTIuMiAxLTIuMiAyLjItMi4yczIuMiAxIDIuMiAyLjIiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjMwIiByPSIyIi8+PHBhdGggZD0iTTAgMThDMS4yIDE4IDIuMSAxOSAyLjEgMjAuMnMxIDIuMiAyLjIgMi4yIDIuMi0xIDIuMi0yLjJDNi41IDE5IDUuNSAxOCA0LjMgMThTMi4xIDE3IDIuMSAxNnMxLTIuMiAyLjItMi4yYzEuMiAwIDIuMiAxIDIuMiAyLjIiLz48cGF0aCBkPSJNMCA0MkMxLjIgNDIgMi4xIDQzIDIuMSA0NC4yczEgMi4xIDIuMiAyLjEgMi4yLTEgMi4yLTIuMWMwLTEuMi0xLTIuMi0yLjItMi4ycy0yLjItMS0yLjItMi4yIDEtMi4yIDIuMi0yLjJjMS4yIDAgMi4yIDEgMi4yIDIuMiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
            Transform Customer Feedback into 
            <span className="text-accent-400"> Growth Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-10 max-w-2xl mx-auto">
            RateIT helps restaurant owners monitor, analyze, and act on customer feedback through AI-powered insights, all in one intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/dashboard">
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Get Started
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="relative shadow-2xl rounded-xl overflow-hidden border-4 border-white/20 animate-slide-up">
            <img 
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="RateIT Dashboard" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;