import React, { useState, useEffect } from "react";
import img1 from "@/assets/3.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/1.png";

const images = [img1, img2, img3];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Image stack */}
      <div className="relative w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full h-auto max-h-[100vh] object-contain lg:object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 absolute"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-6 right-6 z-30">
        <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-xs sm:text-sm md:text-base">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};