"use client"

export function IntegrationsSection() {
  const integrations = [
    { icon: "💬", name: "Whatsapp", description: "Nativo via QR Code", featured: true },
    { icon: "⚙️", name: "N8N", description: "Nativo", featured: true },
    { icon: "📊", name: "Planilhas e CRMs", description: "Via API e N8N", featured: false },
    { icon: "📱", name: "Whatsapp Business", description: "Nativo via API", featured: true },
    { icon: "🌐", name: "Wordpress (Site)", description: "Nativo", featured: false },
    { icon: "🔌", name: "E em qualquer lugar!", description: "Via API", featured: true },
    { icon: "📸", name: "Instagram", description: "Via Evolution", featured: false },
    { icon: "🤖", name: "Evolution", description: "Nativo", featured: false },
    { icon: "📅", name: "Google Calendar", description: "Nativo", featured: false }
  ]

  return (
    <section className="py-20 px-4 bg-dark-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">• INTEGRAÇÕES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Integre seus funcionários de IA onde quiser
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
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
                bg-dark-800 rounded-xl p-6 border transition-all duration-300
                ${integration.featured 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/30'
                }
              `}>
                {/* Icon */}
                <div className="text-4xl mb-4">{integration.icon}</div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {integration.description}
                </p>
                
                {/* Featured badge */}
                {integration.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden group transform transition-all hover:scale-105">
            <span className="relative z-10">Começar agora →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  )
}