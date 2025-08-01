"use client"

export function PricingSection() {
  const plans = [
    {
      name: "WhatsApp Starter",
      price: "R$97",
      period: "/mês",
      description: "Perfeito para começar",
      features: ["1 Funcionário IA", "Evolution Bot", "Chatwoot", "Typebot", "OpenAI", "Suporte básico"],
      cta: "Teste 7 dias grátis →",
      gradient: "from-navy-700 to-navy-900",
      popular: false,
    },
    {
      name: "WhatsApp+Agentes Pro",
      price: "R$197",
      period: "/mês",
      description: "Escalar ficou fácil",
      features: [
        "Funcionários de IA ilimitados",
        "Criação e gerenciamento fácil",
        "Comunidade exclusiva",
        "Evolution+N8N",
        "Disparador de mensagens",
        "Escalar ficou fácil",
      ],
      cta: "Teste 7 dias grátis →",
      gradient: "from-navy-700 to-navy-900",
      popular: true,
    },
    {
      name: "Multicanal Enterprise",
      price: "R$297",
      period: "/mês",
      description: "Para quem já é grande",
      features: [
        "Funcionários IA ilimitados",
        "Gerenciamento avançado",
        "Todos os canais integrados",
        "Chatwoot premium",
        "Suporte prioritário",
        "Consultoria especializada",
      ],
      cta: "Teste 7 dias grátis →",
      gradient: "from-navy-600 to-navy-800",
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-navy-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-navy-500 font-semibold mb-2">• PLANOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Funcionários IA a partir de R$97/mês
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Mais barato que isso você não encontra
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "md:scale-105" : ""
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

              <div
                className={`
                relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm rounded-2xl p-8 h-full border transition-all duration-300
                ${
                  plan.popular
                    ? "border-navy-600/50 shadow-2xl shadow-navy-600/20"
                    : "border-navy-700/30 hover:border-navy-600/50"
                }
              `}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span
                      className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-slate-500 ml-1 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-navy-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-400 text-sm">
                          {feature}
                          {feature.includes("NOVIDADE") && (
                            <span className="ml-2 text-xs bg-navy-600/20 text-navy-400 px-2 py-1 rounded">NEW</span>
                          )}
                          {feature.includes("EXCLUSIVO") && (
                            <span className="ml-2 text-xs bg-navy-700/20 text-navy-500 px-2 py-1 rounded">
                              EXCLUSIVE
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/5521936182339?text=Quero%20Agentes%20Integrados"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                    relative block text-center w-full py-4 rounded-full font-semibold transition-all duration-300 overflow-hidden group
                    ${
                      plan.popular
                        ? "bg-gradient-to-r from-navy-700 to-navy-900 text-white hover:from-navy-600 hover:to-navy-800 transform hover:scale-105 shadow-lg hover:shadow-navy-700/30"
                        : "bg-dark-800/50 backdrop-blur-sm text-white border border-navy-700/30 hover:border-navy-600/50 hover:bg-dark-700/50"
                    }
                  `}
                  >
                    {/* Static border */}
                    <div
                      className={`absolute inset-0 border rounded-full ${plan.popular ? "border-navy-600/30" : "border-navy-700/20"}`}
                    ></div>

                    {/* Animated neon border effect */}
                    <div className="absolute inset-0">
                      <div
                        className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent to-transparent animate-border-slide-horizontal ${plan.popular ? "via-navy-500" : "via-slate-500"}`}
                      ></div>
                      <div
                        className={`absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-transparent animate-border-slide-vertical-delayed ${plan.popular ? "via-navy-500" : "via-slate-500"}`}
                      ></div>
                      <div
                        className={`absolute bottom-0 right-0 h-[2px] w-full bg-gradient-to-l from-transparent to-transparent animate-border-slide-horizontal-reverse ${plan.popular ? "via-navy-500" : "via-slate-500"}`}
                      ></div>
                      <div
                        className={`absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-transparent animate-border-slide-vertical-reverse-delayed ${plan.popular ? "via-navy-500" : "via-slate-500"}`}
                      ></div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`absolute inset-0 blur-xl rounded-full ${plan.popular ? "bg-navy-600/20" : "bg-slate-600/10"}`}
                      ></div>
                    </div>

                    <span className="relative z-10">{plan.cta}</span>
                  </a>
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
