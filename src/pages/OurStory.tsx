import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Gift, Star, Users } from "lucide-react";

const OurStory = () => {
  const milestones = [
    { year: "2018", title: "The Beginning", description: "Started with a passion for creating memorable gifting experiences" },
    { year: "2020", title: "Digital Transformation", description: "Launched our online platform to reach customers nationwide" },
    { year: "2022", title: "Artisan Partnerships", description: "Collaborated with local artisans to create unique handcrafted gifts" },
    { year: "2024", title: "Premium Collections", description: "Introduced luxury gift collections for special occasions" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-royal-blue" />,
      title: "Passion for Gifting",
      description: "We believe every gift should tell a story and create lasting memories"
    },
    {
      icon: <Gift className="w-8 h-8 text-royal-blue" />,
      title: "Quality First",
      description: "Curated selection of premium products that reflect excellence"
    },
    {
      icon: <Star className="w-8 h-8 text-royal-blue" />,
      title: "Customer Delight",
      description: "Going beyond expectations to create magical gifting experiences"
    },
    {
      icon: <Users className="w-8 h-8 text-royal-blue" />,
      title: "Community Focus",
      description: "Supporting local artisans and sustainable gifting practices"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-royal-blue mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At The Mansion - House of Gifting, we believe that every gift is an opportunity to create magic, 
              forge connections, and celebrate the beautiful moments that make life extraordinary.
            </p>
            <Badge variant="secondary" className="px-6 py-2 text-sm">
              Since 2018
            </Badge>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-royal-blue mb-6">
                The Journey Begins
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, The Mansion began as a small dream to revolutionize the art of gifting. 
                  Our founders, passionate about creating meaningful connections through thoughtful presents, 
                  noticed a gap in the market for truly personalized and premium gifting experiences.
                </p>
                <p>
                  What started as a local initiative to help friends and family find the perfect gifts has 
                  grown into a trusted destination for thousands of customers across the country. We've 
                  carefully curated each product in our collection, ensuring that every item meets our 
                  high standards of quality and uniqueness.
                </p>
                <p>
                  Today, The Mansion stands as a testament to the power of passion, dedication, and the 
                  belief that the right gift can change someone's day, week, or even life.
                </p>
              </div>
            </div>
            <div className="bg-cream/50 rounded-lg p-8">
              <img 
                src="/placeholder.svg" 
                alt="Our founders" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-center text-sm text-muted-foreground italic">
                "Every gift should be as unique as the person receiving it"
              </p>
              <p className="text-center text-sm font-medium mt-2">- The Mansion Founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-royal-blue mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-royal-blue text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;