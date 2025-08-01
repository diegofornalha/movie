"use client"

import { useState } from "react"

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('ai')
  
  const traditionalFeatures = [
    { name: "Variáveis", description: "Faça a gestão das variáveis" },
    { name: "Iniciar uma campanha", description: "Comece a conversar proativamente" },
    { name: "Responder áudios", description: "Receba e responda por áudio" },
    { name: "Recuperar Cancelamento", description: "Envie mensagem para o WhatsApp do usuário" },
    { name: "Recuperar Carrinho abandonado", description: "Envie mensagem para o WhatsApp do usuário" },
    { name: "Captar e baixar dados dos Leads", description: "Capture e baixe os dados dos seus Leads" },
    { name: "Ver histórico de conversas", description: "Veja o histórico de conversas do seu Agente" },
    { name: "Humano responder usuários", description: "Transfira a conversa para um humano" }
  ]

  const aiCapabilities = [
    {
      title: "Comunicação Personalizada",
      description: "Interage com clientes em e-mails, chats, telefone e mais.",
      icon: ""
    },
    {
      title: "Geração de Conteúdo",
      description: "Cria textos, scripts, posts, copys e descrições otimizadas.",
      icon: ""
    },
    {
      title: "Interação por Voz",
      description: "Converse por voz, entenda e responda em tempo real.",
      icon: ""
    },
    {
      title: "Identificação de Objeções",
      description: "Detecta e responde objeções durante conversas.",
      icon: ""
    },
    {
      title: "Funil de Vendas Completo",
      description: "Guia o cliente desde o interesse até o fechamento da venda.",
      icon: ""
    },
    {
      title: "Múltiplos Atendimentos",
      description: "Gerencia milhares de conversas simultaneamente.",
      icon: ""
    },
    {
      title: "Base de Conhecimento",
      description: "Aprende com seus documentos, vídeos e áudios.",
      icon: ""
    },
    {
      title: "Análise de Perfil",
      description: "Adapta a comunicação ao perfil de cada cliente.",
      icon: ""
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-800 to-navy-900">
      <div className="container mx-auto max-w-6xl">
        {/* First part - Traditional features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-navy-500 font-semibold mb-2">• HABILIDADES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Muuuuuuito mais do<br />
              que chatbots<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-600 to-navy-800">
                tradicionais
              </span>
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Funcionários de IA não são apenas chatbots. Eles respondem por áudio, gerenciam calendário, 
              recuperam carrinhos abandonados e muito mais. Tudo o que você precisa para engajar e converter mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {traditionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-sm rounded-xl p-4 border border-navy-700/30 hover:border-navy-600/50 transition-all group shadow-lg"
              >
                <h4 className="text-slate-200 font-semibold mb-1 group-hover:text-navy-400 transition-colors">
                  {feature.name}
                </h4>
                <p className="text-slate-500 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="relative px-8 py-4 bg-gradient-to-r from-navy-700 to-navy-900 text-white rounded-full font-semibold transform transition-all hover:scale-105 shadow-lg hover:shadow-navy-700/30 overflow-hidden group hover:from-navy-600 hover:to-navy-800">
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
              
              <span className="relative z-10">Teste 7 dias grátis →</span>
            </button>
          </div>
        </div>

        {/* Second part - AI Capabilities */}
        <div>
          <div className="text-center mb-12">
            <p className="text-navy-500 font-semibold mb-2">• HABILIDADES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              O que os Agentes de IA são capazes de fazer?
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Treinados para entender seu negócio e clientes, os Agentes de IA atuam de forma autônoma 
              ou como assistentes para sua equipe, impulsionando resultados e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-dark-700/80 to-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-navy-700/30 hover:border-navy-600/50 transition-all h-full shadow-lg">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-slate-500 text-sm">
                    {capability.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-600/10 to-navy-800/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}