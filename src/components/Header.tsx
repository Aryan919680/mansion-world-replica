import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BankForm } from "@/components/BankForm";
import opulentLogo from "@/assets/opulentLogo.jpg";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBankFormOpen, setIsBankFormOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50">
      <div className="flex justify-center text-[11px] w-full text-black bg-gray-100 p-1">
        <span>
          Online Luxury Corporate Gifting Brand | Order for deliveries in India
          & abroad +910000000
        </span>
      </div>
       <div className="md:flex  lg:hidden md:container md:mx-auto md:px-4 md:py-2">
         <button onClick={toggleMenu} className="lg:hidden text-black">
        {isMenuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
      </button>
         <div className="md:flex md:items-center md:justify-end lg:hidden md:w-[500px]">
          <Link to="/" className="md:flex md:flex-col items-center">
            <img src={opulentLogo} className="h-[40px] md:h-[80px]" />
          </Link>
        
       </div>
     </div>
      <div className=" container mx-auto px-4 py-2">
        <div className="lg:flex lg:items-center lg:justify-center md:hidden">
          <Link to="/" className=" flex flex-col items-center">
            <img src={opulentLogo} className="h-[40px] md:h-[60px]" />
          </Link>
        </div>
        <div className="lg:flex lg:items-center lg:space-x-2  lg:justify-end md:hidden">
          <button className="hover:font-semibold hover:text-black text-black">
            <Search className="w-4 h-4 md:w-8 md:h-8" />
          </button>
          <button className="hover:font-semibold hover:text-black text-black">
            <span className="text-xs md:text-sm uppercase tracking-wide">
              Cart
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex lg:items-center lg:justify-center lg:mt-2 md:hidden">
          <nav className="flex items-center space-x-6 lg:space-x-8 font-navbar">
            <Link
              to="/"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Home
            </Link>

              <div className="relative group">
              <Link
                to="/bank"
                className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                  isActive("/contact")
                    ? "text-black font-semibold"
                    : "text-black hover:font-semibold hover:text-black"
                }`}
              >
                Bank
              </Link>

              {/* Full-width dropdown content */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[50vw] max-w-6xl mt-2 bg-white shadow-xl border border-border/20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  {/* By Recipient */}
                  <div>
              <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      Collateral
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                         <Link
                          to="/shop-gifts/for-her"
                          className="hover:text-primary transition-colors"
                        >
                           Banking Stationary
                         </Link>
                      </li>
                      <li>
                          <Link
                          to="/shop-gifts/for-her"
                          className="hover:text-primary transition-colors"
                        >
                           ⁠Printed Marketing
                         </Link>
                      </li>
                      <li>
                         <Link
                          to="/shop-gifts/for-her"
                          className="hover:text-primary transition-colors"
                        >
                          Operational Materials
                         </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[250px]">
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      Featured
                    </h4>
                    <div className="space-y-3">
                      <div className="w-[250px]">
                        <button 
                          onClick={() => setIsBankFormOpen(true)}
                          className="w-[250px] bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          NEED CHEQUES
                        </button>
                      </div>
                      <div className="w-[250px]">
                        <button 
                          onClick={() => setIsBankFormOpen(true)}
                          className="w-[250px] bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          REPRINT
                        </button>
                      </div>
                      <div className="w-[250px]">
                        <button 
                          onClick={() => setIsBankFormOpen(true)}
                          className="w-[250px] bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-sm md:text-base"
                        >
                          LETTERHEAD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <Link
              to="/corporate"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/contact")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Corporate
            </Link>

            <div className="relative group">
              <Link
                to="/shop-gifts"
                className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                  isActive("/shop-gifts")
                    ? "text-black font-semibold"
                    : "text-black hover:font-semibold hover:text-black"
                }`}
              >
                Shop Gifts
              </Link>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-6xl mt-2 bg-white shadow-xl border border-border/20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      By Recipient
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <Link
                          to="/shop-gifts/for-her"
                          className="hover:text-primary transition-colors"
                        >
                          For Her
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/for-him"
                          className="hover:text-primary transition-colors"
                        >
                          For Him
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/for-couples"
                          className="hover:text-primary transition-colors"
                        >
                          For Couples
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/bridesmaid"
                          className="hover:text-primary transition-colors"
                        >
                          Bridesmaid
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/stationery-lover"
                          className="hover:text-primary transition-colors"
                        >
                          Stationery Lover
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* By Occasion */}
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      By Occasion
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <Link
                          to="/shop-gifts/wedding"
                          className="hover:text-primary transition-colors"
                        >
                          Wedding
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/festive"
                          className="hover:text-primary transition-colors"
                        >
                          Festive
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/corporate"
                          className="hover:text-primary transition-colors"
                        >
                          Corporate
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/housewarming"
                          className="hover:text-primary transition-colors"
                        >
                          Housewarming
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/thank-you"
                          className="hover:text-primary transition-colors"
                        >
                          Thank You
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* By Price */}
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      By Price
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>
                        <Link
                          to="/shop-gifts/0-3000"
                          className="hover:text-primary transition-colors"
                        >
                          INR 0 - 3000
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/3000-6000"
                          className="hover:text-primary transition-colors"
                        >
                          INR 3000 - 6000
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-gifts/6000-above"
                          className="hover:text-primary transition-colors"
                        >
                          INR 6000 & above
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Featured Products */}
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide">
                      Featured
                    </h4>
                    <div className="space-y-3">
                      <div className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
                        <h5 className="text-xs font-medium text-foreground mb-1">
                          INARAA
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Rs. 5550
                        </p>
                      </div>
                      <div className="bg-secondary/30 rounded-lg p-3 hover:bg-secondary/50 transition-colors">
                        <h5 className="text-xs font-medium text-foreground mb-1">
                          The Coffee Reserve Deluxe
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          Rs. 5650
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             <div className="relative group">
            <Link
              to="/"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/projects")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Projects
            </Link>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[50vw] max-w-6xl mt-2 bg-white shadow-xl border border-border/20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  {/* By Recipient */}
                  <div>
                    <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wide ">
                      <Link to="/projects">
                          johnnie walker standee
                      </Link>
                
                    </h4>
                  </div>
                 
                </div>
              </div>
            </div>
            <Link
              to="/gallery"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/gallery")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Gallery
            </Link>

          

            <Link
              to="/our-story"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/our-story")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/contact"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/contact")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#454545] z-50">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div></div>
              <button 
                onClick={toggleMenu} 
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="px-6 py-8 space-y-6">
              <Link
                to="/"
                className="block text-white text-lg font-medium border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>

              <Link
                to="/shop-gifts"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                BANK COLLATERAL
              </Link>

              <Link
                to="/shop-gifts/diwali"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                BANK STATIONARY
              </Link>

               <Link
                to="/projects"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                JOHNNIE WALKER STANDEE
              </Link>
     <Link
                to="/shop-gifts"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP GIFTS
              </Link>
              <Link
                to="/corporate"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                CORPORATE
              </Link>

              <Link
                to="/shop-gifts/wedding"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                PROMOTIONAL MERCHANDISE
              </Link>

              <Link
                to="/shop-gifts/festive"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                FESTIVE GIFTS
              </Link>

              <Link
                to="/shop-gifts/stationery-lover"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                SUBMIT ENQUIRY
              </Link>

              <Link
                to="/shop-gifts/0-3000"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                CUSTOM GIFTS
              </Link>

              <Link
                to="/shop-gifts/3000-6000"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                OUR STORY
              </Link>

              <Link
                to="/shop-gifts/6000-above"
                className="block text-white text-lg border-b border-gray-700 pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                CUSTOMER SERVICE
              </Link>

            </nav>

            <div className="px-6 py-4 border-t border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm">INR</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.093.112.107.210.079.325-.085.359-.279 1.167-.316 1.331-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bank Form Modal */}
      <Dialog open={isBankFormOpen} onOpenChange={setIsBankFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <BankForm />
        </DialogContent>
      </Dialog>
    </header>
  );
};
