import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              
              <h2 className="text-2xl font-serif font-bold">
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
            <h3 className="text-lg font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#properties" className="text-secondary-foreground/80 hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Property Sales</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Property Management</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Legal Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-secondary-foreground/80">
                123 Luxury Avenue<br />
                Beverly Hills, CA 90210
              </p>
              <p className="text-secondary-foreground/80">
                Phone: +1 (555) 123-4567
              </p>
              <p className="text-secondary-foreground/80">
                Email: contact@mansionworld.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Mansion World. All rights reserved.
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