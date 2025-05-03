import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const showTransparentNav = isHomePage && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${showTransparentNav 
          ? 'bg-transparent text-white' 
          : 'bg-white text-surface-800 shadow-sm'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat 
              size={28} 
              className={`${showTransparentNav ? 'text-white' : 'text-primary-500'}`} 
            />
            <span className="text-xl font-heading font-semibold">RateIT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`
                font-medium hover:text-primary-500 transition-colors
                ${location.pathname === '/' ? 'text-primary-500' : ''}
              `}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`
                font-medium hover:text-primary-500 transition-colors
                ${location.pathname.includes('/dashboard') ? 'text-primary-500' : ''}
              `}
            >
              Dashboard
            </Link>
            <Link 
              to="/contact" 
              className={`
                font-medium hover:text-primary-500 transition-colors
                ${location.pathname === '/contact' ? 'text-primary-500' : ''}
              `}
            >
              Contact
            </Link>
            <Link to="/dashboard">
              <Button>
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-surface-800 border-t border-surface-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className={`
                block py-2 font-medium hover:text-primary-500 transition-colors
                ${location.pathname === '/' ? 'text-primary-500' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`
                block py-2 font-medium hover:text-primary-500 transition-colors
                ${location.pathname.includes('/dashboard') ? 'text-primary-500' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/contact" 
              className={`
                block py-2 font-medium hover:text-primary-500 transition-colors
                ${location.pathname === '/contact' ? 'text-primary-500' : ''}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
              <Button fullWidth>
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;