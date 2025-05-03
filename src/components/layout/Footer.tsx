import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat size={28} className="text-primary-500" />
              <span className="text-xl font-heading font-semibold">RateIT</span>
            </div>
            <p className="text-surface-300 mb-4 max-w-md">
              An AI-powered platform helping restaurant owners monitor and analyze customer feedback to enhance their business performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface-300 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-surface-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-surface-300 hover:text-primary-500 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-surface-300 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-surface-300 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-surface-300 hover:text-primary-500 transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-surface-300">
                123 Analytics Drive
              </li>
              <li className="text-surface-300">
                Restaurant District, CA 94103
              </li>
              <li className="text-surface-300">
                contact@rateit.com
              </li>
              <li className="text-surface-300">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-700 mt-8 pt-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-surface-400 text-sm">
              &copy; {new Date().getFullYear()} RateIT. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-surface-400 text-sm hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-surface-400 text-sm hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;