import { Button } from "@/components/ui/button";

const CustomGiftDesign = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/51fd2846-c4dc-4757-b040-1aa3a411c87f.png" 
              alt="Custom Gift Design - Traditional Arabic coffee set with decorative books"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
              CUSTOM GIFT DESIGN
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Need to place a custom gift order for a wedding, festive or corporate event? We create those thoughtful and special gifts and make gifting easy for you. Custom gifts that will help your event or business stand out from the crowd.
            </p>
            
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wider"
            >
              LEARN MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CustomGiftDesign };