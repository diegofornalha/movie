"use client"

export function IntegrationsSection() {
  const integrations = [
    { icon: "", name: "Whatsapp", description: "Nativo via QR Code", featured: true },
    { icon: "", name: "N8N", description: "Nativo", featured: true },
    { icon: "", name: "Planilhas e CRMs", description: "Via API e N8N", featured: false },
    { icon: "", name: "Whatsapp Business", description: "Nativo via API", featured: true },
    { icon: "", name: "Wordpress (Site)", description: "Nativo", featured: false },
    { icon: "", name: "E em qualquer lugar!", description: "Via API", featured: true },
    { icon: "", name: "Instagram", description: "Via Evolution", featured: false },
    { icon: "", name: "Evolution", description: "Nativo", featured: false },
    { icon: "", name: "Google Calendar", description: "Nativo", featured: false }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(30,58,138,.08) 35px, rgba(30,58,138,.08) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-navy-500 font-semibold mb-2">• INTEGRAÇÕES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Integre seus funcionários de IA onde quiser
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            Automatize processos onde quer que seus clientes estejam. Conecte os Agentes de IA ao 
            seu site, WhatsApp, Instagram, N8N ou qualquer outro canal por meio de integração via API.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-300 hover:-translate-y-2 ${
                integration.featured ? 'md:scale-105' : ''
              }`}
            >
              <div className={`
                relative bg-gradient-to-br from-dark-800/30 to-dark-900/30 backdrop-blur-lg rounded-xl p-6 border transition-all duration-300
                ${integration.featured 
                  ? 'border-navy-600/40 shadow-lg shadow-navy-600/10' 
                  : 'border-navy-700/20 hover:border-navy-600/40'
                }
              `}>
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/10 to-black/10 rounded-xl"></div>
                {/* Icon */}
                <div className="relative z-10 text-4xl mb-4 opacity-70">{integration.icon}</div>
                
                {/* Content */}
                <h3 className="relative z-10 text-lg font-semibold text-slate-200/90 mb-1">
                  {integration.name}
                </h3>
                <p className="relative z-10 text-sm text-slate-500/80">
                  {integration.description}
                </p>
                
                {/* Featured badge */}
                {integration.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-navy-600/80 to-navy-800/80 backdrop-blur-sm text-white/90 text-xs px-3 py-1 rounded-full border border-navy-600/30">
                    Popular
                  </div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-600/10 to-navy-800/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-navy-700 to-navy-900 rounded-full overflow-hidden group transform transition-all hover:scale-105 shadow-lg hover:shadow-navy-700/30 hover:from-navy-600 hover:to-navy-800">
            {/* Static border */}
            <div className="absolute inset-0 border border-navy-600/30 rounded-full"></div>
            
            {/* Animated neon border effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-navy-500 to-transparent animate-border-slide-horizontal"></div>
              <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-navy-500 to-transparent animate-border-slide-vertical-delayed"></div>
              <div className="absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent via-navy-500 to-transparent animate-border-slide-horizontal-reverse"></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-navy-500 to-transparent animate-border-slide-vertical-reverse-delayed"></div>
            </div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-navy-600/20 blur-xl rounded-full"></div>
            </div>
            
            <span className="relative z-10">Começar agora →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  )
}