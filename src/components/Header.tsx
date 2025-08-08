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
        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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
            <Search className="w-4 h-4 md:w-5 md:h-5" />
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
                         <button
                           onClick={() => setIsBankFormOpen(true)}
                           className="hover:text-primary transition-colors text-left"
                         >
                           Banking Stationary
                         </button>
                      </li>
                      <li>
                         <button
                           onClick={() => setIsBankFormOpen(true)}
                           className="hover:text-primary transition-colors text-left"
                         >
                           ⁠Printed Marketing
                         </button>
                      </li>
                      <li>
                         <button
                           onClick={() => setIsBankFormOpen(true)}
                           className="hover:text-primary transition-colors text-left"
                        >
                          Operational Materials
                         </button>
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
           
            <Link
              to="/projects"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/projects")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Projects
            </Link>
            
            <Link
              to="/gallery"
              className={`uppercase text-xs lg:text-sm tracking-wide transition-colors ${
                isActive("/gallery")
                  ? "text-black font-semibold"
                  : "text-black hover:font-semibold hover:text-black"
              }`}
            >
              Our Story
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
          <div className=" mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            
                  <Link
                to="/bank"
              className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/bank")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Bank
              </Link>
                  <Link
              to="/corporate"
               className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/corporate")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
              Corporate
            </Link>
            
              <Link
                to="/shop-gifts"
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/shop-gifts")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Gifts
              </Link>

                <Link
                to="/projects"
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/projects")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/gallery"
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/our-story")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`transition-colors uppercase text-sm tracking-wide ${
                  isActive("/contact")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
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
