const NotableClients = () => {
  const clients = [
    { name: "Bajaj", logo: "/lovable-uploads/633dfb40-35ca-4d4e-b483-3c4f8fc3b439.png" },
    { name: "Webiosis Systems", logo: "/lovable-uploads/ea8deb61-64fe-4739-aac4-7f14b258bcb5.png" },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex-1 h-px bg-border max-w-[40px] sm:max-w-[80px] lg:max-w-32" />
          <h2 className="px-4 sm:px-8 text-sm sm:text-lg lg:text-[30px] font-heading tracking-widest text-foreground text-center">
            NOTABLE CLIENTS
          </h2>
          <div className="flex-1 h-px bg-border max-w-[40px] sm:max-w-[80px] lg:max-w-32" />
        </div>

        {/* Client Logos */}
        <div className="flex justify-center items-center gap-8 sm:gap-12 lg:gap-24 flex-wrap">
          {clients.map((client, clientIndex) => (
            <div
              key={clientIndex}
              className="flex flex-col items-center justify-center p-3 sm:p-5 lg:p-6
                         h-20 w-28 sm:h-28 sm:w-36 lg:h-32 lg:w-44
                         group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-10 sm:h-14 lg:h-20 w-auto object-contain mb-1.5 sm:mb-3
                           opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground text-center font-medium tracking-wide">
                {client.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { NotableClients };
