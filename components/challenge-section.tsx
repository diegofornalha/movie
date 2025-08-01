"use client"

import { useEffect, useRef, useState } from "react"

export function ChallengeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-blue-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold mb-2">DESAFIO RESOLVIDO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
            O{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">DESAFIO 5</span>{" "}
            que toda empresa enfrenta
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-4xl mx-auto">
            Como escalar o atendimento mantendo a qualidade, sem contratar dezenas de funcionários?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Problem */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-8 border border-red-700/30">
              <h3 className="text-2xl font-bold text-red-400 mb-6">Métodos Tradicionais</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-slate-400">Contratar mais funcionários = custos altos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-slate-400">Treinamento demorado e caro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-slate-400">Qualidade inconsistente no atendimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-slate-400">Planilhas e processos manuais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">•</span>
                  <span className="text-slate-400">Horário limitado de funcionamento</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Solution */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Funcionários IA</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-slate-400">Crie funcionários IA ilimitados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-slate-400">Configuração em minutos, não meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-slate-400">Qualidade consistente sempre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-slate-400">Automação inteligente completa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span className="text-slate-400">Disponível 24/7 sem parar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Resolva o DESAFIO 5 hoje mesmo</h3>
            <p className="text-slate-400 mb-6">
              A partir de R$97/mês você tem funcionários IA trabalhando para sua empresa
            </p>
            <a
              href="https://wa.me/5521936182339?text=Quero%20resolver%20o%20DESAFIO%205"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-700/30 overflow-hidden group"
            >
              {/* Animated border */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-border-slide-horizontal"></div>
              </div>

              <span className="relative z-10">Resolver DESAFIO 5 agora →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
