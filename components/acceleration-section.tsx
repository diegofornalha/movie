"use client"

import { useState, useEffect } from "react"

export function AccelerationSection() {
  const [activeTrack, setActiveTrack] = useState<'technical' | 'management'>('technical')
  
  const levels = [
    { name: "Novato", challenge: "DESAFIO 1", icon: "", color: "from-navy-400 to-navy-500" },
    { name: "Aprendiz", challenge: "DESAFIO 2", icon: "", color: "from-navy-500 to-navy-600" },
    { name: "Mago", challenge: "MISSÃO 3", icon: "", color: "from-navy-600 to-navy-700" },
    { name: "Mito", challenge: "DESAFIO 4", icon: "", color: "from-navy-700 to-navy-800" },
    { name: "Lenda", challenge: "DESAFIO 5", icon: "", color: "from-navy-800 to-navy-900" }
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

  // Auto-rotate between tracks every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrack((prevTrack) => prevTrack === 'technical' ? 'management' : 'technical')
    }, 3000) // 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-navy-500 font-semibold mb-2">• PROGRAMA DE ACELERAÇÃO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Aprenda tudo o que precisa para<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-navy-800">
              criar e gerenciar funcionários IA
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            Com o nosso Programa de Aceleração, você terá acesso a conteúdos exclusivos das trilhas 
            técnicas e de gestão, desenvolvidos para te guiar do básico ao avançado na criação e 
            administração de Funcionários de IA.
          </p>
          <p className="text-navy-500 font-semibold mt-4 text-lg">
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
              <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-sm rounded-xl p-4 border border-navy-700/30 hover:border-navy-600/50 transition-all shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{level.icon}</span>
                  <div>
                    <h4 className="text-slate-200 font-semibold">{level.name}</h4>
                    <p className={`text-sm bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                      {level.challenge}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connection line */}
              {index < levels.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-navy-600/20 to-navy-800/10"></div>
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
                : 'bg-dark-800/50 backdrop-blur-sm text-slate-500 border border-navy-700/30 hover:text-slate-200'
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
                : 'bg-dark-800/50 backdrop-blur-sm text-slate-500 border border-navy-700/30 hover:text-slate-200'
              }
            `}
          >
            Trilha de Gestão
          </button>
        </div>

        {/* Track content */}
        <div className="bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm rounded-2xl p-8 border border-navy-700/30 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-6">
            {tracks[activeTrack].name}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {tracks[activeTrack].modules.map((module, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-navy-900/30 transition-colors group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-navy-700 to-navy-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="https://wa.me/5521936182339?text=Quero%20Agentes%20Integrados" target="_blank" rel="noopener noreferrer" className="relative inline-block px-8 py-4 bg-gradient-to-r from-navy-700 to-navy-900 text-white rounded-full font-semibold transform transition-all hover:scale-105 shadow-lg hover:shadow-navy-700/30 overflow-hidden group hover:from-navy-600 hover:to-navy-800">
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
            
            <span className="relative z-10">Desbloquear Programa →</span>
          </a>
        </div>
      </div>
    </section>
  )
}
