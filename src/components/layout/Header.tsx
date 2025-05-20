import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="IronRidge Financial" className="h-10 w-10" />
            <span className={`ml-2 font-serif text-xl ${isScrolled ? 'text-navy' : 'text-white'}`}>
              IronRidge
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className={`flex space-x-8 ${isScrolled ? 'text-navy' : 'text-white'}`}>
              <li className="hover:text-accent transition-colors">
                <a href="#how-it-works">How It Works</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#investments">Investments</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#faq">FAQ</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#about">About</a>
              </li>
            </ul>
            <Button 
              variant="primary"
              className="shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-navy"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <ul className="flex flex-col space-y-4 px-4">
              <li className="hover:text-accent transition-colors">
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#investments" onClick={() => setIsMenuOpen(false)}>Investments</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              </li>
              <li className="hover:text-accent transition-colors">
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              </li>
              <li>
                <Button 
                  variant="primary"
                  className="w-full"
                >
                  Book a Free Consultation
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;