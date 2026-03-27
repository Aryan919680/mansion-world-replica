import image from "@/assets/image.png";

export const Banner = () => {
  return (
    <section>
      <div
        className="w-full h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="lg:h-[300px] lg:w-[200px] sm:w-[300px] sm:h-[300px] bg-[#dcd7d2] text-black p-4 rounded shadow-lg text-center flex items-center justify-center">
            <p className="lg:text-[13px] sm:text-[25px] leading-relaxed">
              Welcome to Opulent — where luxury meets purpose. Discover premium gifts that make lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
