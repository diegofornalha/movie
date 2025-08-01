"use client"

import { useEffect, useRef, useState } from "react"

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      title: "Age como humano",
      description: "Transforme a experiência do seu cliente com um atendimento natural e humanizado, que está sempre disponível.",
      icon: "",
      gradient: "from-navy-800 to-dark-900"
    },
    {
      title: "Automatiza tarefas",
      description: "Deixe os processos repetitivos por conta do IA e libere sua equipe para focar no que realmente importa.",
      icon: "",
      gradient: "from-navy-700 to-navy-800"
    },
    {
      title: "Responde em tempo real",
      description: "Responda aos clientes com precisão e velocidade, com informações da sua empresa e produtos sempre atualizadas.",
      icon: "",
      gradient: "from-navy-600 to-navy-700"
    },
    {
      title: "Resolve problemas",
      description: "Permita que a IA decida o que fazer, resolvendo problemas sem necessidade de intervenção e aumentando a eficiência.",
      icon: "",
      gradient: "from-navy-500 to-navy-600"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-navy-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm rounded-2xl p-8 overflow-hidden border border-navy-700/30 hover:border-navy-600/50 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-xl">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="relative z-10 text-5xl mb-4">{benefit.icon}</div>
                
                {/* Content */}
                <h3 className="relative z-10 text-2xl font-bold text-slate-100 mb-3">
                  {benefit.title}
                </h3>
                <p className="relative z-10 text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-navy-500/50 to-transparent opacity-0 group-hover:opacity-100 animate-border-slide-horizontal"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes border-slide-horizontal {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-border-slide-horizontal {
          animation: border-slide-horizontal 3s linear infinite;
        }
      `}</style>
    </section>
  )
}