import { Button } from "@/components/ui/button";

const GiftCollections = () => {
  const collections = [
    {
      title: "GIFTS FOR SPECIAL OCCASIONS",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "GIFTS CORPORATE",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "GIFTS FOR HER",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=600&h=400&fit=crop",
      buttonText: "VIEW COLLECTION"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative h-[500px] bg-cover bg-center group overflow-hidden"
              style={{ backgroundImage: `url(${collection.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 tracking-wide">
                  {collection.title}
                </h3>
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wider"
                >
                  {collection.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { GiftCollections };