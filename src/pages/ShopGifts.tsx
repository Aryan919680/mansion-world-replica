import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Filter } from "lucide-react";

const ShopGifts = () => {
  const categories = [
    "Diwali Gifts", "Corporate Gifts", "Wedding Gifts", "Birthday Gifts", 
    "Anniversary Gifts", "Luxury Hampers", "Custom Gifts"
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Golden Elegance Hamper",
      price: "₹2,499",
      originalPrice: "₹3,299",
      image: "/placeholder.svg",
      rating: 4.8,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Royal Diwali Collection",
      price: "₹1,899",
      originalPrice: "₹2,499",
      image: "/placeholder.svg",
      rating: 4.9,
      badge: "Limited Edition"
    },
    {
      id: 3,
      name: "Premium Dry Fruits Box",
      price: "₹1,299",
      originalPrice: "₹1,699",
      image: "/placeholder.svg",
      rating: 4.7,
      badge: "New"
    },
    {
      id: 4,
      name: "Artisan Sweets Collection",
      price: "₹999",
      originalPrice: "₹1,299",
      image: "/placeholder.svg",
      rating: 4.6,
      badge: "Popular"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-cream to-cream/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-royal-blue mb-4">
              Shop Premium Gifts
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of luxury gifts, perfect for every occasion and celebration
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-foreground">Categories</h2>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="px-4 py-2 text-sm cursor-pointer hover:bg-royal-blue hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-royal-blue">
                      {product.badge}
                    </Badge>
                    <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 line-clamp-2">{product.name}</CardTitle>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-muted-foreground">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-royal-blue">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button className="w-full mt-3" variant="outline">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopGifts;