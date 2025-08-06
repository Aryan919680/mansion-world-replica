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
      <div className="container mx-auto px-2 py-2">
        <div>

       
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center">
            <img src={opulentLogo} className='h-[60px]'/>
          </Link>

 </div>
<div className="hidden lg:flex justify-end space-x-4">
            <button className=" hover:font-semibold hover:text-black text-black ">
              <Search className="w-5 h-5" />
            </button>
            <button className=" hover:font-semibold hover:text-black text-black ">
              <span className="text-sm uppercase tracking-wide">Cart</span>
            </button>
          </div>
 </div>

          {/* Desktop Navigation */}
            <div className="flex items-center justify-center">
      <nav className="hidden md:flex items-center space-x-8 font-navbar">
  <Link 
    to="/" 
    className={`uppercase text-sm tracking-wide transition-colors ${
      isActive('/') ? 'text-black font-semibold' : 'text-black hover:font-semibold hover:text-black'
    }`}
  >
    Home
  </Link>
<div className="relative group">
    <Link 
      to="/shop-gifts" 
      className={`uppercase text-sm tracking-wide transition-colors ${
        isActive('/shop-gifts') ? 'text-black font-semibold' : 'text-black hover:font-semibold hover:text-black'
      }`}
    >
      Shop Gifts
    </Link>

    {/* Dropdown content */}
    <div className="absolute top-full w-64  mt-2 bg-white shadow-lg rounded-md p-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      <h4 className="text-sm font-semibold mb-2">Popular Categories</h4>
      <ul className="space-y-1 text-sm text-gray-700">
        <li><Link to="/shop-gifts/diwali" className="hover:text-black">Diwali Hampers</Link></li>
        <li><Link to="/shop-gifts/wedding" className="hover:text-black">Wedding Gifts</Link></li>
        <li><Link to="/shop-gifts/corporate" className="hover:text-black">Corporate Gifts</Link></li>
        <li><Link to="/shop-gifts/for-her" className="hover:text-black">For Her</Link></li>
        <li><Link to="/shop-gifts/for-him" className="hover:text-black">For Him</Link></li>
      </ul>
    </div>
  </div>
  <Link 
    to="/our-story" 
    className={`uppercase text-sm tracking-wide transition-colors ${
      isActive('/our-story') ? 'text-black font-semibold' : 'text-black hover:font-semibold hover:text-black'
    }`}
  >
    Our Story
  </Link>
  <Link 
    to="/contact" 
    className={`uppercase text-sm tracking-wide transition-colors ${
      isActive('/contact') ? 'text-black font-semibold' : 'text-black hover:font-semibold hover:text-black'
    }`}
  >
    Contact
  </Link>
</nav>

</div>
          {/* Search & Cart */}
          

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
       

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