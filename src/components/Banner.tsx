import image from "@/assets/image.png";

export const Banner = () => {
  return (
    <section>
      <div
        className="w-full h-[600px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlayed box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[300px] w-[200px] bg-[#dcd7d2] text-black p-4 rounded shadow-lg text-center flex items-center justify-center">
            <p >
              Welcome to Opulent — where luxury meets purpose. Discover premium gifts that make lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
