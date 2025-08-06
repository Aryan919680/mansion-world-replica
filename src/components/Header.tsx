import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import opulentLogo from "@/assets/opulentLogo.jpg";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center">
            <img src={opulentLogo} className='h-[60px]'/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors uppercase text-sm tracking-wide ${
                isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop-gifts" 
              className={`transition-colors uppercase text-sm tracking-wide ${
                isActive('/shop-gifts') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Shop Gifts
            </Link>
            <Link 
              to="/our-story" 
              className={`transition-colors uppercase text-sm tracking-wide ${
                isActive('/our-story') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Our Story
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors uppercase text-sm tracking-wide ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              <span className="text-sm uppercase tracking-wide">Cart</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop-gifts" 
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive('/shop-gifts') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Gifts
              </Link>
              <Link 
                to="/our-story" 
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive('/our-story') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};