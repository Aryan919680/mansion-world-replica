import image from "@/assets/image.png";

export const Banner = () => {
  return (
    <section>
      <div
        className="w-full h-[350px] sm:h-[450px] lg:h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-auto w-[200px] sm:w-[220px] lg:w-[200px] bg-[#dcd7d2] text-black p-4 sm:p-5 rounded shadow-lg text-center flex items-center justify-center">
            <p className="text-xs sm:text-sm lg:text-[13px] leading-relaxed">
              Welcome to Opulent — where luxury meets purpose. Discover premium gifts that make lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
