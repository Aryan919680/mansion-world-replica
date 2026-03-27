import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-secondary-foreground py-14 md:py-16">
      <div className="container mx-auto px-6 md:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-12 mb-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl lg:text-2xl font-heading mb-5">
              Opulent
            </h2>
            <p className="text-sm sm:text-base lg:text-sm leading-relaxed mb-4">
              We are a brand that celebrates people and moments through
              thoughtful gifts that have a unique story to tell. Shop ready to
              ship luxury festive gifts for your friends &amp; family or luxury
              corporate high end gifts for your clients through one of the best
              gifting sites in India. Also build customized corporate or personal
              gifts for your special event through our custom &amp; bespoke
              design service.
            </p>
            <p className="text-sm sm:text-base lg:text-sm mb-6 font-medium">
              We offer PAN India Gift Delivery
            </p>

            {/* Social icons */}
            <div className="flex items-center space-x-5">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Services + Products + Customer Service — always in one row */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-4 sm:gap-8">

            {/* Services */}
            <div>
              <h2 className="text-xs sm:text-sm lg:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-5">
                Services
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Instore Displays & POSM",
                  "Banking Stationary",
                  "Banking Collaterals",
                  "Marketing Services",
                ].map((item) => (
                  <li key={item}>
                    <p className="text-xs sm:text-sm lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xs sm:text-sm lg:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-5">
                Products
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Corporate Gifting",
                  "Luxury Gifting",
                  "Festive Gifting",
                  "Promotional Merchandise",
                  "Eco-Friendly Gifting",
                  "Digital Gifting",
                  "Food & Beverage Gifting",
                  "Custom Kits",
                ].map((item) => (
                  <li key={item}>
                    <p className="text-xs sm:text-sm lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-xs sm:text-sm lg:text-sm font-semibold uppercase tracking-widest mb-4 sm:mb-5">
                Customer Service
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Refund Policy",
                  "Blog",
                  "Shipping Policy",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <p className="text-xs sm:text-sm lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base lg:text-sm text-secondary-foreground/80 text-center sm:text-left">
              © 2025 Opulent. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm sm:text-base lg:text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};