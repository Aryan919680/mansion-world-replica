const NotableClients = () => {
  const clients = [
    // Row 1
    [
      { name: "India", logo: "🇮🇳" },
      { name: "Four Seasons", logo: "🌲" },
      { name: "The Leela", logo: "👑" },
      { name: "Chivas", logo: "🥃" },
      { name: "Jazean", logo: "🌿" },
      { name: "The White Crow", logo: "🦢" },
    ],
    // Row 2
   
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
        <div className="space-y-8">
          {clients.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            >
              {row.map((client, clientIndex) => (
                <div 
                  key={clientIndex}
                  className="flex flex-col items-center justify-center p-4 h-20 w-full max-w-32 group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    {client.logo}
                  </div>
                  <div className="text-xs text-muted-foreground text-center font-medium tracking-wide">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { NotableClients };