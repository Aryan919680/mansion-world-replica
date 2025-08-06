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
      <div className="absolute inset-0 top-[157px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div> */}
      </div>

      {/* Content */}
      {/* <div className="relative z-30 flex flex-col items-center justify-center text-center text-white min-h-screen px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Opulent</h1>
        <p className="text-lg sm:text-2xl mb-6">
          Tailored Corporate & Luxury Gifting Solutions
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold shadow hover:bg-gray-100">
            Shop Now
          </button>
          <button className="bg-transparent border border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-black">
            View All
          </button>
        </div>
      </div> */}
    </section>
  );
};
