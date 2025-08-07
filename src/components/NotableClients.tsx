const NotableClients = () => {
  const clients = [
    { name: "Bajaj", logo: "/lovable-uploads/633dfb40-35ca-4d4e-b483-3c4f8fc3b439.png" },
    { name: "Webiosis Systems", logo: "/lovable-uploads/ea8deb61-64fe-4739-aac4-7f14b258bcb5.png" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-border max-w-32"></div>
          <h2 className="px-8 text-lg md:text-xl font-heading tracking-widest text-foreground">
            NOTABLE CLIENTS
          </h2>
          <div className="flex-1 h-px bg-border max-w-32"></div>
        </div>

        {/* Client Logos Grid */}
        <div className="flex justify-center gap-16">
          {clients.map((client, clientIndex) => (
            <div 
              key={clientIndex}
              className="flex flex-col items-center justify-center p-4 h-24 w-full max-w-40 group hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain mb-2 opacity-60 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-xs text-muted-foreground text-center font-medium tracking-wide">
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