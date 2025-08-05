import { Card, CardContent } from "@/components/ui/card";
import { Home, Key, TrendingUp, Users, Shield, Compass } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance through every step of buying or selling your luxury property with personalized service."
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive management services to protect and maintain your investment properties."
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment guidance to maximize returns on luxury real estate portfolios."
  },
  {
    icon: Users,
    title: "Concierge Services",
    description: "White-glove concierge services to handle all aspects of your luxury lifestyle needs."
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Expert legal counsel for complex real estate transactions and property matters."
  },
  {
    icon: Compass,
    title: "Market Analysis",
    description: "In-depth market insights and valuation services for informed decision making."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive luxury real estate services tailored to meet the unique needs of discerning clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="card-luxury text-center group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};