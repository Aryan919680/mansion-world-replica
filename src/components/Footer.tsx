import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              
              <h2>
                Opulent
              </h2>
            </div>
            <p className="mb-4 leading-relaxed">
   We are a brand that celebrates people and moments through thoughtful gifts that have a unique story to tell. 
   Shop ready to ship luxury festive gifts for your friends & family or luxury corporate corporate high end gifts 
   for your clients through one of the best gifting sites in India. Also build customized corporate or personal gift
    for your special event through our custom & bespoke design service.
 </p>
<p className="mb-2">
We offer PAN India Gift Delivery
</p>

           
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6">Services</h2>
            <ul className="space-y-3">
              <li><p>Instore Displays & POSM</p></li>
              <li><p>Banking Stationary</p></li>
              <li><p>Banking Collaterals</p></li>
              <li><p>Marketing Services</p></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6">Products</h3>
            <ul className="space-y-3">
               <li><p>Corporate Gifting</p></li>
              <li><p>Luxury Gifting</p></li>
              <li><p>Festive Gifting</p></li>
              <li><p>Promotional Merchandise</p></li>
              <li><p>Eco-Friendly Gifting</p></li>
              <li><p>Digital Gifting</p></li>
              <li><p>Food & Beverage Gifting</p></li>
              <li><p>Custom Kits</p></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6">Customer Service</h2>
            <div className="space-y-3">
             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/80 text-sm mb-4 md:mb-0">
              © 2025 Opulent. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};