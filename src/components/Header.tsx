import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Search } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-serif font-bold text-foreground tracking-wider">
              THE MANSION
            </span>
            <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase">
              House of Gifting
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#gifts" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Shop Gifts</a>
            <a href="#diwali" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Diwali</a>
            <a href="#special" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Special Prices</a>
            <a href="#custom" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Custom Gifting</a>
            <a href="#story" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Our Story</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Contact</a>
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
              <a href="#gifts" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Shop Gifts</a>
              <a href="#diwali" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Diwali</a>
              <a href="#special" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Special Prices</a>
              <a href="#custom" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Custom Gifting</a>
              <a href="#story" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Our Story</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors uppercase text-sm tracking-wide">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};