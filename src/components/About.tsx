import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    number: "25+",
    label: "Years Experience"
  },
  {
    icon: Users,
    number: "1000+",
    label: "Happy Clients"
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries Served"
  },
  {
    icon: Star,
    number: "4.9",
    label: "Client Rating"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-serif font-bold mb-6">
              About <span className="text-primary">Mansion World</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over two decades, Mansion World has been the premier destination for luxury real estate. 
              We specialize in connecting discerning clients with extraordinary properties that define 
              sophistication and elegance.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of expert advisors understands that purchasing a luxury property is more than a 
              transaction—it's about finding a home that reflects your unique lifestyle and aspirations. 
              We pride ourselves on delivering personalized service and unparalleled expertise.
            </p>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            <Button className="btn-luxury">
              Learn More About Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="card-luxury overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" 
                alt="Luxury real estate team"
                className="w-full h-96 object-cover"
              />
            </Card>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 card-luxury bg-card/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2.5B+</div>
                  <div className="text-sm text-muted-foreground">Total Sales Volume</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};