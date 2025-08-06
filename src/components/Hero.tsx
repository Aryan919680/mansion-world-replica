import React, { useState, useEffect } from "react";
import img1 from "@/assets/3.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/1.png"; // You can replace this with your 3rd image

const images = [img1, img2, img3];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Image stack */}
      <div className="absolute inset-0 top-[120px] md:top-[157px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-end justify-end min-h-screen px-4 md:px-8 pb-8 md:pb-16">
        <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold shadow hover:bg-gray-100 transition-colors text-sm md:text-base">
          VIEW ALL
        </button>
      </div>
    </section>
  );
};
