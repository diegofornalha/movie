"use client"

import { useState } from "react"

export function RolesSection() {
  const [activeRole, setActiveRole] = useState(0)
  
  const roles = [
    {
      title: "Suporte",
      icon: "🎧",
      features: [
        "Responde dúvidas",
        "Resolve problemas",
        "Orienta usuários",
        "Envia links e instruções"
      ],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Atendente",
      icon: "📞",
      features: [
        "Agenda reuniões",
        "Envia lembretes",
        "Coleta informações",
        "Passa para humano"
      ],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Vendedor",
      icon: "💼",
      features: [
        "Qualifica leads",
        "Faz ofertas diretas",
        "Recupera compras",
        "Fecha vendas"
      ],
      gradient: "from-green-500 to-green-700"
    },
    {
      title: "Social Media",
      icon: "📱",
      features: [
        "Responde DMs",
        "Responde comentários",
        "Gerencia todas as interações",
        "Atende em segundos"
      ],
      gradient: "from-pink-500 to-pink-700"
    }
  ]

  return (
    <section className="py-20 px-4 bg-dark-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">• FUNÇÕES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Se um já é bom, imagine um time de<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              funcionários de IA
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Conheça alguns dos cargos que os Funcionários de IA dos Agentes de IA podem ocupar:
          </p>
        </div>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => setActiveRole(index)}
              className={`
                px-6 py-3 rounded-full font-semibold transition-all duration-300
                ${activeRole === index
                  ? 'bg-gradient-to-r text-white transform scale-105 shadow-lg'
                  : 'bg-dark-700 text-gray-400 hover:text-white border border-white/10'
                }
              `}
              style={{
                backgroundImage: activeRole === index ? `linear-gradient(to right, var(--tw-gradient-stops))` : '',
                '--tw-gradient-from': activeRole === index ? role.gradient.split(' ')[1] : '',
                '--tw-gradient-to': activeRole === index ? role.gradient.split(' ')[3] : ''
              }}
            >
              <span className="mr-2">{role.icon}</span>
              {role.title}
            </button>
          ))}
        </div>

        {/* Role content */}
        <div className="relative">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 transition-all duration-500
                ${activeRole === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'}
              `}
            >
              <div className="bg-dark-700 rounded-2xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Icon and title */}
                  <div className="text-center md:text-left">
                    <div className="text-8xl mb-4">{role.icon}</div>
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                      {role.title}
                    </h3>
                  </div>
                  
                  {/* Right side - Features */}
                  <div className="space-y-4">
                    {role.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        style={{
                          animationDelay: `${featureIndex * 100}ms`
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${role.gradient} rounded-full`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer for absolute positioned content */}
          <div className="h-64"></div>
        </div>
      </div>
    </section>
  )
}