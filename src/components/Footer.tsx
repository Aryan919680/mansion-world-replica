import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-secondary-foreground py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto px-5 sm:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl lg:text-2xl font-heading mb-4">
              Opulent
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed mb-4">
              We are a brand that celebrates people and moments through
              thoughtful gifts that have a unique story to tell. Shop ready to
              ship luxury festive gifts for your friends &amp; family or luxury
              corporate high end gifts for your clients through one of the best
              gifting sites in India.
            </p>
            <p className="text-xs sm:text-sm mb-5 font-medium">
              We offer PAN India Gift Delivery
            </p>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services + Products + Customer Service */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">

            {/* Services */}
            <div>
              <h2 className="text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                Services
              </h2>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  "Instore Displays & POSM",
                  "Banking Stationary",
                  "Banking Collaterals",
                  "Marketing Services",
                ].map((item) => (
                  <li key={item}>
                    <p className="text-[11px] sm:text-xs lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                Products
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
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
                    <p className="text-[11px] sm:text-xs lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h2 className="text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                Customer Service
              </h2>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Refund Policy",
                  "Blog",
                  "Shipping Policy",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <p className="text-[11px] sm:text-xs lg:text-sm leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-[11px] sm:text-xs lg:text-sm text-secondary-foreground/80 text-center sm:text-left">
              © 2025 Opulent. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-5 gap-y-1 text-[11px] sm:text-xs lg:text-sm">
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
