"use client"

import { useState } from "react"

export function AccelerationSection() {
  const [activeTrack, setActiveTrack] = useState<'technical' | 'management'>('technical')
  
  const levels = [
    { name: "Novato", challenge: "DESAFIO 1", icon: "", color: "from-green-400 to-green-600" },
    { name: "Aprendiz", challenge: "DESAFIO 2", icon: "", color: "from-blue-400 to-blue-600" },
    { name: "Mago", challenge: "MISSÃO 3", icon: "", color: "from-purple-400 to-purple-600" },
    { name: "Mito", challenge: "DESAFIO 4", icon: "", color: "from-orange-400 to-orange-600" },
    { name: "Lenda", challenge: "DESAFIO 5", icon: "", color: "from-yellow-400 to-yellow-600" }
  ]

  const tracks = {
    technical: {
      name: "Trilha Técnica",
      modules: [
        "Fundamentos",
        "Criar Funcionário de IA: Suporte N1",
        "Criar Funcionário de IA: SDR AI",
        "Impactos do Prompt Engineering",
        "Entendendo a lógica do Dynamic Prompt",
        "Entendendo a busca por vetor",
        "Otimizações de query e cérebro",
        "Motor de decisão (supervisor)",
        "Alucinação, RAG e finalização"
      ]
    },
    management: {
      name: "Trilha de Gestão",
      modules: [
        "Definindo seu Nicho",
        "Estratégia de Vendas de Agentes de IA",
        "Gateway Offer (Oferta de Entrada)",
        "Projeções de Faturamento",
        "Planilha de CRM",
        "Métricas do seu Funil de Aquisição",
        "Formas de Aquisição de Clientes",
        "Como Prospectar sua Rede de Contatos",
        "Prospeção no Google Maps/Google Meu"
      ]
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-2">• PROGRAMA DE ACELERAÇÃO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aprenda tudo o que precisa para<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              criar e gerenciar funcionários IA
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Com o nosso Programa de Aceleração, você terá acesso a conteúdos exclusivos das trilhas 
            técnicas e de gestão, desenvolvidos para te guiar do básico ao avançado na criação e 
            administração de Funcionários de IA.
          </p>
          <p className="text-green-400 font-semibold mt-4 text-lg">
100% gratuito para clientes
          </p>
        </div>

        {/* Progress levels */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {levels.map((level, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-dark-700 rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{level.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold">{level.name}</h4>
                    <p className={`text-sm bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                      {level.challenge}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connection line */}
              {index < levels.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/20 to-white/10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Track selector */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTrack('technical')}
            className={`
              px-6 py-3 rounded-full font-semibold transition-all
              ${activeTrack === 'technical'
                ? 'bg-gradient-to-r from-navy-700 to-navy-900 text-white shadow-lg'
                : 'bg-dark-700 text-gray-400 border border-white/10 hover:text-white'
              }
            `}
          >
            Trilha Técnica
          </button>
          <button
            onClick={() => setActiveTrack('management')}
            className={`
              px-6 py-3 rounded-full font-semibold transition-all
              ${activeTrack === 'management'
                ? 'bg-gradient-to-r from-navy-700 to-navy-900 text-white shadow-lg'
                : 'bg-dark-700 text-gray-400 border border-white/10 hover:text-white'
              }
            `}
          >
            Trilha de Gestão
          </button>
        </div>

        {/* Track content */}
        <div className="bg-dark-700 rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            {tracks[activeTrack].name}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tracks[activeTrack].modules.map((module, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-600 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold transform transition-all hover:scale-105">
            Desbloquear Programa →
          </button>
        </div>
      </div>
    </section>
  )
}