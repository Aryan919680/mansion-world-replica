import React, { useState, useEffect, useCallback } from "react";
import img1 from "@/assets/heroDesktop1.jpg";
import img2 from "@/assets/heroDesktop2.jpg";
import img3 from "@/assets/heroDesktop3.jpg";
import img6 from "@/assets/heroDesktop4.jpg";
import img4 from "@/assets/heroMobile1.jpg";
import img5 from "@/assets/heroMobile2.jpg";

const desktopImages = [img1, img2, img3, img6];
const mobileImages = [img4, img5];

export const Hero = () => {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Desktop image rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Mobile image rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToDesktop = useCallback((i: number) => {
    setDesktopIndex(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  }, []);

  const goToMobile = useCallback((i: number) => {
    setMobileIndex(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">

      {/* ── DESKTOP (lg+) ── */}
      <div className="hidden lg:block relative w-full">
        {desktopImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`w-full max-h-screen object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === desktopIndex
                ? "opacity-100 z-10 relative"
                : "opacity-0 z-0 absolute inset-0"
            }`}
          />
        ))}

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-20 pointer-events-none" />

        {/* Dot indicators – desktop */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {desktopImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goToDesktop(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === desktopIndex
                  ? "bg-white w-6 h-2"
                  : "bg-white/50 w-2 h-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* View All – desktop */}
        <div className="absolute bottom-6 right-8 z-30">
          <button className="bg-white/90 backdrop-blur-sm text-black px-8 py-3 rounded font-semibold shadow-lg hover:bg-white transition-all text-sm tracking-widest uppercase">
            View All
          </button>
        </div>
      </div>

      {/* ── MOBILE / TABLET (< lg) ── */}
      <div className="block lg:hidden relative w-full">

        {/* Slides */}
        <div className="relative w-full h-[100svh] min-h-[580px]">
          {mobileImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                index === mobileIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}

          {/* Top gradient – room for status bar readability */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent z-20 pointer-events-none" />

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />

          {/* Dot indicators – mobile */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {mobileImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToMobile(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === mobileIndex
                    ? "bg-white w-5 h-1.5"
                    : "bg-white/50 w-1.5 h-1.5"
                }`}
              />
            ))}
          </div>

          {/* View All – mobile: full-width, anchored at safe bottom */}
          <div className="absolute bottom-6 left-4 right-4 z-30">
            <button className="w-full bg-white/90 backdrop-blur-sm text-black py-3.5 rounded font-semibold shadow-lg hover:bg-white active:scale-[0.98] transition-all text-sm tracking-widest uppercase">
              View All
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};