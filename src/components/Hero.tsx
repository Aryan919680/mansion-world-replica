import React, { useState, useEffect } from "react";
import img1 from "@/assets/3.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/1.png";
import img4 from "@/assets/m1.png";
import img5 from "@/assets/m2.png";

const images = [img1, img2, img3];
const mobileImages = [img4, img5];

export const Hero = () => {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Desktop image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  // Mobile image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop / Large screen images */}
      <div className="hidden lg:block relative w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full h-auto max-h-[100vh] object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === desktopIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 absolute top-0 left-0"
            }`}
          />
        ))}
      </div>

      {/* Mobile / Tablet images */}
      <div className="block lg:hidden relative w-full">
        {mobileImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full h-auto max-h-[100vh] object-contain transition-opacity duration-[2000ms] ease-in-out ${
              index === mobileIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 absolute top-0 left-0"
            }`}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="absolute bottom-6 right-6 z-30">
        <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};
