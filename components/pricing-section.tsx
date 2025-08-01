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
      gradient: "from-gray-600 to-gray-800",
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
      gradient: "from-purple-600 to-blue-600",
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
      gradient: "from-blue-600 to-cyan-600",
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">• PLANOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              <div className={`
                relative bg-dark-800 rounded-2xl p-8 h-full border transition-all duration-300
                ${plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                  : 'border-white/10 hover:border-white/30'
                }
              `}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">
                          {feature}
                          {feature.includes("NOVIDADE") && (
                            <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">NEW</span>
                          )}
                          {feature.includes("EXCLUSIVO") && (
                            <span className="ml-2 text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">EXCLUSIVE</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button className={`
                    w-full py-4 rounded-full font-semibold transition-all duration-300 
                    ${plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transform hover:scale-105'
                      : 'bg-dark-700 text-white border border-white/20 hover:border-white/40 hover:bg-dark-600'
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
          <p className="text-gray-400">✓ Teste gratuito</p>
          <p className="text-gray-400">✓ Cancele quando quiser</p>
          <p className="text-purple-400 font-semibold">Agora é a hora agora é o melhor momento</p>
        </div>
      </div>
    </section>
  )
}