import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Beverly Hills Mansion",
    location: "Beverly Hills, CA",
    price: "$15,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    beds: 8,
    baths: 12,
    sqft: "12,000",
    featured: true,
    status: "For Sale"
  },
  {
    id: 2,
    title: "Malibu Ocean View Estate",
    location: "Malibu, CA",
    price: "$22,800,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    beds: 6,
    baths: 8,
    sqft: "8,500",
    featured: true,
    status: "For Sale"
  },
  {
    id: 3,
    title: "Manhattan Penthouse",
    location: "New York, NY",
    price: "$35,000,000",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    beds: 5,
    baths: 7,
    sqft: "6,800",
    featured: false,
    status: "Sold"
  },
  {
    id: 4,
    title: "Hamptons Waterfront Villa",
    location: "The Hamptons, NY",
    price: "$18,200,000",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
    beds: 7,
    baths: 9,
    sqft: "10,200",
    featured: true,
    status: "For Sale"
  }
];

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the world's most extraordinary mansions and estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="card-luxury group overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  <Badge 
                    variant={property.status === "For Sale" ? "default" : "secondary"}
                    className={property.status === "For Sale" ? "bg-success text-success-foreground" : ""}
                  >
                    {property.status}
                  </Badge>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">{property.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 py-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 btn-luxury">
                    View Details
                  </Button>
                  <Button variant="outline" className="btn-outline-luxury">
                    Schedule Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-outline-luxury">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};