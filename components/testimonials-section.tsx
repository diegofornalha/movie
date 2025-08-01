"use client"

import { useEffect, useState } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Camila Azevedo",
      role: "Diretora de Marketing, Startup Visionária",
      avatar: "CA",
      content: "Com os Agentes Integrados, nossa qualificação de leads ficou 3x mais rápida! A automação inteligente libera minha equipe para focar em estratégias, não em tarefas manuais.",
      rating: 5
    },
    {
      name: "Rafael Moreira",
      role: "Gerente de Vendas, TecnoSoluções",
      avatar: "RM",
      content: "A integração com nosso CRM foi perfeita. Agora, os follow-ups são automáticos e personalizados, aumentando nossa taxa de conversão significativamente. Essencial!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Analista de BI, Grupo Crescer",
      avatar: "JC",
      content: "Conectar nossas planilhas e sistemas legados parecia impossível. Os agentes fizeram isso em minutos, nos dando uma visão unificada dos dados pela primeira vez.",
      rating: 5
    },
    {
      name: "Lucas Ferreira",
      role: "Líder de Automação, InovaTech",
      avatar: "LF",
      content: "A flexibilidade para criar agentes customizados sem código é incrível. Conseguimos automatizar processos complexos que antes levavam dias, agora levam horas.",
      rating: 5
    },
    {
      name: "Beatriz Almeida",
      role: "Coordenadora de Sucesso do Cliente, ClienteFeliz SA",
      avatar: "BA",
      content: "Usamos os agentes para automatizar o onboarding de novos clientes. A experiência ficou mais fluida e nosso time consegue dar atenção personalizada onde realmente importa.",
      rating: 5
    },
    {
      name: "Fernando Oliveira",
      role: "Consultor de Processos, Eficiência Máxima",
      avatar: "FO",
      content: "A plataforma Agentes Integrados simplifica a otimização de workflows. A interface é intuitiva e o poder de integração com diversas ferramentas é um grande diferencial.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="py-20 px-4 bg-dark-800 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-400 text-lg">
            Leia o que nossos clientes têm a dizer sobre sua experiência com nossos serviços.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="flex space-x-6 transition-transform duration-500">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className={`
                  flex-shrink-0 w-full md:w-1/3 transform transition-all duration-500
                  ${index === 1 ? 'scale-105 opacity-100' : 'scale-95 opacity-70'}
                `}
              >
                <div className="bg-dark-700 rounded-2xl p-6 border border-white/10 h-full">
                  {/* Avatar and info */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentIndex === index 
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="relative px-8 py-4 text-lg font-semibold text-white bg-transparent overflow-hidden group rounded-full border-2 border-white/30 hover:border-white/60 transition-all">
            <span className="relative z-10">Junte-se a centenas de empresas satisfeitas →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  )
}