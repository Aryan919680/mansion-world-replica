import { Button } from "@/components/ui/button";
import image1 from "@/assets/gift1.jpg";
import image2 from "@/assets/Gift2.jpg";
import image3 from "@/assets/Gift3.jpg";
import image4 from "@/assets/Gift4.jpg";
import image5 from "@/assets/gift5.jpg";

const GiftCollections = () => {
  const collections = [
    { title: "LUXURY GIFTS", image: image2, buttonText: "VIEW COLLECTION" },
    { title: "GIFT FOR CORPORATE", image: image1, buttonText: "VIEW COLLECTION" },
    { title: "PROMOTIONAL MERCHANDISE", image: image3, buttonText: "VIEW COLLECTION" },
    { title: "GIFTS FOR FESTIVAL", image: image4, buttonText: "VIEW COLLECTION" },
    { title: "ECO-FRIENDLY GIFTING", image: image5, buttonText: "VIEW COLLECTION" },
  ];

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative h-[280px] sm:h-[360px] lg:h-[500px] bg-cover bg-center group overflow-hidden rounded-lg"
              style={{ backgroundImage: `url(${collection.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 tracking-wide">
                  {collection.title}
                </h3>
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-black transition-all duration-300 px-5 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider"
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
