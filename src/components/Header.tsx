import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, ChevronDown } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BankForm } from "@/components/BankForm";
import opulentLogo from "@/assets/opulentLogo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Bank",
    path: "/bank",
    dropdown: {
      sections: [
        {
          title: "Collateral",
          links: [
            { label: "Banking Stationary", path: "/shop-gifts/for-her" },
            { label: "Printed Marketing", path: "/shop-gifts/for-her" },
            { label: "Operational Materials", path: "/shop-gifts/for-her" },
          ],
        },
      ],
      featured: ["NEED CHEQUES", "REPRINT", "LETTERHEAD"],
    },
  },
  { label: "Corporate", path: "/corporate" },
  {
    label: "Shop Gifts",
    path: "/shop-gifts",
    dropdown: {
      sections: [
        {
          title: "By Recipient",
          links: [
            { label: "For Her", path: "/shop-gifts/for-her" },
            { label: "For Him", path: "/shop-gifts/for-him" },
            { label: "For Couples", path: "/shop-gifts/for-couples" },
            { label: "Bridesmaid", path: "/shop-gifts/bridesmaid" },
            { label: "Stationery Lover", path: "/shop-gifts/stationery-lover" },
          ],
        },
        {
          title: "By Occasion",
          links: [
            { label: "Wedding", path: "/shop-gifts/wedding" },
            { label: "Festive", path: "/shop-gifts/festive" },
            { label: "Corporate", path: "/shop-gifts/corporate" },
            { label: "Housewarming", path: "/shop-gifts/housewarming" },
            { label: "Thank You", path: "/shop-gifts/thank-you" },
          ],
        },
        {
          title: "By Price",
          links: [
            { label: "INR 0 – 3000", path: "/shop-gifts/0-3000" },
            { label: "INR 3000 – 6000", path: "/shop-gifts/3000-6000" },
            { label: "INR 6000 & above", path: "/shop-gifts/6000-above" },
          ],
        },
      ],
    },
  },
  {
    label: "Projects",
    path: "/projects",
    dropdown: {
      sections: [
        {
          title: "Projects",
          links: [{ label: "Johnnie Walker Standee", path: "/projects" }],
        },
      ],
    },
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Our Story", path: "/our-story" },
  { label: "Contact", path: "/contact" },
];

// Mobile menu items (flat list)
const mobileLinks = [
  { label: "Home", path: "/" },
  { label: "Bank Collateral", path: "/bank-collateral" },
  { label: "Bank Stationary", path: "/bank-collateral" },
  { label: "Johnnie Walker Standee", path: "/projects" },
  { label: "Shop Gifts", path: "/shop-gifts" },
  { label: "Corporate", path: "/corporate" },
  { label: "Promotional Merchandise", path: "/shop-gifts/wedding" },
  { label: "Festive Gifts", path: "/shop-gifts/festive" },
  { label: "Submit Enquiry", path: "/shop-gifts/stationery-lover" },
  { label: "Custom Gifts", path: "/shop-gifts/0-3000" },
  { label: "Our Story", path: "/shop-gifts/3000-6000" },
  { label: "Customer Service", path: "/shop-gifts/6000-above" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBankFormOpen, setIsBankFormOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileSection = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 sm:h-[160px]">
        {/* Announcement bar */}
        <div className="flex justify-center text-[10px] sm:text-[16px] w-full text-black bg-gray-100 px-4 py-3 text-center leading-tight">
          Online Luxury Corporate Gifting Brand | Order for deliveries in India &amp; abroad +910000000
        </div>

        {/* ── MOBILE HEADER BAR (< lg) ── */}
        <div className="flex items-center justify-between px-5 py-7 lg:hidden">
          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-black p-1 -ml-1"
            aria-label="Open menu"
          >
            <Menu className="w-12 h-12" />
          </button>

          {/* Logo – centered */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={opulentLogo} alt="Opulent" className="h-[90px] object-contain" />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-black">
              <Search className="w-10 h-10" />
            </button>
            <button aria-label="Cart" className="text-black relative">
              <ShoppingBag className="w-10 h-10" />
            </button>
          </div>
        </div>

        {/* ── DESKTOP HEADER (lg+) ── */}
        <div className="hidden lg:block container mx-auto px-4">
          {/* Logo row */}
          <div className="flex items-center justify-center py-3">
            <Link to="/">
              <img src={opulentLogo} alt="Opulent" className="h-14 object-contain" />
            </Link>
          </div>

          {/* Actions row (search + cart) */}
          <div className="absolute top-10 right-6 flex items-center gap-3">
            <button className="text-black hover:opacity-70 transition-opacity">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-black hover:opacity-70 transition-opacity text-xs uppercase tracking-wide font-medium">
              Cart
            </button>
          </div>

          {/* Nav row */}
          <nav className="flex items-center justify-center gap-6 xl:gap-8 pb-3 font-navbar">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`uppercase text-xs xl:text-sm tracking-wide transition-colors flex items-center gap-0.5 ${
                      isActive(item.path) ? "font-semibold text-black" : "text-black hover:font-semibold"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180 duration-200" />
                  </Link>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50 min-w-[400px]">
                    <div className={`grid gap-8 p-8 ${item.dropdown.sections.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
                      {item.dropdown.sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-xs font-semibold mb-4 text-black uppercase tracking-widest">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.path}
                                  className="text-sm text-gray-500 hover:text-black transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.dropdown.featured && (
                        <div>
                          <h4 className="text-xs font-semibold mb-4 text-black uppercase tracking-widest">
                            Featured
                          </h4>
                          <div className="space-y-2">
                            {item.dropdown.featured.map((f) => (
                              <button
                                key={f}
                                onClick={() => setIsBankFormOpen(true)}
                                className="w-full bg-white border border-gray-200 text-black px-5 py-2 text-xs font-semibold tracking-wider hover:bg-gray-50 transition-colors"
                              >
                                {f}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`uppercase text-xs xl:text-sm tracking-wide transition-colors ${
                    isActive(item.path) ? "font-semibold text-black" : "text-black hover:font-semibold"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[360px] bg-[#2c2c2c] z-[70] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <img src={opulentLogo} alt="Opulent" className="h-14 object-contain brightness-0 invert" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-2">
          {mobileLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center px-6 py-[18px] text-sm font-medium tracking-widest uppercase border-b border-white/10 transition-colors ${
                isActive(link.path) ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-white/70 text-sm">
              <span>INR</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {/* Twitter/X */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Form Modal */}
      <Dialog open={isBankFormOpen} onOpenChange={setIsBankFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <BankForm />
        </DialogContent>
      </Dialog>
    </>
  );
};