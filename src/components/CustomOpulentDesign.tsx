import { Button } from "@/components/ui/button";
import image from "@/assets/CustomDesign2.jpg"
const CustomOpulentDesign = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img 
              src={image} 
              alt="Custom Gift Design - Traditional Arabic coffee set with decorative books"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-[18px] md:text-[20px] font-heading tracking-wide">
             OPULENT’S BANKING COLLATERALS & STATIONERY
            </h2>
            
            <p className="leading-relaxed">
Secure, custom-branded cheque leaves, passbooks, letterheads, and forms—crafted to meet RBI and 
international standards with tamper-resistant substrates and precision print. Rapid, end-to-end production
 (including eco-friendly options) ensures your bank’s collateral reflects trust, compliance, and premium quality. 
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

export { CustomOpulentDesign };