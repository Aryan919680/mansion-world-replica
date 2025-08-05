import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-mansion.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Mansion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-text mb-6">
            Discover Your
            <br />
            Dream Mansion
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Exclusive luxury properties in the world's most prestigious locations. 
            Where elegance meets excellence in every detail.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="btn-luxury">
              <Search className="w-5 h-5 mr-2" />
              Explore Properties
            </Button>
            <Button className="btn-outline-luxury">
              Schedule Viewing
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Home className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground">Luxury Properties</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">25+</span>
              </div>
              <p className="text-muted-foreground">Prime Locations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">$2B+</span>
              </div>
              <p className="text-muted-foreground">Portfolio Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};