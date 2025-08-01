"use client"

export function PricingSection() {
  const plans = [
    {
      name: "WhatsApp",
      price: "R$97",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Evolution Bot",
        "Chatwoot",
        "Typebot",
        "OpenAI",
        "Dify",
        "Flowise"
      ],
      cta: "Teste 7 dias grátis →",
      gradient: "from-dark-700 to-dark-900",
      popular: false
    },
    {
      name: "WhatsApp+Agentes",
      price: "R$197",
      period: "/mês",
      description: "Mais popular",
      features: [
        "Funcionários de IA ilimitados",
        "Criação de fluxos ilimitados",
        "Comunidade",
        "Evolution+N8N",
        "Disparador de mensagens",
        "NOVIDADE!"
      ],
      cta: "Teste 7 dias grátis →",
      gradient: "from-navy-700 to-navy-900",
      popular: true
    },
    {
      name: "Multicanal",
      price: "R$297",
      period: "/mês",
      description: "Para grandes equipes",
      features: [
        "Funcionários de IA ilimitados",
        "Comunidade",
        "Chatwoot",
        "Disparador de mensagens",
        "Suporte contratação adicional",
        "EXCLUSIVO!"
      ],
      cta: "Teste 7 dias grátis →",
      gradient: "from-navy-600 to-navy-800",
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-navy-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-navy-500 font-semibold mb-2">• PLANOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Contrate o melhor funcionário da sua<br />
            empresa por menos que um estagiário
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'md:scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-navy-600 to-navy-800 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              <div className={`
                relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm rounded-2xl p-8 h-full border transition-all duration-300
                ${plan.popular 
                  ? 'border-navy-600/50 shadow-2xl shadow-navy-600/20' 
                  : 'border-navy-700/30 hover:border-navy-600/50'
                }
              `}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-500 ml-1">{plan.period}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-navy-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-400 text-sm">
                          {feature}
                          {feature.includes("NOVIDADE") && (
                            <span className="ml-2 text-xs bg-navy-600/20 text-navy-400 px-2 py-1 rounded">NEW</span>
                          )}
                          {feature.includes("EXCLUSIVO") && (
                            <span className="ml-2 text-xs bg-navy-700/20 text-navy-500 px-2 py-1 rounded">EXCLUSIVE</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className={`
                    w-full py-4 rounded-full font-semibold transition-all duration-300 
                    ${plan.popular
                      ? 'bg-gradient-to-r from-navy-700 to-navy-900 text-white hover:from-navy-600 hover:to-navy-800 transform hover:scale-105 shadow-lg hover:shadow-navy-700/30'
                      : 'bg-dark-800/50 backdrop-blur-sm text-white border border-navy-700/30 hover:border-navy-600/50 hover:bg-dark-700/50'
                    }
                  `}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-slate-500">Teste gratuito</p>
          <p className="text-slate-500">Cancele quando quiser</p>
          <p className="text-navy-500 font-semibold">Agora é a hora agora é o melhor momento</p>
        </div>
      </div>
    </section>
  )
}