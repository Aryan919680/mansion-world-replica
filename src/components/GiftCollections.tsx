import { Button } from "@/components/ui/button";
import  image1  from "@/assets/gift1.jpg";
import image2 from "@/assets/Gift2.jpg";
import image3 from "@/assets/Gift3.jpg";
import image4 from "@/assets/Gift4.jpg";
import image5 from "@/assets/gift5.jpg";
const GiftCollections = () => {
  const collections = [
    {
      title: "LUXURY GIFTS",
      image: `${image2}`,
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "GIFT FOR CORPORATE",
      image: `${image1}`,
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "PROMOTIONAL MERCHANDISE",
      image: `${image3}`,
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "GIFTS FOR FESTIVAL",
      image: `${image4}`,
      buttonText: "VIEW COLLECTION"
    },
    {
      title: "ECO-FRIENDLY GIFTING",
      image: `${image5}`,
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