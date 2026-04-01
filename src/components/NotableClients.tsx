const NotableClients = () => {
  const clients = [
    { name: "Bajaj", logo: "/lovable-uploads/633dfb40-35ca-4d4e-b483-3c4f8fc3b439.png" },
    { name: "Webiosis Systems", logo: "/lovable-uploads/ea8deb61-64fe-4739-aac4-7f14b258bcb5.png" },
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center mb-10 sm:mb-12">
          <div className="flex-1 h-px bg-border max-w-[60px] sm:max-w-32"></div>
          <h2 className="px-4 sm:px-8 text-sm sm:text-[30px] lg:text-[30px] font-heading tracking-widest text-foreground text-center">
            NOTABLE CLIENTS
          </h2>
          <div className="flex-1 h-px bg-border max-w-[60px] sm:max-w-32"></div>
        </div>

        {/* Client Logos */}
        <div className="flex justify-center items-center gap-8 sm:gap-16 lg:gap-24 flex-wrap">
          {clients.map((client, clientIndex) => (
            <div
              key={clientIndex}
              className="flex flex-col items-center justify-center p-4 sm:p-6
                         h-24 w-32 sm:h-32 sm:w-44 lg:max-w-52
                         group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-14 sm:h-18 lg:h-20 w-auto object-contain mb-2 sm:mb-3
                           opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-[10px] sm:text-[25px] text-muted-foreground text-center font-medium tracking-wide">
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